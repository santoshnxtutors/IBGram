import type { CitySeoPage } from "../types";

/**
 * Jhumri Tilaiya (Koderma district, Jharkhand). No IB or Cambridge / Edexcel school could be confirmed in the
 * town, so stripSchools is empty and the clusters point honestly to Kolkata and Delhi NCR, whose schools are
 * already verified on neighbouring pages. Online only; no in-person tuition outside Gurugram and parts of Delhi NCR.
 */
export const jhumriTilaiya: CitySeoPage = {
  slug: "jhumri-tilaiya",
  countryName: "Jhumri Tilaiya",
  countryNameLong: "Jhumri Tilaiya, Jharkhand",
  demonym: "Jhumri Tilaiya",
  state: "Jharkhand",
  stateCode: "IN-JH",
  flagCode: "in",
  countryCode: "IN",
  region: "Jharkhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons after the school day and any evening tuition, moved around Chhath, Saraswati Puja week and the hottest afternoons of May and June",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.4333, longitude: 85.5167 },
  wikipedia: "https://en.wikipedia.org/wiki/Jhumri_Telaiya",
  alternateNames: ["Jhumri Telaiya", "Jhumritelaiya", "Jhumri Tilaiya Koderma", "Jhumri Talaiya"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Jhumri Tilaiya | Online Home Tuition",
  metaDescription:
    "One-to-one online home tuition for IB and IGCSE students in Jhumri Tilaiya, Koderma: DP, MYP, PYP, Cambridge and Edexcel subjects, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Jhumri Tilaiya",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION FOR JHUMRI TILAIYA",
  heroSubtitle:
    "Looking for private tuition from home in Jhumri Tilaiya for an IB or IGCSE course? Nobody in Koderma district teaches these syllabuses at a level that matches an international school, so our tutors, based elsewhere in India, teach live over video while your child sits at the family desk in Jhumri Tilaiya. Every lesson is one-to-one, tied to the exact programme and subject your child is studying, and booked around school, Koderma tuition timings and the town's power and festival rhythm.",
  primaryKeyword: "IB and IGCSE tutors in Jhumri Tilaiya",
  imageAltText: "IB tutor guiding a Jhumri Tilaiya student through a Mathematics problem on a live video lesson",
  secondaryKeywords: [
    "IB tutor Jhumri Tilaiya",
    "IGCSE tutor Jhumri Tilaiya",
    "IB home tuition Jhumri Tilaiya",
    "IGCSE home tuition Jhumri Tilaiya",
    "IB private tuition Jhumri Tilaiya",
    "IB Maths tutor Jhumri Tilaiya",
    "IGCSE Maths tutor Jhumri Tilaiya",
    "IB Physics tutor Jhumri Tilaiya",
    "IB Chemistry tutor Jhumri Tilaiya",
    "IB Biology tutor Jhumri Tilaiya",
    "IB DP tutor Jhumri Tilaiya",
    "IB MYP tutor Jhumri Tilaiya",
    "IB PYP tutor Jhumri Tilaiya",
    "IGCSE online tuition Jhumri Tilaiya",
    "IB tutor Koderma",
    "IGCSE tutor Koderma",
    "IB tutor Jhumri Telaiya",
    "online IB tutor Jharkhand",
    "IB tutor Tilaiya Dam",
  ],

  heroTrustPoints: [
    "Online home tuition, live and one-to-one, for every IB and IGCSE level",
    "Tutors matched to your child's programme, subject and exam session",
    "A free trial lesson before any fee is discussed",
    "Independent of the IB, Cambridge, Pearson and every school",
    "A written note after each session so parents can follow progress",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "IST", label: "Lessons on Jharkhand time" },
    { value: "Free trial", label: "Before you commit" },
    { value: "May & Nov", label: "Exam sessions planned around" },
  ],

  intro: {
    heading: "IB and IGCSE help for families in Jhumri Tilaiya who have to look beyond Koderma",
    paragraphs: [
      "Most people outside Jharkhand know Jhumri Tilaiya from old Vividh Bharati request programmes, where the town's name was read out so often that it became shorthand for a place at the end of the radio dial. Today it is a working town of mica traders, railway and power-sector families, Sainik School staff and small-business owners, sitting in the Damodar valley of Koderma district. The local tutoring market is built for the Jharkhand Academic Council and CBSE papers, which is exactly what most of its students sit.",
      "A family whose child follows the IB or Cambridge and Edexcel IGCSE is therefore unusual here. It typically happens because a parent was posted back from a metro or abroad, because a child is enrolled in a boarding school in another state, or because a family wants an international route to overseas universities. For those students, tuition has to come from somewhere else, and online home tuition is the honest way to get it: a qualified tutor on a live video call, with your child in a familiar room in Jhumri Tilaiya.",
      "We do not send anyone to your door. Tutors do not visit homes in Jhumri Tilaiya; in-person home visits run only in Gurugram and parts of Delhi NCR. What we offer is live private tuition at home, taught online, by teachers who have recently handled the same programme. That is the practical meaning of IB and IGCSE tutors in Jhumri Tilaiya on this page: Indian-based specialists, teaching in Indian Standard Time, reachable by your child every week.",
      "The sections below set out what the town can and cannot offer locally, how the syllabuses compare with the boards your neighbours know, what drives the cost, how the exam calendar collides with Jharkhand festivals, and how students from here reach universities. Nothing on the page is a promise of marks or a place; it is an account of how the tuition works and who it suits.",
    ],
  },

  programmesIntro:
    "IB Gram covers all four IB programmes and both major IGCSE boards. Here is how each stage looks for a student based in Jhumri Tilaiya, most of whom will reach it through a school outside the district.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A transdisciplinary primary curriculum built on units of inquiry instead of separate subject textbooks. Tutoring at this age is light: reading fluency, number sense, writing in full sentences and the confidence to explain a thought aloud.",
      countryNote:
        "Very few Koderma district families meet PYP, usually after a relocation. Short, playful evening calls work better than long sessions for a child also adjusting to a new town.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups assessed against criteria rather than a single paper, with interdisciplinary units and a personal project in the final year. Support focuses on command terms, criterion wording and showing reasoning in Mathematics and Sciences.",
      countryNote:
        "Students who moved from MYP schools into local CBSE or JAC classes often lose the criterion habit. A tutor keeps it alive, or eases a return to an international school later.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects at Higher or Standard Level, the Extended Essay, Theory of Knowledge and CAS. Tutors teach subject content, past-paper technique and exam timing, while internal assessments and essays stay the student's own work.",
      countryNote:
        "DP students from here often board in Delhi NCR, Kolkata or Dehradun. Weekend and holiday lessons from home fill the gap when a school's stretched timetable leaves a topic thin.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pairing of two or three DP courses with a career-related study and a reflective project. It suits students aiming at applied fields, and tutoring concentrates on the DP courses inside the combination.",
      countryNote:
        "CP is rare in Jharkhand. When a family meets it after moving, the main need is someone who can explain how its subject choices differ from a standard DP line.",
    },
  ],

  subjectsIntro:
    "IB subject tuition at Higher and Standard Level, taught online. A tutor is chosen for the specific course, not for general 'IB experience'.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions, proof-style reasoning and the algebra that JEE-minded families expect. Paper 1 without calculator gets regular attention." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and technology-led problem solving with the graphic display calculator, including how to write calculator-based steps the examiner can follow." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics through to fields and quantum physics, with practice on data-based questions and on writing short explanatory answers." },
    { name: "Chemistry", levels: "SL and HL", description: "Stoichiometry, energetics, equilibrium and organic mechanisms, plus the structured practical-skills questions that surprise students used to textbook lists." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology to ecology, with attention to precise terminology and experimental design questions. A sound route for NEET-inclined students too." },
    { name: "Economics", levels: "SL and HL", description: "Microeconomics, macroeconomics and development, taught through diagrams, real data and the evaluation that top-band answers require." },
    { name: "Business Management", levels: "SL and HL", description: "Organisation, marketing, finance and operations, using case-study papers that reward applying theory to the company in the stimulus." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming logic, data structures and systems, written for the paper format rather than for a general coding course." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Close reading, paper 1 commentary and comparative essay structure, with feedback on the student's own analytical voice." },
    { name: "English A: Literature", levels: "SL and HL", description: "Works in translation and in English, individual oral preparation and essay planning under time pressure." },
    { name: "Hindi A and Hindi B", levels: "SL and HL", description: "Language acquisition and literature for students in a Hindi-speaking home, with attention to register in written tasks." },
    { name: "Psychology", levels: "SL and HL", description: "Approaches to research, the core studies and the extended-response format, taught so a student can argue rather than recite." },
    { name: "History", levels: "SL and HL", description: "Source analysis and essay technique across the prescribed topics, where structure decides the band." },
    { name: "Theory of Knowledge", levels: "DP core", description: "Guidance on how knowledge questions work and how to think through an exhibition prompt. The essay and exhibition remain the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge (CAIE) and Pearson Edexcel IGCSE subjects taught online, with the paper code and tier checked before the first lesson, since the boards differ in layout.",
  igcseSubjects: [
    { name: "Mathematics (0580 and 4MA1)", levels: "Core and Extended", description: "Number, algebra, geometry, trigonometry and statistics, with Extended tier stretch on functions and vectors." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "A compact, demanding course in calculus and algebra, valuable for anyone heading towards IB Mathematics HL or an engineering degree." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, electricity, waves and atomic physics, with practical-skills and alternative-to-practical paper drills." },
    { name: "Chemistry", levels: "Core and Extended", description: "Atomic structure, reactions, organic basics and quantitative work, including paper 6 style planning questions." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, transport, inheritance and ecology, with the vocabulary discipline that keeps marks from leaking." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core and Extended", description: "For students taking the double-award route, with tutors who know how the three sciences are weighted." },
    { name: "Computer Science", levels: "Extended", description: "Algorithms, pseudocode and databases, written in the board's exact pseudocode conventions." },
    { name: "English First Language and English as a Second Language", levels: "Extended", description: "Directed writing, summary and comprehension, with careful reading of the mark scheme." },
    { name: "Hindi as a Second Language", levels: "Core and Extended", description: "Reading, writing and speaking tasks for students whose home language is Hindi or Magahi-influenced Hindi." },
    { name: "Economics and Business Studies", levels: "Extended", description: "Definitions, data handling and short-essay technique for social science options." },
  ],

  regionsTitle: "Areas of Jhumri Tilaiya and Koderma district we teach in",
  tutorsIntro:
    "Our tutors are based across India and teach in Indian Standard Time. For Jhumri Tilaiya students we shortlist people who have recently taught the exact IB or IGCSE course, since the town itself has no specialists to draw on.",
  regionsIntro:
    "Tuition is online, so the places below are not teaching venues. They are the parts of the district our students live in, with a note on how the local routine shapes the timing of a lesson.",
  regions: [
    { name: "Jhumri Telaiya town centre", note: "The main market belt and most residential lanes. Evening lessons usually start once the market shutters lower and tuition batches end." },
    { name: "Railway station side", note: "Families connected to the Grand Chord rail line live here. Shift patterns mean some parents prefer lessons on rest days." },
    { name: "Koderma town", note: "The district headquarters, a short ride away, with its own cluster of JAC and CBSE schools. Students commute for school, so afternoon online slots are tight." },
    { name: "Tilaiya Dam and Barakar riverside", note: "A quieter residential stretch. Power supply and broadband reliability are worth testing before an exam-week schedule is fixed." },
    { name: "Sainik School neighbourhood", note: "Home to staff families and some local residents. A few students here think about defence-service routes, which shapes their subject choices." },
    { name: "Domchanch", note: "A block town in the district where students often travel in to Koderma for school; lessons work best late evening or on Sundays." },
    { name: "Chandwara", note: "Mica-belt country on the northern side of the district. Families here often plan schooling in Hazaribagh, Ranchi or Gaya, so term dates vary." },
    { name: "Satgawan", note: "A rural block with limited local coaching. Online lessons remove the commute entirely, though a stable mobile or broadband link matters." },
    { name: "Markacho", note: "A smaller block in the district, reached by road from Koderma. Students typically schedule tuition around weekly market days and farm-season work at home." },
  ],

  schoolClusters: [
    {
      city: "Jhumri Tilaiya and Koderma district",
      note: "We could not confirm any school in the district that teaches the IB or Cambridge or Edexcel IGCSE. Local schools follow JAC or CBSE, so an IB or IGCSE learner here is usually enrolled elsewhere, or studying the syllabus privately.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "Kolkata is the nearest big city with established IB schools, reached by the main rail line. Some Jharkhand families choose boarding or relocation there.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR boarding routes",
      note: "Delhi NCR has the widest choice of IB boarding. The schools below are named only as examples of IB provision within reach; we are not connected to them.",
      schools: ["Pathways World School", "GD Goenka World School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service. We have no affiliation with the IB, Cambridge, Pearson or any school named here, and a school's appearance on this page is only a pointer to where IB provision exists near Jhumri Tilaiya, not an endorsement or a partnership.",

  modesIntro:
    "Because in-person teaching is not offered in Jhumri Tilaiya, the choice is about rhythm and format, not about whether a tutor can come over.",
  modes: [
    {
      title: "Online home tuition, weekly",
      description: "A fixed weekly slot with one tutor for a single subject, taught live on video from your child's own desk at home.",
      bullets: [
        "One tutor per subject, held steady across the term",
        "A short written note after each session for parents",
        "Screen-shared past papers and a digital whiteboard",
        "A tutor change if the fit is wrong",
      ],
    },
    {
      title: "Exam-season intensive",
      description: "Concentrated lessons in the months before a May or November session, for a student who needs to cover a course fast.",
      bullets: [
        "Daily or alternate-day blocks as the exam approaches",
        "Timed paper practice followed by mark-scheme review",
        "Topic maps built from the student's own mistakes",
        "Planned around Chhath and Diwali gaps in advance",
      ],
    },
    {
      title: "Catch-up after a move",
      description: "For a child who has just joined an IB or IGCSE school from a JAC or CBSE background and needs a bridge rather than a full course.",
      bullets: [
        "A diagnostic first lesson to find the real gaps",
        "Short, targeted lessons on vocabulary and command terms",
        "Gentle pacing for younger students",
        "Regular check-ins with parents on how it is going",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB and IGCSE schools in Jhumri Tilaiya, and who are the families choosing them?",
      paragraphs: [
        "We could not confirm an IB or Cambridge or Edexcel IGCSE school inside Jhumri Tilaiya or Koderma district, and we would rather say so than invent a list. The schools here follow the Jharkhand Academic Council or CBSE, with a few affiliated to CISCE. Sainik School Tilaiya is a well-known CBSE institution with its own admissions route, but it is not an IB or IGCSE school.",
        "That does not mean the syllabuses are absent from family life. Some parents in the town work for power, railway and coal-linked firms that transfer staff across India. When a posting ends in a metro, a child may already be halfway through MYP or an IGCSE course and return to Jhumri Tilaiya with that syllabus unfinished. Others are business families who send a child to a boarding school in another state precisely because the town has none.",
        "A third group are students who stay at home and follow an international curriculum privately, usually as a route to an overseas degree. They sit Cambridge or Edexcel papers as private candidates at an approved centre, which is more involved than most families expect. The centre, the entry dates and the exact syllabus code all need to be settled early, long before lessons start.",
        "For all three groups, IB and IGCSE tutors in Jhumri Tilaiya have to be online. Our role is to supply the subject depth that the local market cannot, so that a child can keep pace with an international classroom while living in Koderma district. The clusters lower down the page show where confirmed provision exists nearby, for families weighing relocation.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in the district",
        "Local schools run JAC, CBSE and CISCE syllabuses",
        "Returnees and boarders form most of the demand",
        "Private IGCSE candidates need an approved exam centre",
      ],
    },
    {
      heading: "How do JAC, CBSE and ICSE boards compare with the IB and IGCSE for a student from Koderma district?",
      paragraphs: [
        "The Jharkhand Academic Council leans on textbook recall and a fixed syllabus, with results driving admission to state colleges. CBSE follows NCERT books and suits anyone planning JEE, NEET or CUET, while ICSE and ISC are heavier on English and on written explanation. The IB and IGCSE ask for something different again: explanation, application and in many papers a written argument instead of a short fact.",
        "For a student used to Board-style answers, the shift is mostly about how a mark is earned. An IGCSE Chemistry question may give an unfamiliar data table and ask what it suggests, where a CBSE paper might ask for the definition. Tutoring helps most with that habit of reading the question, then structuring a response the marker can credit line by line.",
        "Language is another difference. Hindi is offered at several levels in both systems, yet the IB also expects a second language to be studied seriously, and English is assessed for analysis rather than for grammar alone. Jharkhand students often speak Hindi, Khortha, Magahi or Bengali at home, so the English registers in IB Language and Literature can feel formal and new.",
        "The table lays out the main contrasts so you can judge which route suits your child, or whether a mix makes sense.",
      ],
      table: {
        caption: "JAC, CBSE and ISC compared with IB and IGCSE",
        columns: ["Aspect", "JAC and CBSE", "ICSE or ISC", "IB Diploma", "Cambridge or Edexcel IGCSE"],
        rows: [
          ["Usual style of question", "Recall and short derivations from prescribed books", "Longer written answers, more English", "Analysis, application and extended writing", "Structured papers with data and explanation"],
          ["Internal work", "Practicals and small project marks", "Project work in some subjects", "Internal assessments and Extended Essay", "Coursework in a few subjects only"],
          ["Entrance route in India", "JEE, NEET and CUET eligibility are direct", "Usually accepted for the same exams", "AIU equivalence needed for Indian admissions", "Generally used as a pre-16 qualification"],
          ["Tutor availability here", "Plenty of coaching in Koderma and Jhumri Tilaiya", "Limited, mostly in Ranchi or Hazaribagh", "Online specialist tutors only", "Online specialist tutors only"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Jhumri Tilaiya, and what decides the rate?",
      paragraphs: [
        "We do not publish a fixed fee, because the rate for an IB Maths HL tutor with recent exam experience is not the rate for a Class 7 MYP reading buddy. The figure we quote is written down before you book, after the free trial lesson, so there is never a surprise on the first invoice.",
        "Four things move the rate most. The first is the level: Higher Level Diploma subjects and Additional Mathematics need tutors with deeper subject knowledge than a Core IGCSE topic does. The second is the subject itself, since Sciences and Mathematics tutors with recent exam-board exposure are scarcer than general humanities coaches. The third is lesson frequency and length. The fourth is how close the exam is, because an intensive month before May or November costs more per week than a relaxed term.",
        "Local comparisons help. A JAC or CBSE coaching batch in Koderma is cheaper per hour, but it is a class of many students working from a fixed syllabus. A private tutor arranged through a neighbour can work well for CBSE and usually has no IB experience. Our lessons are one-to-one and matched by programme, so the pricing follows specialist teaching time rather than a batch head-count.",
        "Families often ask whether a package is cheaper. It can be, for a long exam run-up, and we put any such arrangement in writing. A tutor change, if the fit is wrong, carries no extra fee. The free trial lesson exists so you can see a tutor teach before you agree to anything.",
      ],
      bullets: [
        "Level: HL and Additional Mathematics sit higher than Core work",
        "Subject: Sciences and Mathematics need scarcer specialists",
        "Frequency: weekly, twice weekly or an intensive block",
        "Timing: closer to exams means more lessons in less time",
        "Rates are quoted in writing before you book",
      ],
    },
    {
      heading: "Online home tuition, local coaching centres, private tutors or self-study: which works in Jhumri Tilaiya?",
      paragraphs: [
        "Jhumri Tilaiya has coaching centres, mostly aimed at the JAC papers and at entrance exams such as JEE and NEET, and it has plenty of private tutors teaching Class 10 and 12 at students' houses. None of this is wrong. It simply does not match an IB or IGCSE syllabus, which uses different command terms, different papers and a different idea of a finished answer.",
        "Self-study is the option many capable students start with, using textbooks and past papers from the exam board. It works for a motivated child with a steady internet connection, yet it leaves one gap: nobody marks the written answers against the real mark scheme. Students who study alone often find that they understand a topic and still lose marks in the phrasing.",
        "Online home tuition closes that gap without asking the family to relocate. The lesson happens on a laptop, the tutor reads a solution as the student writes it, and the same call covers Mathematics, a science or an essay subject. It keeps the child at home in Jhumri Tilaiya, which matters for families who value the town, for a younger student, or for a household that cannot afford a move.",
        "The comparison below sets the four routes side by side on the points parents raise most often.",
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help in and around Jhumri Tilaiya",
        columns: ["Route", "Matches IB or IGCSE syllabus", "Personal attention", "Travel needed", "Main limit"],
        rows: [
          ["Online home tuition", "Yes, tutor chosen for the exact course", "One-to-one, steady weekly slot", "None", "Needs a stable connection and a quiet desk"],
          ["Local coaching centre", "Rarely, built around JAC and CBSE", "Batch setting, limited individual time", "Daily, within the town", "Different exam style; few IB-trained staff"],
          ["Private home tutor nearby", "Seldom, few have taught IB or IGCSE", "Good for school subjects they know", "Tutor travels locally", "Hard to find subject depth or past-paper skill"],
          ["Self-study with past papers", "Yes, if the right papers are used", "None, unless a parent checks work", "None", "No expert marking of written answers"],
        ],
      },
    },
    {
      heading: "What are the exam dates and how do Jharkhand's festivals and weather affect the study year?",
      paragraphs: [
        "IB exams run in two sessions, May and November, and IGCSE papers follow a May-June series and an October-November series. Most Indian students sit the May session, so the final months of the school year carry heavy weight. Mock exams usually arrive in January or February, and internal assessment deadlines fall in the months before.",
        "Jharkhand life adds its own calendar over this. Saraswati Puja in January or February is a full day of school and family events, Holi takes a couple of days out, and Sarhul and Karma mark the tribal festival cycle. Durga Puja and Diwali sit in the autumn, exactly when November candidates are in final revision, and Chhath brings the town to a near standstill for several days.",
        "Weather matters too. May and June bring fierce dry heat to the Damodar valley, and afternoon power cuts or voltage drops can hurt a video call. The monsoon arrives from June and can bring patchy connectivity, while winter mornings are cool enough that an early lesson before school is comfortable.",
        "We plan around this at the start of each term, marking festival weeks, known exam dates and any planned travel, so that a lesson is never scheduled into a day the household is unavailable. The table shows the rough rhythm.",
      ],
      table: {
        caption: "A rough study calendar for an IB or IGCSE student in Jhumri Tilaiya",
        columns: ["Period", "What is happening", "Effect on tuition"],
        rows: [
          ["January to February", "Mocks, Saraswati Puja, JAC board season", "Lessons focus on mock review and weak topics"],
          ["March to April", "Final revision before the May session", "Highest intensity; paper practice weekly or more"],
          ["May to June", "IB and IGCSE exams, peak heat", "Early-morning or evening slots to avoid hot afternoons"],
          ["July to September", "New term, monsoon, Sarhul and Karma", "Good time to build foundations for a new DP year"],
          ["October to November", "Durga Puja, Diwali, Chhath, November exam session", "Lessons shifted around festival weeks"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Jhumri Tilaiya go after school?",
      paragraphs: [
        "Indian universities accept the IB Diploma and Cambridge or Edexcel qualifications, but they want an equivalence certificate from the Association of Indian Universities for most programmes. Families should apply for that certificate well before admission season, since the processing time can overlap with CUET-UG and counselling rounds.",
        "For engineering and medicine, rules differ by exam. JEE Main and NEET-UG publish their own eligibility notes for IB and IGCSE students, often asking for specific subjects such as Physics, Chemistry and Mathematics or Biology. These notes change between years, so a student heading this way should read the current brochure instead of trusting a neighbour's recollection.",
        "Closer to home, students from Koderma district think of Ranchi University, BIT Mesra, NIT Jamshedpur, IIT (ISM) Dhanbad and the wider Jharkhand and Bihar circuit, with Nalanda and Patna nearby for Bihar-side options. A strong IB profile opens study-abroad doors too, in the UK, US, Canada, Australia and Europe, where predicted grades and an IB score carry direct meaning.",
        "Whatever the direction, tutoring starts with the subject mix. A child who wants Indian engineering colleges needs IB Mathematics AA HL and Physics, where a future medical student needs Biology and Chemistry. Choosing well, early, saves a re-start in Class 12.",
      ],
      bullets: [
        "AIU equivalence certificate for most Indian programmes",
        "JEE Main, NEET-UG and CUET-UG publish separate IB and IGCSE notes",
        "Regional options include Ranchi, Mesra, Jamshedpur and Dhanbad",
        "Overseas routes rely on predicted and final IB points",
      ],
    },
    {
      heading: "How do we teach IB Mathematics AA and AI, and the sciences, to students in Jhumri Tilaiya?",
      paragraphs: [
        "Mathematics: Analysis and Approaches suits students who like algebra, calculus and proof-style thinking and who are likely to read Mathematics, Engineering or Physics. Applications and Interpretation is more statistical and modelling-led, with heavy use of the graphic display calculator, and fits students heading to Economics, Business, Psychology or the life sciences. The choice is made at the start of the course, and a tutor can advise on which fits a student's plans.",
        "Teaching takes a simple rhythm. The tutor shares a screen and works a problem while the student writes the steps on paper, held up to the camera or shared on a tablet. Mistakes are corrected on the spot, and the student then attempts a similar question alone. Past-paper work brings the timing discipline that Paper 1 and Paper 2 demand.",
        "For Physics, Chemistry and Biology, the emphasis moves to vocabulary, command terms and data-response skills. Many Koderma district students are comfortable with calculation, since CBSE and JAC papers reward it, and weaker at explaining in words why something happens. A tutor builds short-answer habits, drilling the wording of definitions and the structure of six-mark responses.",
        "Practical work is handled by reasoning instead of apparatus. Tutors go through experimental design, variables, uncertainty and evaluation using data from the student's own school labs or from simulations. The internal assessment itself is always the student's work; the tutor coaches the thinking, not the write-up.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Jhumri Tilaiya student choose?",
      paragraphs: [
        "Cambridge and Edexcel both offer tiers in many subjects. Core papers cap the highest grade available, while Extended papers open the full range. Students aiming for IB Diploma Mathematics or Sciences, or for A Levels, should almost always be on the Extended tier, since Core limits how far a later course can build on the foundation.",
        "Subject choice depends on what comes next. A child who wants the sciences at A Level or IB HL should take separate Physics, Chemistry and Biology instead of a combined award. Someone drawn to business or law should add Economics or Business Studies, and a student who wants flexibility should keep Mathematics, English and at least one science in the set.",
        "Board choice also matters. Cambridge and Edexcel papers differ in layout, weighting and the style of the practical component. A student switching schools midway may find that a topic taught in one board's order is missing from the other's. A tutor who has taught both can map the differences and close the gap in a few targeted lessons.",
        "For families in Jhumri Tilaiya studying IGCSE privately, the path is more deliberate. Register with an approved centre, confirm the syllabus code, and start from the published specification. Our tutors then follow it topic by topic, using the examiner reports that each board publishes.",
      ],
      table: {
        caption: "Choosing between Core and Extended IGCSE tiers",
        columns: ["Factor", "Core tier", "Extended tier"],
        rows: [
          ["Highest grade reachable", "Capped at a lower grade", "Full grade range available"],
          ["Best suited to", "Students who find the subject hard and need secure basics", "Students planning IB HL, A Level or engineering"],
          ["Paper length and difficulty", "Shorter, more structured questions", "Longer, with harder stretch questions"],
          ["Typical tutoring focus", "Accuracy, vocabulary and steady practice", "Problem solving, proof and evaluation"],
        ],
      },
    },
  ],

  process: [
    { title: "Send a message", description: "Share the subject, programme or tier, exam session and your preferred days on WhatsApp or by email." },
    { title: "Tutor shortlist", description: "We suggest one or two tutors who have recently taught that exact course, with a line on how each would approach your child." },
    { title: "Free trial lesson", description: "Your child meets the tutor on a live video call. You decide afterwards whether to continue." },
    { title: "Rate in writing", description: "If you go ahead, the lesson rate and schedule are sent in writing before anything is booked." },
    { title: "Weekly lessons and notes", description: "Lessons begin on the agreed slot and a written note follows each session. If the fit is wrong, we change the tutor." },
  ],

  whyPoints: [
    { title: "Matched to the course", description: "A tutor is selected for your child's exact programme, subject, level and board, not offered as a general IB helper." },
    { title: "Built for smaller towns", description: "Jhumri Tilaiya has no IB specialists, so the whole service is designed around live video from home." },
    { title: "Parents stay informed", description: "After every session you receive a short written note on what was covered and what comes next." },
    { title: "Coaching, not ghost-writing", description: "Tutors teach and give feedback. They never write internal assessments, Extended Essays or TOK essays." },
    { title: "Fit matters more than speed", description: "If a tutor is not working out, we change the match without any argument or extra charge." },
    { title: "Calendar-aware planning", description: "Sessions are booked around Chhath, Durga Puja, exam weeks and the school's own dates." },
  ],

  faqs: [
    {
      question: "Are there IB tutors in Jhumri Tilaiya?",
      answer: "Not locally in a way that matches the syllabus, which is why we teach online. Our IB tutors are based elsewhere in India and teach live over video to students in Jhumri Tilaiya and across Koderma district. Each tutor is chosen for the exact programme and subject, for example DP Physics HL or MYP Mathematics, and lessons run at the student's own desk on Indian Standard Time.",
    },
    {
      question: "Do tutors come to my home in Jhumri Tilaiya?",
      answer: "No, tutors do not visit homes in Jhumri Tilaiya. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Jhumri Tilaiya we offer online home tuition instead: a live, private one-to-one lesson the student takes at home on a laptop, with the tutor on video and a shared screen or digital whiteboard for working.",
    },
    {
      question: "Which IGCSE boards do you cover?",
      answer: "We cover both Cambridge IGCSE (CAIE) and Pearson Edexcel International GCSE. Tutors confirm the paper codes and tier before the first lesson, because the two boards differ in layout, practical components and mark schemes. Subjects include Mathematics, Additional Mathematics, the three sciences, Computer Science, English, Hindi, Economics and Business Studies.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Jhumri Tilaiya?",
      answer: "We quote the rate in writing before you book, and we do not publish prices. The rate depends on the level (Higher Level Diploma subjects cost more than Core IGCSE topics), the subject, how often the student has lessons, and how close an exam is. A free trial lesson comes first, so you can see a tutor teach before discussing anything.",
    },
    {
      question: "My child's school is CBSE. Can they still take IGCSE tuition?",
      answer: "Yes, as long as the student is preparing for the IGCSE papers themselves. A CBSE student sometimes takes IGCSE subjects privately, or studies an international syllabus alongside the Board one. A tutor explains the differences in exam style and helps the student build written-answer habits, but registration with an approved exam centre must be arranged separately by the family.",
    },
    {
      question: "Can you help with Internal Assessments and the Extended Essay?",
      answer: "We coach the thinking, never the writing. A tutor can explain what a criterion asks for, help a student choose a workable research question and give feedback on a draft's structure. The internal assessment, Extended Essay, TOK essay and coursework must stay the student's own work, and our tutors refuse any request to write or rewrite them.",
    },
    {
      question: "What if the internet is poor during a lesson?",
      answer: "A weak connection is manageable with a few preparations. Test the link before the first lesson, keep a mobile hotspot as a backup, and tell the tutor if audio drops. A lesson interrupted for long can be rescheduled, and for exam weeks we suggest choosing slots away from the hottest afternoon hours, when voltage drops are most common in the Damodar valley.",
    },
    {
      question: "Which IB Maths course should my child take, AA or AI?",
      answer: "It depends on the degree your child is likely to aim for. Analysis and Approaches suits students heading towards Mathematics, Engineering or Physics, because it is algebra and calculus heavy. Applications and Interpretation fits Economics, Business, Psychology and life sciences, with statistics and technology. Ask the school to confirm which is offered, then let a tutor explain the day-to-day difference.",
    },
    {
      question: "Is the tutor change really free?",
      answer: "Yes. If after a few lessons the fit is not right, tell us and we will suggest a different tutor, without an extra fee or awkward conversation. The free trial lesson is designed to catch most mismatches early, but personality and pace sometimes only show after a week or two, so we keep the option open.",
    },
    {
      question: "What are the exam sessions, and when should tuition start?",
      answer: "IB and IGCSE both have a May session and an October or November session. Most Indian students sit May, so serious preparation should begin at least six months earlier, ideally at the start of the school year. A student catching up after a school change can begin any time, though the tutor will first test which topics are already secure.",
    },
    {
      question: "Are classes available for PYP and MYP students too?",
      answer: "Yes, we teach PYP and MYP along with DP and CP. PYP lessons are short and playful, built around reading, number sense and explaining ideas aloud. MYP lessons focus on Mathematics, Sciences and Language and Literature, with attention to the assessment criteria. Younger students are best served by shorter sessions and a parent nearby for the first few lessons.",
    },
    {
      question: "Will my child need AIU equivalence for Indian colleges?",
      answer: "For most Indian university admissions, yes. The Association of Indian Universities issues an equivalence certificate for the IB Diploma and for some international qualifications, and many colleges ask for it. Apply early, since processing overlaps with admission season. We do not handle that paperwork, but a tutor can explain how subject choices affect eligibility for JEE, NEET and CUET-UG.",
    },
    {
      question: "Do you offer Hindi tuition for IB and IGCSE?",
      answer: "Yes. Hindi A, Hindi B and Hindi as a Second Language tutors are available, and a tutor can match the student's level, whether Hindi is the home language or a second one. Lessons cover reading set texts, writing in the right register for exam tasks, and oral preparation, which is useful for students in Jharkhand who speak Khortha or Magahi at home.",
    },
    {
      question: "Can my child attend lessons from Koderma or a village in the district?",
      answer: "Yes, wherever there is a steady connection. Students in Koderma town, Domchanch, Chandwara, Satgawan and Markacho can all take online lessons. What matters is a reliable link, a laptop or tablet and a quiet spot. We suggest testing your connection at the planned lesson time, and moving slots if evening power supply is uncertain.",
    },
    {
      question: "How do I start?",
      answer: "Message us on WhatsApp at +91 7439 368 115 or write to support@ibgram.com with your child's programme, subject, level and exam session. We reply with one or two tutor suggestions, then arrange a free trial lesson. Nothing is charged at that stage, and the lesson rate is sent in writing only if you decide to go ahead.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The national page, with cities served and how online lessons work everywhere." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse our IB tutor pages by programme and subject." },
    { label: "IGCSE tutors", href: "/igcse/", description: "IGCSE tutoring across Cambridge and Edexcel, subject by subject." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "What DP lessons cover and how tutors plan the two-year course." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criterion-based support for Class 6 to 10 students." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Short, playful sessions for primary-age learners." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "How CP combines DP courses with a career pathway." },
    { label: "IB Mathematics tutors", href: "/courses/ib/mathematics/", description: "AA and AI, SL and HL, with past-paper practice." },
    { label: "Our tutors", href: "/tutors/", description: "Meet the tutors and see their subjects and experience." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book a free trial lesson." },
    { label: "Ranchi", href: "/ranchi/", description: "The state capital page, for families who also look to Ranchi." },
    { label: "Hazaribagh", href: "/hazaribag/", description: "A nearby Jharkhand city covered by our online tuition." },
    { label: "Giridih", href: "/giridih/", description: "Another neighbouring town with online IB and IGCSE support." },
  ],

  closingHeading: "Start with a free trial lesson for your child in Jhumri Tilaiya",
  closingBody:
    "Tell us the programme, subject and exam session, and we will suggest a tutor who has recently taught it. The first lesson is free, the rate comes in writing, and if the match feels wrong we change it. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
