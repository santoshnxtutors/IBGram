import type { CitySeoPage } from "../types";

/**
 * /lunglei/ - IB and IGCSE tutoring page for Lunglei, Mizoram. Online-only: tutors do not visit homes in
 * Lunglei (in-person home tuition runs only in Gurugram and parts of Delhi NCR). No IB or Cambridge/Edexcel
 * IGCSE school could be confirmed in the town; stripSchools is empty and the clusters point honestly to
 * Guwahati and Kolkata, reusing names already confirmed on existing pages. Kept strictly non-political.
 */
export const lunglei: CitySeoPage = {
  slug: "lunglei",
  countryName: "Lunglei",
  countryNameLong: "Lunglei, Mizoram",
  demonym: "Lunglei",
  state: "Mizoram",
  stateCode: "IN-MZ",
  flagCode: "in",
  countryCode: "IN",
  region: "Mizoram, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We shape Lunglei lessons around the rainy months on the ridge, Sunday rest and church evenings, Mim Kut and Pawl Kut, and your child's own school day",
  lastUpdated: "2026-09-21",
  geo: { latitude: 22.8879, longitude: 92.7346 },
  wikipedia: "https://en.wikipedia.org/wiki/Lunglei",
  alternateNames: ["Lunglei Mizoram", "Lungleh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Lunglei | Live Online Tuition",
  metaDescription:
    "Online IB and IGCSE tuition for Lunglei students: live one-to-one lessons from home, planned around Mizoram's Sunday rhythm and monsoon, with a free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Lunglei",
  heroEyebrow: "LIVE IB & IGCSE TUITION FOR LUNGLEI HOUSEHOLDS",
  heroSubtitle:
    "Anyone typing IB home tuition or IGCSE private tuition near Lunglei finds almost nothing local, since no school on the ridge turned up as authorised for either programme. Online home tuition closes that gap: a private tutor on a live video lesson, your child at their own desk, and a teacher in India working the same hours as Mizoram.",
  primaryKeyword: "IB and IGCSE tutors in Lunglei",
  imageAltText: "A Lunglei teenager at a window overlooking the green ridge, discussing an IB Economics diagram with a tutor on a video call",
  secondaryKeywords: [
    "IB tutor Lunglei",
    "IGCSE tutor Lunglei",
    "IB home tuition Lunglei",
    "IGCSE home tuition Lunglei",
    "IB private tuition Lunglei",
    "IB Maths tutor Lunglei",
    "IGCSE Maths tutor Lunglei",
    "IB Physics tutor Lunglei",
    "IB Chemistry tutor Lunglei",
    "IB Biology tutor Lunglei",
    "IB DP tutor Lunglei",
    "IB MYP tutor Lunglei",
    "IB PYP tutor Lunglei",
    "IGCSE online tuition Lunglei",
    "Cambridge IGCSE tutor Lunglei",
    "IB tutor Mizoram south",
    "online IB tutor Zotlang",
    "IGCSE tutor Lunglei Mizoram",
    "IB tuition near Lunglei",
    "Edexcel IGCSE tutor Lunglei",
  ],

  heroTrustPoints: [
    "Lessons are live and on screen; no tutor knocks on a Lunglei door, because home visits exist only in Gurugram and parts of Delhi NCR",
    "We choose the tutor by the exact IB subject and level or the Cambridge and Edexcel paper code",
    "Your first lesson costs nothing, and any rate is put in writing before you agree",
    "IB Gram stands apart from all schools and from the IB, Cambridge and Pearson",
  ],
  heroStats: [
    { value: "On screen", label: "One-to-one, from your own home" },
    { value: "PYP, MYP, DP", label: "And Cambridge or Edexcel IGCSE" },
    { value: "IST", label: "Same hours as the tutor" },
    { value: "Free first lesson", label: "No booking needed to try" },
  ],

  intro: {
    heading: "Reaching IB and IGCSE teaching from a ridge-top town",
    paragraphs: [
      "Lunglei stands on a ridge more than a thousand metres above sea level, about 235 km from Aizawl, and for over a century it has been the main town of southern Mizoram. Its colleges, among them Lunglei Government College, J. Buana College and the Higher and Technical Institute of Mizoram, give it a settled academic character. Schools that teach the IB or Cambridge or Edexcel IGCSE, however, did not appear in anything we checked.",
      "That shapes the enquiries we receive. A parent might have a son or daughter at a residential school in Guwahati or Kolkata, home for Christmas and the long summer break. Another may work in a bank, a hospital or a government department and expect a transfer, so prefers a syllabus that travels. A third simply wants a student in a Mizoram Board school to see how an international course works before choosing.",
      "Every lesson happens on screen. A tutor and one student share a whiteboard, a past paper and a clear plan; nobody drives to Lunglei, since in-person home lessons run only in Gurugram and parts of Delhi NCR. A good explanation does not need a living room, and teaching by video lets a family choose the tutor who best knows the course.",
      "What follows sets out the school picture around Lunglei, how these syllabuses compare with the Mizoram Board and CBSE, what influences the cost, how the exam calendar sits against a hill town's year, and where students go next. IB Gram is an independent service, unconnected to any school or examining body named.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, as well as Cambridge and Pearson Edexcel IGCSE",
      "Video lessons at home, sparing the long road to Aizawl",
      "Support for boarders home over Christmas and the summer",
      "A written note after each lesson and a change of tutor if needed",
      "Tutors guide and mark; they never write an IA, Extended Essay, TOK essay or coursework",
    ],
  },

  programmesIntro:
    "No Lunglei school turned up as running an IB stage, so these programmes reach local families through a child who studies away or a relocation under discussion. The tutor works from the course the child truly follows.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning is built from short inquiry units on themes like how we organise ourselves, ending in a child-led Exhibition. As no outside paper exists, a tutor spends the time on fluent reading, number confidence and the habit of asking good questions.",
      countryNote:
        "A Lunglei parent asking about PYP is usually preparing for a school change in another city, so lessons focus on English reading and number sense before that step.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers grade each subject on several criteria rather than one mark, units tie to global contexts and the stage ends with a Personal Project. A student from a single-paper board must learn to read a task closely and explain, not just state, an answer.",
      countryNote:
        "MYP support linked with Lunglei often helps a student leaving a Mizoram Board school, where written English reasoning and project work are the new demands.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma asks for six subjects, three at Higher Level and three at Standard, alongside Theory of Knowledge, the Extended Essay and a service strand. Coursework and final papers both count, so steady pacing over two years matters more than any single push.",
      countryNote:
        "Diploma tutoring tied to Lunglei typically backs a boarder away at school, using the Christmas and summer breaks, or a student resitting a subject after a session.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme places a few Diploma courses beside a vocational study, a reflective project and personal skills work. Few Indian schools run it, but its Diploma courses are taught just like any other.",
      countryNote:
        "CP questions from Lunglei are uncommon; when they arise, tutoring stays with the Diploma subjects and leaves the vocational element to the school.",
    },
  ],

  subjectsIntro:
    "Tell us the subjects, the level and whether Maths is AA or AI. A boarder revising Physics HL in Kolkata and a Lunglei child meeting a first IGCSE Chemistry mock need different plans, and tutors are matched accordingly.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus and proof, taught so that every line of working is visible and method marks are secured." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology, with clear wording when results are explained." },
    { name: "IB Physics", levels: "HL / SL", description: "From mechanics to fields and quantum ideas, with data-booklet speed and a neatly argued investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, kinetics, acids and organic routes, rehearsed under time until calculations feel automatic." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, inheritance, ecology and physiology, with graph and data questions handled in the examiner's terms." },
    { name: "IB Economics", levels: "HL / SL", description: "Careful diagrams and current examples, then longer evaluative writing on markets and policy." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to the case in front of you, rather than reciting a textbook definition." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading of unseen texts, comparative essays and the individual oral, sharpened for the criteria." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Theory next to real coding, since the internal project has to run and be documented." },
    { name: "IB Psychology", levels: "HL / SL", description: "Landmark studies recalled with accuracy and essays that argue from evidence." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking on forests, rainfall and land use, with hill agriculture as a natural local case." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies grounded in real places and numbers, and fieldwork methods that hold up to questions." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation-led sessions on the exhibition and prescribed titles, coached but never ghost-written." },
    { name: "Hindi B", levels: "HL / SL", description: "Register and text types plus oral practice, useful for Mizo-speaking students learning Hindi as an added language." },
    { name: "Mizo (where a school offers it)", levels: "Ab initio / B", description: "Support follows whatever the student's school provides; we check availability before any match." },
  ],

  igcseSubjectsIntro:
    "Mizoram Board and CBSE schools do not work to Cambridge or Edexcel codes, so a Lunglei student meets IGCSE through a school elsewhere or a family's own plan. Lessons follow the code and tier in the entry form.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra, geometry and data, with calculator-free accuracy built early so working earns credit." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and vectors taken early, an easier start to IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, circuits and waves, with rearranging formulae drilled and the practical paper treated as its own skill." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reactions, organic chemistry and analysis, revised through papers set out in exam order." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, transport and ecology, with long answers trained against a real mark scheme." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Summary, directed writing and composition, written with a Mizo-speaking student's needs in mind." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Python alongside the theory paper, because running the code is the best way to check the logic." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Supply, demand and policy, diagrams first and evaluation after." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Answers tied to the firm in the scenario, not to a stock example." },
  ],

  regionsTitle: "Lunglei neighbourhoods we support with online IB and IGCSE matching",
  regionsIntro:
    "Since lessons are online, a neighbourhood matters as context: school hours, steep walks home, evening routines and connection quality. These are the parts of Lunglei, called veng in Mizo, where our families live.",
  regions: [
    { name: "Bazar Veng", note: "The central commercial ward, where several schools sit close together and tuition hours are fitted around shop and church timings." },
    { name: "Zotlang", note: "A residential ward on the town's slopes, where families often use the hill roads twice a day for school." },
    { name: "Hauruang", note: "A mixed ward with older housing and a strong school-going population, frequently asking about changes of syllabus." },
    { name: "Electric Veng", note: "A central ward named for the old power station, popular with government employees who may be transferred." },
    { name: "Chanmari", note: "A ward with households of teachers and traders, where online lessons avoid steep evening walks in the rain." },
    { name: "Venghnuai", note: "A ward on the edge of the ridge, where connection quality in the rainy months deserves a backup plan." },
    { name: "Theiriat", note: "A quieter residential area where parents often weigh boarding schools elsewhere against staying close to home." },
    { name: "Ramthar Veng", note: "A long-settled ward whose students commonly move to bigger cities for Class 11." },
    { name: "Lunglei college area", note: "Close to the town's colleges, where academic families tend to be curious about study abroad." },
  ],

  schoolDisclaimer:
    "Schools named here are included only to describe the curriculum picture for Lunglei families and the nearest places with confirmed international options. IB Gram has no agreement with, or endorsement from, any of them, the IB Organization, Cambridge International or Pearson Edexcel. Always check a school's present authorisation and fees with the school itself.",
  schoolClusters: [
    {
      city: "Lunglei town",
      note: "No school in Lunglei came up as authorised for the IB or Cambridge or Edexcel IGCSE in our checks. Schools on the ridge run the Mizoram Board or CBSE, so international lessons sit online beside the school day.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati",
      note: "The nearest large city with a confirmed Cambridge link, a long journey by road and air from southern Mizoram, so it features mostly in boarding discussions.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Kolkata",
      note: "A familiar destination for families across the Northeast looking for a full IB or IGCSE campus, with confirmed schools running the Diploma or Cambridge courses.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
  ],

  modesIntro:
    "With every lesson on a screen, the real choice is how the lessons are shaped: a regular class, a class with a record, or a short burst around a holiday or exam.",
  modes: [
    {
      title: "A regular weekly video class",
      description:
        "One hour a week, same hour, same tutor, with a shared whiteboard and a habit of past-paper work. A sensible start for most Lunglei students.",
      bullets: [
        "One tutor follows the student through the term",
        "Covers IB DP, MYP and IGCSE",
        "Papers are marked while you watch",
        "Timing can avoid Sunday and church evenings",
      ],
    },
    {
      title: "Weekly class with a written trail",
      description:
        "Each weekly lesson closes with a short note, and every few weeks tutor and parents check that the plan still fits.",
      bullets: [
        "A short summary after every class",
        "Periodic longer reviews",
        "Useful for parents with shift or travel work",
        "An extra weekly slot is easy to add",
      ],
    },
    {
      title: "Holiday and exam-season burst",
      description:
        "Around Christmas, the summer break or the weeks before a series, lessons become more frequent and centre on timed papers.",
      bullets: [
        "Timed papers, marked to the mark scheme",
        "Feedback within a few days",
        "Planned around a boarder's travel home",
        "Best requested two weeks before a break",
      ],
    },
  ],

  sections: [
    {
      heading: "The school picture around Lunglei and who asks about IB or IGCSE",
      paragraphs: [
        "Lunglei is a town of schools, colleges and churches, and its education culture is strong. Children attend Mizoram Board and CBSE institutions, many with good reputations, and the literacy and English fluency common across Mizoram are real advantages for an international course. No local school, though, appeared in our checks as teaching the IB or Cambridge or Edexcel IGCSE.",
        "Enquiries come from a handful of situations. A family with a child at a residential school in Guwahati, Kolkata or elsewhere wants lessons during the long break. A household where one parent is posted to Lunglei from outside Mizoram arrives with a child mid-course. A family with relatives overseas wonders whether an international qualification would smooth the path.",
        "Some ask a simpler question: would the IB or IGCSE suit my child at all? A tutor can say honestly what the workload is, how marking differs and how hard it is to change schools. Nothing about that conversation obliges a family to move or to buy lessons.",
        "Teaching by video helps exactly where the town is thin. A Lunglei student does not need a specialist on the next street because a specialist in another state can teach live every week. The papers and the IB's moderation are identical for everyone, so a hill town does not mean a weaker syllabus.",
      ],
      table: {
        caption: "Curriculum options seen from Lunglei",
        columns: ["Board or programme", "Where families meet it", "Meaning for tutoring"],
        rows: [
          ["Mizoram Board (HSLC, HSSLC)", "Most government and many private schools", "Support adds English writing and exam technique"],
          ["CBSE", "Some private schools in town", "NCERT-paced help; IB or IGCSE comes on top"],
          ["Residential schools elsewhere", "Guwahati, Kolkata and further afield", "Holiday lessons match the school's own calendar"],
          ["IB or Cambridge / Edexcel IGCSE", "No school confirmed in Lunglei", "Online study beside school, or after a move"],
        ],
      },
      bullets: [
        "No Lunglei school found authorised for IB or IGCSE",
        "Most families are boarding a child away or relocating",
        "Video lessons reach specialists the ridge cannot offer",
        "Examination standards are the same as in any metro",
      ],
    },
    {
      heading: "How do the IB and IGCSE differ from the Mizoram Board and CBSE?",
      paragraphs: [
        "A Mizoram Board or CBSE paper asks, in large part, what the student remembers from the course. An IB or IGCSE paper asks what the student can do with the ideas in a setting they have not met. The subject matter overlaps; the style of thinking demanded is noticeably different.",
        "Practical and project components are heavier abroad. An IB Biology investigation is a sustained piece, marked against criteria, and certain IGCSE sciences test practical skill through a dedicated paper. Students used to one final paper sometimes feel they have lost a safety net, then discover the steadier pace suits them.",
        "English turns out to be the gate. Mizo students usually read and write English well, yet a command word like discuss or evaluate still catches many. A portion of early tutoring is simply practice at seeing what a question wants, and then writing it in tidy paragraphs.",
        "Neither path is superior in every case. Students aiming at NEET or JEE often prefer to stay in CBSE or the state system and use an IGCSE subject for enrichment. Those aiming abroad may prefer the Diploma. The decision belongs to the family.",
      ],
      table: {
        caption: "Mizoram Board and CBSE beside IB and IGCSE",
        columns: ["Feature", "Mizoram Board / CBSE", "IB / IGCSE"],
        rows: [
          ["Assessment", "Final paper, largely recall", "Papers with internal or practical elements"],
          ["Questions", "Tied to the textbook", "Applied, data-led and explanatory"],
          ["Medium", "Mizo, English or Hindi", "English"],
          ["Indian entrance route", "NEET, JEE and CUET-UG directly", "AIU equivalence, CUET-UG, NEET with checks"],
          ["Overseas recognition", "Accepted, sometimes with extras", "Widely understood"],
        ],
      },
    },
    {
      heading: "What influences the cost of IB and IGCSE tuition in Lunglei?",
      paragraphs: [
        "Four things move the rate: the subject, the level, how much experience the tutor has with that exact exam series, and how often the student meets. IB Gram publishes no price list; instead, a written quote follows the free lesson, so you weigh a figure against a lesson you have seen.",
        "A tutor with many years in IB Physics HL is priced unlike one helping a Class 7 child with MYP Science, and two lessons a week before a mock unlike one in a calm term. We walk through how a quote arises, and revise it whenever the plan changes.",
        "Being online removes costs a Lunglei family would otherwise carry. The road to Aizawl is long, and a flight or helicopter seat is not cheap, so a city-based tutor or coaching class is rarely practical. Video lessons put your money into teaching hours and nothing else.",
        "We steer clear of anything that raises cost without raising learning: long contracts, prepaid blocks that go unused, tutors picked for a name. You pay for the lessons you take, and can stop or swap tutors at will.",
      ],
      bullets: [
        "Subject and level, such as Maths HL against MYP Science",
        "Tutor's track record with the exact syllabus",
        "Lesson length and weekly frequency",
        "Extra marked papers before an exam",
        "Written quote before any booking",
      ],
    },
    {
      heading: "Video tuition, city coaching, a local tutor or self-study for Lunglei students?",
      paragraphs: [
        "Four routes exist for a student on the ridge. Online one-to-one tuition is the nearest thing to private home tuition for the IB and IGCSE available here: a tutor who teaches the course regularly, a fixed hour and a shared whiteboard.",
        "Coaching in Aizawl, Guwahati or Kolkata runs in batches and aims mainly at board exams, NEET or JEE. That is useful for those goals, yet an IB internal assessment or an IGCSE practical paper is not their speciality, and a daily commute from Lunglei is out of the question.",
        "A local tutor is valuable for foundations in Maths or English. Finding someone in town who has taught a Cambridge or IB mark scheme is uncommon, so many families keep a local tutor for basics and add an online specialist for the syllabus.",
        "Working alone with past papers suits a disciplined student. The danger is repeating an unnoticed mistake for weeks, so an occasional session where a tutor marks and diagnoses keeps independent study honest.",
      ],
      table: {
        caption: "Options for IB and IGCSE support in Lunglei",
        columns: ["Route", "Advantage", "Drawback", "Suits"],
        rows: [
          ["Online one-to-one", "Specialist, personal, scheduled", "Needs a laptop and signal", "DP, MYP and IGCSE depth"],
          ["City coaching class", "Batch energy, set timetable", "Distance, exam-board focus", "Students living in a big city"],
          ["Local private tutor", "Close by, knows the school", "Rarely knows international schemes", "Basic Maths and English"],
          ["Self-study", "Free or cheap, flexible", "No feedback on method errors", "Self-driven students with checks"],
        ],
      },
    },
    {
      heading: "Lunglei's year: rains, Sundays, Mim Kut and the exam calendar",
      paragraphs: [
        "The IB Diploma has May and November sessions, Cambridge IGCSE has May and June and October and November series, and Edexcel IGCSE runs in May and June and again in November. A boarding school sets its own mock dates, so we ask for the real timetable first.",
        "Mizoram keeps Sunday as a day of worship and rest, and evenings during the week often include church or choir practice. We do not schedule lessons on Sundays, and we place weekday lessons around family commitments. This is a normal part of planning, not an obstacle.",
        "The rains come hard. From June to September the ridge can see landslides, slow roads and dropped connections, so a backup slot is part of every plan. Winter is cool and clear, and Lunglei's altitude keeps summer milder than the plains, which suits study.",
        "Festivals also matter. Chapchar Kut arrives in early spring, Mim Kut in late summer, Pawl Kut near the year's end, and Christmas is the largest celebration of all. Tutors mark these dates early and aim intensive lessons at quieter weeks.",
      ],
      table: {
        caption: "A year of study for a Lunglei student",
        columns: ["Period", "What is happening", "Tutoring focus"],
        rows: [
          ["March to May", "Chapchar Kut, IB May session, IGCSE May and June series", "Timed papers, lighter weeks around festival days"],
          ["June to September", "Heavy rains, new school year, Mim Kut", "Foundations, IA planning, backup lesson slots"],
          ["October to December", "IB November session, IGCSE autumn series, Pawl Kut, Christmas", "Holiday blocks and final mocks"],
          ["January to February", "Cool and clear weather, mock exams", "Past-paper marking and workload balance"],
        ],
      },
    },
    {
      heading: "Where can a Lunglei student with an IB or IGCSE background study next?",
      paragraphs: [
        "IB Diploma holders and IGCSE students who proceed to A Levels are welcomed by universities in the United Kingdom, the United States, Canada, Australia, Singapore and Europe. The Diploma's emphasis on independent writing is well understood by admissions staff, which helps a student from a small town stand alongside those from big cities.",
        "Within India, the Association of Indian Universities issues equivalence for IB and Cambridge qualifications, which many institutions require. Central and other universities admit through CUET-UG, and each programme sets subject rules, so a student should check before choosing Diploma subjects.",
        "Medicine and engineering need early care. NEET-UG asks for certain science subjects, and JEE Main has its own rules for overseas boards. Students from Mizoram who wish to study at Lunglei's own colleges or at Mizoram University should check each college's admission policy for IB and IGCSE students.",
        "Begin the conversation around Class 9 or 10, because subject choices at sixteen narrow what is possible at eighteen. IB Gram does not provide admissions advice or promise outcomes, but tutors who have seen many pathways can help a student ask sharper questions.",
      ],
    },
    {
      heading: "IB Maths and the sciences: what the courses ask",
      paragraphs: [
        "IB Mathematics is offered as Analysis and Approaches or Applications and Interpretation, each at Higher and Standard level. AA fits students who enjoy algebra and calculus, future engineers among them. AI fits those who like data, graphs and software, for example future economists or social scientists.",
        "The Maths exploration is a self-chosen project marked against criteria. A tutor can help select a question of the right scale and explain what the rubric rewards, but the mathematics, writing and reflection have to be the student's own.",
        "Physics, Chemistry and Biology share a format of written papers, a practical investigation and a data booklet. Marks usually disappear through unit slips, long calculations, organic reaction routes and data-response questions. Timed practice exposes these early, and a tutor marks as an examiner would.",
        "A student from the Mizoram Board tends to find the content familiar and the framing new. A question on equilibrium may combine a graph, a table and an experimental set-up, and the answer must draw on all three. We start with guided questions and progress to unseen ones.",
      ],
    },
    {
      heading: "IGCSE: Core or Extended, and choosing subjects",
      paragraphs: [
        "Mathematics and the sciences are offered in Core and Extended tiers. Core limits the highest grade that can be reached, while Extended opens the whole scale. A student aiming for IB Higher Level or A Level Maths should normally take Extended and build pace for it.",
        "Subject choices at Grade 9 shape later options. A future engineer needs Mathematics, Physics and Chemistry at Extended, possibly with Additional Mathematics. A future business student may prefer Economics and Business Studies plus strong English.",
        "English needs a separate decision for students whose home language is Mizo. Whether to take First Language or English as a Second Language affects confidence in every other subject, and a tutor can read a writing sample to suggest the better fit.",
        "Cambridge and Edexcel differ in structure and mark scheme, so a tutor strong in one is not automatically ready for the other. We confirm the exact code and match on it.",
      ],
    },
    {
      heading: "How does IB Gram match a tutor for a Lunglei family?",
      paragraphs: [
        "Tell us the programme or board, the subject and level, the exam session and where the student stands now. We propose tutors who have taught the course, say why each might suit, and arrange a free lesson. No payment or promise comes first.",
        "Tutors live in India and teach on Indian Standard Time, so no time-zone juggling. We review qualifications, recent teaching of the exact syllabus and clarity with teenagers. How a tutor asks questions tells us as much as what they know.",
        "After each lesson you receive a brief note, and every few weeks a review asks whether the plan still fits. If not, we find another tutor, and a student is never asked to adjust to a poor match.",
        "The limits are plain. Tutors explain, set practice and mark, but they do not write IAs, Extended Essays, TOK essays or coursework, and they do not come to Lunglei homes, since in-person lessons run only in Gurugram and parts of Delhi NCR.",
      ],
      bullets: [
        "Free trial lesson first",
        "A short note after each class",
        "Another tutor whenever the fit is off",
        "Rates written down before booking",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge and Edexcel IGCSE to students joining from Lunglei. Every match starts from the exact syllabus and level, and a free lesson comes before any decision.",

  process: [
    { title: "Share the facts", description: "Tell us the programme or board, subject, level, the session and the hours that suit your household." },
    { title: "Look at the shortlist", description: "A few tutors who have taught that course, each with a line on why they fit." },
    { title: "Take a free lesson", description: "A live session on a real topic, with no charge and no strings." },
    { title: "Agree the opening plan", description: "The tutor sets out the first weeks and how you will hear from them; you approve or alter it." },
    { title: "Settle into a rhythm", description: "A fixed weekly hour, reviews now and then, and a fresh tutor if you ask." },
  ],

  whyPoints: [
    { title: "The course decides the match", description: "With no IB specialist in town, we look across India for someone who has taught your child's exact course." },
    { title: "Private, yet at home", description: "A one-to-one lesson at your own desk, with no long road or flight." },
    { title: "See before you pay", description: "A full free lesson shows you the tutor before money changes hands." },
    { title: "The student does the writing", description: "We coach and mark, yet never draft internal assessments or essays." },
    { title: "A record you can read", description: "A note after each class and longer reviews every few weeks." },
    { title: "Easy to leave", description: "No lock-in and no fixed bundle; change tutor or stop whenever you choose." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Lunglei?", answer: "Send the IB programme, subject, Higher or Standard level and the session your child is sitting. We come back with tutors who teach precisely that, and you try one at no cost. Lunglei has no IB school we could find, so your choice is never limited by the town." },
    { question: "Can I get an IGCSE tutor in Lunglei?", answer: "Yes, for Cambridge and Pearson Edexcel, always over live video. Name the subject code and tier, such as 0620 Extended Chemistry, and we pair your child with someone who has taught it recently, using current papers and mark schemes." },
    { question: "Does a tutor visit my house in Lunglei?", answer: "No tutor comes to a Lunglei house. Home visits happen only in Gurugram and parts of Delhi NCR. Here you get online home tuition: a private teacher on a laptop screen while your child works at the family study table." },
    { question: "What does IB or IGCSE tuition cost in Lunglei?", answer: "It turns on the subject, level, the tutor's history with that syllabus and the weekly hours. We publish no rate card; you receive a written quote after the trial. Not travelling to Aizawl for lessons is usually a large saving in itself." },
    { question: "Is any school in Lunglei offering the IB or IGCSE?", answer: "None showed up in our checks. Schools on the ridge follow the Mizoram Board or CBSE, and the nearest confirmed international campuses are far away in Guwahati and Kolkata. Because affiliations change, ask any school about its status directly." },
    { question: "My child boards outside Mizoram. Can you help at Christmas or in summer?", answer: "Yes, and long holidays are the busiest time for such requests. We build a concentrated block from the school's own worksheets and recent papers, then ease into a weekly class when term restarts. The plan fits around the journey home." },
    { question: "Will a tutor write my child's IA?", answer: "No. A tutor may help choose a workable question, explain the criteria and comment on a draft in general terms, but the data, reasoning and words must be your child's. Requests that cross that line are declined politely." },
    { question: "Do you teach younger students in PYP and MYP?", answer: "We do. MYP lessons tend to centre on criterion-based writing and Maths, PYP lessons on reading, number and speaking up. Sessions for young children are short, often with a parent close by, followed by a brief summary." },
    { question: "Is teaching over video as good as a classroom visit?", answer: "For specialised subjects it frequently works better, since we choose the tutor by syllabus instead of street. A live whiteboard, prompt marking and written notes carry most of what a visit offers. You need a laptop, reliable signal and a quiet corner." },
    { question: "How do you select tutors?", answer: "We look at qualifications, recent teaching of the exact course and how clearly they explain. Then the trial lesson tests them in front of you. If the match is poor, we replace the tutor and pass the notes along." },
    { question: "When should we begin?", answer: "The start of the course is best, Class 11 for the Diploma or Grade 9 for IGCSE. Habits set early last. Many students begin just before a mock or a resit, though, and a focused few weeks still helps." },
    { question: "Can my child move from the Mizoram Board to IB or IGCSE?", answer: "Yes. A tutor helps with written English and command words, the usual stumbling blocks. The harder step is finding a school teaching the programme, and its admission rules are the school's to state. We can advise on timing but cannot secure a seat." },
    { question: "What if my child and the tutor do not get on?", answer: "Tell us and we will arrange someone else at no charge. We check in every few weeks anyway. Changing tutor is simply another trial, and no student should have to persevere with a poor fit." },
    { question: "Can you support Mizo alongside IB or IGCSE?", answer: "Mizo is not among the standard Cambridge or Edexcel IGCSE choices, and in the IB it depends on the school. We concentrate on English, Hindi and the core subjects, and can talk through language options with you." },
    { question: "Do you teach on Sundays?", answer: "No. We respect the Sunday observance most Mizo families keep, and plan weekday or Saturday lessons around church and choir evenings. Timings are agreed with you before the first lesson." },
    { question: "How do I start from Lunglei?", answer: "Email support@ibgram.com or WhatsApp +91 7439 368 115 with the subject, level and any timing limits. Suggestions and trial slots usually come within a day or two, and the first lesson is free." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "The main page for our tutoring." },
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "Every Indian city we teach online." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The only region with home visits." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB lessons from PYP through DP." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel, subject by subject." },
    { label: "IB PYP", href: "/programmes/pyp/", description: "Early-years inquiry units." },
    { label: "IB MYP", href: "/programmes/myp/", description: "Criteria-marked middle school work." },
    { label: "IB Diploma", href: "/programmes/dp/", description: "Six subjects and the core." },
    { label: "IB CP", href: "/programmes/cp/", description: "A vocational-flavoured IB route." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Analysis or Applications, HL or SL." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles sorted by subject." },
    { label: "Admissions test preparation", href: "/admissions/test-prep/", description: "Preparing for entrance exams." },
    { label: "Contact us", href: "/contact-us/", description: "Reach us or book a free lesson." },
    { label: "Blog", href: "/blog/", description: "Articles on studying for the IB and IGCSE." },
    { label: "IB and IGCSE tutoring in Aizawl", href: "/aizawl/", description: "Mizoram's capital, also taught online." },
    { label: "IB and IGCSE tutoring in Guwahati", href: "/guwahati/", description: "The nearest big city with a Cambridge link." },
    { label: "IB and IGCSE tutoring in Shillong", href: "/shillong/", description: "Another hill city in the Northeast." },
    { label: "IB and IGCSE tutoring in Imphal", href: "/imphal/", description: "Manipur's capital, served online." },
  ],

  closingHeading: "Arrange a free first lesson for your Lunglei student",
  closingBody:
    "Give us the programme, subject and level, where your child stands today and the weekday hours that suit your household, leaving Sundays free. You will get tutor suggestions with reasons, trial slots, and an opening lesson that costs nothing. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp to begin.",
};
