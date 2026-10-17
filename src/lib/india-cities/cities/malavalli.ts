import type { CitySeoPage } from "../types";

/**
 * /malavalli/ - IB and IGCSE tutoring page for Malavalli, Mandya district, Karnataka. No IB or
 * Cambridge/Edexcel school in Malavalli town could be confirmed, so stripSchools is empty and the
 * clusters point honestly to Mysuru, Bengaluru and the Srirangapatna side of Mandya district.
 */
export const malavalli: CitySeoPage = {
  slug: "malavalli",
  countryName: "Malavalli",
  countryNameLong: "Malavalli, Karnataka",
  demonym: "Malavalli",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fitted around Malavalli school hours, the Dasara break and the sugarcane harvest weeks when farm families are busiest",
  lastUpdated: "2026-09-21",
  geo: { latitude: 12.3856, longitude: 77.0801 },
  wikipedia: "https://en.wikipedia.org/wiki/Malavalli",
  alternateNames: ["Malvalli", "Malavalli Mandya", "Malavalli taluk"],
  stripSchools: [],

  title: "Malavalli IB & IGCSE Tutors | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Malavalli, Mandya: DP, MYP, PYP and Cambridge or Edexcel subjects taught one to one online at home, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Malavalli",
  heroEyebrow: "ONLINE IB & IGCSE HOME TUITION IN MALAVALLI",
  heroSubtitle:
    "Home tuition in Malavalli for an international syllabus has one practical form: a tutor who has taught your child's course before, teaching live over video while your child sits at the family desk. Whether you live near the Mysore Road stretch, in Kirugavilu or out in a Halaguru village, we shortlist a tutor for the exact IB or IGCSE subject and level.",
  primaryKeyword: "IB and IGCSE tutors in Malavalli",
  imageAltText: "A Malavalli student revising IGCSE Chemistry with an online tutor on a laptop at home",
  secondaryKeywords: [
    "IB tutor Malavalli",
    "IGCSE tutor Malavalli",
    "IB home tuition Malavalli",
    "IGCSE home tuition Malavalli",
    "IB private tuition Malavalli",
    "IB Maths tutor Malavalli",
    "IGCSE Maths tutor Malavalli",
    "IB Physics tutor Malavalli",
    "IB Chemistry tutor Malavalli",
    "IB Biology tutor Malavalli",
    "IB DP tutor Malavalli",
    "IB MYP tutor Malavalli",
    "IB PYP tutor Malavalli",
    "IGCSE online tuition Malavalli",
    "IB tutor Mandya district",
    "IGCSE tutor Kirugavilu",
    "online IB tutor Malvalli",
    "IB tutor Malavalli Karnataka",
  ],

  heroTrustPoints: [
    "Tutors who already teach your child's exact IB or IGCSE course and level",
    "Live video lessons only; tutors do not come to Malavalli homes",
    "A free first lesson to judge the fit before any commitment",
    "No affiliation with the IB, Cambridge, Pearson or any school mentioned",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "CAIE + Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "Same clock as home" },
    { value: "Free trial", label: "First lesson on us" },
  ],

  intro: {
    heading: "Studying an international syllabus from Malavalli",
    paragraphs: [
      "Malavalli is a taluk town in Mandya district with a population a little under forty thousand at the 2011 census and a long, busy market street that serves a far larger rural hinterland. It sits among cane fields and mulberry plots, within reach of the Cauvery at Shivanasamudra and the Hoysala temple at Somanathapura. As far as we could confirm, no school in the town itself teaches the IB or a Cambridge or Edexcel IGCSE course, so anyone studying one of those here is doing it for a reason.",
      "The reasons we hear are fairly consistent. A parent has returned from Bengaluru, Dubai or Singapore to look after land or ageing relatives and the child is mid-programme. A family plans to place a Class 9 student in a Mysuru or Bengaluru boarding campus and wants the syllabus familiar first. Or a household with a farming and trading background simply sees a Cambridge or IB certificate as a route to universities abroad. None of these has a teacher down the road, so private tuition at home arrives online.",
      "That means a live video lesson, one student and one tutor, with the tutor based elsewhere in India and teaching on Indian Standard Time. Tutors do not travel to Malavalli; in-person home visits run only in Gurugram and parts of Delhi NCR. What the online format gives a taluk family is the freedom to ask for someone who has coached HL Physics or Extended Mathematics recently, rather than whoever happens to live nearby.",
      "IB Gram is an independent tutoring service. We are not connected to the International Baccalaureate Organization, Cambridge, Pearson or any school or college named here. Tutors teach, explain and coach; they do not write internal assessments, Extended Essays, Theory of Knowledge essays or coursework for a student.",
    ],
    bullets: [
      "Live one-to-one lessons for IB PYP, MYP and DP and for Cambridge and Edexcel IGCSE",
      "All teaching is online for Malavalli; home visits exist only in Gurugram and parts of Delhi NCR",
      "A short written note after every session for parents",
      "A different tutor on request if the first one is not right",
      "Rates agreed in writing before you book",
    ],
  },

  programmesIntro:
    "Almost every Malavalli child is on the Karnataka state syllabus or CBSE, so an IB stage here normally means a carry-over from another city or a planned jump. These notes say what a tutor is asked to do at each stage when the classroom is elsewhere or absent.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning is organised around transdisciplinary themes and finishes with a student-led Exhibition. Tutoring at this age is gentle: reading aloud, number sense and learning to ask a good question.",
      countryNote:
        "A PYP enquiry from Malavalli usually comes from a returning family whose child was mid-programme; the goal is to keep the inquiry habit alive rather than slide into rote learning.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Work is marked against criteria per subject, and the programme closes with a Personal Project. Students must show reasoning and application, which is a different habit from reproducing a textbook answer.",
      countryNote:
        "Without an MYP classroom nearby, a Malavalli student relies on a tutor to explain the assessment criteria in plain words and to show what each achievement level looks like.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, plus the Extended Essay, TOK and CAS. The final score combines external papers and school-assessed components.",
      countryNote:
        "Diploma questions from the Mandya side tend to concentrate on sciences and Mathematics, because families are thinking of medicine, engineering or agriculture-linked degrees.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three Diploma courses combine with a career-related study and a reflective project, a route for students leaning towards applied work.",
      countryNote:
        "We know of no CP school in Malavalli, so tutoring means support for the academic Diploma courses a student takes inside the programme.",
    },
  ],

  subjectsIntro:
    "Name the exact course and level. A student on Applications and Interpretation SL needs a different tutor from one on Analysis and Approaches HL, and the shortlist is built around that.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof-style reasoning, taught as a cycle of short theory, graded practice and timed paper sections, with the exploration planned early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator fluency matter most; sessions rehearse reading a data context and choosing the right technique." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, fields and modern physics worked as numerical and graph questions, with attention to units and uncertainty." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, equilibrium, kinetics and organic pathways, plus the data-handling that the practical component rewards." },
    { name: "IB Biology", levels: "HL / SL", description: "Precise vocabulary and clear command-word answers, from cell biology and genetics to ecology and human physiology." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy and one clean explanatory sentence per diagram, using Indian farm-market and global trade examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, picking the relevant theory and applying it to the business on the page." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen text analysis, essay structure and oral commentary treated as separate skills." },
    { name: "IB Kannada A", levels: "HL / SL", description: "Literary analysis in Kannada for students whose home language is the school language, with essay planning and oral practice." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Language acquisition for students who learn Hindi as an additional language, covering writing, reading and speaking tasks." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming logic, data structures, networks and the exam pseudocode style." },
    { name: "IB Psychology", levels: "HL / SL", description: "Landmark studies, their methods and criticisms, turned into structured extended answers." },
    { name: "IB Geography", levels: "HL / SL", description: "Case-study preparation and data-response practice with maps, graphs and tables." },
  ],
  igcseSubjectsIntro:
    "IGCSE students in Malavalli are mostly younger, in Classes 9 and 10, and often preparing for a later move. Say whether the entry is Cambridge or Edexcel and whether the tier is Core or Extended.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Algebra, trigonometry and statistics; the Extended tier adds calculus-style reasoning and tougher multi-step problems." },
    { name: "IGCSE Additional Mathematics", levels: "Cambridge", description: "A step up towards A Level Mathematics, strong on functions, differentiation and coordinate geometry." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, electricity, waves and thermal physics, with practical-paper skills." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Atomic structure, bonding, reactions and the periodic table, with titration and test-tube practical drills." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, plant transport, inheritance and ecosystems, with diagram labelling and data questions." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "The double-award route for students who do not want three separate sciences." },
    { name: "IGCSE English as a Second Language", levels: "Cambridge / Edexcel", description: "Reading, writing and listening skills for students whose first language is Kannada or Hindi." },
    { name: "IGCSE Computer Science", levels: "Cambridge / Edexcel", description: "Algorithms, programming and binary logic with exam-style pseudocode." },
    { name: "IGCSE Economics and Business Studies", levels: "Cambridge / Edexcel", description: "Core concepts, calculations and case questions for commerce-minded students." },
    { name: "IGCSE Hindi as a Second Language", levels: "Cambridge", description: "Reading comprehension, directed writing and speaking for the second-language paper." },
  ],

  regionsTitle: "Malavalli areas and nearby villages we tutor online",
  regionsIntro:
    "Malavalli is a taluk with four hoblis and a compact town, so the practical questions are about connectivity, school end times and the road to Mysuru rather than traffic. Every lesson is online; the notes below describe daily rhythm in each area.",
  regions: [
    { name: "Kasaba hobli and the town centre", note: "The market area and the municipal wards around it; the densest broadband coverage, and most CBSE and state-board schools finish by late afternoon, which leaves evenings free." },
    { name: "Mysore Road", note: "The road that leads towards Mysuru and where a paramedical institute stands; families here often have a relative or a work link in Mysuru and think about the city for boarding." },
    { name: "B.G. Pura", note: "A hobli headquarters to the north; students may travel into town for school, so weekday lessons suit a later start." },
    { name: "Kirugavilu", note: "A hobli on the southern side of the taluk, closer to the Cauvery belt; farm-season weeks affect household timing, so sessions are scheduled flexibly." },
    { name: "Halaguru", note: "A rural hobli where mobile data is often the main connection; a stable plan and a headset help the lesson run cleanly." },
    { name: "Marehalli", note: "The temple village a short distance from the town; families here are mostly local, and the daily timetable follows the school bus." },
    { name: "Shivanasamudra side", note: "The falls and Cauvery stretch draw weekend visitors; for students living there, weekday evenings are the quiet study window." },
    { name: "Kanakapura and Maddur borders", note: "Neighbouring taluks whose students sometimes attend Malavalli colleges; we run the same online model there." },
  ],

  schoolClusters: [
    {
      city: "Malavalli town",
      note: "We could not confirm any IB or Cambridge or Edexcel IGCSE school in Malavalli itself. Local education runs on the Karnataka state board, CBSE and the pre-university colleges, so international-syllabus students are generally either studying elsewhere, preparing privately, or about to move.",
      schools: [],
    },
    {
      city: "Nearby: Mysuru and Srirangapatna",
      note: "Mysuru is the nearer city for most Malavalli families. These schools are named as options in the region, not as partners of IB Gram.",
      schools: ["I Can International School", "De Paul International Residential School"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Bengaluru has the deepest choice of IB and IGCSE campuses in the state; some Malavalli families consider boarding there for Classes 9 to 12.",
      schools: ["Stonehill International School", "Canadian International School, Bengaluru", "Inventure Academy"],
    },
  ],
  schoolDisclaimer:
    "The schools above are named only as regional context, drawn from public information about where IB and Cambridge programmes are offered. IB Gram is an independent tutoring service and has no tie to any school, board or university, and school programmes change, so confirm current offerings with the school directly.",

  modesIntro:
    "In Malavalli the format is online, and it can be run three ways depending on how much structure your child needs.",
  modes: [
    {
      title: "Weekly online one-to-one",
      description: "A fixed weekly slot with the same tutor, the usual choice for a student following a school syllabus who needs steady support in one or two subjects.",
      bullets: ["Same tutor every week", "Homework from the school discussed", "Short written note afterwards"],
    },
    {
      title: "Exam-season intensive",
      description: "More frequent sessions in the weeks before IB May or November papers, IGCSE sessions or school mocks, focused on past papers and timing.",
      bullets: ["Past-paper drills", "Mark-scheme reading", "Time management practice"],
    },
    {
      title: "Self-prepared, tutor-guided",
      description: "For a student studying the syllabus privately, a tutor sets a pathway, checks work and explains gaps; suitable where no school teaches the course.",
      bullets: ["Study plan by topic", "Weekly check-ins", "Guidance on entering as a private candidate"],
    },
  ],

  sections: [
    {
      heading: "Which schools near Malavalli teach the IB or IGCSE?",
      paragraphs: [
        "The short answer is that we could not confirm one inside the town. Malavalli has government and private schools on the Karnataka state board and CBSE, a government college and a private college, and a paramedical institute on Mysore Road. International programmes are concentrated in the cities, so a family wanting the IB or an IGCSE usually looks towards Mysuru or Bengaluru.",
        "Mysuru is the closer option and has international and residential campuses, some on the Srirangapatna side of Mandya district. Bengaluru has the larger and more varied set, with campuses in the Sarjapur, Whitefield and northern belts. Boarding is the usual way a Malavalli child joins one of these, because the daily commute is impractical.",
        "That leaves three types of student who need tutoring. Some are enrolled at a distant school and want extra help at home. Some are preparing for a transfer and want the content before the first day. A few study privately and sit exams as private candidates through an approved centre. We support all three, and we will say honestly if a plan looks unrealistic.",
        "Before choosing a school, ask it three things: which exact IB subjects or IGCSE tier and board it offers, who teaches Higher Level or Extended content, and what the school expects from tuition. A good school welcomes outside support when it is coordinated with the classroom.",
      ],
    },
    {
      heading: "Karnataka state board, CBSE, IB and IGCSE compared",
      paragraphs: [
        "A Malavalli family comparing boards is usually comparing the Karnataka state syllabus, CBSE, and the international options. The state board prepares students for SSLC at Class 10 and the pre-university course afterwards, with CET and NEET as the main entrance routes. CBSE follows the national NCERT pattern and its Class 12 marks feed national entrance forms directly.",
        "The IB asks for breadth, internal assessments and reflective components, while IGCSE is a two-year course of subject exams taken at about Class 10. Both emphasise application and written explanation. A student shifting from a rote-heavy classroom often finds the change of habit harder than the content itself.",
        "None of the options is superior in the abstract. What matters is the destination: a Karnataka engineering or medical seat through CET or NEET, a central university through CUET, or an overseas degree. The table sets out how the routes differ on the points families ask about most.",
        "If the long-term plan is a Karnataka professional course, check the eligibility rules early. Seat allocation can depend on the qualifying exam and on subject combinations, and IB or IGCSE students sometimes need extra documents.",
      ],
      table: {
        caption: "How the main syllabus options compare for a Malavalli student",
        columns: ["Route", "Class 10 exam", "Class 11-12 route", "Typical entrance path", "Teaching style"],
        rows: [
          ["Karnataka state board", "SSLC", "Pre-university course (II PU)", "CET, NEET, JEE", "Textbook-led, written recall"],
          ["CBSE", "Class 10 board exam", "Class 11-12 streams", "JEE, NEET, CUET", "NCERT-led, objective plus long answers"],
          ["IGCSE (Cambridge or Edexcel)", "IGCSE subject exams", "A Level, IB, or Indian Class 11", "Depends on next stage", "Applied questions, practical papers"],
          ["IB Diploma", "MYP or IGCSE before", "Diploma, six subjects plus core", "Overseas applications; AIU equivalence for India", "Inquiry, internal assessment, extended writing"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Malavalli?",
      paragraphs: [
        "Tuition cost for IB or IGCSE in Malavalli is set by the subject, level and session length, not by the town. We publish no price list, because a Higher Level Chemistry course and an IGCSE Core English course are different jobs, and we confirm the rate in writing before you book anything.",
        "The strongest driver is how few tutors can teach a given course. HL Mathematics or Physics narrows the pool far more than Core Biology does, and that is reflected in the rate. Session length matters next, since a longer block suits a past-paper review while a short one suits a weekly checkpoint.",
        "Online delivery removes the costs that usually make tuition dearer in small towns: no travel time or fuel for a tutor, and no need to hire from a limited local pool. A Malavalli family is compared on the same terms as a family in a metro, which makes the rate easier to understand.",
        "Ask any provider the same questions: what is the rate per session, is a trial lesson free, can I change tutor, and what happens if a lesson is missed? Our answers are a free trial, a written note after each lesson and a change of tutor on request.",
      ],
    },
    {
      heading: "Online tuition, coaching centres, private tutors or self-study: which suits Malavalli?",
      paragraphs: [
        "There are four realistic ways to prepare for an international syllabus from a taluk town, and each fits a different student. Coaching centres in the Mandya region are built for CET, NEET and the board exams, and they rarely stock an IB Higher Level or IGCSE Extended specialist.",
        "A private tutor met by word of mouth can teach well when the subject is common, but for a specialist course the options may be none. Self-study with past papers works for disciplined students but leaves misconceptions uncorrected for months. Online one-to-one tuition fills the gap by sourcing the specialist anywhere in India.",
        "The table below compares the options on the factors Malavalli families mention: subject expertise, flexibility and the time spent on the road.",
        "A hybrid is common and sensible. Many families keep the school or PU college as the base, add online lessons for the two or three subjects where the child is weakest, and use self-study for the rest.",
      ],
      table: {
        caption: "Options for IB and IGCSE support from Malavalli",
        columns: ["Option", "Specialist subject cover", "Travel needed", "Flexibility", "Best suited to"],
        rows: [
          ["Online one-to-one tuition", "High, tutor chosen by syllabus", "None", "Evenings, weekends, exam weeks", "Students on IB or IGCSE needing specific subject help"],
          ["Local coaching centre", "Low for IB or IGCSE", "Daily commute in town", "Fixed batch times", "State board, CET or NEET groundwork"],
          ["Private tutor by word of mouth", "Mixed, subject dependent", "Tutor or student travels", "Moderate", "Core subjects in common syllabi"],
          ["Self-study with past papers", "Depends on the student", "None", "Complete", "Disciplined students with a clear plan"],
        ],
      },
    },
    {
      heading: "The Malavalli exam calendar and the school year",
      paragraphs: [
        "Karnataka schools reopen around the end of May or June, break for a two-week Dasara holiday in the autumn, and finish the year in March or April. Mysuru Dasara is the biggest regional festival, so the autumn break shapes October and early November planning more than any other event.",
        "International exams follow their own clocks. The IB holds sessions in May and November. Cambridge IGCSE runs sessions in February and March, May and June, and October and November, and Pearson Edexcel IGCSE sits in January, May and June, and October and November. A student whose school follows a Northern Hemisphere pattern may have mocks in December and January.",
        "On the farm side, the cane harvest and planting weeks affect household time, and festival days such as Ugadi, Ganesh Chaturthi and Sankranti reduce evenings. We schedule lessons around these rather than pretending they do not exist.",
        "The table puts the main dates side by side so a family can see when the pressure lands.",
      ],
      table: {
        caption: "Typical months that shape study in Malavalli",
        columns: ["Period", "What happens", "How tutoring adapts"],
        rows: [
          ["June to September", "New school year, steady teaching, Ganesh Chaturthi", "Weekly lessons, concept building"],
          ["October", "Dasara holidays, Mysuru festivities, Cambridge and Edexcel autumn series", "Intensive blocks or a lighter week depending on the family"],
          ["November to January", "IB November series, mocks, Sankranti", "Past-paper practice, mock review"],
          ["February to April", "IGCSE spring exams, board exams, SSLC and II PU", "Exam technique, timing, revision plans"],
          ["May and June", "IB May exams, Cambridge and Edexcel summer series", "Final review, calm last-week routines"],
        ],
      },
    },
    {
      heading: "University pathways from Malavalli after IB or IGCSE",
      paragraphs: [
        "For an IB Diploma graduate, the pathways open into India and abroad. The Association of Indian Universities issues equivalence for the IB Diploma, which Indian universities generally require for admission. Central universities admitting through CUET-UG apply their own eligibility rules, which families should read carefully each year.",
        "For engineering, JEE Main eligibility depends on the qualifying examination and the subject combination, and for medicine NEET-UG expects Physics, Chemistry, Biology and English. IB students who plan this route choose their Higher Level subjects with the entrance examination in mind, and IGCSE students planning Indian professional courses usually return to a Class 11-12 stream.",
        "Karnataka seats through the state authority carry their own rules, so a family should check them early and keep the school certificates ready. Universities in Mysuru, Bengaluru and the wider state remain the natural targets for many Malavalli students.",
        "Study abroad is where the IB and IGCSE are most useful. UK, Canadian, Australian and Singaporean universities understand them well, and the IB Diploma score or A Level grades drive offers. Tutors support the exams, not the application essay.",
      ],
    },
    {
      heading: "IB Maths AA or AI, and the sciences, from a taluk town",
      paragraphs: [
        "Choosing between Analysis and Approaches and Applications and Interpretation is the first decision. AA suits students who enjoy algebra, calculus and proof and who may study engineering, physics or economics. AI suits students comfortable with data, statistics and technology who are heading to commerce, social science or health courses.",
        "The sciences reward steady practice. In Physics and Chemistry the marks usually come from numerical fluency and clean explanation, and the internal investigation needs careful data handling. Biology rewards precise terminology and command-word discipline, and tutors drill that with short written answers.",
        "Because Malavalli has no local specialist teaching these at Higher Level, an online tutor can fill the gap with a structured plan: topic by topic, past-paper by past-paper, with a written note after each lesson so parents see progress.",
        "We coach the student; we do not write the internal assessment. A tutor can discuss a research question, explain the marking criteria and give feedback on a draft's logic, but the work remains the student's own.",
      ],
    },
    {
      heading: "Should a Malavalli student take IGCSE Core or Extended?",
      paragraphs: [
        "Core and Extended are tiers within the same subject, and the choice is made by the school based on the child's level and next step. Core papers cap the maximum grade at a C or equivalent, while Extended papers can reach A* but are harder and longer.",
        "Students planning A Level, the IB Diploma or later Indian Class 11 science should usually aim for Extended in Mathematics and the sciences, because higher-level content builds on it. Core is a sensible choice where a student wants a solid pass and a calmer path in subjects that are not central to their plans.",
        "Subject choices for a first-time IGCSE candidate commonly include English, Mathematics, a science set, a second language such as Hindi or Kannada and one humanities or commerce option. Cambridge and Pearson Edexcel differ in paper structure, so tell us which board the school or exam centre uses.",
        "If your child is studying privately, a tutor can map the syllabus, set a pace and advise on registering as a private candidate with an approved centre in Bengaluru or Mysuru.",
      ],
    },
  ],

  process: [
    { title: "Tell us the course", description: "Send the programme, subjects, level, board and your child's current school or situation by WhatsApp or email." },
    { title: "We shortlist tutors", description: "A tutor already teaching that syllabus is matched, with a short summary of their background." },
    { title: "Free trial lesson", description: "Your child tries a live session to see whether the explanation style works." },
    { title: "Rates in writing", description: "The rate and the weekly pattern are confirmed in writing before any booking." },
    { title: "Lessons and notes", description: "Weekly sessions begin, with a written note after each, and a change of tutor if needed." },
  ],

  whyPoints: [
    { title: "Syllabus-specific tutors", description: "Tutors are chosen for the exact IB subject or IGCSE tier, not for general subject knowledge." },
    { title: "Honest about format", description: "Lessons are online and we say so plainly; no promise of a home visit in Malavalli." },
    { title: "Parent visibility", description: "A short written summary follows every lesson, so progress is clear without a school meeting." },
    { title: "Fit before commitment", description: "A free trial lesson and a tutor change on request let you judge the match." },
    { title: "Rates in writing", description: "You see the rate before booking, with no hidden extras." },
    { title: "Coaching, not shortcuts", description: "Tutors explain and coach but never write an IA, EE, TOK essay or coursework." },
  ],

  tutorsIntro:
    "Tutors teach from different Indian cities and meet Malavalli students by video. Browse a few profiles, then tell us your child's subject and level so we can shortlist someone suitable.",

  faqs: [
    { question: "Are there IB or IGCSE tutors in Malavalli?", answer: "Not in person, but IB Gram provides online IB and IGCSE tutors for Malavalli students. Tutors teach live one to one over video from elsewhere in India. They do not visit homes in Malavalli, because home visits run only in Gurugram and parts of Delhi NCR. You get a tutor matched to the exact syllabus and level." },
    { question: "Is IB home tuition possible in Malavalli?", answer: "Yes, as online home tuition. Your child studies at home with a laptop and a tutor teaches live from another city. No tutor travels to Malavalli. This lets you choose someone who has taught your exact IB subject, such as HL Physics or SL Economics, which a small town rarely offers." },
    { question: "Is there an IB school in Malavalli?", answer: "We could not confirm one. The nearest options are in Mysuru and Bengaluru, and some Malavalli families consider boarding there. Check directly with the school for its current programme, since offerings change. Online tutoring supports students whether they live at home, board elsewhere or prepare privately." },
    { question: "Which board should I choose, Karnataka state, CBSE, IB or IGCSE?", answer: "It depends on the destination. For a Karnataka professional course through CET or NEET, the state board or CBSE is simplest. For study abroad, IB or IGCSE followed by A Level is common. We tutor the international options and will not push a change that does not fit your plan." },
    { question: "What does IB tuition cost in Malavalli?", answer: "We do not publish prices; the rate depends on the subject, level and session length. Higher Level Diploma subjects usually cost more than IGCSE Core, because fewer tutors can teach them. You receive the rate in writing before booking, and the first lesson is free." },
    { question: "Can tutors help with the IA or Extended Essay?", answer: "Tutors coach but never write. They can explain the criteria, help a student choose a workable research question and comment on the logic of a draft. The work and the words stay the student's own, as the IB requires." },
    { question: "Do you teach both Cambridge and Edexcel IGCSE?", answer: "Yes, both boards. They differ in paper structure and grade boundaries, so tell us which one the school or exam centre uses. For a private candidate we help you map the syllabus before you register." },
    { question: "Can my child take IGCSE exams from Malavalli?", answer: "Exams must be taken through an approved centre, typically in a larger city such as Mysuru or Bengaluru. A private candidate registers with a centre and sits papers there. We can tutor the content and advise on the process, but registration is made with the centre." },
    { question: "What time are lessons held?", answer: "Lessons run on Indian Standard Time, usually after school hours on weekdays and during the day at weekends. Because tutors are in India, there is no time-zone gap. In harvest weeks or festival periods we adjust the schedule." },
    { question: "What if internet is unreliable at our home?", answer: "Test the connection before the trial lesson. A steady broadband or a good mobile data plan with a headset is enough for audio and a shared whiteboard. If the line drops, the tutor reschedules or continues by phone for the rest of the session." },
    { question: "How do I start?", answer: "Message support@ibgram.com or WhatsApp +91 7439 368 115 with the programme, subjects, level and the school or situation. We reply with a tutor shortlist and arrange the free trial lesson." },
    { question: "Can a student join IB in Class 11 after the Karnataka SSLC?", answer: "Often yes, subject to the school's admission policy and the student's subject background. A student coming from SSLC may need bridging in Mathematics, English and a science. Online tutors can run a bridging plan before the Diploma starts." },
    { question: "Is Kannada available as an IB subject?", answer: "Many IB schools offer Kannada at some level, usually as a language course. Availability depends on the school. If your child studies it, we can often provide a tutor, and we will confirm before you book." },
    { question: "Is the IB harder than the Karnataka state board?", answer: "It is different rather than simply harder. The IB demands more writing, application and independent work, while the state board tends to test recall. Students who switch often need to adjust study habits, which tutoring helps with." },
    { question: "Do you help with CUET or NEET for IB students?", answer: "We help with the subject content that overlaps, and we have a link on our admissions page for test preparation. Always check eligibility each year, since rules for IB and IGCSE students change." },
    { question: "Will I get a progress report?", answer: "You receive a short written note after every lesson covering what was taught, what the student found hard and what to practise. This keeps parents informed without a school meeting." },
  ],

  internalLinks: [
    { label: "IB tutors across India", href: "/india/", description: "Our online IB and IGCSE service across Indian cities." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "How we support Diploma subjects and the core." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criteria-based support for Classes 6 to 10." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Gentle early-years support." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects, Core and Extended." },
    { label: "IB Maths course", href: "/courses/ib/mathematics/", description: "AA and AI in detail." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse tutor profiles." },
    { label: "Mandya", href: "/mandya/", description: "Our page for the district headquarters nearby." },
    { label: "Mysuru", href: "/mysuru/", description: "IB and IGCSE schools and tutoring in the nearest big city." },
    { label: "Bengaluru", href: "/bengaluru/", description: "Where most Karnataka IB and IGCSE campuses are." },
    { label: "Contact us", href: "/contact-us/", description: "Ask for a shortlist or a trial lesson." },
  ],

  closingHeading: "Start with a free lesson from your Malavalli home",
  closingBody:
    "Send us the programme, the subject and the level. We shortlist a tutor who has taught that course, book a free trial and confirm the rate in writing. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
