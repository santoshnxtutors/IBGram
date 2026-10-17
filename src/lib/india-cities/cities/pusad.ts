import type { CitySeoPage } from "../types";

/**
 * /pusad/ - IB and IGCSE tutoring page for Pusad, Yavatmal district, Maharashtra. Online-only
 * delivery. No IB or Cambridge/Edexcel school is confirmed in Pusad, so stripSchools is empty and
 * clusters are labelled nearby or distant cities (Nagpur, Hyderabad, Pune boarding) reusing names
 * verified on the finished Yavatmal, Nagpur and Latur pages. Town facts from Wikipedia's Pusad
 * article (on the Pus river, Upper Pus Dam 1971 and Lower Pus Dam 1983, ginning since 1958,
 * nearest railway Washim about 60 km, Nanded airport about 110 km, Vasantrao Naik of Gahuli).
 * Written to read differently from /washim/, the other eastern Vidarbha page.
 */
export const pusad: CitySeoPage = {
  slug: "pusad",
  countryName: "Pusad",
  countryNameLong: "Pusad, Maharashtra",
  demonym: "Pusad",
  state: "Maharashtra",
  stateCode: "IN-MH",
  flagCode: "in",
  countryCode: "IN",
  region: "Maharashtra, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons avoid the bowl-like heat of April and May, the sowing weeks after the first rains, and the ten days of Ganeshotsav that take over Pusad's streets",
  lastUpdated: "2026-09-21",
  geo: { latitude: 19.9097, longitude: 77.5736 },
  wikipedia: "https://en.wikipedia.org/wiki/Pusad",
  alternateNames: ["Pusad Yavatmal", "Pusad Town"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pusad | Private Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Pusad in Yavatmal district: live one-to-one online lessons for DP, MYP, PYP and IGCSE students with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Pusad",
  heroEyebrow: "IB & IGCSE ONLINE LESSONS FOR PUSAD AND UMARKHED FAMILIES",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE students in Pusad: one-to-one video lessons with a tutor who has taught the exact subject, level and board. Helpful to households sending a child to Nagpur, Nanded or further afield, and to those bringing one home from abroad.",
  primaryKeyword: "IB and IGCSE tutors in Pusad",
  imageAltText: "A Pusad student and an online tutor reviewing an IB Geography data-response answer on a shared screen",
  secondaryKeywords: [
    "IB tutor Pusad",
    "IGCSE tutor Pusad",
    "IB home tuition Pusad",
    "IGCSE home tuition Pusad",
    "IB private tuition Pusad",
    "IB Maths tutor Pusad",
    "IGCSE Maths tutor Pusad",
    "IB Physics tutor Pusad",
    "IB Chemistry tutor Pusad",
    "IB Biology tutor Pusad",
    "IB DP tutor Pusad",
    "IB MYP tutor Pusad",
    "IB PYP tutor Pusad",
    "IGCSE online tuition Pusad",
    "Cambridge IGCSE tutor Pusad",
    "Edexcel IGCSE tutor Pusad",
    "IB tutor Yavatmal district",
    "online IB tutor Umarkhed Road Pusad",
    "IB tutor Pusad Maharashtra",
  ],

  heroTrustPoints: [
    "You name the school, class and paper code, and the tutor proposed has taught that very course",
    "Teaching is entirely on screen: no one comes to a house in Pusad, and house visits are offered only in Gurugram and parts of Delhi NCR",
    "The first lesson carries no charge, and a written summary follows it whatever you decide",
    "No tie exists between IB Gram and the IB, Cambridge, Pearson Edexcel or any school, and tutors do not produce anything a student submits for assessment",
  ],
  heroStats: [
    { value: "Primary to Diploma", label: "IB stages supported" },
    { value: "Two exam boards", label: "Cambridge and Pearson Edexcel" },
    { value: "After-school evenings", label: "IST, weekdays and weekends" },
    { value: "Opening lesson free", label: "See the teaching first" },
  ],

  intro: {
    heading: "Why Pusad families turn to tutors they will never meet in person",
    paragraphs: [
      "Pusad lies on the Pus river in the south of Yavatmal district, a town built on cotton ginning and oil pressing, with groundnut, tur, wheat and sunflower in the fields around it. There is no railway station here; the nearest is Washim, about 60 km away, and the nearest airport is Nanded, roughly 110 km. Anyone asking about IB or IGCSE lessons in such a place is usually planning something: a move to Nagpur or Pune, a boarding place, or a child's return from a school abroad.",
      "The town has a notable place in Maharashtra's history. Vasantrao Naik, from the nearby village of Gahuli, was the state's longest-serving Chief Minister, and the Banjara community he came from remains a strong presence across the taluka. Education has long been a route upward here, and the idea of an international syllabus often enters a household through a doctor, engineer or relative who has lived elsewhere.",
      "Finding a teacher who has actually marked IB or IGCSE scripts is the practical hurdle. Nobody in Pusad is likely to have done so, and a search confined to the taluka draws a blank. A video lesson with a specialist in Pune, Chennai or Delhi removes that limit, and it works on the same Indian clock the family already lives by.",
      "We are independent of the IB, Cambridge, Pearson Edexcel and every school named on this page. A tutor explains, corrects and sets practice, but does not write, polish or complete an Internal Assessment, an Extended Essay, a TOK essay or any other assessed work.",
    ],
    bullets: [
      "For families preparing a move to Nagpur, Pune or Hyderabad, or returning from overseas",
      "English explanations first, with Marathi or Hindi available to settle a tricky idea",
      "Online only here; in-person home tuition is limited to Gurugram and parts of Delhi NCR",
      "An opening lesson at no cost, then a short note in writing",
    ],
  },

  programmesIntro:
    "We have not been able to verify an IB school anywhere in Pusad taluka, so every stage below is pursued in a school outside the town or abroad. The notes explain what each stage asks for and the usual Pusad connection.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Six themes tie the primary years together, and the last year ends with a pupil-led Exhibition. Because nothing is examined, a tutor's time goes into daily reading, talking through sums aloud and learning to turn a wonder into a question someone could actually answer.",
      countryNote:
        "A Pusad PYP enquiry is typically a parent who wants a young child ready for an international day school in Nagpur or Pune before the admission year arrives.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is judged against four criteria, with units framed by global contexts and a Personal Project at the end of Year 5. Marks go missing when a student recounts events while a criterion wants a reasoned judgement, and lessons are built to break that habit.",
      countryNote:
        "A Pusad MYP learner is most often in a hostel elsewhere and home for Diwali or the summer, so lessons cluster around those breaks.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma asks for six subjects, a 4,000-word Extended Essay, Theory of Knowledge and creativity, activity and service. Papers are sat in May, internal assessments are sampled and moderated, and grades are published in July.",
      countryNote:
        "A Diploma student linked to Pusad spends term in another city, so tutoring follows that school's mock timetable and stretches across weeks at home.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme places at least two Diploma courses beside a vocational study and a reflective project. Indian schools offering it are few, so the tutoring it needs is usually help with its academic courses.",
      countryNote:
        "Requests for CP from Pusad are almost unheard of; if one comes, the work stays on the Diploma courses.",
    },
  ],

  subjectsIntro:
    "Before anything else, a tutor needs to know the level and the paper structure, since Physics HL and Physics SL are not the same experience. The next question is how soon the exam series falls and what has been marked so far.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Expect a steady supply of calculus and algebra, worked first without a calculator. The Exploration topic is agreed in the first term so the student is not hunting for one in the final weeks." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "This is the course for modelling and statistics. Lessons use real datasets, such as rainfall or cotton arrivals at a market, and train students to write a sentence on what a model cannot tell them." },
    { name: "IB Physics", levels: "HL / SL", description: "A tutor builds speed with the data booklet, then deals with harder units such as fields and waves, and looks at the investigation's experimental design before any measurements are taken." },
    { name: "IB Chemistry", levels: "HL / SL", description: "The arithmetic of moles and energetics is repeated until it is automatic, and reaction pathways in organic chemistry are redrawn from a blank page each week." },
    { name: "IB Biology", levels: "HL / SL", description: "Students practise writing exactly as much as a command word asks, and learn to choose a statistical test that fits the data their own experiment produced." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams are taught precisely, then tested against local cases such as cotton price swings, support prices and the Pusad ginning trade, before moving to balanced evaluation." },
    { name: "IB Business Management", levels: "HL / SL", description: "Real organisations are dissected using the syllabus tools, and students learn to commit to a recommendation supported by figures from the printed case." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Weekly work alternates between an unseen passage, a two-text comparison and recorded oral practice, each returned with written comments." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Students trace algorithms by hand, then implement them, and keep a dated development log for the internal product from its first week." },
    { name: "IB Psychology", levels: "HL / SL", description: "A bank of studies is built in a fixed pattern of aim, procedure, result and criticism, then used to write essays inside the time allowed." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Dam-fed irrigation, cotton pesticides and hill forest near the Pus give system diagrams and evaluation answers concrete material." },
    { name: "IB Geography", levels: "HL / SL", description: "Case studies only score when they carry names, dates and numbers; data-response questions reward fluency with maps and simple statistics." },
    { name: "IB Marathi and Hindi (school-supported)", levels: "SL / HL", description: "Where a school offers them, written tasks and oral assessment in Marathi or Hindi are practised for accuracy and ease, which matters for students who think in Banjara or Marathi at home." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The tutor plays questioner for the exhibition and the prescribed title, pressing on assumptions. Every word submitted is the student's." },
  ],

  igcseSubjectsIntro:
    "An IGCSE student linked to Pusad normally holds a course begun elsewhere. Board, paper code and tier are settled first, then the series; Cambridge and Edexcel word their questions differently, and practising on the wrong board wastes time.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580 / 4MA1", levels: "Core / Extended", description: "Practice stresses clear working. An arithmetic slip costs a mark, but an answer with no method can cost the whole question." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "A gentle first encounter with differentiation and identities, chosen to make the IB Maths AA or A Level jump less abrupt." },
    { name: "IGCSE Physics 0625 / 4PH1", levels: "Core / Extended", description: "Timed work on rearranging equations, reading gradients and designing a fair test covers the questions that decide close grades." },
    { name: "IGCSE Chemistry 0620 / 4CH1", levels: "Core / Extended", description: "Calculations in moles and electrolysis are built up in order, and tests for ions and gases are compressed into one grid." },
    { name: "IGCSE Biology 0610 / 4BI1", levels: "Core / Extended", description: "Extended answers on inheritance, transport and coordination are drafted against official wording and paired with labelled sketches." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Demand and supply diagrams are quick to learn; the longer answers that weigh two sides separate the grades." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Using the numbers in the case itself beats reciting a definition, so past papers are worked scenario by scenario." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Short Python programs are converted into exam pseudocode, which makes the logic paper feel rehearsed." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Writing for a stated audience and summarising tightly are drilled on passages the student has not seen, with comments on register." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading comprehension and composition are practised in the exact format of the paper for students who take Hindi alongside English." },
  ],

  regionsTitle: "Pusad neighbourhoods and taluka towns we match online",
  regionsIntro:
    "With all teaching on screen, these places are here for context: the roads families use, the schools they look towards and what summer, sowing and festival weeks do to the evening. Towns around Pusad are included because many students live in them.",
  regions: [
    { name: "Old town by the Pus river", note: "The original settlement along the river, with long-established trading and ginning families and a dense school-going population." },
    { name: "Market and ginning belt", note: "The commercial heart tied to cotton pressing, where business families think seriously about the next generation's education." },
    { name: "Washim Road", note: "The road towards Washim, where the nearest railway station lies about 60 km off, which matters for boarders travelling to cities." },
    { name: "Yavatmal Road", note: "The approach to the district headquarters, used by government employees and families with relatives in Yavatmal." },
    { name: "Umarkhed Road", note: "The southern route towards Umarkhed, taking families towards Nanded and the Marathwada border." },
    { name: "Nanded side", note: "The direction towards Nanded, with its airport about 110 km away and a large student population, a common reference point for parents." },
    { name: "Upper Pus and Lower Pus dam areas", note: "Irrigated farmland fed by the two dams, where farming households are increasingly curious about international schooling." },
    { name: "Gahuli", note: "The village known as Vasantrao Naik's birthplace, reflecting the Banjara community's deep roots in the taluka." },
    { name: "Umarkhed and Mahagaon", note: "Neighbouring taluka towns whose students often look to Pusad for senior schooling and tuition." },
    { name: "Digras", note: "A town in the district where families often compare options in Yavatmal, Nagpur and Nanded." },
  ],

  schoolDisclaimer:
    "No IB World School or genuine Cambridge or Edexcel centre is verified by us inside Pusad. The schools below stand in Nagpur, Hyderabad and Pune, where some Yavatmal-district families look. IB Gram is independent of each of them, of the IB, of Cambridge and of Pearson, and current affiliations should be confirmed with the schools themselves.",
  schoolClusters: [
    {
      city: "Nearby: Nagpur (MIHAN and Wardha Road)",
      note: "The main international school hub of Vidarbha, reachable by road in a long day, and the first place many Yavatmal-district families consider.",
      schools: ["D Y Patil International School, MIHAN"],
    },
    {
      city: "Nearby: Nagpur (central and Wanadongri)",
      note: "More Nagpur campuses in the city centre and along Hingna Road, for families willing to board or relocate.",
      schools: ["Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"],
    },
    {
      city: "Distant: Hyderabad and Pune (boarding)",
      note: "Well beyond daily reach, these cities offer IB boarding and day options that Marathwada and Vidarbha families sometimes choose for the Diploma years.",
      schools: ["Oakridge International School, Hyderabad (IB and CBSE)", "Mahindra United World College of India (IB Diploma, boarding)", "International School Aamby (IB PYP to DP, boarding)"],
    },
  ],

  modesIntro:
    "Pusad households mostly settle into one of three patterns. All three happen at home on a laptop or tablet, and none brings a tutor to a Pusad door, because in-person visits exist only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "One subject, same slot every week",
      description:
        "A fixed hour with one tutor, usually after school and before the evening meal or after it. Regular contact builds skill more reliably than occasional long sessions.",
      bullets: [
        "Fits PYP, MYP, DP and both IGCSE boards",
        "A digital whiteboard takes the place of the desk",
        "One teacher sees the whole term",
        "A second subject can join later",
      ],
    },
    {
      title: "Weekly lessons and a monthly conversation",
      description:
        "Same weekly hour, plus written notes after each class and a call with a parent once a month to agree what comes next. It suits parents who are out working all day.",
      bullets: [
        "Notes list what was covered and what to do before next time",
        "Monthly call resets the plan",
        "Works for PYP and MYP families who want light structure",
        "Changing tutor is simple if needed",
      ],
    },
    {
      title: "Revision weeks before mocks and finals",
      description:
        "A cluster of lessons over a few weeks around Diwali, the winter holidays or the run-up to May, with timed papers and quick feedback, planned away from sowing and festival weeks.",
      bullets: [
        "Papers marked against the current official scheme",
        "Weak areas get the bulk of the time",
        "Best fixed a few weeks ahead",
        "A diagnostic paper opens the block",
      ],
    },
  ],

  sections: [
    {
      heading: "What international schooling can a Pusad family actually reach?",
      paragraphs: [
        "In Pusad, schools follow the Maharashtra State Board, CBSE and, in a few cases, ICSE, along with a good many Urdu and Marathi-medium institutions. We could not establish that any school in the taluka offers the IB or a genuine Cambridge or Edexcel course, and it would be wrong to name one. A school calling itself 'international' may still be a State Board school, so ask for the affiliation in writing.",
        "The realistic reach is outward. Nagpur has one IB-linked school in the MIHAN belt and several others across the city, and these are the usual first choice because Nagpur is where Yavatmal-district families already go for hospitals, colleges and shopping. Families willing to go further look at Hyderabad or at Pune's boarding schools.",
        "Who asks? A doctor or engineer posted to Pusad for a few years; a cotton-trading family with a son in Dubai; a teacher whose daughter is preparing for a Nagpur international school; or a household that has simply decided the Diploma is a better fit for a child who likes writing and research. Each wants a tutor who has seen real IB and IGCSE papers.",
        "Such tutors are not in the taluka, but they are a video call away. Marking is standardised globally, so a Pusad student's scripts are judged on the same scale as a student's in Singapore or Pune.",
      ],
      table: {
        caption: "International schooling within reach of Pusad",
        columns: ["Place", "How far it feels", "What we can point to"],
        rows: [
          ["Pusad taluka", "Home", "No verified IB or genuine IGCSE school"],
          ["Nagpur", "A long day by road", "D Y Patil MIHAN, Centre Point, VIBGYOR, International School of Scholars"],
          ["Hyderabad", "An overnight journey", "Oakridge International School, Hyderabad"],
          ["Pune", "Further still", "Mahindra UWC of India, International School Aamby (boarding)"],
        ],
      },
      bullets: [
        "Nothing verified inside Pusad taluka",
        "Nagpur is where most families look first",
        "Hyderabad and Pune are boarding options for the Diploma years",
        "Online tutoring puts specialists on your screen at home",
      ],
    },
    {
      heading: "State Board, CBSE, IB or IGCSE: which one changes most for a Pusad child?",
      paragraphs: [
        "For a child in a Pusad State Board school, the biggest shift is from reproducing the Balbharati textbook to applying ideas to material the textbook never showed. SSC and HSC exams in February and March reward complete, correct answers; IB and IGCSE papers reward a student who can read an unfamiliar graph, weigh two explanations and write one clean argument.",
        "CBSE sits between the two. Its NCERT books and recent move towards competency questions make the jump smaller, and its exams fall between February and April. A CBSE student often adapts to IGCSE within a term, while a State Board student may need longer with written English.",
        "Language matters in Pusad more than in most places. Marathi, Hindi, Urdu and the Banjara tongue all live side by side, and a child may think in one, read in another and sit exams in English. Tutors can explain in a simple English first and move to Hindi or Marathi for a stubborn idea, then rehearse the English phrasing the paper expects.",
        "None of these routes is superior in every case. The right one depends on where the student plans to study, and tuition should back whichever board the child has joined.",
      ],
      table: {
        caption: "What each board asks of a Pusad student",
        columns: ["Board", "What earns marks", "When exams fall", "Typical next step"],
        rows: [
          ["Maharashtra State Board", "Complete answers from Balbharati texts", "February to March", "MHT-CET and state colleges"],
          ["CBSE", "Structured, NCERT-based answers", "February to April", "JEE, NEET and CUET"],
          ["IB Diploma", "Analysis, extended writing and internal work", "May, with some November entries", "Indian and overseas universities"],
          ["Cambridge IGCSE", "Tiered papers with method credit", "May-June, October-November, India February-March", "A Level, the IB or schools abroad"],
          ["Pearson Edexcel IGCSE", "Tiered papers in a linear layout", "May-June and October-November", "A Level, the IB or schools abroad"],
        ],
      },
    },
    {
      heading: "What decides the fee for IB or IGCSE lessons in Pusad?",
      paragraphs: [
        "A price list would mislead, because the fee for an IB Physics HL tutor with moderating experience is not the fee for an IGCSE Core science tutor. We therefore state the figure in writing once we know your child's need, and the opening lesson is free so that quality is judged before money is discussed.",
        "Four things move the number. First is seniority: teaching Higher Level or examining for the board is scarce expertise. Second is level: Additional Mathematics and HL sciences ask for more depth. Third is length of lesson. Fourth is frequency, since one hour weekly and five hours in the week before an exam are very different.",
        "Private attention costs more per hour than a batch of thirty. For a family in Pusad the useful comparison is minutes of personal feedback, not the hourly price alone, and another useful comparison is the cost of sending a child to Nagpur or Nanded for equivalent help.",
        "Plans are flexible. Many families begin with one subject, add another when they see the notes, and pause lessons in festival weeks. Nothing is locked in beyond the lessons you have agreed.",
      ],
      bullets: [
        "The fee follows tutor seniority, course level, lesson length and weekly count",
        "You see the figure on paper before paying anything",
        "No bus or fuel cost to reach a teacher in another town",
        "Begin small, then widen the plan as confidence grows",
      ],
    },
    {
      heading: "Is learning online with a specialist better than local coaching, a private tutor or going it alone in Pusad?",
      paragraphs: [
        "Coaching in and around Pusad is aimed at State Board results and entrance tests such as MHT-CET, JEE and NEET. For those aims it is the right thing. For an IB or IGCSE student it means sitting through content and question styles that belong to another exam.",
        "A local schoolteacher giving private lessons may be excellent in CBSE Mathematics but has probably never used the IB formula booklet or set a Cambridge Paper 4 question. Studying alone with past papers works for a disciplined student, but no one is marking the written answers, so an error can repeat for months.",
        "A specialist online does both jobs. The price is a dependence on connectivity: Pusad has no railway and some outlying villages have patchy signal, so the trial includes a line check and a fallback plan.",
        "To repeat, tutors do not attend Pusad homes; house visits run only in Gurugram and parts of Delhi NCR. The grid below sets out the balance honestly.",
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help from Pusad",
        columns: ["Route", "Knows IB or IGCSE papers?", "Marks your child's writing?", "Main catch"],
        rows: [
          ["Online one-to-one", "Yes, matched to code and level", "Every lesson, with notes", "Needs a steady signal"],
          ["Coaching institute", "Rarely, built for other exams", "Seldom individually", "Fixed batch timing"],
          ["Local private tutor", "Usually not", "Yes, but on another syllabus", "Few or no IB specialists"],
          ["Self-study", "Only what the student finds", "Not unless someone reviews it", "Mistakes harden unnoticed"],
        ],
      },
    },
    {
      heading: "How do extreme temperatures, sowing weeks and Ganeshotsav shape a school year in Pusad?",
      paragraphs: [
        "Pusad sits in a basin ringed by hills, and the heat is fierce: summers can reach the high 40s and winter nights drop to about 5 degrees. April and May afternoons are impossible for concentrated work, so serious study moves to early morning or the hours after sunset, and power interruptions are a real possibility in peak heat.",
        "The monsoon from June brings the sowing of cotton, tur and groundnut, and many households, including those with children in international schools, are pulled towards the fields. The Upper and Lower Pus dams support irrigation, but the agricultural calendar still shapes the year.",
        "Ganeshotsav has a special meaning in Pusad, with its link to the tradition of public festivals begun in Tilak's time. Streets fill for ten days in late summer, followed soon by Navaratri and Diwali. Lessons are lighter in those weeks, and mock papers are kept away from them.",
        "With this in mind, the heaviest revision falls between December and March, and the May series is prepared for by mid-April, before the very hottest weeks.",
      ],
      table: {
        caption: "A working calendar for a Pusad IB or IGCSE student",
        columns: ["Months", "Academic load", "What Pusad is doing"],
        rows: [
          ["December to February", "IB mocks, IA finishing, India Cambridge entries", "Cool nights, good study weather"],
          ["March to April", "Cambridge India series, final May revision", "Heat building fast"],
          ["May to June", "IB and IGCSE main exams", "Peak heat, then first rains and sowing"],
          ["July to September", "Results, new courses, Extended Essay topics", "Monsoon, Ganeshotsav"],
          ["October to November", "Autumn series, mocks, university lists", "Navaratri, Diwali, harvest"],
        ],
      },
    },
    {
      heading: "After school: where can Pusad's IB and IGCSE students study next?",
      paragraphs: [
        "An IB Diploma earns equivalence to Class 12 through the Association of Indian Universities, and many universities accept it directly or through CUET-UG. Within Maharashtra, admission to state professional courses has its own rules for international-board applicants, so read the current notification and do not rely on a neighbour's account.",
        "Nagpur's university and medical colleges, Pune's universities and Mumbai's institutions are the usual targets, and students interested in design, law or liberal arts also look at private universities where the IB is well known. Nanded, close to Pusad, has its own state university, though its intake pattern for international boards should be checked.",
        "For medicine and engineering, NEET UG and JEE publish eligibility for international-board students, and the details change between years. A Diploma student normally needs Physics, Chemistry and Mathematics or Biology at a suitable level, plus an equivalence certificate.",
        "Abroad, the UK, Canada, Australia, the US and Gulf states all read IB points and IGCSE-plus-A-Level results. Tutoring supports the grades, while applications are best done with a school counsellor and the official websites.",
      ],
      bullets: [
        "AIU equivalence covers Class 12 recognition",
        "NEET UG, JEE and CUET rules must be read from the latest notices",
        "Nagpur and Pune are the usual Indian university targets",
        "UK, Canada, Australia and the US understand IB and IGCSE results",
      ],
    },
    {
      heading: "IB Maths and the sciences: what should a Pusad student weigh before choosing?",
      paragraphs: [
        "Mathematics comes first because the choice affects everything after it. Analysis and Approaches develops algebra, calculus and proof for engineering and pure science; Applications and Interpretation builds statistics and modelling for business and social science. A tutor reads a student's early work and the intended course, and can advise before the school's window to switch closes.",
        "Higher Level sciences demand time. Physics, Chemistry and Mathematics at HL together with the Extended Essay and TOK make a heavy week, and a good tutor says so plainly. A balanced package usually beats an over-ambitious one that falls apart in year two.",
        "The sciences are taught as a loop of explanation, worked example and timed question, with the formula booklet open from the first lesson. School labs supply the practicals; the tutor reviews the method, the data, the graphs and the conclusion afterwards, and the report itself is never drafted for the student.",
        "Where lab access is limited, simulations and public datasets give extra analysis practice without pretending to replace real experiments.",
      ],
    },
    {
      heading: "IGCSE tiers and subject mix: how does a Pusad student decide?",
      paragraphs: [
        "IGCSE papers come in two tiers for many subjects. Core caps the grade at C, and Extended runs from A star downwards. A student who might continue Physics, Chemistry, Biology or Mathematics at A Level or the IB should sit Extended; one who will drop a subject after Grade 10 might sit Core if the school allows.",
        "A typical package has English, Mathematics, two or three sciences, Computer Science or Economics and a language. Hindi as a second language is offered on the Cambridge list, and Marathi is worth raising with the school because it is not always available.",
        "The two boards differ in layout and phrasing, so a student should stay with the one the school has chosen and give the tutor the exact code, such as 0580 or 4MA1.",
        "Finally, the series. Cambridge runs a separate February-March sitting in India as well as May-June and October-November, and revision must be planned backwards from whichever the school has booked.",
      ],
    },
  ],

  tutorsIntro:
    "Below are the sorts of IB and IGCSE specialists who teach Pusad students. Tell us a subject and level; we suggest one tutor and book an opening lesson at no charge.",
  process: [
    { title: "Message us the essentials", description: "Class, board, subject code and the date of the next assessment are all we need to begin." },
    { title: "Meet one suggested tutor", description: "A single tutor is recommended for that subject and board, with a brief profile." },
    { title: "Sit the opening lesson", description: "Your child tackles real questions live, and a parent is welcome to watch." },
    { title: "Review the note and rate", description: "A summary of strengths and gaps arrives in writing, along with the rate, with no obligation." },
    { title: "Carry on, reshape or swap", description: "Start regular lessons, change the pattern or ask for a different tutor." },
  ],
  whyPoints: [
    { title: "The same syllabus code", description: "Your tutor has taught the level or code on your child's timetable, so practice resembles the real paper." },
    { title: "Timed for a hot basin town", description: "Sessions sit in cooler evening hours and steer clear of sowing and festival weeks." },
    { title: "Plain about what online means", description: "Lessons are on screen; nothing suggests a tutor will arrive at a Pusad home." },
    { title: "Something in writing each time", description: "A short note after lessons shows what was covered and what to practise." },
    { title: "Guidance, not ghost-writing", description: "Tutors strengthen understanding and technique and never write assessed work." },
    { title: "Swap without fuss", description: "If the pairing is wrong, another tutor is found promptly." },
  ],

  faqs: [
    {
      question: "Is there an IB or IGCSE tutor I can use in Pusad?",
      answer:
        "Nobody on our team teaches face to face in Pusad, and specialists for these boards are almost absent from Yavatmal district. Our tutors work across India by live video, so your child can learn from a person who has taught this exact level and syllabus. The opening lesson is free, which is the simplest way to test whether the format works for you.",
    },
    {
      question: "Do you provide IB or IGCSE home tuition in Pusad?",
      answer:
        "What we provide is online home tuition: your child sits at home with a laptop and has a private lesson with a tutor elsewhere. Nobody visits a Pusad house, because home visits exist only in Gurugram and parts of Delhi NCR. You still get personal attention, a shared screen and notes in writing.",
    },
    {
      question: "Which schools within reach of Pusad teach IB or IGCSE?",
      answer:
        "We could not verify any in Pusad taluka. In Nagpur, D Y Patil International School at MIHAN, Centre Point School International, VIBGYOR World Academy and International School of Scholars are the ones we can point to. Hyderabad's Oakridge International School and Pune's boarding schools are further options. Confirm current affiliation with each before applying.",
    },
    {
      question: "What will lessons cost for a student in Pusad?",
      answer:
        "We give the figure only after learning what your child needs, because it depends on tutor seniority, course level, lesson length and how many lessons a week you choose. It is stated on paper before anything is paid, and the first lesson costs nothing. There is no separate bus or fuel bill to reach a teacher.",
    },
    {
      question: "Our son boards in Nagpur. Can lessons be fitted to his calendar?",
      answer:
        "Yes. Many boarders have lessons during Diwali or summer at home in Pusad, and some add a weekend session during term if the hostel lets students use a laptop. Send us the school's term dates early and we place blocks ahead of internal tests and mock exams.",
    },
    {
      question: "We are back from the Gulf. How do we keep the IGCSE going?",
      answer:
        "Tell us the last school's board and the subject codes. If your child is still entered for the exams, a tutor continues the same course; if you are moving to the State Board or CBSE, the tutor helps convert content and answer style. A short diagnostic lesson shows what has and has not been covered.",
    },
    {
      question: "Are tutors allowed to write the Internal Assessment or Extended Essay?",
      answer:
        "No. A tutor can explain the marking criteria, help narrow a research question and comment on structure, yet the IB requires every submitted piece to be the candidate's own, so nothing is written for the student. Your school will say how much outside help it accepts.",
    },
    {
      question: "How do we find out whether Cambridge or Edexcel applies?",
      answer:
        "Look at the exam entry or timetable issued by the school, where each paper has a code. For Mathematics, 0580 is Cambridge and 4MA1 is Edexcel. Send us that code and we look for a tutor who has handled the same specification.",
    },
    {
      question: "How early should revision for the May series begin?",
      answer:
        "Start about five months ahead, bring in timed papers at three months and leave the last fortnight for correcting old mistakes. In Pusad, December to March is the comfortable window for heavy work; by May the heat in this hilly basin makes afternoon study very hard.",
    },
    {
      question: "Is IB Maths really teachable over a screen?",
      answer:
        "Yes, and quite well. Student and tutor write on the same digital page, so a wrong line is caught while it is still fresh. Make sure your child owns an exam-approved calculator and has agreed the AA or AI course with the school.",
    },
    {
      question: "What happens with science practical work?",
      answer:
        "The experiments are carried out in the school lab. Afterwards, a tutor checks the method, data table, graphs and conclusion, which is where marks usually leak. If lab time is scarce, simulations offer extra practice with analysis, though the write-up remains the student's.",
    },
    {
      question: "Our signal is poor and power cuts are common. Can this still work?",
      answer:
        "Usually yes. We run a connection check before the trial and suggest a router position or mobile hotspot. If video breaks, the lesson can continue by voice with a shared document, and a session lost to a long cut is rebooked. Tell us in advance what your setup is like.",
    },
    {
      question: "Can my child keep Marathi or Hindi alongside an international course?",
      answer:
        "Often, yes. At the IB, Hindi B is widely taught and Marathi may be offered through a school-supported arrangement; at IGCSE, Hindi as a second language is on the Cambridge list. Your school will know what it runs, and the tutor prepares reading, writing and speaking in that format.",
    },
    {
      question: "May a parent sit in on lessons?",
      answer:
        "Certainly, at the opening lesson and afterwards if your child is comfortable. Plenty of parents are satisfied with the written note instead. Sitting in costs nothing and shows you how IB and IGCSE questions are phrased.",
    },
    {
      question: "What if the first tutor does not suit my child?",
      answer:
        "Say so, and another tutor is arranged without any need to explain. If you agree, the first tutor's notes are handed on so nothing is taught twice. Changing after a lesson or two is ordinary and quick.",
    },
    {
      question: "How do I begin from Pusad?",
      answer:
        "Write to us on WhatsApp at +91 7439 368 115 or by email at support@ibgram.com with the class, board, subject code and any deadline. One tutor is suggested, an opening lesson is fixed in the evening at no cost, and the rate follows in writing for you to think over.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Our all-India page, linking every city we serve." },
    { label: "IB and IGCSE tutors in Yavatmal", href: "/yavatmal/", description: "The district headquarters, with its own school and calendar notes." },
    { label: "IB and IGCSE tutors in Washim", href: "/washim/", description: "The nearest railway town, about 60 km from Pusad." },
    { label: "IB and IGCSE tutors in Nanded", href: "/nanded-waghala/", description: "The Marathwada city across the district line, with its airport." },
    { label: "IB and IGCSE tutors in Nagpur", href: "/nagpur/", description: "Vidarbha's hub for international schools." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Every IB subject we teach, with level notes." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel subject lists and how lessons run." },
    { label: "IB Diploma programme", href: "/programmes/dp/", description: "The Diploma explained: subjects, core and assessment." },
    { label: "IB PYP programme", href: "/programmes/pyp/", description: "How units of inquiry and the Exhibition work." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "How to choose between AA and AI, at HL or SL." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "The one place where tutors come to the house, in Delhi NCR." },
    { label: "Contact us", href: "/contact-us/", description: "Message or call to ask first or to book the trial." },
  ],

  closingHeading: "Arrange a free opening lesson in Pusad",
  closingBody:
    "Share the subject, the level and the date of the next assessment. You will receive one suggested tutor, a no-charge lesson timed to your evening, and afterwards a note and a rate in writing to weigh at your own pace.",
};
