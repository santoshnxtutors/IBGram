import type { CitySeoPage } from "../types";

/**
 * /bhab/ - IB and IGCSE tutoring page for Bhabua, Kaimur district, Bihar. The plan row "Bhab" is a truncated
 * name from the source PDF; in Bihar it resolves to Bhabua (also spelt Bhabhua), the Kaimur headquarters.
 * Online-only delivery: tutors do not visit homes in Bhabua, since in-person home tuition is offered only in
 * Gurugram and parts of Delhi NCR. No IB or Cambridge school in the town was confirmed, so stripSchools is
 * empty; clusters are honestly labelled nearby cities using names already verified on neighbouring pages.
 */
export const bhab: CitySeoPage = {
  slug: "bhab",
  countryName: "Bhabua",
  countryNameLong: "Bhabua, Kaimur, Bihar",
  demonym: "Bhabua",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are set around Chhath and Durga Puja, the June heat, the July to September paddy rains on the Kaimur plateau and the power cuts that sometimes interrupt an evening",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.045, longitude: 83.605 },
  wikipedia: "https://en.wikipedia.org/wiki/Bhabua",
  alternateNames: ["Bhabhua", "Bhabua Kaimur", "Bhabua Bihar", "Bhabua Road"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Bhabua | Online Home Tuition, Kaimur",
  metaDescription:
    "Online IB and IGCSE tutors for Bhabua, Kaimur: DP, MYP, PYP, Cambridge and Edexcel, live one-to-one at home with a free trial lesson and a written note.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Bhabua",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR BHABUA AND KAIMUR",
  heroSubtitle:
    "Bhabua sits on the Kaimur plateau, 84 km from Varanasi, and a family here who wants an IB or Cambridge route for a child usually has to look beyond the district. Private tuition from home, live and one-to-one, is how IB Gram serves IB and IGCSE tutors in Bhabua: the tutor appears on a laptop screen, not at the door, because in-person home visits run only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Bhabua",
  imageAltText: "Bhabua student at a desk near a window, taking a live online IB Physics lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Bhabua",
    "IGCSE tutor Bhabua",
    "IB home tuition Bhabua",
    "IGCSE home tuition Bhabua",
    "IB private tuition Bhabua",
    "IB Maths tutor Bhabua",
    "IGCSE Maths tutor Bhabua",
    "IB Physics tutor Bhabua",
    "IB Chemistry tutor Bhabua",
    "IB Biology tutor Bhabua",
    "IB DP tutor Bhabua",
    "IB MYP tutor Bhabua",
    "IB PYP tutor Bhabua",
    "IGCSE online tuition Bhabua",
    "IB tutor Kaimur",
    "IB tutor Bhabhua",
    "IGCSE tutor Bhabua Road",
    "online IB tutor Bihar",
    "Bhab IB IGCSE tuition",
    "IB tuition Bhabua Kaimur Bihar",
  ],

  heroTrustPoints: [
    "The tutor is chosen for the exact IB course and level or the Cambridge or Edexcel syllabus code, not for living in Kaimur",
    "Delivered online in Bhabua; in-person home visits exist only in Gurugram and parts of Delhi NCR",
    "A free trial lesson and a written note from it before any commitment",
    "Independent of the IB, Cambridge, Pearson and any school named on this page",
  ],
  heroStats: [
    { value: "Kaimur plateau", label: "Built for a small-town family" },
    { value: "PYP to DP", label: "IB coverage" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards" },
    { value: "Free trial", label: "No cost to start" },
  ],

  intro: {
    heading: "Bhabua, Kaimur: where an IB or IGCSE syllabus has to come to the child",
    paragraphs: [
      "Bhabua is the administrative seat of Kaimur district, tucked against the Kaimur range with the Durgavati area to the south and the Grand Trunk corridor to the north. The railway halt that serves it, Bhabua Road, is about 14 km away from the town itself. Most children here study under the Bihar School Examination Board or CBSE, and the talk at the dinner table is about engineering and medical entrance, government service or a move to Patna, Varanasi or Delhi for college.",
      "IB and IGCSE enter the picture for particular reasons. A father transferred to a central-government or railway posting may be told that the next station uses an international curriculum. A family with relatives abroad may want a child to keep an English-medium, internationally recognised record. Some parents simply watch a cousin in Delhi sit Cambridge papers and ask what it would take. We could not confirm any IB or Cambridge school inside Bhabua, so the subject support has to arrive from elsewhere.",
      "That is the job IB Gram does here. Tutors are based in India and teach live over video, one-to-one, in Indian Standard Time, matched to the course the student will really sit. Nobody has to cross the Kaimur ghats or drive to Varanasi for a class. An unstable evening power supply is planned for, with a phone hotspot as backup and a recording of the day's diagrams sent afterwards.",
      "One honest line for anyone who searched 'home tuition'. Our tutors do not visit homes in Bhabua. In-person teaching runs only in Gurugram and parts of Delhi NCR. In Bhabua, home tuition means a student learning at home, online, from a tutor whose subject and syllabus fit. Tutors coach and mark practice, but they never write Internal Assessments, Extended Essays, TOK essays or coursework, and IB Gram is not affiliated with the IB, Cambridge, Pearson or any school named here.",
    ],
    bullets: [
      "IB PYP, MYP, Diploma and Career-related Programme subjects, taught by subject-specialist tutors",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended, Foundation and Higher",
      "Live private lessons online, timed around the Bhabua school day and Bihar power cuts",
      "A free trial lesson and a written note after every session",
      "No visits to Bhabua homes; home visits stay in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Kaimur families meet the IB late and from the side, so the programme notes below start from where a Bihar board or CBSE child is today, not from the brochure. Ask us which programme your child's destination school actually runs before you choose a course.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "The PYP organises learning around six transdisciplinary themes, with units driven by questions the children raise themselves. It is taught by one classroom teacher, builds reading, writing and number sense through projects, and ends with a student-led Exhibition. There is no external examination.",
      countryNote:
        "A Bhabua child heading into a PYP school after a move usually arrives strong on memory work and recitation, and needs help speaking up, explaining reasoning and writing in full sentences.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Eight subject groups are assessed against published criteria, in tasks that look more like reports and investigations than chapter tests. Students complete a Personal Project, and a few schools also take on-screen exams at the end of Year 5.",
      countryNote:
        "Children coming from Bihar board Class 8 or 9 need practice reading a criterion, working out what an 'explain' task wants, and building a written answer rather than recalling a textbook paragraph.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students take six subjects across languages, sciences, maths, humanities and the arts, three at Higher Level. The core adds TOK, the Extended Essay and CAS. Final papers are sat mostly in May, with a smaller November session in some countries.",
      countryNote:
        "In Bhabua the Diploma request is typically for a student who joined a Varanasi, Patna, Delhi or boarding-school class, or who studies with an online school, and the three sciences and Maths dominate.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs a few Diploma courses with a career-related study chosen by the school, plus a reflective project and personal and professional skills. It is offered in very few Indian schools and suits students with a clear vocational direction.",
      countryNote:
        "Almost nobody in Kaimur asks for the CP; if a student lands in one elsewhere, we support the Diploma-level courses inside it and help plan the reflective project.",
    },
  ],

  subjectsIntro:
    "Matching begins with the precise course: Analysis and Approaches or Applications and Interpretation, Higher or Standard Level, and the May or November session the student is aiming at. A Bihar board Class 10 pass gives a student a solid algebra base, but the gap usually lies in unfamiliar problem wording and in written explanation, and the first lesson measures exactly that.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "For students who like algebra and calculus. Board-trained pupils often know the methods but freeze when a question gives no hint about which one to use, so we drill open-ended multi-step problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, financial maths and modelling with a graphing calculator. The exploration works best with a dataset the student has actually gathered, such as local crop or rainfall figures." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics, with a real emphasis on units, uncertainty and reading the data booklet quickly under time pressure." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, kinetics and organic chemistry. Practical design has to be realistic for a school laboratory, which we keep in view when planning the investigation." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, genetics, ecology and physiology. Most lost marks come from not matching the command term, so practice is built around 'outline', 'discuss' and 'evaluate'." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram discipline and live examples drawn from India's economy, with HL adding quantitative work in Paper 3." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study answers that apply a named tool to the firm in the stimulus, plus a research project on an organisation the student can really reach." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text commentary, comparative essays and the individual oral, each trained separately and marked against the criteria." },
    { name: "IB English B", levels: "HL / SL", description: "For students who speak Hindi or Bhojpuri at home; productive writing, listening and the interactive oral get regular timed practice." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Formal letters, articles and speeches in standard Hindi, for students who speak Bhojpuri or Magahi at home but rarely write exam-register Hindi." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, networks and databases with programming practice, so the internally assessed solution has working code and clear documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Approaches to behaviour, studies chosen with care and essays that argue a position in place of listing findings." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Systems thinking is easy to ground in a district with a river valley, plateau forests and monsoon farming close to home." },
    { name: "IB Geography", levels: "HL / SL", description: "Hazards, resource use and change, with a fieldwork investigation planned early enough to be completed in a school term." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and sustained essays practised under timed conditions, with Indian and world-history case choices discussed before they are locked in." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion-led sessions on knowledge claims and the prescribed titles, plus help structuring the exhibition commentary." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "A tutor helps refine the research question and keep the student on a realistic timetable. The essay itself is always the student's own work." },
  ],

  igcseSubjectsIntro:
    "An IGCSE student from Bhabua first needs to know the board. Cambridge and Edexcel use overlapping subject names, but the syllabus codes, paper structures and exam series differ, and a late switch wastes months. We confirm the board and the tier with you before the first lesson.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Non-calculator fluency, clear working and the layout that collects method marks on every line of a long answer." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, trigonometric identities and vectors, which eases the later step into IB Maths Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel phrases questions differently from Cambridge, so we practise from Edexcel's own past papers and mark schemes." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formulae, circuits, waves and thermal physics, followed by the alternative-to-practical paper that students tend to postpone until too late." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, the reactivity series and organic families, built up through regular structured questions." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Transport, genetics and ecology, with answers trained to mirror the wording of the mark scheme." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Accurate diagrams first, then the extended evaluation that lifts a grade." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, pseudocode and Python alongside theory, practised on paper as well as on screen." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing, listening and speaking for students who think in Hindi or Bhojpuri." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "A comfortable subject for most Bihar students and an easy grade to protect with steady writing practice." },
  ],

  regionsTitle: "Bhabua and Kaimur areas our online tutors serve",
  regionsIntro:
    "Every lesson is online, so these entries describe local context, not travel. They note where a locality sits relative to the town centre, which schools and coaching classes cluster nearby, and what tends to disrupt a study evening.",
  regions: [
    { name: "Bhabua town centre", note: "The main market, court and district offices sit here, with the most coaching classes and private schools within a few lanes. Evening lessons avoid the wedding-season noise in the market." },
    { name: "Bhabua Road", note: "The railway halt for the Howrah to New Delhi Grand Chord, about 14 km from the town. Families who commute to Varanasi, Gaya or Patna for work often live near here." },
    { name: "Kudra and the NH 2 belt", note: "Along the old Grand Trunk corridor north of the town, where trucks and buses run all night. Good mobile data is usually available, which suits video lessons." },
    { name: "Mohania", note: "A large market town on the road to Varanasi, used by students as a stop on the way to coaching in the city." },
    { name: "Chainpur", note: "A smaller town near historic fort remains, where students usually take the bus to Bhabua or Sasaram for senior classes." },
    { name: "Ramgarh, Kaimur", note: "A block town on the plateau route, where families rely on the state board and government schools, and lessons need a strong mobile signal." },
    { name: "Adhaura", note: "Hill-side block in the south of the district with forest cover. Monsoon rains can cut roads for days, so online lessons are a practical fit." },
    { name: "Bhagwanpur", note: "An agricultural block where school children often help in the fields during harvest, so sessions are scheduled outside the paddy and wheat weeks." },
    { name: "Durgawati", note: "Named after the river and reservoir nearby, this area has a mix of farm families and government employees whose children study in Bhabua town." },
    { name: "Karmanasa river and Mundeshwari area", note: "Well known for the ancient hilltop temple and waterfalls. Tourist traffic rises at Navratri, and families here schedule lessons around the festival." },
  ],

  schoolClusters: [
    {
      city: "Bhabua itself",
      note: "We could not confirm any school in Bhabua or Kaimur that teaches the IB or Cambridge or Edexcel IGCSE, so this page names none here. Local schooling runs on the Bihar board and CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Varanasi (about 84 km)",
      note: "The nearest large city that families from Bhabua commute to or relocate to. International-curriculum options are limited, and we list only what has been verified.",
      schools: ["Sunbeam International School, Varuna"],
    },
    {
      city: "Nearby: Kolkata (boarding and relocation)",
      note: "A common destination for families posted east along the Grand Chord railway line.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Calcutta"],
    },
    {
      city: "Nearby: Delhi NCR (boarding and relocation)",
      note: "Where most IB and IGCSE transfers from Bihar end up, given the direct Delhi trains from the district.",
      schools: ["Vasant Valley School, Delhi", "Sanskriti School, Delhi", "The British School, New Delhi"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service. We are not affiliated with, endorsed by or partnered with the International Baccalaureate, Cambridge, Pearson or any school named on this page. Schools are listed only to show which cities families from Bhabua look towards, and only where an IB or Cambridge or Edexcel offer could be confirmed. Check with the school for its current programmes.",

  tutorsIntro:
    "These are IB Gram tutors who teach IB and IGCSE subjects live from India. Each profile shows the subjects, levels and experience, and the trial lesson tells you whether the style suits your child. All of them work in IST, which makes an after-school slot in Bhabua easy to fix.",

  modesIntro:
    "Since tutors do not visit Bhabua homes, there are three online ways to learn, each matched to a different kind of family and deadline.",
  modes: [
    {
      title: "Online one-to-one from home",
      description: "The core format. The student sits at home with a laptop and a tutor who knows the syllabus, with a shared whiteboard for diagrams and graphs.",
      bullets: ["Live, private, one student per tutor", "Written note after every session", "Session recordings on request for revision"],
    },
    {
      title: "Small online group",
      description: "Two or three students on the same course, good for siblings or cousins in a joint family and for lowering the cost of each hour.",
      bullets: ["Same subject and level", "Shared past papers", "Rates quoted in writing first"],
    },
    {
      title: "Exam-season intensive",
      description: "A short, dense run of sessions before the May or November papers or the Cambridge and Edexcel series, built around past-paper timing.",
      bullets: ["Weekly timed papers", "Error log kept with the tutor", "Planned around Chhath and Durga Puja"],
    },
  ],

  sections: [
    {
      heading: "What does IB and IGCSE tutoring look like when a school is hundreds of kilometres away?",
      paragraphs: [
        "It looks like a regular timetable that happens to be delivered by video. A student in Bhabua picks two or three evenings a week, logs in from a laptop, and works live with a tutor who teaches that exact course. The tutor shares a whiteboard, sets problems, marks the answers and sends a note summarising what was covered and what to do before next time. Nothing about the learning requires the student to be in the same room as the tutor.",
        "The harder question is whether the student is working to the right syllabus. A child who attends a CBSE or Bihar board school in town but plans to join an IB Diploma class elsewhere needs a bridging plan, not a full course. We usually begin with a diagnostic of ten to fifteen questions and from that decide whether the first month should be gap-filling or forward-teaching.",
        "Distance also makes the school's own timetable matter. A student at a school in Varanasi or Delhi has class deadlines, internal tests and IA checkpoints that we cannot see. So we ask for the course outline, the teacher's name and the coming assessment dates, and then sequence the tutoring around them. The goal is to support what the school is doing, not to run a parallel syllabus.",
        "For students who study fully online, for example with an international online school, the tutor often becomes the only person who sees the student's work in real time. In that case we suggest more frequent short sessions, rather than one long weekly class, so that misunderstandings do not sit for seven days.",
        "Tutors coach and explain. They do not write the Internal Assessment, the Extended Essay, TOK essays or any coursework that is marked, because that would be dishonest to the examiners and harm the student in the long run.",
      ],
    },
    {
      heading: "Which schools and families in Bhabua look at IB and IGCSE?",
      paragraphs: [
        "Bhabua does not have a settled international-school scene, and we have not found an IB or Cambridge school in Kaimur. What exists is a steady trickle of families with particular reasons. Some have a parent in the railways, a bank, central services or the paramilitary, which means transfers to large cities every few years and a child who might land in an IB class at short notice.",
        "A second group is families with income from outside Bihar. A relative working in the Gulf, a brother in Bengaluru's IT sector or a sister abroad can shift how a household thinks about schooling. Parents begin asking what a globally portable qualification would mean, and whether starting an IGCSE-style syllabus at Class 9 could keep doors open to overseas universities.",
        "A third group is students who study in Varanasi, Patna, Gaya or Delhi as boarders or hostellers, while their families stay in Kaimur. These students need exam-specific help during holidays, when they are home, and online sessions fit that rhythm: two weeks of intensive lessons in June or December, then a lighter schedule back at school.",
        "Because local choices are so thin, we are cautious with school names. On this page, nearby clusters are labelled as nearby, and only schools that we have been able to confirm are listed. The list is not a recommendation, and it should never replace a visit to the school and a conversation with its admissions office.",
      ],
      bullets: [
        "Transferred families: railway, bank, central-government and defence postings",
        "Families with relatives abroad who want an internationally readable record",
        "Hostel students home for the June and December breaks",
        "Online-school students who need a live subject tutor",
      ],
    },
    {
      heading: "How do Bihar board, CBSE, IB and IGCSE compare for a Bhabua student?",
      paragraphs: [
        "The Bihar School Examination Board runs a mostly content-recall exam, with strong Hindi and Sanskrit options and a syllabus aligned with NCERT in many subjects. CBSE uses NCERT books and a standard national examination pattern. Both lead smoothly to Indian entrance exams. IB and IGCSE ask for extended answers, data handling and independent investigation, and the assessment style is noticeably different.",
        "That difference is what our first lessons work on. A student who is fluent in NCERT Chemistry still needs to practise writing a clear mechanism and a full evaluation of an experiment. A student who has never written a 600-word argument in English needs time with model answers before writing anything for marks.",
        "Hindi plays a special role. Many Bhabua students are more comfortable in Hindi or Bhojpuri than in English, and IB and IGCSE papers are in English for most subjects. We do not dilute the syllabus, but tutors switch between Hindi and English when explaining a stubborn concept, then return to exam English for the written answer.",
        "The table below gives a summary. It is a general comparison and not a school-by-school guide. Always check a school's actual offer, because not every school runs every option.",
      ],
      table: {
        caption: "Bihar board, CBSE, IGCSE and IB Diploma compared for a student in Bhabua",
        columns: ["Feature", "Bihar board", "CBSE", "IGCSE (Cambridge or Edexcel)", "IB Diploma"],
        rows: [
          ["Typical exam years", "Class 10 and 12", "Class 10 and 12", "Grades 9-10, sat at 15-16", "Class 11-12, six subjects"],
          ["Teaching language", "Hindi or English", "Hindi or English", "English", "English, with a second language"],
          ["Assessment style", "Mostly recall and short answers", "Mix of objective and written", "Structured papers with practicals", "Essays, IAs, core and external papers"],
          ["Coursework", "Limited practical records", "Internal assessments", "Some subjects", "IAs, Extended Essay, TOK"],
          ["Link to Indian entrance tests", "Direct for JEE, NEET and CUET", "Direct for JEE, NEET and CUET", "Needs Class 12 route afterwards", "AIU equivalence, CUET and NEET rules checked"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Bhabua and what drives the rate?",
      paragraphs: [
        "We do not publish prices, because the rate depends on several things that change by family. Every rate is quoted in writing before you book, and the first trial lesson is free. What follows is a map of the drivers, so that you can compare us with any other offer on the same terms.",
        "The first driver is the level of the course. A tutor for IB Maths Analysis and Approaches HL, Physics HL or Extended Mathematics at IGCSE is hard to find, and the rate reflects that experience. A tutor for a PYP reading plan or IGCSE English as a second language sits in a different band.",
        "The second driver is frequency. Two sessions a week through the school year cost more in total but tend to cost less per topic than one rushed session each week, because the tutor does not have to re-teach. The third is the format: one-to-one costs more per hour than a two- or three-student group, which suits siblings or cousins on the same syllabus.",
        "Finally, timing matters. Late-October and March are busy, since students prepare for the November and May exam sessions, and an intensive run over those months costs more than steady work begun in August. Free-trial lessons and a written note after each session mean there is no blind commitment, and a tutor change is offered if the fit is wrong.",
      ],
      bullets: [
        "Course and level (HL or SL, Core or Extended, Foundation or Higher)",
        "Weekly frequency and length of each session",
        "One-to-one or a small group of two or three",
        "Exam-season intensives cost more than steady work from August",
        "Rates always given in writing before the first paid lesson",
      ],
    },
    {
      heading: "Which is better for IB learning in Bhabua: online home tuition, a local coaching centre, a private tutor or self-study?",
      paragraphs: [
        "There is no single answer, but for IB and IGCSE the choice is narrower than it looks. Coaching centres in Bhabua and nearby towns are built for Bihar board, JEE, NEET and competitive exams, and we are not aware of one that offers IB or Cambridge subject teaching. A local private tutor may be excellent at Class 10 Maths but cannot usually teach Analysis and Approaches HL or an IGCSE practical paper.",
        "Self-study is possible for a disciplined student, and past papers are freely available. The difficulty is feedback. Without a tutor reading the working, a student cannot tell that a mark was lost for a missing unit or that an evaluation was too shallow. Self-study works best as a supplement to live teaching, not a replacement.",
        "Online one-to-one from IB Gram sits between these. It is not cheap like a neighbourhood tuition class, but it gives a subject-specific expert for each course, sends written feedback, and saves the many hours a family would spend travelling to Varanasi or Patna for a weekly class.",
        "The table below compares the four options on the points that matter most for this syllabus.",
      ],
      table: {
        caption: "Learning routes for an IB or IGCSE student in Bhabua",
        columns: ["Factor", "Online one-to-one (IB Gram)", "Local coaching centre", "Private home tutor", "Self-study"],
        rows: [
          ["Syllabus knowledge", "Tutor chosen for the exact IB or IGCSE course", "Built for Bihar board and entrance exams", "Varies, rarely IB or Cambridge", "Depends on the student"],
          ["Feedback on working", "Marked and explained, with a written note", "Generic, class-level", "Good if the tutor knows the syllabus", "None unless self-marked"],
          ["Travel and time", "None, from the student's own desk", "Daily travel in town", "Tutor or student travels", "None"],
          ["Flexibility around festivals", "High, reschedule in advance", "Fixed batches", "Negotiable", "Complete"],
          ["Good fit for", "IB or IGCSE subject depth", "Bihar board and JEE or NEET", "Basic school subjects", "Extra past-paper practice"],
        ],
      },
    },
    {
      heading: "When are the IB and IGCSE exams, and how do Bhabua's seasons shape the school year?",
      paragraphs: [
        "IB Diploma papers are sat mainly in May, with results released in early July, and a second session in November is offered in some school cohorts. Cambridge IGCSE runs in the June series and the October-November series, with results in August and January. Pearson Edexcel IGCSE has January, May-June and October-November windows depending on the subject.",
        "Bhabua's calendar leaves its own mark. The paddy planting season in June and July pulls older students into family fields, the monsoon rains from July through September can cut roads and sometimes power, and the oppressive heat in May makes afternoon study hard. Chhath, observed in October-November on the banks of ponds and rivers, is the single biggest break of the year, and Durga Puja arrives just before it.",
        "We plan the year backwards from the exam. An IB student sitting in May should have finished content by January, done full papers in February and March, and used April for error correction. An IGCSE student sitting in the October-November series should use the June and July break for past-paper blocks, then keep sessions light around Chhath.",
        "The table shows a typical planning calendar. Your school's own dates will differ, and we adjust week by week.",
      ],
      table: {
        caption: "A planning calendar for a Bhabua IB or IGCSE student",
        columns: ["Period", "What is happening", "What our tutors usually do"],
        rows: [
          ["January to February", "Mock exams for May IB and Cambridge candidates", "Timed full papers and error logs"],
          ["March to April", "Final revision before May; Holi break", "Targeted topic repair; short weekday sessions"],
          ["May to June", "IB and Cambridge papers; peak heat; paddy planting begins", "Early-morning slots; exam-day debrief"],
          ["July to September", "Monsoon, school term resumes; results for IB in July", "Strong foundation work for new Class 11 or Grade 10 students"],
          ["October to November", "Durga Puja, Chhath, Diwali; October-November Cambridge series", "Reduced weekly load, rescheduling planned in advance"],
          ["December", "Winter fog and cold; school break for hostel students", "Intensive revision blocks for students at home"],
        ],
      },
    },
    {
      heading: "What university routes open up from Bhabua after IB or IGCSE?",
      paragraphs: [
        "The first question families ask is whether an IB Diploma is accepted in India. It is, through the Association of Indian Universities, which issues an equivalence for IB Diploma holders, and many state and central universities use it. Always check the exact rules of the university and course, since they are revised from year to year.",
        "For central universities, the Common University Entrance Test for undergraduates is the route for most programmes. IB and IGCSE students can sit CUET, and subjects that match the IB course, such as Physics or Economics, tend to align well with the test domains. A student planning for Banaras Hindu University in Varanasi, 84 km away, should look closely at the subject combination and eligibility rules.",
        "Engineering and medicine need extra care. JEE Main and NEET require specific subject combinations and an eligibility certificate, and IB students sometimes need the AIU equivalence and proof of Physics, Chemistry and Mathematics or Biology at the right level. Families should verify current NTA and counselling rules before choosing subjects, not after.",
        "Study abroad is the other pathway. IB Diploma grades are widely recognised by universities in the UK, USA, Canada and Australia, and IGCSE results feed directly into the sixth-form or IB choices that come next. Bhabua's students who go abroad usually use IB Gram for the pre-university preparation, and leave the application process to a school counsellor or independent adviser.",
      ],
      bullets: [
        "AIU equivalence for Indian admissions, checked for each university",
        "CUET-UG for central universities, including Banaras Hindu University",
        "JEE Main and NEET eligibility checked against subject choices early",
        "UK, US, Canadian and Australian universities read IB and IGCSE results",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught online for a Bhabua student?",
      paragraphs: [
        "IB Maths comes in two courses. Analysis and Approaches suits students who enjoy algebra, calculus and proof, and it is the usual choice for engineering and pure science. Applications and Interpretation leans on statistics, modelling and technology, and suits economics, business and social science. Each has a Higher and a Standard Level, and the choice should be made with the target course in mind.",
        "Online, we teach maths on a shared whiteboard with a tablet pen, and the student works the same problem in real time. The tutor sees every line of working, which is exactly the feedback a self-studying student lacks. We build topic-by-topic mastery, then move to timed paper sections, and leave a full non-calculator paper for the last phase.",
        "Physics, Chemistry and Biology share a pattern. The first months are for clear concepts and accurate calculations, the next for exam-style questions, and the final phase for practical skills. The internal assessment asks for an investigation the student designs, so we help the student choose a feasible question and a method that a school lab can support, without writing it for them.",
        "Physics HL is commonly paired with Maths AA HL, and our physics tutors teach the two together so a student sees where calculus shows up. Chemistry HL and Biology HL students get regular data-analysis drills, since the paper 2 and paper 3 data questions are where most marks drift away.",
        "For Bhabua students who come from the Bihar board, we recommend a short bridging block in whichever science they will take at Higher Level, before the full course begins.",
      ],
    },
    {
      heading: "How should a Bhabua family choose IGCSE subjects and tiers?",
      paragraphs: [
        "IGCSE students normally take five to nine subjects. Most choose Mathematics, English, at least one science and a humanities or language option, with a second language such as Hindi as a valuable extra. The right set depends on what comes next. Students headed to an IB Diploma need strong Maths, sciences and English, while those planning A Levels need a base in the subjects they will continue.",
        "Tier choice is the most misunderstood part. Cambridge offers Core, which caps the grade at C, and Extended, which goes up to A*. Edexcel offers Foundation, capped at 5, and Higher, which goes up to 9. A student who wants a science-heavy future should nearly always be entered for Extended or Higher, even if it feels demanding at first.",
        "Coursework and practicals differ by board and subject. Cambridge science carries either a practical paper or an alternative-to-practical written paper, while Edexcel uses a written paper assessing practical skills. For an online student, the alternative-to-practical route is the usual choice, and it can be taught very effectively on screen with diagrams and data.",
        "Families often ask whether to start IGCSE at Grade 9 or Grade 10. Two years is the standard, but an able student with a good foundation can complete it in a year and a half. We recommend a diagnostic in the first week, then a scheme of work matched to the exam series you are aiming for.",
      ],
      bullets: [
        "Core (up to grade C) and Extended (up to A*) for Cambridge",
        "Foundation (up to 5) and Higher (up to 9) for Edexcel",
        "Hindi as a second language is a strong extra subject for most Bihar students",
        "Additional Mathematics is worth adding for students aiming at IB Maths AA",
      ],
    },
  ],

  process: [
    { title: "Message us on WhatsApp", description: "Tell us the board, the course, the level and the next exam or school deadline. Write in Hindi or English, whichever is easier." },
    { title: "Free diagnostic trial", description: "A short live lesson that doubles as a test. The tutor sees where the child stands and explains what an exam answer looks like." },
    { title: "Written plan and rate", description: "You receive the weekly schedule, the topics in order and the rate, all in writing, before anything is paid." },
    { title: "Weekly sessions and notes", description: "Lessons run online in IST. After each one the tutor sends a short note on what was covered and what to practise." },
    { title: "Review and adjust", description: "After a month we look at progress together, and we change the tutor if the fit is not right." },
  ],

  whyPoints: [
    { title: "Right tutor, not nearest tutor", description: "A Bhabua family cannot pick from a local pool of IB teachers. We match by course, level and exam board from tutors across India." },
    { title: "Honest about delivery", description: "Online only in Bhabua, no promise of visits, and a clear note on where in-person tuition does exist." },
    { title: "Written feedback every time", description: "A parent who cannot sit in on a lesson still sees what happened, in plain words, within the day." },
    { title: "Flexible around Bihar's calendar", description: "Chhath, Durga Puja, the wedding season and the June heat are treated as planning inputs, not interruptions." },
    { title: "Coaching, not ghost-writing", description: "Tutors explain, set practice and mark it, and they never write assessed work." },
    { title: "Free trial and tutor change", description: "You can try a lesson without paying, and swap to another tutor if the first is not right." },
  ],

  faqs: [
    { question: "Are there IB and IGCSE tutors in Bhabua?", answer: "Yes, online. IB Gram tutors teach IB and IGCSE live over video to students in Bhabua, in Indian Standard Time. We could not confirm any local IB or Cambridge school in Kaimur, so you choose a tutor by subject and exam board, not by distance. A free trial lesson lets your child meet the tutor before any payment is agreed." },
    { question: "Do tutors come to my home in Bhabua for tuition?", answer: "No, tutors do not visit homes in Bhabua. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Bhabua, private tuition from home means the student learns online, on a laptop, in a live one-to-one lesson. This saves travel, and it lets us choose from tutors across India." },
    { question: "Is there an IB school in Bhabua or Kaimur?", answer: "We could not confirm one. Local schooling runs on the Bihar board and CBSE. Families who want an IB or Cambridge school usually look at Varanasi, Patna, Kolkata or Delhi NCR, sometimes as boarders. Always contact a school directly for its current programmes, because offerings change and we are not affiliated with any of them." },
    { question: "What does IB tuition in Bhabua cost?", answer: "We do not publish prices. The rate depends on the course and level, such as IB Maths AA HL or IGCSE English, how many sessions you book each week, and whether it is one-to-one or a small group. Every rate is quoted in writing before you book, and the first trial lesson is free." },
    { question: "Can my child study IB Maths online from Bhabua?", answer: "Yes. Maths suits online teaching well, because the tutor and student share a whiteboard and the tutor sees every line of working. We teach both Analysis and Approaches and Applications and Interpretation, at Higher and Standard Level, and begin with a short diagnostic to see what the child already knows." },
    { question: "Which IGCSE board should a Bhabua student choose, Cambridge or Edexcel?", answer: "The school or the next destination usually decides. Cambridge and Pearson Edexcel cover similar subjects but use different syllabus codes, paper styles and exam series. If you are choosing freely, we suggest looking at the subjects and tier you want, past papers of each board and your preferred exam month, and we can advise during the trial." },
    { question: "Is the IB Diploma accepted for admission in Indian universities?", answer: "Generally yes, through the Association of Indian Universities equivalence, but every university and course sets its own rules. Central universities use CUET-UG for most programmes, and JEE Main and NEET have their own eligibility requirements. Check the current rules for your target course before choosing IB subjects." },
    { question: "Can you help with the IA, Extended Essay or TOK essay?", answer: "We coach, but we never write or edit assessed work. A tutor can help a student choose a workable research question, plan the structure, understand the criteria and review a draft for clarity. The writing and the ideas must be the student's own, which is what IB examiners and universities expect." },
    { question: "When do IB and IGCSE exams take place?", answer: "IB Diploma papers are mostly in May, with some schools also using November. Cambridge IGCSE has June and October-November series, and Edexcel has January, May-June and October-November windows. Your school will confirm the exact dates, and we plan lessons backwards from your series." },
    { question: "How do power cuts and weak internet affect online lessons?", answer: "We plan for them. Students are asked to keep a phone hotspot as backup, lessons are kept to a single device, and the tutor sends a written summary and any diagrams after each session. If a lesson is cut short, we reschedule it, and a recording can be shared on request." },
    { question: "Will lessons work around Chhath, Durga Puja and the wedding season?", answer: "Yes. Tell us the dates in advance and we reschedule without penalty. We usually reduce weekly load around Chhath and Durga Puja and keep exam-season intensives away from them where possible. Families in Kaimur often prefer early-morning slots in the hottest weeks of May and June." },
    { question: "Can tutors teach in Hindi or Bhojpuri?", answer: "Tutors teach mostly in English, since IB and IGCSE exams are in English, but they can explain a hard idea in Hindi first and return to English for the written answer. Bhojpuri is not a formal teaching language, though many tutors understand it well enough to reassure a nervous child." },
    { question: "My child is in a Bihar board school. Can they move to IB later?", answer: "Yes, and many do. The best time to move is at the start of Class 9 or Class 11, because the programmes are built around those years. A bridging plan over a few months fills the gaps in English, maths and sciences and builds the writing habits the IB expects, which we can start during the trial lesson." },
    { question: "How many lessons a week does a student need?", answer: "Most students do well with two sessions a week per subject, one for teaching and one for practice. In the last eight weeks before an exam, three sessions or a short intensive can help. We suggest a plan after the trial, and we adjust it if the child needs more or less." },
    { question: "Can siblings or cousins share a tutor?", answer: "Yes, if they are on the same subject and level. A small group of two or three students costs less per person, and a joint family in Bhabua often chooses this. The tutor still gives individual feedback, but the pace has to suit all of the group." },
    { question: "What if we do not like the tutor?", answer: "Tell us and we will arrange another one. The trial lesson is free, the written note after every session shows you what is being taught, and a tutor change is part of the service, not a favour. We would rather fit the child to the right teacher early than lose a term." },
    { question: "How do we get started?", answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with your child's class, board and subjects. We will suggest a tutor, agree a trial time and send the rate in writing. You do not need to pay before the trial, and there is no obligation to continue afterwards." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Start here for an overview of IB and IGCSE tuition." },
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "City pages for families in every part of the country." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject-by-subject IB tutor profiles." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the Diploma works and how we support it." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based learning for Class 6 to 10." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led learning for younger students." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches and Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of IB Gram tutors." },
    { label: "Contact us", href: "/contact-us/", description: "Write or message us to book a free trial." },
    { label: "IB and IGCSE tutors in Sasaram", href: "/sasaram/", description: "A neighbouring Rohtas district page for families along the Grand Chord." },
    { label: "IB and IGCSE tutors in Buxar", href: "/buxar/", description: "Online tutoring page for families in western Bihar." },
    { label: "IB and IGCSE tutors in Varanasi", href: "/varanasi/", description: "The nearest large city that Bhabua families travel to." },
  ],

  closingHeading: "Start with a free trial lesson from Bhabua",
  closingBody:
    "Send your child's class, board and subjects to +91 7439 368 115 on WhatsApp or to support@ibgram.com. We will suggest a tutor, arrange a trial and quote the rate in writing before anything is paid. The lesson is online, and Bhabua is well served by it.",
};
