import type { CitySeoPage } from "../types";

/**
 * /dharmavaram/ - IB and IGCSE tutoring page for Dharmavaram, Sri Sathya Sai district, Andhra
 * Pradesh. No school in Dharmavaram is confirmed to run the IB or a Cambridge/Edexcel IGCSE, so
 * delivery is online one-to-one and the clusters point honestly to Bengaluru and Hyderabad.
 * Rendered with the shared CountryLanding layout used by /gurgaon/.
 */
export const dharmavaram: CitySeoPage = {
  slug: "dharmavaram",
  countryName: "Dharmavaram",
  countryNameLong: "Dharmavaram, Sri Sathya Sai district, Andhra Pradesh",
  demonym: "Dharmavaram",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sessions are set around Sankranti, Ugadi, the peak of the Rayalaseema summer and the timetable your child's own school already keeps",
  lastUpdated: "2026-09-21",
  geo: { latitude: 14.4144, longitude: 77.7223 },
  wikipedia: "https://en.wikipedia.org/wiki/Dharmavaram",
  alternateNames: ["Dharmavaram Anantapur", "Dharmavaram Sri Sathya Sai"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Dharmavaram | Private Online Tuition",
  metaDescription:
    "Private online IB and IGCSE tuition for Dharmavaram students, taught one to one from home on live video, planned around Sankranti and Ugadi, free trial lesson.",
  h1: "IB and IGCSE Tutors for Home Tuition in Dharmavaram",
  heroEyebrow: "DHARMAVARAM'S IB & IGCSE STUDENTS, TAUGHT LIVE FROM HOME",
  heroSubtitle:
    "Need private tuition at home in Dharmavaram for the IB or IGCSE? Nobody travels to your street, because in-person visits run only in Gurugram and Delhi NCR. Instead a specialist tutor teaches your child alone, live on screen, in Indian Standard Time, and you receive a written note after each class.",
  primaryKeyword: "IB and IGCSE tutors in Dharmavaram",
  imageAltText: "A Dharmavaram schoolgirl revising IGCSE Chemistry notes at home while her online tutor explains on a laptop screen",
  secondaryKeywords: [
    "IB tutor Dharmavaram",
    "IGCSE tutor Dharmavaram",
    "IB home tuition Dharmavaram",
    "IGCSE home tuition Dharmavaram",
    "IB private tuition Dharmavaram",
    "IB Maths tutor Dharmavaram",
    "IGCSE Maths tutor Dharmavaram",
    "IB Physics tutor Dharmavaram",
    "IB Chemistry tutor Dharmavaram",
    "IB Biology tutor Dharmavaram",
    "IB DP tutor Dharmavaram",
    "IB MYP tutor Dharmavaram",
    "IB PYP tutor Dharmavaram",
    "IGCSE online tuition Dharmavaram",
    "IB tutor Sri Sathya Sai district",
    "IGCSE tutor Anantapur district",
    "online IB tuition Rayalaseema",
    "international curriculum tutor Puttaparthi",
  ],

  heroTrustPoints: [
    "Indian-based tutors who teach in IST, matched to the exact syllabus and board",
    "A free trial lesson first, then rates written down before you book",
    "A brief written summary from the tutor after every class",
    "Switch tutors at any point if the chemistry is not there",
    "Guidance and feedback only: no ghost-written IAs, EEs or TOK essays",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on your own clock" },
    { value: "PYP to DP", label: "IB stages plus IGCSE" },
    { value: "Free trial", label: "See a real class first" },
    { value: "May & Nov", label: "Sessions we count back from" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Dharmavaram: where the loom town meets an international syllabus",
    paragraphs: [
      "Dharmavaram is known across Andhra Pradesh for its handloom silk sarees, and the town's economy still hums to the sound of looms, dyeing yards and saree merchants. That business heritage shapes what families here want for their children: options. Some households hope a daughter or son will study abroad, some plan to shift to Bengaluru, and others simply want an international qualification in reserve. Searching for IB and IGCSE tutors in Dharmavaram is often the first concrete step in that direction.",
      "The trouble is that the town has no classroom for it. Andhra Pradesh state syllabus, CBSE and a handful of private English-medium schools define local education, with Anantapur, Puttaparthi and Bengaluru a bus or car ride away. So the teaching has to arrive some other way. IB Gram tutors live in India, teach on Indian Standard Time and take one student at a time on a video call with a shared writing screen, which makes private tuition from home in Dharmavaram practical without anyone travelling.",
      "Every enquiry starts the same way: a short conversation about the child, the programme, the school or board involved and the subject causing worry, then a free trial with a suggested tutor. Rates are sent in writing afterwards, never before, because a Class 8 MYP Science learner and a Class 12 Higher Level Chemistry candidate are entirely different requests.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "An inquiry-led primary curriculum organised around big ideas such as how the world works and how we express ourselves, with literacy and numeracy woven through each unit.",
      countryNote:
        "Dharmavaram parents ask about PYP mostly when a move to Bengaluru or Hyderabad is planned and a child needs comfort with English and open-ended questions before joining.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "A five-year framework linking subject learning to global contexts, assessed against published criteria rather than a single final paper, ending in the personal project.",
      countryNote:
        "Telugu-medium or state syllabus learners moving into MYP need help most with writing full explanations in English, and that is where tutoring here starts.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A two-year pre-university course of six subjects, the Extended Essay, Theory of Knowledge and CAS, examined mainly in May.",
      countryNote:
        "Most Dharmavaram DP students study at a school in a larger city and rely on home tutoring for weak subjects during term breaks and long weekends.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A shorter international route that combines DP courses with career-related study, reflective work and a language element.",
      countryNote:
        "Enquiries are few, but a family from a textile or trading background may find the applied, career-linked design a natural fit.",
    },
  ],
  programmesIntro:
    "Programme names can sound like a puzzle. A first session simply lays out how the chosen stage is assessed, so that a parent and child both know what a good week of study looks like.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "A proof-friendly course covering calculus, vectors and complex numbers at HL, suited to students eyeing engineering or pure sciences." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Modelling, statistics and technology use, a strong fit for commerce, life sciences and social sciences." },
    { name: "Physics", levels: "SL / HL", description: "From kinematics to nuclear physics, with graph-heavy questions and an investigation that must be designed, not copied from a lab manual." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry through equilibrium and organic mechanisms, with stress on explaining why, not only what." },
    { name: "Biology", levels: "SL / HL", description: "A data-driven course in which students evaluate experiments as often as they recall facts." },
    { name: "Economics", levels: "SL / HL", description: "Markets, macro policy and development, with diagrams used precisely and examples drawn from textiles, agriculture and small business." },
    { name: "Business Management", levels: "SL / HL", description: "Useful for family-business students, covering finance, marketing and operations through case studies." },
    { name: "Computer Science", levels: "SL / HL", description: "Structured programming, databases and networks, taught with trace tables and past-paper practice." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close reading and comparative writing for students who think in Telugu but must write analysis in English." },
    { name: "Telugu A / Telugu B", levels: "SL / HL", description: "Literary analysis or language acquisition, helping students bring a mother-tongue strength into a formal IB subject." },
    { name: "Hindi B", levels: "SL / HL", description: "A language acquisition course for students needing a third-language credit." },
    { name: "Geography", levels: "SL / HL", description: "Resource management, hazards and population, useful for students who already know drought and water stress first-hand." },
    { name: "Theory of Knowledge", levels: "Core", description: "Support to question and structure ideas about knowledge; students write their own exhibition and essay." },
  ],
  subjectsIntro:
    "A tutor's first job is to check which subjects your child's school or boarding programme really uses, then to plan hours where the marks are most at risk.",

  igcseSubjects: [
    { name: "Mathematics (Core and Extended)", levels: "Cambridge 0580 / Edexcel", description: "Algebra, mensuration, trigonometry and statistics at two tiers; students moving from state syllabus texts often need drill on multi-step problems." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "Calculus and functions early, ideal for students planning A Level Mathematics." },
    { name: "Physics", levels: "Cambridge 0625 / Edexcel", description: "Forces, energy, waves and electric circuits, with an emphasis on unfamiliar contexts." },
    { name: "Chemistry", levels: "Cambridge 0620 / Edexcel", description: "Periodic trends, reactions and calculations, with practical-skills questions that need careful reading." },
    { name: "Biology", levels: "Cambridge 0610 / Edexcel", description: "Plants, humans, genetics and ecology, including graph and table interpretation." },
    { name: "English as a Second Language", levels: "Cambridge 0510", description: "Reading, writing, listening and speaking, valuable for state-syllabus students preparing English-medium study." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Algorithms, logic and programming concepts assessed in two written papers." },
    { name: "Economics", levels: "Cambridge 0455", description: "Supply, demand, trade and government with data-response practice." },
    { name: "Accounting", levels: "Cambridge 0452", description: "Double-entry, ledgers and financial statements, useful for trading families." },
    { name: "Telugu as a Second Language", levels: "School dependent", description: "Offered where a school or board allows it; tutors confirm availability first." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel courses share subject names but not question styles, so tuition starts by checking exactly which specification your child is following.",

  regionsTitle: "Dharmavaram neighbourhoods and roads we plan lessons around",
  regionsIntro:
    "You log in from wherever you live, and these notes show how daily life around Dharmavaram usually shapes the choice of lesson slot.",
  regions: [
    { name: "Silk market and weavers' colonies", note: "Households connected to the handloom trade often have children helping at the shop after school, so weekday early evenings can be busy and weekends work better." },
    { name: "Railway Station Road", note: "A commercial stretch near Dharmavaram Junction with mixed homes and shops; train noise is the main thing a headset solves." },
    { name: "Anantapur Road", note: "The main route towards the old district centre, with families whose children commute to school in Anantapur or a boarding school beyond." },
    { name: "Puttaparthi Road", note: "The corridor towards Sri Sathya Sai's town, where some students study in institutions linked to the Puttaparthi ecosystem." },
    { name: "Kadiri Road", note: "The southern approach, with residents who lean towards Bengaluru for work and higher education and ask about international schools there." },
    { name: "Hindupur and Penukonda side", note: "Families along the Bengaluru highway who view Bengaluru as the natural next step for schooling." },
    { name: "Old town lanes", note: "Compact, joint-family homes where a quiet study corner is the main practical question; a fixed daily slot helps." },
    { name: "Outlying colonies and farm-edge housing", note: "Newer housing towards the fields, where mobile network strength matters and a fixed broadband line is worth arranging." },
  ],

  schoolClusters: [
    {
      city: "Dharmavaram and surrounding mandals",
      note: "We could not confirm any Dharmavaram school teaching the IB or a Cambridge or Edexcel IGCSE course. Andhra state board, CBSE and a few private English-medium schools dominate, so international-curriculum work happens by tutoring alongside them.",
      schools: [],
    },
    {
      city: "Nearby: Bengaluru",
      note: "About 200 kilometres away, Bengaluru is where most Dharmavaram families look for an international classroom, through boarding, a relative's home or a family move.",
      schools: ["Stonehill International School", "Greenwood High International School"],
    },
    {
      city: "Nearby: Hyderabad",
      note: "Further by road but reachable by train, Hyderabad has a wider set of IB and IGCSE schools that Rayalaseema families sometimes consider.",
      schools: ["Oakridge International School", "International School of Hyderabad"],
    },
  ],
  schoolDisclaimer:
    "The schools above are in other cities and appear only because families from the Dharmavaram area sometimes consider them. IB Gram is independent of the IB, Cambridge, Pearson and every school named, and listing a school is neither an endorsement nor a claim of partnership.",

  modesIntro:
    "Tutors do not come to Dharmavaram homes; visits run only in Gurugram and parts of Delhi NCR. What you can choose is how the online sessions are structured.",
  modes: [
    {
      title: "Weekly private lessons at home",
      description: "A steady weekly slot on video for one subject, with homework reviewed live and the next week's focus agreed at the end.",
      bullets: ["Set weekday or weekend slot", "Live whiteboard work", "Short parent note afterwards"],
    },
    {
      title: "Pre-exam revision sprints",
      description: "A tight block in the weeks before mocks and the May or November papers, built around past questions and examiner phrasing.",
      bullets: ["Timed paper practice", "Error log for repeat mistakes", "Topic triage by marks at stake"],
    },
    {
      title: "Bridge tutoring before a move",
      description: "For a child about to enter an IB or IGCSE school in Bengaluru or elsewhere, a term or two of preparation that closes English and subject gaps.",
      bullets: ["Diagnostic first", "Subject vocabulary in English", "Study-habit coaching"],
    },
  ],

  sections: [
    {
      heading: "Who in Dharmavaram looks at IB or IGCSE, and why now?",
      paragraphs: [
        "Interest here does not come from one type of household. Silk-trade families who have built up capital over generations and want their children to see a wider world form one group. Doctors, engineers and bank officers posted in the town, or working at industrial sites in the Sri Sathya Sai district, form another. A third group is families with relatives in Bengaluru, the United States or the Gulf, who have watched cousins move through international schools and wonder whether the same road is open to them.",
        "For most, the first practical question is not whether the IB is good but whether the child could cope. A student who has studied all subjects in Telugu medium up to Class 8 faces a very different transition to one in an English-medium CBSE school. An honest tutor asks about that early and plans language support alongside subject work.",
        "Timing also matters. Families often begin asking in Class 8 or Class 9, when the IGCSE or the MYP final years are near, or in Class 10, when the Diploma is being considered. A conversation started early gives room to build habits; one started three months before the papers gives less room, but tutoring can still target the highest-value topics.",
        "Nothing on this page pushes a family into the IB or IGCSE. If the state board or CBSE looks like the better fit, we say so, and tutoring is still useful for mathematics and English reasoning.",
      ],
    },
    {
      heading: "Which boards can a Dharmavaram student study under, and how do they differ?",
      paragraphs: [
        "Locally, the choice is between the Andhra Pradesh state syllabus, CBSE and, at a small number of schools, other boards. IB and IGCSE appear only through schools elsewhere or through private study. The table gives a fast comparison for a parent deciding what kind of tutoring to look for.",
        "State and CBSE syllabuses in Class 9 and 10 place heavy weight on textbook chapters and a big final exam. IGCSE spreads its weight across papers within one series and expects application, while the IB Diploma adds continuous internal work and a required Extended Essay.",
        "There is no 'easier' board here. A student who does well in state or CBSE examinations can do well in IGCSE, but the training is different: fewer marks for memorised definitions, more for reasoned steps and clear diagrams.",
        "For students who want to remain in Dharmavaram for school, one sensible pattern is CBSE or state syllabus in the classroom, combined with IGCSE-style mathematics and science tutoring on the side, so that a later move into an international school does not start from zero.",
      ],
      table: {
        caption: "How the boards a Dharmavaram family meets actually differ",
        columns: ["Point of comparison", "AP state board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Typical teaching language", "Telugu or English", "English or Hindi", "English", "English, plus a second language"],
          ["Final assessment", "Public exams at Class 10 and 12", "Board exams at Class 10 and 12", "Series papers at end of Class 10", "May or November papers plus internal work"],
          ["Question emphasis", "Chapter recall and standard problems", "Recall plus application", "Structured and applied", "Extended reasoning and data analysis"],
          ["Presence in Dharmavaram", "Widespread", "Present", "No confirmed school", "No confirmed school"],
          ["Main next step", "Class 11-12 and entrance exams", "Class 11-12 and CUET or JEE", "A Level, IB or Class 11", "University, in India or abroad"],
        ],
      },
    },
    {
      heading: "How much does IB and IGCSE tuition cost, and what pushes the rate up or down?",
      paragraphs: [
        "This page does not list rates. The reason is simple: two Dharmavaram families can ask for very different things under the same words. One wants twice-weekly IB Physics HL from a tutor who has taught the syllabus for years. Another wants a single monthly session on IGCSE English writing. Quoting one figure would mislead both.",
        "After the free trial you receive a written rate for a clear plan: tutor, subject, frequency and length. Ask for changes if the plan does not suit your budget, and the tutor can suggest trimming the scope.",
        "Three things move the price most: how senior the tutor is, how specialised the subject is, and how often you meet. Higher Level science and mathematics tutors are usually costlier than tutors for younger MYP learners, and shorter sessions twice a week may be priced differently from one long block.",
        "There are things you do not pay for. No travel, no venue fee, no extra charge because your child studies at home in a smaller town. The rest of the household's routine stays put.",
        "Ask questions about fit before rates. A cheaper tutor who is a poor fit costs more in the end than a better match booked properly at the start.",
      ],
    },
    {
      heading: "Should Dharmavaram families choose online tuition over classes in Anantapur or Bengaluru?",
      paragraphs: [
        "Travelling to Anantapur or Bengaluru for weekly classes eats hours, and in Rayalaseema's summer the road is not pleasant. It can make sense for a student in Class 11 who needs face-to-face labs, but for most weekly subject support it is a poor use of time.",
        "Coaching centres in the district are built for the Andhra Pradesh state syllabus, EAPCET and JEE or NEET, and they do that well. But they teach a batch, and none is designed around IB command terms or the Cambridge and Edexcel mark schemes.",
        "Local private teachers can be excellent for young children, especially in mathematics and Telugu. They are rarely trained on the international curriculum, and the child may end up teaching the tutor the specification.",
        "Self-study is possible for a highly motivated student, particularly with good past papers, but it lacks correction. Online one-to-one tuition combines specialist syllabus knowledge with a home setting, and the comparison table lays out where each option stands.",
      ],
      table: {
        caption: "Study options for a Dharmavaram student on an international syllabus",
        columns: ["Option", "Knows the IB or IGCSE mark scheme?", "One-to-one?", "Time and travel"],
        rows: [
          ["Online private tuition", "Yes, tutors specialise", "Yes", "None, lesson at home"],
          ["Coaching in Anantapur", "Rarely, focused on state and entrance exams", "No, batch teaching", "Bus or car journey"],
          ["Bengaluru weekend classes", "Sometimes", "Small groups", "Long journey, overnight often needed"],
          ["Local private teacher", "Usually not", "Yes", "Often at home, but limited subject match"],
          ["Self-study", "Only through past papers", "No", "None, but needs strong discipline"],
        ],
      },
    },
    {
      heading: "How do the seasons in Rayalaseema and festivals like Sankranti shape study plans?",
      paragraphs: [
        "Dharmavaram lies in Rayalaseema, one of the driest parts of Andhra Pradesh, and the summer heat from April to June is fierce. A tutor plans lessons around that. Late-morning slots are usually avoided, and early morning or after 6 pm works better, especially when power is unstable.",
        "Sankranti in January is the most important festival for many families, with school holidays that can stretch across several days. That timing is inconvenient because it falls between term one and mock examinations. Tutors schedule catch-up sessions immediately after, and avoid heavy new material before.",
        "Ugadi in March or April lands close to the IGCSE and IB study leave period, so students preparing for May papers tend to reduce social commitments and use the remaining weeks for past papers. The table shows how a typical year could run.",
        "The monsoon is light compared with coastal Andhra, but October storms occasionally disrupt connectivity, so a backup plan such as a mobile hotspot matters. Dasara and Deepavali come in the middle of the first term, and mocks for many schools fall just after.",
      ],
      table: {
        caption: "A working year for a Dharmavaram student on IB or IGCSE",
        columns: ["Months", "Local rhythm", "Exam or school cycle", "What the tutor emphasises"],
        rows: [
          ["June to September", "New session, southwest monsoon breaks the heat", "Term begins, syllabus start", "Foundations and gap-closing"],
          ["October to November", "Dasara, Deepavali, occasional storms", "Term-one exams, November IGCSE and IB sessions", "Timed papers and error review"],
          ["December to January", "Cool season, then Sankranti break", "Mocks and IA drafts", "Full papers and IA method coaching"],
          ["February to March", "Ugadi approaching, warmer days", "Final preparation for May sessions", "Weak-topic triage"],
          ["April to May", "Peak heat, load-shedding possible", "IB and IGCSE May exams", "Early or late slots, short revision"],
        ],
      },
    },
    {
      heading: "What is the difference between IB Maths AA and AI, and how are the sciences taught?",
      paragraphs: [
        "Students in Dharmavaram often ask which mathematics course to choose, and the answer depends on the intended degree. Analysis and Approaches leans towards algebra, calculus and proof and suits engineering, physics and computer science. Applications and Interpretation leans towards statistics, modelling and technology and suits biology, economics, geography and psychology.",
        "In both, questions are set in context and marks are earned for method, so an answer with the right number but no working scores poorly. Tutors drill students in writing the steps, using the calculator in ways that examiners accept and stating assumptions clearly.",
        "For Physics, the syllabus asks for both understanding and experimental design. A tutor might ask a student to plan how to measure the acceleration due to gravity with materials found in the kitchen, so that the IA becomes less of a mystery when it arrives.",
        "Chemistry and Biology bring their own vocabulary. Students used to learning definitions verbatim often need to switch to explaining mechanisms and interpreting data, and the fastest way to switch is to practise with unfamiliar experiments.",
        "Every subject has a Standard Level and a Higher Level version, and tutors are candid about workload. A student aiming for a medical degree who already carries three HL courses may be better served by dropping a fourth rather than spreading thin.",
      ],
    },
    {
      heading: "IGCSE Core or Extended for a Dharmavaram student, and how do exam boards differ?",
      paragraphs: [
        "Core papers limit the top grade available, while Extended papers allow the full range but ask for more depth. Students who are strong in mathematics from Class 8 and 9 on the state or CBSE syllabus often manage Extended with support, especially in algebra and graphs.",
        "Cambridge International and Pearson Edexcel International GCSE overlap in content but differ in how questions read. Cambridge offers many subject choices, with an alternative-to-practical paper in the sciences. Edexcel offers a more modular feel in some subjects and specific question layouts.",
        "For a Dharmavaram student the practical question is which board a target school follows. A tutor asks that first, obtains the specification code and then builds a plan from the published past papers and examiner reports.",
        "Private candidates should also ask exam centres about entry deadlines and practical assessments early. Practical exams are the piece families most often overlook.",
      ],
    },
    {
      heading: "What universities and careers can follow from IB or IGCSE for students from Dharmavaram?",
      paragraphs: [
        "A Dharmavaram student who completes the IB Diploma or the IGCSE plus A Level can look at Indian and overseas options. In India, the Association of Indian Universities recognises IB Diploma equivalence for admissions, and CUET-UG opens a path into central universities. Students who want engineering or medicine should check current JEE and NEET eligibility rules for IB and international-board candidates before choosing subjects.",
        "Andhra Pradesh students often look at institutions such as IIIT and NIT campuses in the region, and at Bengaluru and Hyderabad for private universities. Admission rules differ each year, so verifying them against the latest brochure is more reliable than relying on general advice.",
        "For overseas study, the IB Diploma is recognised by universities in the United Kingdom, the United States, Canada, Australia and much of Europe, and predicted grades from a school play a large role. Tutors help students prepare for classes, not applications, but a frank view on subject combinations is part of the service.",
        "Silk and textile families sometimes ask about fashion, design or business paths abroad. IB Business Management, Economics and Visual Arts can support those ambitions, and a tutor can outline how each subject is assessed.",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Tell us over WhatsApp or email your child's class, board and the subject where marks are slipping." },
    { title: "Share the specification", description: "We ask which exam board, tier and exam session apply, so the tutor plans from the right papers." },
    { title: "Try a free lesson", description: "A tutor with relevant experience is proposed and the trial class is fixed at an hour your family finds easy." },
    { title: "Read the written rates", description: "Only after the trial do you receive a written quote and a proposed weekly pattern, with no obligation." },
    { title: "Start and review", description: "Regular classes begin, a note follows each one, and you can ask for a different tutor whenever needed." },
  ],

  whyPoints: [
    { title: "Syllabus-specific teaching", description: "Tutors use IB subject guides, Cambridge and Edexcel specifications and real mark schemes as their base." },
    { title: "Clear about what online means", description: "No one visits Dharmavaram. Lessons run live, one tutor with one student, and that is stated up front." },
    { title: "Timing that suits your day", description: "Tutors work in IST, so a lesson after school or after the shop closes is easy to arrange." },
    { title: "Rates you can see first", description: "You get a written quote after the trial and before committing, with nothing hidden." },
    { title: "Learning support, not shortcuts", description: "Tutors coach students to write their own IAs, essays and coursework rather than writing them." },
    { title: "Local calendar respected", description: "Sankranti, Ugadi and the summer heat are planned around rather than fought." },
  ],

  tutorsIntro:
    "Tutors teach live from India and are chosen for subject depth and experience with your child's programme. Use the trial lesson to judge fit before you decide anything further.",

  faqs: [
    { question: "Do tutors come to my home in Dharmavaram?", answer: "No, tutors do not come to homes in Dharmavaram. In-person home tuition runs only in Gurugram and parts of Delhi NCR. For Dharmavaram, private lessons happen online: your child sits at home with a laptop, and the tutor teaches live over video with a shared whiteboard, so the experience remains one to one without any travel." },
    { question: "Is any Dharmavaram school teaching IB or IGCSE?", answer: "We could not confirm a school in Dharmavaram that runs the IB or a Cambridge or Edexcel IGCSE programme. Local education is dominated by the Andhra state board and CBSE. Families who want an international classroom generally look to Bengaluru or Hyderabad, and online tutoring bridges the gap either before a move or beside a local school." },
    { question: "What is the cost of IB or IGCSE tuition here?", answer: "Rates depend on the subject, level, tutor and how many sessions per week you choose, so no single price applies. You begin with a free trial and then receive a written quote before booking. If money is a concern, say so, because the tutor can focus on the highest-value topics first." },
    { question: "My child studied in Telugu medium. Can they still manage IB or IGCSE?", answer: "Yes, many can, but English is the first thing to build. A tutor works on subject vocabulary, writing full-sentence explanations and reading exam questions carefully. Progress is usually visible in a few months, and mathematics, which relies less on language, often becomes the confidence booster while writing skills catch up." },
    { question: "Which subjects do Dharmavaram students ask for most?", answer: "Mathematics, Physics, Chemistry and Biology are the most requested, followed by English, Economics and Business. That reflects the local interest in engineering, medicine and family enterprise. Telugu as a language subject also comes up, since students want to keep a mother-tongue strength alive within a formal qualification." },
    { question: "Will power cuts or weak internet affect lessons?", answer: "They can, so plan for them. Keep a mobile hotspot ready, charge the laptop before class and choose times outside the hottest hours. If a class is interrupted by a genuine outage, it is rescheduled at no penalty, and the tutor picks up from the point where the connection dropped." },
    { question: "Can tutors write my child's IA or Extended Essay?", answer: "No. Tutors coach but never write IAs, Extended Essays, TOK essays or coursework. They can explain criteria, help refine a research question, review a plan and comment on a draft. The work must belong to the student, which the IB requires and which also gives the student real learning value." },
    { question: "Is the IB Diploma accepted by Indian universities?", answer: "In general yes. The Association of Indian Universities treats it as equal to Class 12 for admission purposes, and CUET-UG is the main route into central universities. Courses such as engineering or medicine can have subject conditions, so check the current rules of the exact institute before your child chooses subjects." },
    { question: "Can an IB or IGCSE student still write JEE or NEET?", answer: "Possibly, if the subject combination and marks meet the exam authority's rules. NEET needs Physics, Chemistry, Biology and English at the senior stage, and JEE has minimum requirements too. IGCSE alone is a Class 10 qualification, so a senior-stage course is needed. Always confirm the latest conditions before finalising subjects." },
    { question: "At what age should tutoring begin?", answer: "There is no fixed age. Younger children may benefit from PYP-style reading and number support from around Class 2 or 3, while IGCSE and MYP support often starts in Class 7 to 9. DP tutoring usually starts in Class 11, though a summer bridge in Class 10 can make the first term much smoother." },
    { question: "How does the free trial work?", answer: "You send the class, board and subject, we suggest a tutor, and the trial is a genuine lesson at an agreed time. It carries no obligation. Afterwards you receive a written summary of what was covered and what the tutor suggests next, plus written rates if you would like to continue." },
    { question: "What if my child and the tutor are not a good match?", answer: "Ask for a change. Teaching relationships depend on style, pace and personality as well as knowledge, and a mismatch is nobody's fault. Explain what felt wrong and we will match a different tutor, so the next trial starts from a better position." },
    { question: "How do Sankranti and summer affect lessons?", answer: "We plan around both. Around Sankranti, lessons pause or become light revision, and catch-up sessions follow. In April to June, sessions are set early morning or evening to avoid the worst heat and any load-shedding that tends to come with it." },
    { question: "Which IGCSE boards can tutors handle?", answer: "Cambridge International IGCSE and Pearson Edexcel International GCSE, plus A Level and AS Level as context. The first step is confirming the board, subject code and tier, because question styles differ. Working from the wrong past papers wastes valuable revision time." },
    { question: "How can I get started?", answer: "Send a WhatsApp message to +91 7439 368 115 or write to support@ibgram.com with your child's class, board and the subject that needs help. A tutor is suggested, a free trial arranged, and rates follow in writing. Nothing is confirmed until you are happy with the trial." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "The whole IB and IGCSE tutoring service in one place." },
    { label: "All India city pages", href: "/india/", description: "Cities across India where lessons are offered online." },
    { label: "Gurugram", href: "/gurgaon/", description: "The only place in-person home tuition is available." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Tutors grouped by IB subject and level." },
    { label: "IGCSE", href: "/igcse/", description: "Cambridge and Edexcel IGCSE subject coverage." },
    { label: "IB MYP", href: "/programmes/myp/", description: "How the Middle Years Programme works." },
    { label: "IB DP", href: "/programmes/dp/", description: "Structure of the Diploma Programme." },
    { label: "Contact", href: "/contact-us/", description: "Ask a question or arrange a trial." },
    { label: "Bengaluru", href: "/bengaluru/", description: "The city most Dharmavaram families consider for schooling." },
    { label: "Anantapur", href: "/anantapur/", description: "The neighbouring district city." },
    { label: "Hindupur", href: "/hindupur/", description: "A nearby town on the Bengaluru highway." },
    { label: "Tirupati", href: "/tirupati/", description: "Another Rayalaseema city with its own page." },
  ],

  closingHeading: "One free lesson is the easiest way to start from Dharmavaram",
  closingBody:
    "If you have been looking for IB and IGCSE tutors in Dharmavaram, send a short message with your child's class, board and subject. We will suggest a tutor, arrange a trial and share written rates afterwards. Write to support@ibgram.com or use WhatsApp on +91 7439 368 115.",
};
