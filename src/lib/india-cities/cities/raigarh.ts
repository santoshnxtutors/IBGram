import type { CitySeoPage } from "../types";

/**
 * /raigarh/ - IB and IGCSE tutoring page for Raigarh, Chhattisgarh. No IB or Cambridge/Edexcel IGCSE
 * school in Raigarh could be confirmed, so stripSchools is empty and the clusters point honestly to
 * Raipur, Nagpur and Kolkata. Rendered with the shared CountryLanding layout.
 */
export const raigarh: CitySeoPage = {
  slug: "raigarh",
  countryName: "Raigarh",
  countryNameLong: "Raigarh, Chhattisgarh",
  demonym: "Raigarh",
  state: "Chhattisgarh",
  stateCode: "IN-CT",
  flagCode: "in",
  countryCode: "IN",
  region: "Chhattisgarh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timed for Raigarh's school day, the fierce May heat and the Ganesh Chaturthi and Navratri weeks when the whole town slows down",
  lastUpdated: "2026-09-21",
  geo: { latitude: 21.8974, longitude: 83.3950 },
  wikipedia: "https://en.wikipedia.org/wiki/Raigarh,_Chhattisgarh",
  alternateNames: ["Raigarh Chhattisgarh", "Raigad Chhattisgarh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Raigarh | Private Tuition Online",
  metaDescription:
    "Online IB and IGCSE tutors for Raigarh, Chhattisgarh: Diploma, MYP, PYP, Cambridge and Edexcel subjects, one-to-one from home, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Raigarh",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR RAIGARH FAMILIES",
  heroSubtitle:
    "If you want private tuition at home for an IB or IGCSE course in Raigarh, the practical answer is a live video class with a specialist who already teaches it. Steel, power and coal families, university households and returnees from bigger cities all use the same format: one child, one tutor, one screen, on Indian time.",
  primaryKeyword: "IB and IGCSE tutors in Raigarh",
  imageAltText: "A Raigarh student revising IB Chemistry notes during a live one-to-one online tutoring session",
  secondaryKeywords: [
    "IB tutor Raigarh",
    "IGCSE tutor Raigarh",
    "IB home tuition Raigarh",
    "IGCSE home tuition Raigarh",
    "IB private tuition Raigarh",
    "IB Maths tutor Raigarh",
    "IGCSE Maths tutor Raigarh",
    "IB Physics tutor Raigarh",
    "IB Chemistry tutor Raigarh",
    "IB Biology tutor Raigarh",
    "IB DP tutor Raigarh",
    "IB MYP tutor Raigarh",
    "IB PYP tutor Raigarh",
    "IGCSE online tuition Raigarh",
    "IB tutor Raigarh Chhattisgarh",
    "IB tutor Punjipatra Raigarh",
    "IGCSE tutor Kotra Road Raigarh",
    "online IB tutor Kharsia Raigarh",
  ],

  heroTrustPoints: [
    "Tutors selected by syllabus and level, not by who happens to live in Raigarh",
    "Video lessons only; nobody visits homes in Raigarh",
    "A free first class so you see the teaching before paying",
    "Independent of the IB, Cambridge, Pearson and every school named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Full IB continuum" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Indian time, always" },
    { value: "Free class", label: "Try before you book" },
  ],

  intro: {
    heading: "Where IB and IGCSE tuition fits in a steel and power town like Raigarh",
    paragraphs: [
      "Raigarh is not a place people associate with international schooling. It is known for jute, for the Jindal group's steel and power plants at Punjipatra and Kharsia Road, for the Kathak gharana that grew under its old ruling family and for the ten-day Chakradhar Samaroh held every Ganesh Chaturthi. Its schools follow the Chhattisgarh board and CBSE. We could not confirm a school here that teaches the IB or a Cambridge or Edexcel IGCSE course.",
      "The result is a real, if small, group of families with nowhere local to send an international syllabus. Engineers and managers posted to the plants from other states arrive with children in the middle of a programme. Doctors at the medical college and faculty at O.P. Jindal University sometimes do the same. Local business families, meanwhile, plan for their children to study in the UK, Canada or Australia and want the grades that make it possible.",
      "For all of them, tuition at home means a live online lesson. Tutors do not visit homes in Raigarh; visits are limited to Gurugram and parts of Delhi NCR. That is a smaller compromise than it sounds, because the subject specialist a Raigarh family needs is unlikely to live within an hour's drive, and a video call reaches them anyway.",
      "IB Gram is an independent tutoring service with no affiliation to the IB, Cambridge, Pearson or any named school. Tutors coach students and never write internal assessments, Extended Essays, TOK essays or coursework for them.",
    ],
    bullets: [
      "Coverage of IB PYP, MYP, DP and Cambridge and Edexcel IGCSE",
      "Lessons run online in Raigarh; visits at home exist only in Gurugram and parts of Delhi NCR",
      "Short written feedback after every class",
      "Change of tutor on request",
      "Rates shared in writing before you commit",
    ],
  },

  programmesIntro:
    "A Raigarh child meets these programmes in three ways: through a family transfer, through a plan to change schools, or through a deliberate decision to study an international qualification privately. The tutor's role shifts slightly in each case.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class KG-5, ages 3-12",
      description:
        "Young learners explore themes such as where we are in place and time through inquiry, and the programme closes with a group Exhibition. Tutoring keeps literacy, number work and curiosity moving together.",
      countryNote:
        "Requests from Raigarh usually involve a child who began PYP in Mumbai, Bengaluru or overseas and now lives near a plant township, with no classroom continuing the approach.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Work is judged against four published criteria in every subject, and Year 5 students complete a Personal Project. Coaching turns knowledge into structured, evidence-backed answers.",
      countryNote:
        "In a town without an MYP school, the tutor explains the criteria in simple terms and shows the student how top-band answers are built.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects, plus TOK, the Extended Essay and CAS, make up the Diploma. Final grades combine written papers with internal assessments.",
      countryNote:
        "Diploma enquiries from Raigarh come mainly from engineering, steel-industry and medical families, so Mathematics, Physics, Chemistry and Biology lead demand.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pair of Diploma-level courses is combined with career-related study, service and a reflective project. Few Indian schools run it.",
      countryNote:
        "We know of no CP school around Raigarh, so any tutoring supports the academic courses within the pathway.",
    },
  ],

  subjectsIntro:
    "Share the exact subject, level and specification code. HL Physics and SL Physics are different teaching jobs, and so are the two Mathematics courses, so the match starts from your child's actual timetable.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus, vectors and proof are covered in order, and students learn to present full working that earns method marks even when a final answer slips." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistical tests, financial models and graphing tools are used constantly, so lessons include reading calculator output and explaining what it means." },
    { name: "IB Physics", levels: "HL / SL", description: "Waves, circuits, thermodynamics and fields are worked through with numerical problems; the tutor also keeps an eye on units and sensible estimation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, reaction rates and organic chemistry are built up gradually, with regular use of the data booklet so it becomes second nature." },
    { name: "IB Biology", levels: "HL / SL", description: "Definitions must be precise, so students rehearse key terms and learn to answer exactly what the command word asks." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams are drawn quickly and labelled properly, then linked to real-world cases such as commodity prices and industrial policy." },
    { name: "IB Business Management", levels: "HL / SL", description: "Students practise applying tools such as SWOT and break-even analysis to unfamiliar cases in exam conditions." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Guided analysis of unseen texts, paired with essay planning and oral practice, builds fluency step by step." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming concepts, system design and data handling are taught alongside the exam's pseudocode conventions." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies are learned with method and evaluation, and answers are structured in a way examiners reward." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Relevant to a mining and steel region, this course asks students to weigh evidence about resources, pollution and sustainability." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and argument-led essays are practised regularly, with attention to how much detail each mark deserves." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Students strengthen formal writing, comprehension and speaking, which builds on the Hindi and Chhattisgarhi they hear at home." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Tutors question and discuss ideas so the student can find their own examples; writing the essay and preparing the exhibition remain the student's work." },
  ],

  igcseSubjectsIntro:
    "IGCSE in Raigarh is mostly taken privately, either alongside a Chhattisgarh board or CBSE school or in preparation for a move. Deciding on tier and board comes first, and tutors help families make that choice.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier students practise algebra, geometry and statistics until working becomes fast and tidy." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A step up into calculus and trigonometry, suited to students who want a strong base before the Diploma or A Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Tutors familiarise students with the Edexcel style of question and give focused practice on each paper." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Electricity, motion and thermal energy are revisited with calculation sets and graph interpretation." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Acids, metals, rates and organic families are reviewed together with the practical-skills paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, human systems and ecology are reinforced with self-drawn diagrams and short recall tests." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Market forces and government policy are explored using examples students recognise from Indian industry." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Students learn to apply concepts to the case study rather than recite definitions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Algorithms, binary and networks are practised before students move on to programming exercises." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Writing tasks and comprehension are marked in detail and revised until the student's control of tone improves." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Structured practice in writing and reading gives students a secure grade in a familiar language." },
  ],

  regionsTitle: "Raigarh areas we support with online IB and IGCSE tuition",
  regionsIntro:
    "Because lessons are online, this list describes context, not distance: the kind of households in each area, and the daily rhythms that influence when a lesson works best.",
  regions: [
    { name: "Kotra Road", note: "A long residential and commercial corridor where many families live; students often manage school, tuition and market trips along the same road." },
    { name: "Punjipatra", note: "The area around the O.P. Jindal campuses and plant township, home to many corporate and university families who move between cities." },
    { name: "Chakradhar Nagar", note: "Named after the old ruling family that patronised Kathak; an established neighbourhood with a settled school-going population." },
    { name: "Ghantaghar area", note: "The busy town-centre stretch around the clock tower, popular with shopkeepers and business families." },
    { name: "Kirodimal Nagar", note: "Close to the government arts and science college, with a mix of student, teacher and administrative households." },
    { name: "Jute Mill area", note: "An older industrial locality where families with long ties to the mills and to public-sector employment live." },
    { name: "Kharsia Road", note: "The eastern approach towards the power plants and the town of Kharsia; plant employees often ask about continuity of syllabus." },
    { name: "Pussore", note: "A small industrial and coal-linked town to the east, where families rely on Raigarh for higher schooling." },
    { name: "Sarangarh", note: "A town southwest of Raigarh with its own school mix; students there sometimes study privately for specialised subjects." },
    { name: "Gharghoda", note: "A coal-belt town northeast of Raigarh where online tutoring saves long trips on busy roads." },
  ],

  schoolDisclaimer:
    "No school inside Raigarh is presented here as an IB or Cambridge/Edexcel IGCSE school because none could be confirmed. Schools named below are in other cities, shown only for context, and have no link with IB Gram.",
  schoolClusters: [
    {
      city: "Raigarh itself",
      note: "Schooling here is organised around the Chhattisgarh board and CBSE, including well-known residential campuses. We did not find a confirmed IB or IGCSE school, so international-syllabus students study through private online tuition.",
      schools: [],
    },
    {
      city: "Nearby: Raipur",
      note: "Raipur is roughly four to five hours away by road and has the state's larger school market, including one option we could confirm.",
      schools: ["Rungta International School, Raipur"],
    },
    {
      city: "Nearby: Nagpur",
      note: "Nagpur is a long trip by rail or road, but has a bigger set of international-curriculum schools that some Chhattisgarh families weigh for boarding or relocation.",
      schools: ["D Y Patil International School, MIHAN", "VIBGYOR World Academy, Nagpur"],
    },
    {
      city: "Nearby: Kolkata",
      note: "Kolkata, reached by an overnight train, has a long tradition of IB and Cambridge schooling. Families with long-term plans sometimes consider it for the senior years.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
  ],

  modesIntro:
    "Raigarh families tend to pick one of three arrangements. Each uses live video with a single tutor, and each answers a different need.",
  modes: [
    {
      title: "One regular slot each week",
      description:
        "A fixed lesson time, the same tutor and steady progress through the specification.",
      bullets: [
        "Works for DP, MYP and IGCSE courses",
        "Whiteboard and screen-sharing used in every lesson",
        "Homework marked between lessons",
        "Builds a stable relationship over the year",
      ],
    },
    {
      title: "A second syllabus alongside school",
      description:
        "For students who attend a CGBSE or CBSE school and study an international course separately.",
      bullets: [
        "Content follows the target syllabus, not the school's",
        "Slots avoid school test weeks",
        "Short monthly note for parents",
        "Supports later moves to an international school",
      ],
    },
    {
      title: "Pre-exam sprint",
      description:
        "A tightly scheduled run of sessions with timed papers, marking and re-testing.",
      bullets: [
        "Official mark schemes used throughout",
        "Weak topics repeated until secure",
        "Best begun a month before exams",
        "Scheduled to avoid festival weeks and peak heat",
      ],
    },
  ],

  sections: [
    {
      heading: "What is the school picture in Raigarh for international curricula?",
      paragraphs: [
        "Raigarh's school market is stronger than its size suggests, thanks to industry. The Jindal group's presence has brought well-resourced residential and day schools, and the town has the usual mix of government, Hindi-medium and private English-medium options. All of them, as far as we could confirm, follow CGBSE or CBSE.",
        "That makes an IB or Cambridge student unusual. There is no classmate to compare notes with, no teacher who has marked the paper and no school library stocked with the right past papers. Families sometimes find that even the exam registration process is unfamiliar to local staff.",
        "The households in this position are usually one of three kinds. Some belong to industry, meaning managers and engineers posted in from other states. Some are academic or medical, linked to the university and the medical college. The third group are business families with relatives overseas, who see a Cambridge or IB qualification as a smoother route abroad.",
        "For all of them, private online tuition fills the gap that a school would normally fill. It provides a teacher who knows the paper, past-paper marking to the right scheme and a schedule shaped around the child rather than a class of thirty.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Raigarh",
        "Industry, university and business families are the main audience",
        "Private online tuition replaces the missing school class",
        "Registration help comes from the exam board and centre, not from tutors",
      ],
    },
    {
      heading: "CGBSE, CBSE, IB or IGCSE: what changes when a Raigarh student switches?",
      paragraphs: [
        "The switch matters more in method than in content. A CGBSE or CBSE student is used to studying a defined textbook and reproducing what it says, sometimes word for word. IB and IGCSE questions are set to test whether the student can use the same idea in an unfamiliar situation.",
        "Students moving over often find that Mathematics feels harder because fewer questions look like the examples, and that Science needs neater working, correct units and explicit reasoning. English becomes more demanding because writing is graded on style and structure, not only on covering the points.",
        "The table below gives a quick side-by-side view that parents in Raigarh find helpful. It is general, since individual schools differ, but it captures the main contrasts.",
        "A good tutor spends the first few sessions working on these habits, using past papers to show what a strong answer looks like and where marks tend to be lost.",
      ],
      table: {
        caption: "What changes between local boards and international syllabuses",
        columns: ["Aspect", "CGBSE and CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Typical exam question", "Recall or apply a textbook method", "Analyse, evaluate, explain reasoning", "Structured, with command words"],
          ["Internal work", "Practicals and projects vary", "IAs, Extended Essay, TOK", "Coursework only in some subjects"],
          ["Language of instruction", "Hindi or English", "English (with language courses)", "English (with language options)"],
          ["Local availability in Raigarh", "Widely available", "Not confirmed", "Not confirmed"],
        ],
      },
    },
    {
      heading: "What determines the cost of IB or IGCSE tuition in Raigarh?",
      paragraphs: [
        "No published price list appears here. Rates vary with the tutor, the subject and the schedule, and giving a single figure would mislead more families than it helped. We send a written quotation after you describe your child's course and goals.",
        "Subject and level carry the most weight. HL Chemistry, HL Mathematics or Cambridge Additional Mathematics require experienced tutors, and their rates reflect that. Early primary or MYP support draws from a larger pool and typically costs less. Language lessons, such as Hindi B or IGCSE English, fall somewhere in between.",
        "The pattern of study also matters. Long-term weekly lessons are planned to last, and a family may decide to pause over summer or festivals. Short intensive blocks before an exam pack more hours into fewer weeks, which changes the weekly cost but often reduces the total time spent.",
        "Raigarh students do not pay a commute cost or a location premium, since lessons are online. Because the first class is free and a change of tutor is available, a family can try the arrangement without a long financial commitment.",
      ],
      bullets: [
        "Subject and level set the range",
        "Lesson frequency and duration affect the total",
        "Written quotation before booking",
        "Free first class; no location or travel charge",
      ],
    },
    {
      heading: "How does online tuition compare with a coaching institute or a local tutor?",
      paragraphs: [
        "Raigarh has coaching institutes and many experienced private teachers, but they are built around NEET, JEE, CGBSE and CBSE. Those are strengths, not weaknesses, and for students following those routes they are the right choice.",
        "For IB and IGCSE the specific gap is knowledge of the syllabus. A local tutor who has never taught the Diploma may still be a fine teacher of Physics, yet the student will miss subtle points such as how HL papers reward extended reasoning or how IGCSE mark schemes treat units.",
        "The comparison below sets out the practical differences. It reflects what each option typically offers in a town of Raigarh's size, and no single choice suits every family.",
      ],
      table: {
        caption: "Study options for an international course in Raigarh",
        columns: ["Option", "Syllabus knowledge", "Marking and feedback", "Convenience"],
        rows: [
          ["Online one-to-one tutor", "Specific to the child's course", "Marked to official schemes", "No travel; needs stable internet"],
          ["Coaching institute", "Focus on NEET, JEE and boards", "Batch-based tests", "Fixed timetable, travel needed"],
          ["Local home tutor", "General subject skills", "Varies by tutor", "Flexible, small pool"],
          ["Independent study", "Self-taught from the specification", "None unless self-marked", "Fully flexible, slower progress"],
        ],
      },
    },
    {
      heading: "How do exam dates, heat and festivals shape the year in Raigarh?",
      paragraphs: [
        "Raigarh's summers are severe, and May, which is when most IB Diploma candidates in India sit their exams, tends to be the hottest month. Power cuts and heat can make long timed papers uncomfortable, so tutors advise students to rehearse under similar conditions in April.",
        "The festival calendar adds structure. Chakradhar Samaroh in Ganesh Chaturthi season transforms the town for ten days, Navratri and Durga Puja follow, and Diwali arrives soon after. Teaching is lighter during these periods, which is why we schedule the heaviest new content earlier in the term.",
        "Monsoon runs from June to September, with heavy rain some weeks. Internet and power can be unreliable, so we recommend a backup device and a phone hotspot. For the November series, families should confirm entries months in advance.",
        "The table shows a common yearly plan, adjusted for each child's board, exam session and school calendar.",
      ],
      table: {
        caption: "A study year for a Raigarh student aiming at the May session",
        columns: ["Period", "Main task", "Local factor"],
        rows: [
          ["July to September", "Cover new topics steadily", "Monsoon rain; Chakradhar Samaroh in Ganesh Chaturthi season"],
          ["October to November", "Finish content, start practice papers", "Navratri, Durga Puja and Diwali breaks"],
          ["December to February", "Mock papers and IA drafts", "Cool, dry weather that suits long study"],
          ["March to April", "Timed papers and weak-topic repair", "Heat builds; rehearse in warm conditions"],
          ["May to June", "Sit exams, then rest", "Peak heat; plan backup power"],
        ],
      },
    },
    {
      heading: "What are the university and career options after IB or IGCSE from Raigarh?",
      paragraphs: [
        "Grades from an international board lead to three main destinations: Indian universities, professional entrance exams and universities abroad. Each has rules that are worth learning early, and each changes from year to year.",
        "For Indian universities, IB Diploma holders normally need an equivalence certificate from the Association of Indian Universities when applying to public institutions, while a growing number of private universities accept IB scores directly. CUET-UG publishes eligibility rules for students from foreign boards. IGCSE students commonly continue into Class 11 in CBSE, ICSE or IB schools, or into A Level.",
        "A student who wants medicine or engineering must choose the right subjects: Physics, Chemistry and Biology for NEET-UG, Physics, Chemistry and Mathematics for JEE Main, and usually with English. Checking the current notification is essential before choosing Diploma subjects.",
        "For the UK, applications run through UCAS; for the United States through the Common Application; for Canada and Australia through direct or provincial systems. Predicted grades matter. Tutors focus on the classroom results that support those applications.",
      ],
      bullets: [
        "AIU equivalence for many Indian public universities",
        "NEET-UG, JEE Main and CUET-UG each have subject and board rules",
        "UCAS, Common App and direct applications abroad",
        "Confirm current rules with each institution before choosing subjects",
      ],
    },
    {
      heading: "How are IB Physics, Chemistry, Biology and Mathematics taught to a Raigarh student?",
      paragraphs: [
        "A typical online lesson pairs a shared digital whiteboard with the student's own paper. The tutor explains a concept, sets a problem, watches the student attempt it and comments on the working. Because the student writes by hand, the tutor sees mistakes that typed answers would hide.",
        "In the sciences, the three tasks are learning the concepts, memorising precise definitions and equations, and running a practical investigation. Tutors help with the first two directly. For the investigation, they discuss experimental design, data handling and evaluation in general terms while leaving the write-up to the student.",
        "Mathematics students choose between Analysis and Approaches and Applications and Interpretation. The first is heavier on algebra and calculus and is the usual choice for engineering and pure science. The second focuses on statistics and modelling and suits business, social science and design pathways. Tutors advise on the choice with the student's intended course in view.",
        "Sessions normally last an hour, ending with a task to complete before the next class. Photographs of handwritten work can be shared for marking between lessons.",
      ],
    },
    {
      heading: "IGCSE Core, Extended and subject selection: how should a Raigarh family decide?",
      paragraphs: [
        "The tier is the biggest decision. Core papers are capped at grade C, and Extended papers reach the top grades. Students planning A Level, the IB Diploma or competitive Indian streams should aim for Extended in Mathematics and the sciences.",
        "Core is reasonable for students who find a subject hard, need to secure a pass or take a subject for breadth. Tutors watch progress through the first term and can suggest a change before entry deadlines.",
        "Subject choice usually starts with English, Mathematics and two or three sciences, with a business, economics or computer science subject added. Many Raigarh families add Hindi as a second language to secure a strong grade.",
        "Board choice matters too. Cambridge tends to use structured, command-word driven questions, while Edexcel has its own style and tier names. We assign a tutor experienced with the specific board.",
      ],
    },
  ],

  process: [
    { title: "Send the details", description: "Write to us with the programme, subject, level and exam session." },
    { title: "Review a shortlist", description: "We propose a tutor who already teaches the same syllabus." },
    { title: "Take a trial lesson", description: "Attend a full class free of charge to judge the fit." },
    { title: "Agree the plan", description: "Fees, schedule and goals are sent to you in writing." },
    { title: "Study with feedback", description: "Regular lessons, written notes and a tutor change on request." },
  ],

  whyPoints: [
    { title: "Right specialist, wherever they live", description: "You are not limited to whoever teaches near Kotra Road or Punjipatra." },
    { title: "Clear about local options", description: "No IB or IGCSE school in Raigarh is claimed; we say what we could and could not confirm." },
    { title: "Feedback after each lesson", description: "A brief written note lists topics covered and next steps." },
    { title: "Try before paying", description: "The first class is free, with no pressure afterwards." },
    { title: "Built around your calendar", description: "Lessons avoid festivals, heat waves and school test weeks." },
    { title: "Coaching, not ghostwriting", description: "Tutors never write a student's assessed work." },
  ],

  tutorsIntro:
    "Every tutor teaches from India on Indian Standard Time, so timing is straightforward for a Raigarh family. We share a short profile before the trial and choose by syllabus, level and teaching style.",

  faqs: [
    { question: "Do tutors visit homes in Raigarh?", answer: "No, tutors do not visit homes in Raigarh. Home visits are limited to Gurugram and parts of Delhi NCR. Raigarh students study through live online one-to-one lessons taken at home, which lets families choose a specialist from anywhere in India instead of relying on whoever is available locally." },
    { question: "Is there an IB or IGCSE school in Raigarh?", answer: "We could not confirm any IB, Cambridge or Edexcel IGCSE school in Raigarh. Schools here follow the Chhattisgarh board or CBSE. Since authorisations change, check the IB and Cambridge school directories directly. Meanwhile, families follow international syllabuses through private online tuition or by studying in another city such as Raipur or Nagpur." },
    { question: "How do I find an IB or IGCSE tutor for Raigarh?", answer: "Send the programme, subject, level and exam date to support@ibgram.com or +91 7439 368 115 on WhatsApp. We shortlist a tutor who already teaches that syllabus, arrange a free trial lesson and confirm rates in writing. The tutor need not live in Raigarh, which makes a specialist match realistic." },
    { question: "How much does IB tuition cost in Raigarh?", answer: "Rates depend on the tutor's experience, the subject and level and how often the student studies. We quote in writing before booking, and the trial lesson is free. Higher Level science and Mathematics tend to cost more than primary-level support. Online delivery means no travel expense for your family." },
    { question: "Can my child take IGCSE exams from Raigarh?", answer: "Yes, through an approved centre that accepts private candidates, usually in a larger city. Cambridge and Pearson Edexcel publish centre lists and entry deadlines. Ask about practical papers and fees when you contact a centre. Tutors prepare your child for the papers, while registration is your responsibility." },
    { question: "Which IB subjects do Raigarh families ask about?", answer: "Physics, Chemistry, Mathematics and Biology are asked about most, matching engineering and medical goals. Economics, Business Management and Environmental Systems and Societies follow, along with English and Hindi. Requests for Theory of Knowledge and Extended Essay help are common, though tutors only guide thinking and structure." },
    { question: "Can IB students from Raigarh apply for NEET or JEE?", answer: "It depends on subject choices and the current rules of the exam agencies and universities, which change. Generally, students need the right science subjects and an equivalence certificate for many Indian institutions. Choose Diploma subjects with this in mind and confirm the latest notification with the relevant body." },
    { question: "Is tuition affected by summer heat and power cuts?", answer: "It can be. May temperatures in Raigarh are severe, and power cuts interrupt some sessions. We recommend a charged laptop, a phone hotspot and a cool room for timed papers. If a lesson is lost, the time is rescheduled and the written note records what was covered before the interruption." },
    { question: "Do tutors write IAs, essays or coursework?", answer: "No. Tutors coach and never write assessed work. They can explain criteria, question a research plan and comment on drafts in general terms, but every word must be the student's own. This protects students from academic misconduct penalties." },
    { question: "Can a younger child begin IGCSE preparation early?", answer: "Yes. Starting in Class 8 or 9 gives time to build skills such as showing working, reading command words and writing structured answers. Tutors keep early lessons light and increase past-paper work later. A trial lesson reveals how the child responds." },
    { question: "What internet connection do I need?", answer: "A steady connection of around 5 Mbps is usually enough. Broadband or strong Wi-Fi works better than mobile data. Keep a phone hotspot as a backup. Interrupted lesson time is rescheduled without charge." },
    { question: "Will the tutor understand Hindi and Chhattisgarhi-speaking students?", answer: "Lessons are in English because the exams are, but tutors are Indian and can clarify a hard idea in Hindi when it helps. The aim is to build comfortable exam English gradually, with IB Hindi B or IGCSE Hindi available alongside the main subjects." },
    { question: "How often should we schedule lessons?", answer: "One weekly lesson plus homework suits a steady course. Before an exam, two to four lessons a week for around a month is common. Tutors review progress from past papers and advise on changes, and you can adjust the schedule with written notice." },
    { question: "Which IGCSE boards do you cover?", answer: "Both Cambridge International and Pearson Edexcel IGCSE, with A Level and AS as context. Tell us which board your child is entered with and we match a tutor familiar with it. If your child switches boards, we can re-match." },
    { question: "How do I start with a free trial?", answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with your child's class, board, subject and a convenient time. We arrange a trial, usually within a few days, with no obligation. If the tutor is not right, ask for a different one before booking." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "All Indian cities we serve online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Overview of IB tutoring." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "DP subjects and core components." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and Personal Project help." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led support for younger children." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI Mathematics at HL and SL." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of IB and IGCSE specialists." },
    { label: "Contact us", href: "/contact-us/", description: "WhatsApp or email to book a trial." },
    { label: "IB and IGCSE tutors in Raipur", href: "/raipur/", description: "Our page for the state capital." },
    { label: "IB and IGCSE tutors in Bilaspur", href: "/bilaspur/", description: "Our page for the nearby Chhattisgarh city." },
    { label: "IB and IGCSE tutors in Korba", href: "/korba/", description: "Our page for the Korba coal and power town." },
  ],

  closingHeading: "Try a free IB or IGCSE lesson from Raigarh",
  closingBody:
    "Tell us the programme, subject and exam session, and we will introduce a tutor who teaches that syllabus. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com, and the first lesson costs nothing.",
};
