import type { CitySeoPage } from "../types";

/**
 * /chirmiri/ - IB and IGCSE tutoring page for Chirmiri, Manendragarh-Chirmiri-Bharatpur district,
 * Chhattisgarh. No IB or Cambridge/Edexcel school in Chirmiri could be confirmed, so stripSchools is
 * empty and the clusters are labelled Raipur, Nagpur and nearby-town groups. Delivery is online;
 * in-person home tuition runs only in Gurugram and parts of Delhi NCR.
 */
export const chirmiri: CitySeoPage = {
  slug: "chirmiri",
  countryName: "Chirmiri",
  countryNameLong: "Chirmiri, Chhattisgarh",
  demonym: "Chirmiri",
  state: "Chhattisgarh",
  stateCode: "IN-CT",
  flagCode: "in",
  countryCode: "IN",
  region: "Chhattisgarh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Coalfield shift timings differ from home to home, so Chirmiri families pick slots term by term, and we keep Hareli, Teeja and Diwali weeks free",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.1953, longitude: 82.3398 },
  wikipedia: "https://en.wikipedia.org/wiki/Chirmiri",
  alternateNames: ["Chirimiri", "Chirmiri Koriya", "Chirmiri Chhattisgarh"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Chirmiri | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Chirmiri coalfield families in Chhattisgarh: DP, MYP, PYP and IGCSE, live one-to-one online private tuition, free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition at Home in Chirmiri",
  heroEyebrow: "IB & IGCSE TUITION FOR CHIRMIRI AND THE KORIYA COALFIELD",
  heroSubtitle:
    "A search for private tuition at home for IB or IGCSE in Chirmiri rarely turns up a local answer, because schools across this coalfield town teach the Chhattisgarh board or CBSE. IB Gram fills the gap online: a subject tutor for your child's precise course, one to one over live video, and a free first lesson before you commit to anything.",
  primaryKeyword: "IB and IGCSE tutors in Chirmiri",
  imageAltText: "Chirmiri student working through IB Biology notes with an online tutor over a laptop video call",
  secondaryKeywords: [
    "IB tutor Chirmiri",
    "IGCSE tutor Chirmiri",
    "IB home tuition Chirmiri",
    "IGCSE home tuition Chirmiri",
    "IB private tuition Chirmiri",
    "IB online tuition Chirmiri Chhattisgarh",
    "IGCSE online tuition Chirmiri",
    "IB DP tutor Chirmiri",
    "IB MYP tutor Chirmiri",
    "IB PYP tutor Chirmiri",
    "IB Maths tutor Chirmiri",
    "IGCSE Maths tutor Chirmiri",
    "IB Physics tutor Chirmiri",
    "IB Chemistry tutor Chirmiri",
    "IB Biology tutor Chirmiri",
    "IB tutor Baikunthpur",
    "IB tutor Manendragarh",
    "IGCSE tutor Koriya district",
    "Chirimiri IB tuition",
  ],

  heroTrustPoints: [
    "A tutor who has taught your exact IB course or IGCSE code, not a general subject teacher",
    "Everything is online in Chirmiri; home visits run only in Gurugram and parts of Delhi NCR",
    "One free lesson, a written note after each session, and a tutor swap on request",
    "No ties to the IB, Cambridge, Pearson or any school named here",
  ],
  heroStats: [
    { value: "Koriya coalfield", label: "Town and colliery families covered" },
    { value: "PYP to DP", label: "With Cambridge and Edexcel IGCSE" },
    { value: "IST", label: "Tutors in India, familiar hours" },
    { value: "Free trial", label: "Judge the fit before paying" },
  ],

  intro: {
    heading: "Who asks about IB and IGCSE in a coal town, and what they get",
    paragraphs: [
      "Chirmiri grew around its collieries. The Chirmiri coalfield, worked by South Eastern Coalfields, is among the oldest in central India, and the town sits in forested hill country in the north of Chhattisgarh, in the district that now carries the name Manendragarh-Chirmiri-Bharatpur. Schools here follow the Chhattisgarh Board of Secondary Education or CBSE, along with company-linked and trust-run campuses. We have not found any school in Chirmiri that has been confirmed to teach the IB or a Cambridge or Edexcel IGCSE.",
      "Families who search anyway tend to fit a pattern. Mining engineers and managers who have worked in several coalfields and expect a transfer within a few years. Doctors at the colliery hospitals with a child midway through an international syllabus elsewhere. Contractor and trading households whose children want an overseas degree. Families who moved from the Gulf or a metro and want a child's IGCSE or Diploma work to carry on without a break.",
      "Because IB Gram's home visits run only in Gurugram and parts of Delhi NCR, tuition in Chirmiri happens online. The tutor is in India, works on IST, and teaches live. Your child studies from home, in the room already used for homework, with a laptop and a notebook. The tutor writes on a shared whiteboard, marks practice papers as the student watches, and sends a short written note once the lesson ends.",
      "IB Gram is independent of the IB, Cambridge, Pearson Edexcel and every school. Tutors explain and coach. They do not write Internal Assessments, Extended Essays, Theory of Knowledge essays or any other assessed coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP support for students in town or at outlying collieries",
      "Cambridge and Pearson Edexcel IGCSE across Core, Extended, Foundation and Higher",
      "Lesson slots planned around shifts, school hours and power schedules",
      "A written fee quote after the free lesson",
    ],
  },

  programmesIntro:
    "No school in Chirmiri runs an IB programme, so each one reaches families through a transfer, a relative or online enrolment. The notes below describe who asks and what the tutor actually does.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Children explore themes through questions, projects and reflection rather than set textbooks, finishing with a group exhibition. Teachers observe and record growth instead of giving external exams.",
      countryNote:
        "PYP enquiries in Chirmiri typically come from mining and medical families who have just been transferred from a larger city, where their child was mid-way through inquiry units.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Student work is assessed against criteria across eight subject groups, and the Personal Project at the end is a self-managed piece of research or creation.",
      countryNote:
        "Chirmiri MYP students usually keep a Chhattisgarh board or CBSE timetable by day and use tutoring to preserve criterion-style writing for a future move to Raipur, Nagpur or another city.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects over two years, three or four at Higher Level, with an Extended Essay, TOK and CAS. Exams are held in May or November and are marked externally.",
      countryNote:
        "Diploma students in Chirmiri tend to be registered with a school or online provider elsewhere, so tutoring often teaches topics from scratch, most often Mathematics, Chemistry and Biology.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses sit with career-related study and a reflective project, designed for students with a practical or technical direction.",
      countryNote:
        "The CP is almost absent in Chhattisgarh, so enquiries from Chirmiri come from families planning a move to a school that offers it.",
    },
  ],

  subjectsIntro:
    "These are the subjects Chirmiri students request most often. If yours is missing, ask; the tutor pool is wider than one page can list.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions and proof, matched to engineering and mining-technology degrees." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics and modelling with technology, suited to biology, economics and social science." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, waves, fields and modern physics, with regular practice at written explanation." },
    { name: "Chemistry", levels: "SL and HL", description: "Energetics, equilibria and organic chemistry, with the quantitative questions Paper 2 likes." },
    { name: "Biology", levels: "SL and HL", description: "Cells, genetics, physiology and ecology, with careful work on command terms." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "An interdisciplinary course where forests, mining and land use give live examples." },
    { name: "Geography", levels: "SL and HL", description: "Resources, population and development, using coalfield and forest landscapes as case studies." },
    { name: "Economics", levels: "SL and HL", description: "Micro and macro, with resource economics and public-sector employment as context." },
    { name: "Business Management", levels: "SL and HL", description: "Case-based analysis of organisations, finance and operations." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming, algorithms and systems, with routine problem-solving practice." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Analysis and essay writing for students who speak Hindi or Chhattisgarhi at home." },
    { name: "Hindi B", levels: "SL and HL", description: "Structured Hindi for students who need exam-ready accuracy." },
    { name: "Psychology", levels: "SL and HL", description: "Research methods and studies with an internal experiment to plan." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching for knowledge questions and the exhibition; essays stay the student's own." },
  ],

  igcseSubjectsIntro:
    "IGCSE covers ages 14 to 16 and is offered by Cambridge and Pearson Edexcel. Codes and papers differ between them, so the first job is to confirm which one your child sits.",
  igcseSubjects: [
    { name: "Mathematics (Core, Extended, Foundation, Higher)", levels: "Cambridge 0580, Edexcel 4MA1", description: "The upper tier is the gateway to A Level and IB Mathematics." },
    { name: "Physics", levels: "Cambridge 0625, Edexcel 4PH1", description: "Forces, energy, electricity and waves, plus data-analysis questions." },
    { name: "Chemistry", levels: "Cambridge 0620, Edexcel 4CH1", description: "Atoms, bonding, reactions and basic organic chemistry." },
    { name: "Biology", levels: "Cambridge 0610, Edexcel 4BI1", description: "Living systems, inheritance and ecology with diagram work." },
    { name: "Combined Sciences", levels: "Cambridge 0653", description: "A single-award route covering all three sciences." },
    { name: "English as a Second Language", levels: "Cambridge 0510, 0511", description: "For students whose home languages are Hindi or Chhattisgarhi." },
    { name: "English First Language", levels: "Cambridge 0500", description: "Composition and comprehension for confident users." },
    { name: "Geography", levels: "Cambridge 0460", description: "Physical and human geography, with resource-extraction examples close to home." },
    { name: "Environmental Management", levels: "Cambridge 0680", description: "Resources, pollution and sustainability, relevant to a mining district." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Programming logic, data and networks." },
    { name: "Business Studies", levels: "Cambridge 0450", description: "Enterprise, marketing and finance." },
  ],

  regionsTitle: "Chirmiri, the collieries and the towns around",
  regionsIntro:
    "Online lessons do not depend on the address, but local context decides timing and practical arrangements. These are the parts of Chirmiri and its neighbours where our families live, with the notes they raise.",
  regions: [
    { name: "Chirmiri town centre", note: "The central market and residential lanes, where professional and business families live close to most of the town's schools." },
    { name: "Haldibari", note: "A colliery area with company housing; shift timings influence when students study, so evening slots are common." },
    { name: "Korea Colliery and Jhagrakhand", note: "Mining communities with their own quarters and schools; families here may have transfer postings at short notice." },
    { name: "Bharatpur (Janakpur)", note: "A neighbouring administrative town in the district, with government staff and farming households." },
    { name: "Baikunthpur", note: "The old seat of the Koriya estate, with a historic market; students commute to local schools." },
    { name: "Manendragarh", note: "The district headquarters, a railway and coal town to the west, with coaching and CBSE schools." },
    { name: "Kotma and Anuppur side", note: "Across the Madhya Pradesh border, where many Chirmiri families have relatives and compare boards and coaching." },
    { name: "Surajpur and Ambikapur direction", note: "Towards Sarguja, where larger schools and colleges are found; some families travel there for coaching." },
    { name: "Forest-edge hamlets", note: "Villages close to the Hasdeo forest belt where connectivity can vary; a trial call from the real study room is wise." },
  ],

  schoolClusters: [
    {
      city: "Chirmiri itself",
      note: "We could not confirm any school in Chirmiri offering the IB or a Cambridge or Edexcel IGCSE. Local schools follow the Chhattisgarh board or CBSE, so IB and IGCSE students here study privately online.",
      schools: [],
    },
    {
      city: "Nearby: Ambikapur and Bilaspur",
      note: "These are the larger towns within reach, but no international-curriculum school there has been confirmed either.",
      schools: [],
    },
    {
      city: "Nearby: Raipur",
      note: "The state capital is the main destination for Chhattisgarh families who want an international school; it is a long trip from Chirmiri and usually means boarding or relocation.",
      schools: ["Rungta International School"],
    },
    {
      city: "Further: Nagpur",
      note: "Some families with links to Maharashtra look at Nagpur, where several confirmed international schools operate.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service. It has no partnership with, and does not endorse, any school or board. Schools appear only to show what exists within reach of Chirmiri; a listing is not a claim that a place is available.",

  modesIntro:
    "Every Chirmiri session is live online, one to one. What varies is the pace and purpose, and three patterns account for most families.",
  modes: [
    {
      title: "Week-by-week support",
      description:
        "A regular slot with one tutor that follows the IB or IGCSE order of topics beside the Chhattisgarh board or CBSE school year.",
      bullets: [
        "Same tutor every week",
        "Short tasks between lessons",
        "Parent note after each session",
      ],
    },
    {
      title: "Pre-exam sprint",
      description:
        "Concentrated lessons in the weeks before a May or November series, centred on past papers, timing and mark schemes.",
      bullets: [
        "Timed papers and debriefs",
        "Gap list of weak topics",
        "Extra weekend sessions",
      ],
    },
    {
      title: "Posting bridge",
      description:
        "Short, focused teaching for a child whose parent has been posted to or from Chirmiri mid-course, so the syllabus does not stall.",
      bullets: [
        "A diagnostic first lesson",
        "Topic order matched to the next school",
        "Fortnightly review with parents",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Chirmiri, and where do families look?",
      paragraphs: [
        "There are none we can confirm in Chirmiri or in the district towns around it. The local school landscape includes Chhattisgarh-board schools, CBSE campuses, company-supported schools for the children of colliery employees, and a few private English-medium institutions. For a family that wants the IB Diploma or IGCSE, the nearest confirmed options are far away.",
        "Raipur, about half a day by road and rail, has a confirmed international school. Nagpur, further still, has several. Families in Chirmiri seldom relocate a child for this reason alone; more often a transfer in the parent's job decides the matter, and a subject tutor is needed to bridge the months in between.",
        "Mining and power careers shape these households. A manager or engineer who has worked in Jharia, Singrauli or Talcher may have a child used to an international syllabus from those postings. Doctors at colliery hospitals move between coalfields too. Their question is rarely where the nearest campus is, and more often how to keep a course moving until the next posting.",
        "We name schools only as confirmed context. Visit and ask about admissions, and keep in mind that IB Gram is a tutoring service and not a school.",
      ],
    },
    {
      heading: "Chhattisgarh board, CBSE, IGCSE and IB: what changes for a Chirmiri student?",
      paragraphs: [
        "A Class 10 student in Chirmiri typically sits the Chhattisgarh board examination or CBSE. Both rely on textbook coverage and accurate recall, often in Hindi medium. IGCSE keeps the content at a similar level but asks for application and explanation in English. The IB Diploma layers research, extended essays and internal assessments on top.",
        "The change is greater for a Hindi-medium student, who must learn English command words and scientific vocabulary along with the new style. Tutors build a short vocabulary list into the first lessons and give extra practice on writing in full sentences.",
        "The table sets the systems side by side for quick reading.",
        "Switching is possible. Content in maths and science carries across well; answer style, language and time management are what need retraining.",
      ],
      table: {
        caption: "Chhattisgarh board, CBSE, IGCSE and IB Diploma compared for Chirmiri families",
        columns: ["Feature", "Chhattisgarh Board", "CBSE", "IGCSE (Cambridge or Edexcel)", "IB Diploma"],
        rows: [
          ["Medium", "Hindi or English", "Hindi or English", "English", "English plus language options"],
          ["Emphasis", "Textbook recall", "Textbook and application", "Application and explanation", "Research, essays and exams"],
          ["Internal work", "Limited", "Practicals and projects", "Coursework in some subjects", "Mandatory internal assessments, Extended Essay, TOK"],
          ["Available in Chirmiri", "Yes", "Yes", "No confirmed school", "No confirmed school"],
          ["Entrance link", "CG PET, CG PMT, JEE Main, NEET", "JEE Main, NEET, CUET-UG", "Bridge to A Level or IB", "AIU equivalence, CUET-UG, overseas admissions"],
        ],
      },
    },
    {
      heading: "What shapes the cost of IB and IGCSE tuition in Chirmiri?",
      paragraphs: [
        "IB Gram does not publish a rate card. The fee for IB or IGCSE tuition in Chirmiri is confirmed in writing after a free first lesson. Understanding what moves it helps you judge any offer.",
        "The subject and level matter most. Higher Level Mathematics, Physics or Chemistry needs an experienced specialist and usually costs more than a Class 7 language lesson. The tutor's record with the exact board counts too. So do the number and length of weekly sessions, and the timing: demand peaks in the weeks before the May and November papers.",
        "Compare with real alternatives. A Chirmiri schoolteacher giving evening tuition may charge less, but often has not taught IB command terms or Cambridge Extended papers. Coaching in Bilaspur or Raipur involves long travel and lodging. Online one-to-one tuition with a course-matched tutor sits between them on price and ahead on fit.",
        "Ask what the quote covers: marked past papers, mock exams, written notes, missed-lesson policy. We list each in writing.",
      ],
      bullets: [
        "Level, subject and tutor experience set the hourly rate",
        "Session count and length change the monthly total",
        "Mock marking and feedback should be confirmed in the quote",
        "No fee is due before the free lesson and your decision",
      ],
    },
    {
      heading: "Online tuition, colliery-school teachers, coaching centres or self-study: which suits a Chirmiri student?",
      paragraphs: [
        "Chirmiri has a long tradition of tuition run by school teachers and mining-company staff, and families also travel to Bilaspur, Raipur or Ambikapur for coaching. These options work well for board and entrance exams. For IB and IGCSE, they need a second look, since the teacher may never have seen a Paper 2 or a Cambridge Extended paper.",
        "Online one-to-one tutoring chosen for the exact course matches the syllabus best, and saves the travel. It depends on reliable internet and a disciplined routine. Local tuition gives continuity and a familiar face but follows the board syllabus. Self-study suits motivated students who can mark themselves against published schemes.",
        "The table compares these routes using the points Chirmiri parents ask about.",
        "Many students combine routes, taking coaching for CG PET, JEE or NEET and online tuition for IB or IGCSE subjects. The tutor needs to know the full weekly load.",
      ],
      table: {
        caption: "Tuition routes for an IB or IGCSE student in Chirmiri",
        columns: ["Route", "Course fit", "Travel", "Attention", "Main caution"],
        rows: [
          ["Online one-to-one", "Tutor chosen for exact syllabus", "None", "Whole session", "Needs reliable broadband or a mobile back-up"],
          ["Coaching in Bilaspur, Raipur or Ambikapur", "Entrance exams and state board", "Long trips or hostel", "Shared in a batch", "Cost and time of travel"],
          ["Local teacher or company-staff tuition", "Board syllabus strength", "Short", "Some", "Little IB or Cambridge exam exposure"],
          ["Self-study", "Varies with resources", "None", "None", "No feedback on long answers"],
        ],
      },
    },
    {
      heading: "How do forests, monsoon and festivals shape the study year in Chirmiri?",
      paragraphs: [
        "Two sittings matter for the Diploma, May and November, and Cambridge IGCSE mirrors them with a May-June and an October-November series; Edexcel adds January. Private candidates across Chhattisgarh register at an exam centre in a larger city, and most pick May, which lets the last push run through winter into early spring.",
        "Chirmiri sits among forested hills, and its climate is somewhat gentler than the plains: winters can be properly cold, nights in December and January dip low, and summer heat arrives in April and May though with less of the dry plains edge. The monsoon is heavy. Between June and September, rain and storms can interrupt power and mobile networks, so a charged laptop and a phone hotspot are sensible.",
        "Festival rhythm is distinctly Chhattisgarhi. Hareli in July or August marks the start of the farming year, Teeja is observed by women in August or September, and Pola follows. Durga Puja and Dussehra bring a long break, and Diwali takes most of a week. Chherchhera in winter is a harvest festival. Good planning places these in the lesson calendar early.",
        "The shift patterns of the collieries add a further layer. Households with a parent on rotating shifts have irregular evenings, which is one reason we fix lesson slots for a term and revisit them when shifts change.",
      ],
      table: {
        caption: "Yearly plan for IB and IGCSE study from Chirmiri",
        columns: ["Window", "Academic event", "Local rhythm", "Suggested focus"],
        rows: [
          ["December to January", "Edexcel January series; IB mocks", "Cold nights, winter break", "Mock papers early in January"],
          ["February to April", "Build-up to May papers; board exams in February and March", "Warming days", "Timed papers and mark-scheme practice"],
          ["May to June", "IB and IGCSE May session", "Summer heat, monsoon arrives", "Early lessons and light review"],
          ["July to September", "IB results in July; new term", "Heavy rain, Hareli and Teeja", "Start new topics; plan for power cuts"],
          ["October to November", "IB November and IGCSE autumn exams", "Dussehra and Diwali", "Finish heavy topics before holidays"],
        ],
      },
    },
    {
      heading: "What can a Chirmiri student do after IB or IGCSE?",
      paragraphs: [
        "Routes from IB or IGCSE lead to Indian and overseas universities, each with its own paperwork. The Association of Indian Universities issues equivalence for the IB Diploma, and IB graduates apply to central universities through CUET-UG. JEE Main, NEET-UG and state entrance tests have eligibility rules that depend on subject combinations and certificate recognition, so check the current brochure before choosing subjects.",
        "Within Chhattisgarh, students consider AIIMS Raipur and the state's medical colleges for health sciences, NIT Raipur and private engineering colleges, Guru Ghasidas University at Bilaspur, and Sarguja University at Ambikapur for first degrees. Mining-linked families also look at the Indian Institute of Technology (ISM) Dhanbad for mining engineering, which is a typical target for colliery households.",
        "Abroad, British universities make offers on IB points and predicted grades, American colleges read the Diploma next to SAT or ACT results, essays and activities, and Canadian and Australian institutions use published conversion charts. A cousin or uncle overseas frequently fixes the country long before the subjects are chosen.",
        "Subject combinations are worth planning early: civil or mining engineering leans on Mathematics and Physics, medicine on Chemistry and Biology, and geology-linked courses on Chemistry and Geography. A tutor can lay out what each choice closes or opens, leaving the family to decide.",
      ],
      bullets: [
        "India: AIU equivalence, CUET-UG, NEET and JEE eligibility checks",
        "Chhattisgarh: AIIMS Raipur, NIT Raipur, Guru Ghasidas University and Sarguja University",
        "Mining-linked: IIT (ISM) Dhanbad and other engineering routes",
        "Abroad: UK via IB points, US via Diploma plus SAT or ACT, Canada and Australia via conversion tables",
      ],
    },
    {
      heading: "How do we teach IB Mathematics and the sciences online in Chirmiri?",
      paragraphs: [
        "The Diploma offers two Mathematics courses. Analysis and Approaches rewards a taste for algebra, calculus and proof, and Applications and Interpretation leans on data and modelling for biology, business and social science. Pick for the degree ahead, not for imagined difficulty.",
        "Each class opens on a shared whiteboard. The tutor and student go through the last set of problems, teach a fresh topic from the ground up, and close with questions in exam style. Working is marked line by line, because the Diploma gives credit for method, not merely the final figure.",
        "Science tutoring centres on turning remembered facts into reasoned answers. Command words such as justify, evaluate and deduce decide marks, so students rehearse them on real questions, with data interpretation and practical-skills items worked through in detail.",
        "Internal Assessments get guidance rather than ghost-writing. A tutor talks through feasible investigation ideas, reads the criteria with the student and reviews what has been produced, but the experiment, the numbers and the write-up belong to the student alone.",
      ],
    },
    {
      heading: "IGCSE tiers, private candidates and subject choices from Chirmiri",
      paragraphs: [
        "Every Cambridge subject that offers tiers splits into Core and Extended, and Edexcel offers Foundation and Higher. Choosing the lower tier limits the grade ceiling, which matters to anyone planning A Level or the IB in Mathematics or the sciences. For them, the upper tier is nearly always the sensible entry point.",
        "A common Chirmiri package pairs English and Mathematics with two or three sciences, a second language and a single elective. Geography, Environmental Management and Computer Science are popular here. A future doctor keeps Biology and Chemistry, while a future engineer needs Physics and the Extended or Higher Mathematics paper.",
        "Outside candidates in this state enter through an exam centre in a bigger city, because small-town schools rarely accept them. Practical papers, coursework and closing dates differ by board and subject, and they arrive early in the year. Tutors prepare the content and exam technique; centres deal with the paperwork.",
        "IGCSE grades help with entry to IB or A Level courses and feature in overseas applications, yet an Indian university will still ask for a recognised board certificate, so confirm what your target institution accepts.",
      ],
    },
  ],

  process: [
    { title: "Tell us about your child", description: "Send the class, programme, subject, board and any exam date by WhatsApp or email, and we will look for a tutor." },
    { title: "Sit a free lesson", description: "Your child works on a real topic with the tutor on video, with no payment and no commitment." },
    { title: "Receive the plan in writing", description: "You get a weekly schedule, a short study plan and the fee before you decide." },
    { title: "Study on a steady rhythm", description: "Live lessons on IST, with a written note after each session summarising what was covered." },
    { title: "Change as life changes", description: "If a posting, shift or exam date shifts, we reshape the timetable, or swap the tutor, at your request." },
  ],

  whyPoints: [
    { title: "Course-matched tutors", description: "We look for a tutor who has taught your exact IB course or IGCSE code." },
    { title: "Plain about online", description: "Home tuition in Chirmiri is online; tutors do not travel to Chhattisgarh." },
    { title: "Posting-friendly", description: "Lessons can continue wherever a transfer takes the family." },
    { title: "Coaching, not ghost-writing", description: "Tutors explain and give feedback but never write assessed work." },
    { title: "Clear written notes", description: "Parents see what was taught and what comes next." },
    { title: "Low-risk start", description: "A free lesson, a written quote and easy tutor changes." },
  ],

  tutorsIntro:
    "Our tutors teach live online on IST, so working with a Chirmiri student feels like working with one in any city. Each card lists programmes and subjects.",

  faqs: [
    {
      question: "Are there IB or IGCSE schools in Chirmiri?",
      answer:
        "We have not found one. Chirmiri's schools run the Chhattisgarh board or CBSE, and nothing here has been verified as an IB or Cambridge or Edexcel centre. Families either look at Raipur or Nagpur, sign up with an online school, or prepare privately, and in every case IB Gram can handle the subject teaching.",
    },
    {
      question: "Will a tutor visit our home in Chirmiri?",
      answer:
        "No tutor will arrive at a Chirmiri doorstep. Visits to homes are limited to Gurugram and parts of Delhi NCR, and everything else is delivered by live video with an India-based tutor in IST. A whiteboard is shared, written answers are marked while your child watches, and a summary note follows each class.",
    },
    {
      question: "How do I arrange IB home tuition in Chirmiri?",
      answer:
        "Start with a WhatsApp or email giving the syllabus, subject and year. A tutor is shortlisted and a free trial fixed. Since tutors do not travel to Koriya district, tuition at home in Chirmiri is a video lesson at your own study table. A written proposal with the fee arrives after the trial, and nothing binds you to continue.",
    },
    {
      question: "How much does IGCSE tuition cost in Chirmiri?",
      answer:
        "No list price exists. The cost reflects the subject and tier, how much experience the tutor has with that paper, and how many sessions a week you book. Extended or Higher papers and pre-exam months are pricier than a light weekly slot. You are sent the figure in writing after the free class, including what marking covers.",
    },
    {
      question: "Can my child take IGCSE as a private candidate from Chirmiri?",
      answer:
        "It is possible, and several students do it. Entry goes through an approved exam centre taking external candidates, typically in Raipur or Bilaspur, where the written papers are sat. Practical elements vary by subject and board. The tutor handles teaching and paper technique; the centre handles registration, dates and fees.",
    },
    {
      question: "Which IB Mathematics course should a Chirmiri student choose?",
      answer:
        "Work backwards from the degree. Analysis and Approaches is the stronger base for engineering, mining technology, physics and pure mathematics, whereas Applications and Interpretation fits economics, biology, business and social science. University pages state what they want. A tutor can set each course's sample questions in front of your child so the choice is informed.",
    },
    {
      question: "How is the IB different from the Chhattisgarh board?",
      answer:
        "Board papers reward faithful recall of the prescribed book, often in Hindi. The Diploma adds independent research, long written answers and internally assessed work, all in English. A student fluent in the textbook therefore still needs training in explaining, evaluating and structuring an argument, and that gap is where lessons normally start.",
    },
    {
      question: "Will tutors write my child's IA or Extended Essay?",
      answer:
        "Tutors will not write, rewrite or ghost any graded piece. What they will do is explain the marking criteria, discuss how to frame a research question, and react to a draft the student produced. The words, data and conclusions remain the student's; crossing that line endangers results and breaks exam-board rules.",
    },
    {
      question: "Which IGCSE boards do you cover?",
      answer:
        "Tutors here teach both boards. Send us the paper code, for example Cambridge 0625 Physics or Edexcel 4BI1 Biology, plus the tier, and a tutor who has already taught that paper is chosen. Question styles and mark schemes are not interchangeable between Cambridge and Edexcel, which is why the board comes first.",
    },
    {
      question: "What time are lessons for Chirmiri students?",
      answer:
        "Lessons run on Indian Standard Time. Families usually choose early morning, late afternoon or evening, fitting around colliery shifts and school hours, and avoiding Hareli, Teeja, Dussehra and Diwali weeks. You agree the pattern with the tutor and can change it each term.",
    },
    {
      question: "My child's parent is transferred often. Can lessons continue?",
      answer:
        "Yes. Online lessons follow the student, so a transfer to another coalfield or city does not end the tutoring. Tell us the programme, the year reached and the next exam date, and the tutor keeps the syllabus moving. Many mining and medical families in Chhattisgarh use this flexibility.",
    },
    {
      question: "Can my child study IB subjects alongside a Chhattisgarh board school?",
      answer:
        "It can be done, though the week needs careful budgeting. A typical Chirmiri pattern is one IB or IGCSE subject online after school, with the Chhattisgarh board or CBSE covering everything else; a few families enrol for a full online Diploma instead. The tutor helps set how many evening hours are realistic and keeps lessons out of unit-test fortnights and board-exam weeks.",
    },
    {
      question: "When are IB and IGCSE exams held?",
      answer:
        "Diploma papers are sat twice a year, in May and in November. Cambridge IGCSE uses a May-June series and an October-November series, while Edexcel adds a January window. Most Chhattisgarh private candidates aim for May. Dates, entry deadlines and fees move from year to year, so ask the exam centre you will use before planning backwards.",
    },
    {
      question: "Is the first lesson free?",
      answer:
        "The first session costs nothing and commits you to nothing. Your child logs in, tackles a genuine topic with the tutor and gets a feel for the pace and the screen-sharing. You then receive a written proposal with the fee. If the chemistry is wrong, a second tutor is arranged, and stopping after the trial leaves no bill behind.",
    },
    {
      question: "Can you support students aiming at mining or geology degrees?",
      answer:
        "Yes. Tutors teach the Mathematics, Physics, Chemistry and Geography that such degrees lean on, and explain how IB or IGCSE subject choices line up with entrance routes. Eligibility for Indian entrance exams depends on subject combinations, so check the current brochure. Internal assessments are guided, never written.",
    },
    {
      question: "How do I contact IB Gram?",
      answer:
        "Write to support@ibgram.com or send a WhatsApp message to +91 7439 368 115. A line about the class, the syllabus, the subject and the hours that suit your household is enough to begin. A shortlist follows, then the free session. IB Gram works independently of every school, the IB organisation, Cambridge and Pearson.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "How online tuition works in every city and town we serve." },
    { label: "IB and IGCSE tutors in Ambikapur", href: "/ambikapur/", description: "The larger Sarguja town to the north-west." },
    { label: "IB and IGCSE tutors in Bilaspur", href: "/bilaspur/", description: "A Chhattisgarh city with its own coaching and exam-centre notes." },
    { label: "IB and IGCSE tutors in Korba", href: "/korba/", description: "Another coal and power town in the state." },
    { label: "IB and IGCSE tutors in Raipur", href: "/raipur/", description: "The state capital and its confirmed international school." },
    { label: "IB tutors", href: "/ib-tutors/", description: "All IB programmes and subjects our tutors cover." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects, tiers and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the Diploma is structured and examined." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criteria and the Personal Project explained." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI compared." },
    { label: "Our tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send details and arrange a free lesson." },
  ],

  closingHeading: "Start with a free lesson from your Chirmiri home",
  closingBody:
    "Send a few lines about the class, the syllabus and the topic your child dreads, and a tutor who has handled it will be suggested. A no-cost video lesson comes first and a written plan second. Reach support@ibgram.com, or WhatsApp +91 7439 368 115.",
};
