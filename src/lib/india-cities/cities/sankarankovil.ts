import type { CitySeoPage } from "../types";

/**
 * Sankarankovil (Tenkasi district, Tamil Nadu). No IB or Cambridge / Edexcel school could be confirmed in the
 * town, so stripSchools is empty and the clusters point honestly to Madurai and Chennai, whose schools are
 * already verified on neighbouring pages. Online only; no in-person tuition outside Gurugram and parts of Delhi NCR.
 */
export const sankarankovil: CitySeoPage = {
  slug: "sankarankovil",
  countryName: "Sankarankovil",
  countryNameLong: "Sankarankovil, Tamil Nadu",
  demonym: "Sankarankovil",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening lessons that work around Pongal, the Aadi Thapasu weeks, Deepavali and the heavy rain of the north-east monsoon",
  lastUpdated: "2026-09-21",
  geo: { latitude: 9.1744, longitude: 77.5467 },
  wikipedia: "https://en.wikipedia.org/wiki/Sankarankovil",
  alternateNames: ["Sankarankoil", "Sankaran Kovil", "Sankarankovil Tenkasi", "Sankaranainarkoil"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sankarankovil | Online Home Tuition",
  metaDescription:
    "Live online home tuition for IB and IGCSE students in Sankarankovil, Tenkasi: DP, MYP, PYP, Cambridge and Edexcel subjects, taught one to one, free trial first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Sankarankovil",
  heroEyebrow: "IB & IGCSE ONLINE HOME TUITION FOR SANKARANKOVIL",
  heroSubtitle:
    "Home tuition in Sankarankovil for an IB or IGCSE course rarely exists in a form that fits, because the town's tutors are rooted in the Tamil Nadu State Board and CBSE. Our online home tuition brings a specialist in: a live, private lesson on video, taught by a tutor elsewhere in India who has recently handled your child's exact syllabus, while your child works from home in Sankarankovil.",
  primaryKeyword: "IB and IGCSE tutors in Sankarankovil",
  imageAltText: "Sankarankovil student learning IGCSE Biology with an online tutor over a live video call",
  secondaryKeywords: [
    "IB tutor Sankarankovil",
    "IGCSE tutor Sankarankovil",
    "IB home tuition Sankarankovil",
    "IGCSE home tuition Sankarankovil",
    "IB private tuition Sankarankovil",
    "IB Maths tutor Sankarankovil",
    "IGCSE Maths tutor Sankarankovil",
    "IB Physics tutor Sankarankovil",
    "IB Chemistry tutor Sankarankovil",
    "IB Biology tutor Sankarankovil",
    "IB DP tutor Sankarankovil",
    "IB MYP tutor Sankarankovil",
    "IB PYP tutor Sankarankovil",
    "IGCSE online tuition Sankarankovil",
    "IB tutor Tenkasi district",
    "IB tutor Sankarankoil",
    "online IB tutor Tamil Nadu",
    "IGCSE tutor Tirunelveli region",
  ],

  heroTrustPoints: [
    "Online home tuition, live with one tutor and no group batches",
    "Tutors matched on programme, subject, level and exam board",
    "A free trial lesson before any fees are discussed",
    "No ties to any school, exam board or university",
    "A written summary for parents after each lesson",
  ],
  heroStats: [
    { value: "PYP, MYP, DP, CP", label: "IB programmes covered" },
    { value: "Cambridge and Pearson", label: "IGCSE boards covered" },
    { value: "Live, IST", label: "Lessons on Indian time" },
    { value: "Free trial", label: "Before you commit" },
  ],

  intro: {
    heading: "IB and IGCSE tuition for a temple town that teaches to the Tamil Nadu boards",
    paragraphs: [
      "Sankarankovil is known first for the Sankara Narayanasamy temple, whose Aadi Thapasu festival in the Tamil month of Aadi draws devotees from across the south, and second for its powerlooms, which turn out towels, saris and lungis. It is a municipal town in Tenkasi district, at the eastern foot of the Western Ghats, with Rajapalayam, Tirunelveli and Madurai each within easy reach by road.",
      "Schooling here follows the pattern of southern Tamil Nadu: State Board and Matriculation-style schools, several CBSE campuses, and a large tuition culture aimed at the Class 10 and 12 board exams and at NEET and engineering entrance preparation. IB and IGCSE are unusual. They turn up when a family has lived abroad, when a child is enrolled in a boarding school in Madurai or Chennai, or when a household plans a foreign university.",
      "Tutors do not visit homes in Sankarankovil; in-person home tuition runs only in Gurugram and parts of Delhi NCR. Here, the service is online home tuition. A tutor teaches live by video, sees the student's working through the camera or a shared tablet, and sends a written note afterwards. For families looking for IB and IGCSE tutors in Sankarankovil, that means a specialist without the long bus ride to a bigger city.",
      "Below are the facts that matter locally: where the nearest international schools are, how Tamil Nadu boards compare with IB and IGCSE, what shapes the fee, how the monsoon and festival calendar interact with exam dates, and where students go afterwards. No claim on the page is a promise of results.",
    ],
  },

  programmesIntro:
    "Every IB programme and the two main IGCSE boards are covered. The notes show how each stage typically looks for a family in Sankarankovil.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A primary course that organises learning around units of inquiry in place of a textbook for every subject. Tutors keep the pace light: reading, number work and explaining ideas aloud.",
      countryNote:
        "PYP is uncommon in Tenkasi district and mostly appears after a move from abroad or Chennai. Short lessons with a parent close by help a child settle into online learning.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects graded against published criteria, connected through global contexts, with a personal project at the end. Tutors help students read criteria and lay out their reasoning.",
      countryNote:
        "A Sankarankovil student who has learnt in Tamil medium may find MYP's academic English demanding. A tutor builds subject vocabulary alongside the content.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, the Extended Essay, Theory of Knowledge and CAS. Tutors teach content and exam technique, and the essays, internal assessments and reflections remain the student's own.",
      countryNote:
        "DP students from here are usually boarders or day scholars in Madurai or Chennai. Holiday and weekend lessons at home fill gaps left by a hectic term.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "DP courses joined to a career-related study and a reflective project. Tutors concentrate on the academic courses inside the combination.",
      countryNote:
        "CP is rare in southern Tamil Nadu. It comes up mostly as a comparison with the Diploma, and a tutor can explain how each affects later options.",
    },
  ],

  subjectsIntro:
    "IB subjects at Higher and Standard Level. A Sankarankovil student is matched to a tutor who has recently taught that specific course.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions and proof, the natural choice for engineering and physical science." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and calculator work for commerce, economics and life sciences." },
    { name: "Physics", levels: "SL and HL", description: "From mechanics to atomic and nuclear physics, with practice in explaining results in words." },
    { name: "Chemistry", levels: "SL and HL", description: "Stoichiometry, energetics, equilibrium and organic mechanisms, with structured answers." },
    { name: "Biology", levels: "SL and HL", description: "Cells, genetics, human physiology and ecology, with careful terminology for medical aspirants." },
    { name: "Economics", levels: "SL and HL", description: "Micro, macro and development economics, with examples from textile and agricultural trade." },
    { name: "Business Management", levels: "SL and HL", description: "Case-study analysis, well matched to families in powerloom and trading businesses." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming logic, data structures and systems, written for the paper format." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Text analysis and essay planning, with support for students whose first language is Tamil." },
    { name: "English A: Literature", levels: "SL and HL", description: "Close reading of set works and help with the individual oral." },
    { name: "Tamil and Hindi", levels: "SL and HL", description: "Language and literature support for a home language, where the school offers it." },
    { name: "Psychology", levels: "SL and HL", description: "Studies, theory and extended-response practice." },
    { name: "Environmental Systems and Societies", levels: "SL and HL", description: "Systems, resources and sustainability, relevant to the wind and water issues of the region." },
    { name: "Theory of Knowledge", levels: "DP core", description: "Coaching on how knowledge questions work. Essays and exhibitions remain the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE subjects, each confirmed against the board's paper codes and tier before lessons begin.",
  igcseSubjects: [
    { name: "Mathematics (0580 and 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and statistics, with Extended-tier depth on functions and vectors." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "Calculus and algebra at pace, a strong bridge into IB Mathematics HL." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, circuits, waves and atomic physics, with practical-skills practice." },
    { name: "Chemistry", levels: "Core and Extended", description: "Bonding, reaction rates, organic basics and calculations." },
    { name: "Biology", levels: "Core and Extended", description: "Organisms, transport, inheritance and ecology with exact definitions." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core and Extended", description: "Double-award science balancing all three disciplines." },
    { name: "Computer Science", levels: "Extended", description: "Algorithms and pseudocode written in the board's exact style." },
    { name: "English First Language and Second Language", levels: "Extended", description: "Directed writing, summary and comprehension, following the mark scheme." },
    { name: "Tamil and Hindi as second languages", levels: "Core and Extended", description: "Reading and writing for students with Tamil or Hindi at home." },
    { name: "Economics, Business Studies and Accounting", levels: "Extended", description: "Definitions, calculations and short essays for commerce-minded students." },
  ],

  regionsTitle: "Sankarankovil and the nearby towns our online students live in",
  regionsIntro:
    "Lessons are online, so these are not teaching venues. They are the places our students live, with a note on how local routine affects the best lesson time.",
  regions: [
    { name: "Sankarankovil town centre", note: "Busy market streets around the main roads. Evening lessons begin after the shops quieten down." },
    { name: "Temple quarter", note: "The area around the Sankara Narayanasamy temple. Aadi Thapasu crowds fill the lanes for days, so lessons are moved well ahead." },
    { name: "Bus stand area", note: "A transport hub for Tirunelveli, Madurai and Rajapalayam. Students commuting to other towns return late, favouring weekend slots." },
    { name: "Rajapalayam Road", note: "Leads north-east towards Rajapalayam. Families with links to firework and textile trades live along it." },
    { name: "Tirunelveli Road", note: "The route south-east towards Tirunelveli and Palayamkottai. Some students travel daily for school." },
    { name: "Vasudevanallur", note: "A nearby town in the district with its own school circuit. Online lessons avoid a long trip for specialist subjects." },
    { name: "Sivagiri", note: "A small town at the foot of the ghats. Steady broadband is the main planning point." },
    { name: "Thalaivankottai", note: "A town on the road to Tenkasi. Families often look at Tirunelveli and Madurai for higher secondary schooling." },
    { name: "Puliyangudi", note: "A town in Tenkasi district with a strong farming economy. Harvest and festival weeks shape evening availability." },
  ],

  schoolClusters: [
    {
      city: "Sankarankovil and Tenkasi district",
      note: "Checks turned up no school in town offering the IB or a Cambridge or Edexcel IGCSE. Classrooms here run the State Board or CBSE, which means an international learner is normally registered elsewhere, or working through the syllabus alone.",
      schools: [],
    },
    {
      city: "Nearby: Madurai",
      note: "Madurai is the nearest large city with confirmed international schools, reached by road or rail. Named only as a pointer, with no connection to us.",
      schools: ["Velammal Global School", "Vikaasa World School", "TIPS Globeducate Madurai", "Kalvi Intercontinental School", "Jain Vidyalaya, Madurai"],
    },
    {
      city: "Nearby: Madurai (Cambridge alongside CBSE)",
      note: "One Madurai campus combines a Cambridge pathway with CBSE, which suits families who want a fallback.",
      schools: ["Mahatma Global Gateway School, Madurai"],
    },
    {
      city: "Nearby: Chennai",
      note: "Chennai has the widest choice in the state, with boarding and relocation as the usual routes from the far south.",
      schools: ["Gateway International School", "KC High International School", "Akshar Arbol International School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent service with no link to the IB, Cambridge, Pearson or any school named here. Schools appear only to show where international courses are offered within reach of Sankarankovil, which is not an endorsement or a partnership.",

  modesIntro:
    "Since tutors do not visit homes in Sankarankovil, the choice is among three online formats that suit different points in the school year.",
  modes: [
    {
      title: "Weekly online home tuition",
      description: "One tutor, one subject and a fixed weekly slot, taught live from your child's desk at home.",
      bullets: [
        "A steady tutor through the term",
        "Shared screen, whiteboard and past papers",
        "A brief written summary after each lesson",
        "A new tutor on request",
      ],
    },
    {
      title: "Pre-exam intensive",
      description: "More frequent lessons in the months before May or November sessions to cover the syllabus and practise timed papers.",
      bullets: [
        "Several lessons per week near the exam",
        "Timed papers followed by careful marking",
        "Topic lists built from the student's own mistakes",
        "Dates planned around Deepavali and monsoon days",
      ],
    },
    {
      title: "Syllabus bridge",
      description: "For students moving from the State Board or CBSE into an international course, or returning from abroad.",
      bullets: [
        "A diagnostic lesson to locate real gaps",
        "Subject English and command-term practice",
        "Gentle pace for younger students",
        "Regular updates for parents",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Sankarankovil, and where do families go instead?",
      paragraphs: [
        "We could not confirm an IB or Cambridge or Edexcel IGCSE school in Sankarankovil, and we would rather say so than pad a list. Local schools run the Tamil Nadu State Board syllabus or CBSE, with a few affiliated to other boards. International curricula are concentrated in Madurai, Tirunelveli's larger private campuses and Chennai.",
        "Madurai is the usual first choice, given road and rail links and several confirmed IB and Cambridge-curriculum schools. Chennai attracts families looking for boarding. Some households relocate a parent to Madurai for the school years, while the business, often a powerloom unit or a trading firm, continues in Sankarankovil.",
        "Families who stay in town generally fall into a few groups. Some have a child boarding in Madurai or Chennai and at home during holidays. Some have returned from the Gulf, Singapore or Malaysia and want continuity. Others plan privately for IGCSE subjects as a route to a foreign degree, sitting papers as private candidates.",
        "For each group, the tutor must arrive through a screen. Online lessons avoid the long bus journey to Madurai or Tirunelveli, let a boarder revise in holidays without travelling, and let a private candidate follow a specification topic by topic. This is the practical meaning of IB and IGCSE tutors in Sankarankovil.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Sankarankovil",
        "Madurai and Chennai hold the nearest confirmed options",
        "Typical families: boarders, returnees, private candidates",
        "Online lessons avoid a long commute",
      ],
    },
    {
      heading: "How do the Tamil Nadu State Board and CBSE compare with the IB and IGCSE?",
      paragraphs: [
        "The Tamil Nadu State Board uses state textbooks, teaches in Tamil or English, and runs public exams in Classes 10, 11 and 12. CBSE follows NCERT and is the standard base for JEE and NEET preparation. Both value accurate recall and set methods, and the coaching scene around Sankarankovil is tuned to them.",
        "IB and IGCSE papers reward application. A Biology question may give an experimental set-up and ask for conclusions. A Mathematics question might present a real situation with no hint about the method. English and Economics reward argument and evidence. Students trained in the Board style usually have the knowledge and need practice converting it into the form examiners credit.",
        "For students who learnt in Tamil medium, the language shift is real. Technical vocabulary, command terms like evaluate or compare, and timed writing in English are new skills. A one-to-one tutor can build them without slowing the subject, often within a term of regular lessons.",
        "The table shows how the four systems differ on the points that matter to Sankarankovil families.",
      ],
      table: {
        caption: "Tamil Nadu State Board, CBSE, IB and IGCSE compared for Sankarankovil families",
        columns: ["Aspect", "State Board", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Medium", "Tamil or English", "English, with Tamil or Hindi as a language", "English, plus a second language", "English, with optional languages"],
          ["Assessment", "Public exams each year in Classes 10 to 12", "Board exams plus internal marks", "Exams, internal assessments and essay", "Mostly exams"],
          ["Local coaching", "Abundant, including NEET and engineering preparation", "Available in larger schools and coaching centres", "None confirmed locally", "None confirmed locally"],
          ["Route in India", "Direct to state counselling and entrance exams", "Direct, including JEE, NEET and CUET-UG", "AIU equivalence certificate", "Often a stage before A Level or IB"],
        ],
      },
    },
    {
      heading: "What shapes the fee for IB and IGCSE tuition in Sankarankovil?",
      paragraphs: [
        "We do not publish prices, because a single figure would mislead. After a free trial lesson, the rate is sent in writing, leaving you time to read it at home and decide.",
        "What moves the rate: the level (Higher Level and Additional Mathematics need deeper specialists than Core work), the subject, the tutor's experience with that specific syllabus, the length and frequency of lessons, and how close the exam is. A tutor who has prepared many candidates for DP Chemistry HL is priced differently from one helping a Class 7 student with MYP reading.",
        "Local comparisons are useful. A tuition centre in Sankarankovil is cheaper per hour, but a class of many students works to a State Board or CBSE syllabus. A neighbourhood tutor may be strong in Mathematics and yet have no IB experience. Our fee pays for undivided attention and a match to the exact course.",
        "Families planning twelve months of steady lessons can ask for a longer arrangement drawn up on paper. Swapping a tutor who turns out to be a poor fit never attracts an extra fee.",
      ],
      bullets: [
        "Course level: HL and Additional Mathematics differ from Core",
        "Tutor experience with that exact syllabus and board",
        "Session length and lessons per week",
        "Closeness to the exam session",
        "A written rate before any booking",
      ],
    },
    {
      heading: "Online home tuition, tuition centres, local tutors or self-study: which fits Sankarankovil?",
      paragraphs: [
        "Tuition centres around Sankarankovil do well at State Board and CBSE preparation, including NEET and engineering entrance coaching. They are not designed for IB or IGCSE, which use different papers, command terms and mark schemes.",
        "A local private tutor can be excellent at school Mathematics and Science. But the IB, Cambridge and Edexcel each have their own marking approach, and very few tutors in a small town have worked with them. A correct explanation in the Board style can lose marks if the wording differs from what the examiner wants.",
        "Self-study suits disciplined students, since past papers and examiner reports are free on the boards' websites. Its weakness is feedback. Without someone to mark against the real scheme, students repeat the same habits for months.",
        "Online home tuition gives specialist attention at home, without a bus trip to Madurai. The table compares the four options on what parents ask most.",
      ],
      table: {
        caption: "Four ways to learn IB or IGCSE from Sankarankovil",
        columns: ["Option", "Fits IB or IGCSE", "Attention", "Travel", "Main limit"],
        rows: [
          ["Online home tuition", "Yes, tutor picked for the course", "Undivided, one student", "None", "Needs steady internet and a quiet desk"],
          ["Tuition centre", "Rarely, built for State Board, CBSE and entrance exams", "Shared with a batch", "Daily within town", "Different question style; few IB-trained staff"],
          ["Local private tutor", "Depends on the tutor", "Good for familiar subjects", "Tutor or student travels", "Hard to verify IB or IGCSE background"],
          ["Self-study", "Yes, with the right past papers", "None without an adult checking", "None", "No expert marking of written answers"],
        ],
      },
    },
    {
      heading: "How do Pongal, Aadi Thapasu and the north-east monsoon fit around the exam year?",
      paragraphs: [
        "Both qualifications hold a summer series and an autumn series, and the summer one, taken in May, is where the great majority of Indian schools enter their classes. School mock papers tend to arrive around January, which makes February to April the crunch.",
        "Tamil Nadu's festival year crosses this. Pongal in mid-January takes several days and coincides with mock season. Tamil New Year in April falls right in revision. Aadi Thapasu, in July or August, turns Sankarankovil itself into a pilgrimage centre for days, and Deepavali and Karthigai Deepam arrive in the autumn, when November candidates need every hour.",
        "Weather matters too. April and May are hot and dry. The north-east monsoon from October to December is the main rainy season in southern Tamil Nadu, which means heavy showers, power interruptions and patchy internet during exactly the November exam window. Strong winds in the summer months are well known across Tenkasi and Tirunelveli districts.",
        "We map these dates with parents at the start of each term and book around them. The table shows the typical year.",
      ],
      table: {
        caption: "Sankarankovil's year against the IB and IGCSE year",
        columns: ["Period", "Local pattern", "Effect on lessons"],
        rows: [
          ["January to February", "Pongal, mocks, cool mornings", "Mock review; pause for Pongal days"],
          ["March to April", "Tamil New Year, rising heat", "Highest intensity; evening slots"],
          ["May to June", "Hot and dry, exams", "Early-morning or night lessons"],
          ["July to September", "Aadi Thapasu, windy weather, new term", "Good time to start a new course; pause in festival week"],
          ["October to December", "North-east monsoon, Deepavali, November exams", "Backup power and hotspot advised; festival gaps planned"],
        ],
      },
    },
    {
      heading: "Which universities do IB and IGCSE students from Sankarankovil target?",
      paragraphs: [
        "Closer to home the familiar names are Anna University and its colleges, NIT Tiruchirappalli, IIT Madras, Thiagarajar College of Engineering in Madurai, Manonmaniam Sundaranar University in Tirunelveli, VIT, SRM and Madurai Kamaraj University. Most of them will want an equivalence certificate from the Association of Indian Universities before accepting an IB Diploma.",
        "Professional courses add their own conditions. The national entrance tests for engineering and medicine publish notes on international-board candidates, usually insisting on named subjects, and Tamil Nadu's state counselling keeps separate provisions for students from outside its own boards. Reading the current notes during Class 11, rather than in a panic a year later, avoids nasty surprises.",
        "Overseas study is common among families with relatives in Singapore, Malaysia, the Gulf, the UK or the United States. An IB Diploma score is read directly by overseas admissions offices, and IGCSE results provide a foundation for A Levels or IB. Predicted grades matter, so steady tutoring in Class 11 helps.",
        "A tutor can explain how subject combinations affect options, for instance why IB Mathematics AA HL fits engineering and economics aims, or why Biology with Chemistry keeps medical routes open. We do not promise admission anywhere.",
      ],
      bullets: [
        "Tamil Nadu options: Anna University, NIT Tiruchirappalli, IIT Madras, MSU Tirunelveli",
        "AIU equivalence certificate for most Indian applications",
        "JEE Main, NEET-UG and state counselling have separate rules for IB and IGCSE students",
        "Overseas routes depend on IB points or IGCSE plus A Level",
      ],
    },
    {
      heading: "How are IB Mathematics AA and AI, and the sciences, taught online in Sankarankovil?",
      paragraphs: [
        "Analysis and Approaches works heavily on algebra, calculus and proof, and suits students who plan to study engineering, mathematics or physics. Applications and Interpretation gives more weight to statistics, modelling and technology, and suits economics, business, psychology and the life sciences. A tutor helps families choose at the start.",
        "A lesson follows a steady pattern. The tutor sets a problem on a shared screen, the student works the solution on paper, and the camera or a tablet shows each line. Corrections happen at once, and a similar question follows. Over weeks, timed papers build speed and method selection.",
        "In the sciences, the work is about moving from knowing to writing. Sankarankovil students trained under the State Board or CBSE often calculate well and write brief explanations. Tutors teach a pattern for long answers: name the principle, link it to the data, explain the effect and conclude.",
        "Laboratory skills are taught without apparatus, by interrogating an experiment on paper. Which variable changes, what limits accuracy, how large is the uncertainty, what would improve the method? Numbers may come from the school lab or a simulation. The assessed write-up belongs to the student alone, and no tutor drafts or corrects it.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and how should a Sankarankovil student choose subjects?",
      paragraphs: [
        "Most IGCSE subjects are sat at one of two levels. The Core route tops out at a modest grade and leaves out the harder syllabus content, while Extended opens every grade and includes it. Anyone eyeing IB Diploma Mathematics or sciences, A Levels or an engineering degree should treat Extended as the default, since a Core foundation shows its cracks two years on.",
        "What to take depends on where the student is heading. Aspiring engineers do well with Mathematics, all three sciences and, if the school allows, Additional Mathematics. Medicine points to Biology and Chemistry with Physics beside them. Business families tend to add Economics, Business Studies or Accounting, and a solid English result plus a language keeps the profile balanced.",
        "The two boards are not interchangeable. Cambridge and Pearson Edexcel order topics differently, weight papers differently and examine practical skills in their own ways, so a student crossing from one to the other can find a chapter missing. A tutor who has taught both can spot those holes quickly and plug them in a handful of sessions.",
        "A private candidate in Sankarankovil begins with the published specification and books an exam centre well ahead, since seats and dates are fixed. Practice then follows past papers and examiner reports. Our tutors work through the specification in order and keep a running record of what has been covered and what remains.",
      ],
      table: {
        caption: "Core or Extended: a guide for Sankarankovil students",
        columns: ["Factor", "Core", "Extended"],
        rows: [
          ["Top grade", "Capped lower", "Full range"],
          ["Suits", "Students needing firm foundations", "Students aiming at IB HL, A Level or engineering"],
          ["Question style", "Shorter and more guided", "Longer, with stretch problems"],
          ["Tutoring emphasis", "Accuracy and confidence", "Problem solving and exam technique"],
        ],
      },
    },
  ],

  process: [
    { title: "Write to us", description: "A WhatsApp note or an email naming the class, the board or IB stage, the subject and the month of the exam is enough to begin." },
    { title: "Meet the shortlist", description: "One or two tutors are put forward, each with a line on what they have recently taught and how they would start with your child." },
    { title: "Sit a trial lesson", description: "A full first lesson on video, free of charge, so the student and the tutor can judge the chemistry before anyone commits." },
    { title: "Weigh the quote", description: "Should the trial go well, a written quote with the weekly timetable arrives, and nothing starts until you agree to it." },
    { title: "Settle into a rhythm", description: "Weekly sessions follow, each closed with a brief report to parents. A poor fit is handled by swapping tutors, not by pushing on." },
  ],

  whyPoints: [
    { title: "Course-level matching", description: "Tutors are picked because they have taught this board, this stage and this subject lately, which matters more than a general résumé." },
    { title: "Designed for the far south", description: "Nobody around Sankarankovil specialises in these syllabuses, so the whole arrangement assumes a screen and a steady connection." },
    { title: "Reports you can read", description: "Parents get a short account of each session: topics covered, errors spotted and the plan for the next one." },
    { title: "A firm line on authorship", description: "Guidance on criteria and structure is fine. Drafting, rewriting or polishing a student's assessed work is not something our tutors do." },
    { title: "No awkwardness about swapping", description: "If a tutor and student do not click, the change is arranged quickly and costs nothing extra." },
    { title: "Local dates respected", description: "Temple festival weeks, Pongal, Deepavali and the heavy rain months are written into the timetable before lessons start." },
  ],

  faqs: [
    {
      question: "Can I find IB and IGCSE tutors in Sankarankovil itself?",
      answer: "Practically speaking, no. Teachers in town know the State Board and CBSE well, but hardly any have handled Diploma or Cambridge papers. Our tutors sit elsewhere in India and teach over video on Indian time. Each is chosen for one course, such as MYP Sciences or DP Economics SL, and the session runs at your child's desk with a shared whiteboard.",
    },
    {
      question: "Does anyone come to the house for tuition in Sankarankovil?",
      answer: "No one does. Home visits are run only in Gurugram and parts of Delhi NCR, so tutors do not travel to Sankarankovil. What you get is online home tuition: a private lesson your child attends from their own room, with the tutor watching handwritten working through a camera and sharing notes on screen.",
    },
    {
      question: "Which schools near Sankarankovil teach IB or Cambridge courses?",
      answer: "None inside the town could be confirmed. The closest verified options sit in Madurai and further away in Chennai, and the clusters on this page list them. Confirm current curricula, fees and transport with each school yourself. We are not affiliated with any of them and will not rank one above another.",
    },
    {
      question: "How is the fee for lessons decided?",
      answer: "It is set per tutor and per course, then sent to you in writing once the free trial is over. Level, subject, the tutor's track record with that syllabus, lesson length, weekly frequency and exam closeness all feed in. Publishing one number would hide those differences, so we prefer to quote after seeing what your child needs.",
    },
    {
      question: "Our school is a State Board school. Is IGCSE realistic?",
      answer: "It can be, if the student is ready to work in English and to explain reasoning at length. Sitting IGCSE papers needs an approved exam centre or a school that offers them. A tutor can run a diagnostic first and tell you honestly how wide the gap is, which is usually smaller in Mathematics than in written English.",
    },
    {
      question: "Is Tamil available as a subject?",
      answer: "Where the IB or IGCSE syllabus includes it, yes, and we arrange a tutor once the exact course is confirmed. Hindi is easier to staff at every level. Lessons work through set texts, exam-style writing in the correct register and spoken practice, starting from whether the language is the student's first or a learned one.",
    },
    {
      question: "Can a tutor help with my child's Extended Essay draft?",
      answer: "Only in the coaching sense. A tutor may talk through the marking criteria, test whether a research question is workable and point out structural weaknesses. Writing paragraphs, editing sentences or supplying data is out of bounds. That rule covers the internal assessments, TOK essay and coursework too, because those must stay the candidate's own.",
    },
    {
      question: "Rain knocks out our power every November. What then?",
      answer: "Plan for it instead of hoping. A laptop on full charge, a phone hotspot and a second slot pencilled in for exam weeks cover most cases. If a storm ends a session early, tell the tutor and we move the lost time to another day without billing for it. Audio-only fallback still lets a tutor talk through a problem.",
    },
    {
      question: "How early should we begin before the May papers?",
      answer: "Seven to nine months is comfortable, so August or September suits. That spacing leaves room to finish content, attempt full papers and absorb feedback after a January mock. Students who join later can still improve, with tighter weekly plans. The opening lesson tests what is already firm so nothing is taught twice.",
    },
    {
      question: "Do you take very young students?",
      answer: "Yes, from PYP age upwards. Sessions for small children run about half an hour and lean on reading aloud, counting games and conversation. MYP learners get subject work tied to assessment criteria. For the first few weeks it helps to have an adult seated near the screen until the routine feels normal.",
    },
    {
      question: "Will Indian colleges recognise an IB or IGCSE record?",
      answer: "Generally yes, though the paperwork differs. Many institutions ask for an equivalence certificate from the Association of Indian Universities, and entrance tests such as JEE Main or NEET-UG state their own conditions for international boards. Tamil Nadu's counselling rules for other-board candidates should be read in Class 11. Tutors explain subject implications but cannot process any certificate.",
    },
    {
      question: "What kit does a student need for online lessons?",
      answer: "A laptop or tablet that can run video, a headset if the house is noisy, reliable broadband or a solid mobile plan, and a desk with decent light. A phone propped over the page works as a second camera for handwriting. Graphing calculators matter only where the school's course insists on them.",
    },
    {
      question: "We live in Puliyangudi or Vasudevanallur. Can we still join?",
      answer: "Yes. Distance from Sankarankovil makes no difference because nobody travels. Sivagiri, Thalaivankottai and villages around them work equally well. Do a test call at the hour you plan to use, since evening speeds can dip. If the line is shaky, choose another slot or send photographs of written work for the tutor to mark.",
    },
    {
      question: "Cambridge or Pearson Edexcel: how do we pick?",
      answer: "Most families never choose, since the school enrols students with one board. Private candidates do choose, and should compare syllabus content, paper formats and exam-centre availability in the subjects they want. Cambridge papers lean toward multi-part structured questions; Edexcel International GCSE weights topics a little differently. A tutor familiar with both can lay out the contrast.",
    },
    {
      question: "What is the first step if we want to try a lesson?",
      answer: "Send a short message to support@ibgram.com or on WhatsApp to +91 7439 368 115 giving class, board or IB stage, subject and target exam month. Expect a tutor suggestion, then a free session. Charges begin only if you ask to continue, and you will see the terms in writing before that happens.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The national overview, including the long list of towns taught online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring by programme and subject." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE, subject by subject." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "How we plan the two-year Diploma." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criterion-based help for Class 6 to 10." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Short, friendly lessons for primary learners." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "What CP combines and who it suits." },
    { label: "IB Mathematics tutors", href: "/courses/ib/mathematics/", description: "AA and AI, SL and HL." },
    { label: "Our tutors", href: "/tutors/", description: "Tutor profiles, subjects and experience." },
    { label: "Contact us", href: "/contact-us/", description: "Ask a question or book a free lesson." },
    { label: "Tirunelveli", href: "/tirunelveli/", description: "The nearest big city in the district region." },
    { label: "Rajapalayam", href: "/rajapalayam/", description: "A neighbouring town with the same online service." },
    { label: "Madurai", href: "/madurai/", description: "The closest hub of confirmed international schools." },
  ],

  closingHeading: "Book a free lesson from your own desk in Sankarankovil",
  closingBody:
    "Whether your child is halfway through MYP, facing DP papers next May or quietly preparing IGCSE Mathematics from home, a single trial session will show what a matched tutor adds. Write to support@ibgram.com or WhatsApp +91 7439 368 115 and tell us the course. Fees, if you continue, are put in writing first.",
  tutorsIntro:
    "Our teachers work from different parts of India but keep Indian Standard Time hours. For a Sankarankovil family the first job is locating one who has recently taught that particular board and stage, because nobody local does.",
};
