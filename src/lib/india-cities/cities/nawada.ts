import type { CitySeoPage } from "../types";

/**
 * /nawada/ - IB and IGCSE tutoring page for Nawada, Bihar (Magadh region, between Gaya, Rajgir and
 * Patna). No IB or Cambridge / Edexcel school could be confirmed in the town; clusters point to
 * Kolkata, Delhi NCR and the Mussoorie boarding belt, reusing names already verified on the Patna
 * and Gaya pages. Online only; in-person home tuition runs only in Gurugram and parts of Delhi NCR.
 */
export const nawada: CitySeoPage = {
  slug: "nawada",
  countryName: "Nawada",
  countryNameLong: "Nawada, Bihar",
  demonym: "Nawada",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson times bend around the loo-season afternoons, Chhath and Durga Puja travel, and the Bihar board or CBSE dates your child already has to meet",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.8833, longitude: 85.5333 },
  wikipedia: "https://en.wikipedia.org/wiki/Nawada",
  alternateNames: ["Nawadah", "Nowada"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nawada | Private Home Tuition Online",
  metaDescription:
    "Nawada families can book IB and IGCSE tutors online: private one-to-one tuition at home for DP, MYP, PYP and Cambridge courses, with a free first lesson.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Nawada",
  heroEyebrow: "PRIVATE ONLINE IB & IGCSE TUITION FOR NAWADA, BIHAR",
  heroSubtitle:
    "Home tuition in Nawada for an IB or IGCSE course has one workable form: a live video class, one child and one teacher, held from your own room. No tutor from IB Gram will come to a house in Bihar, since Gurugram and a few pockets of Delhi NCR are the only places where teachers go to homes. What Nawada gains is access to a teacher who has already taught the syllabus, without a six-hour round trip to Patna.",
  primaryKeyword: "IB and IGCSE tutors in Nawada",
  imageAltText: "A Nawada student in Bihar during an evening online IB Mathematics class, notebook open beside a laptop",
  secondaryKeywords: [
    "IB tutor Nawada",
    "IGCSE tutor Nawada",
    "IB home tuition Nawada",
    "IGCSE home tuition Nawada",
    "IB private tuition Nawada",
    "IB Maths tutor Nawada",
    "IGCSE Maths tutor Nawada",
    "IB Physics tutor Nawada",
    "IB Chemistry tutor Nawada",
    "IB Biology tutor Nawada",
    "IB DP tutor Nawada",
    "IB MYP tutor Nawada",
    "IB PYP tutor Nawada",
    "IGCSE online tuition Nawada",
    "IB tutor Nawada Bihar",
    "online IB tutor Hisua",
    "IB tutor Warisaliganj",
    "IGCSE tutor Rajauli Nawada",
    "IB tutor Magadh region",
  ],

  heroTrustPoints: [
    "The tutor is picked for the exact syllabus, not for being nearby",
    "Nawada lessons are online; only Gurugram and parts of Delhi NCR get teachers at the door",
    "Watch a full trial class first, at no charge",
    "Fee agreed on paper before you book",
    "No tie to any Bihar school, board or exam body",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as home" },
    { value: "PYP to DP", label: "Whole IB ladder" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "Free first class", label: "Try before paying" },
  ],

  intro: {
    heading: "An international syllabus from the Magadh heartland",
    paragraphs: [
      "Nawada sits in south-central Bihar, roughly midway between Gaya and Rajgir, with Patna a few hours north. The district is known for the Kakolat waterfall, for its rice and its ties to the Magadh past, and among families for a fierce belief in education as the way up. Most of that belief runs through the Bihar board, CBSE and the coaching corridors of Patna and Kota.",
      "IB and IGCSE are a different road. Our checks of school directories did not turn up an IB World School or a Cambridge or Edexcel centre inside Nawada, so none is listed here. The families who ask about these qualifications are often the ones with a relative abroad, a parent working in Delhi, Bengaluru or the Gulf, or a child who has been offered a place at a boarding school in another state.",
      "For them the real question is how to keep learning a demanding foreign-style syllabus while living in a district town. The answer we offer is modest and practical: a teacher who has taught your child's exact course, met on a screen a few evenings a week.",
      "IB Gram stays independent of every school, board and university named on this page. Tutors explain, correct and coach. Writing a student's assessed work for them is off the table.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge or Pearson Edexcel IGCSE",
      "Private tuition from home, online, one child per lesson",
      "Teachers at the door only in Gurugram and parts of Delhi NCR",
      "Trial class, written lesson notes and a swap option if it is not working",
    ],
  },

  programmesIntro:
    "Without a verified IB school in town, every programme reaches Nawada through some kind of migration, real or planned: a job move, a boarding place, a relative's advice or a bid for study abroad. What each stage needs from a teacher is set out below.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Grades 1 to 5 (about 6 to 11)",
      description:
        "Instead of separate subject silos the programme runs on big themes explored through questions, ending in a self-directed Exhibition. There is no external test, so a tutor spends time on fluent reading, comfortable arithmetic and speaking up in English.",
      countryNote:
        "A Nawada child on PYP is typically a family returning from a job in a metro, or a cousin's child staying with grandparents while parents work elsewhere.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Grades 6 to 10 (about 11 to 16)",
      description:
        "Marks come from four criteria per subject, and the final-year Personal Project is planned, researched and reflected on by the student.",
      countryNote:
        "Children who join a Bihar board or CBSE class after MYP years elsewhere often find the sudden return to a single big paper unsettling, and need a slow, deliberate bridge.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Grades 11 and 12 (about 16 to 19)",
      description:
        "A Diploma student carries six courses, three at Higher Level, along with Theory of Knowledge, an Extended Essay and CAS hours. Coursework called Internal Assessment is part of most grades.",
      countryNote:
        "For a Nawada teenager the Diploma nearly always means a boarding place in another city or a distance route, with a tutor added for one heavy Higher Level subject.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Grades 11 and 12 (about 16 to 19)",
      description:
        "Two or three Diploma courses share the timetable with career-focused study, a reflective project and skills sessions. Few Indian schools run it, but the academic courses inside are held to the usual standard.",
      countryNote:
        "Almost unheard of around Nawada, and met only when a family has come back from a posting where their child had already begun it.",
    },
  ],

  subjectsIntro:
    "Everything starts from the code, the level and the exam sitting. Then we look for an evening slot that works around electricity, chores, school and any coaching class your child already attends.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, sequences and proof for the child who is aiming at engineering, with HL stretched by the unfamiliar problems of Paper 3." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and a graphing calculator; a friendlier fit for future economists and biologists." },
    { name: "IB Physics", levels: "HL / SL", description: "Students strong in JEE-style numericals learn here to explain a design choice or an uncertainty in sentences." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Amount-of-substance work early, organic mechanisms and equilibrium later; the gap widens at Higher Level." },
    { name: "IB Biology", levels: "HL / SL", description: "Memory alone falls short; the exam wants the precise command word obeyed and the investigation backed by proper statistics." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram plus example plus judgement, in every long answer." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying tools like SWOT or break-even to the firm in the case, not reciting them." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Reading an unseen extract cold, comparing two books and speaking about a text for the oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, object-oriented design and a project write-up that defends decisions." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies recalled accurately and essays organised around a claim." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Groundwater, agriculture and heat in the Gangetic plain make the case studies concrete." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies that go beyond a name-drop, and fieldwork that someone else could redo." },
    { name: "IB History", levels: "HL / SL", description: "Weighing sources and defending one line of argument, useful for a Magadh student who knows the region's past." },
    { name: "IB Hindi B", levels: "HL / SL", description: "A language course tuned to spoken fluency, listening and text types; Magahi and Bhojpuri speakers often find Hindi B comfortable." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Talk-through coaching for exhibition objects and prescribed titles, never authorship of the piece." },
  ],

  igcseSubjectsIntro:
    "Nawada IGCSE students mostly prepare privately or through a school in another city. Cambridge is the usual board, Pearson Edexcel is possible, and the tier decides how much of the syllabus is attempted.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Marks for method, calculator-free arithmetic, and the discipline of checking a final answer." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Early calculus and functions for the child planning Diploma or A Level Maths." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, circuits, waves and the written paper that replaces lab work." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Balanced equations, moles, the periodic table and designing an experiment on paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Body systems, genetics and ecology, written up in the style the mark scheme rewards." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Persuasive and descriptive writing plus concise summary, built through weekly timed tasks." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Everyday and formal English for children who speak Hindi, Magahi or Bhojpuri at home." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Demand and supply, government policy and exact definitions." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case-based answers anchored to the named enterprise." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Flowcharts, pseudocode and hardware fundamentals." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Speaking and composition practice for the Hindi papers." },
  ],

  regionsTitle: "Nawada town and the blocks around it where our students study from",
  regionsIntro:
    "The classroom is a screen, so these places speak about how families live rather than where a tutor must travel. Nawada town and its blocks differ in power supply, school choices and the distance to Gaya or Patna.",
  regions: [
    { name: "Nawada town (Sadar)", note: "The district headquarters, with courts, offices, the main bazaar and most of the private schools and coaching rooms." },
    { name: "Hisua", note: "A town toward Gaya and Nalanda, well connected by road and rail, with many families who commute to work outside the district." },
    { name: "Warisaliganj", note: "A busy railway and market town on the line toward Patna, with a long history of trade and government service." },
    { name: "Rajauli", note: "A hilly, forested block bordering Jharkhand, where reliable broadband makes an online tutor especially valuable." },
    { name: "Akbarpur", note: "A block town with strong agricultural roots and a growing number of families who send children away to study." },
    { name: "Kashichak", note: "A smaller town where students often travel to Nawada or Gaya for coaching." },
    { name: "Pakribarawan", note: "A southern block with rural households, some with relatives working in metro cities." },
    { name: "Sirdala", note: "A block close to Rajgir and Nalanda, drawing families connected to the tourism and university economy there." },
    { name: "Govindpur and Kakolat", note: "The area near the waterfall, with seasonal tourism and modest household incomes." },
    { name: "Narhat", note: "A block to the south with farm households and a school culture built around the Bihar board." },
  ],

  schoolDisclaimer:
    "None of the schools in Nawada could be confirmed as offering the IB or a Cambridge or Edexcel IGCSE, so none is described as doing so. The other cities and schools listed are places some Bihar families look at, and IB Gram has no business tie with any of them or with any examining body.",
  schoolClusters: [
    {
      city: "Nawada district",
      note: "Schools follow the Bihar board or CBSE. Our directory checks found no IB or IGCSE school, so students preparing for either qualification study online, privately or in another city.",
      schools: [],
    },
    {
      city: "Nearby: Patna and Gaya",
      note: "Patna, about two to three hours away, has the state's densest coaching scene but the IB and IGCSE options there are also limited; Gaya is closer but no better served. Both are places families visit for exams and counselling.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The nearest large city with an established IB school network, reached by train from Gaya or Patna, and a common boarding choice for Bihar families.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Many Nawada households already have a member working in the capital region, which makes a boarding place or relocation there a realistic option.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi"],
    },
    {
      city: "Nearby: Mussoorie",
      note: "A long-established boarding destination for Bihar families, and an authorised IB World School in the hills.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],

  modesIntro:
    "Everything happens on a screen, but families come with different needs. These are the three shapes of engagement we see most often from small Bihar towns.",
  modes: [
    {
      title: "A regular evening class with one teacher",
      description:
        "The same teacher every week, on a digital whiteboard, working through the syllabus and marking past papers, with a summary sent afterwards.",
      bullets: [
        "Suits any IB course or IGCSE board",
        "Evening times chosen for steady power",
        "Solutions recorded on request",
        "Parents get a short report every few weeks",
      ],
    },
    {
      title: "Bridge for a child changing systems",
      description:
        "A short run of sessions that helps a child moving between the Bihar board, CBSE, IGCSE and IB understand how marks are earned in the new one.",
      bullets: [
        "Fits a child arriving mid-session from a metro",
        "Early lessons locate the gaps",
        "Works alongside the child's current school",
        "Finishes when the gap has closed",
      ],
    },
    {
      title: "Exam-window push",
      description:
        "A busier timetable in the weeks before the May or November papers, using timed practice and quick marking.",
      bullets: [
        "Three or four lessons in a week close to the date",
        "Papers marked to current boundaries",
        "Ideally begins a month early",
        "Starts with the weakest topics",
      ],
    },
  ],

  sections: [
    {
      heading: "Why would a Nawada family look at IB or IGCSE at all?",
      paragraphs: [
        "A Nawada family usually looks at IB or IGCSE because the plan is already bigger than the district. A daughter who wants a place in a UK or Canadian university, a son whose father works in the Gulf, a household that has just moved back from Bengaluru, or a child who has won a boarding place: each of these creates a syllabus that the local school does not teach.",
        "There is also a quieter group. Some parents in Bihar have watched the Bihar board and CBSE routine produce children who can recite but hesitate to explain. They want a curriculum that asks for reasoning, and they see IGCSE Sciences or the IB Diploma as that.",
        "None of this is a judgement on local schools. Nawada has committed teachers, and its students hold their own in state and national tests. The point is that an international syllabus needs specific material, mark schemes and habits that few local teachers have used.",
        "That is why the search for a tutor here starts with the syllabus code and level. A Higher Level Chemistry paper and an Extended Mathematics paper are as different from each other as either is from the Bihar Intermediate exam.",
        "The tutoring itself is straightforward. Once a teacher who knows the course is found, the rest is regular work, with the family deciding how far to go.",
      ],
      table: {
        caption: "Reasons Nawada families ask about IB or IGCSE",
        columns: ["Situation", "What the family wants", "Where a tutor helps"],
        rows: [
          ["Study-abroad plan", "A record that overseas universities recognise easily", "Strong grades in maths and sciences, exam technique"],
          ["Return from a metro or abroad", "Keep the syllabus the child already knows", "Continuity and gap-filling in the current subjects"],
          ["Boarding place secured elsewhere", "Head start before the term begins", "Foundation work in the summer before entry"],
          ["Wish for reasoning-based learning", "Move away from pure recall", "Practice with unfamiliar questions and structured answers"],
        ],
      },
      bullets: [
        "Overseas study is the biggest driver in Nawada",
        "Returning families and boarding places are the next largest groups",
        "Local schools are not the issue; the specific syllabus is",
        "A tutor is chosen by code and level",
      ],
    },
    {
      heading: "How do Bihar board and CBSE differ from IB and IGCSE for a Nawada child?",
      paragraphs: [
        "In Bihar, the matric exam at Class 10 and the Intermediate exam at Class 12 are both run by the state board and are held in February. They test how well a student has mastered the prescribed books, with large numbers of students and a strong culture of guess papers and model answers.",
        "CBSE gives somewhat more room for application questions, and both boards keep exam preparation to a fixed textbook. IB and IGCSE put the emphasis differently: questions often describe a situation the student has never seen and ask them to work out what applies.",
        "The assessment weights also differ. Coursework is a small part of the Bihar board result, while IB Internal Assessments and IGCSE practical or coursework components carry real marks in many subjects. A child who is used to the exam hall doing all the work needs to learn to plan ahead across months.",
        "The habits that helped in board preparation, such as steady revision, tidy notes and speed, still help. The additions are reading the command word, showing the working and building a paragraph, not just a list.",
      ],
      table: {
        caption: "What changes when a Nawada student moves to IB or IGCSE",
        columns: ["Feature", "Bihar board", "CBSE", "IB or IGCSE"],
        rows: [
          ["Main exam months", "February", "February to March", "May-June and October-November"],
          ["What is rewarded", "Prescribed-book recall", "Recall plus application", "Reasoning and structured explanation"],
          ["Coursework", "Marginal", "Some internal marks", "Weighty in many subjects"],
          ["Availability near Nawada", "Everywhere", "Several schools in Nawada and Gaya", "No school confirmed locally"],
        ],
      },
      bullets: [
        "Bihar board exams fall in February",
        "IB and IGCSE questions often set an unfamiliar scenario",
        "Coursework needs months of planning, not last-minute effort",
        "Board-exam habits are still useful",
      ],
    },
    {
      heading: "What shapes the fee for IB or IGCSE tuition in Nawada?",
      paragraphs: [
        "No price list is published because the same hour of teaching costs different amounts depending on who gives it. A teacher with five years of Higher Level Physics behind them, teaching a small group of students nationwide, charges differently from one who mostly takes IGCSE English.",
        "Four things push the fee up or down: the subject and level, the tutor's track record with that exact paper, the length of each class and the number of classes in a week. Nawada as an address is not one of them.",
        "Many Bihar families compare it with the cost of a year in a Patna or Kota coaching institute, plus rent and food. That is a legitimate comparison, and one where staying at home is often the easier arithmetic, even for a demanding subject.",
        "Before a trial class the rate is put in writing, and it remains as agreed unless the family changes the plan. Pausing in wedding season, Chhath or a hard exam month costs nothing.",
      ],
      bullets: [
        "Subject, tutor record, class length and weekly count set the fee",
        "The address in Nawada does not matter",
        "Compare with hostel and coaching costs in another city",
        "Pause without a fee during festivals or exams",
      ],
    },
    {
      heading: "Patna coaching, a local teacher, self-study or an online tutor: what suits Nawada?",
      paragraphs: [
        "Bihar's coaching machine is famous, and many Nawada students head to Patna, Gaya or Kota for JEE, NEET or government-exam preparation. Those institutes are built for Indian entrance tests. They do not teach IB Chemistry, and they are not meant to.",
        "A private local teacher can be superb for the board syllabus and for maths and science fundamentals. For IB or IGCSE, ask whether that person has prepared students for those papers before and whether they use official mark schemes.",
        "Self-study, with a stack of past papers, is more realistic than people think for subjects like IGCSE Mathematics. It falls short on feedback, since a child cannot see for themselves why a long answer keeps missing marks.",
        "An online tutor combines what the others lack: the exact syllabus and personal feedback. The cost is a working connection and a quiet corner, which in a Bihar summer means checking the inverter and the Wi-Fi.",
      ],
      table: {
        caption: "Ways to get IB or IGCSE help from Nawada",
        columns: ["Choice", "Match to the syllabus", "Group or single", "The catch"],
        rows: [
          ["Patna, Gaya or Kota coaching", "Aimed at entrance exams", "Group, often large", "Different content and heavy relocation costs"],
          ["Local private teacher", "Good for boards, uncertain for IB or IGCSE", "Single, in person", "Few have marked these papers"],
          ["Self-study", "Fine for practice papers", "None", "Nobody explains lost marks"],
          ["Online tutor", "Chosen by code and level", "Single, online", "Needs steady power and internet"],
        ],
      },
      bullets: [
        "Coaching hubs teach entrance exams, not IB or IGCSE",
        "Ask private teachers about direct IB or IGCSE experience",
        "Self-study works best with feedback from someone else",
        "An inverter and hotspot make online lessons safe",
      ],
    },
    {
      heading: "Loo, Chhath and exam months: the Nawada calendar",
      paragraphs: [
        "May and June are brutal. Temperatures in this part of Bihar can climb past forty-three degrees, and the hot westerly wind called loo empties the streets in the afternoon. Study happens in the early morning or after sunset, and power cuts in those months are common.",
        "The monsoon arrives in late June or July and brings relief, though poor drainage in some parts of Nawada causes waterlogging. Winter is cold and foggy, and mornings can be dark until eight.",
        "Festivals reshape the calendar. Chhath in late autumn is the biggest event, and families travel home from every part of India, so a household can be full one week and empty the next. Durga Puja and Diwali also matter, and Holi in spring closes schools for days.",
        "Exam sessions cross with these rhythms. The Bihar board's February exams are followed by the IGCSE main series in May and June and the IB Diploma in May. October and November bring the smaller IGCSE series. Families whose children sit both should build in flexibility.",
      ],
      table: {
        caption: "The Nawada year and what it means for lessons",
        columns: ["Time of year", "What is happening", "Lesson planning"],
        rows: [
          ["January-February", "Bihar board exams; winter fog", "Lighter load for children sitting the boards"],
          ["March", "Holi", "Short break; resume with mock papers"],
          ["May-June", "IGCSE and IB exams; loo heat", "Early-morning or late-evening slots only"],
          ["July-September", "Monsoon", "Watch for waterlogging and power cuts"],
          ["October-November", "Durga Puja, Diwali, Chhath; IGCSE resits", "Expect gaps; schedule catch-up afterwards"],
        ],
      },
      bullets: [
        "Loo season makes afternoon study impractical",
        "Chhath is the largest interruption of the year",
        "Bihar board exams come in February",
        "IGCSE and IB sit in May and June, with resits in October and November",
      ],
    },
    {
      heading: "Where do students go after IB or IGCSE from Nawada?",
      paragraphs: [
        "Within Bihar the options are concentrated in Patna. NIT Patna and IIT Patna are engineering destinations, AIIMS Patna is a national medical institution, and Patna University and Chanakya National Law University draw students for arts and law. Nalanda University at Rajgir, close to Nawada, is a newer international-style option that some families follow with interest.",
        "Whether an IB or IGCSE record works for a given Indian course depends on the Association of Indian Universities equivalence certificate and the subject mix. JEE Main and NEET-UG define their own eligibility, and CUET-UG has its own subject rules. A student who wants medicine, for example, must plan Biology and Chemistry from Class 11.",
        "Abroad, offers from the UK are written in IB points with named Higher Level subjects, and American colleges consider predicted grades among many factors. Canada, Australia and Singapore publish their own conversion rules. For a Nawada family, the cost and the paperwork are often the biggest hurdles, more than the academics.",
        "A tutor's role is teaching and exam technique. Choosing a course, applying for a visa and finding a scholarship sit with a counsellor, the school or the university.",
      ],
      bullets: [
        "NIT Patna, IIT Patna and AIIMS Patna are the closest national institutions",
        "Nalanda University at Rajgir is a newer regional option",
        "Equivalence certificates and subject mix decide Indian eligibility",
        "UK offers depend on IB points and named Higher Level subjects",
      ],
    },
    {
      heading: "IB sciences and Maths for a student used to JEE and NEET preparation",
      paragraphs: [
        "Bihar students bring a great strength to the IB sciences: comfort with numbers and a work ethic shaped by entrance-exam preparation. What they need is translation. A student who can solve a hard numerical often struggles to explain in a paragraph why the answer is reasonable, and IB marks that explanation.",
        "Physics HL rewards this shift. Chemistry HL asks for the same, with organic mechanisms and equilibrium as the difficult stretch. Biology HL asks for more writing and less calculation than a NEET syllabus, and its investigation needs proper statistics.",
        "Maths is where the choice between Analysis and Approaches and Applications and Interpretation counts. JEE-minded students usually suit AA, while those leaning to medicine, economics or psychology may prefer AI. A diagnostic lesson before Class 11 begins settles it.",
        "For all of them, a tutor who has taught the course is worth more than another workbook. In Nawada that tutor is online.",
      ],
      bullets: [
        "Entrance-exam strength transfers, but explanation must be added",
        "Physics and Chemistry HL reward written reasoning",
        "Biology HL needs precise command-word answers",
        "Take a diagnostic before choosing the Maths route",
      ],
    },
    {
      heading: "Core, Extended and choosing a board for a private IGCSE candidate in Nawada",
      paragraphs: [
        "At Extended tier the top grades are open; at Core they are capped in most subjects. A Nawada student thinking of the Diploma, A Level or a science degree should generally choose Extended for Mathematics and the sciences.",
        "The exam centre decides which board can be sat. Cambridge and Pearson Edexcel have different syllabus codes and paper structures, so a tutor cannot begin until the family knows which one. Ask the centre for its list first.",
        "Private candidates also need to organise entry deadlines, fees and practical components with the centre, months before the session. Tutoring teaches; it does not register.",
        "Because a centre may be in Patna or Gaya, plan travel for the exam days, and avoid clashes with festival weeks.",
      ],
      bullets: [
        "Extended keeps the top grades open",
        "The centre's list decides the board",
        "Deadlines and practical arrangements are the family's job",
        "Plan exam-day travel to Patna or Gaya early",
      ],
    },
    {
      heading: "What happens after you write to us from Nawada?",
      paragraphs: [
        "A reply comes within a working day or two, asking a few plain questions: which board or programme, which subject and level, the current grade and the target, when the exam is, and what feels hardest. We also ask about power and internet at home, because they affect lesson times.",
        "From that a shortlist is prepared, based on recent teaching of the exact syllabus and on how a tutor handles assessed work. You then choose a trial slot.",
        "The trial class is a real lesson on a real topic. Afterwards you get a short plan for the first month and a written note after each later session.",
        "If it does not fit, we introduce someone else and there is no penalty.",
      ],
      bullets: [
        "A reply within a working day or two",
        "Questions cover syllabus, grade, exam date and power supply",
        "The trial class is a genuine lesson",
        "A different tutor is offered if needed",
      ],
    },
  ],

  tutorsIntro:
    "These are the teachers who take IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE for Nawada families, all over live video. Syllabus and level decide the pairing, since nobody needs to travel.",

  process: [
    { title: "Write to us", description: "Say which course, subject and level your child studies, their grade now and the grade wanted, and when evenings are quiet in your Nawada home." },
    { title: "Read the shortlist", description: "We propose teachers with recent experience of that exact course, wherever they happen to live." },
    { title: "Sit a trial class", description: "Your child attempts a genuine topic with the teacher, free and with no pressure to continue." },
    { title: "Agree the plan", description: "The fee arrives in writing along with the month's topics and the way progress will be reported." },
    { title: "Keep a weekly slot", description: "One fixed time each week, a check-in every few weeks, and a swap of teacher if things are not clicking." },
  ],

  whyPoints: [
    { title: "Chosen for the course", description: "Level, board, code and tier drive every match." },
    { title: "Fills a gap Bihar towns feel", description: "With no IB or IGCSE school confirmed near Nawada, the specialist comes by screen." },
    { title: "Prove it first", description: "A trial class gives more evidence than any profile." },
    { title: "Honest coaching", description: "Tutors show how marks are earned but never write the work." },
    { title: "Notes you can read", description: "A short written summary follows every lesson." },
    { title: "No handcuffs", description: "No long contract, and you can change teacher whenever you like." },
  ],

  faqs: [
    { question: "How can a family in Nawada find an IB or IGCSE tutor?", answer: "Write to IB Gram with the course, subject, level and exam date. We then propose a teacher who has taught that exact paper, chosen for syllabus knowledge rather than distance, and arrange a free trial class. Nothing needs to be decided until your child has seen the teaching." },
    { question: "Does Nawada have any IB or Cambridge school?", answer: "None that we could confirm. Nawada's schools follow the Bihar board or CBSE, and our checks of school directories found no IB World School or IGCSE centre in the district. Patna and Gaya are also thinly served, so families look at Kolkata, Delhi or the hill boarding schools, or study online." },
    { question: "Will a teacher come to our house in Nawada?", answer: "No teacher will come to your house. In-person lessons at home are provided in Gurugram and parts of Delhi NCR alone. What Nawada gets is home tuition by video: one teacher, one child, the laptop on your own desk and a shared digital board." },
    { question: "What does tuition cost for a Nawada family?", answer: "The fee depends on the subject, level, teacher's experience with that paper, class length and number of classes. It is stated in writing before the trial. Living in Nawada or in Hisua does not alter it, since nobody travels and the teacher's cost is the same." },
    { question: "Our child is on the Bihar board. Can they still add an IGCSE subject?", answer: "In principle yes, as a private candidate through an approved centre, if the family handles entry. The tutor teaches and sets practice papers; the entry, fees and practicals remain with the centre. Ask about dates before you start lessons." },
    { question: "We have just moved back to Nawada in the middle of the Diploma. What now?", answer: "We look for a teacher who has taught your child's Higher and Standard Level subjects recently, and start with a couple of sessions to see what has been missed. The teacher then works with your current arrangement, whether that is a distance school, a boarding place or private study." },
    { question: "Which Diploma subjects are covered?", answer: "Maths in both forms, the three sciences, Economics, Business Management, English A, Computer Science, Psychology, ESS, Geography, History and Hindi B, plus TOK coaching. A Higher Level student and a Standard Level student in one subject get different teachers." },
    { question: "Do you take younger children on MYP or PYP?", answer: "Yes. For MYP the work is mostly about writing to criteria and steering the Personal Project. For PYP it is reading, writing and number sense in short, bright classes, followed by a note to parents about what was covered." },
    { question: "Cambridge or Edexcel for IGCSE?", answer: "We teach both. Cambridge codes like 0580, 0625 and 0620 are asked for most often, but an Edexcel course is fully possible. The centre where your child will sit the paper decides which board is available, so settle that before lessons." },
    { question: "Is a screen lesson really enough in place of Patna coaching?", answer: "For IB and IGCSE it can be better, because Patna coaching is built for different exams. A teacher who has taught the syllabus, a shared board and marked past papers do most of what a classroom would. It suits students who can concentrate for an hour, and we say so if a very young child needs shorter sessions." },
    { question: "Can the teacher help with an Internal Assessment or Extended Essay?", answer: "Help, yes; writing, no. A teacher can talk through a research question, explain the marking criteria, suggest how to gather data and comment on a draft. Writing the work would break IB rules on academic honesty, and our tutors refuse it." },
    { question: "How do power cuts and heat affect classes?", answer: "In May and June the afternoon heat and outages make early-morning or late-evening classes wiser. We suggest an inverter or power bank and a phone hotspot, and if a class is lost to an outage it is rescheduled at no charge." },
    { question: "When is the right time to begin?", answer: "The best time is the start of the course, Grade 9 for IGCSE and Class 11 for the Diploma. If you are already in the final year, lessons still help by targeting the biggest-mark topics and practising past papers." },
    { question: "Can classes avoid Chhath and other festivals?", answer: "Yes. We plan around Chhath, Durga Puja, Diwali and Holi, and families can pause for a week or two without penalty. A denser block before the May session is easy to add." },
    { question: "What if my child does not get along with the teacher?", answer: "Tell us, and another teacher is offered. We review how things are going every few weeks and there is no contract to break, so changing or stopping is simple." },
    { question: "Are you connected to any school, board or Bihar institution?", answer: "No. IB Gram is independent and has no link with any school, the International Baccalaureate, Cambridge or Pearson. Cities and schools named here are for context only, and tutors follow each syllabus as it is published." },
    { question: "Is a child from Nawada eligible for Indian universities with IB or IGCSE?", answer: "Usually yes, provided the qualification has an equivalence certificate and the subjects match the course. Medicine and engineering have extra conditions on science subjects. Check each university's current rules or ask a counsellor; a tutor cannot make that decision for you." },
    { question: "How do we start?", answer: "Write to support@ibgram.com or send a WhatsApp message to +91 7439 368 115 with the course, subject, level and current grade. A shortlist and trial times come back, with no fee and no obligation." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Gaya", href: "/gaya/", description: "Online lessons for the nearest larger Bihar city." },
    { label: "IB and IGCSE tutoring in Patna", href: "/patna/", description: "The state capital and its coaching landscape." },
    { label: "IB and IGCSE tutoring in Jehanabad", href: "/jehanabad/", description: "Tutor matching for a neighbouring Magadh district." },
    { label: "IB and IGCSE tutoring in Aurangabad, Bihar", href: "/aurangabad-bihar/", description: "Another south Bihar town, not the Maharashtra city." },
    { label: "IB tutoring across India", href: "/india/", description: "How our online lessons work in cities all over the country." },
    { label: "Home visits in Gurgaon", href: "/gurgaon/", description: "The place where teachers do come to the door." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Levels, internal assessments, TOK and the Extended Essay explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition." },
    { label: "About IGCSE", href: "/igcse/", description: "Boards, Core and Extended tiers, and exam sittings." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Which of the two Maths courses suits which student." },
    { label: "Our tutors", href: "/tutors/", description: "Browse profiles by subject, programme and experience." },
    { label: "Get in touch", href: "/contact-us/", description: "Describe your child's course and ask for a trial class." },
  ],

  closingHeading: "Ask for a free first class for your Nawada child",
  closingBody:
    "Write with the course or board, the subject and level, the current grade and the evening hours your home can spare. A teacher, a short account of their background and some trial times come back, all for online one-to-one classes with no fee and no strings. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
