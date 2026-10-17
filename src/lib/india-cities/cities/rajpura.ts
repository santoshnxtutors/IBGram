import type { CitySeoPage } from "../types";

/**
 * Rajpura (Patiala district, Punjab). No IB or Cambridge / Edexcel school could be confirmed in the town, so
 * stripSchools is empty and the clusters point honestly to Mohali-Chandigarh and Ludhiana, whose schools are
 * already verified on neighbouring pages. Online only; no in-person tuition outside Gurugram and parts of Delhi NCR.
 */
export const rajpura: CitySeoPage = {
  slug: "rajpura",
  countryName: "Rajpura",
  countryNameLong: "Rajpura, Punjab",
  demonym: "Rajpura",
  state: "Punjab",
  stateCode: "IN-PB",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early-evening slots after school and the drive home, shifted for winter fog, Lohri, Baisakhi and the wheat-harvest fortnight in April",
  lastUpdated: "2026-09-21",
  geo: { latitude: 30.4842, longitude: 76.5939 },
  wikipedia: "https://en.wikipedia.org/wiki/Rajpura",
  alternateNames: ["Rajpura Town", "Rajpura Patiala", "Rajpura Punjab"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Rajpura | Private Tuition from Home",
  metaDescription:
    "Live one-to-one IB and IGCSE tuition for Rajpura students in Patiala district: DP, MYP, PYP, Cambridge and Edexcel, taught online, with a free first lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Rajpura",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FROM HOME IN RAJPURA",
  heroSubtitle:
    "Rajpura families who want private tuition at home for an IB or IGCSE course usually hit the same wall: the town sits on the Delhi-Amritsar highway with plenty of CBSE and PSEB coaching, yet nobody teaches Diploma Physics HL or Extended IGCSE Mathematics. Our tutors teach live, one to one, by video, so the lesson happens at your own desk in Rajpura and the specialist happens to live somewhere else in India.",
  primaryKeyword: "IB and IGCSE tutors in Rajpura",
  imageAltText: "Rajpura student in an IB Chemistry online lesson with a tutor on a laptop screen",
  secondaryKeywords: [
    "IB tutor Rajpura",
    "IGCSE tutor Rajpura",
    "IB home tuition Rajpura",
    "IGCSE home tuition Rajpura",
    "IB private tuition Rajpura",
    "IB Maths tutor Rajpura",
    "IGCSE Maths tutor Rajpura",
    "IB Physics tutor Rajpura",
    "IB Chemistry tutor Rajpura",
    "IB Biology tutor Rajpura",
    "IB DP tutor Rajpura",
    "IB MYP tutor Rajpura",
    "IB PYP tutor Rajpura",
    "IGCSE online tuition Rajpura",
    "IB tutor Patiala district",
    "IB tutor Chitkara University area Rajpura",
    "online IB tutor Punjab",
    "Cambridge IGCSE tutor Rajpura",
  ],

  heroTrustPoints: [
    "Online private tuition at home, live and strictly one-to-one",
    "Tutors who have recently taught your child's own course and board",
    "First lesson free, with no obligation afterwards",
    "No ties to any school, exam board or university",
    "Written feedback sent to parents after every lesson",
  ],
  heroStats: [
    { value: "Tricity-adjacent", label: "Chandigarh within reach, tutors online" },
    { value: "DP, MYP, PYP", label: "IB stages taught" },
    { value: "CAIE and Edexcel", label: "IGCSE boards taught" },
    { value: "Free lesson", label: "First class costs nothing" },
  ],

  intro: {
    heading: "Why Rajpura needs IB and IGCSE tutoring that does not depend on the town",
    paragraphs: [
      "Rajpura is a transit town by geography. It sits roughly midway between Amritsar and Delhi on the national highway, about twenty kilometres from Ambala and a little under forty from Chandigarh, with a junction that puts it on the map for every train heading into Punjab. Parents here know the road to Chandigarh well, which is exactly why questions about IB and IGCSE tend to start with a school fee in the tricity and end with a search for help nearer home.",
      "The town itself has a strong industrial and service base, with large manufacturing employers, a power plant, Chitkara University and a busy market economy. The education market, however, is built on PSEB and CBSE. Coaching for JEE, NEET and Class 10 or 12 boards is easy to find. A tutor who has taught Cambridge IGCSE Chemistry paper 4 or the IB Mathematics AI internal assessment is not.",
      "That is why this page exists. If your child studies the IB or an IGCSE syllabus, or plans to, private tuition at home in Rajpura means an online lesson: a qualified tutor on live video, a shared screen, and your child at a desk in a room they know. Tutors do not visit homes in Rajpura, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. What you get is specialist teaching without the highway.",
      "Below you will find the schools within commuting range, how the boards compare, what drives fees, how Punjab's weather and festival calendar squeeze revision, and the universities Rajpura students actually target. Read it as a planning document for IB and IGCSE tutors in Rajpura, not as a promise of grades.",
    ],
  },

  programmesIntro:
    "All four IB programmes and both major IGCSE boards are taught by our tutors. This is how each stage tends to play out for a Rajpura household, where the school is often a drive away in Mohali, Chandigarh or further.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning organised around big ideas such as how we express ourselves or how the world works, in place of a fixed subject timetable. Tutoring at this stage means patient reading and number work, and helping a child put a thought into clear words.",
      countryNote:
        "A Rajpura child on PYP is nearly always commuting to a school outside town, so after-school energy is low. Twenty-five to thirty minutes, on a weekend morning if possible, works better than a long evening call.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects marked against published criteria, with units tied to global contexts and a personal project at the end. A tutor helps a student read what a criterion really wants, then practise showing each step of reasoning.",
      countryNote:
        "MYP students who come back from a long school bus ride find it hard to start fresh problems. Short, sharp sessions with one clear target per lesson keep progress steady.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across Higher and Standard Level plus the Extended Essay, Theory of Knowledge and CAS. Our tutors teach the content and exam technique, and the essays, internal assessments and reflections remain the student's own.",
      countryNote:
        "Many Rajpura DP candidates attend schools in the Chandigarh-Mohali belt. Weekend and holiday lessons from home take pressure off a packed weekday school day.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "DP courses combined with a career-related study, suited to students who want an applied pathway. Tutors focus on the academic DP courses inside the combination.",
      countryNote:
        "Rare anywhere in Punjab, CP comes up mainly when a family is comparing it with the full Diploma. A tutor can explain how each route shapes university options.",
    },
  ],

  subjectsIntro:
    "IB subjects taught at Higher and Standard Level. Rajpura students can expect a tutor who has recently taught that exact course, instead of a generalist.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, sequences, complex numbers at HL and the rigour that suits future engineers and mathematicians." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, financial modelling and calculator fluency for students bound for business, social science or life science degrees." },
    { name: "Physics", levels: "SL and HL", description: "From kinematics to quantum, with emphasis on writing crisp explanations and handling data-booklet formulae." },
    { name: "Chemistry", levels: "SL and HL", description: "Quantitative chemistry, bonding, energetics and organic pathways, with practice in structured long responses." },
    { name: "Biology", levels: "SL and HL", description: "Molecular biology, genetics, ecology and physiology, written precisely enough to earn every mark." },
    { name: "Economics", levels: "SL and HL", description: "Diagram-led micro and macro, with evaluation built in from the first lesson." },
    { name: "Business Management", levels: "SL and HL", description: "Case-study papers on real companies, where applying theory to the stimulus matters most." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, data structures and networks, practised the way the papers ask for them." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Guided analysis of unseen texts and literary works, with coaching on the individual oral." },
    { name: "English A: Literature", levels: "SL and HL", description: "Close reading and essay planning across prose, poetry and drama." },
    { name: "Punjabi and Hindi", levels: "SL and HL", description: "Language acquisition and literature support for students for whom Punjabi or Hindi is a home language, where the school offers it." },
    { name: "Psychology", levels: "SL and HL", description: "Research methods, key studies and structured extended responses." },
    { name: "Global Politics", levels: "SL and HL", description: "Concepts, case studies and the stimulus-based paper, taught so that arguments stay balanced." },
    { name: "Theory of Knowledge", levels: "DP core", description: "Coaching on how to handle knowledge questions and exhibition prompts. The submissions remain the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE subjects, taught with the paper code and tier confirmed before lesson one. The two boards differ more than parents expect.",
  igcseSubjects: [
    { name: "Mathematics (0580 and 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and statistics, with extra stretch on functions and transformations at Extended tier." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "Calculus and algebra at pace, a strong bridge to IB Mathematics HL or JEE-style thinking." },
    { name: "Physics", levels: "Core and Extended", description: "Energy, circuits, waves and nuclear physics, with drills on alternative-to-practical questions." },
    { name: "Chemistry", levels: "Core and Extended", description: "Reactions, periodicity and organic chemistry, plus planning and analysis questions." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, enzymes, transport and inheritance, with clear definitions for written answers." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core and Extended", description: "For the double-award route, balancing the three sciences within one course." },
    { name: "Computer Science", levels: "Extended", description: "Programming logic, databases and the board's pseudocode style." },
    { name: "English First Language and Second Language", levels: "Extended", description: "Directed writing, summary, comprehension and oral work, with focus on the mark scheme." },
    { name: "Punjabi and Hindi as foreign or second languages", levels: "Core and Extended", description: "Reading and writing tasks for students who speak Punjabi or Hindi at home." },
    { name: "Economics, Business Studies and Accounting", levels: "Extended", description: "Definitions, calculations and short essays for commerce-minded students." },
  ],

  regionsTitle: "Parts of Rajpura and the surrounding belt where our students study from",
  tutorsIntro:
    "Every tutor below teaches from elsewhere in India in Indian Standard Time. For Rajpura we look first for someone who has taught your child's exact board and level, since nobody in town specialises in it.",
  regionsIntro:
    "Lessons are online, so these areas are not venues. They show where students live, with a practical note on how the local routine affects the best slot for a lesson.",
  regions: [
    { name: "Old Rajpura", note: "The older market quarter near the bazaars. Evening lessons begin once the shops start closing and traffic eases." },
    { name: "Rajpura Town", note: "The planned residential grid built after Partition. Many families here send children to schools in Patiala, Mohali or Chandigarh by bus or car." },
    { name: "Rajpura Junction side", note: "Railway-linked households near the junction. Shift work means some parents prefer lessons on off-duty days." },
    { name: "Chandigarh Road corridor", note: "The approach to the tricity. Students who commute north come home late, so lessons work better on weekends." },
    { name: "Ambala Road and GT Road side", note: "The Haryana-facing edge of town. Some families have links to Ambala schools, and term dates sometimes differ." },
    { name: "Patiala Road", note: "The southern side towards Patiala, 26 km away. Families here weigh Patiala and Mohali schools and online tutoring side by side." },
    { name: "Chitkara University belt", note: "The university and its surroundings. Faculty and staff families sometimes have children on international curricula." },
    { name: "Ghanaur and Shambhu", note: "Villages along the highway with agricultural households. Sowing and harvest weeks shape evening availability." },
    { name: "Banur side", note: "Towards Mohali district. Students here often have tricity schools and mix weekday school with weekend online lessons." },
  ],

  schoolClusters: [
    {
      city: "Rajpura itself",
      note: "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Rajpura. Local schools follow PSEB or CBSE, so anyone on an international course is usually enrolled outside town, or studying the syllabus privately.",
      schools: [],
    },
    {
      city: "Nearby: Mohali",
      note: "Mohali is the closest large hub with confirmed international provision, reachable by road from Rajpura. Named only as a pointer, with no connection to us.",
      schools: ["Oakridge International School, Mohali"],
    },
    {
      city: "Nearby: Chandigarh",
      note: "Chandigarh has several schools offering the IB or British curricula. Families sometimes rent or relocate to the tricity for school years.",
      schools: ["Strawberry Fields High School, Chandigarh (IB)", "The British School, Chandigarh"],
    },
    {
      city: "Nearby: Ludhiana",
      note: "Ludhiana is further, but some families consider it for boarding or day schooling. Options are limited and worth checking directly.",
      schools: ["Britannica International School", "Harvest International School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service with no link to the IB, Cambridge, Pearson or any school on this page. Schools are listed only to show where international curricula are offered within reach of Rajpura, and their names do not imply any endorsement or partnership.",

  modesIntro:
    "Tutors do not visit homes in Rajpura, so the real choice is how often to meet and how intensive to go.",
  modes: [
    {
      title: "Weekly private lessons at home, online",
      description: "One subject, one tutor, one regular slot, taught live on video while the student sits at home in Rajpura.",
      bullets: [
        "A consistent tutor for continuity across the term",
        "Shared screen, digital whiteboard and past-paper work",
        "Short written notes to parents after each lesson",
        "Tutor swap available if the pairing is not working",
      ],
    },
    {
      title: "Pre-exam push",
      description: "A denser schedule for the two or three months before a May or November session, when revision has to be fast and structured.",
      bullets: [
        "Two to four lessons a week in the final stretch",
        "Timed papers followed by line-by-line mark-scheme review",
        "Weak-topic lists built from the student's own errors",
        "Slots planned around fog days and festival weeks",
      ],
    },
    {
      title: "Bridge for a school switch",
      description: "Support for a child moving from PSEB or CBSE to an IB or IGCSE school, or returning to Punjab after time abroad.",
      bullets: [
        "A diagnostic lesson to locate actual gaps",
        "Vocabulary and command-term training",
        "Gentle pacing for younger students",
        "Parents kept informed on how the bridge is going",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools can a Rajpura family realistically reach?",
      paragraphs: [
        "No IB or Cambridge or Edexcel IGCSE school has been confirmed inside Rajpura, so the answer is about the commute. Mohali and Chandigarh, roughly forty kilometres north, hold the nearest concentration of international curricula, and Patiala's schools are closer but follow mostly Indian boards. Families who choose IB usually pick a school first, then solve the daily travel.",
        "Some households respond by renting in Mohali for the school years while keeping a home and a business in Rajpura. Others use school transport with long days, leaving at dawn and returning at dusk. A few send children to boarding schools in the hills or in Delhi NCR. In every case, the child's evenings at home in Rajpura become the main window for extra study.",
        "That is where online tuition earns its place. A student who has reached home after a long bus ride does not need another commute to a tutor. A laptop at the family desk is enough, and lessons can be shifted to Saturday or Sunday when the weekday is full. Most parents tell us the saving in travel time is the first thing they notice.",
        "For students studying an IGCSE syllabus privately, without a school seat, the route is different again: a registered exam centre, a chosen board and a steady plan. Tutors can guide the study plan and the papers. The centre booking and entry dates are the family's responsibility, and should be settled early.",
      ],
      bullets: [
        "No international school confirmed inside Rajpura",
        "Mohali and Chandigarh are the nearest concentration",
        "Long commutes make evenings and weekends the study window",
        "Private IGCSE candidates must book an approved centre",
      ],
    },
    {
      heading: "How do PSEB and CBSE differ from the IB and IGCSE for a Rajpura student?",
      paragraphs: [
        "Punjab School Education Board papers follow a state syllabus, with a strong weight on factual recall and in some subjects on Punjabi. CBSE uses NCERT textbooks and is the natural base for JEE, NEET and CUET preparation, which is how most Rajpura coaching is organised. Both reward accuracy against a known textbook.",
        "IB and IGCSE papers are written differently. A Physics question may describe an unfamiliar apparatus and ask the student to reason about it. A Mathematics paper may give a real-world context that has to be translated into equations. An English task may ask for a short commentary rather than an essay from memory. Students who learnt well for board papers often need practice switching to this style.",
        "Internal components also differ. IB Diploma students complete internal assessments, an Extended Essay and Theory of Knowledge work. IGCSE is mostly exam-based, with limited coursework in some subjects. PSEB and CBSE have practicals and projects too, but they are lighter and more prescribed.",
        "The table puts the four systems side by side for the points that matter to a Rajpura family choosing or switching.",
      ],
      table: {
        caption: "PSEB, CBSE, IB and IGCSE at a glance for a Rajpura student",
        columns: ["Point", "PSEB", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Syllabus style", "State textbooks, recall-focused", "NCERT-based, structured", "Concept and application, essay-heavy", "Structured papers with data handling"],
          ["Language of instruction", "Punjabi or English", "English or Hindi", "English, plus a second language", "English, plus optional language"],
          ["Coaching found in Rajpura", "Widely available", "Widely available, plus JEE and NEET centres", "Not available locally", "Not available locally"],
          ["Route to Indian universities", "Direct for state admissions", "Direct, with CUET-UG and JEE", "AIU equivalence certificate needed", "Usually a foundation for A Level or IB"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost for a student in Rajpura?",
      paragraphs: [
        "The short answer is that it depends, and we say so because a published number would mislead someone. After your free first lesson, the exact rate is sent in writing, together with the schedule. You decide after reading it, not before.",
        "Tutor rates are set by experience with the specific course, the level taught, and the lesson length. An IB Mathematics HL specialist who has recently prepared students for exams will cost more than a tutor helping a Class 7 student with MYP reading. Exam proximity matters as well: the eight weeks before a session are more intensive, and so the weekly spend rises.",
        "Rajpura families often compare this with what they already know. A JEE-style coaching batch in town is cheaper per hour because forty students share a teacher. A private CBSE tutor charges less too, but rarely knows IB or IGCSE paper styles. What our rate pays for is a specialist's undivided hour, with written feedback and a match made for your child's course.",
        "If you are planning many months of lessons, ask about a blocked arrangement. We can set out how a longer plan would work, in writing, and there is no fee for switching tutors if the first match does not click.",
      ],
      bullets: [
        "Course level: HL and Additional Mathematics above Core work",
        "Tutor experience with the exact syllabus and board",
        "Lesson length and number of lessons per week",
        "How close the exam session is",
        "Rates in writing, after the free first lesson",
      ],
    },
    {
      heading: "Online tuition, coaching centres, home tutors or self-study: what suits Rajpura best?",
      paragraphs: [
        "Rajpura's coaching ecosystem is real and useful for PSEB, CBSE, JEE and NEET. It is also the wrong tool for an IB or IGCSE student, because batch teaching follows an Indian-board syllabus, in a different order and with different question types.",
        "A private tutor from the neighbourhood can be excellent, especially for Mathematics and Science at school level. The difficulty is that the IB and the two IGCSE boards each have their own paper codes, command terms and mark schemes, and very few local tutors have worked with them. A well-meaning tutor can leave a gap simply by teaching the Indian version of a topic.",
        "Self-study is what many capable students fall back on, and it can go a long way with published past papers and examiner reports. Where it struggles is feedback. A student can get a whole paper wrong and never learn why, because the answers are in front of them but the reasoning is not.",
        "Online tuition fits between these: the specialist teaching of a dedicated tutor, without the commute to Chandigarh. The table below compares the four ways on the things Rajpura parents ask about.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Rajpura",
        columns: ["Option", "Syllabus match", "Individual attention", "Commute", "Watch-out"],
        rows: [
          ["Online private tuition", "Tutor picked for exact course", "Full hour, one student", "None", "Needs stable internet and a quiet corner"],
          ["Town coaching centre", "Designed for PSEB, CBSE and entrance exams", "Shared with a large batch", "Daily in town", "Different question style, few IB-trained teachers"],
          ["Local private tutor", "Depends on the tutor, usually Indian boards", "Good one-to-one", "Tutor or student travels locally", "Hard to verify IB or IGCSE experience"],
          ["Self-study", "Good if the right past papers are used", "None without a parent or friend checking", "None", "Nobody marks answers against the real scheme"],
        ],
      },
    },
    {
      heading: "How do fog, harvest season and festivals shape the Rajpura exam calendar?",
      paragraphs: [
        "IB and IGCSE both run May and autumn exam sessions, and most Indian candidates sit May. Mock exams tend to land in January or February, and coursework deadlines stack into the autumn before. Planning backwards from May gives a tutor and student about seven months for the main push.",
        "Punjab's calendar adds its own rhythm. Lohri in mid-January gets a festive evening, and Baisakhi in April coincides with the wheat harvest, when families with farm links are stretched. Winter fog, from December into January, slows roads and can cut evening power. Later in the year, post-harvest smoke in October and November can make the air unpleasant, and Diwali follows close behind.",
        "Summer is harder still. Temperatures push past forty degrees in May and June, which is precisely the IB and IGCSE exam month. Students who attend exams at a centre in Chandigarh or Patiala should plan travel early, because of the heat and the highway traffic. Lessons in the weeks before can be shifted to early mornings or evenings.",
        "We set a term plan at the start, marking festivals, mocks and travel. The table gives a rough view of how the Rajpura year fits the exam year.",
      ],
      table: {
        caption: "The Rajpura study year against the exam year",
        columns: ["Months", "Local rhythm", "IB and IGCSE effect"],
        rows: [
          ["December to January", "Dense fog, Lohri, winter break", "Mocks prepared; evening lessons moved off foggy days"],
          ["February to April", "Wheat ripening, Baisakhi in April", "Main revision period before the May session"],
          ["May to June", "Heat above forty degrees, exams", "Lessons early in the morning or after sunset"],
          ["July to September", "Monsoon, new academic year", "Best window to build foundations for new DP students"],
          ["October to November", "Post-harvest smoke, Diwali, November exams", "Short gaps scheduled around festival days"],
        ],
      },
    },
    {
      heading: "Which universities do IB and IGCSE students from Rajpura aim for?",
      paragraphs: [
        "Closest to home are Punjab's own options: Panjab University in Chandigarh, Thapar Institute and Punjabi University in Patiala, Chitkara University in Rajpura itself, and IIT Ropar and IISER Mohali for science-minded students. Some families look to Delhi University, Ashoka or other private universities across the country. Indian universities generally ask IB students for an AIU equivalence certificate.",
        "For engineering and medicine, JEE Main and NEET-UG publish their own eligibility notes for IB and IGCSE qualifications. These usually require specific subject combinations, and rules shift between years. A student headed towards medical or engineering colleges should read the current brochure in Class 11, not in Class 12.",
        "Many Punjab families also think of study abroad, given the strong diaspora links with Canada, the UK, Australia and the United States. An IB Diploma gives a direct, widely recognised score to these universities, and an IGCSE record gives a foundation for A Levels or an IB course. Predicted grades matter, so consistent tutoring through Class 11 helps.",
        "We can explain how subject choices affect options, for example why IB Mathematics AA HL suits engineering and economics aims, or why Biology and Chemistry together keep medical doors open. We do not guarantee admission anywhere.",
      ],
      bullets: [
        "Regional options: Panjab University, Thapar, Punjabi University, IIT Ropar, IISER Mohali",
        "AIU equivalence certificate for most Indian applications",
        "JEE Main and NEET-UG have separate notes for IB and IGCSE",
        "Canada, the UK, Australia and the US are common study-abroad choices",
      ],
    },
    {
      heading: "How do we teach IB Mathematics AA and AI and the sciences to Rajpura students?",
      paragraphs: [
        "The two IB Mathematics courses serve different futures. Analysis and Approaches is algebra and calculus heavy, and fits students aiming at engineering, pure science or mathematics. Applications and Interpretation leans on statistics, modelling and the graphic display calculator, and suits economics, business and social science. We help families choose early, since switching later costs time.",
        "In a lesson, the tutor works a problem on a shared screen, then the student does the next one on paper, held to the camera or shared by tablet. Errors get fixed in real time. The pace follows the student: a quick learner may move to past papers within weeks, while another needs a longer foundation.",
        "For Physics, Chemistry and Biology, the main skill is translating understanding into the language of the mark scheme. A CBSE-trained student often knows the content but writes answers that are too short or too vague for a six-mark question. Tutors teach a structure: state, explain, link to data, conclude.",
        "Practical skills are taught through data and scenarios. A tutor will walk through an experiment from variables to uncertainty to evaluation, using the student's own school results where possible. The internal assessment itself stays the student's work, and our tutors never write or edit it.",
      ],
    },
    {
      heading: "Should a Rajpura student take IGCSE Core or Extended, and which subjects?",
      paragraphs: [
        "Core is a shorter path with a lower grade ceiling, meant for students who need secure basics. Extended removes the ceiling and adds harder questions. A student who might take IB Diploma Mathematics or Sciences, or A Levels, should almost always be on Extended tier in those subjects, since Core leaves gaps in later study.",
        "Subject choice depends on the goal. Keep Mathematics, English and at least one separate science if the plan is science or engineering, and choose separate sciences over the combined award when IB HL or A Level sciences are ahead. Economics, Business Studies or Accounting suit a commerce-minded student, and a language option keeps the profile rounded.",
        "Board choice matters as well. Cambridge and Pearson Edexcel papers are laid out differently and weigh topics differently. If a student changes schools partway, some topics may be missing from the new board's order, and a tutor who has taught both can close the gap in a few focused sessions.",
        "Students who study IGCSE as private candidates should begin from the published specification, confirm the exam centre early, and use the board's past papers and examiner reports for practice. Our tutors follow the specification topic by topic.",
      ],
      table: {
        caption: "Core or Extended: a quick guide for Rajpura families",
        columns: ["Question", "Core tier", "Extended tier"],
        rows: [
          ["Top grade available", "Lower ceiling", "Full range"],
          ["Good for", "Building secure basics, avoiding overload", "IB HL, A Levels, engineering and medicine aims"],
          ["Question difficulty", "More structured and shorter", "More open, with stretch problems"],
          ["How tutoring helps", "Accuracy and confidence", "Problem solving and exam technique"],
        ],
      },
    },
  ],

  process: [
    { title: "Message us", description: "Send your child's programme or IGCSE board, subject, current level and exam month by WhatsApp or email." },
    { title: "Meet a suggested tutor", description: "We propose one or two tutors with recent experience of that course and explain why each fits." },
    { title: "Try a free lesson", description: "Your child has a live first lesson with the tutor. There is no fee and no obligation to continue." },
    { title: "Receive the rate in writing", description: "If you would like to continue, we send the rate and weekly plan in writing before any booking." },
    { title: "Learn and review", description: "Lessons run weekly, each followed by a written note. If the fit is wrong, we find a new tutor." },
  ],

  whyPoints: [
    { title: "Specialists for exact courses", description: "Your child's tutor has taught the same programme, subject and board recently, which is the point of the match." },
    { title: "No commute", description: "Families in Rajpura save the drive to Chandigarh or Mohali, which adds hours to a school week." },
    { title: "Clear communication", description: "A written note after each lesson lets parents see the work without sitting in on the call." },
    { title: "Honest boundaries", description: "Tutors never write internal assessments, essays or coursework. They teach and give feedback." },
    { title: "Easy to change", description: "If the personality or pace is wrong, a new tutor is arranged without fuss or extra fees." },
    { title: "Plans for the local calendar", description: "Lessons avoid fog days, festival weeks and harvest pressure wherever we can foresee them." },
  ],

  faqs: [
    {
      question: "Are there IB and IGCSE tutors in Rajpura?",
      answer: "Not locally at the level an international syllabus needs, so our tutors teach online. They are based in India, work in Indian Standard Time and are matched to your child's exact programme, such as MYP Mathematics or DP Chemistry HL. The lesson takes place on live video at home in Rajpura, with a shared screen for working through problems.",
    },
    {
      question: "Can a tutor come to my house in Rajpura?",
      answer: "No. Tutors do not visit homes in Rajpura, because in-person home tuition is offered only in Gurugram and parts of Delhi NCR. In Rajpura you get online home tuition instead: a private one-to-one lesson at home, on a laptop, with a tutor who can see your child's written work through the camera or a shared tablet.",
    },
    {
      question: "How far is the nearest IB school from Rajpura?",
      answer: "The nearest concentration is in Mohali and Chandigarh, roughly forty kilometres to the north, though Mohali can be a little closer depending on the route. No IB school is confirmed inside Rajpura itself. Check school transport, timings and admission rules directly with any school, since we have no affiliation with them.",
    },
    {
      question: "What does tuition cost and why don't you publish prices?",
      answer: "We do not publish prices because the rate depends on the tutor's experience, the level, how often lessons happen and how close the exam is. Your first lesson is free, and the rate follows in writing before any booking. That way you see what the tutor does first, then decide whether the arrangement is worth it.",
    },
    {
      question: "Which IGCSE board should my child choose, Cambridge or Edexcel?",
      answer: "Usually the school decides, since it registers students with one board. If you are studying privately, both are respected. Cambridge papers often lean towards structured multi-part questions, while Edexcel International GCSE has a slightly different layout and weighting. A tutor familiar with both can compare them for your child's strengths, and help with whichever you pick.",
    },
    {
      question: "My child is in a PSEB school. Can they switch to IB or IGCSE learning?",
      answer: "They can study the syllabus privately or move to a school that offers it, although moving mid-stream needs planning. A tutor can run a diagnostic lesson and show how far the gap is. The biggest change is how answers are written, and with practice most students adapt within a few months of steady lessons.",
    },
    {
      question: "Do you help with the Extended Essay or Internal Assessments?",
      answer: "We coach, never write. A tutor can explain the assessment criteria, help a student narrow a research question and give feedback on a structure or draft. The Extended Essay, internal assessments and TOK work must stay the student's own, and our tutors decline any request to write, edit line by line or ghost-write them.",
    },
    {
      question: "What about foggy winters and power cuts?",
      answer: "Fog mostly affects roads, not online lessons, but it can shift a family's evening routine. If there is a power issue, a laptop on battery and a mobile hotspot are good backups. We agree a fallback plan with you, and any lesson lost to a long outage can be rescheduled without charge.",
    },
    {
      question: "When should preparation start for the May exam?",
      answer: "Ideally seven to nine months before, which means around August or September. That leaves time for content, past papers and a mock in January. Students who start later can still gain, though the plan will be more intensive. A tutor will first test which topics are secure, so early lessons aren't wasted.",
    },
    {
      question: "Are younger students taught too?",
      answer: "Yes. We teach PYP and MYP as well as DP and CP. Younger learners get shorter sessions, often thirty minutes, with playful reading and number activities for PYP and criterion-based subject work for MYP. A parent nearby during the first few lessons helps a young student settle into the online format.",
    },
    {
      question: "Is AIU equivalence needed for Indian universities?",
      answer: "For most Indian universities, yes. The Association of Indian Universities issues equivalence certificates for the IB Diploma and some international qualifications. Apply early because processing overlaps admission rounds. We do not handle the paperwork, but tutors can explain how subject choices relate to JEE, NEET and CUET-UG eligibility.",
    },
    {
      question: "Can you teach Punjabi or Hindi for IB and IGCSE?",
      answer: "Yes, subject to the level on offer at the student's school. Hindi tutors are readily available, and Punjabi support can be arranged where the syllabus includes it. Lessons cover reading set texts, writing in the right register and oral practice. The tutor starts by checking whether the language is the student's first or second.",
    },
    {
      question: "What equipment does my child need?",
      answer: "A laptop or tablet with a working camera and microphone, a stable internet connection and a quiet spot. A second device, even a phone, is handy for showing handwritten work. For Mathematics and Sciences, plain paper and a pen are more useful than a stylus, and a graphic calculator is needed only if the school requires one.",
    },
    {
      question: "Can my child attend from a village near Rajpura?",
      answer: "Yes, anywhere with a steady connection. Students from Ghanaur, Shambhu, Banur or surrounding villages can all attend online. Test the connection at the planned lesson time, since evening speeds can differ from daytime. If the line is weak, we can suggest alternative slots or recommend simple settings such as audio-first lessons.",
    },
    {
      question: "How do I book a free trial?",
      answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with your child's class, board or programme, subject and exam session. We will suggest a tutor, then arrange a free lesson. Nothing is charged at that stage, and the rate is sent in writing only if you want to continue.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "See every Indian city we serve and how lessons run online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutor pages, organised by programme and subject." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subjects, with tier and paper guidance." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "A closer look at the two-year Diploma and how tutors plan it." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criterion-based support for Class 6 to 10." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Gentle lessons for primary-age learners." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "How CP sits alongside DP courses." },
    { label: "IB Mathematics tutors", href: "/courses/ib/mathematics/", description: "AA and AI, SL and HL." },
    { label: "Our tutors", href: "/tutors/", description: "Tutor profiles, subjects and teaching experience." },
    { label: "Contact us", href: "/contact-us/", description: "Book a free lesson or ask a question." },
    { label: "Patiala", href: "/patiala/", description: "The district city, 26 km from Rajpura." },
    { label: "Mohali", href: "/mohali/", description: "The nearest international-school hub, covered by our online tuition." },
    { label: "Ludhiana", href: "/ludhiana/", description: "Another Punjab city with online IB and IGCSE tutoring." },
  ],

  closingHeading: "Book a free first lesson from your home in Rajpura",
  closingBody:
    "Tell us your child's programme, subject and exam month, and we will propose a tutor who has taught that course. The first lesson is free, any later rate is written down before you agree, and a tutor can be changed if needed. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
