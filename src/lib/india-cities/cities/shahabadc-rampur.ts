import type { CitySeoPage } from "../types";

/**
 * Shahabad in Rampur district (Uttar Pradesh), not the Karnataka town and not the Hardoi one.
 * No IB or Cambridge school could be confirmed in the district, so stripSchools is empty and the
 * clusters point to Noida and Lucknow, whose names were taken from the already-checked city pages.
 */
export const shahabadcRampur: CitySeoPage = {
  slug: "shahabadc-rampur",
  countryName: "Shahabad",
  countryNameLong: "Shahabad, Rampur district, Uttar Pradesh",
  demonym: "Shahabad",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evenings after the school van drops off and the fog or the loo has eased, plus relaxed Sunday mornings",
  lastUpdated: "2026-09-21",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  geo: { latitude: 28.5662, longitude: 79.0089 },
  wikipedia: "https://en.wikipedia.org/wiki/Shahabad,_Rampur",
  alternateNames: ["Shahabad Rampur", "Shahabad UP", "Shahabad district Rampur", "Shahabad Rohilkhand"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shahabad (Rampur) | Online Tuition",
  metaDescription:
    "Live one-to-one IB and IGCSE online home tuition for Shahabad, Rampur students, with subject-matched tutors, notes after every class and a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Shahabad, Rampur",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR SHAHABAD, RAMPUR",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE students in Shahabad, taught as live one-to-one online lessons on a laptop or tablet. This town in Rampur district has strong Hindi and Urdu schooling traditions and a long Rohilkhand history, but no IB or Cambridge school of its own, so a student following an international syllabus is usually working from a distance. Tell us the programme, subject and exam session, and we match a tutor and arrange a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Shahabad",
  imageAltText: "Shahabad student in Rampur district attending a live online IB Chemistry lesson at home",
  secondaryKeywords: [
    "IB tutor in Shahabad",
    "IGCSE tutor in Shahabad",
    "IB home tuition Shahabad Rampur",
    "IGCSE home tuition Shahabad Rampur",
    "IB private tuition Shahabad",
    "IB Maths tutor Shahabad",
    "IGCSE Maths tutor Shahabad",
    "IB Physics tutor Rampur district",
    "IB Chemistry tutor Rampur district",
    "IB Biology tutor Rampur district",
    "IB DP tutor Shahabad",
    "IB MYP tutor Shahabad",
    "IB PYP tutor Shahabad",
    "IGCSE online tuition Shahabad Rampur",
    "IB tutor Rampur Uttar Pradesh",
    "IGCSE tutor Bilaspur Rampur",
    "IB online classes Rohilkhand",
    "online home tuition Shahabad UP",
  ],

  heroTrustPoints: [
    "Live lessons with one tutor and one student, never a recorded course",
    "Tutors who have taught the IB DP, MYP and PYP and both IGCSE boards",
    "Slots that work around school transport, winter fog and power cuts",
    "A free trial lesson and a written note after every session",
    "A different tutor at no charge if the first match does not suit",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any commitment" },
    { value: "Online", label: "Home tuition, delivered by video" },
  ],

  intro: {
    heading: "Online IB and IGCSE tuition for families in Shahabad, Rampur district",
    paragraphs: [
      "Shahabad is a nagar panchayat town in Rampur district, set on the flat Rohilkhand plain south of the district headquarters, with farming, trade and government service shaping most household budgets. A child here normally follows the UP Board or CBSE, and learning Hindi and Urdu alongside English is ordinary. The IB and IGCSE appear in this picture only through particular families: a parent posted to a Gulf country, a relative settled in Delhi or abroad, a doctor or engineer who wants the child to keep a syllabus that will travel.",
      "If that describes your household, private tuition for IB and IGCSE has to arrive some other way than the neighbourhood tutor down the lane. Our model is simple. A tutor based in India teaches your child live, one-to-one, over video, on Indian Standard Time. The child sits at home in Shahabad with a laptop and a notebook, and the tutor works through the exact syllabus and paper style. After each lesson a short written note tells you what was covered and what is next.",
      "Below we set out what is realistically available near Shahabad, how the boards differ, how the Rohilkhand calendar of fog, harvest and festivals meets the exam sessions, where students go next, and how subjects are taught. IB Gram is an independent service and is not linked to the IB, Cambridge, Pearson or any school. Tutors coach and explain; they never write internal assessments, Extended Essays, TOK essays or coursework.",
    ],
  },

  programmesIntro:
    "Four IB programmes and two IGCSE boards exist, though a family in Shahabad usually meets them at a transition point, such as a move, a transfer or a boarding decision, rather than from the first day of school.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Unit-based primary learning that ends in a student-led Exhibition. Tutoring is gentle: reading aloud, number confidence and the habit of asking why something works.",
      countryNote:
        "PYP is unusual in Rampur district, so most Shahabad children who meet it do so after a relocation. Short, friendly evening sessions help them settle.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against criteria, with a Personal Project at the end. Tutors teach children to decode a task and structure a reply, not only the facts.",
      countryNote:
        "A child coming from a UP Board classroom often knows the content but has not practised criterion-based answers. Online practice closes that gap in a term or two.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Theory of Knowledge, the Extended Essay and CAS. Tutoring concentrates on the examined papers and on understanding how internal assessments are marked.",
      countryNote:
        "Diploma students linked to Shahabad often study far from home in term time, so weekend and holiday lessons become the steady anchor of the course.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A combination of two or more DP courses with career-related study, a reflective project and language development.",
      countryNote:
        "CP is rare in this part of Uttar Pradesh. We take it on request and pair the student with tutors for the specific DP courses involved.",
    },
  ],

  subjectsIntro:
    "Every tutor is chosen for the course and level, Standard or Higher, and for patience with a student whose earlier schooling used a different style of examination.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Functions, calculus and structured proof work, with Paper 1 and Paper 2 timing practised under exam conditions." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and calculator-supported problems for students heading to commerce, social science or design." },
    { name: "Physics", levels: "SL / HL", description: "From mechanics through waves and fields, with data-analysis questions and practical method." },
    { name: "Chemistry", levels: "SL / HL", description: "Mole calculations, energetics, equilibrium and organic pathways taught with plenty of worked arithmetic." },
    { name: "Biology", levels: "SL / HL", description: "Cells to ecosystems, with attention to the precise wording that mark schemes reward." },
    { name: "Economics", levels: "SL / HL", description: "Markets, macroeconomic policy and development, drawing on Indian agricultural and sugar-belt examples for essays." },
    { name: "Business Management", levels: "SL / HL", description: "Case-based analysis and the numerical tools tested in Paper 2." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and exam-style pseudocode." },
    { name: "Psychology", levels: "SL / HL", description: "Key studies, evaluation and the essay structure examiners expect." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close reading of unseen texts and comparative essay planning." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking for students who already think in Hindi and need exam technique." },
    { name: "Urdu support", levels: "School-based", description: "Help with Urdu where a school offers it, relevant in a town where many households read and write the script." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching on knowledge questions; the essay and exhibition remain the student's own work." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE and Pearson Edexcel International GCSE overlap in subject names but differ in paper structure, so tutors are matched by exam board as well as topic.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, geometry and statistics with timed paper practice at the right tier." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, electricity, waves and atomic physics, including practical-skills questions." },
    { name: "Chemistry", levels: "Core / Extended", description: "Bonding, reactivity, electrolysis and an introduction to organic chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Human systems, plants, genetics and ecology with data handling." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For schools that offer the double-award science route." },
    { name: "English as a Second Language", levels: "Core / Extended", description: "Reading, directed writing and listening, which suit students raised in Hindi or Urdu." },
    { name: "Computer Science", levels: "Single tier", description: "Programming logic, data representation and networks." },
    { name: "Economics", levels: "Single tier", description: "Basic concepts, calculations and short-answer technique." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Written and oral practice for the Hindi option." },
    { name: "Business Studies", levels: "Single tier", description: "Enterprise, finance and marketing, using small-business examples." },
  ],

  regionsTitle: "Shahabad town and the Rampur district neighbourhood",
  regionsIntro:
    "Students come from the town itself and from surrounding villages, so school timing and internet reliability vary a lot by address. These notes reflect how a typical day runs around each area.",
  regions: [
    { name: "Shahabad town centre", note: "The market area around the main road, where shops open early and traffic jams form at school closing time; quieter study slots start after dusk." },
    { name: "Lakhibagh", note: "The older quarter associated with the historic Lakhibagh ki Kothi. Homes are close together and extended families share a roof, so a quiet room for a live lesson needs planning." },
    { name: "Station and bus-stand side", note: "Households near the transport points include many whose members work elsewhere and visit on weekends, which shapes when lessons are convenient." },
    { name: "Kothi Road and the newer colonies", note: "Newer residential lanes at the edge of town with wider roads and more reliable power from private backup, popular with salaried families." },
    { name: "Bilaspur direction", note: "The route toward Bilaspur tehsil, where students switch between town schools and the Rampur-bound bus depending on class." },
    { name: "Rampur city side", note: "Families who commute or travel on the Rampur road for work and for the city's larger private schools; lessons are timed after the return journey." },
    { name: "Milak and Suar belts", note: "Nearby tehsil towns in the district whose students also search for online options because few specialist tutors teach there." },
    { name: "Village hinterland", note: "Farming households around Shahabad whose children travel into town for school. Harvest and sugarcane weeks affect when the family is free." },
    { name: "Tanda and Kemri side", note: "Smaller settlements of the district whose families face the same distance to any international school, making home-based online lessons the practical route." },
  ],

  schoolClusters: [
    {
      city: "Rampur district",
      note: "We could not confirm any authorised IB World School or approved Cambridge or Edexcel centre in Shahabad or elsewhere in Rampur district. Local private schools follow the UP Board, CBSE or ICSE, so the honest position is that local choice for IB and IGCSE is very limited.",
      schools: [],
    },
    {
      city: "Nearby: Noida and Delhi NCR",
      note: "The nearest large concentration of confirmed IB and Cambridge schools sits in the Noida area, a long road or rail journey away. Some Rohilkhand families board a child there or move part of the household for the Diploma years.",
      schools: ["Pathways School Noida", "Genesis Global School", "Shiv Nadar School, Noida"],
    },
    {
      city: "Nearby: Lucknow",
      note: "Lucknow is the state capital and has a smaller number of schools with an international strand. It is a long journey from Shahabad, so it suits boarding or relocating families more than commuting ones.",
      schools: ["Modern School, Lucknow", "GD Goenka Public School, Shaheed Path, Lucknow"],
    },
  ],
  schoolDisclaimer:
    "These names are included only to show where IB and Cambridge options for Shahabad families actually sit. IB Gram is an independent tutoring service with no ties to any school, the IB, Cambridge or Pearson, and admissions are decided entirely by each school.",

  modesIntro:
    "Tutors do not visit homes in Shahabad, so every format below is online. All are live, private and arranged around a Rohilkhand school day.",
  modes: [
    {
      title: "Online lessons at your own desk",
      description: "A private live lesson over video, with a tutor who teaches your exact board, subject and level.",
      bullets: ["Shared whiteboard and annotated past papers", "A written summary for parents each week", "Easy rescheduling for outages"],
    },
    {
      title: "Pre-exam intensive blocks",
      description: "Concentrated lessons in the weeks before mock papers and the May or November sessions.",
      bullets: ["Timed papers followed by line-by-line review", "Drilling of command terms and mark schemes", "Buffer time around fog and power cuts"],
    },
    {
      title: "Light weekly support",
      description: "One lesson a week in a single subject to keep a student level with the class.",
      bullets: ["Suits MYP and IGCSE years", "Pauses for Holi, Eid and Diwali weeks", "Subject can be changed mid-year"],
    },
  ],

  tutorsIntro:
    "Our tutors teach from different parts of India, all on Indian Standard Time. Most Shahabad lessons are in the early evening, when the tutor's own working day is also winding up.",

  sections: [
    {
      heading: "Which IB and IGCSE schools can a Shahabad family realistically reach?",
      paragraphs: [
        "Close to home, none that we could verify. Shahabad and the towns around it, Bilaspur, Milak, Suar and the city of Rampur, are served by schools that follow the UP Board, CBSE or ICSE, plus a number of madrasa and Hindi-medium institutions with deep roots in the region. None appeared in the IB directory or in Cambridge and Edexcel centre listings when we checked, and we would rather say that than invent a school name.",
        "The nearest real options lie in Noida and the wider Delhi region, and in Lucknow. A few Rohilkhand families send a child to board in those cities for the Diploma years, or move one parent and the child for two years while the other stays in Shahabad. Others stay at home, keep the child in a local school and add an international syllabus through private study, which is where a dedicated online tutor makes the plan workable.",
        "Who are the families? Often they are doctors and engineers, landowners with business in Delhi, officers in government service whose postings changed, and relatives of overseas workers who want a transferable qualification. They are a small group in any one lane of Shahabad, which is exactly why generic group classes rarely suit them.",
        "If a school in the district announces IB candidacy or a Cambridge licence, local parents will hear first. Tell us the subject list and exam session and we can begin tutoring to that syllabus quickly.",
      ],
    },
    {
      heading: "UP Board, CBSE, ICSE, IB and IGCSE: what changes for a Shahabad student?",
      paragraphs: [
        "The UP Board runs Class 10 and Class 12 examinations in February and March, with a syllabus that leans on textbook recall and a long written answer. CBSE follows NCERT books and a similar calendar. ICSE and ISC ask for more English and broader reading. In all of them, the finish line is a single set of board papers.",
        "IGCSE sits in the middle ground. Papers are tiered, the syllabus is published in clear learning objectives, and past papers by year are widely available. The IB Diploma goes further: there are exams, but also internal assessments, a long essay, a knowledge course and service hours, and answers are rewarded for argument and application as much as for recall.",
        "Students moving from the UP Board often hold strong content knowledge and weaker habits in reading command words and showing working. The table gives a quick comparison.",
      ],
      table: {
        caption: "Board comparison from the viewpoint of a Shahabad household",
        columns: ["Board", "How it is assessed", "Medium", "Typical next step", "Local tutor supply"],
        rows: [
          ["UP Board (Class 10, 12)", "Written papers, February to March", "Hindi or English", "State colleges, CUET-UG, JEE, NEET", "Plenty of local tutors"],
          ["CBSE", "NCERT-based board exams", "Hindi or English", "CUET-UG, JEE, NEET", "Good local coaching"],
          ["ICSE and ISC", "Broader syllabus with heavy English", "English", "Indian universities, CUET-UG", "Some tutors in Rampur city"],
          ["Cambridge or Edexcel IGCSE", "Tiered papers, three sessions a year", "English", "IB, A Level or Indian Class 11", "Almost none nearby"],
          ["IB Diploma", "Exams plus essays and internal assessments", "English", "Indian and overseas universities", "None nearby"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a Shahabad student?",
      paragraphs: [
        "We do not publish a rate card. Instead we send a written quote before the trial lesson is booked, so the figure you agree to is on paper and not remembered differently by two people later. The quote reflects a small number of real variables.",
        "The level of the course comes first. A Higher Level Diploma Physics tutor with years of paper marking behind them charges differently from a tutor for IGCSE English. Scarcity is the second driver: Computer Science HL and Further Mathematics have fewer qualified teachers than core subjects. The third is lesson frequency and commitment: twice a week for a full year is a different shape from three weeks before a mock.",
        "For many Shahabad families, the useful comparison is not between tutors but between this arrangement and the cost of a student boarding in a bigger city or travelling for classes. Fare, lodging, lost days and the child's tiredness all count, and once they are added, a home-based live lesson looks reasonable for many families.",
        "Ask for the quote in writing, ask what is included, and never agree to a long block of lessons before the trial.",
      ],
      bullets: [
        "Course level: Standard, Higher, Core, Extended",
        "How few tutors teach the subject",
        "Number of lessons per week and the length of the plan",
        "Steady support versus a short intensive block",
      ],
    },
    {
      heading: "Online tuition, local teachers, Delhi centres and self-study: how do they compare?",
      paragraphs: [
        "Four paths are open to an IB or IGCSE student here, and many families combine two of them. The question to ask is where the weak spot actually is: content, exam technique or discipline.",
        "Delhi and Noida centres bring specialists but demand a major relocation or repeated travel. Local teachers in Shahabad and Rampur are convenient and often excellent with the UP Board and CBSE content that carries over into early IGCSE topics. Self-study with past papers works for focused students. A live private tutor online gives the specialist knowledge without the move.",
      ],
      table: {
        caption: "Ways of getting IB or IGCSE help from Shahabad",
        columns: ["Route", "Specialist depth", "Travel needed", "Schedule", "Best fit"],
        rows: [
          ["Live one-to-one online", "High, chosen by board and subject", "None", "Evenings and weekends, movable", "Any programme and subject"],
          ["Delhi or Noida centre", "High but group paced", "Long trips or relocation", "Fixed batches", "Families already based in NCR"],
          ["Local tutor in Shahabad or Rampur", "Usually UP Board and CBSE", "Short", "Flexible", "Revision of shared basics"],
          ["Self-study with past papers", "Varies with the student", "None", "Fully flexible", "Highly disciplined learners"],
        ],
      },
    },
    {
      heading: "How do fog, harvest and festivals fit around the IB and IGCSE calendar in Shahabad?",
      paragraphs: [
        "Rohilkhand weather shapes study more than parents expect. December and January bring dense morning fog that delays buses and shortens school days, May and June bring the dry loo, and the monsoon months can cut power and flood lanes. Evening lessons are usually the most dependable slot in every season.",
        "The IB Diploma has May and November sessions, with results in July and January. Cambridge IGCSE runs in February to March, May to June and October to November, and Pearson International GCSE in January, May to June and October to November. A student's school or registered exam centre decides the session, and a tutor can only plan for the one the student is entered for.",
        "The local rhythm adds its own gaps. Wheat harvest in April pulls many farming families out of routine; sugarcane crushing runs through winter; Holi, Eid, Diwali and Muharram create planned pauses. A good plan builds those in rather than fighting them.",
      ],
      table: {
        caption: "Local calendar pressure points",
        columns: ["Months", "Local conditions", "Study effect", "Tutoring response"],
        rows: [
          ["Dec to Jan", "Dense fog, cold, Sankranti", "Late buses, short days", "Evening lessons, mock papers indoors"],
          ["Feb to Mar", "UP Board and IGCSE series, Holi", "Exam stress and festival gaps", "Timed practice with rest weeks"],
          ["Apr to Jun", "Wheat harvest, heat, IB May session", "Disrupted routine, power cuts", "Early-evening slots and buffer minutes"],
          ["Jul to Sep", "Monsoon, new term, IB results in July", "Flooding and outages", "Back-up connection plans"],
          ["Oct to Nov", "Dussehra, Diwali, November sessions", "Festival gaps near exams", "Compressed revision with reschedule room"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Shahabad go after school?",
      paragraphs: [
        "The Association of Indian Universities issues equivalence for the IB Diploma, and most Indian universities ask for it. CUET-UG is the usual route to central universities, and a number of private universities in Delhi NCR admit directly on Diploma results. The Mohammad Ali Jauhar University in Rampur and Aligarh Muslim University are regional options that some families consider for particular courses, subject to their own entry rules.",
        "For engineering and medicine, eligibility depends on subject choice and current rules. A Diploma with Mathematics, Physics and Chemistry or Biology can be aligned with JEE or NEET, but a family must check the latest National Testing Agency conditions before settling on Class 11 subjects.",
        "Study abroad is another route, mostly to the UK, Canada, the US, Australia and the Gulf, where predicted grades and school reports count. IGCSE students go on to the IB, A Level or Indian Class 11, and that decision affects which subjects to emphasise at Class 10.",
        "A tutor can help a student see how subject choices open or close doors. For the final decision, a school counsellor or a university's own admission page is the right authority.",
      ],
    },
    {
      heading: "How are IB Mathematics and the sciences taught online?",
      paragraphs: [
        "Mathematics Analysis and Approaches is for students who relish algebra, calculus and proof. Applications and Interpretation focuses on statistics, modelling and technology. A student who wants engineering usually takes the first, and one aiming for economics, psychology or design often takes the second. The choice is worth making carefully in Class 10 or early Class 11.",
        "In a live lesson the tutor writes on a shared whiteboard, the student answers aloud, and a past-paper question is worked from blank to full marks. The tutor shows how a mark scheme awards method marks as well as answer marks, because most lost marks come from missing steps rather than missing ideas.",
        "In the sciences the pattern is similar. Physics students practise unit handling and graph reading. Chemistry students build fluency in the mole, energetics and organic mechanisms. Biology students learn how precise wording earns marks. The internal assessment is the student's own, and tutors explain the criteria and method only.",
        "Higher Level students gain from slightly longer sessions near mock exams, while Standard Level students often progress faster with shorter, regular lessons.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, Cambridge or Edexcel: how should a Shahabad family choose?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in most subjects. Core limits the top grade while Extended covers the full range, so a student who wants a science or mathematics route in Class 11 is usually entered for Extended. Pearson Edexcel uses Foundation and Higher tiers in a comparable way.",
        "The right tier depends on current confidence and the destination. A student unsure of algebra may secure a better result at the lower tier than at a stretched higher one, whereas a student aiming at IB Higher Level Mathematics should aim at the top tier from the start.",
        "Subject choice matters too. A balanced IGCSE set normally mixes languages, mathematics, sciences and one humanities or business subject. For Shahabad students raised in Hindi or Urdu, English writing at extended level is usually the largest single gap, and it responds well to weekly practice.",
        "Because the two boards differ in practical assessment, paper numbers and grade boundaries, we confirm the board code before matching a tutor.",
      ],
    },
  ],

  process: [
    { title: "Send us the details", description: "Write on WhatsApp or by email with the board, subject, level and the exam session your child is entered for." },
    { title: "We match a tutor", description: "A tutor who has taught that exact course is shortlisted, and you receive a short profile." },
    { title: "Try a free lesson", description: "A real lesson on a real topic, so your child decides whether the teaching style works." },
    { title: "Get the rate in writing", description: "After a good trial, the lesson plan and rate arrive on paper. Nothing starts until you agree." },
    { title: "Learn week by week", description: "Regular live lessons, a note after each, and a change of tutor if the fit is not right." },
  ],

  whyPoints: [
    { title: "Syllabus-specific tutors", description: "A Diploma Chemistry student gets someone who has taught that paper, not a generalist who also covers state boards." },
    { title: "Built for Rohilkhand days", description: "Timing allows for fog, loo, harvest and festival weeks rather than ignoring them." },
    { title: "Honest about what is nearby", description: "We say plainly that no IB or Cambridge school is confirmed locally and explain what that means for planning." },
    { title: "Readable progress notes", description: "A short summary after each lesson tells parents what was covered, what went wrong and what comes next." },
    { title: "Coaching with limits", description: "Tutors teach method and content. They do not write assessments, essays or coursework." },
    { title: "Low-risk start", description: "The trial lesson is free, the rate is quoted before booking, and a tutor swap costs nothing." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE schools in Shahabad?", answer: "We could not confirm any in Shahabad or Rampur district. Local private schools follow the UP Board, CBSE or ICSE, and none we checked appeared in the IB directory or Cambridge and Edexcel listings. Families who want an international syllabus usually look toward Noida, Delhi or Lucknow, or study privately with an online tutor while staying at home." },
    { question: "Will a tutor come to my home in Shahabad?", answer: "No. Tutors do not visit homes in Shahabad; in-person home visits run only in Gurugram and parts of Delhi NCR. What we offer here is online home tuition: a live private lesson over video while your child sits at a desk at home with a laptop, which keeps the one-to-one attention without any travel." },
    { question: "How do I find IB and IGCSE tutors in Shahabad for a particular subject?", answer: "Message us the board, subject, level and exam session. We shortlist a tutor who has taught that precise course, share a short profile and set a free trial lesson. If the style does not suit your child, we change the tutor at no cost and try again with a different shortlist." },
    { question: "What does IB tuition cost in Shahabad?", answer: "The rate depends on the programme, the level, how few tutors teach the subject and how many lessons you want each week. We do not publish a price list. A written quote reaches you before the trial is booked, so you can compare it with other options and decide without any pressure on the call." },
    { question: "Is online tuition as effective as a centre in Delhi?", answer: "For most students it is at least as effective and far less tiring. The lesson is one-to-one, the tutor works on your child's own gaps and nothing is lost to travel. Group centres suit students who thrive on a classroom crowd, but they require relocating or repeated trips, which is hard from Shahabad." },
    { question: "My child is in a UP Board school. Can they switch to IGCSE or IB?", answer: "Yes, though the right moment matters. Class 8 or 9 is easier for IGCSE, and Class 10 or 11 for the Diploma. The content is often familiar; the style of questions is new. A tutor starts with command words and paper structure, then fills any content gaps, usually in two terms." },
    { question: "Which exam sessions do you prepare students for?", answer: "Both IB sessions, in May and November, and the Cambridge and Edexcel series in the student's school calendar. The school or registered centre decides the entry, and we plan lessons backward from that date. IB results arrive in July and January." },
    { question: "Will the tutor write my child's IA or Extended Essay?", answer: "No. Tutors coach and explain; they never write internal assessments, Extended Essays, TOK essays or coursework. They explain the marking criteria, discuss the student's own ideas and give feedback on drafts the student has written. Anything submitted must remain the student's own work." },
    { question: "How does the free trial lesson work?", answer: "It is a real live lesson on a topic from your child's syllabus, taught by the tutor we propose. There is no payment and no obligation. Afterwards you receive a short written note, and if you want to continue, the rate and plan come in writing for your approval." },
    { question: "Do you teach both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes. The boards differ in paper layout, tiers and coursework options, so tutors are matched by board code. Tell us the board and the paper numbers on your child's timetable, and we make sure the tutor has taught that exact specification." },
    { question: "Can my child take Urdu or Hindi support alongside IB subjects?", answer: "Yes. Hindi B is available at Standard and Higher Level for IB, and Hindi as a second language for IGCSE. Where a school offers Urdu, we can arrange help for it. Tell us the exact course so we match a tutor who has taught that paper." },
    { question: "What internet speed do we need?", answer: "A stable ordinary broadband or mobile connection is enough for video and a shared whiteboard. Because power and signal can drop in Shahabad, we suggest a phone hotspot as back-up and an inverter for exam-season lessons. If a session is cut short, we rebook the lost time." },
    { question: "When are lessons held?", answer: "Most students take lessons on weekday evenings and Sunday mornings, in Indian Standard Time. During winter fog or the hottest weeks the evening slot usually holds up best. Festival weeks such as Holi, Eid and Diwali are normally paused and rescheduled." },
    { question: "Does the IB Diploma count for admission in India?", answer: "Generally yes, with an equivalence certificate from the Association of Indian Universities. CUET-UG is the common route into central universities. For JEE, NEET and state seats, rules depend on subject combinations, so check the latest official notices before you finalise Class 11 subjects." },
    { question: "Can students from Bilaspur, Milak or Rampur city also join?", answer: "Yes. Lessons are online, so any address in Rampur district works provided the connection is steady. We arrange slots around the bus timetable and parents' working hours, and we keep one fixed weekly time so the routine is easy for a family to remember." },
    { question: "How do I get started?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's class, board, subject and exam session. We usually reply within a day or two with a tutor suggestion and a proposed time for the free trial lesson." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "How the same online model works for families in other cities and towns." },
    { label: "IB tutors, every programme", href: "/ib-tutors/", description: "An overview of how IB tutoring is organised here." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects with tutors matched by board." },
    { label: "Diploma Programme support", href: "/programmes/dp/", description: "Subject tutoring for the final two school years." },
    { label: "Middle Years Programme support", href: "/programmes/myp/", description: "Help with criterion-based assessment from Class 6 to 10." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches or Applications and Interpretation." },
    { label: "Meet our tutors", href: "/tutors/", description: "Profiles of the people who teach IB and IGCSE." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book the free trial." },
    { label: "IB and IGCSE tutors in Rampur", href: "/rampur/", description: "Our page for the district headquarters." },
    { label: "IB and IGCSE tutors in Moradabad", href: "/moradabad/", description: "The nearest large Rohilkhand city we cover." },
    { label: "IB and IGCSE tutors in Sambhal", href: "/sambhal/", description: "Another western Uttar Pradesh town served online." },
  ],

  closingHeading: "Book a free trial lesson from home in Shahabad",
  closingBody:
    "Share your child's board, subject and exam session. We pair a suitable tutor, run a free trial and send the rate in writing before you decide anything. Contact support@ibgram.com or WhatsApp +91 7439 368 115.",
};
