import type { CitySeoPage } from "../types";

/**
 * /ramdurg/ - IB and IGCSE tutoring page for Ramdurg, a taluk town in Belagavi district, Karnataka.
 * Online-only delivery: tutors do not visit homes in Ramdurg (in-person home tuition runs only in
 * Gurugram and parts of Delhi NCR). No IB or Cambridge/Edexcel school is confirmed in the town, so
 * stripSchools is empty and the clusters are honestly labelled nearby-city groups.
 */
export const ramdurg: CitySeoPage = {
  slug: "ramdurg",
  countryName: "Ramdurg",
  countryNameLong: "Ramdurg, Belagavi district, Karnataka",
  demonym: "Ramdurg",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Sugar crushing months between October and March, the Godachi fair in December, the hot dry stretch before the monsoon and each family's own school timetable all decide which evening slot actually holds",
  lastUpdated: "2026-09-21",
  geo: { latitude: 15.95, longitude: 75.3 },
  wikipedia: "https://en.wikipedia.org/wiki/Ramdurg",
  alternateNames: ["Ramdurga", "Ramdurg Belagavi", "Ramdurg taluk"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Ramdurg | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Ramdurg, Belagavi district: live one-to-one online home tuition in Maths, sciences and languages, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Ramdurg",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR RAMDURG FAMILIES",
  heroSubtitle:
    "Private tuition from home, delivered live over video: IB and IGCSE tutors for Ramdurg students who study in Belagavi, Dharwad, Bagalkot or a boarding school further away, or who are preparing an international syllabus without a school nearby. One tutor, one student, a written note after every session, and a free trial lesson before any commitment.",
  primaryKeyword: "IB and IGCSE tutors in Ramdurg",
  imageAltText: "A Ramdurg student at a study table with a laptop, joining a live one-to-one IB Mathematics lesson from home",
  secondaryKeywords: [
    "IB tutor Ramdurg",
    "IGCSE tutor Ramdurg",
    "IB home tuition Ramdurg",
    "IGCSE home tuition Ramdurg",
    "IB private tuition Ramdurg",
    "IB Maths tutor Ramdurg",
    "IGCSE Maths tutor Ramdurg",
    "IB Physics tutor Ramdurg",
    "IB Chemistry tutor Ramdurg",
    "IB Biology tutor Ramdurg",
    "IB DP tutor Ramdurg",
    "IB MYP tutor Ramdurg",
    "IB PYP tutor Ramdurg",
    "IGCSE online tuition Ramdurg",
    "Cambridge IGCSE tutor Ramdurg",
    "online IB tutor Belagavi district",
    "IB tutor Ramdurg taluk",
    "IGCSE tuition Belagavi district",
    "IB tuition near Saundatti and Gokak",
  ],

  heroTrustPoints: [
    "Every lesson is live and one-to-one online; no tutor travels to Ramdurg, because home visits run only in Gurugram and parts of Delhi NCR",
    "Tutors are based in India and teach on Indian Standard Time, so a late-afternoon or evening slot after school works",
    "A free trial lesson and a written note afterwards, with the rate quoted in writing before anything is booked",
    "Independent of the IB, Cambridge, Pearson and every school named on this page",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "IGCSE", label: "Cambridge and Edexcel" },
    { value: "IST", label: "Same clock as home" },
    { value: "Free trial", label: "Before any payment" },
  ],

  intro: {
    heading: "Who looks for IB and IGCSE tutors in Ramdurg, and why",
    paragraphs: [
      "Ramdurg is a taluk town of roughly thirty-five thousand people in the south-west corner of Belagavi district, with Dharwad, Belagavi and Bagalkot each seventy to a hundred kilometres away. Its colleges and sugar factories serve the surrounding villages, and nearly every school in the taluk follows the Karnataka State Board or CBSE. So a family asking for IB and IGCSE tutors in Ramdurg is usually in one of a few specific situations, and the tutoring that helps depends on which one.",
      "Some children are enrolled at a boarding school elsewhere that teaches the IB or Cambridge syllabus, and come home for holidays needing a tutor who can keep a subject moving. Others have moved to Bengaluru, Pune or abroad and parents want home-language support. A third group are preparing Cambridge IGCSE as private candidates, which is possible without a school if an exam centre accepts the entry. Private tuition from home, taught online, fits all three.",
      "There is no home visit. Tutors in this service are based in India and teach through live video, and in-person lessons exist only in Gurugram and parts of Delhi NCR. For a family in Ramdurg that is less of a loss than it sounds, since the nearest specialist in IB Chemistry or IGCSE Additional Mathematics would otherwise be two hours away by road.",
      "IB Gram is an independent tutoring service, not part of the International Baccalaureate Organization, Cambridge or Pearson. Tutors explain, set practice, mark and coach. They do not write Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework for a student.",
    ],
    bullets: [
      "Boarding-school students needing holiday and term-time support",
      "Families relocating between Ramdurg and Bengaluru, Pune or overseas",
      "Private candidates preparing Cambridge IGCSE without a nearby school",
      "Live online lessons only; no tutor visits homes in Ramdurg",
      "Free trial lesson and a written note after each session",
    ],
  },

  programmesIntro:
    "No school in Ramdurg is confirmed to run any IB programme, so these four stages matter here mainly for children who study elsewhere or who will move. Each card says what the stage involves and what a Ramdurg family can reasonably expect from tutoring alongside it.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "The Primary Years Programme replaces subject silos with units of inquiry, so a term on how communities organise themselves may draw on reading, number work and a little map study together. Children are assessed on understanding and reflection, not marks, and the final-year Exhibition is a small research project of their own choosing.",
      countryNote:
        "For a Ramdurg child, PYP tutoring is usually a bridge: a family has moved from a Kannada-medium or CBSE primary classroom to an inquiry school and the child needs patient help with reading aloud, explaining reasoning and sticking with open-ended questions.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Middle Years subjects are marked against published criteria, often four per subject, and every student completes a Personal Project near the end. The usual stumbling block is not the content but writing an answer that visibly meets each criterion, which tutoring can rehearse in short, repeated drafts.",
      countryNote:
        "Students from taluk-town schools often move into an MYP school in Class 6 or Class 9. The first term tends to be hardest for written explanations in English and for structured lab reports, both of which respond well to weekly one-to-one practice.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, plus Theory of Knowledge, the Extended Essay and Creativity, Activity, Service. Final papers are sat in May, with a November session in some schools, and coursework moderated by the IB counts toward each subject score out of 7.",
      countryNote:
        "Diploma students from Ramdurg generally study at a boarding school in another city. They tend to need exam-technique work at HL level, particularly in Mathematics and the sciences, in the months before mock examinations.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Career-related Programme combines at least two Diploma courses with a career-related study, a reflective project and a personal and professional skills course. It suits students who know their direction early, in design, hospitality, business or computing.",
      countryNote:
        "Few Indian schools run CP and none is known in Belagavi district. A Ramdurg student on this route would be enrolled elsewhere, and tutoring would focus on the Diploma courses inside the programme.",
    },
  ],

  subjectsIntro:
    "Tutors teach IB courses at both Higher Level and Standard Level. The list below is what Ramdurg students ask about most; if your course is missing, write to support@ibgram.com and the matching team will check whether a tutor teaches it.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, algebra and proof-style reasoning for students aiming at engineering or pure science. Tutors build fluency with non-calculator papers first." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology use, with graphical-calculator skills practised on real data sets rather than textbook toys." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics, waves, fields and modern physics, with extra attention to unit handling and the data-based questions in Paper 2." },
    { name: "Chemistry", levels: "SL / HL", description: "Structure, bonding, kinetics, equilibrium and organic pathways, with practical write-up practice for the Internal Assessment method." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics, ecology and human physiology, trained around the command terms examiners actually use." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and development economics with diagram discipline and current-affairs examples tied to the Indian economy." },
    { name: "Business Management", levels: "SL / HL", description: "Organisation, marketing, finance and operations, with case-study technique for the pre-released paper style questions." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming logic, data structures and systems fundamentals, with exam-style pseudocode and trace tables." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close reading, comparative commentary and oral work, aimed at students who learned English as a second or third language after Kannada." },
    { name: "Hindi B", levels: "SL / HL", description: "Language acquisition for students who use Hindi daily, with structured written tasks and the interactive oral." },
    { name: "Psychology", levels: "SL / HL", description: "Research methods, biological, cognitive and sociocultural approaches, practised through short-answer and essay plans." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "An interdisciplinary course on ecosystems and sustainability that suits students from agricultural and river-basin regions." },
    { name: "Theory of Knowledge", levels: "Core", description: "Guidance on how to structure thinking about knowledge questions, with no ghost-writing of the exhibition or essay." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE tutors are matched by exam code and tier, because a Core candidate and an Extended candidate need different lessons even in the same subject.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with tier-specific papers and non-calculator practice built into each week." },
    { name: "Additional Mathematics", levels: "Extended", description: "A bridge to AS and IB Mathematics HL, covering calculus, trigonometry and functions at a quicker pace." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, electricity, thermal physics and waves, with alternative-to-practical question technique." },
    { name: "Chemistry", levels: "Core / Extended", description: "Atomic structure, reactivity, organic chemistry and quantitative work, including mole calculations that most students find slippery." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, plant and human systems, inheritance and ecosystems, with diagram labelling practised under time." },
    { name: "Computer Science", levels: "Core", description: "Algorithms, programming and data representation, with pseudocode papers rehearsed regularly." },
    { name: "English as a Second Language / First Language English", levels: "Core / Extended", description: "Reading, directed writing and speaking skills for students whose home language is Kannada, Marathi or Urdu." },
    { name: "Hindi as a Second Language", levels: "Core", description: "Reading and writing tasks in Devanagari, with oral preparation for the speaking component." },
    { name: "Business Studies and Economics", levels: "Core / Extended", description: "Foundations of enterprise and the economy, using local examples from sugar, agriculture and small trade." },
  ],

  regionsTitle: "Ramdurg and the towns around it",
  regionsIntro:
    "Online lessons need only a laptop and a steady connection, so any home in the taluk works. These are the places families most often write from, with the timing points that affect scheduling.",
  regions: [
    { name: "Ramdurg town centre", note: "The market area and the old fort side. Most households here use fixed broadband or a home Wi-Fi router, and evening power cuts are the thing to plan around." },
    { name: "Near the Government First Grade College", note: "Close to the college and the PU campuses, where students finish classes by early afternoon and are free for a late-afternoon lesson." },
    { name: "Sugar factory belt", note: "Households linked to the sugar factories live on a seasonal rhythm; crushing season from October to March can push family routines into the evening." },
    { name: "Dodamangadi Tree Park side", note: "A quieter edge of town with newer housing, popular with families who work in nearby towns." },
    { name: "Yarikittur", note: "A village in the taluk known for its Muharram observances. Lessons are best moved away from the main procession days." },
    { name: "Godachi", note: "Site of the December fair. Visiting relatives and crowds mean a short break in the lesson calendar around fair days." },
    { name: "Toragal", note: "A village near the old Toragal fort. Mobile data is the usual connection, so a lesson needs a second network as backup." },
    { name: "Hullur and Kerur road villages", note: "Agricultural villages along the roads towards Badami and Bagalkot, where students come to town for school and tuition." },
    { name: "Saundatti side", note: "Families on the Saundatti side of the taluk often have relatives in Belagavi and Hubballi, and schedule lessons around those trips." },
  ],

  tutorsIntro:
    "These tutors teach live from India on the same clock as Ramdurg. Nobody travels to the taluk; each profile shows the subjects, levels and boards taught, and the trial lesson is free.",
  schoolClusters: [
    {
      city: "Ramdurg and Belagavi district: local schools",
      note: "This is the honest picture. We could not confirm an IB or Cambridge/Edexcel school in Ramdurg, so no school is named here. Local options are Karnataka State Board and CBSE schools, and most students who need an international syllabus move away or take IGCSE as private candidates through an authorised centre.",
      schools: [],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Bengaluru is the usual destination for families who want an IB Diploma. It is roughly an overnight bus ride away, so these schools suit boarding or a family move rather than commuting.",
      schools: ["Canadian International School", "Stonehill International School"],
    },
    {
      city: "Nearby: Pune",
      note: "Pune has several IB and Cambridge schools and is reachable by train from Belagavi region, which makes it a second option for families already connected to Maharashtra.",
      schools: ["Mahindra International School", "Symbiosis International School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent online tutoring service. It has no partnership with, and is not endorsed by, any school listed here, the International Baccalaureate Organization, Cambridge University Press and Assessment or Pearson. Schools are named only as locations families may study at; admission and syllabus questions belong to the school.",

  modesIntro:
    "Three ways to learn are available to a family in Ramdurg, and all three run through a video call. Because tutors are not within driving distance, we suggest choosing by what your child needs this term, not by where the tutor is.",
  modes: [
    {
      title: "Weekly one-to-one online lessons",
      description: "One tutor, one student, a fixed weekly slot. This is the standard arrangement for steady syllabus work.",
      bullets: ["Same tutor every week", "Screen sharing with a digital whiteboard", "Written note after each session", "Slots after school or at weekends"],
    },
    {
      title: "Exam sprint blocks",
      description: "Two to three lessons a week for four to six weeks before mocks, board exams or the May session.",
      bullets: ["Past-paper timing practice", "Targeted fixes for weak topics", "Mark scheme reading", "Pause when the school calendar demands"],
    },
    {
      title: "Private tuition from home, shared across siblings",
      description: "Two siblings in adjacent classes can share a tutor if the subject is the same, which keeps the cost per child lower. The lesson is still online and the tutor does not visit.",
      bullets: ["Same subject, different levels possible", "Separate written notes", "Rate quoted in writing first", "No home visits in Ramdurg"],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Ramdurg?",
      paragraphs: [
        "We could not confirm an IB or Cambridge/Edexcel IGCSE school inside Ramdurg, and rather than guess we leave the question open. The town's educational identity is built on its Government First Grade Degree College, a Science College, Government PU institutions and a network of Kannada-medium and CBSE schools that feed them. For a child on an international syllabus, the school is almost always elsewhere.",
        "That is not unusual for a taluk town in northern Karnataka. The cities with working IB or Cambridge schools are Bengaluru, Mysuru, Mangaluru, Pune and Hyderabad. Belagavi and Hubballi-Dharwad have a handful of private schools that advertise international-style teaching, but we have not been able to verify an authorisation for any of them, so we name none.",
        "What this means in practice is that a Ramdurg family looking for IB and IGCSE tutors in Ramdurg is almost always supporting a child who studies away, who is about to move, or who is sitting exams privately. Each of those needs a different plan, and a first call with the matching team is the quickest way to find which one fits.",
        "If you are considering an IB school and want to understand the year-by-year demands before deciding, a tutor can take a short diagnostic lesson and tell you how your child's current preparation compares. That conversation costs nothing beyond the free trial slot, and it often settles whether the family should apply or stay on the state board.",
      ],
    },
    {
      heading: "Karnataka State Board, CBSE, IB or IGCSE: which suits a Ramdurg student?",
      paragraphs: [
        "Most Ramdurg students sit the Karnataka State Board SSLC in Class 10 and the second PU examination in Class 12, or take CBSE through one of the private schools. Both lead cleanly to KCET, NEET and JEE Main. IB and IGCSE are different tools: they suit families who expect to leave India, who want a broad subject mix to age eighteen, or who value coursework and oral assessment alongside written papers.",
        "The practical difference shows in how a week of study feels. State board preparation leans on a fixed textbook and a predictable question bank. IGCSE rewards understanding of concepts and wording in unfamiliar contexts. IB Diploma adds six subjects, a long essay and a knowledge course, so a student carries more tasks at once and needs steadier time management.",
        "Language is a real consideration. Students who studied in Kannada through Class 8 may find IGCSE English or IB English A demanding in the first year. Tutoring in English reading, summary writing and discussion pays back across every other subject, and it is often the first thing a tutor builds.",
        "The table sets the paths side by side. It is a guide, not advice to change boards; switching mid-year is rarely wise.",
      ],
      table: {
        caption: "Board comparison for a Ramdurg student",
        columns: ["Feature", "Karnataka State Board / PU", "CBSE", "Cambridge IGCSE / Edexcel", "IB Diploma"],
        rows: [
          ["Typical age of entry", "Class 1 onwards", "Class 1 onwards", "Class 9-10 (ages 14-16)", "Class 11-12 (ages 16-19)"],
          ["Main assessment", "Annual written papers", "Annual written papers", "Written papers plus some coursework by subject", "Written papers, coursework, Extended Essay"],
          ["Language of instruction", "Kannada or English", "English or Hindi", "English", "English"],
          ["Entrance route in India", "KCET, NEET, JEE Main", "JEE Main, NEET, CUET", "Needs AIU equivalence for some courses", "AIU equivalence, CUET-UG, JEE and NEET eligibility checks"],
          ["Availability near Ramdurg", "Widely available", "Several private schools", "Not confirmed locally; private candidates possible", "Not confirmed locally; boarding elsewhere"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost for a Ramdurg family?",
      paragraphs: [
        "We do not publish a price list, because the rate depends on the tutor and the subject rather than on the town. A first-year IB Diploma Mathematics HL tutor with years of marking experience will cost more than a Class 9 IGCSE English tutor, and a block of exam-sprint lessons is priced differently from a once-a-week plan.",
        "Four things move the rate most. The first is the level: Higher Level Diploma courses and IGCSE Additional Mathematics sit at the top. The second is tutor experience, including examiner or moderator background. The third is frequency, since twice-weekly lessons usually come with a slightly lower hourly figure. The fourth is the length of commitment. A family quoted in writing before booking knows exactly what each lesson costs.",
        "There is no travel cost in the picture, which is a real saving compared with hiring a tutor from Belagavi or Hubballi who would charge for the journey. A Ramdurg family also avoids the lost afternoon of a long bus ride to a coaching centre.",
        "The free trial is a full lesson. If the fit is wrong, the tutor can be changed without paying for the first one, and the written note you receive after the trial shows the level the tutor believes your child is at.",
      ],
      bullets: [
        "Level of the course: Higher Level and Additional Mathematics at the top",
        "Tutor experience, including examiner or moderator history",
        "Lessons per week and length of the block",
        "Rate quoted in writing before you book anything",
      ],
    },
    {
      heading: "Online home tuition, coaching centre, local private tutor or self-study?",
      paragraphs: [
        "Ramdurg families have four realistic options for an international syllabus. The first is a coaching centre in Belagavi or Hubballi, which means a daily bus journey or a hostel stay. The second is a private tutor from the local area, usually a school teacher or a graduate, who may know the state board well but rarely the IB command terms. The third is self-study from books and videos. The fourth is online one-to-one tuition from a specialist.",
        "Self-study works for disciplined older students and costs little, but gives no feedback on written answers. Coaching centres are strong for JEE and NEET but rarely cover IB internal assessment or IGCSE Extended papers. A local tutor is convenient and affordable but may have no sight of a Cambridge mark scheme.",
        "Online one-to-one tuition at home removes travel, brings in a specialist who has taught the exact course and keeps the lesson aligned to your child's own paper. It does depend on connectivity, and some younger children concentrate better in a room with another person present.",
        "The table compares them on the points families ask about most. Where two options tie, the cost and the time lost to travel usually decide.",
      ],
      table: {
        caption: "Ways to get IB or IGCSE help from Ramdurg",
        columns: ["Option", "Subject specialist", "Travel needed", "Feedback on written work", "Flexible timing"],
        rows: [
          ["Online one-to-one from home", "Yes, matched by course", "None", "Detailed, with a written note", "Yes, in IST evenings and weekends"],
          ["Coaching centre in Belagavi or Hubballi", "Strong for JEE and NEET, patchy for IB", "Long daily journey or hostel", "General, group-based", "Fixed batch times"],
          ["Local private tutor", "Usually state board or CBSE", "Short", "Depends on the individual", "Moderate"],
          ["Self-study with books and videos", "No", "None", "None unless paper is self-marked", "Fully flexible"],
        ],
      },
    },
    {
      heading: "Exam calendar and the Ramdurg school year",
      paragraphs: [
        "IB Diploma examinations run in May, with results released in July, and some schools also use a November session. Cambridge IGCSE has main series in May-June and October-November, plus a smaller March series for India. Pearson Edexcel IGCSE follows a similar pattern with January, May-June and October-November sittings.",
        "Local weather and festivals shape study weeks. The sugar factories crush from roughly October to March, so many households in the taluk are busy in the evenings. Summer in the Deccan plateau is hot and dry from March to May, with power cuts that are worst just before the monsoon. Muharram, Ugadi, Dasara and Deepavali each interrupt a few days.",
        "December brings the Godachi fair in the taluk, which pulls relatives from across northern Karnataka and often takes a family away for two or three days. We suggest letting your tutor know the dates in September, so that mock-exam blocks do not land on top of them.",
        "The table lays out a typical IB and IGCSE study year for a Ramdurg student. Individual schools differ, so your child's own calendar always comes first.",
      ],
      table: {
        caption: "A typical IB and IGCSE year, adapted to Ramdurg",
        columns: ["Period", "Academic focus", "Local factor", "What tutoring does"],
        rows: [
          ["June to September", "New term, content teaching", "Moderate monsoon, school restarts", "Fill gaps from the previous year; build habits"],
          ["October to December", "Mock exams, IA deadlines", "Dasara, Deepavali, Godachi fair", "Past-paper practice, IA method lessons"],
          ["January to March", "Revision, Cambridge March series", "Hot, dry weather begins", "Timed papers, error logs"],
          ["April to May", "Final exams", "Peak heat, power cuts", "Short, focused lessons; backup power plan"],
          ["June to July", "Results and university planning", "Monsoon returns", "Pathway planning, retake advice"],
        ],
      },
    },
    {
      heading: "University pathways from Ramdurg after IB or IGCSE",
      paragraphs: [
        "A student who finishes the IB Diploma can apply to universities in India, the UK, the US, Canada, Australia, Singapore and parts of Europe. In India, the Association of Indian Universities issues an equivalence certificate for the Diploma, which most universities require. The certificate is a school and student matter, and the school's coordinator can advise on the timing.",
        "For Indian courses, CUET-UG is increasingly the common route to central and many state universities, with IB and IGCSE students sitting subject tests like anyone else. Engineering and medicine need additional care: JEE Main and NEET have eligibility rules about subject combinations and Class 12 equivalents. Parents should read the current notice from the National Testing Agency each year and not rely on older guidance.",
        "Karnataka students who plan to stay in the state often compare KCET seats against the IB route. IB students may be eligible in some categories after equivalence, but rules change and are different for each course, so verify with the admissions office directly.",
        "For study abroad, predicted grades, personal statement and, for the US, SAT or ACT scores matter. A tutor can help with subject strength and test preparation, but never writes the application essay itself.",
      ],
    },
    {
      heading: "How do IB Maths and the sciences work for a Ramdurg student?",
      paragraphs: [
        "IB Mathematics has two courses. Analysis and Approaches suits students who like algebra, calculus and proof, and is the stronger preparation for engineering and pure science. Applications and Interpretation focuses on statistics, modelling and technology, and suits students heading to economics, psychology or business. Both are offered at SL and HL, and the choice should follow the university course, not marks alone.",
        "The Internal Assessment in Mathematics is an exploration of the student's own choosing. Tutors may talk through methods, check that the maths is correct and discuss structure, but the student writes it. This boundary is held strictly.",
        "In Physics, Chemistry and Biology, Paper 1 is multiple choice, Paper 2 mixes short and extended answers, and Paper 3 covers experimental skills and options. A tutor typically spends the first month making unit handling, graph reading and command terms automatic, then moves to full papers under time.",
        "Students from Karnataka board backgrounds are often strong on factual recall and weaker on extended reasoning in unfamiliar contexts. We use a weekly 'explain it aloud' routine to bring the two together, followed by a short written answer marked against the official scheme.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects to choose?",
      paragraphs: [
        "Most IGCSE subjects with tiers offer a Core paper capped at grade C and an Extended paper reaching A*. The decision is made by the school, usually in Class 9, and a student who has any plan to study sciences or mathematics at A Level or IB should be on Extended. Moving up later is hard because the content is different.",
        "Subject choices matter more than people expect. A typical student takes six to ten IGCSEs, including English, Mathematics and at least one science. For Ramdurg families who intend to continue to the IB Diploma, strong results in Mathematics, a science and a language give the widest options.",
        "Private candidates face a few extra steps. They must find an authorised centre that accepts external entries, enter early and arrange practical assessments for science subjects, sometimes through alternative-to-practical papers. Our tutors know how these work and can help you plan, but entry itself is the family's responsibility.",
        "Edexcel and Cambridge differ in layout and sometimes in emphasis, so we match the tutor to the board and code your child is sitting, and never teach from the wrong specification.",
      ],
    },
  ],

  process: [
    { title: "Send a message", description: "Write on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the course, class and any exam date." },
    { title: "Share the context", description: "A few questions about the school, board, current marks and the topics your child finds hardest." },
    { title: "Meet a matched tutor", description: "You are introduced to one tutor whose subject and level fit, with a rate quoted in writing." },
    { title: "Free trial lesson", description: "A real lesson on a topic that matters, followed by a written note on what the tutor saw." },
    { title: "Weekly sessions", description: "A fixed slot each week, tutor changes if the fit is wrong, and a short note after every lesson." },
  ],
  whyPoints: [
    { title: "A specialist, wherever you live", description: "The tutor is chosen for the course, not for how close they are to Ramdurg." },
    { title: "No travel, no lost afternoons", description: "The lesson happens at home, so there is no bus ride to Belagavi or Hubballi." },
    { title: "Honest about what we do", description: "No tutor visits homes in Ramdurg, and no guarantee of grades is ever made." },
    { title: "Written notes after every session", description: "Parents see what was covered and what comes next." },
    { title: "Free trial and a tutor change", description: "If the first match is not right, we find another without penalty." },
    { title: "Coaching, not ghost-writing", description: "Tutors never write IAs, essays or coursework." },
  ],

  faqs: [
    { question: "Do you have IB and IGCSE tutors in Ramdurg?", answer: "Yes, but they teach online rather than in person. Tutors are based in India and teach one-to-one over live video at times that suit Ramdurg students. Home visits run only in Gurugram and parts of Delhi NCR, so nobody travels to Ramdurg. After a free trial lesson, a matched tutor continues with a weekly slot, and a written note follows each session." },
    { question: "Is there home tuition for IB or IGCSE in Ramdurg?", answer: "Private tuition at home is possible, but only in the online form: the student sits at home with a laptop and the tutor teaches live. Tutors do not come to your house in Ramdurg. In-person home visits exist only in Gurugram and some parts of Delhi NCR. Many families find the specialist tutor and the saved travel time worth the trade." },
    { question: "Which IB and IGCSE schools are in Ramdurg?", answer: "We could not confirm any IB or Cambridge/Edexcel school in Ramdurg, so we do not name one. Local schools follow the Karnataka State Board or CBSE. Families who want an international syllabus usually look to Bengaluru, Pune or boarding schools, or sit IGCSE as private candidates. Always confirm authorisation directly with the school or the exam board." },
    { question: "What does IB tuition cost in Ramdurg?", answer: "Rates depend on the tutor and subject rather than the town, so there is no single price. Higher Level Diploma courses and IGCSE Additional Mathematics sit towards the top, and weekly plans usually cost less per hour than occasional lessons. A rate is quoted in writing before you book, and the first trial lesson is free, so you see the lesson before any money moves." },
    { question: "Can my child take IGCSE as a private candidate from Ramdurg?", answer: "Yes, in principle. A private candidate registers through an authorised Cambridge or Pearson exam centre, often in Bengaluru or another large city, and may need to arrange practical assessments for science subjects. Our tutors can teach the syllabus and mark past papers, but the entry and centre choice remain the family's responsibility. Start planning at least six months ahead." },
    { question: "How do online lessons work if electricity or internet is unreliable?", answer: "We plan for it. Sessions are short, a tutor keeps the notes shared, and a mobile hotspot is a standard backup. If a lesson drops, the remaining time is rescheduled. Power cuts are most common in the weeks before the monsoon, so we suggest not booking long mock papers on those evenings without a backup power supply." },
    { question: "Will a tutor help with my child's Internal Assessment or Extended Essay?", answer: "A tutor can coach the method, but the work stays the student's own. They explain how a good research question looks, review a draft structure and discuss feedback. They will not write, rewrite or edit the submission. Schools and the IB take this very seriously, and we work within the same rules." },
    { question: "My child studies in Kannada medium. Can IGCSE or IB English be managed?", answer: "Yes, with time. A student moving from Kannada-medium to English-medium examination needs vocabulary, structured reading and a lot of short writing practice. Tutors begin with comprehension and summary tasks and add essay planning gradually. Most students show visible progress in one term, though the pace depends on how often they read for pleasure." },
    { question: "Can siblings share a tutor?", answer: "Yes, if the subject is the same and the levels are close. Two children in adjacent classes can share a session, which reduces the cost per child. Lessons are still online, and each child receives a separate written note. If the levels are far apart, separate sessions work better and the matching team will suggest which." },
    { question: "What timings can you offer for Ramdurg?", answer: "Tutors work in Indian Standard Time with the same clock as Ramdurg, so late-afternoon, evening and weekend slots are common. Morning slots exist for older students on study leave. Tell us about your school hours, Godachi fair dates, family travel and exam days, and the matching team will build a weekly pattern that holds." },
    { question: "Do you cover MYP and PYP, or only the Diploma?", answer: "All four IB stages are covered. PYP and MYP tutoring is popular with families who are planning to move into an IB school or who have moved from a state board classroom. Tutors help with inquiry skills, criteria-based writing and the Personal Project. The Diploma and CP courses are taught at both levels." },
    { question: "Which IGCSE boards do you teach, Cambridge or Edexcel?", answer: "Both. Cambridge IGCSE codes such as 0580 for Mathematics and Pearson Edexcel codes such as 4MA1 are taught by tutors who know that board's paper style. When you write, tell us the code on your child's syllabus. We match the tutor to that exact specification so the practice papers and mark schemes are correct." },
    { question: "Can IB or IGCSE students from Ramdurg write JEE, NEET or KCET?", answer: "Eligibility depends on subject combinations, equivalence certificates and the rules published each year by the conducting body. Many IB and IGCSE students do sit JEE Main and NEET, but you must verify the current notice. KCET has its own rules for non-state-board candidates. Check with the admissions authority, not with a tutor or a coaching brochure." },
    { question: "How quickly can we begin?", answer: "Usually within a few days. Message us on WhatsApp with the course, class and exam date, and the matching team replies with a tutor profile and a trial slot. Urgent exam preparation takes priority. If you are unsure which course or tier your child is on, ask the school for the syllabus code first, which saves a round of questions." },
    { question: "What if the tutor is not a good fit?", answer: "We change the tutor. After the free trial, you decide whether to continue. If you book weekly sessions and later feel the pace or style is wrong, tell us and we match another tutor. There is no penalty, and the new tutor reads the earlier written notes so your child does not repeat work." },
    { question: "Are you part of the IB, Cambridge or any school?", answer: "No. IB Gram is an independent tutoring service. We have no partnership with the International Baccalaureate Organization, Cambridge, Pearson or any school, and we do not provide admissions or official examination results. We teach the syllabus, give practice and keep parents informed through a written note after every session." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Our coverage across Indian cities and how online lessons work everywhere." },
    { label: "Belagavi", href: "/belagavi/", description: "The district headquarters, the usual base for coaching and private-candidate exam entries." },
    { label: "Gokak", href: "/gokak/", description: "A neighbouring Belagavi district town with similar board and school patterns." },
    { label: "Saundatti-Yellamma", href: "/saundatti-yellamma/", description: "The nearest town to Ramdurg on the Belagavi side, and a regular first stop for families going to Belagavi." },
    { label: "Hubli-Dharwad", href: "/hubli-dharwad/", description: "The northern Karnataka education hub with colleges and several private schools." },
    { label: "IB tutors", href: "/ib-tutors/", description: "All IB subjects, levels and how matching works." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE tutoring by subject." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the Diploma involves and where tutoring helps." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Analysis and Approaches versus Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse profiles and subjects." },
    { label: "Contact us", href: "/contact-us/", description: "Write to start a free trial lesson." },
  ],

  closingHeading: "Start with a free trial lesson for your Ramdurg student",
  closingBody:
    "Tell us the course, the class and what feels hard. We will suggest a tutor, quote the rate in writing and arrange a free trial lesson. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com, and we will reply the same day where we can.",
};
