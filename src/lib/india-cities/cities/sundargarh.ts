import type { CitySeoPage } from "../types";

/**
 * /sundargarh/ - IB and IGCSE tutoring page for Sundargarh, Odisha. Online-only delivery. No IB or
 * Cambridge/Edexcel school was confirmed in Sundargarh or Rourkela (see rourkela.ts), so stripSchools is empty and
 * the clusters reuse Bhubaneswar, Raipur and Kolkata names from bhubaneswar.ts and jharsuguda.ts, labelled as
 * nearby cities. Hockey facts (Cradle of Indian Hockey, Dilip Tirkey's village) checked on Wikipedia.
 */
export const sundargarh: CitySeoPage = {
  slug: "sundargarh",
  countryName: "Sundargarh",
  countryNameLong: "Sundargarh, Odisha",
  demonym: "Sundargarh",
  state: "Odisha",
  stateCode: "IN-OR",
  flagCode: "in",
  countryCode: "IN",
  region: "Odisha, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots are set around the April to June heat, the monsoon, Nuakhai, Karam, Durga Puja and Christmas weeks, and the hockey training and match calendar",
  lastUpdated: "2026-09-21",
  geo: { latitude: 22.12, longitude: 84.03 },
  wikipedia: "https://en.wikipedia.org/wiki/Sundargarh",
  alternateNames: ["Sundergarh", "Sundargarh Town", "Sundargarh Odisha"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sundargarh | Online One-to-One Tuition",
  metaDescription:
    "Live one-to-one IB and IGCSE tuition for Sundargarh, Odisha, the cradle of Indian hockey: DP, MYP, PYP and Cambridge or Edexcel IGCSE, with a free trial lesson.",
  h1: "IB and IGCSE Private Tuition at Home in Sundargarh, Online and One to One",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR SUNDARGARH, ODISHA",
  heroSubtitle:
    "Looking for IB or IGCSE home tuition in Sundargarh means looking past the district: its schools follow the Odisha Board, CBSE or ICSE, and the nearest IB and Cambridge schools we can name are in Bhubaneswar, Raipur and Kolkata. A live one-to-one lesson at the student's own desk fills the gap, timed around school, training and travel. Tutors do not visit homes in Sundargarh; in-person teaching exists only in Gurugram and parts of Delhi NCR.",
  primaryKeyword: "IB and IGCSE tutors in Sundargarh",
  imageAltText: "Sundargarh student with a hockey stick by the desk, in a live one-to-one online IB Mathematics lesson on a laptop",
  secondaryKeywords: [
    "IB tutor Sundargarh",
    "IGCSE tutor Sundargarh",
    "IB home tuition Sundargarh",
    "IGCSE home tuition Sundargarh",
    "IB private tuition Sundargarh",
    "IB Maths tutor Sundargarh",
    "IGCSE Maths tutor Sundargarh",
    "IB Physics tutor Sundargarh",
    "IB Chemistry tutor Sundargarh",
    "IB Biology tutor Sundargarh",
    "IB SEHS tutor Sundargarh",
    "IB DP tutor Sundargarh",
    "IB MYP tutor Sundargarh",
    "IB PYP tutor Sundargarh",
    "IGCSE online tuition Sundargarh",
    "Cambridge IGCSE tutor Sundargarh",
    "IB tutor Sundergarh",
    "IB tutor Rourkela side",
    "IB tutor Jharsuguda side",
    "online IB tutor Odisha",
  ],

  heroTrustPoints: [
    "Tutors are chosen for your child's exact IB subject or IGCSE code and level",
    "No tutor visits homes in Sundargarh; lessons are live, online and one to one",
    "A free trial lesson first, and a written quote before any booking",
    "IB Gram is unconnected to any Sundargarh or Rourkela school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "Online", label: "Live and one to one at home" },
    { value: "IST", label: "Slots around school and training" },
    { value: "PYP to DP", label: "With Cambridge and Edexcel IGCSE" },
    { value: "Free trial", label: "Before any fee is discussed" },
  ],

  intro: {
    heading: "IB and IGCSE tutoring in the cradle of Indian hockey",
    paragraphs: [
      "Sundargarh is the headquarters of Odisha's north-western district, a town of about 45,000 on the Ib river, and the district is known across India as a hockey nursery: Dilip Tirkey, Ignace Tirkey, Amit Rohidas and Birendra Lakra all come from here. Half its people belong to Scheduled Tribes, Odia shares the street with Sadri, Mundari and Kurukh, and schools follow the Odisha Board, CBSE or ICSE. A family that wants IB or IGCSE private tuition at home finds that nobody in town has taught those syllabuses.",
      "IB and IGCSE tutors in Sundargarh therefore teach over video, from other Indian cities, one student at a time. The format suits children who train seriously, since an evening lost to a camp or a match can be moved without a journey. The nearest railhead and airport are at Jharsuguda, roughly 30 km to the south, and the nearest confirmed IB and Cambridge schools lie far beyond it.",
      "The families who ask include engineers and managers in steel, cement and mining, doctors at the new Government Medical College and Hospital, district officers and teachers, and business families from Rourkela and Jharsuguda. Some are returning from a metro; some want a child ready for a school in Bhubaneswar or Kolkata; some want a serious athlete to keep an internationally accepted qualification within reach.",
      "Tutors explain, set work, mark papers and comment on drafts the student has written. They do not write Internal Assessments, Extended Essays, TOK essays or coursework. IB Gram has no link to the IB, Cambridge, Pearson or any school named here.",
    ],
    bullets: [
      "One student, one tutor, live at the home desk",
      "IB PYP, MYP, DP and CP, plus Cambridge and Pearson Edexcel IGCSE",
      "Lessons that can shift around training and match weeks",
      "A short written note after each class",
      "No home visits in Sundargarh; they run in Gurugram and parts of Delhi NCR only",
    ],
  },

  programmesIntro:
    "No school in Sundargarh teaches an IB programme, so each stage reaches a child through a school elsewhere, through private study beside an Odisha Board or CBSE timetable, or as preparation for a move. The summaries show what each stage expects and where a tutor is useful.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-11 (pre-school to Class 5)",
      description:
        "In the PYP a class follows a central idea, for instance how teams work together, through reading, number work, art and discussion. Children are not ranked; the Exhibition in the final year is their own inquiry. Tutors build reading fluency, number sense and the confidence to explain their thinking.",
      countryNote:
        "PYP enquiries from Sundargarh mostly concern a child who may move to Bhubaneswar, Kolkata or Raipur for school.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16 (Class 6-10)",
      description:
        "MYP marks depend on four criteria per subject, so a correct answer is not enough unless the skill behind it is shown. The Personal Project is the culmination, and tutors help a student choose a topic that can be finished. Criteria are explained in plain language and applied to the student's own work.",
      countryNote:
        "A typical Sundargarh MYP request is a student in Class 8 or 9 whose marks fell after moving from the Odisha Board.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Ages 16-19 (Class 11-12)",
      description:
        "The Diploma spreads six subjects across languages, sciences, mathematics, humanities and the arts, with TOK, the Extended Essay and CAS alongside. Sport can count towards CAS, which makes the programme a reasonable fit for an athlete. Papers are sat in May or November.",
      countryNote:
        "A Diploma student from Sundargarh is usually enrolled elsewhere or studying privately, so lessons follow that school's calendar.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Ages 16-19 (Class 11-12)",
      description:
        "The CP combines two or three Diploma subjects with career-related study, a reflective project and personal skills. India has few CP schools, so most requests concern a single course within a pathway.",
      countryNote:
        "CP questions from Sundargarh are rare, usually from students whose career plans involve sport or health.",
    },
  ],

  subjectsIntro:
    "Subject choices follow the destination: a future physiotherapist, engineer, economist or lawyer each needs a different Diploma. Once the mix is settled, a tutor is found for each course, and lessons follow the school's calendar and the exam month the student is working towards.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof. HL papers include long unfamiliar problems, so planning before calculating is taught early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Probability, statistics and technology. Hockey offers unusually rich data: goals, shots and penalty-corner conversions can drive an exploration." },
    { name: "IB Physics", levels: "HL / SL", description: "Motion, energy and fields in more depth than Class 12; ball bounce, turf friction or stick flex suggest realistic investigations." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Reaction rates, equilibrium and organic mechanisms are explained in writing; the chemistry of steel and cement is useful local context." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms and data interpretation, with human physiology close to an athlete's interests." },
    { name: "IB Sports, Exercise and Health Science", levels: "HL / SL", description: "Anatomy, energy systems and movement analysis, with an investigation that can use data from the student's own training." },
    { name: "IB Economics", levels: "HL / SL", description: "Mining royalties, steel prices and a district economy built on heavy industry supply real examples for micro and macro units." },
    { name: "IB Business Management", levels: "HL / SL", description: "Steel ancillaries, cement and transport firms illustrate operations and finance; case papers reward applied answers." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Mining, industrial emissions and the health of the Ib and Brahmani catchments give evaluation-ready case material." },
    { name: "IB Geography", levels: "HL / SL", description: "Resource extraction, urban growth around Rourkela and tribal land use offer real data and fieldwork settings." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Systems and logic papers, plus a program the student documents; a fixture or training-log tool suits a sporting household." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen-text analysis and comparative essays; a student who moves between Odia, Sadri or Hindi and English needs structured practice in formal writing." },
    { name: "IB Hindi & English B", levels: "HL / SL", description: "Hindi is widely understood here; assessed tasks still need an exact register and the right text type." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research on motivation, stress and performance fits a student athlete, provided studies are described accurately." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Seminar-style coaching on knowledge claims; the essay and exhibition are the student's alone." },
  ],

  igcseSubjectsIntro:
    "An IGCSE plan starts with board, code and tier, because Cambridge and Edexcel papers differ in wording and mark schemes even when titles match. Athletes and non-athletes alike then work backwards from the series chosen, leaving room for camps, festivals and the hot months.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Timed practice on full written solutions, because method marks reward showing every step." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and trigonometry ahead of IB Maths AA at Higher Level." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel's own question style and mark scheme, practised on its papers and examiner reports." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formula work and experiment description, with motion and energy questions that connect to sport." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, rates and identification tests, each needing both calculation and explanation." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Extended answers and data interpretation, including body systems and exercise." },
    { name: "IGCSE Physical Education 0413", levels: "Grade 9-10", description: "Theory plus practical coursework, so entry normally needs a school or centre that runs it; confirm before planning." },
    { name: "IGCSE Geography 0460", levels: "Grade 9-10", description: "Rivers, industry, settlement and development with data-response practice." },
    { name: "IGCSE First Language English 0500", levels: "Grade 9-10", description: "Descriptive and argumentative writing, plus reading for summary and inference." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, directed writing and speaking, and a steadying choice on a science-heavy list." },
  ],

  regionsTitle: "Sundargarh and its district: where we teach online",
  regionsIntro:
    "Every one of these places is served on screen, never by a visiting tutor. They are listed so lesson times can match how each household really lives: school buses, training hours, shift work and the summer heat.",
  regions: [
    { name: "Sundargarh town", note: "The district headquarters near the Ib river, with government offices, colleges and the Government Medical College and Hospital." },
    { name: "Ib river side", note: "Neighbourhoods on the town's northern edge, a landmark for local fieldwork and monsoon talk." },
    { name: "Medical college area", note: "Households of doctors, nurses and staff around the new medical college, which began MBBS teaching in 2022-23." },
    { name: "Saunamara", note: "The village where Dilip Tirkey was born, and a reminder that training in the district's hockey villages runs early and late." },
    { name: "Jharsuguda", note: "The railhead and airport town roughly 30 km south, used for trains towards Kolkata, Raipur and Mumbai." },
    { name: "Rourkela", note: "Odisha's third-largest city, with the steel plant, NIT Rourkela, the hockey stadium and the coaching market district families often use." },
    { name: "Rajgangpur", note: "An industrial and cement town in the district, where company transfers shape family plans." },
    { name: "Bonai and Lahunipara", note: "Forest and mining-belt towns in the north-east of the district, where a backup connection is wise." },
    { name: "Koira and the iron-ore belt", note: "Mining households whose work follows shifts, so lesson slots need to follow them." },
    { name: "Sambalpur road", note: "The state highway towards Jharsuguda and Sambalpur, along which families travel for colleges and hospitals." },
  ],

  schoolDisclaimer:
    "No school in Sundargarh, or in Rourkela nearby, could be confirmed as offering the IB, Cambridge IGCSE or Edexcel IGCSE, so the school strip is empty. The Bhubaneswar, Raipur and Kolkata schools named lower down were verified for other pages on this site and are listed only to help families who are considering boarding. IB Gram has no agreement with any of them, with steel, cement or mining companies, with hockey bodies, or with the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Sundargarh district and Rourkela",
      note: "Schools follow the Odisha Board, CBSE or ICSE. Our checks found no IB or Cambridge campus in Sundargarh or Rourkela.",
      schools: [],
    },
    {
      city: "Nearby: Jharsuguda and Sambalpur",
      note: "The railhead and the next city south. Neither turned up a confirmed IB or Cambridge school in our checks, so they matter mainly for travel.",
      schools: [],
    },
    {
      city: "Nearby: Bhubaneswar",
      note: "The state capital, a long rail journey away, with confirmed IB and Cambridge schools that some families weigh for boarding.",
      schools: ["KIIT International School", "SAI International School", "KT Global School"],
    },
    {
      city: "Nearby: Raipur and Kolkata",
      note: "Both lie along the main rail line. Raipur has Chhattisgarh's best-known IB school; Kolkata has long-established international schools.",
      schools: ["Rungta International School, Raipur", "Calcutta International School"],
    },
  ],

  modesIntro:
    "Everything is online, but three patterns cover most requests from Sundargarh, from a steady weekly class to lessons built around a sporting calendar.",
  modes: [
    {
      title: "Weekly lessons around school and training",
      description:
        "A fixed slot that sits between school hours and practice, with one tutor following the syllabus in sequence.",
      bullets: [
        "A slot chosen around practice times and school transport",
        "One tutor and one running record of progress",
        "Past papers marked and returned within days",
        "A short written note after every class",
      ],
    },
    {
      title: "Flexible lessons for a travelling athlete",
      description:
        "For a student with camps, selection trials and away matches, lessons are booked in short, movable blocks, and a shared plan records what has been covered so the tutor picks up where the last class ended.",
      bullets: [
        "Lessons can be moved around fixtures where the tutor is free",
        "A shared plan records what has been covered",
        "Worksheets can be done on the road",
        "Lighter weeks during tournaments, heavier ones after",
      ],
    },
    {
      title: "Exam-season push",
      description:
        "In the two months before a May or November sitting, lessons become more frequent and centre on timed papers and corrections, with the plan built backwards from the exam date.",
      bullets: [
        "Papers marked to the current specification",
        "Topics ranked by marks at stake",
        "Planned around Durga Puja and Christmas",
        "Eased back once the exams begin",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Sundargarh have an IB or IGCSE school, and where do families look?",
      paragraphs: [
        "No school in Sundargarh or in Rourkela nearby could be confirmed, in the directories and lists we checked. Schools across the district follow the Odisha Board, CBSE or ICSE. The nearest IB and Cambridge schools we can name are in Bhubaneswar, Raipur and Kolkata, each a long rail journey away. So IB and IGCSE tutors in Sundargarh teach online, and a family keeps its present school while the international course is studied beside it.",
        "Jharsuguda is the practical gateway. Its railway station is the nearest to Sundargarh and its airport is about 27 km from the town, so a boarding decision becomes a matter of trains or flights rather than highways. Even so, these are long journeys for a child of ten or fifteen, and families normally visit a school, ask for its current IB authorisation or Cambridge centre number and confirm boarding rules before deciding.",
        "Who asks? Steel, cement and mining professionals who have lived in metros, doctors and staff at the new medical college, officers posted to the district headquarters, teachers, and business families from Rourkela and Jharsuguda. A separate group are athletes and their parents: a student who might join a national squad or a university team abroad wants a qualification accepted everywhere, and IB or IGCSE results travel well.",
        "One rule matters early. The IB awards its Diploma only through authorised schools, so a student studying privately still needs a school to register them. Cambridge and Edexcel IGCSE papers can be taken through an approved exam centre that accepts private candidates, although subjects with coursework or practical tests may not be open. Finding a centre, probably in Rourkela, Sambalpur or Bhubaneswar, is the family's job.",
      ],
      table: {
        caption: "Reaching IB or IGCSE teaching from Sundargarh",
        columns: ["Place", "How families reach it", "What exists there"],
        rows: [
          ["Sundargarh and Rourkela", "Local", "Odisha Board, CBSE and ICSE schools; no IB or IGCSE campus confirmed"],
          ["Jharsuguda", "Roughly 30 km south; railhead and airport", "A gateway for trains and flights; no IB or Cambridge school confirmed"],
          ["Bhubaneswar", "A long rail journey", "Confirmed IB and Cambridge schools, some with boarding"],
          ["Raipur and Kolkata", "The main line, a long journey", "An IB World School in Raipur and long-established international schools in Kolkata"],
          ["Online tutor at home", "No travel", "Subject specialists matched to the course, from this week"],
        ],
      },
      bullets: [
        "No IB or IGCSE campus was confirmed in Sundargarh or Rourkela",
        "Jharsuguda, about 30 km away, is the railhead and airport",
        "Any school's current authorisation and boarding terms should be checked directly",
        "Online lessons can start now and continue through any move",
      ],
    },
    {
      heading: "Odisha Board, CBSE, ICSE, IB or IGCSE: what changes for a Sundargarh student?",
      paragraphs: [
        "The style of question changes before the content does. A Board of Secondary Education, Odisha paper often asks for a recalled definition or a textbook derivation, while an IGCSE or IB paper sets an unfamiliar situation and asks the student to reason from it. Learning that shift takes practice rather than extra reading, and tutors usually begin there.",
        "Timetables differ as well. Odisha's Matric papers come in February and March, and the Plus Two papers of the Council of Higher Secondary Education follow in March, with results dominated by those written exams. An IB student completes internal assessments across two years, and several IGCSE subjects add coursework or practical components. Athletes in particular must learn to slot long projects between training and travel.",
        "Language is another shift. Many students here live in two or three languages already, Odia with Sadri, Mundari or Kurukh at home and Hindi in the market, and treat English as a school subject. In an IB or IGCSE course English becomes the language of reasoning, so early lessons build subject vocabulary and timed writing alongside the content.",
        "A switch need not happen all at once. A student aiming at the Odisha Joint Entrance Examination or NEET can keep the state board or CBSE and add IGCSE Maths and Science as enrichment, while a family aiming abroad may move to the IB. A trial lesson shows the workload, which is the quickest way to decide.",
      ],
      table: {
        caption: "How the Odisha Board and CBSE compare with IB and IGCSE",
        columns: ["Aspect", "Odisha Board, CBSE or ICSE", "IB or IGCSE"],
        rows: [
          ["Usual question", "Define, state, derive from the textbook", "Explain, compare and evaluate using unfamiliar material"],
          ["Main exams", "February to March papers", "May or November series, plus internal work"],
          ["Language of reasoning", "Odia, Hindi or English medium", "English throughout, except language subjects"],
          ["Typical next step", "OJEE, JEE, NEET, CUET and Odisha colleges", "AIU equivalence, CUET and universities in India or abroad"],
        ],
      },
      bullets: [
        "The style of question is the first change",
        "English for reasoning takes deliberate practice",
        "Internal work has to be spread across weeks",
        "A trial lesson shows the workload before any decision",
      ],
    },
    {
      heading: "What goes into an IB or IGCSE tuition quote for a Sundargarh student?",
      paragraphs: [
        "A quote has three building blocks: the course and its level, the scarcity of the teacher's specialism, and the pattern of lessons, meaning how many hours a week and for how many weeks. Higher Level Physics taught by a tutor who knows the current guide is a narrower field than IGCSE Core English, and the rate reflects it. IB Gram quotes in writing before booking, and the trial lesson is free.",
        "Where you live adds nothing and removes nothing. Online teaching takes travel out of the picture, including the long road to Rourkela or Sambalpur that an academy or visiting tutor would otherwise require. For a household with a child who already travels for training, saving those extra hours on the road is worth more than a small difference in the hourly rate.",
        "Ask what a tutor has taught recently. A specialist who has marked mocks or coached students through the same paper can focus on the marks at stake, while one who is learning the syllabus spends early lessons catching up. The same number of hours can produce very different progress, so compare on recent experience rather than on the rate alone.",
        "Nothing is fixed in advance. Lessons pause for a tournament, a camp or a family event and restart without penalty, and a tutor can be changed if the fit is wrong. A price list would mislead, since a Class 6 MYP learner and a Class 12 HL student are different jobs; the written quote does the work instead.",
      ],
      bullets: [
        "Course level, scarcity of the specialism and weekly hours shape the rate",
        "Online teaching removes the cost of long journeys",
        "Recent syllabus experience matters more than the headline rate",
        "Written quote first; pauses carry no penalty",
      ],
    },
    {
      heading: "Rourkela coaching, a local tutor, self-study or an online specialist: which suits a Sundargarh student?",
      paragraphs: [
        "Coaching in Rourkela and further afield is built around JEE, NEET and Odisha Board results, and for those goals it gives structure and peers. It cannot offer an IB Biology HL or IGCSE Business class, because the batch does not exist, and its teachers are trained to mark state-board style answers, not IB criteria or Cambridge mark schemes. A long journey to attend it also costs study time.",
        "Local tutors are excellent for school subjects and younger children. Their gap is syllabus experience: few have taught an IB guide or a Cambridge specification, so questions about how an internal assessment is marked or how a command term changes an answer tend to go unanswered, through no fault of theirs.",
        "Self-study works for a disciplined student who has past papers, mark schemes and examiner reports. What it cannot supply is a second reader: someone to say that the exploration question is too wide, that the same error has recurred or that a paragraph proves nothing. That missing feedback is where students lose weeks, or marks.",
        "Online one-to-one lessons bring a specialist to a student's own desk, using a shared whiteboard, scanned working and marked papers. The only hard requirement is a dependable connection, and in hot, stormy months a backup plan is sensible. For students who train, the ability to move a lesson matters as much as the teacher.",
      ],
      table: {
        caption: "Support options compared for Sundargarh students",
        columns: ["Option", "Good for", "Gap for IB or IGCSE", "Travel needed"],
        rows: [
          ["Coaching in Rourkela", "JEE, NEET and board batches", "No IB or IGCSE batches", "Yes, often daily"],
          ["Local tutor", "School subjects and younger children", "Rarely taught an IB guide or Cambridge syllabus", "Usually short"],
          ["Self-study", "A disciplined student with papers to hand", "No expert reading of drafts", "None"],
          ["Online one-to-one tutor", "IB and IGCSE at any level", "Needs steady internet and a backup plan", "None"],
        ],
      },
      bullets: [
        "Coaching serves JEE, NEET and board results",
        "Local tutors suit school subjects and younger students",
        "Self-study lacks an informed second reader",
        "Online lessons bring course specialists to the home desk",
      ],
    },
    {
      heading: "How do hot summers, the monsoon, Nuakhai, Karam and Christmas shape the study year in Sundargarh?",
      paragraphs: [
        "Heat comes first. Summers here are extremely hot, with April to June afternoons that commonly pass 40 degrees, so serious study moves to the evening and exam weeks need a cool room, water and a power backup. The monsoon, bringing roughly 1,230 mm of rain a year to the town, runs from June to September and can interrupt power and signal.",
        "Festivals are frequent and varied in a district with many communities. Nuakhai, the western Odisha harvest festival, falls around August or September, Karam is celebrated by the Oraon, Munda and Kisan communities in the same season, Durga Puja and Diwali follow in the autumn, Sarhul marks spring, and Christmas matters to the district's large Christian community. Lessons pause on the main days and families plan ahead.",
        "Sport adds its own calendar. Training runs early and late to avoid the heat, camps and selection trials take students away for weeks, and major tournaments can fill a month. A lesson plan that shows exactly what has been covered lets a tutor restart after any absence without repeating work.",
        "Exams come around the same time as the harvest and festival months. Odisha's Matric and Plus Two papers are in February and March, Cambridge holds May-June and October-November series, Edexcel adds January, and the IB sits in May and November. A private IGCSE candidate can pick a series that avoids a training camp, while a student at a school elsewhere follows that school's dates.",
      ],
      table: {
        caption: "A Sundargarh year: weather, festivals, sport and study",
        columns: ["Months", "What shapes the household", "Study approach"],
        rows: [
          ["February to March", "Board exam papers; Holi and Sarhul", "Light lessons for students sitting Odisha Board papers"],
          ["April to June", "Extreme heat; Cambridge and IB May sessions", "Late-evening slots and a power backup"],
          ["July to September", "Monsoon; Nuakhai and Karam; tournament season", "Flexible slots and revision blocks between fixtures"],
          ["October to December", "Durga Puja, Diwali, Christmas; November exam sessions", "A push before Puja, a break, then mock papers"],
        ],
      },
      bullets: [
        "April to June heat moves study to the evening",
        "Monsoon storms can cut power and signal",
        "Nuakhai, Karam, Puja and Christmas each pause lessons",
        "Camps and tournaments call for movable slots",
      ],
    },
    {
      heading: "What do Sundargarh students do after IB or IGCSE?",
      paragraphs: [
        "Many look within Odisha first: NIT Rourkela for engineering, Utkal, Ravenshaw and KIIT for degrees, and the state's medical colleges, including the Government Medical College and Hospital in Sundargarh itself, for medicine. Delhi, Kolkata, Bengaluru and Pune draw others, and some aim for universities abroad, where sport and strong academics can be combined.",
        "Sport points some students towards sports science, physiotherapy, sports management and coaching, and the IB's Sports, Exercise and Health Science course is a natural start. Whatever the field, admission rules differ: NEET and JEE Main publish their own requirements for students of international boards, CUET-UG opens central universities, and the Odisha Joint Entrance Examination and state counselling carry domicile and board conditions that change by year.",
        "An IB or IGCSE record generally needs an Association of Indian Universities equivalence certificate for admission to Indian universities, so families should apply for it in good time. Universities abroad ask for predicted grades, references and personal statements roughly a year before the start date, and a student athlete may also be asked for sports records or videos.",
        "What a tutor does is the academic part: building subject strength, helping predicted grades rise where there is room and practising exam technique. The choice of course, the application essays and the forms belong to the student, the family and the school counsellor.",
      ],
      bullets: [
        "NIT Rourkela, Utkal, Ravenshaw and KIIT are familiar Odisha destinations",
        "Sports science and physiotherapy link naturally to the local athletic culture",
        "AIU equivalence, CUET, NEET and JEE each have their own rules",
        "Tutoring covers the subject, not application paperwork",
      ],
    },
    {
      heading: "IB Maths and the sciences around a student athlete's week",
      paragraphs: [
        "Mathematics is usually where state-board habits show most. A student used to short textbook sums meets Analysis and Approaches HL questions that run for a page with no hint of method. Early lessons build a routine of restating the problem, choosing a tool, calculating and sanity-checking. For an athlete short of time, that routine saves hours otherwise lost to avoidable errors.",
        "Applications and Interpretation suits students who like data, and hockey provides plenty: goals and shots per match, penalty-corner conversion rates, distance covered in training. An exploration must pose a question that the numbers can answer, use the student's own data collection and analyse it with suitable statistics. A student with a training log, or publicly available match statistics, has a head start.",
        "Physics and Chemistry reward justified answers with correct units and sensible precision. Motion, energy and friction link easily to sport, and an investigation might compare ball bounce on different surfaces or the effect of temperature on a gas-filled ball, provided it is safe and the student designs the method. Chemistry draws on the district's industrial setting, although school-level experiments must stay simple and approved.",
        "Biology, ESS and SEHS questions depend on the command term, and human physiology sits close to an athlete's concerns: heart rate, recovery, energy systems, hydration in the heat. A narrow, measurable question, chosen early and investigated twice, beats a broad one, and a tutor checks that the method is safe and the question realistic.",
      ],
      bullets: [
        "HL Maths: restate, choose a tool, calculate, check",
        "Maths AI explorations can use hockey statistics or a training log",
        "Sports investigations must be safe, measurable and the student's own",
        "SEHS, Biology and ESS reward precise use of command terms",
      ],
    },
    {
      heading: "Core or Extended, Cambridge or Edexcel: an IGCSE plan for Sundargarh",
      paragraphs: [
        "IGCSE begins with a tier decision. Extended papers can earn A* to E and keep the Diploma, A Levels and overseas study open; Core caps at C, which suits a student whose priorities lie elsewhere. A student who trains seriously may be tempted by the lighter tier, but taking the first mock at Extended shows whether it is manageable before committing.",
        "A typical private list holds English, Mathematics, two sciences and two or three others. Geography 0460 fits a district of rivers, mining and steel. Physical Education 0413 links to sport but carries practical coursework, so it normally needs a school or centre that runs it and should be confirmed before planning. Hindi as a Second Language 0549 balances a science-heavy list.",
        "Universities accept Cambridge and Edexcel equally, so the board is chosen on practical grounds: exam series dates, availability of past papers and examiner reports, and which specification the tutor taught most recently. Additional Mathematics 0606 is worth adding for a student who expects to take IB Maths AA at Higher Level.",
        "Entry belongs to the family. A private candidate must find an approved centre that accepts external entries, and centres set their own deadlines and fees well ahead of each series. Ask early which subjects it accepts, since practical and coursework-based subjects are often restricted. Rourkela, Sambalpur and Bhubaneswar are the likeliest places to ask.",
      ],
      bullets: [
        "Extended keeps the later options open",
        "Geography and Hindi suit many local students",
        "Choose the board on series dates, papers and tutor experience",
        "Confirm centre rules and deadlines early",
      ],
    },
  ],

  tutorsIntro:
    "Tutors suggested to Sundargarh families teach from other Indian cities and cover the IB from PYP to DP as well as Cambridge and Edexcel IGCSE. Each is chosen for your child's subject, level and exam series, and the free first lesson lets you see the fit for yourself.",

  process: [
    { title: "Send the student's details", description: "Name the course or board, subject and level, latest marks, exam series and the times that work around school and training." },
    { title: "Receive a tutor match", description: "One or two suggestions arrive, each with a short note on the syllabus they have recently taught." },
    { title: "Take the trial lesson", description: "A full live lesson on a real topic, free of charge, with no decision needed on the day." },
    { title: "Agree a first-month plan", description: "A written list of topics and slots, which you may change before it begins." },
    { title: "Review as you go", description: "Weekly lessons with a note after each and a short review every few weeks." },
  ],

  whyPoints: [
    { title: "Course-specific tutors", description: "Matching by syllabus code and level rather than by subject heading." },
    { title: "Fits a training timetable", description: "Slots move around camps and matches, with a shared plan so nothing is repeated." },
    { title: "No road to Rourkela", description: "A lesson at home saves the long journey to a coaching centre." },
    { title: "A free first lesson", description: "You see the teaching before any fee is discussed." },
    { title: "The student's own work", description: "Tutors guide IAs and essays but never write them." },
    { title: "Simple to change", description: "No long contract, and a quick swap if the tutor is not right." },
  ],

  faqs: [
    { question: "Who can teach IB Physics to a student in Sundargarh?", answer: "A tutor from another Indian city who has taught the course. Nobody in Sundargarh has taught the IB Physics guide, so we match by level and exam date, propose a tutor with recent experience of that syllabus and arrange a free online lesson at a time that fits the student's school and training." },
    { question: "Can a tutor visit our home in Sundargarh?", answer: "No. Home visits run only in Gurugram and parts of Delhi NCR, so in Sundargarh every lesson is online and one to one. The student sits at home with a laptop or tablet, sees and hears the tutor and writes on a shared whiteboard; marked papers come back as scans or photographs." },
    { question: "Is there any IB or IGCSE school in Sundargarh or Rourkela?", answer: "None that we could confirm. Schools follow the Odisha Board, CBSE or ICSE. The IB and Cambridge schools we can name are in Bhubaneswar, Raipur and Kolkata, including KIIT International School, Rungta International School and Calcutta International School. Check any school's current authorisation and boarding terms with it directly." },
    { question: "My son plays hockey at state level. Can lessons work around training and camps?", answer: "Yes. Lessons can be scheduled in short slots around training, moved when a camp or trial intervenes, and supported by a shared plan that records what has been covered, so a tutor restarts without repetition. A longer absence can be handled with a catch-up block when the student returns." },
    { question: "Would an IB Sports, Exercise and Health Science tutor be available?", answer: "Possibly; availability depends on the tutor pool and is confirmed in the proposal before the trial. The subject covers anatomy, energy systems and movement analysis, with an investigation in which a student can use data from their own training. The tutor coaches method and writing but never does the investigation." },
    { question: "What does IB or IGCSE tuition cost for a Sundargarh student?", answer: "There is no fixed price list, because a Class 6 MYP student and a Class 12 HL student need very different teachers. After you describe the course, a written quote arrives before booking. The trial is free, travel adds nothing because lessons are online, and a family can pause for a tournament or stop at any time." },
    { question: "We speak Odia at home. Is English a barrier?", answer: "It is a bridge to cross, not a wall. Tutors start from the student's own papers to see where the ideas are sound and where language is the obstacle, then build subject vocabulary, sentence frames for explaining and timed writing into the first months. Students used to switching between Odia, Sadri or Hindi have a useful habit to build on." },
    { question: "Can a private IGCSE candidate find an exam centre near Sundargarh?", answer: "Often, but it takes early planning. Cambridge and Pearson list approved centres, and some take external candidates for certain subjects. Rourkela, Sambalpur and Bhubaneswar are the likeliest places to ask. The family handles the entry and deadlines while the tutor prepares the student, and coursework or practical subjects may not be open to private candidates." },
    { question: "How far can a tutor help with an IA or Extended Essay?", answer: "Tutors explain the criteria, test whether a question is workable, flag weak reasoning and comment on drafts the student has written. They never write or rewrite assessed work, because that breaks IB integrity rules. The same line holds for TOK essays and IGCSE coursework, and requests to cross it are politely declined." },
    { question: "Which Diploma subjects are available online?", answer: "Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Geography, English A, Computer Science, Psychology, Environmental Systems and Hindi B, with TOK and Extended Essay guidance. Sports, Exercise and Health Science depends on tutor availability. If your subject is missing, ask, and we will check the pool first." },
    { question: "Are younger PYP and MYP students taught too?", answer: "Yes. PYP children get short, lively sessions on reading, number sense and the questions behind the Exhibition; MYP students work on criteria, written explanations and the Personal Project. Younger learners usually do better with two brief sessions a week than one long one, and tutors plan around their energy." },
    { question: "What about summer heat and power cuts?", answer: "Tell us beforehand and the plan adapts. Lessons move to the evening in April to June, a phone hotspot or small inverter covers short cuts, and any class that drops can be resumed or rescheduled. In the hottest weeks, shorter and more frequent sessions can work better than long ones." },
    { question: "When is the best time to start?", answer: "As early in the course as possible: Grade 9 for IGCSE and Class 11 for the Diploma. Early lessons repair foundations before mocks and predicted grades count. Students already in Class 10 or 12 can still gain by targeting past papers and the topics carrying the most marks, though there is less room to improve." },
    { question: "How do you choose tutors for Sundargarh students?", answer: "We look at qualifications, how recently the tutor taught the exact syllabus and how they apply the assessment criteria. Because Sundargarh has no specialist pool, recent experience of the course is the test that matters, and the free first lesson lets you check it yourself before committing to anything." },
    { question: "What if we are not happy with the tutor?", answer: "Tell us and we will propose someone else, without awkwardness. Reviews happen every few weeks anyway, and because there is no contract, pausing or stopping costs nothing. A good match matters more than politeness, and a change in the second week is much easier than one in the fourth month." },
    { question: "Is IB Gram linked to a school, a hockey body or an exam board?", answer: "No. IB Gram is an independent tutoring service with no link to any school in Sundargarh, Rourkela or beyond, to any hockey association or academy, to steel, cement or mining companies, to the IB organisation, to Cambridge or to Pearson Edexcel. Names on this page describe the setting and are not endorsements." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "How online IB and IGCSE tuition is offered in towns and cities across the country." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The place where home visits run, with school and sector notes." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel IGCSE compared by code, tier and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Six subjects, the core and how internal assessment counts." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria-based marking and the Personal Project explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Learning through inquiry units, ending in the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "How to choose between the two IB Maths courses." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles sorted by subject, programme and background." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Describe your child's course and request a free trial lesson." },
    { label: "IB and IGCSE tutoring in Rourkela", href: "/rourkela/", description: "Odisha's steel city and hockey stadium, in the same district." },
    { label: "IB and IGCSE tutoring in Jharsuguda", href: "/jharsuguda/", description: "The nearest railhead and airport town to Sundargarh." },
    { label: "IB and IGCSE tutoring in Sambalpur", href: "/sambalpur/", description: "The western Odisha city on the Mahanadi, reached by the same highway." },
  ],

  closingHeading: "Book a free trial lesson for your child in Sundargarh",
  closingBody:
    "Send IB Gram your child's course or board, subject and level, latest marks and the hours that work around school and training. IB and IGCSE tutors in Sundargarh teach online and one to one, and a proposed tutor and trial time come back at no cost and with no commitment. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
