import type { CitySeoPage } from "../types";

/**
 * /chatra/ - IB and IGCSE tutoring page for Chatra, Jharkhand. No IB or Cambridge/Edexcel IGCSE school
 * in the town could be confirmed, so stripSchools is empty and the clusters are honestly labelled
 * nearby-city options. Online one-to-one only.
 */
export const chatra: CitySeoPage = {
  slug: "chatra",
  countryName: "Chatra",
  countryNameLong: "Chatra, Jharkhand",
  demonym: "Chatra",
  state: "Jharkhand",
  stateCode: "IN-JH",
  flagCode: "in",
  countryCode: "IN",
  region: "Jharkhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are planned around Chatra's school hours, the hot pre-monsoon weeks and the Sarhul, Karma, Durga Puja and Chhath holidays",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.2063, longitude: 84.87 },
  wikipedia: "https://en.wikipedia.org/wiki/Chatra,_Jharkhand",
  alternateNames: ["Chatra town", "Chatra Jharkhand"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Chatra | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE home tuition for Chatra, Jharkhand: one-to-one DP, MYP, PYP and Cambridge or Edexcel lessons from tutors in India, free trial first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Chatra",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION FOR CHATRA",
  heroSubtitle:
    "If you are looking for private tuition at home for an IB or IGCSE student in Chatra, the practical version is a live one-to-one video lesson taken at your own study table. A tutor who already teaches your child's exact course joins from elsewhere in India, on Indian Standard Time, so the choice is not limited to whoever lives on the Ranchi road.",
  primaryKeyword: "IB and IGCSE tutors in Chatra",
  imageAltText: "A Chatra student working through an IGCSE Physics problem with a tutor in a live online lesson",
  secondaryKeywords: [
    "IB tutor Chatra",
    "IGCSE tutor Chatra",
    "IB home tuition Chatra",
    "IGCSE home tuition Chatra",
    "IB private tuition Chatra",
    "IB Maths tutor Chatra",
    "IGCSE Maths tutor Chatra",
    "IB Physics tutor Chatra",
    "IB Chemistry tutor Chatra",
    "IB Biology tutor Chatra",
    "IB DP tutor Chatra",
    "IB MYP tutor Chatra",
    "IB PYP tutor Chatra",
    "IGCSE online tuition Chatra",
    "IB tutor Chatra Jharkhand",
    "online IB tutor Itkhori",
    "IB tutor Tandwa Chatra",
    "IGCSE tutor Simaria Chatra",
  ],

  heroTrustPoints: [
    "Tutors chosen for the precise subject, level and exam board your Chatra child is preparing",
    "Everything runs online, so nobody travels to Ranchi or Hazaribag for a lesson",
    "A free trial lesson comes before any rate is mentioned",
    "Independent of every school, board and university named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "All IB stages covered" },
    { value: "IST", label: "Tutor and student share a clock" },
    { value: "Core to Extended", label: "Both IGCSE tiers taught" },
    { value: "Free trial", label: "Before you decide" },
  ],

  intro: {
    heading: "What private IB and IGCSE tuition at home looks like for a family in Chatra",
    paragraphs: [
      "Private tuition at home for an IB or IGCSE student in Chatra is a one-to-one lesson taken online, with the student at their own desk and the tutor on a screen. Tutors do not visit homes in Chatra, because in-person home visits run only in Gurugram and parts of Delhi NCR. The gain is a specialist for the exact course, rather than a general Mathematics or Science teacher who has never opened an IB subject guide.",
      "Chatra is a district headquarters town in the northern stretch of Jharkhand, with coal country to its south around Tandwa and Simaria, pilgrim traffic towards Itkhori and Kauleshwari, and a long road link to Ranchi. Schooling here is overwhelmingly JAC state board and CBSE. An international syllabus is unusual, which means an IB or IGCSE learner is frequently the only one in the building studying that way.",
      "The families who ask about these courses tend to have a reason. A parent may work for a coal, power or banking employer and have been posted from a metro with IB schools. A relative may be abroad and want a child ready for a foreign university. Or a family may be planning to send a Class 9 student to a boarding campus and want the Cambridge or IB style of questioning to feel familiar before the entrance test.",
      "IB Gram is an independent tutoring service and is not affiliated with the International Baccalaureate, Cambridge, Pearson or any school or university mentioned on this page. Tutors coach students; they never write Internal Assessments, Extended Essays, Theory of Knowledge essays or other assessed coursework.",
    ],
    bullets: [
      "Live one-to-one lessons for IB PYP, MYP and DP, plus Cambridge and Pearson Edexcel IGCSE",
      "Online only in Chatra; home visits are limited to Gurugram and parts of Delhi NCR",
      "A short written note after every session for parents",
      "A change of tutor on request if the fit is not right",
      "Rates quoted in writing before any booking",
    ],
  },

  programmesIntro:
    "A child in Chatra meets an international programme by a side door, never by default. That changes what a tutor has to do in the first fortnight: find out what the student has already covered, what the next exam actually expects, and which gaps come from moving between syllabuses.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Units of inquiry replace the usual subject timetable, and children present an Exhibition at the end. Tutoring at this age builds reading stamina, confident number work and the habit of asking a good question before writing an answer.",
      countryNote:
        "With no PYP campus confirmed in Chatra, requests usually come from children who started the programme elsewhere and have arrived after a family transfer.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are assessed on published criteria rather than a single mark, and the final year includes a Personal Project. Coaching teaches students to read a criterion descriptor and shape an answer that earns the top band.",
      countryNote:
        "In Chatra there is seldom another MYP student to compare notes with, so the tutor also serves as the person who explains how the rubrics are read.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects, three at Higher Level, alongside Theory of Knowledge, the Extended Essay and CAS. Tutors teach the subject content and exam method; the essays, reflections and internal assessments remain the student's own work.",
      countryNote:
        "Diploma interest from Chatra leans towards the sciences and Mathematics, which suits families thinking of engineering, medicine or a management degree at Ranchi or further away.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses are paired with a career-related study, a reflective project and language development. Few schools in India run it, and it suits students with a vocational direction.",
      countryNote:
        "No school near Chatra offers the CP as far as we can tell, so tutoring here is aimed at the Diploma-level courses inside the pathway.",
    },
  ],

  subjectsIntro:
    "Every match starts with the course code. Mathematics Analysis and Approaches at Higher Level is a different teaching job from Applications and Interpretation at Standard Level, so we ask for your child's exact subject list and shortlist only from tutors who teach those courses.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Proof, functions and calculus are built up patiently, and a fortnightly timed set trains the speed needed on Paper 1 without a calculator." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and financial mathematics are practised with a graphic display calculator, including writing out what a regression result means." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves and fields are worked through numerical problems, with extra time on uncertainty and the way the data booklet is used." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Bonding, energetics, equilibrium and organic reaction routes are tied to calculation practice, since many lost marks come from units and significant figures." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and human physiology are taught with careful attention to command terms such as outline, explain and evaluate." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy and short, well-placed explanations are drilled, using examples from Indian and global markets." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, investment appraisal and stakeholder analysis are rehearsed against papers in the same style as the exam." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis, comparative writing and the individual oral are practised as three separate skills, each with its own timing." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and databases are explored with pseudocode in the IB convention, since the paper expects it." },
    { name: "IB Psychology", levels: "HL / SL", description: "Key studies are learned with aim, method, findings and evaluation, and students practise the structure of a full essay response." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study recall, data response and fieldwork method are covered, using South Asian examples where the guide allows." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and thesis-led essays are built through short, frequent writing exercises rather than a single large essay at the end." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Formal letters, comprehension and the interactive oral are practised in Hindi, a home language for many families in Chatra." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions explore knowledge questions and real-life situations; the essay and exhibition stay entirely the student's own." },
  ],

  igcseSubjectsIntro:
    "Many Chatra IGCSE candidates sit the papers as private entrants while attending a state board or CBSE school. The first conversation is nearly always about tier, Core or Extended, and which five or six subjects make a sensible set.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended tier builds algebra, trigonometry, sequences and graphs for students who may move on to IB or A Level Mathematics." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, logarithms and vectors arrive early, which helps capable students move smoothly into Higher Level courses later." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Papers reward clearly set-out working, and tutors train students on the typical phrasing of each Edexcel question type." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Electricity, forces and thermal physics are revisited through short numerical sets and the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Periodic trends, rates of reaction, acids and organic chemistry are linked to the experimental skills the practical paper tests." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, transport, inheritance and ecosystems are revised with diagrams students redraw from memory." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Supply and demand, inflation and trade are explained with everyday Indian examples before moving on to exam wording." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Marketing, operations and finance are applied to the case study business printed in each paper." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, flowcharts and pseudocode come first, then a programming language matched to the school's approach." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summaries and descriptive pieces are practised in timed conditions with detailed written feedback." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension, letters and speech-style writing are supported in the exact format the paper uses." },
  ],

  regionsTitle: "Parts of Chatra district where families ask about online IB and IGCSE tuition",
  regionsIntro:
    "Every lesson is online, so this list is not about distance. It describes the school mix and the daily rhythm in each area, which shapes when a student can actually sit down for an hour.",
  regions: [
    { name: "Chatra town centre", note: "The district headquarters, where courts and offices draw government families; evening slots after coaching and school suit most households here." },
    { name: "Jail Road area", note: "A residential stretch close to the town's main institutions, popular with families whose children attend CBSE schools in the town." },
    { name: "Hunterganj", note: "A block town to the east where a hilly landscape and longer bus rides make an online lesson more dependable than a trip to the district HQ." },
    { name: "Itkhori", note: "Known for the Bhadrakali temple complex; pilgrim crowds at festival time can disturb daily routines, so schedules are kept flexible then." },
    { name: "Tandwa", note: "A coal-mining block with company colonies whose staff are sometimes transferred in from cities where IB or IGCSE schools exist." },
    { name: "Simaria", note: "A block to the south where broadband quality varies by locality, so a phone hotspot backup is a sensible precaution for timed papers." },
    { name: "Pratappur", note: "A rural block on the road towards Gaya; families here often send older students to larger towns and use online help in between." },
    { name: "Lawalong", note: "A forest-edge block where distances are long, making recorded notes and online lessons an easy alternative to travel." },
    { name: "Kunda", note: "A smaller block in the district where many students attend government schools and parents look outside for an international-standard subject tutor." },
    { name: "Kanhachatti", note: "A block on the Grand Trunk corridor side of the district, useful to families who regularly travel to Hazaribag or Ranchi for schooling." },
  ],

  schoolDisclaimer:
    "We could not confirm an IB or Cambridge/Edexcel IGCSE school inside Chatra, so none is named as local. The clusters below describe larger cities some Jharkhand families consider for a later move, and IB Gram has no connection with, and does not endorse, any school listed.",
  schoolClusters: [
    {
      city: "Chatra itself",
      note: "Local schooling is a mix of JAC state board schools, CBSE schools and a few mission or convent institutions. No IB or IGCSE school is known to us here, so international-syllabus learners study privately or online.",
      schools: [],
    },
    {
      city: "Nearby: Ranchi",
      note: "Ranchi is the state capital and the usual next step for Chatra families seeking better choice. Its confirmed IB and IGCSE options remain limited, which is why many families still pair a local school with online tutoring.",
      schools: [],
    },
    {
      city: "Nearby: Jamshedpur and Kolkata",
      note: "Jamshedpur and Kolkata are the eastern options. Kolkata has long-established international schools, reached by train from Ranchi or Gaya, and some families consider it for boarding or a longer relocation.",
      schools: ["Calcutta International School", "The Heritage School, Kolkata"],
    },
    {
      city: "Nearby: Delhi NCR boarding routes",
      note: "Students aiming for the full Diploma sometimes look at Gurugram, where the school cluster is dense and IB Gram runs in-person home tuition in parts of the city.",
      schools: ["Pathways World School, Aravali", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "Chatra families usually choose among three patterns. All of them are one to one, online and on IST, and they differ only in rhythm and purpose.",
  modes: [
    {
      title: "A steady weekly course",
      description:
        "One tutor, one fixed weekly hour, working through the specification in order with homework in between.",
      bullets: [
        "Works for DP, MYP and IGCSE subjects alike",
        "A shared digital whiteboard stands in for the classroom board",
        "Handwritten work is photographed and marked before the next lesson",
        "Good for students who study an international syllabus alone",
      ],
    },
    {
      title: "Alongside a JAC or CBSE school day",
      description:
        "For a student who attends a local school in the morning and keeps an IB or IGCSE subject running in the evening or at the weekend.",
      bullets: [
        "Lessons follow the target syllabus, never the school's own",
        "Slots avoid unit-test fortnights at school",
        "A monthly summary shows parents where the gaps are",
        "Prepares the student for a later school move",
      ],
    },
    {
      title: "A short exam push",
      description:
        "Three or four sessions a week across a few weeks, built on timed past papers and line-by-line feedback.",
      bullets: [
        "Papers marked against current published mark schemes",
        "Recurring errors logged and revisited each week",
        "Works best when started four to six weeks ahead",
        "Planned around festivals and power-cut prone days",
      ],
    },
  ],

  sections: [
    {
      heading: "Who actually studies IB and IGCSE in and around Chatra?",
      paragraphs: [
        "Very few students in Chatra study IB or IGCSE at a local school, because no such school has been confirmed in the town. Demand is small but real, and it comes from a handful of clearly identifiable family situations. Knowing them explains why our tutoring is built around online matching, not a classroom in the district.",
        "The first is the transferred or returning family. A parent who worked in Bengaluru, Pune or the Gulf may come back to Chatra for elderly relatives or a family business, and the child brings an IB file or a stack of Cambridge past papers. Moving that child into a JAC or CBSE classroom can waste months of hard-won progress, so continuing the syllabus online is the gentler option.",
        "The second group works for employers in the wider district, such as the coal belt around Tandwa and Simaria or the banking and administrative offices of the headquarters. Their children may have studied in cities with international schools before a posting. The third group are ambitious families who see an IGCSE or IB qualification as a route to foreign universities and have chosen it deliberately, sometimes from Class 8 onwards.",
        "None of this criticises local schools. JAC and CBSE students from the district go on to good colleges every year. Online IB and IGCSE tuition exists for the exception, and we would rather say so openly than suggest that a large international-school ecosystem exists in Chatra.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed inside Chatra",
        "Typical learners: returnees, transferred staff families, early planners",
        "Most are the only international-syllabus student in their class",
        "Online matching solves the shortage of local specialists",
      ],
    },
    {
      heading: "JAC, CBSE, IB or IGCSE: what changes for a Chatra student?",
      paragraphs: [
        "For a Chatra student the main difference between the four is not difficulty but the kind of answer each rewards. JAC and CBSE reward accurate reproduction of a prescribed textbook, while IB and IGCSE ask for reasoning, interpretation and methodical working against published mark schemes. That shift changes how every week of preparation should be spent.",
        "A student moving from a JAC school to an IGCSE course in Class 9 usually notices it first in Mathematics and the sciences, where marks depend on showing method and getting units right. In English and the humanities the change is the length, structure and argument expected in a written response. Neither path is easier; they train different habits.",
        "The table lists the points families most often ask about. It is a general guide only, since schools within each board differ, and it is meant to prompt questions rather than give a verdict on any one school.",
        "If your child is still in a state board school and you are only exploring, one trial lesson in a single IGCSE subject will show whether the style suits them before anything else changes.",
      ],
      table: {
        caption: "Four routes compared for a Chatra family",
        columns: ["Feature", "JAC state board", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["How marks are earned", "Recall of set textbooks", "Textbook plus application questions", "External exams plus internal assessments", "Mostly end-of-course papers"],
          ["Number of subjects", "Fixed stream from Class 11", "Fixed stream from Class 11", "Six plus TOK, EE and CAS", "Usually five to nine chosen"],
          ["Access near Chatra", "Available in every block", "Several schools in town", "None confirmed locally", "None confirmed locally"],
          ["Entry to Indian degrees", "Direct", "Direct, with CUET-UG", "Usually needs AIU equivalence", "Leads into Class 11 or IB or A Level"],
        ],
      },
    },
    {
      heading: "How much does IB and IGCSE tuition cost for a family in Chatra?",
      paragraphs: [
        "There is no price list, because a fair rate depends on several things that differ from child to child. Once we know the course, level and frequency, we quote a rate in writing before you book anything. The first lesson is a free trial, so nothing is owed while you decide.",
        "Subject difficulty and level move the rate the most. A tutor who can teach Higher Level Mathematics, Physics or Chemistry, or IGCSE Additional Mathematics, is a smaller and more experienced pool than a tutor for MYP Individuals and Societies or primary reading support. Expect that gap to show in the quote.",
        "Frequency matters as well. One hour a week over a whole year is a different arrangement from four sessions a week for the month before an exam. The second pattern costs more each week but often gains more per hour, because every session targets a known weakness from the last paper.",
        "Families in Chatra also save on things a metro family pays for without noticing. There is no petrol, no bus fare to Ranchi and no afternoon lost to a long road journey. If the match is wrong, a tutor change costs nothing extra.",
      ],
      bullets: [
        "Course, level and tier decide which tutors are available",
        "Sessions per week and length of the block affect the rate",
        "Free trial first; written quote before booking",
        "No travel cost, since lessons are online",
      ],
    },
    {
      heading: "Is online home tuition better than a coaching centre or a local tutor in Chatra?",
      paragraphs: [
        "It depends on the exam and on who is available locally, so the honest answer is that each option has a job. Coaching centres in the district are built around JEE, NEET and board preparation, and we do not know of any running IB Diploma or IGCSE batches. A batch also moves at one pace for everyone, which is awkward for a student on a different syllabus.",
        "A private tutor in town can be a lifesaver for general Mathematics or Science, but finding one who has actually taught Cambridge or IB content and marked those papers is hard. Self-study with past papers works for disciplined students, yet without feedback small errors settle into habits that surface only in the exam hall.",
        "Online one-to-one tuition sits between these. The tutor knows the specification, marks work to the right scheme and adjusts the pace every week. The trade-off is that it needs a stable connection and a quiet room, which we plan for from the start.",
        "Plenty of Chatra families mix two options: self-study during the week and one online lesson to mark the papers and set the next task. It keeps the bill reasonable while still putting a specialist eye on the work.",
      ],
      table: {
        caption: "Ways of preparing for an international syllabus from Chatra",
        columns: ["Option", "Knows the IB or Cambridge syllabus", "Marks to the official scheme", "Pace"],
        rows: [
          ["Online one-to-one lessons", "Yes, matched by course", "Yes", "Set by the student"],
          ["Local coaching batch", "Rarely, usually JEE or board focus", "Not usually", "Set by the batch"],
          ["Private tutor in town", "Occasionally", "Depends on experience", "Flexible"],
          ["Self-study with past papers", "Only from the student's reading", "Only if self-marked", "Fully flexible"],
        ],
      },
    },
    {
      heading: "When are the exams, and how do Chatra's festivals and seasons affect the year?",
      paragraphs: [
        "IB Diploma exams fall in May and November, with May the main session for Indian candidates. Cambridge IGCSE is offered in February to March, May to June and October to November, and Pearson Edexcel IGCSE follows similar windows. A student aiming for May therefore needs a real study plan from the previous September.",
        "Local life adds its own pattern. Sarhul in spring and Karma in the monsoon months are significant for many families in the district, and Durga Puja and Chhath bring the longest breaks. Tutors who know this place revision blocks before the holidays and keep the break weeks light rather than pretending they will be normal.",
        "Seasons matter too. Summers in this part of Jharkhand are hot, and May power interruptions can disrupt a timed mock at the worst moment. Winter mornings are cold enough to make early lessons unappealing. A charged laptop, a spare hotspot and a quiet room set aside for mocks go a long way.",
        "The table shows the calendar we usually sketch with a family. It is adjusted whenever a school announces a different test window or the household travels for a wedding or pilgrimage.",
      ],
      table: {
        caption: "A working year for a Chatra student sitting a May exam series",
        columns: ["Period", "Academic priority", "Local factor"],
        rows: [
          ["September to October", "Finish syllabus units and begin mixed practice", "Durga Puja and Chhath holidays"],
          ["November to December", "First full past papers, error logs", "Cool mornings, short days"],
          ["January to February", "Mocks in school or at home", "Pleasant weather, strong study window"],
          ["March to April", "Timed papers across every subject", "Rising heat, occasional power cuts"],
          ["May to June", "Written exams for IB and IGCSE", "Peak summer, monsoon arriving late June"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Chatra study next?",
      paragraphs: [
        "A Chatra student with IB or IGCSE results has three broad routes: Indian universities, entrance-exam courses and study abroad. The paperwork differs for each, so it pays to learn the conditions a year or two ahead rather than in the last term.",
        "For Indian public universities, IB Diploma holders usually need an equivalence certificate from the Association of Indian Universities. Private universities such as Ashoka, Shiv Nadar and Krea assess IB scores directly. CUET-UG admits students from international boards under its current eligibility rules. IGCSE students usually move on to Class 11 in CBSE, ICSE, IB or A Level.",
        "Students aiming for engineering or medicine need the right subject mix. JEE Main and NEET-UG have conditions for international-board candidates, so Physics, Chemistry and Mathematics or Biology should be chosen deliberately for the Diploma. Closer to home, some students look at institutions in Ranchi and Jamshedpur for management and technical degrees.",
        "Study abroad opens the UK through UCAS, the United States through the Common App, and direct routes in Canada, Australia and Europe. Because rules change, always check the latest notices from the university or agency. Tutors prepare students for the subject side; admissions advice is best taken from the institution.",
      ],
      bullets: [
        "AIU equivalence for public Indian universities",
        "CUET-UG, JEE Main and NEET-UG subject checks",
        "UCAS, Common App and direct applications abroad",
        "IGCSE usually leads to Class 11, IB Diploma or A Level",
      ],
    },
    {
      heading: "How are IB Mathematics, Physics, Chemistry and Biology taught online?",
      paragraphs: [
        "IB Mathematics and the sciences are taught online with the tutor writing live on a shared whiteboard while the student solves the same question on paper. This keeps the lesson interactive and lets the tutor see precisely which line of working goes wrong, which a recorded lecture can never do.",
        "In Mathematics the choice between Analysis and Approaches and Applications and Interpretation matters. Analysis and Approaches is algebra and calculus heavy and is often chosen by future engineers and economists. Applications and Interpretation favours statistics and modelling with technology, and suits students heading towards business, social science or design. Tutors talk this through in the first week.",
        "Physics, Chemistry and Biology follow a common structure: content to understand, facts and formulas to recall, and an internal investigation the student designs and writes independently. Tutors support the first two fully and coach the third by asking questions, never by supplying the answer.",
        "A session usually lasts an hour. The last ten minutes are kept for a short task, which the student photographs and sends back for marking before the next lesson.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: which should a Chatra student sit?",
      paragraphs: [
        "Core caps the highest grade a student can reach, while Extended opens the full range, so the decision deserves early attention. On Cambridge papers the Core tier reaches a maximum of grade C, and Extended runs from A star downwards.",
        "For most students planning IB, A Level or a competitive Indian stream afterwards, Extended is the sensible target in Mathematics and the sciences. Core suits a student who finds a subject hard and wants a secure result, or who is taking a subject mainly as a background credential. Moving between tiers early in the course is straightforward.",
        "Subject choice is a related decision. Most begin with Mathematics, English, Physics, Chemistry and Biology, then add Economics, Business, Computer Science or a language. A mix of sciences and humanities keeps later options open.",
        "Cambridge and Pearson Edexcel differ in layout and style of questioning. Cambridge tends towards structured questions with distinctive command terms, while Edexcel papers can feel more traditional. Tell us which board your child's entry is with and we match accordingly.",
      ],
    },
  ],

  process: [
    { title: "Send the details", description: "Share the programme, subjects, level and exam date by WhatsApp or email." },
    { title: "Receive a shortlist", description: "We propose one or two tutors who already teach that exact course." },
    { title: "Take a free trial", description: "Sit a full lesson with the tutor before any rate is discussed." },
    { title: "Agree in writing", description: "Rates, timings and the first month's plan arrive as a short written note." },
    { title: "Learn and review", description: "Weekly lessons, a written note after each and a new tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched by course code", description: "A Higher Level Chemistry student meets a Higher Level Chemistry tutor, not a generalist." },
    { title: "Built for a district town", description: "No trips to Ranchi and no road delays; the tutor joins from the laptop." },
    { title: "Honest about local supply", description: "We say clearly that Chatra has no confirmed IB or IGCSE school." },
    { title: "A note after each lesson", description: "Parents get a short record of what was covered and what to practise." },
    { title: "First lesson is free", description: "You judge the fit in a real class rather than in a sales call." },
    { title: "Coaching, never ghostwriting", description: "Tutors help students think and improve; they do not write assessed work." },
  ],

  tutorsIntro:
    "All tutors teach from India on Indian Standard Time, so a Chatra student never juggles time zones. We match on syllabus, level and teaching style and share a short tutor profile before the trial.",

  faqs: [
    { question: "Do IB Gram tutors come to homes in Chatra?", answer: "No, tutors do not visit homes in Chatra. In-person home tuition runs only in Gurugram and parts of Delhi NCR. Chatra students learn through live online one-to-one lessons at home, needing only a laptop, headphones and a quiet corner. The format resembles a home visit in attention, but the tutor can live anywhere in India, so the choice of specialists is far wider." },
    { question: "Is there an IB or IGCSE school in Chatra?", answer: "We could not confirm any IB or Cambridge or Edexcel IGCSE school in Chatra. Local schools follow the JAC state board or CBSE. Families who want an international syllabus study privately, learn online or move to a larger city. If a school has recently been authorised, check with the IB or Cambridge directly and let us know, because we update this page." },
    { question: "How do I find an IB tutor in Chatra?", answer: "Send your child's programme, subjects, level and exam session on WhatsApp to +91 7439 368 115 or email support@ibgram.com. We shortlist a tutor who already teaches that course and arrange a free trial. Since lessons are online, the tutor need not live in Chatra, which is what makes a true specialist match realistic." },
    { question: "Can a Chatra student take IGCSE as a private candidate?", answer: "Yes, but the papers must be taken at an approved centre that accepts private entries. Cambridge and Pearson publish centre lists, and entry deadlines fall months before each series. Ask the centre about practical science arrangements early. A tutor prepares your child for the papers, while registration and exam entry are handled by you and the centre." },
    { question: "What does IB tuition cost in Chatra?", answer: "There is no fixed price, because the rate reflects the tutor's experience, the subject and level and how often the student studies. We quote rates in writing before you book, and the first trial lesson is free. Higher Level sciences and Mathematics tend to sit higher, and primary support sits lower. You also avoid travel costs, since every lesson is online." },
    { question: "Which IB subjects do families from Chatra ask about most?", answer: "Mathematics, Physics and Chemistry lead the enquiries, followed by Biology, Economics and Business Management. This reflects interest in engineering, medicine and commerce. Hindi B and English A come next. Requests for Theory of Knowledge and Extended Essay guidance are frequent too, although tutors only coach thinking and structure and never write the assessed work." },
    { question: "Can IB students from Chatra apply for JEE or NEET?", answer: "Eligibility depends on subject combinations and equivalence rules that the exam agencies revise, so always read the current notice. Generally an IB student needs the required science subjects and an equivalence certificate for Indian professional courses. Choosing Physics, Chemistry and Mathematics or Biology early in the Diploma keeps both routes open." },
    { question: "Why choose online tuition over a coaching centre in the district?", answer: "Online one-to-one lessons are better matched, not automatically better. District coaching centres are strong for JEE, NEET and board exams, but we know of none teaching IB or IGCSE batches. A tutor working one to one follows your child's own specification, marks past papers to the right scheme and adjusts the pace, which a large batch cannot." },
    { question: "Will tutors help with IAs, the Extended Essay or TOK?", answer: "Tutors coach, but they do not write. They can explain a criterion, question a research plan and comment in general terms on an outline, but the words and ideas must be the student's own. This protects your child from academic misconduct findings, which can seriously damage a Diploma result." },
    { question: "What internet connection is needed for lessons?", answer: "A steady connection of roughly 5 Mbps is usually enough for video and a shared whiteboard. Wi-Fi or a wired link is better than mobile data. Chatra households sometimes face short outages, so keep a phone hotspot ready. If a lesson drops, the tutor reschedules the missed time, and the written note records what was lost." },
    { question: "Can a Class 8 or 9 student start IGCSE early?", answer: "Yes, and it often helps. Starting IGCSE Mathematics or Science in Class 8 or 9 lets a student move from recall to application without exam pressure. The first term stays light, with fundamentals and command words, and past papers follow as the exam date nears. A trial lesson shows how the child responds." },
    { question: "How do the hot months and festivals affect lessons?", answer: "Summer heat and power cuts are the main problem in April and May, so timed mocks are planned with a backup hotspot. Sarhul, Karma, Durga Puja and Chhath bring longer breaks, and tutors plan revision before them. Families can rearrange a slot with short notice, and missed content is caught up later." },
    { question: "Is one lesson a week enough?", answer: "For a motivated student on a steady syllabus, one weekly lesson with homework is often enough. Before an exam, two to four lessons a week across a month is more common. Your tutor reviews progress through past papers and advises when to raise or lower the load, and you can change it with written notice." },
    { question: "Which IGCSE boards do you cover?", answer: "We cover Cambridge International and Pearson Edexcel IGCSE, with A Level and AS as context. The two boards use different specifications and question styles, so tell us which one your child's entry is with. The tutor is matched to that board, and if your child switches later we arrange a new match." },
    { question: "How do I begin with a free trial lesson?", answer: "Send a WhatsApp message to +91 7439 368 115 or an email to support@ibgram.com with your child's class, subject, board and preferred time. We arrange a trial with a suitable tutor, usually within a few days. There is no obligation, and if the fit is wrong you can ask for another tutor before booking." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "All the Indian cities where we teach online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB tutoring for every programme." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects and boards." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects and core components for DP students." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based coaching for MYP learners." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-based support for younger children." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI Mathematics at HL and SL." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of IB and IGCSE specialists." },
    { label: "Contact us", href: "/contact-us/", description: "Write or message us for a free trial." },
    { label: "IB and IGCSE tutors in Ranchi", href: "/ranchi/", description: "Our page for the state capital." },
    { label: "IB and IGCSE tutors in Hazaribag", href: "/hazaribag/", description: "Our page for the neighbouring district town." },
    { label: "IB and IGCSE tutors in Ramgarh", href: "/ramgarh/", description: "Our page for the industrial town on the Ranchi road." },
  ],

  closingHeading: "Start with a free IB or IGCSE trial lesson in Chatra",
  closingBody:
    "Give us the programme, subject and exam session and we will introduce a tutor who teaches that course. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com, and the first lesson is on us.",
};
