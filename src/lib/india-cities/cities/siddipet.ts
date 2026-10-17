import type { CitySeoPage } from "../types";

/**
 * /siddipet/ - IB and IGCSE tutoring page for Siddipet, Telangana. Online-only. No IB or Cambridge
 * school could be confirmed inside the town, so stripSchools is empty. Clusters reuse verified
 * Hyderabad, Karimnagar and Warangal names already on neighbouring pages, plus The Gaudium School
 * (IB continuum and Cambridge IGCSE on its own site, Kollur campus, Sangareddy district).
 */
export const siddipet: CitySeoPage = {
  slug: "siddipet",
  countryName: "Siddipet",
  countryNameLong: "Siddipet, Telangana",
  demonym: "Siddipet",
  state: "Telangana",
  stateCode: "IN-TG",
  flagCode: "in",
  countryCode: "IN",
  region: "Telangana, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote:
    "Sessions bend around Dasara and Bathukamma fortnight, the April to June heat that empties afternoons, the Sankranti break and, most of all, whatever the child's own school day already demands",
  lastUpdated: "2026-09-21",
  geo: { latitude: 18.1018, longitude: 78.852 },
  wikipedia: "https://en.wikipedia.org/wiki/Siddipet",
  alternateNames: ["Siddipeta", "Siddipet town", "Siddipet district headquarters"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Siddipet | Online Home Tuition, Telangana",
  metaDescription:
    "IB and IGCSE tutors for Siddipet students, Telangana: Diploma, MYP, PYP and Cambridge IGCSE taught live online one to one, with a free trial class.",
  h1: "IB and IGCSE Tutors and Home Tuition in Siddipet, Taught Online",
  heroEyebrow: "IB & IGCSE TUITION FOR SIDDIPET STUDENTS, LIVE ON SCREEN",
  heroSubtitle:
    "Looking for private tuition at home in Siddipet for an IB or Cambridge IGCSE syllabus? The lesson is online: a specialist tutor and your child, live, from your own living room. Siddipet has grown fast as a district headquarters, but its classrooms still follow the Telangana board and CBSE.",
  primaryKeyword: "IB and IGCSE tutors in Siddipet",
  imageAltText:
    "A Siddipet student in Class 10 practising IGCSE Extended Mathematics with a tutor on a laptop video call at home",
  secondaryKeywords: [
    "IB tutor Siddipet",
    "IGCSE tutor Siddipet",
    "IB home tuition Siddipet",
    "IGCSE home tuition Siddipet",
    "IB private tuition Siddipet",
    "IB Maths tutor Siddipet",
    "IGCSE Maths tutor Siddipet",
    "IB Physics tutor Siddipet",
    "IB Chemistry tutor Siddipet",
    "IB Biology tutor Siddipet",
    "IB DP tutor Siddipet",
    "IB MYP tutor Siddipet",
    "IB PYP tutor Siddipet",
    "IGCSE online tuition Siddipet",
    "Cambridge IGCSE tutor Siddipet",
    "IB tutor Siddipet Telangana",
    "online IB tutor Gajwel",
    "IGCSE tutor Dubbak",
    "IB tutor Siddipeta",
  ],
  heroTrustPoints: [
    "Every Siddipet lesson is live and online, because tutors visit homes only in Gurugram and parts of Delhi NCR",
    "Matching follows the course code and level your child is actually registered for",
    "A full trial lesson comes before any commitment, and rates are quoted in writing first",
    "IB Gram is an independent service, unconnected to the IB, Cambridge, Pearson or any school named here",
  ],
  heroStats: [
    { value: "Live online", label: "Tutor and student, one to one" },
    { value: "PYP to DP", label: "IB continuum covered" },
    { value: "May & Nov", label: "Main IB exam sessions" },
    { value: "Free trial", label: "Try before you book" },
  ],

  intro: {
    heading: "Why Siddipet families are asking about IB and IGCSE",
    paragraphs: [
      "Siddipet changed quickly over the last decade. It became a district headquarters, gained a Government Medical College in 2018 and a large government hospital, and in October 2023 the railway line from Manoharabad brought DEMU trains to and from Secunderabad. An IT tower opened in 2023. Roughly a hundred kilometres from Hyderabad and about ninety from Warangal, the town now feels closer to both, and families here are comparing options that once seemed reserved for the capital.",
      "The schooling on offer, though, is still the Telangana state board and CBSE, taught in Telugu and English. We could not confirm a single IB World School or Cambridge IGCSE centre inside Siddipet. That leaves three sorts of enquiry. Parents who work in Hyderabad or the Gulf and plan for a child to join an international school later. Families whose child already attends an IB or Cambridge school in Hyderabad, perhaps as a weekly boarder, and needs reinforcement at home. And relocating families, including doctors and officials posted to the medical college or collectorate, whose children come from another curriculum.",
      "Nobody in Siddipet can easily find a teacher who has prepared students for IB Maths Analysis and Approaches or IGCSE Additional Mathematics, since the local market was never built for those courses. Live video solves that, because the tutor can sit in Chennai, Pune or Hyderabad and the lesson feels the same.",
      "To be clear about who we are, IB Gram is an independent tutoring service, separate from the International Baccalaureate Organization, Cambridge and Pearson. Tutors coach and explain. They never write assessed coursework such as Internal Assessments, Extended Essays or TOK essays.",
    ],
    bullets: [
      "Hyderabad weekly boarders who need reinforcement on weekends",
      "Returning Gulf and overseas families who want a bridge back into an international syllabus",
      "Medical college and district administration families on postings",
      "Students adding Cambridge IGCSE subjects beside a Telangana board or CBSE day",
      "Home visits exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No IB stage is taught in a Siddipet classroom, so the programmes below matter to families who are connecting Siddipet to a school elsewhere, or preparing a child to move. Cambridge IGCSE is the syllabus most local students ask about first, and each IB programme is described with how it tends to show up here.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Children work through six transdisciplinary themes using inquiry rather than a chapter-by-chapter textbook, and finish with a self-directed Exhibition. The main tutoring aim is confidence with reading, numbers and putting ideas into words.",
      countryNote:
        "In Siddipet, PYP help is most often requested by parents preparing a child for admission to a Hyderabad school, or by a family returning from abroad.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are graded by criteria, with a Personal Project in the final year and interdisciplinary units along the way. The shift from a single mark to criterion descriptors is the main adjustment for new entrants.",
      countryNote:
        "MYP enquiries from Siddipet families are usually for students at Hyderabad campuses who come home at weekends and need topic catch-up.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects are taken together with Theory of Knowledge, the Extended Essay and CAS. Internal assessments contribute to the grade, and the exams fall mainly in May, with a November session for some schools.",
      countryNote:
        "A Siddipet Diploma student is nearly always in a Hyderabad or boarding school, so we plan around that school's term and test dates.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students combine a few Diploma courses with a career-related qualification, a reflective project and skills modules. It is offered by only a few Indian schools, but the academic courses inside it are taught in the same way as Diploma ones.",
      countryNote:
        "Requests for CP from Siddipet are uncommon, and when they come we focus on the academic Diploma courses involved.",
    },
  ],

  subjectsIntro:
    "A student from Siddipet who boards in Hyderabad and needs IB Physics HL help is a different case from a Class 9 learner adding IGCSE Chemistry beside a state board timetable. We start with the course, level and exam window, then look for a tutor who has taught that combination.",
  subjects: [
    {
      name: "IB Maths Analysis & Approaches",
      levels: "HL / SL",
      description:
        "Algebra, functions, calculus and proof. At HL the third paper rewards students who can handle problems they have not seen before, so practice leans on mixed unfamiliar sets.",
    },
    {
      name: "IB Maths Applications & Interpretation",
      levels: "HL / SL",
      description:
        "Modelling, statistics and technology. Tutoring focuses on building a method on the graphic display calculator and explaining results in context.",
    },
    {
      name: "IB Physics",
      levels: "HL / SL",
      description:
        "Mechanics, waves, fields and modern physics. Units, significant figures and uncertainty are drilled early because they cost marks silently.",
    },
    {
      name: "IB Chemistry",
      levels: "HL / SL",
      description:
        "Equilibria, kinetics and organic chemistry dominate difficulty. Short, repeated practice on mechanisms works better than one long revision push.",
    },
    {
      name: "IB Biology",
      levels: "HL / SL",
      description:
        "Precise terminology and careful reading of command terms. Data-based questions are practised with real graphs and tables.",
    },
    {
      name: "IB Economics",
      levels: "HL / SL",
      description:
        "Diagram accuracy, real-world examples and evaluation. Indian and Telangana examples work well for microeconomics and development topics.",
    },
    {
      name: "IB Business Management",
      levels: "HL / SL",
      description:
        "Case-study technique and tools such as SWOT and Ansoff are applied to real companies rather than recited.",
    },
    {
      name: "IB English A Language & Literature",
      levels: "HL / SL",
      description:
        "Timed commentary on unseen texts and comparative essays, with feedback on structure, evidence and voice.",
    },
    {
      name: "IB Computer Science",
      levels: "HL / SL",
      description:
        "Programming practice, algorithmic thinking and systems theory, with attention to the wording exam questions use.",
    },
    {
      name: "IB Psychology",
      levels: "HL / SL",
      description:
        "Core studies and their evaluation, organised into essays that can be written within the time limit.",
    },
    {
      name: "IB Environmental Systems & Societies",
      levels: "SL",
      description:
        "Systems models, water and soil topics and sustainability evaluation, drawing on the Telangana water and irrigation context where useful.",
    },
    {
      name: "IB Geography",
      levels: "HL / SL",
      description:
        "Case studies with real data and fieldwork method, including the Deccan plateau setting familiar to local students.",
    },
    {
      name: "IB Telugu and Hindi language courses",
      levels: "SL / HL",
      description:
        "Support for students taking a home language inside the Diploma, with oral practice and text-type training.",
    },
    {
      name: "Theory of Knowledge (TOK)",
      levels: "DP Core",
      description:
        "Conversation-style sessions that stretch a student's reasoning about knowledge claims, for the exhibition and the essay.",
    },
  ],
  igcseSubjectsIntro:
    "Without a Cambridge or Edexcel centre in town, Siddipet students usually prepare privately and enter through a registered centre, often in Hyderabad. The list below is taught against the exact syllabus codes, and tiers are chosen after a diagnostic lesson.",
  igcseSubjects: [
    {
      name: "IGCSE Mathematics 0580",
      levels: "Core / Extended",
      description:
        "Extended students need speed in algebra and graphs, and students considering Core should be sure it will not cap a later IB choice.",
    },
    {
      name: "IGCSE Additional Mathematics 0606",
      levels: "Grade 10",
      description:
        "Calculus, functions and trigonometry at pace, an excellent run-up to IB Maths AA or A level Mathematics.",
    },
    {
      name: "IGCSE Physics 0625",
      levels: "Core / Extended",
      description:
        "Formula handling, graph reading and the alternative-to-practical paper, which many private students leave until the end.",
    },
    {
      name: "IGCSE Chemistry 0620",
      levels: "Core / Extended",
      description:
        "Moles, electrolysis and organic chemistry, revisited in short blocks with past questions.",
    },
    {
      name: "IGCSE Biology 0610",
      levels: "Core / Extended",
      description:
        "Cell biology, genetics and human physiology with written-answer practice for the longer questions.",
    },
    {
      name: "IGCSE Economics 0455",
      levels: "Grade 9-10",
      description:
        "Diagram drills and structured evaluative answers, with examples from Indian markets.",
    },
    {
      name: "IGCSE Computer Science 0478",
      levels: "Grade 9-10",
      description:
        "Python coding and algorithm tracing, with theory revision tied to the exam wording.",
    },
    {
      name: "IGCSE English First Language 0500",
      levels: "Grade 9-10",
      description:
        "Directed writing, summary and descriptive tasks, taught with annotated models.",
    },
    {
      name: "IGCSE Telugu and Hindi as a second language",
      levels: "Grade 9-10",
      description:
        "Reading, writing and speaking preparation for students who want a home language on their certificate.",
    },
  ],

  regionsTitle: "Siddipet localities and nearby Telangana towns our online tutors reach",
  regionsIntro:
    "Lessons are online, so these areas describe context and not a travel plan. They show how schooling, commuting and daily routine differ across Siddipet and the towns around it, which shapes the hour a family can actually give to a lesson.",
  regions: [
    {
      name: "Siddipet town centre",
      note: "The old commercial core and most established schools, where parents weigh Telangana board, CBSE and private English-medium options and ask about international routes.",
    },
    {
      name: "Government Medical College and hospital area",
      note: "Faculty, resident doctors and staff families, many of whom have lived in Hyderabad or abroad and ask about familiar curricula.",
    },
    {
      name: "Collectorate and Ponnala side",
      note: "Officials and their families on transferable postings, who look for portable, exam-board-aligned tuition.",
    },
    {
      name: "Manoharabad rail corridor",
      note: "The new train link to Secunderabad makes a weekly Hyderabad boarding arrangement more practical, and tutoring fills the weekday gaps.",
    },
    {
      name: "IT tower and new housing layouts",
      note: "Younger professional households moving in as the tech space grows, often with one child in primary school.",
    },
    {
      name: "Gajwel",
      note: "A town to the south-west on the way to Hyderabad, with commuting families who compare Hyderabad schools.",
    },
    {
      name: "Dubbak and Cheriyal",
      note: "Smaller towns where secondary schooling is mostly state board and international syllabi have to be studied privately.",
    },
    {
      name: "Husnabad and Koheda",
      note: "Towns to the east toward Karimnagar and Warangal, where families pick among three cities for schooling.",
    },
    {
      name: "Komuravelli and Cherial belt",
      note: "Rural households tied to the temple economy and agriculture, where online tuition is often the only route to an international syllabus.",
    },
  ],

  schoolDisclaimer:
    "School names below show where IB or Cambridge classrooms genuinely exist for families willing to board or relocate. They are listed for information alone. IB Gram is independent and has no agreement, sponsorship or affiliation with them, nor with the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Siddipet itself",
      note: "We could not confirm an IB World School or Cambridge or Edexcel IGCSE centre within Siddipet town. Local options are Telangana board and CBSE, so families add an international syllabus through online tutoring.",
      schools: [],
    },
    {
      city: "Nearby: Hyderabad",
      note: "About a hundred kilometres south, Hyderabad is the nearest large IB and Cambridge cluster. Some Siddipet families arrange weekly boarding or move for the senior years.",
      schools: ["Oakridge International School", "CHIREC International School", "International School of Hyderabad"],
    },
    {
      city: "Nearby: Kollur, on the Hyderabad outer ring road",
      note: "The Gaudium School lists the IB continuum and Cambridge IGCSE on its own site and offers boarding at its Kollur campus, which some families weigh for this reason.",
      schools: ["The Gaudium School"],
    },
    {
      city: "Nearby: Karimnagar and Warangal",
      note: "Both cities have a single school we could confirm with international credentials, so they widen choice only slightly.",
      schools: ["Kencrest International School, Jyothinagar", "Skill Stork International School"],
    },
  ],

  modesIntro:
    "In Siddipet, the lesson is always online, one to one. What varies is the plan around it: a weekly slot, a term plan with notes for parents, or a block built for a weekly boarder's weekend or a school holiday.",
  modes: [
    {
      title: "Weekly one-to-one online",
      description:
        "A fixed hour each week on video with a shared whiteboard, taught by a tutor matched on the exact course.",
      bullets: [
        "Matched on syllabus, not on distance",
        "Suits IB, MYP and IGCSE subjects",
        "Past papers marked on screen",
        "A single tutor across the term",
      ],
    },
    {
      title: "Term plan with written notes",
      description:
        "Weekly lessons, a short note after each one and a longer review every few weeks so parents stay informed without attending.",
      bullets: [
        "Notes record topics and next steps",
        "Reviews adjust pace and priorities",
        "A gentle fit for PYP and MYP students",
        "An extra slot can be added near mocks",
      ],
    },
    {
      title: "Weekend and holiday blocks",
      description:
        "Concentrated lessons for weekly boarders and for Dasara, Sankranti and summer breaks, with timed papers and fast feedback.",
      bullets: [
        "Planned around Hyderabad school timetables",
        "Timed practice against current mark schemes",
        "Dasara and Sankranti weeks booked early",
        "Two to three weeks' notice is ideal",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Siddipet",
      paragraphs: [
        "The short version is that Siddipet has no IB or Cambridge school we could verify. The town's schools teach the Telangana state board, CBSE, or a mix, and the newer private campuses advertise English medium and coaching for competitive exams. Any family wanting an international syllabus is either sending a child to Hyderabad, preparing for a later move, or studying privately at home.",
        "Growth has brought a new kind of household. Doctors at the Government Medical College, engineers in the new IT tower, and officials at the collectorate often come from Hyderabad, Bengaluru or abroad. Their children may be halfway through an IB or Cambridge course, and a move to Siddipet should not break it. Others are Gulf returnees, who find that their child's school there followed British or American curricula.",
        "A third group lives here but works or plans around Hyderabad. The Manoharabad line and the outer ring road have made a weekday boarding arrangement, or a move for Class 11, feel realistic. Those families ask how to prepare a child before that move, and how to keep up with a Hyderabad school while living in Siddipet.",
        "What all three groups lack is a local pool of specialist tutors. Online delivery is how IB Gram fills that gap: we match by course and level, and the tutor can sit anywhere in India. A Siddipet student then has the same quality of subject knowledge as a student in Hyderabad.",
      ],
      bullets: [
        "Medical college, IT tower and collectorate households",
        "Gulf and overseas returnees",
        "Families planning a Hyderabad school move",
        "Students adding IGCSE to a state board or CBSE timetable",
      ],
      table: {
        caption: "Where the nearest verified IB and Cambridge schools are",
        columns: ["Place", "Approximate distance from Siddipet", "What we could confirm"],
        rows: [
          ["Siddipet", "0 km", "Telangana board and CBSE schools; no confirmed IB or Cambridge school"],
          ["Kollur, Hyderabad ORR", "About 70 to 80 km", "The Gaudium School lists IB and Cambridge IGCSE on its own site"],
          ["Hyderabad city", "About 100 km", "Many IB and Cambridge schools, including Oakridge and CHIREC"],
          ["Karimnagar and Warangal", "About 90 km each way", "One school each with international credentials"],
        ],
      },
    },
    {
      heading: "Telangana board, CBSE, IGCSE or IB: how do the routes differ for Siddipet students?",
      paragraphs: [
        "Telangana board students move through Class 10 and then intermediate, with TG EAPCET deciding engineering and pharmacy places. CBSE follows the NCERT pattern and is the usual choice for families expecting transfers. IGCSE and IB are a different kind of course entirely, built on coursework, practical exams, extended writing and mark schemes that reward the steps of reasoning.",
        "Is the IB harder than a state board? It is differently demanding. Memorised answers earn little in IB Biology, where the command term decides the response. An IGCSE Physics student has to handle a paper on experiments, which a textbook-only routine misses. Students crossing from Telangana board notice the change in the first two months, and English fluency matters more than expected.",
        "On recognition, IB and Cambridge are read by universities abroad, and the Association of Indian Universities issues equivalence for Indian admissions. JEE Main, NEET and CUET have eligibility rules that change, so check the current bulletin before settling on subjects.",
        "The table shows the practical differences for a family choosing between staying and adding an international track.",
      ],
      table: {
        caption: "Telangana board, CBSE, IGCSE and IB at a glance for Siddipet families",
        columns: ["Feature", "Telangana board or CBSE", "Cambridge IGCSE", "IB Diploma"],
        rows: [
          ["Available in Siddipet", "Yes, in most schools", "No local centre confirmed", "No local school"],
          ["Final assessment", "Board exams at Class 10 and 12", "Papers at the end of Class 10, practical paper in sciences", "Final exams plus internal assessments and core requirements"],
          ["Entrance route in India", "TG EAPCET, JEE Main, NEET, CUET", "Via AIU equivalence, then the same exams", "Via AIU equivalence, then the same exams"],
          ["Typical extra help", "Coaching for entrance exams", "Subject tutoring, private entry support", "Subject and assessment guidance"],
        ],
      },
    },
    {
      heading: "How much does IB or IGCSE tuition cost in Siddipet?",
      paragraphs: [
        "We do not publish fixed fees. Instead, we quote in writing before you book, and you take a free trial lesson first. The figure depends on a handful of things a parent can describe in a short message, so there are no surprises later.",
        "The biggest factor is the course and level. IB Physics HL in the second year requires a tutor who has handled Paper 3 and the Scientific Investigation, while a Class 7 student starting IGCSE English needs someone with a different background. The scarcer the specialist, the higher the rate.",
        "Lesson frequency counts. A weekly hour is cheaper per month than three a week, but for a student nine weeks from mocks, three a week may work better than six thinly spread across a term. Weekend and holiday blocks for boarders are quoted as a block.",
        "Online tuition removes the commute that local private tutors price in, and Siddipet parents often compare it with state-board tutors and coaching centres, where fees reflect group sizes. One-to-one specialist teaching costs more than a batch of thirty, and it buys different things: a tutor who has seen the mark scheme and can tailor explanation to one student.",
      ],
      bullets: [
        "Programme and level of the student",
        "How scarce the subject specialist is",
        "Hours per week and length of each lesson",
        "Time left before a mock or exam session",
      ],
    },
    {
      heading: "Online home tuition, coaching centre, local tutor or self-study: what fits an IB or IGCSE student?",
      paragraphs: [
        "Siddipet families can choose between four routes. Online home tuition means a specialist teaches live at your house through video. Coaching centres in town concentrate on EAPCET, JEE and NEET preparation. Local private tutors, often school teachers, know Telangana board content. Self-study works for some students who have a strong base and past papers.",
        "We are clear that tutors do not visit homes in Siddipet. In-person home tuition exists only in Gurugram and parts of Delhi NCR. Here, online home tuition means one-to-one lessons you take at home on a laptop. For IB and IGCSE this matches the specialist need well.",
        "A fair comparison depends on the aim. If your child is on a state board and preparing for EAPCET, local coaching is the natural fit. If your child has an IGCSE Extended Mathematics paper or IB Chemistry HL in view, a specialist in that exact paper matters more than proximity.",
        "Check three points with any option: does the tutor know the current syllabus, will they mark past papers against the official mark scheme, and will you see what was covered each week.",
      ],
      table: {
        caption: "Ways to study IB or IGCSE from Siddipet",
        columns: ["Option", "Where it helps", "Where it falls short", "Good for"],
        rows: [
          ["Online one-to-one", "Specialist for the exact course; flexible slots; written notes", "Needs a reliable connection and a quiet corner", "IB and IGCSE students of any level"],
          ["Coaching centre", "Structure and peer energy for entrance exams", "Little IB or Cambridge focus", "Telangana board and CBSE students"],
          ["Local private tutor", "Familiar, convenient, flexible", "Seldom trained on IB or Cambridge assessment", "General subject help"],
          ["Self-study", "Free and self-paced", "Hard to see your own gaps", "Strong, disciplined students"],
        ],
      },
    },
    {
      heading: "What does the school year look like in Siddipet for an IB or IGCSE student?",
      paragraphs: [
        "IB Diploma exams are held in May, with a November session for some schools, and Cambridge IGCSE is offered in the March, May and June, and October and November series depending on the syllabus. Private IGCSE candidates must book an approved centre well in advance, so registration often decides when preparation starts.",
        "Siddipet weather and festivals shape the year. Summer from April to June is hot, afternoons are quiet, and evening study is easier. The monsoon brings a cooler July to September, and Dasara with Bathukamma in autumn gives a long break, when many boarders travel home. Sankranti in January is another family week.",
        "Local examinations also matter. Families with a child on a Telangana board timetable have to fit IGCSE lessons around Class 10 board exams in March and April, and around pre-final tests. We usually suggest moving the heavier IGCSE sessions to weekends at those moments.",
        "The table gives a typical year and how tutoring tends to change along with it.",
      ],
      table: {
        caption: "A year of study for a Siddipet IB or IGCSE student",
        columns: ["Months", "What is happening", "Tutoring emphasis"],
        rows: [
          ["January to March", "Sankranti break, mocks, IGCSE March series for some syllabuses", "Timed papers and topic repair"],
          ["April to June", "Summer heat, IB May and IGCSE May-June exams", "Final revision and exam technique"],
          ["July to September", "Monsoon, new term starts", "New content and Internal Assessment planning"],
          ["October to December", "Dasara and Bathukamma break, IB November and IGCSE Oct-Nov series", "Holiday blocks and mock preparation"],
        ],
      },
    },
    {
      heading: "Which universities can Siddipet students aim for after IB or IGCSE?",
      paragraphs: [
        "Families generally look in three directions: Indian universities, overseas study and professional entrance exams. Hyderabad offers many options, with institutions like IIT Hyderabad at Kandi and several central and deemed universities.",
        "For Indian admission, the Association of Indian Universities issues equivalence certificates for the IB Diploma and some IGCSE-based profiles. Many universities ask for it. Eligibility for CUET-UG, JEE Main and NEET depends on subjects and the current bulletin, so check those before finalising choices.",
        "Overseas, UK, US, Canadian, Australian and European universities read IB and Cambridge results directly. Siddipet families with Gulf or diaspora ties sometimes think about those countries first.",
        "Tutors help with the subject side: Mathematics, sciences, Economics, English and so on. Admission paperwork, scholarship applications and visas are a separate process that we do not handle.",
      ],
      bullets: [
        "AIU equivalence for IB and IGCSE-based profiles",
        "CUET-UG, JEE Main and NEET eligibility checked against the current bulletin",
        "IIT Hyderabad and Hyderabad universities as regional targets",
        "Direct applications overseas",
      ],
    },
    {
      heading: "IB Maths AA or AI and the sciences: where do Siddipet students get stuck?",
      paragraphs: [
        "Mathematics is the subject with the most choice. Analysis and Approaches suits students heading to engineering, physical sciences or quantitative economics. Applications and Interpretation is for those going to business, social science or biology. At HL both ask a lot.",
        "Common problems are specific. In AA, students lose marks on integration techniques and on Paper 3. In AI, it is modelling, setting up the calculator and explaining the output in a sentence. A first diagnostic lesson with a tutor finds those faster than a general review does.",
        "The sciences need habits more than facts. Physics demands a clean line of working and correct units. Chemistry needs organised practice on calculations. Biology needs the exact vocabulary for each command term. Practical assessments stay at school, but tutors teach how to plan the investigation and analyse the data.",
        "Students coming from Telugu-medium or mixed-medium schooling sometimes find English command terms the real obstacle. It helps to train on those directly.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and choosing subjects from Siddipet",
      paragraphs: [
        "Most IGCSE subjects have two tiers. Core is aimed at grades C to G and Extended at A star to E, so a student who wants IB Diploma HL sciences or A level Mathematics nearly always takes Extended. Settling on the tier early avoids a painful switch in Class 10.",
        "Subject choice follows the pathway. Future engineers or doctors take Mathematics and the three sciences. A student aiming at commerce takes Economics, Business Studies and possibly Accounting. A home language like Telugu or Hindi adds breadth, and for some students it is the easiest grade on the certificate.",
        "Private candidates need an approved centre, registration deadlines and arrangements for the practical element of science, even though the alternative-to-practical paper is written. Confirming these in Class 9 rather than Class 10 avoids a scramble.",
        "Starting in Class 8 or 9 gives two years for content and a year for revision. A Class 10 start is possible for Core subjects, though tighter for Extended Mathematics and sciences.",
      ],
      bullets: [
        "Extended is usual for later IB or A level sciences and Mathematics",
        "Core is sensible for students who want a solid pass with less pressure",
        "Additional Mathematics 0606 builds strength for IB Maths AA",
        "Register with a centre in Class 9 to avoid late surprises",
      ],
    },
  ],

  tutorsIntro:
    "Explore tutors for IB PYP, MYP and Diploma subjects and for Cambridge IGCSE, selected for Siddipet families. Each match looks at the syllabus, level and exam session, and every lesson is taught live online on Indian Standard Time.",
  process: [
    {
      title: "Share a short brief",
      description: "Tell us the programme or board, subject, level, current grade and weekday or weekend hours that suit your Siddipet home.",
    },
    {
      title: "Meet your proposed tutor",
      description: "We suggest a tutor with a stated reason tied to the exact course and exam session.",
    },
    {
      title: "Try a free lesson",
      description: "A real topic taught live on video, with no fee and no obligation.",
    },
    {
      title: "Approve a first-month plan",
      description: "The tutor outlines topics, weekly rhythm and how they will report progress, for you to approve or adjust.",
    },
    {
      title: "Continue with reviews",
      description: "A fixed slot, regular check-ins and a change of tutor if the fit is wrong.",
    },
  ],
  whyPoints: [
    {
      title: "Specialists, not generalists",
      description: "Tutors are selected for a specific IB subject and level or a Cambridge syllabus code and tier.",
    },
    {
      title: "A fit for a town without an IB school",
      description: "Since Siddipet has none, we look across India for the right person instead of relying on local supply.",
    },
    {
      title: "Notes parents can read quickly",
      description: "A short summary follows every session, so you know what was covered and what comes next.",
    },
    {
      title: "Coaching that respects the rules",
      description: "Tutors guide and give feedback. They never write Internal Assessments, Extended Essays or TOK essays.",
    },
    {
      title: "Plain about format",
      description: "Online for Siddipet. In-person home tuition is offered only in Gurugram and parts of Delhi NCR.",
    },
    {
      title: "Trial first, change if needed",
      description: "Judge the teaching before you commit, and ask for another tutor if it is not right.",
    },
  ],

  faqs: [
    {
      question: "Where do I find an IB tutor in Siddipet?",
      answer:
        "You can find an IB tutor for Siddipet through IB Gram, taught online. Share the programme, subject, level and exam session, and we propose a tutor who has taught that exact course. There is no IB school in Siddipet that we could verify, so local specialists are scarce, and live video lets a tutor elsewhere in India teach your child on Indian Standard Time.",
    },
    {
      question: "Is there IGCSE tuition for Siddipet students?",
      answer:
        "Yes, IGCSE tuition is available for Siddipet students, one to one and online. We cover Cambridge and Pearson Edexcel syllabuses by code, including Core and Extended tiers. Most local students enter as private candidates through an approved centre, often in Hyderabad, and we can plan preparation around the registration dates that centre gives you.",
    },
    {
      question: "Do your tutors come to homes in Siddipet?",
      answer:
        "No, tutors do not come to homes in Siddipet. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Siddipet we offer one-to-one tuition at home, but over live video, which is why we call it online home tuition. A laptop, headphones and a quiet spot are all your child needs.",
    },
    {
      question: "Does Siddipet have any IB or Cambridge school?",
      answer:
        "We could not confirm an IB World School or Cambridge IGCSE school inside Siddipet. Local schools follow the Telangana board or CBSE. The nearest verified options are in and around Hyderabad, including The Gaudium School at Kollur, which lists the IB continuum and Cambridge IGCSE on its own website. Check the IB's official find-a-school page for current status.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Siddipet?",
      answer:
        "The fee depends on the course, level, weekly hours and time left before exams. We send a quote in writing before you book, and you take a free trial first. We do not publish fixed prices because an IB Physics HL specialist and a Class 7 English tutor are different jobs. Ask for the quote before the trial if you like.",
    },
    {
      question: "Can my child do IGCSE while studying in a Telangana board school?",
      answer:
        "Yes, many students do, often with Mathematics and one or two sciences. The workload needs planning, so we fit weekly slots around school and Class 10 board exams. The exam entry is as a private candidate, which requires booking a centre early. Starting in Class 8 or 9 gives the most comfortable runway.",
    },
    {
      question: "My child boards in Hyderabad. Can you help at weekends?",
      answer:
        "Yes, weekend and holiday lessons are a common arrangement for weekly boarders. The tutor follows the school's syllabus and calendar, so lessons support what the school teaches. Book early for Dasara and Sankranti weeks, and ask for a short note after each session so parents can follow progress.",
    },
    {
      question: "Which IB Maths course should a Siddipet student pick?",
      answer:
        "Pick according to the planned university course. Analysis and Approaches suits engineering, physical science and economics routes. Applications and Interpretation suits business, social science and biology routes. Ask the school or university which it prefers, then use a trial lesson to check the style suits your child. Switching late is hard, so decide early.",
    },
    {
      question: "Will a tutor write my child's Internal Assessment?",
      answer:
        "No, tutors never write Internal Assessments, Extended Essays or TOK essays. They coach: explaining criteria, helping choose a question, giving feedback on drafts and planning time. Submitting work written by another person breaches IB rules and can cost the diploma, so we decline any such request.",
    },
    {
      question: "What if the power or internet fails during a lesson?",
      answer:
        "We reschedule without penalty if a power cut or connection failure ruins a lesson. A mobile hotspot as backup and a second slot in the same week help, especially in the monsoon. Tell the tutor early if you expect disruption so a plan can be made.",
    },
    {
      question: "Does online teaching work for IB Physics and Chemistry?",
      answer:
        "Yes, for content, problem-solving and exam technique, which carry most of the marks. Tutors use a shared whiteboard, worked examples and timed questions. Practical work itself happens at school or the exam centre, and tutors coach the method, analysis and write-up. Many students concentrate better at home without a commute.",
    },
    {
      question: "Are IB and IGCSE accepted by Indian universities?",
      answer:
        "Yes, through equivalence issued by the Association of Indian Universities, which many institutions ask for. CUET-UG, JEE Main and NEET have their own eligibility rules for foreign boards and they change, so read the current bulletin before choosing subjects. Universities abroad read IB and Cambridge results directly.",
    },
    {
      question: "How early should we begin before exams?",
      answer:
        "Six months before a major session is a sensible minimum, and earlier for private IGCSE candidates who must register at a centre. For IB Maths HL and sciences, a year is more comfortable. A shorter plan can still help, but no tutor can honestly promise a grade, and we do not.",
    },
    {
      question: "Can young children in PYP or MYP get tutoring?",
      answer:
        "Yes, PYP and MYP tutoring is available but works differently from exam coaching. PYP sessions build reading, numeracy and confident explanation. MYP sessions help with criteria, the Personal Project and clear writing. Lessons are shorter and more conversational, and parents get a note afterwards.",
    },
    {
      question: "How does the free trial lesson work?",
      answer:
        "You send a short brief, we propose a tutor, and you take one real lesson at no charge. The tutor teaches an actual topic from your child's syllabus. Afterwards you decide whether to continue, with no obligation, and you can ask for a different tutor if the subject was right but the style was not.",
    },
    {
      question: "How do I get started from Siddipet?",
      answer:
        "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the programme or board, subject, level, current grade and preferred hours. We reply with a proposed tutor and a trial slot. You can also use the contact page on this website.",
    },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "City pages for IB and IGCSE tuition nationwide." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home visits are offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How tutors are matched to IB subjects." },
    { label: "IGCSE guide", href: "/igcse/", description: "Syllabus codes, tiers and exam series." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, core and assessment explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, Personal Project and eAssessment." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "IB and IGCSE tutors in Hyderabad", href: "/hyderabad/", description: "The nearest large IB and Cambridge cluster." },
    { label: "IB and IGCSE tutors in Karimnagar", href: "/karimnagar/", description: "Online tuition for the neighbouring Telangana city." },
    { label: "IB and IGCSE tutors in Warangal", href: "/warangal/", description: "Online tuition for students in Warangal." },
  ],
  closingHeading: "Start a free trial with an IB or IGCSE tutor in Siddipet",
  closingBody:
    "Share the programme or board, subject and level, your child's current grade and the hours that work for your Siddipet household. We come back with a matched tutor and a free first lesson, live on video on Indian Standard Time.",
};
