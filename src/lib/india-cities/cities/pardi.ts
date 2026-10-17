import type { CitySeoPage } from "../types";

/**
 * /pardi/ - IB and IGCSE tutoring page for Pardi, Valsad district, Gujarat. No school in the town
 * could be confirmed as teaching the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and
 * clusters point honestly to Surat and Mumbai. Online-only delivery: home visits run only in
 * Gurugram and parts of Delhi NCR. Rendered with the shared CountryLanding layout.
 */
export const pardi: CitySeoPage = {
  slug: "pardi",
  countryName: "Pardi",
  countryNameLong: "Pardi, Gujarat",
  demonym: "Pardi",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots are kept clear of Navratri nights, the Uttarayan kite weekend, the Diwali break and the heaviest July downpours",
  lastUpdated: "2026-09-21",
  geo: { latitude: 20.5167, longitude: 72.9500 },
  wikipedia: "https://en.wikipedia.org/wiki/Pardi",
  alternateNames: ["Pardi Valsad", "Pardi Gujarat", "Killa Pardi"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Pardi, Gujarat | Online Tuition",
  metaDescription:
    "IB and IGCSE tutors for Pardi, Valsad district: PYP to Diploma and Cambridge or Edexcel IGCSE, one-to-one video lessons at home near Vapi, free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Pardi, Gujarat",
  heroEyebrow: "PRIVATE ONLINE IB AND IGCSE TUITION IN PARDI, VALSAD DISTRICT",
  heroSubtitle:
    "Searching for private tuition at home in Pardi for an IB or IGCSE child leads to one practical answer: a live class over a laptop with a tutor who has taught the precise paper. Nobody from IB Gram visits Pardi houses, because home visits run only in Gurugram and parts of Delhi NCR. National Highway 48 cuts through the town, Valsad is fourteen kilometres north, and no IB or Cambridge classroom is confirmed nearby.",
  primaryKeyword: "IB and IGCSE tutors in Pardi",
  imageAltText: "A Pardi student in Gujarat practising IB Chemistry calculations on a laptop while her online tutor watches over video",
  secondaryKeywords: [
    "IB tutor Pardi",
    "IGCSE tutor Pardi",
    "IB home tuition Pardi",
    "IGCSE home tuition Pardi",
    "IB private tuition Pardi",
    "IB Maths tutor Pardi",
    "IGCSE Maths tutor Pardi",
    "IB Physics tutor Pardi",
    "IB Chemistry tutor Pardi",
    "IB Biology tutor Pardi",
    "IB DP tutor Pardi",
    "IB MYP tutor Pardi",
    "IB PYP tutor Pardi",
    "IGCSE online tuition Pardi",
    "Cambridge IGCSE tutor Pardi",
    "IB tutor Pardi Valsad",
    "online IB tutor Vapi",
    "IGCSE tutor Udvada",
    "IB tutor Killa Pardi",
  ],

  heroTrustPoints: [
    "Each shortlist starts from your child's paper code, level and board and never from a vague IB or IGCSE tag",
    "Teaching is live on screen; a tutor at the door is a Gurugram and Delhi NCR arrangement only",
    "Your child sits a whole trial class before you commit to anything",
    "IB Gram stands apart from every school, board and university named on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "The whole IB range" },
    { value: "CAIE & Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "One time zone" },
    { value: "Free trial", label: "Judge it first" },
  ],

  intro: {
    heading: "Why a Pardi family might want an IB or IGCSE tutor",
    paragraphs: [
      "Pardi is a municipality of about twenty-eight thousand people, fourteen kilometres south of Valsad, and National Highway 48 and the Mumbai to Vadodara railway line pass straight through it. That position matters more than size. Trains run to Mumbai and Surat, the Vapi industrial belt is next door, and many households have a member working in a chemical plant, a bank, a shipping office or a business in Mumbai.",
      "Pardi's classrooms mostly teach the Gujarat board in Gujarati or English medium, with a few CBSE schools mixed in. No school here, or in neighbouring Vapi, could be confirmed for the IB or a Cambridge or Edexcel IGCSE. Plain honesty serves a family better than a padded list of names, because someone arranging tuition must know exactly what exists.",
      "So who asks? Mostly three kinds of parent. There are engineers and managers from the Vapi estates who moved from Pune, Bengaluru or abroad with children already on an international course. There are Mumbai-linked families who keep a home in Pardi but watch the school market in the city. And there are ambitious local households who want an overseas-recognised qualification without sending a thirteen-year-old away.",
      "IB Gram has no connection with any school, board or examining body mentioned in these pages. Tutors teach, set questions and mark honestly; assessed pieces such as Internal Assessments and Extended Essays are never written for a student.",
    ],
    bullets: [
      "IB teaching from primary years to the Diploma, for a town without an IB school",
      "Cambridge and Pearson Edexcel IGCSE, planned by paper code and tier",
      "Private video lessons in Indian Standard Time",
      "A few lines of feedback after each class and a plan after the trial",
      "Tutors never visit Pardi homes; visits run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is taught in Pardi as far as we can confirm, so each reaches a household indirectly: by relocation, by a hostel place in another city, or by a plan to begin IGCSE at Grade 9. This is what each stage tends to look like from the Valsad side of the highway.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Learning is built around themed units of inquiry, not separate textbooks, and the last year ends with an Exhibition the child plans and presents. Since nobody external marks it, effective help is quiet: reading aloud, comfortable arithmetic and the habit of turning curiosity into a researchable question.",
      countryNote:
        "In Pardi the PYP question almost always comes from a family relocated for work in the Vapi industrial belt, hoping a young child can carry over earlier habits.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Teachers grade MYP subjects on four criteria, and Year 5 closes with a Personal Project. Many children who know their material still lose marks because they never address the criterion in front of them.",
      countryNote:
        "With no MYP school nearby, Pardi children take it through an outside school or use it as early groundwork for IGCSE.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A Diploma candidate studies six subjects, three of them at Higher Level, together with Theory of Knowledge, the Extended Essay and a service requirement. Marks from internal assessments flow into most subject grades, and the main written papers arrive in May.",
      countryNote:
        "A Diploma student with Pardi roots typically boards in Surat or Mumbai, so lessons follow the hostel school's term dates rather than the town's.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Here at least two Diploma subjects join career-related study and a reflective project. Hardly any Indian school offers the route, but the Diploma subjects inside it are taught with full rigour.",
      countryNote:
        "Hardly anyone asks about CP from Pardi; when someone does, support goes to the Diploma courses within the chosen pathway.",
    },
  ],

  subjectsIntro:
    "A student from the Gujarat board or CBSE usually works hard and knows a lot. The adjustment is that IB and IGCSE questions often begin with a verb such as assess, justify or distinguish, and a list of facts will not answer them. Each class therefore runs against a named subject, level and paper, beginning with how the question is worded.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof carry the course, and HL Paper 3 sets problems that fit no worked example, so we rehearse where to start." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, probability and modelling meet graphic-calculator skill. An exploration works best when its data was gathered a term early." },
    { name: "IB Physics", levels: "HL / SL", description: "Class 12 mechanics gives a good base; uncertainty, graph analysis and experimental design are new, and they drive the investigation mark." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles are rarely the problem. Marks leak away in organic mechanisms and in explanations that stop one sentence early." },
    { name: "IB Biology", levels: "HL / SL", description: "Vocabulary comes easily; matching an answer to the command term and defending an investigation statistically do not." },
    { name: "IB Economics", levels: "HL / SL", description: "A well-labelled diagram tied to an actual event beats a page of theory, and HL adds a data-driven policy paper." },
    { name: "IB Business Management", levels: "HL / SL", description: "Gujarat's trading culture helps: answers score by engaging with the firm in the case, and the internal project needs a real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Gujarati-speaking students often read deeply but need practice writing a timed commentary on an unseen text in English." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms on paper and the working software for the internal assessment are different skills, so each is practised separately." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be recalled accurately and then used as evidence inside an argument that runs for a full essay." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "The Valsad coast, industrial effluent near Vapi and heavy south Gujarat rainfall give vivid case material for evaluating systems." },
    { name: "IB Geography", levels: "HL / SL", description: "Named places and measured data lift answers above generalities, and fieldwork must follow a method someone else could repeat." },
    { name: "IB History", levels: "HL / SL", description: "Weighing sources and sustaining an argument are tested in different papers and trained separately." },
    { name: "IB Gujarati A / Hindi B", levels: "HL / SL", description: "Gujarati as a first language is a genuine strength for a Pardi student; Hindi B centres on unseen reading and spoken ease." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation is the best preparation: defending a prescribed title from the side you would not choose sharpens the essay." },
  ],

  igcseSubjectsIntro:
    "Most IGCSE subjects come in two tiers, which cap the grade. Pick wrongly and a student can work hard for a result that cannot rise past the ceiling. Hence the first job is agreeing the exam board, the code and the sitting a child is entered for.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended papers punish missing working; a tidy layout still earns method marks when arithmetic slips." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, vectors and identities appear early, a useful runway before IB Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Content overlaps heavily with Cambridge but the wording of questions differs, which is why genuine Edexcel papers are used for practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations quickly and the alternative-to-practical paper each receive dedicated practice." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, reaction rates and organic families run alongside the practical-skills paper through the year instead of piling up at the end." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and human body systems keep returning in extended answers, where how you build the response matters nearly as much as what you remember." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams are the early win; evaluation in longer answers is where grades separate." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Trace tables make sense once real Python has been written, so each topic includes coding." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Timed practice on unseen passages builds summary and directed writing faster than memorised phrases." },
    { name: "IGCSE Gujarati and Hindi as a second language", levels: "Grade 9-10", description: "Weekly reading and speaking practice, one to one, suits language papers well." },
  ],

  regionsTitle: "Pardi and the places around it that our online lessons reach",
  regionsIntro:
    "Because a class needs only a laptop and a decent line, this list is background rather than a service map: it shows where families live, what stands nearby and which cities they look to. Some names belong to neighbouring towns and not to Pardi.",
  regions: [
    { name: "Pardi town centre", note: "The bazaar and main roads on either side of National Highway 48, where trading families live close to the town's older schools." },
    { name: "Pardi railway station area", note: "Households near the Western Railway line, many with a member who commutes to Vapi, Valsad or Mumbai." },
    { name: "National Highway 48 corridor", note: "The strip of newer housing and shops along the highway, popular with families working in nearby industry." },
    { name: "Killa Pardi", note: "A neighbouring locality with its own history, close enough that its families share schools, markets and relatives with Pardi." },
    { name: "Udvada", note: "A short drive north, famous for the Parsi fire temple, and a small community with its own educational traditions." },
    { name: "Vapi", note: "The industrial town and GIDC estate to the north, where many Pardi parents work and where a larger tuition market exists." },
    { name: "Valsad", note: "The district headquarters about fourteen kilometres north, with colleges, hospitals and the usual reference point for official work." },
    { name: "Atul township", note: "A well-known company township nearby, home to professional families who think in terms of boards and degrees beyond Gujarat." },
  ],

  schoolDisclaimer:
    "None of the schools in Pardi, Vapi or Valsad could be confirmed as teaching the IB or Cambridge or Edexcel IGCSE, so none is called local. Surat and Mumbai names below show where some families look. IB Gram operates independently, with no contract, referral fee or endorsement involving any school, the International Baccalaureate, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Pardi and Valsad district",
      note: "Schools here teach to the Gujarat board or CBSE. Nothing in the way of IB or IGCSE teaching could be confirmed, so the specialist syllabus comes through online tutoring.",
      schools: [],
    },
    {
      city: "Nearby: Surat",
      note: "The nearest large city with confirmed IB and Cambridge schools, a couple of hours away by rail or road. Many intakes are boarding-led, so the student is away during term.",
      schools: ["Fountainhead School", "P. P. Savani Cambridge International School", "Aarth Universal School"],
    },
    {
      city: "Nearby: Mumbai",
      note: "Reachable on the Western Railway line, Mumbai has the widest choice of IB and Cambridge schools in the region. Families who relocate or send a child to board usually look here.",
      schools: ["American School of Bombay", "JBCN International School"],
    },
  ],

  modesIntro:
    "All three formats are private and live, taught on Indian Standard Time by a person picked for the paper code, and differ only in pace. No tutor visits Pardi; visits to homes exist solely in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Regular weekly video class",
      description:
        "One fixed hour each week, a shared whiteboard and the child's own notes and past papers. It is the standard format and the sturdiest base across a school year.",
      bullets: [
        "Tutors from anywhere in India, matched by course",
        "Fits DP, MYP and either IGCSE board",
        "Working shown live on screen",
        "The same tutor through the term",
      ],
    },
    {
      title: "Light plan with written reviews",
      description:
        "A lighter weekly class, a written summary after each one and a proper progress review every month. Younger children and parents who like clear reports without a crowded timetable tend to prefer it.",
      bullets: [
        "A short note after each class",
        "Goals reviewed regularly",
        "Well suited to PYP and early MYP",
        "Extra classes before tests",
      ],
    },
    {
      title: "Pre-exam intensive",
      description:
        "Several classes a week across a few weeks ahead of mocks or board papers, organised around timed questions and swift marking.",
      bullets: [
        "Papers marked to current schemes",
        "Comments within two days",
        "Start about a month before",
        "Planned around Navratri and Diwali",
      ],
    },
  ],

  sections: [
    {
      heading: "Can a student in Pardi study IB or IGCSE at a local school?",
      paragraphs: [
        "Not that we could confirm. Pardi's schools follow the Gujarat Secondary and Higher Secondary Education Board, with Gujarati and English medium streams and a few CBSE options, and the directories we checked show no IB World School or Cambridge or Edexcel centre in the town. We also found none in Vapi or Valsad. If that changes, this page will be updated.",
        "Demand exists nonetheless. The Vapi industrial belt brings engineers, chemists and managers from across India whose children began an IGCSE or IB programme in Pune, Bengaluru or the Gulf. For them a move to Valsad district can feel like falling off the curriculum, and a tutor lets the child stay on track.",
        "Another group is Mumbai-linked. Pardi's station connects directly to the Western Railway main line, and some families keep a home here while eyeing schools in Mumbai or boarding in Surat. They want the child ready for an IB or Cambridge classroom, with mathematics and English at the right level.",
        "Without a local school as a reference point, we choose tutors by syllabus alone. A Pardi student needing IB Biology HL has no neighbourhood expert to call, but an online tutor in Pune or Chennai who taught it last year can start inside a week.",
      ],
      table: {
        caption: "Where Pardi families look for IB and IGCSE schooling",
        columns: ["Option", "Where", "What to know"],
        rows: [
          ["Gujarat board and CBSE schools", "Pardi, Vapi and Valsad", "No IB or IGCSE teaching confirmed"],
          ["Boarding or relocation", "Surat, a couple of hours away", "Several IB and Cambridge schools, often boarding-led"],
          ["Relocation to Mumbai", "Reachable on the Western Railway", "Widest choice of IB and Cambridge schools"],
          ["Online tutor beside a local school", "At home in Pardi", "Works for IGCSE subjects and for IB students enrolled elsewhere"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Pardi, Vapi or Valsad",
        "Industrial postings create much of the demand",
        "Surat and Mumbai are the nearest real options",
        "Matching follows the syllabus, not the pin code",
      ],
    },
    {
      heading: "GSEB, CBSE and IB or IGCSE: what changes for a Pardi student?",
      paragraphs: [
        "Gujarat board papers reward careful, orderly answers built from a prescribed textbook, and teachers in Pardi prepare students well for that pattern. An IB or IGCSE examiner is more likely to present something unfamiliar and ask which method applies and why. The change is from reproducing an answer to choosing one.",
        "The two systems also assess at different moments. A board practical file records experiments after the event; an IB Internal Assessment or IGCSE coursework task is a self-directed investigation scored against published descriptors, and it may carry up to a third of a grade. Planning and redrafting something that long is a learnable skill.",
        "How deep the material goes depends on the level. IB Higher Level mathematics and sciences stretch past Class 12 in places, IGCSE Extended sits a notch above Class 10 and Core is gentler. A child switching in Grade 9 or Class 11 gains more from a map of what is new than from blanket revision.",
        "Language deserves its own attention. A child at ease in Gujarati may grasp a concept completely and still write it slowly in exam English, so sentence frames, vocabulary lists and timed answers are built into lessons.",
      ],
      table: {
        caption: "Gujarat board and CBSE compared with IB and IGCSE",
        columns: ["Feature", "GSEB / CBSE", "IB / IGCSE"],
        rows: [
          ["Typical question", "Reproduce a textbook answer in set form", "Choose a method and justify it in a new setting"],
          ["Coursework", "Practical files and internal marks", "Investigations and portfolios marked to criteria"],
          ["Language of study", "Gujarati, Hindi or English", "English, with Gujarati and Hindi as language courses"],
          ["Recognition", "Strong across India", "Recognised by universities in many countries"],
        ],
      },
      bullets: [
        "Choosing a method matters more than reciting one",
        "Coursework unfolds over months",
        "Map new content before revising old",
        "Practise exam English as a skill of its own",
      ],
    },
    {
      heading: "What is behind the price of IB or IGCSE tuition in Pardi?",
      paragraphs: [
        "The price reflects the programme and level, the subject, how long and how often classes run, and how recently the tutor has taught this exact course. A Diploma HL science and a Grade 7 mathematics class are not priced the same. A figure arrives in writing before the trial is booked.",
        "Travel never enters the sum. Every class is online, so a tutor in Mumbai and one in Chennai cost a Pardi family the same, and nobody pays for a train to Surat or fuel along the highway.",
        "Look inside the hour. Knowing how Cambridge words a practical question, or how an IB moderator reads an exploration, spares a student weeks of guesswork. Ask what the class will tackle and how results will reach you.",
        "No lengthy contract exists. Classes can pause for Navratri, Diwali or a wedding, and a tutor can be replaced if the fit is poor.",
      ],
      bullets: [
        "Level, subject, class length and tutor experience set the rate",
        "No travel cost for Pardi students",
        "A written figure before the trial",
        "Pause or change tutor whenever needed",
      ],
    },
    {
      heading: "Vapi coaching, local tutor, self-study or online: which suits IB or IGCSE in Pardi?",
      paragraphs: [
        "Coaching around Vapi and Valsad serves the Gujarat board and CBSE, with batches aimed at GUJCET, JEE and NEET. No class exists for IGCSE Chemistry or IB Economics, so a child on those courses would sit in somebody else's syllabus.",
        "Private tutors in Pardi handle everyday school subjects well. Very few have taught a current IB or IGCSE specification, and with demand this thin none can afford to specialise. They can steady a child; they cannot say how an examiner awards the last mark.",
        "Teaching yourself can work when the subject is well documented and the student is driven; IGCSE Mathematics papers are everywhere. It struggles wherever a reader is needed, such as a lab plan, an essay outline or a six-mark explanation. Errors nobody flags turn into habits.",
        "Online one-to-one tuition brings specialist knowledge, individual attention and a fixed rhythm without a train to Vapi or Surat. All a family needs is a laptop, headphones and a connection that lasts an hour.",
      ],
      table: {
        caption: "Support routes compared for Pardi",
        columns: ["Route", "Knows the syllabus?", "Personal attention", "Limit in Pardi"],
        rows: [
          ["Coaching class in Vapi", "For board and entrance exams only", "Shared with a batch", "No IB or IGCSE batches"],
          ["Local home tutor", "Varies", "Full", "Few have taught current papers"],
          ["Self-study", "From books and papers only", "None", "No feedback on coursework or essays"],
          ["Online specialist", "Chosen for the course", "Full", "Needs a steady connection"],
        ],
      },
      bullets: [
        "Local coaching targets board exams, GUJCET, JEE and NEET",
        "Tutors with current IB or IGCSE experience are rare locally",
        "Self-study lacks feedback on writing",
        "Online specialists fill both gaps",
      ],
    },
    {
      heading: "How do Navratri, Uttarayan and the south Gujarat monsoon shape a study plan?",
      paragraphs: [
        "Gujarat does festivals loudly. Nine nights of Navratri in autumn, the Diwali break and kite-flying Uttarayan in January all eat into study time, and a timetable that pretends otherwise collapses. Write them into the plan, with a little revision before and a catch-up class afterwards.",
        "The south Gujarat monsoon is heavy. Valsad district receives some of the state's highest rainfall, usually between late June and September, and power cuts or flooded roads can interrupt a connection. A mobile hotspot is a sensible backup, and classes in the wettest weeks may need flexible timing.",
        "The IB Diploma has one big session in May, results in July and a second chance in November. Cambridge runs IGCSE twice a year, around May and June and again in October and November, while Edexcel adds a January sitting to its summer one. Because the Gujarat Board papers come in March, a student sitting both sets needs mock revision mapped out well ahead.",
        "Where a child boards in Surat or Mumbai, the hostel school sets the calendar. Where an IGCSE candidate studies privately at home, a sensible rhythm is one class a week through Grade 9, extra sessions through the autumn of Grade 10, then a tight block across the last two months.",
      ],
      table: {
        caption: "The year for an IB or IGCSE student in Pardi",
        columns: ["Period", "What happens", "Tutoring focus"],
        rows: [
          ["June to September", "School year starts; heavy monsoon", "Foundations, with flexible timing"],
          ["October to November", "Navratri, Diwali; Cambridge November series", "Light revision, then a sprint for sitters"],
          ["January to March", "Uttarayan, mocks, Edexcel January series, board papers", "Timed papers and feedback"],
          ["April to June", "Heat; Diploma and IGCSE written papers", "Short early sessions and past papers"],
        ],
      },
      bullets: [
        "Treat Navratri and Diwali as planned breaks",
        "Keep a hotspot ready for monsoon evenings",
        "Diploma papers fall in May; retakes in November",
        "Board exam weeks can squeeze mocks",
      ],
    },
    {
      heading: "Where can IB or IGCSE lead from Pardi?",
      paragraphs: [
        "Inside Gujarat the pull is towards Surat, Vadodara and Ahmedabad, where SVNIT, MS University, IIT Gandhinagar and several private universities sit. Mumbai is a train ride away and attracts many Pardi families for engineering, medicine and commerce. Each institution sets its own rules for IB and IGCSE applicants, so ask the one you are interested in.",
        "Inside India, a student with a foreign-board certificate is often asked for equivalence from the Association of Indian Universities. CUET-UG admits candidates from many boards but looks at subject combinations, and JEE, NEET and GUJCET publish their own subject conditions. These get revised, so check the current rules before fixing subjects.",
        "Abroad, universities in Britain, Canada, Australia and America read IB points and IGCSE grades as admission evidence. A British offer typically names a points total plus Higher Level minimums and rests on the grades your school predicts in the final year, so performance across Class 11 carries real weight.",
        "Small towns tend to have the planning conversation late, and a missed subject choice at fourteen can quietly rule out engineering at seventeen. We cover the academic side only; ask each university or exam authority about its own rules.",
      ],
      bullets: [
        "Surat, Vadodara, Ahmedabad and Mumbai are the main destinations",
        "AIU equivalence is often needed for Indian universities",
        "Check GUJCET, JEE, NEET and CUET rules directly",
        "Predicted grades drive overseas offers",
      ],
    },
    {
      heading: "What do Maths AA and AI and the sciences demand of a Pardi student?",
      paragraphs: [
        "Two Mathematics routes exist and they feel quite different. Analysis and Approaches leans on algebra, functions, calculus and proof, which fits a child eyeing engineering, physics or computing; at Higher Level its third paper deliberately sets problems with no template. Applications and Interpretation leans on statistics, modelling and the graphic calculator, which fits future economists, biologists and business students.",
        "In Physics, Class 12 students handle formulae confidently but are less used to uncertainty, graphs and designing an experiment, which the Investigation rewards. A tutor who has studied the mark scheme can steer a plan before a draft drifts.",
        "Chemistry students tend to be quick with calculations and find reaction mechanisms and energy cycles newer. Biology students often know the vocabulary but need practice shaping answers around the command word.",
        "Since no school in the district teaches these papers, the online tutor is the main teacher. That is why we request the textbook in use, any class notes and one recently marked script before the trial, letting the first class begin from evidence.",
      ],
      bullets: [
        "AA suits calculus, proof and engineering routes",
        "AI suits data, statistics and modelling",
        "Experimental design is the usual physics gap",
        "Bring marked work to the trial",
      ],
    },
    {
      heading: "Core or Extended: which IGCSE tier fits a Pardi student?",
      paragraphs: [
        "Core entries stop at a lower grade; Extended entries can reach the top. That looks like a technical footnote in Grade 9 but it travels with the student, because a Diploma teacher expects Extended-level foundations before Higher Level Mathematics and sciences.",
        "Put four or five Extended questions from a past paper in front of your child and watch rather than mark. Someone who picks a sensible method and then drops a sign is ready for Extended. Someone who cannot see how to begin probably gains more from a secure Core grade in that subject while energy goes to the stronger ones.",
        "Choosing the bundle of subjects is the other half. English, Mathematics, two sciences and one language or humanity is a common spread, plus Additional Mathematics for future engineers. Overloading a child who has no school timetable behind them is the classic mistake.",
        "No one locally has run a Cambridge classroom, so a single diagnostic class with a tutor who has coached both tiers is the neatest way to choose. Hearing a child reason aloud tells you more than a mark does.",
      ],
      bullets: [
        "Core caps the grade; Extended opens it",
        "Try a few Extended questions first",
        "Add Additional Mathematics for engineering",
        "A diagnostic class often settles it",
      ],
    },
    {
      heading: "How does IB Gram pick a tutor for a Pardi family?",
      paragraphs: [
        "First comes a conversation, not a form: which board, which subject and level, how marks stand, when the next sitting is and what is causing worry, perhaps one stubborn topic, an IA, the mock timetable or a switch of board.",
        "After that we vet candidates on qualifications, how recently they taught the exact course and how they give coursework feedback. With no Pardi school to anchor things, shortlists follow syllabus fit and who is free in IST.",
        "The trial class is the real test. You find out whether the tutor explains clearly, asks questions worth answering and leaves your child comfortable enough to say I did not follow that. A first-month plan is written afterwards, only if you want one.",
        "When the chemistry between child and tutor is off, we simply send a different tutor, with no penalty and no explaining required.",
      ],
      bullets: [
        "A brief covering board, subject, level and worries",
        "Shortlist by syllabus experience",
        "Trial class before any commitment",
        "Tutor change if the fit is poor",
      ],
    },
  ],

  tutorsIntro:
    "These are the tutors a Pardi family typically meets, from PYP support through the Diploma and both IGCSE boards, each chosen against the course on the student's timetable. Teaching is by video, the only way tutoring happens in Pardi.",

  process: [
    { title: "Share where things stand", description: "Board or programme, subject and level, marks so far and the evening hours when your child in Pardi can log on." },
    { title: "Look over a few names", description: "No IB school in town gives us a starting point, so names come from across the country, picked for recent teaching of your child's paper." },
    { title: "Watch a trial class", description: "One real topic taught live, free, with nothing to sign." },
    { title: "Set out the first month", description: "Which topics come first, which weekday suits, and the way progress reports will reach you, set out on paper." },
    { title: "Review and continue", description: "Weekly classes continue, the plan is revisited every few weeks and a fresh tutor takes over if that would help." },
  ],

  whyPoints: [
    { title: "Course before person", description: "We propose nobody until we hold the HL or SL subject, or the Cambridge or Edexcel code and tier." },
    { title: "Made for towns with no IB school", description: "Pardi has no international classroom we can confirm, so the search for a specialist covers all of India." },
    { title: "See before you pay", description: "You see the tutor teach before any conversation about fees." },
    { title: "Honest limits on help", description: "Tutors read drafts and comment; assessed writing is always the student's own." },
    { title: "Updates in writing", description: "A few lines follow each class and a fuller assessment arrives every few weeks." },
    { title: "Free to walk away", description: "You may pause, end or swap tutors at any moment. Nothing connects us to a school, an exam board or a university." },
  ],

  faqs: [
    { question: "Where should I begin if I want an IB tutor in Pardi?", answer: "Start by noting the subject, the level and the exam sitting in view, then send them across. We pick tutors who recently taught that very course and book a free trial class. With no confirmed IB school in Pardi, the search covers the country and teaching happens by video." },
    { question: "Do you have IGCSE tutors for Pardi on both Cambridge and Edexcel?", answer: "Both are covered, and both are taught online. Before choosing anyone we pin down the board, the paper code and the tier, say Cambridge 0580 Extended or Edexcel 4MA1 Higher, so that practice comes from the right past papers for the exact sitting." },
    { question: "Will a tutor visit our home in Pardi?", answer: "No tutor comes to the house in Pardi, because home visits happen only in Gurugram and parts of Delhi NCR. Here, tuition at home means a private live class on your child's laptop, where tutor and student write on the same digital whiteboard." },
    { question: "What will IB or IGCSE tuition cost in Pardi?", answer: "There is no printed tariff. Programme, level and subject, session length and the tutor's recent experience with the course all shape the number, which you receive in writing before the trial. Continuing afterwards creates no long-term obligation." },
    { question: "Which schools in Pardi offer the IB or IGCSE?", answer: "We could not confirm any in Pardi, Vapi or Valsad. Local schools follow the Gujarat board or CBSE. Families wanting an IB or Cambridge classroom look to Surat or Mumbai, and use online tutoring to prepare, to bridge the distance or to support a boarder at home." },
    { question: "Is the first class really free?", answer: "It is. The tutor teaches a genuine topic from your child's syllabus and you choose afterwards. Carrying on brings a short first-month plan; stopping brings nothing at all, not even a reminder." },
    { question: "Can a tutor help with the IB Internal Assessment?", answer: "A tutor can explain what a criterion rewards, help your child choose a question small enough to investigate, check a method and comment on a draft written without help. Writing sentences for the assessed document is not allowed, since the IB treats that as malpractice." },
    { question: "Which Diploma subjects can your tutors teach?", answer: "On the Diploma side, tutors cover both Maths courses at either level, the three sciences, Economics, Business Management, English A, Computer Science, Psychology, Geography, History, Hindi and Gujarati, with coaching for Theory of Knowledge and the Extended Essay. Rarer subjects have a smaller pool, though we still look." },
    { question: "Do you also take younger children on MYP and PYP?", answer: "Yes. Teenagers on MYP usually need practice answering to the published criteria and settling on a Personal Project that is realistic. Primary-age PYP children get short, frequent classes on reading aloud, counting patterns and asking good questions." },
    { question: "Is a laptop class as good as a tutor beside my child?", answer: "For a place the size of Pardi this is frequently the better arrangement, since the town could never supply a specialist for each paper. The shared whiteboard, worked solutions done live and a recording of the class cover most of what a tutor at the next desk would give, provided the line stays up." },
    { question: "How do you vet tutors?", answer: "Credentials come first. Next we ask when the tutor last taught this very paper and how they would respond to a weak coursework draft. Recent time with the current specification is worth more than a longer career that predates it, and the trial class lets you judge the teaching yourself." },
    { question: "When is the right time to start?", answer: "Day one of the course is best: Grade 9 for IGCSE, Class 11 for the Diploma. Starting late is far from useless, since classes aimed at the highest-mark topics can tighten technique noticeably even in the eight weeks before an exam." },
    { question: "My child is in a Gujarati-medium school. Can they switch to IGCSE or IB?", answer: "Many children do. The obstacle is rarely mathematics or science; it is reading exam questions in English, knowing what the verb asks and sustaining long coursework. A bridging course during the summer before Grade 9 or Class 11 takes the sting out of the first term." },
    { question: "Which class times suit Pardi families?", answer: "Most students prefer weekday evenings or weekend mornings. Navratri nights, Diwali and Uttarayan weekends are kept free, Gujarat Board exam dates are respected where they apply, and classes shift when heavy monsoon rain threatens the connection." },
    { question: "What if my child and the tutor are not a good match?", answer: "Let us know and another tutor is arranged. Periodic reviews are meant to expose a poor fit sooner, nothing ties you to the arrangement, and stopping entirely costs nothing." },
    { question: "Is IB Gram tied to any school or exam body?", answer: "No. We are a standalone tutoring service with no agreement involving any school in Pardi, Surat or Mumbai, or the IB, Cambridge or Pearson. A school is mentioned here only to state what it teaches, and tutors follow the syllabus your child's own school or exam centre sets." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Vapi", href: "/vapi/", description: "The industrial town just north of Pardi." },
    { label: "IB and IGCSE tutoring in Navsari", href: "/navsari/", description: "Another south Gujarat town served online." },
    { label: "IB and IGCSE tutoring in Surat", href: "/surat/", description: "The nearest large city with confirmed IB and Cambridge schools." },
    { label: "IB tutoring across India", href: "/india/", description: "How matching works from city to city." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where tutors visit homes." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, levels, TOK, IAs and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and eAssessment explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and arrange a trial class." },
  ],

  closingHeading: "Arrange a no-cost IB or IGCSE trial class for your Pardi child",
  closingBody:
    "Tell us the board or programme, the subject and level, how the last few tests went and which weekday evenings are free in Pardi. Back comes a named tutor, a short account of their experience and some trial slots, one to one over video, free and with no strings. Reach us on support@ibgram.com, or send a WhatsApp message to +91 7439 368 115.",
};
