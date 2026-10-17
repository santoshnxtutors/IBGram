import type { CitySeoPage } from "../types";

/**
 * /giridih/ - IB and IGCSE tutoring page for Giridih, Jharkhand. No school in Giridih is confirmed to
 * teach IB or Cambridge/Edexcel IGCSE, so stripSchools is empty; clusters use Kolkata and Delhi NCR
 * boarding routes (names reused from the verified Dhanbad, Deoghar and Ranchi pages). All lessons online.
 */
export const giridih: CitySeoPage = {
  slug: "giridih",
  countryName: "Giridih",
  countryNameLong: "Giridih, Jharkhand",
  demonym: "Giridih",
  state: "Jharkhand",
  stateCode: "IN-JH",
  flagCode: "in",
  countryCode: "IN",
  region: "Jharkhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are placed around JAC exam weeks, Chhath and Durga Puja, and the pilgrim-season traffic that fills the roads near Parasnath",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.1913, longitude: 86.3 },
  wikipedia: "https://en.wikipedia.org/wiki/Giridih",
  alternateNames: ["Giridih Jharkhand", "Giridih town"],
  stripSchools: [],

  title: "Giridih IB & IGCSE Tutors | Online One-to-One Tuition",
  metaDescription:
    "IB and IGCSE tutors for Giridih students: live online private tuition from home, matched to your board and subject, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Giridih",
  heroEyebrow: "GIRIDIH IB & IGCSE ONLINE HOME TUITION",
  heroSubtitle:
    "Private tuition from home for Giridih students on the IB or IGCSE: a one-to-one online lesson with a specialist who knows your exact syllabus. The lesson runs on a laptop at your own study table, so nobody has to cross the Barakar side of town in the evening or send a child to Dhanbad or Ranchi for a class.",
  primaryKeyword: "IB and IGCSE tutors in Giridih",
  imageAltText: "A Giridih student studying IGCSE Physics with a tutor over a live video lesson at home",
  secondaryKeywords: [
    "IB tutor Giridih",
    "IGCSE tutor Giridih",
    "IB home tuition Giridih",
    "IGCSE home tuition Giridih",
    "IB private tuition Giridih",
    "IB Maths tutor Giridih",
    "IGCSE Maths tutor Giridih",
    "IB Physics tutor Giridih",
    "IB Chemistry tutor Giridih",
    "IB Biology tutor Giridih",
    "IB DP tutor Giridih",
    "IB MYP tutor Giridih",
    "IB PYP tutor Giridih",
    "IGCSE online tuition Giridih",
    "IB tutor Pachamba",
    "IGCSE tutor Barganda",
    "online IB tutor Giridih Jharkhand",
    "Cambridge IGCSE tutor Giridih",
    "Edexcel IGCSE tutor Giridih",
  ],

  heroTrustPoints: [
    "Every tutor has taught the specific IB subject or IGCSE syllabus code before",
    "All lessons are online; a tutor does not visit a home in Giridih, as visits exist only in Gurugram and parts of Delhi NCR",
    "You get a short written summary after each lesson",
    "A tutor swap is one message away if the fit is not right",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "Every IB stage covered" },
    { value: "Two boards", label: "Cambridge and Pearson Edexcel IGCSE" },
    { value: "Evenings in IST", label: "After school and coaching hours" },
    { value: "Free trial", label: "Taught before any decision" },
  ],

  intro: {
    heading: "Online IB and IGCSE tuition at home for Giridih families",
    paragraphs: [
      "When Giridih parents search for IB or IGCSE home tuition, they are usually facing a familiar problem: a child who needs a specialist and a town that has few of them. The workable answer is a live online lesson, one student and one tutor, taught to the exact IB subject or Cambridge or Edexcel code, with the child at home and the teacher in another Indian city.",
      "Giridih is a Jharkhand district town shaped by coal, mica and the Jain pilgrimage to Parasnath. Its schools follow the Jharkhand Academic Council, CBSE or ICSE. We have not confirmed any school in Giridih that teaches the IB or IGCSE, which is why the families who ask about these boards are mostly planning a move, a boarding school elsewhere, or study abroad.",
      "That shapes how we work. There is no point advertising a tutor around the corner when the syllabus is not taught around the corner. Instead we look for the tutor who has actually taught IB Physics HL or IGCSE Additional Mathematics, and we put the two of them in a video room at a time that works for Giridih.",
      "IB Gram is independent. It does not act for the IB, Cambridge, Pearson or any school, and tutors never write Internal Assessments, Extended Essays or coursework for a student. They coach, explain and give feedback.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "One-to-one lessons over video, taught in IST",
      "Free trial lesson, then rates confirmed in writing",
      "No in-person visits in Giridih; those run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Giridih families usually meet these programmes from the outside: through a cousin in Bengaluru, a posting that will move the family, or an offer letter from a boarding school. The descriptions below explain what each stage asks of a student so you can judge how much preparation is needed.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-11",
      description:
        "There are no formal exams. Children explore big ideas through inquiry units, present what they find, and complete a final Exhibition. Tutoring at this age is light: reading aloud, simple writing tasks, number games and a habit of asking why. It suits a child who will join a PYP school later or who is returning from one.",
      countryNote:
        "For a Giridih child, PYP tutoring often means keeping English reading and number fluency on track while the family waits for a relocation.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers mark each subject on four criteria, and students receive a grade of 1 to 7. Assessment includes tasks such as investigations, essays and lab reports, and the last year has a Personal Project. A student used to a board that rewards memorised answers needs practice explaining, comparing and justifying.",
      countryNote:
        "Preparing for MYP entry from a JAC or CBSE school usually means building lab-report writing and improving spoken and written English.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects plus the core of Theory of Knowledge, the Extended Essay and CAS. Grades of 1 to 7 per subject add up to a maximum of 45 points, with core points possible. Papers are sat in May or November, and internal assessments are marked by the school and moderated.",
      countryNote:
        "Giridih DP students are normally at school in Kolkata, Ranchi or further away and study with a tutor at home during breaks and weekends.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "CP students take at least two Diploma courses, a career-related qualification, and a core that includes a reflective project. Schools in India rarely offer it, but the Diploma subjects inside it are taught at full depth.",
      countryNote:
        "CP enquiries from Giridih are rare; where they occur, we treat the Diploma subjects exactly like a DP request.",
    },
  ],

  subjectsIntro:
    "A short message such as 'need IB tutor' leaves too much unanswered. Tell us the subject, whether it is Higher or Standard Level, the exam session and the school's own timetable, and the match becomes precise. These are the subjects Giridih families raise most.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Proof, calculus and functions. Students from JEE-oriented backgrounds are usually strong on procedure but need practice on the wordier Paper 3 style and on the exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling with real data, statistical tests and technology. It suits students who prefer context over abstraction." },
    { name: "IB Physics", levels: "HL / SL", description: "Concepts first, numbers second. Tutors spend time on graph skills, uncertainty and the design of the internal investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, kinetics, equilibrium and organic pathways, with a heavy dose of data-booklet fluency." },
    { name: "IB Biology", levels: "HL / SL", description: "A large content load. Tutoring helps with structuring long answers and reading experimental data." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams, evaluation and applying theory to current examples, such as mining regions and their local economies." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based papers where the student must use business tools on unfamiliar organisations." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis and comparative essays, good for students who think in Hindi and must sharpen written English." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming logic and a structured internal project." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research methods and studies, expressed in disciplined essays." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems, resources and sustainability, well suited to a region where mining and forest cover shape daily life." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis and essay structure across twentieth-century topics." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Reading, writing and speaking practice for students who already have strong Hindi and need to meet the exam format." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies, data skills and fieldwork planning." },
  ],

  igcseSubjectsIntro:
    "IGCSE students in Giridih should first find out which board their school or target school uses, Cambridge or Pearson Edexcel, since the papers and tiers are different. These are the courses most often requested.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Cambridge's Maths in two tiers, with calculator and non-calculator papers. Speed with algebra and accurate working are the main goals." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "A stretch course for strong students, introducing calculus and vectors early." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Pearson's Maths, two 2-hour papers, with clear structure and a strong emphasis on method marks." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, forces, electricity and waves, with an alternative to practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "The periodic table, reactions, rates and organic chemistry." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Life processes, genetics and ecology, tested in structured and extended answers." },
    { name: "IGCSE English as a Second Language 0510", levels: "Core / Extended", description: "Reading, writing and speaking for Hindi-speaking students." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Logic, programming basics and data." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business activity, marketing, finance and case-based questions." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Language skills for students who wish to bank a Hindi qualification alongside their sciences." },
  ],

  regionsTitle: "Giridih neighbourhoods and blocks our tutors serve online",
  regionsIntro:
    "Lessons happen on the student's own laptop, so a locality changes nothing about who can be matched. It does change timing, school context and connectivity, and the notes below reflect how families in each area tend to organise the day.",
  regions: [
    { name: "Pachamba", note: "One of the busier residential and commercial pockets of the town; most students here already juggle school, Dhanbad-style coaching and tuition, so evening slots are booked early." },
    { name: "Barganda", note: "A mining and railway-linked locality where working families value a fixed weekly slot that does not clash with shift patterns." },
    { name: "Tikodih", note: "A residential area on the town's fringe; students commonly join one school-plus-tuition routine and rarely have a free weekday evening." },
    { name: "Hirodih", note: "Coal-belt housing where household schedules follow shifts, so weekend mornings are popular for longer online sessions." },
    { name: "Madhuban and the Parasnath foothills", note: "The pilgrim base for the Jain shrines on Parasnath Hill; pilgrim seasons bring crowds and network strain, so a backup connection is wise." },
    { name: "Dumri", note: "A block town towards Parasnath where online tuition can be the only route to an international-board specialist." },
    { name: "Bengabad", note: "A block in the district where families often travel to Giridih town or Dhanbad for schooling, and online lessons save that journey." },
    { name: "Gawan and Jamua side", note: "Rural stretches where mobile data is the main connection; compact, focused sessions and downloadable notes suit them best." },
  ],

  schoolDisclaimer:
    "Schools named on this page are shown only to explain where families in and around Giridih look for IB and IGCSE classrooms. IB Gram has no agreement with any of them, and it is not part of the IB, Cambridge or Pearson. Please confirm programmes and admissions with each school directly.",
  schoolClusters: [
    {
      city: "Local: Giridih town",
      note: "We could not confirm any Giridih school that teaches the IB or Cambridge or Edexcel IGCSE, and we prefer to name none rather than guess. Local options are JAC, CBSE and ICSE schools.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The long-standing destination for eastern Indian families who want an IB or IGCSE school, reachable by overnight train or a long drive.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "Oaktree International School"],
    },
    {
      city: "Nearby: Delhi NCR boarding schools",
      note: "Some Jharkhand families with boarding in mind look at established IB schools around Delhi NCR, where rail and air links are strong.",
      schools: ["Pathways World School", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "Giridih students learn in one format, online and private. The difference between families is the rhythm they choose: a steady weekly lesson, a term-long plan with written notes, or an intensive built around an exam.",
  modes: [
    {
      title: "Steady weekly lessons",
      description:
        "A regular slot each week with the same tutor, used to teach new topics, mark homework and clear doubts while they are fresh.",
      bullets: [
        "Same tutor throughout the course",
        "Lessons of forty-five to sixty minutes",
        "Shared whiteboard for all working",
        "Suitable for IB, IGCSE and younger MYP or PYP learners",
      ],
    },
    {
      title: "Term plan with progress notes",
      description:
        "A list of topics for the term, lesson by lesson, with a summary after each class and a check-in every few weeks.",
      bullets: [
        "Parents get a readable note",
        "Topic order can be changed at check-ins",
        "Fits students who also attend school-based coaching",
        "Extra revision can be added before a test",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "In the weeks before mocks or the May and November papers, sessions become more frequent and mostly consist of timed papers followed by careful marking.",
      bullets: [
        "Papers marked to the style of the official scheme",
        "Feedback returned within a day or two",
        "Planned outside Chhath, Puja and JAC exam weeks",
        "Best started three weeks before the paper",
      ],
    },
  ],

  sections: [
    {
      heading: "Can a tutor come to our house in Giridih for IB or IGCSE lessons?",
      paragraphs: [
        "No. IB Gram tutors do not visit homes in Giridih. In-person home tuition is available only in Gurugram and parts of Delhi NCR, where the tutor pool and travel logistics make it practical. In Giridih, private tuition from home means a live online lesson.",
        "That is not as thin as it sounds. In a typical session the tutor and student share a whiteboard, the student writes working on paper and shows it to the camera or a tablet, and the tutor corrects each line as it appears. Many students find they concentrate better than in a crowded room.",
        "What you need is modest: a laptop or tablet, a reliable connection, headphones and a table where the child can spread out papers. If a power cut or network drop occurs, tutors agree a fallback in advance, such as continuing by phone with photographs of working.",
        "The advantage over a local home tutor is choice. Giridih has capable teachers, but very few who have taught IB Chemistry HL or Edexcel Higher Maths. Online, the tutor with the right syllabus experience is available whether they live in Pune or Patna.",
      ],
    },
    {
      heading: "Which boards do Giridih students study, and how do they compare?",
      paragraphs: [
        "The main boards in and around Giridih are the Jharkhand Academic Council for state schools, CBSE for many private and central-government-affiliated schools, and ICSE in a smaller number of institutions. IB and IGCSE are international alternatives, available mainly in metro cities.",
        "JAC examinations are held in the early months of the year, with matriculation at Class 10 and intermediate at Class 12. CBSE and ICSE follow similar patterns. IB sits in May and November, and IGCSE in May-June and October-November, which means an international-board student can be sitting papers when local classmates are on holiday.",
        "The style of assessment differs sharply. State boards tend to reward recall of textbook material, while IB and IGCSE ask students to apply, compare and evaluate. This is the first thing a tutor addresses, and it usually takes several weeks of practice before a student adjusts.",
        "Choice of board should follow the child's plan, not fashion. A student aiming at Indian engineering entrance exams may be better served by CBSE with strong coaching, while one heading abroad or into a global career may find IB or IGCSE more useful.",
      ],
      table: {
        caption: "Boards compared for a Giridih household",
        columns: ["Board", "Typical exam style", "Main exam months", "Local availability"],
        rows: [
          ["JAC", "Textbook-based, recall-heavy", "Feb-Mar", "Widely available"],
          ["CBSE", "Structured, textbook with application", "Feb-Mar", "Available in private schools"],
          ["ICSE / ISC", "English-heavy, broader syllabus", "Feb-Mar", "Available in a few schools"],
          ["IGCSE", "Applied, subject-specific, two boards", "May-Jun, Oct-Nov", "Not confirmed locally"],
          ["IB Diploma", "Six subjects plus core, internal work", "May, November", "Not confirmed locally"],
        ],
      },
    },
    {
      heading: "What drives the price of IB and IGCSE tuition in Giridih?",
      paragraphs: [
        "The rate is set for each family, in writing, before booking. It depends on the level, since IB Higher Level courses require more specialised tutors than an IGCSE Core subject, on the subject itself, on how long each lesson is and on how many lessons a week you want.",
        "Tutor experience matters too. Someone who has taught the current syllabus, marked past papers and helped students through internal assessment can guide a student more efficiently than a generalist. Their rate reflects that, and so does the outcome, often in fewer hours needed.",
        "Compared with sending a child to Ranchi or Dhanbad for coaching, online lessons save fuel, travel time and the risk of a late-night return. For families weighing a boarding school, tutoring beforehand can also make the entry test less stressful.",
        "Begin with the free trial. If you want to continue, we quote the plan in writing and you can start with one subject. Adding others later is simple, and there is no lock-in.",
      ],
      bullets: [
        "IB Higher Level versus IGCSE Core or Foundation",
        "Subject and tutor experience with the specific syllabus",
        "Lesson length and number of sessions per week",
        "Exam-season intensives versus steady weekly plans",
      ],
    },
    {
      heading: "Online tutor, coaching class, local home tutor or self-study: which suits Giridih?",
      paragraphs: [
        "Coaching classes in Giridih focus on the JAC and CBSE syllabi and on JEE, NEET and other entrance tests. That is valuable if your child is on the Indian track, but it does not help with a syllabus they will not meet in a classroom until they move.",
        "Local home tutors provide personal attention and are easy to arrange, though the pool of people who have taught IB or IGCSE in Giridih is small. Where a good one exists, they can be a strong supplement to online lessons rather than a replacement.",
        "Self-study using past papers works for disciplined learners, especially in IGCSE Maths and sciences. It struggles with subjects that need written feedback, and with the internal assessments, where a student is asked to make judgements that only an experienced reader can check.",
        "Online private tutoring is the only option in this list that reliably reaches a specialist. Its limits are practical: a stable connection is essential, and younger children may need a parent nearby at the start.",
      ],
      table: {
        caption: "Ways to get IB or IGCSE help in Giridih",
        columns: ["Route", "Best for", "Weakness"],
        rows: [
          ["Online one-to-one tutor", "A named syllabus and board", "Needs steady internet"],
          ["Coaching class", "JAC, CBSE and entrance exams", "Rarely any IB or IGCSE batch"],
          ["Local home tutor", "General subject support", "Few with IB or IGCSE experience"],
          ["Self-study", "Motivated older students", "No feedback on essays and internal work"],
        ],
      },
    },
    {
      heading: "Giridih exam calendar: JAC weeks, Chhath, Puja and the hill-country climate",
      paragraphs: [
        "Giridih sits on the Chota Nagpur plateau at a modest elevation and is a little milder than the Dhanbad coal belt, though May can still be hot and the monsoon brings heavy rain. Winter evenings are cool and pleasant for study, which is why many families keep the December and January months for intensive catch-up.",
        "Two festivals matter especially. Chhath in October or November takes families out of routine for several days, and Durga Puja and Diwali cluster around the same time. Because the IGCSE October-November session and IB November exams fall close to these dates, revision should be planned for the weeks before, not squeezed into festival days.",
        "JAC examinations occupy many students in February and March. If your child is also at a JAC school, tutoring around that fortnight should be light and targeted. For international-board students attending school elsewhere, the calendar follows the school and holidays give the best chance for extended lessons.",
        "Pilgrim seasons around Parasnath bring visitors to Madhuban and strain roads and mobile networks, particularly in winter. Households near the hill are wise to keep a phone hotspot ready.",
      ],
      table: {
        caption: "A year for a Giridih IB or IGCSE student",
        columns: ["Months", "What is happening", "How tutoring adapts"],
        rows: [
          ["Jan-Feb", "Cool weather, school mocks, JAC exams start", "Catch-up lessons; light around JAC papers"],
          ["Mar-Apr", "New academic year, warming weather", "Set the year's plan; start topic sequences"],
          ["May-Jun", "IB May session, IGCSE May-June, heat", "Early evening slots; exam papers"],
          ["Jul-Sep", "Monsoon rains, internal assessment work", "Backup for connectivity; IA coaching"],
          ["Oct-Nov", "Chhath, Puja, IGCSE and IB November sessions", "Revise before festivals; pause for the days themselves"],
          ["Dec", "Winter holidays", "Longer sessions and consolidation"],
        ],
      },
    },
    {
      heading: "Where can a Giridih student go after IB or IGCSE?",
      paragraphs: [
        "Indian universities generally treat the IB Diploma and IGCSE-based Class 12 as valid if the student obtains an equivalence certificate from the Association of Indian Universities. Central universities accept IB Diploma holders for CUET-UG, and each institution publishes its own eligibility rules that should be checked in the year of application.",
        "For engineering, the important detail is the subject combination: Physics, Chemistry and Maths are needed for JEE Main, and NEET requires Biology alongside Physics and Chemistry. Students planning either should choose IB or A Level subjects accordingly, and should speak to the entrance body about board equivalence well before applying.",
        "Regional options include colleges in Ranchi, Dhanbad and Kolkata, and Birla Institute of Technology in Mesra is a name Jharkhand families often know. Abroad, IB and IGCSE are read easily by universities in the UK, Canada, Australia and Europe, and US colleges look at them alongside test scores and essays.",
        "The safest strategy at Class 9 or 11 is to keep options open: a strong Maths and science base, good English and one language that plays to the student's strengths.",
      ],
    },
    {
      heading: "How do IB Maths and the sciences get taught to a Giridih student?",
      paragraphs: [
        "Start with Maths. Analysis and Approaches draws on algebra, trigonometry and calculus, and students who have prepared for JEE find the content familiar but the way it is examined new. Applications and Interpretation is more statistical and uses a graphing calculator throughout.",
        "In Physics, a tutor will insist on units, significant figures and a clear diagram, then move on to experimental skill. Chemistry lessons alternate between calculation and explanation; a student who can do the mole calculation but cannot justify a trend will lose marks. Biology needs a steady rhythm of review and testing.",
        "Each science has an internal assessment, and tutors explain what the criteria reward while leaving design and writing to the student. A good investigation is narrow, measured carefully and honestly evaluated; a poor one tries to answer a large question with a small experiment.",
        "For Giridih students, practical access can be limited, so tutors also help with simulations, data sets and interpreting results when a full laboratory is not to hand.",
      ],
    },
    {
      heading: "Choosing between IGCSE Core, Extended, Foundation and Higher",
      paragraphs: [
        "Cambridge tiers are Core and Extended; Edexcel tiers are Foundation and Higher. Core and Foundation cap the top grade, while Extended and Higher open the full range. A student aiming for IB Diploma Maths or sciences should aim for Extended or Higher.",
        "The decision is often made by the school, but for a private candidate or a family exploring options, it needs real thought. Entering a tier too easy limits the result; entering one too hard risks a poor grade. A diagnostic paper in the trial lesson helps settle this.",
        "Subject selection matters as well. A typical set includes Maths, English, two sciences, a humanity and a language, with Additional Mathematics for the mathematically strong. Hindi as a second language is popular with Giridih students because it is comfortable and can raise the overall profile.",
        "Whatever you choose, note the syllabus code and exam session early, because a mismatch between the board a tutor prepares and the board the exam uses can waste weeks.",
      ],
    },
  ],

  tutorsIntro:
    "Tutors are selected for the specific programme, subject, level or board of the Giridih student, not from a general pool. Each teaches from India in IST and is introduced with a short explanation of why they fit.",

  process: [
    { title: "Tell us about the student", description: "Share the programme or board, subject, level, current school and the hours that suit your household." },
    { title: "See the suggested tutor", description: "We propose a tutor and explain what they have taught, so you know why the match makes sense." },
    { title: "Attend a free trial", description: "A real lesson online, with no payment and no commitment attached." },
    { title: "Confirm a written plan", description: "Lessons per week, rate and first-month topics are agreed in writing." },
    { title: "Continue and review", description: "Regular lessons with notes, and a change of tutor whenever you ask." },
  ],

  whyPoints: [
    { title: "Right syllabus, right tutor", description: "We look for prior teaching of your child's exact subject, level and board." },
    { title: "Honest about local options", description: "We tell you plainly that no Giridih school is confirmed for these boards, so your plan rests on facts." },
    { title: "Try first", description: "The free trial lets your child and you judge the teaching directly." },
    { title: "Clear limits on assessed work", description: "Tutors guide but never write Internal Assessments, essays or coursework." },
    { title: "Transparent progress", description: "Notes after lessons and periodic reviews show what is improving." },
    { title: "Free to switch", description: "If the fit is not right, another tutor is arranged promptly." },
  ],

  faqs: [
    { question: "Is there an IB or IGCSE school in Giridih?", answer: "Not that we could confirm. Giridih schools follow the Jharkhand Academic Council, CBSE or ICSE. The nearest verified IB and IGCSE schools are in Kolkata and, further away, in Delhi NCR. If your child plans to study in one of those, tutoring can begin at home ahead of admission and carry on during holidays." },
    { question: "Can I find IB home tuition in Giridih?", answer: "You can find online home tuition, which means a live one-to-one lesson taught while your child sits at home. The tutor does not come to the house; in-person visits are offered only in Gurugram and parts of Delhi NCR. We say this clearly so you are not surprised, and the trial lesson lets you judge how well the format works." },
    { question: "Do you have IGCSE tutors for Giridih for both Cambridge and Edexcel?", answer: "Yes. We match by board and syllabus code, such as Cambridge 0625 Physics or Edexcel 4MA1 Mathematics A, and by tier. Lessons are online and in IST. Please tell us which board and session your child will sit, since a Cambridge tutor and an Edexcel tutor prepare students slightly differently." },
    { question: "Will a tutor visit our home in Giridih?", answer: "No. Home visits are limited to Gurugram and parts of Delhi NCR. For Giridih, every lesson is online. Your child needs a laptop, a stable connection and a quiet spot, and the tutor sees their working through a shared whiteboard or a camera pointed at the notebook." },
    { question: "How much does IB or IGCSE tuition cost in Giridih?", answer: "The rate depends on the level, subject, tutor's experience and number of sessions, so we do not publish a number. After the free trial you receive a written quote, and you can then decide with the figures in front of you. Starting with one subject is a sensible way to test the arrangement." },
    { question: "Which schools near Giridih offer IB or IGCSE?", answer: "None in Giridih itself that we can confirm. Families look at Kolkata, where The Heritage School, Calcutta International School and Oaktree International School are named on our Kolkata and Dhanbad pages, or at boarding schools in Delhi NCR. Please check current admissions and programmes with each school." },
    { question: "Do you offer a free trial lesson?", answer: "Yes, for every new student. The tutor teaches a real topic from the syllabus online, and you decide afterwards whether to continue. There is no charge and no obligation, and if the fit is wrong, we suggest a different tutor." },
    { question: "Can tutors help with my child's Internal Assessment or Extended Essay?", answer: "They can coach but cannot write. A tutor can explain the assessment criteria, help the student narrow a topic, comment on a plan and read a draft for clarity. The research, analysis and text must be the student's own, and we refuse requests to produce assessed work." },
    { question: "Which IB Diploma subjects can you cover in Giridih?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, ESS, History, Geography and Hindi B are the most common. Higher Level and Standard Level are both taught. Tell us your subject list and we will confirm which we can staff." },
    { question: "Do you teach IB PYP and MYP students from Giridih?", answer: "Yes. PYP sessions are short and activity-based, focused on reading, writing and number sense. MYP sessions concentrate on criterion-based writing, science reports and the Personal Project structure. Parents receive a note after each lesson so they can see what was covered." },
    { question: "Is online tuition as effective as tuition in person?", answer: "For most students and subjects, yes, given a good connection. The tutor and student work on a shared whiteboard and the tutor sees working in real time. The question for Giridih is less online versus in person and more online specialist versus a local tutor who has not taught these syllabuses." },
    { question: "How do you choose tutors for Giridih students?", answer: "We check qualifications, recent experience teaching the exact syllabus and how well they explain. Then we match on the student's level and goals. Only after we understand your needs do we suggest a name, and the free trial tests the match." },
    { question: "When should my child start?", answer: "As early in the course as possible, Grade 9 for IGCSE and Class 11 for the Diploma. Starting early allows time for weak areas, internal assessment planning and mock exams. Students preparing to join a school elsewhere can start a term ahead of admission." },
    { question: "My child studies under JAC or CBSE. Can they switch to IB or IGCSE with a tutor's help?", answer: "Yes, though the switch needs a school seat and admission, since tutoring alone cannot enrol a child in an IB school. Where a move is planned, a tutor can close gaps in content, English writing and the analytical style before the first day of class." },
    { question: "Can lessons be held in the evening or on weekends?", answer: "Yes. Evenings after school and coaching and weekend mornings are the most popular. We plan around JAC exam weeks, Chhath, Puja and the times when roads and networks near Parasnath are busiest." },
    { question: "What if my child does not get along with the tutor?", answer: "Say so, and we will arrange another tutor. Early check-ins help catch problems, and the plan was agreed in writing, so there is no awkward negotiation." },
    { question: "Is IB Gram connected with any school or exam board?", answer: "No. IB Gram is an independent tutoring service. It is not affiliated with the IB, Cambridge, Pearson, any Giridih institution or any school named on this page, and it does not receive payments from them." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The same online approach in other cities." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person visits are possible." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "IB programmes and subjects at a glance." },
    { label: "IGCSE guide", href: "/igcse/", description: "How Cambridge and Edexcel IGCSE work." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure, grading and the core." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-based primary learning." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI explained." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor backgrounds and subjects." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Reach us to start a trial." },
    { label: "IB and IGCSE tutoring in Dhanbad", href: "/dhanbad/", description: "The nearest large coal-belt city." },
    { label: "IB and IGCSE tutoring in Ranchi", href: "/ranchi/", description: "Jharkhand's capital and its school options." },
    { label: "IB and IGCSE tutoring in Bokaro Steel City", href: "/bokaro-steel-city/", description: "A neighbouring Jharkhand city." },
  ],

  closingHeading: "Start with a free trial lesson in Giridih",
  closingBody:
    "Tell us the programme or board, subject, level and your preferred evenings. We will suggest a tutor, explain the fit and arrange a free trial lesson online. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
