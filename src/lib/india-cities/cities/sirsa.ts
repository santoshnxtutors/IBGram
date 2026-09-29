import type { CitySeoPage } from "../types";

/**
 * /sirsa/ - IB and IGCSE tutoring page for Sirsa, Haryana. No school inside Sirsa is confirmed to offer IB
 * or Cambridge / Edexcel IGCSE (Edustoke could not be fetched), so stripSchools is empty and the clusters
 * borrow, clearly labelled, the Gurgaon / Delhi side (as on the Hisar page) and the Ludhiana / Chandigarh
 * side (as on the Bathinda page). Online only: home visits run only in Gurugram and parts of Delhi NCR.
 */
export const sirsa: CitySeoPage = {
  slug: "sirsa",
  countryName: "Sirsa",
  countryNameLong: "Sirsa, Haryana",
  demonym: "Sirsa",
  state: "Haryana",
  stateCode: "IN-HR",
  flagCode: "in",
  countryCode: "IN",
  region: "Haryana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote:
    "Evening lessons are the default in Sirsa because June afternoons can pass 45 degrees, and slots are shifted around winter fog, the cotton-picking weeks and wedding season",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.5349, longitude: 75.0288 },
  wikipedia: "https://en.wikipedia.org/wiki/Sirsa,_Haryana",
  alternateNames: ["Sirsa Haryana", "Sirsa Hisar division"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sirsa | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Sirsa students: DP, MYP, PYP, Cambridge and Edexcel IGCSE, one-to-one private tuition at home on IST, with a free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sirsa",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION FOR SIRSA",
  heroSubtitle:
    "Home tuition for an IB or IGCSE student in Sirsa rarely means a tutor at the gate, because the specialists live hundreds of kilometres away. It means a private one-to-one lesson at your own desk, live online, with someone who has taught the exact syllabus your child is sitting, timed for cool evenings on Indian time.",
  primaryKeyword: "IB and IGCSE tutors in Sirsa",
  imageAltText: "Sirsa student solving an IGCSE Extended Mathematics paper with an online tutor on a shared screen",
  secondaryKeywords: [
    "IB tutor Sirsa",
    "IGCSE tutor Sirsa",
    "IB home tuition Sirsa",
    "IGCSE home tuition Sirsa",
    "IB private tuition Sirsa",
    "IB Maths tutor Sirsa",
    "IGCSE Maths tutor Sirsa",
    "IB Physics tutor Sirsa",
    "IB Chemistry tutor Sirsa",
    "IB Biology tutor Sirsa",
    "IB DP tutor Sirsa",
    "IB MYP tutor Sirsa",
    "IB PYP tutor Sirsa",
    "IGCSE online tuition Sirsa",
    "IB tutor Hisar Road Sirsa",
    "IGCSE tutor Housing Board Colony Sirsa",
    "online IB tutor Sirsa Haryana",
    "IB tutor Sirsa district",
  ],

  heroTrustPoints: [
    "Matched by syllabus code and level, so a Class 9 IGCSE Chemistry student is not handed a generalist",
    "Live online lessons only; the in-person service is confined to Gurugram and parts of Delhi NCR",
    "One free trial lesson, then a rate sent in writing before any booking",
    "A written note after every session so the whole family sees what changed",
    "No connection to the IB, Cambridge, Pearson or any school named here",
  ],
  heroStats: [
    { value: "IST", label: "Tutors and students share a clock" },
    { value: "Every IB stage", label: "PYP, MYP, DP and CP" },
    { value: "May & Nov", label: "The main IB sessions we plan around" },
    { value: "Free trial", label: "Try a lesson first" },
  ],

  intro: {
    heading: "IB and IGCSE tuition when the nearest classroom is a long drive away",
    paragraphs: [
      "Sirsa sits in the far west of Haryana, where the state meets Punjab and Rajasthan, in a district known for cotton, wheat and a busy grain market. It has good CBSE and Haryana Board schools, a state university in Chaudhary Devi Lal University, and a strong tradition of children going on to medicine, engineering and civil services. What it does not have, as far as we can confirm, is a school teaching the IB or a Cambridge or Pearson Edexcel IGCSE.",
      "That has not stopped the questions. Parents who run agricultural trading firms, doctors and government officers with transfer histories, and families with relatives in Canada, Australia or the UK all ask whether an international qualification might suit a child better than the Class 12 board. Some are already committed, with a child enrolled in an IB or IGCSE school in another city and studying from home during breaks. For every one of them the practical problem is identical: nobody nearby has taught these papers.",
      "Online private tuition removes that problem. Tutors are based across India, teach on IST and work with a shared screen and digital whiteboard, so a Sirsa student can sit one-to-one with a specialist who has coached the exact course, whether that is IB Physics HL, MYP Sciences or IGCSE Extended Maths. Lessons happen at the child's own desk. Tutors do not visit homes in Sirsa, since home visits run only in Gurugram and parts of Delhi NCR.",
      "This page walks through what the syllabuses involve, how Sirsa's heat, fog and farming calendar shape a revision year, what drives the cost, and what university options are open afterwards. It makes no promise about marks or admission. Tutors coach and never write internal assessments, Extended Essays or coursework, and IB Gram is an independent service unconnected to the IB, Cambridge, Pearson or any school.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, from primary inquiry to the Diploma",
      "Cambridge and Pearson Edexcel IGCSE at Core and Extended",
      "One-to-one online lessons from home, on a laptop, in the evening or at weekends",
      "Free trial, written notes after sessions, tutor swap if the fit is off",
      "No home visits in Sirsa, since those exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Before choosing a tutor, we need to know which programme the student is on and which school runs it, since none of the four is taught in Sirsa as far as we can confirm. A boarding student in Chandigarh, a day student in Gurgaon and a child preparing to move abroad each need a different approach.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Primary learning is built round six themes such as how we express ourselves and how the world works, taught through inquiry units instead of separate textbooks. Pupils close the programme with an Exhibition, a self-directed project on a question they choose.",
      countryNote:
        "In Sirsa, PYP questions come from parents whose child is at an international primary school elsewhere or is about to join one, and the recurring need is spoken English confidence and steady reading.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16, Class 6-10",
      description:
        "Students study eight subject groups against criteria rather than percentages, tie learning to global contexts and finish with a Personal Project. Written communication is graded as heavily as content.",
      countryNote:
        "A Sirsa student arriving from a Haryana Board or CBSE class typically struggles most with open-ended Science investigations and with writing a reflection that the assessment criteria reward.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects are studied over two years, three at Higher Level and three at Standard, together with the Extended Essay, Theory of Knowledge and CAS. Grades run 1 to 7 per subject, with a maximum of 45 points.",
      countryNote:
        "DP enquiries from Sirsa are usually for Mathematics, Physics or Chemistry, and Biology, from families weighing engineering or medical routes and wanting steady support during a school's boarding term.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two Diploma courses are combined with a career-related qualification and a core of personal and professional skills, language study and a reflective project. It is aimed at students who want a practical route into study or work.",
      countryNote:
        "Sirsa families ask about CP rarely, but the ones who do tend to be from business households wanting a Diploma Business or Maths course alongside an applied qualification.",
    },
  ],

  subjectsIntro:
    "Tutors are matched course by course. Requests from Sirsa lean toward quantitative and laboratory subjects, since these are the ones a boarding or relocated student most needs help with when the school's own teachers are far away.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions, vectors and proof-based thinking for students headed to engineering, actuarial work or pure science." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and technology-assisted work for commerce, social science and design-minded students." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, thermal physics, waves and fields, with practice in structured long answers and uncertainty analysis." },
    { name: "Chemistry", levels: "SL and HL", description: "Quantitative chemistry, bonding, organic pathways, equilibrium and the practical data skills tested in the internal assessment." },
    { name: "Biology", levels: "SL and HL", description: "Molecular biology, genetics, physiology and ecology, with the experimental design questions that separate top grades from average ones." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "An interdisciplinary science-and-humanities course that suits students from agricultural families interested in land, water and sustainability." },
    { name: "Economics", levels: "SL and HL", description: "Markets, macroeconomic policy and development, with diagram accuracy and evaluation drilled for the paper format." },
    { name: "Business Management", levels: "SL and HL", description: "Finance, marketing, operations and human resources, built on case-study analysis that mirrors real family businesses." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming, algorithms, networks and databases, with help understanding the marking of the extended-response paper." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysis of non-literary and literary texts, and structured comparative essays." },
    { name: "English A: Literature", levels: "SL and HL", description: "Close reading of set works and the individual oral, with attention to argument and structure." },
    { name: "Hindi B", levels: "SL and HL", description: "Language acquisition for students who study Hindi as an additional language, covering the writing tasks and oral." },
    { name: "Punjabi and other languages", levels: "Ab initio and SL", description: "Support for students who need to keep up a home language alongside the Diploma, where the school arranges it." },
    { name: "History", levels: "SL and HL", description: "Source analysis and essay technique across prescribed topics such as authoritarian states and the Cold War." },
    { name: "Theory of Knowledge", levels: "Core", description: "Coaching on how to build a claim and read the prescribed titles; essay and exhibition remain the student's own work." },
  ],
  igcseSubjectsIntro:
    "For many Sirsa families IGCSE is the more approachable first step, because papers are published, content is clearly defined and results feed into A Level, the IB Diploma or a return to CBSE. Both Cambridge and Pearson Edexcel are covered.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core and Extended", description: "Number, algebra, geometry, trigonometry and probability, with timed papers and error logs." },
    { name: "Additional Mathematics", levels: "Cambridge", description: "A bridge to A Level and IB Maths through calculus, functions and coordinate geometry." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, energy, circuits, waves and atomic physics, with practical paper skills." },
    { name: "Chemistry", levels: "Core and Extended", description: "Moles, reactivity, organic chemistry and qualitative analysis for the practical paper." },
    { name: "Biology", levels: "Core and Extended", description: "Cell structure, nutrition, respiration, inheritance and ecology, with diagram and graph practice." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core and Extended", description: "For students taking a double-award science instead of three separate papers." },
    { name: "Computer Science", levels: "Cambridge and Edexcel", description: "Pseudocode, logic, data representation and the programming problem paper." },
    { name: "Business Studies", levels: "Cambridge and Edexcel", description: "Business activity, marketing and finance, using case studies from practice papers." },
    { name: "Economics", levels: "Cambridge and Edexcel", description: "Core economic ideas, government policy and international trade." },
    { name: "English as a First Language", levels: "Cambridge and Edexcel", description: "Writing for effect, summary and directed writing tasks." },
    { name: "English as a Second Language", levels: "Cambridge and Edexcel", description: "Reading, writing and speaking for students building fluency." },
    { name: "Hindi as a Second Language", levels: "Cambridge", description: "Comprehension, composition and oral preparation." },
    { name: "Punjabi", levels: "Cambridge", description: "Reading and writing preparation where the exam centre registers the paper." },
  ],

  regionsTitle: "Sirsa localities and the timing of online lessons",
  regionsIntro:
    "Sirsa spreads along its main roads toward Hisar, Dabwali, Ellenabad, Rania and Barnala, with older markets in the middle and newer colonies and HUDA sectors on the edges. These notes are about scheduling online lessons, not about local IB schools, which do not exist here as far as we can confirm.",
  regions: [
    { name: "Old Housing Board Colony", note: "An established residential area popular with government employees. Weekday evenings are the usual choice, when a parent is back from work and the household is quiet." },
    { name: "HUDA sectors", note: "Planned sectors with wider roads and newer homes. Broadband quality tends to be steadier here, which suits long online sessions." },
    { name: "Hisar Road", note: "The corridor toward Hisar carries traffic through the day. Families here often book after 6 pm once the road quietens." },
    { name: "Dabwali Road", note: "Residential and commercial mix on the western side, with trading families whose day runs late. Later evening slots can work well." },
    { name: "Ellenabad Road", note: "Homes and small businesses along the road toward Ellenabad. Weekend morning blocks help students who study in the evening at school." },
    { name: "Rania Road", note: "A growing edge of town. Families commonly combine online tuition with a boarding term elsewhere, using holiday bursts for intensive study." },
    { name: "Barnala Road", note: "The route toward Punjab and the university side of town. Households with faculty and staff links often plan a weekly evening slot." },
    { name: "Bhadra Bazar and the old city", note: "The dense market area, where family businesses set the rhythm. Tuition is best kept away from peak trading hours." },
    { name: "Sant Nagar and surrounding colonies", note: "Settled residential neighbourhoods on the town's built-up side. Steady weekly lessons suit families with regular routines." },
    { name: "Villages around Sirsa", note: "Farming families outside town can join equally well online, provided the connection is reliable; a phone hotspot is a useful backup." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Gurgaon",
      note: "Every IB-affiliated school in Haryana that families ask about sits in Gurgaon district, several hours from Sirsa, so most students there are boarders or have relocated. Verify each school's current offering with it directly.",
      schools: ["Amity International School, Sector 46", "GD Goenka World School, Sohna"],
    },
    {
      city: "Nearby: Ludhiana",
      note: "Punjab's largest city is a common alternative for western Haryana families, and several international schools there teach Cambridge or IB programmes. It is a long road trip, not a daily commute.",
      schools: ["Britannica International School", "Harvest International School"],
    },
    {
      city: "Nearby: Chandigarh and Mohali",
      note: "The tricity has international schools on both the IB and Cambridge routes, and some offer boarding. Families use them when a child is ready for a full move.",
      schools: ["Oakridge International School, Mohali", "The British School, Chandigarh"],
    },
  ],
  schoolDisclaimer:
    "None of these schools is in Sirsa, and we could not confirm any school in the city on the IB or a Cambridge or Edexcel IGCSE. They are named as the nearest options families ask about. IB Gram is an independent tutoring service, not affiliated with, endorsed by or paid by any of them, the IB, Cambridge or Pearson. Check details directly.",

  modesIntro:
    "Home visits are not offered in Sirsa, so all three arrangements below run online. Choose by how close the exam is, how much time the student has, and whether they are living at home or in a hostel.",
  modes: [
    {
      title: "Weekly online home tuition",
      description:
        "A private one-to-one lesson each week, taken from the student's own room. A specialist works the syllabus, marks the student's practice and sets the next week's task. Tutors do not visit homes in Sirsa.",
      bullets: [
        "Same tutor across the term",
        "Shared screen and digital whiteboard",
        "Short written note after every lesson",
      ],
    },
    {
      title: "Holiday and vacation blocks",
      description:
        "Compressed courses in the long summer break or the winter holidays, useful for boarding students who are home for a few weeks.",
      bullets: [
        "Daily or alternate-day sessions",
        "Good for catching up before a new term",
        "Booked around the school's dates",
      ],
    },
    {
      title: "Pre-exam revision sprint",
      description:
        "A focused run of lessons in the last two or three months, built on timed past papers and error analysis.",
      bullets: [
        "Priority topics chosen from mock results",
        "Practice under exam timing",
        "Mark-scheme language taught explicitly",
      ],
    },
  ],

  sections: [
    {
      heading: "How do heat, fog and the farming year shape study time in Sirsa?",
      paragraphs: [
        "Sirsa's weather is severe at both ends of the year, and it matters for online lessons more than it does for a classroom. From late April to June, afternoons regularly cross 40 degrees and load-shedding or fluctuating voltage can hit router and laptop together, so evening slots after about 5:30 pm are the sensible default, ideally with a fan-cooled room and a charged device.",
        "December and January bring fog that can shut roads and cancel trains for days, which affects boarding students travelling home for the holidays. It seldom affects an online lesson, and that is one of the arguments for it: a tutor in another city is not held up by a foggy highway. Students who lose a travel day can still keep their weekly slot.",
        "The farming calendar has its own quiet influence. Wheat is harvested around April, in the weeks before final exams, and cotton picking runs through October and November. Many households, including those not directly in agriculture, feel the market bustle and the demand for family time that comes with it. Lessons are more reliable when the family sets a fixed weekly time and treats it like a regular appointment.",
        "Wedding season and festivals, from Diwali to Lohri, produce a scattering of missed days. We suggest agreeing at the start how missed sessions are made up, and keeping two or three flexible slots each month so a week is not lost to a function.",
        "Finally, monsoon humidity in July and August raises the risk of power interruptions and thunderstorms. A simple phone hotspot and a small UPS cost little and protect a session that a family has already scheduled.",
      ],
      bullets: [
        "April to June: evenings after 5:30 pm, avoid mid-afternoon",
        "December and January: fog does not cancel online lessons",
        "Wheat harvest and cotton picking: fix a regular weekly slot",
        "Monsoon: hotspot and UPS as cheap insurance",
      ],
    },
    {
      heading: "What are the exam dates for IB and IGCSE students in Sirsa?",
      paragraphs: [
        "The IB Diploma's main session for Indian schools is in May, and results are released in early July. A November session exists for a smaller group. Cambridge IGCSE runs series in May and June and in October and November, with an extra February or March series for certain syllabuses, and Pearson Edexcel offers comparable summer and winter windows. Your school or exam centre confirms dates and deadlines each year.",
        "The calendar at school level matters as much as the exam dates. Internal assessments and orals arrive earlier than parents expect, often in the winter term, and mock exams commonly fall in January or February. A student who has not started revising by then feels rushed in the last stretch.",
        "The table below places these milestones beside what is happening in Sirsa, so that the family can plan lessons backwards from an exam rather than reacting to it. Adjust for your school, because IB schools vary and timelines differ for MYP and PYP, which have no external exam session at most schools.",
        "For a Class 10 IGCSE student the most useful early step is to identify the tier, Core or Extended, and to practise the papers under time by the winter term. For a Diploma student the extended essay and internal assessments deserve early attention, since they compete with revision later in the year.",
      ],
      table: {
        caption: "Exam-year milestones and Sirsa conditions",
        columns: ["Months", "School and exam milestones", "Sirsa conditions", "Suggested lesson focus"],
        rows: [
          ["Oct-Nov", "IGCSE winter series, IB first-term assessments", "Cotton picking, Diwali, cooler evenings", "Past-paper practice, catching up after festivals"],
          ["Dec-Jan", "Mocks and internal assessment deadlines", "Dense fog, cold nights", "Timed papers, error logs, online lessons unaffected by roads"],
          ["Feb-Mar", "IB orals, IGCSE practicals, final revision begins", "Pleasant weather, good study period", "Weak-topic repair and full-paper sessions"],
          ["Apr-May", "IB written exams, IGCSE summer series", "Wheat harvest, rising heat", "Evening slots, light revision the day before"],
          ["Jun-Jul", "Results, new term planning", "Peak heat then monsoon", "Bridge courses for the incoming year"],
        ],
      },
    },
    {
      heading: "Haryana Board, CBSE, IB and IGCSE: what changes for a Sirsa student?",
      paragraphs: [
        "Most Sirsa students go through the Haryana Board or CBSE, both of which are built around a fixed textbook and a final board examination. A move to IGCSE or the IB changes not the difficulty so much as the way the marks are earned, so it helps to know what to expect before a child commits to it.",
        "The Haryana Board, taught in Hindi or English medium, is closely tied to the state's textbooks and is the natural choice for students aiming at state services or state universities. CBSE follows NCERT and lines up with JEE, NEET and CUET-UG, which makes it the default for competitive-exam families.",
        "IGCSE brings published syllabuses and externally marked papers with command words, mark schemes and practical assessment. Students often find it more logical than a board exam but less forgiving of vague answers. The IB Diploma adds breadth, essays and internal assessment, with a total score of 45.",
        "For a Sirsa family the deciding question is often the intended destination. If the child will remain in India and target JEE or NEET, CBSE has a clear advantage. If study abroad is on the cards, IGCSE and the IB fit more naturally, though both can still be used for Indian admission with the right subjects and equivalence.",
      ],
      table: {
        caption: "How the four routes differ",
        columns: ["Route", "How marks are earned", "Language", "Usual next step"],
        rows: [
          ["Haryana Board", "Board papers on state textbooks", "Hindi or English medium", "State universities, state services, CET routes"],
          ["CBSE", "Board papers on NCERT, strong entrance-exam fit", "English or Hindi medium", "JEE, NEET, CUET-UG"],
          ["Cambridge or Edexcel IGCSE", "Externally marked papers, practical component", "English medium, second language optional", "A Level, IB Diploma, CBSE Class 11"],
          ["IB Diploma", "Six subjects, internal and external marks, core", "English plus a second language", "Indian universities via equivalence, study abroad"],
        ],
      },
    },
    {
      heading: "Which schools near Sirsa offer IB or IGCSE?",
      paragraphs: [
        "None that we can confirm inside Sirsa. The city's well-regarded private schools run CBSE or the Haryana Board, and we have not found a Sirsa school offering the IB or a Cambridge or Edexcel IGCSE syllabus. If you know of one, tell us and we will check it before mentioning it anywhere.",
        "The nearest confirmed options are in other states and districts. Ludhiana and the Chandigarh-Mohali area lie to the north, and Gurgaon and Delhi to the east, while Hisar and Bathinda are closer but themselves lack IB schools that we can confirm. Distances are measured in hours, which is why a student on these routes is almost always a boarder.",
        "Some families use IGCSE or A Level online schools, which allow a child to study at home and sit exams at an approved centre. This is a legitimate path but has a few dependencies: an exam centre that accepts the candidate, a way of completing practical work, and tutors who can support the subject content. We help with the last of these.",
        "Whichever of these arrangements is chosen, a specialist tutor is useful because students often spend months without a teacher who has taught that syllabus. A weekly lesson, a written note and past-paper marking give the student a reliable anchor.",
      ],
      bullets: [
        "Inside Sirsa: none confirmed",
        "Ludhiana and Chandigarh-Mohali: nearest Punjab options",
        "Gurgaon and Delhi: main options on the Haryana side",
        "Online or private candidate routes need an exam centre arranged early",
      ],
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Sirsa family?",
      paragraphs: [
        "No two families pay the same, because the rate follows the programme, subject, level and hours, and we do not publish a headline number. A written quote arrives before you book, so you can compare it with what you would spend otherwise.",
        "Three things move the rate most. The first is the level: Higher Level Physics for the Diploma is a different service from MYP Year 2 English. The second is the tutor's depth, since someone who has marked or examined a paper brings something that a recent graduate does not. The third is the number of hours, which a family can raise before exams and lower in quieter months.",
        "There is also the saving that families in a smaller city tend to underrate. A specialist tutor in Sirsa would be almost impossible to find, so the alternative is often a long drive to Hisar, Bathinda or Chandigarh, or nothing at all. Online lessons cost no fuel, tolls or lost afternoons.",
        "To keep spending sensible, use the free trial, ask for a diagnostic of weak topics and start with a modest block of lessons. If the plan is working, extend it. If it is not, change tutor rather than persisting with a poor match.",
      ],
    },
    {
      heading: "Online tuition, coaching centres, local tutors or self-study: how do they compare in Sirsa?",
      paragraphs: [
        "Sirsa families weigh four options, and each works for a different kind of student. The table compares them on the points that matter for an IB or IGCSE candidate, without pretending one always wins.",
        "Coaching centres in the town are geared to Haryana Board, CBSE, JEE and NEET, and they do it well. Their batches follow those syllabuses, though, so a student on an international course usually finds the pace and content mismatched.",
        "Local private tutors are excellent for school subjects, and some are outstanding teachers of Maths or Science. What they lack, generally, is exposure to IB or IGCSE marking, which decides how an answer is written even when the content is familiar.",
        "Self-study is what all serious students do in part, but the missing piece is feedback. A student who practises papers alone repeats the same errors for weeks. A live tutor who marks work against the actual scheme shortens that loop.",
        "Online one-to-one tuition combines subject knowledge with home convenience, although it needs stable connectivity and a student who treats the session as work.",
      ],
      table: {
        caption: "Support routes for a Sirsa student on IB or IGCSE",
        columns: ["Route", "Knows IB and IGCSE marking", "Feedback quality", "Effort for the family", "Watch out for"],
        rows: [
          ["Online one-to-one tutor", "Yes, chosen by syllabus", "Detailed and personal", "A laptop and a quiet hour", "Connectivity in summer storms"],
          ["Coaching centre", "Rarely", "Batch-level", "Daily travel", "Content aimed at other boards"],
          ["Local private tutor", "Sometimes", "Depends on the individual", "Tutor visits or student travels", "Limited syllabus experience"],
          ["Self-study", "Only from papers", "None without a marker", "Discipline", "Errors go unnoticed"],
        ],
      },
    },
    {
      heading: "How are IB Maths, Physics and Chemistry taught to Sirsa students?",
      paragraphs: [
        "Students from a CBSE or Haryana Board background often arrive with excellent calculation skills, and the adjustment is in reading. An IB Maths question may present a real-world scenario, ask for a model, then a justification in words, and marks are split between method and communication. Tutors train students to write each step so partial credit is not lost.",
        "Analysis and Approaches suits calculus-minded students who want engineering or pure science; Applications and Interpretation suits statistics and modelling routes. We suggest reading a sample paper for each before choosing, and discussing with the school how much flexibility exists to change later.",
        "Physics is tested by structured questions, data analysis and extended responses, and it rewards students who can start from first principles. Chemistry has heavy quantitative sections and a large organic component, and both subjects include an internal investigation that the student writes alone, with tutors advising on planning but never drafting.",
        "Biology rewards precise terms and an ability to interpret unfamiliar experiments, and Sirsa's medical aspirants are usually well-prepared for recall but need practice in data-based questions.",
        "A typical weekly session opens with a check on last week's errors, moves to new content or exam-style questions, and closes with a task list. Over a term, that pattern turns scattered practice into steady progress.",
      ],
      bullets: [
        "Maths: interpretation, communication of method, calculator fluency",
        "Physics: derivations, units and extended responses",
        "Chemistry: organic mechanisms, equilibrium and practical data",
        "Biology: terminology and data-based questions",
      ],
    },
    {
      heading: "IGCSE Core, Extended and subject choice for Sirsa students",
      paragraphs: [
        "IGCSE Maths and the sciences come in Core and Extended tiers, and the choice caps the top grade a student can reach. Core tops out at grade C, while Extended gives access to A* down to G. A student who may take A Level or IB Maths later should aim for Extended.",
        "The decision is usually taken during the second year, using mock results. A tutor's honest opinion during the trial can save a year of pressure, and the student can still move to Extended with a short bridging block if the mocks are encouraging.",
        "Subject choice is worth discussing early. Engineering aspirants normally keep all three sciences and Additional Maths, while a student inclined toward commerce might prefer Business and Economics. A language, often Hindi or Punjabi where available, rounds out the profile, and English as a First or Second Language is chosen by the school.",
        "Practicals matter in the sciences, and for a student studying outside a school laboratory the alternative-to-practical paper is a good test of understanding. Tutors work through common practical scenarios with diagrams, tables and graph-plotting.",
      ],
      table: {
        caption: "IGCSE decisions for a Sirsa student",
        columns: ["Decision", "Guidance", "Common mistake"],
        rows: [
          ["Maths tier", "Extended if A Level or IB Maths may follow", "Choosing Core to avoid pressure and later regretting the cap"],
          ["Sciences", "Three separate sciences for engineering or medicine", "Assuming Combined Sciences is equivalent"],
          ["Language", "Hindi or Punjabi where the centre registers it", "Leaving language registration until late"],
          ["Extras", "Business, Economics or Computer Science by interest", "Overloading the timetable in the final year"],
        ],
      },
    },
    {
      heading: "Where can Sirsa students go after IB or IGCSE?",
      paragraphs: [
        "In India, the IB Diploma is regarded by the Association of Indian Universities as equivalent to Class 12, and many institutions accept it, with CUET-UG the route into most central universities. IGCSE by itself leads onward to A Level, the IB Diploma or Class 11 and 12 of a board, not directly to a degree.",
        "For engineering and medicine, a student generally needs the right subjects and an equivalence certificate to sit JEE or NEET. Rules and eligibility are revised, so check the current information bulletin of each exam before choosing subjects, not afterwards.",
        "Close to home, Sirsa students look at Chaudhary Devi Lal University, Guru Jambheshwar University and Haryana Agricultural University in Hisar, Panjab University in Chandigarh and Punjabi University in Patiala, while others aim for Delhi University or private universities in Sonipat and Gurgaon. The right choice depends more on course than on city.",
        "Abroad, the IB Diploma is widely understood in the UK, US, Canada, Australia and Europe, and many Sirsa families have relatives in these countries. Applications are handled by the school's counsellor or an independent adviser, and tutors help with subject preparation only.",
        "Whichever path is planned, work backwards from the university's subject requirements and choose Class 11 and 12 subjects accordingly, since mistakes here are difficult to reverse.",
      ],
      bullets: [
        "Indian admission: AIU equivalence, CUET-UG, institutional criteria",
        "JEE and NEET: check subject and equivalence rules early",
        "Regional options: Sirsa, Hisar, Chandigarh, Patiala, Delhi",
        "Study abroad: IB Diploma or A Level results, not IGCSE alone",
      ],
    },
  ],

  process: [
    { title: "Tell us the school and subject", description: "Message on WhatsApp with the programme, board, subject, level and recent scores so we can shortlist tutors with matching experience." },
    { title: "See the shortlist", description: "You receive a tutor profile and a suggested weekly slot, with room for questions." },
    { title: "Sit a free trial", description: "The student works through a live problem while a parent watches." },
    { title: "Confirm the plan in writing", description: "We put the timetable, session count and rate in writing before any booking." },
    { title: "Track progress after each session", description: "A short note follows every lesson, and a tutor change is available if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Right tutor for the exact course", description: "IB Physics HL, MYP Science and IGCSE Chemistry need different specialists, and we match on that." },
    { title: "Distance stops mattering", description: "A student in Sirsa learns from a specialist elsewhere in India without a journey to Chandigarh or Gurgaon." },
    { title: "Plain about what we offer here", description: "We say openly that Sirsa has no confirmed IB school and that home visits are not available." },
    { title: "Coaching within IB rules", description: "Tutors explain and give feedback, but never write coursework, IAs, Extended Essays or TOK essays." },
    { title: "Evening timing that fits the weather", description: "Slots are built around heat, fog and the local calendar." },
    { title: "Try before you commit", description: "The first lesson is free, and a poor fit is swapped." },
  ],

  tutorsIntro:
    "The tutors shown teach from across India on IST. Each profile lists the syllabuses and levels covered, and you can ask for someone with experience of a specific subject code.",

  faqs: [
    {
      question: "Can I find an IB tutor in Sirsa?",
      answer:
        "Yes, online. There are few or no IB specialists based in Sirsa itself, so IB Gram's tutors teach live over video from elsewhere in India, on IST. Your child takes each lesson from home on a laptop. Tutors do not visit homes in Sirsa, and in-person tuition is limited to Gurugram and parts of Delhi NCR. A free trial lesson lets you see the format first.",
    },
    {
      question: "Is IGCSE home tuition available in Sirsa?",
      answer:
        "Online home tuition is available, but tutors do not come to your house. A private one-to-one lesson happens at your child's own desk over a video call, with a tutor who has taught the specific Cambridge or Pearson Edexcel subject. In-person home visits run only in Gurugram and parts of Delhi NCR, and Sirsa is outside that area.",
    },
    {
      question: "Are there IB or IGCSE schools in Sirsa?",
      answer:
        "We could not confirm any. The known private schools in the city follow CBSE or the Haryana Board. Families who want an international curriculum look at Gurgaon, Delhi, Ludhiana or Chandigarh, or use an online school with a private exam centre. If you know of a local school, tell us and we will verify it before naming it.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Sirsa?",
      answer:
        "The cost depends on programme, subject, level, tutor experience and weekly hours, so we send a written quote before booking instead of listing prices. Higher Level Diploma sciences cost differently from MYP support. The free trial shows what you would get. Online delivery also avoids fuel and travel time to Hisar, Bathinda or Chandigarh.",
    },
    {
      question: "Can a CBSE or Haryana Board student switch to IGCSE?",
      answer:
        "Yes, though the timing matters. The smoothest entry is the start of Class 9 for IGCSE. Expect adjustment in written explanation, practical work and command words. A few weeks of bridging with a subject tutor closes most gaps, and we can begin with a diagnostic lesson to see where the student stands.",
    },
    {
      question: "Which IB Maths course should a Sirsa student take?",
      answer:
        "Analysis and Approaches suits students aiming at engineering, physics or economics, and Applications and Interpretation suits business, social science and modelling routes. Universities sometimes specify one, so check target courses first. If undecided, a tutor can walk the student through a sample paper for each.",
    },
    {
      question: "Do tutors write IAs or Extended Essays?",
      answer:
        "No. Tutors coach only. They explain criteria, help with topic choice, discuss method and comment on drafts the student has written, but never write an IA, Extended Essay, TOK essay or coursework. This protects the student from an academic integrity breach and keeps the work genuinely theirs.",
    },
    {
      question: "Which IGCSE boards are covered?",
      answer:
        "Cambridge International and Pearson Edexcel International GCSE are both covered, along with A Level and AS for students who continue. Papers and command words differ by board, so tell us the board and subject code and we will match a tutor who has taught that exact syllabus.",
    },
    {
      question: "What equipment does my child need for online lessons?",
      answer:
        "A laptop or tablet, stable broadband, headphones and a quiet desk are enough. For Sirsa's summer storms and voltage swings, a phone hotspot and a small UPS for the router are good insurance. A phone camera can show handwritten working when needed.",
    },
    {
      question: "What time are lessons held, given the heat?",
      answer:
        "Most Sirsa families choose evenings after about 5:30 pm in summer and afternoons in winter. Weekend mornings suit longer paper sessions. Because tutors teach on IST from across India, slots can be moved by a few hours when weather or a family event intervenes.",
    },
    {
      question: "How early should we start before the May exams?",
      answer:
        "For a demanding Diploma subject, six to eight months ahead is comfortable, and a focused block of ten to twelve weeks is the minimum for revision. Starting earlier allows concept gaps to be fixed calmly. If the exam is close, say so and we will design a shorter plan around the highest-value topics.",
    },
    {
      question: "Can a private candidate get tutoring for IGCSE?",
      answer:
        "Yes, for subject preparation. Private candidates need help with pacing, practical paper technique and mark-scheme language. The complication is the exam centre, since few accept private candidates near Sirsa and deadlines are early. Confirm the centre first and the tutor can plan backwards from the exam date.",
    },
    {
      question: "Will IB or IGCSE let my child sit JEE, NEET or CUET?",
      answer:
        "Generally yes if subject and equivalence conditions are met. The IB Diploma is treated as equivalent to Class 12 by the Association of Indian Universities. Rules change, so read the current bulletin before choosing subjects. Students aiming at JEE or NEET should plan Physics, Chemistry and Maths or Biology early.",
    },
    {
      question: "What happens in the free trial lesson?",
      answer:
        "Your child works on a real topic or past-paper question live with a matched tutor while a parent watches if they wish. Afterwards we send a short note on what the tutor observed and a written rate if you want to continue. There is no obligation, and another tutor is offered if the fit is off.",
    },
    {
      question: "Are the tutors based in Sirsa?",
      answer:
        "No. Tutors are based in different parts of India and teach on IST over video. That is what allows a Sirsa student to work with a specialist in a subject nobody nearby has taught. Tutors do not travel to Sirsa, and we do not run in-person tuition here.",
    },
    {
      question: "How do I start from Sirsa?",
      answer:
        "Message +91 7439 368 115 on WhatsApp or write to ibgram24@gmail.com with the school, programme, subject and recent marks. We suggest a tutor, arrange a free trial and confirm the rate in writing. All lessons are online, so your routine only needs a laptop and a quiet hour.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The national page with every city we serve online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Diploma, MYP and PYP subject specialists." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Structure, grading and the Diploma core explained." },
    { label: "IB PYP support", href: "/programmes/pyp/", description: "Primary inquiry units and the Exhibition." },
    { label: "IB Maths tutoring", href: "/courses/ib/mathematics/", description: "AA and AI at SL and HL." },
    { label: "Our tutors", href: "/tutors/", description: "See who teaches which syllabus." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Book a free trial lesson." },
    { label: "IB and IGCSE tutors in Hisar", href: "/hisar/", description: "The nearest large Haryana city, also served online." },
    { label: "IB and IGCSE tutors in Bathinda", href: "/bathinda/", description: "The nearby Punjab city with links to Ludhiana and Chandigarh." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The area where in-person visits are offered." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson from Sirsa",
  closingBody:
    "Tell us the school, the subject and the exam date, and we will suggest a tutor who has taught that course. The trial is free, the rate follows in writing, and every lesson happens online from your home.",
};
