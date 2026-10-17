import type { CitySeoPage } from "../types";

/**
 * /nelamangala/ - IB and IGCSE tutoring for Nelamangala, on the north-western edge of Bengaluru. Online only:
 * in-person visits exist only in Gurugram and parts of Delhi NCR. No campus in the taluk could be confirmed
 * as IB or Cambridge/Edexcel, so stripSchools is empty and clusters use Bengaluru names already published
 * on bengaluru.ts and tumkur.ts. Angle: Tumakuru Road commute, Dobbaspet industrial families, warehouse belt.
 */
export const nelamangala: CitySeoPage = {
  slug: "nelamangala",
  countryName: "Nelamangala",
  countryNameLong: "Nelamangala, Karnataka",
  demonym: "Nelamangala",
  state: "Karnataka",
  stateCode: "IN-KA",
  flagCode: "in",
  countryCode: "IN",
  region: "Karnataka, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening slots are chosen to avoid the Tumakuru Road rush hour, with extra room during the Ugadi, Dasara and Deepavali breaks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 13.0957, longitude: 77.3911 },
  wikipedia: "https://en.wikipedia.org/wiki/Nelamangala",
  alternateNames: ["Nelamangal", "Nelamangala Bengaluru Rural"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nelamangala | Online Private Tuition",
  metaDescription:
    "Online one-to-one IB and IGCSE tuition for Nelamangala families on Bengaluru's north-west edge: live private lessons from home, with a free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Nelamangala",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR NELAMANGALA STUDENTS",
  heroSubtitle:
    "Looking for private home tuition for an IB or IGCSE child in Nelamangala? The lesson arrives by video instead of by a long drive down Tumakuru Road. Your child studies at the dining table, a tutor who has taught the exact course sits on the other end of the call, and the 40-odd minutes of traffic each way stay out of the evening.",
  primaryKeyword: "IB and IGCSE tutors in Nelamangala",
  imageAltText: "Nelamangala student on a live online lesson with an IB tutor at a home desk, Tumakuru Road suburb outside the window",
  secondaryKeywords: [
    "IB tutor Nelamangala",
    "IGCSE tutor Nelamangala",
    "IB home tuition Nelamangala",
    "IGCSE home tuition Nelamangala",
    "IB private tuition Nelamangala",
    "IB Maths tutor Nelamangala",
    "IGCSE Maths tutor Nelamangala",
    "IB Physics tutor Nelamangala",
    "IB Chemistry tutor Nelamangala",
    "IB Biology tutor Nelamangala",
    "IB DP tutor Nelamangala",
    "IB MYP tutor Nelamangala",
    "IB PYP tutor Nelamangala",
    "IGCSE online tuition Nelamangala",
    "IB tutor Dobbaspet",
    "IGCSE tutor Dobbaspet",
    "online IB tutor Tumakuru Road",
    "IB tutor north Bengaluru outskirts",
    "Cambridge IGCSE tutor Nelamangala",
    "Edexcel IGCSE tutor Nelamangala",
  ],

  heroTrustPoints: [
    "Live one-to-one video lessons, so no ride to Yeshwanthpur, Peenya or Hebbal for a tutor",
    "Tutors do not visit Nelamangala homes: in-person lessons run only in Gurugram and parts of Delhi NCR",
    "A free trial lesson comes first, and you quit there if the fit is poor",
    "IB Gram is independent and has no tie to the IB, Cambridge, Pearson Edexcel or any school named on this page",
  ],
  heroStats: [
    { value: "Zero commute", label: "Tumakuru Road stays out of the study hour" },
    { value: "PYP to DP", label: "Every IB stage covered" },
    { value: "May & Nov", label: "IB exam sessions we plan around" },
    { value: "Free trial", label: "Sit through a real lesson first" },
  ],

  intro: {
    heading: "A Bengaluru address that is still a taluk town",
    paragraphs: [
      "Nelamangala belongs to Bengaluru Rural district and sits roughly 30 kilometres from the city centre, where the Tumakuru highway and the road towards Hassan and Mangaluru part ways. For years the town was a bus stop and a toll plaza. Today it is also a fast-growing dormitory for people who work in Peenya, Yeshwanthpur, Whitefield or the airport belt and could not afford a flat in those places.",
      "Schools here lean heavily on the Karnataka State Board and CBSE, with a handful of ICSE options. We could not confirm an IB Diploma or Cambridge IGCSE campus inside the taluk itself, so a family that wants an international syllabus usually has a child enrolled in a Bengaluru school, a boarding school elsewhere, or has taken an online route. That is the gap IB and IGCSE tutors in Nelamangala are asked to fill.",
      "A tutor teaching IB Chemistry HL or Cambridge Extended Maths will almost never live in town. Online delivery lets us match on subject, board and exam date instead of postcode. Lessons are private, built around the real specification, and followed by a short written note so you can see what was covered.",
      "One clear line on home tuition: tutors do not come to your house. Home visits run only in Gurugram and parts of Delhi NCR. In Nelamangala the lesson reaches your home on a laptop. And tutors coach rather than write: Internal Assessments, Extended Essays and TOK essays remain the student's own work.",
    ],
    bullets: [
      "Matched by subject and board, not by how far the tutor lives from Tumakuru Road",
      "Cambridge and Pearson Edexcel IGCSE handled by syllabus code",
      "Slots placed after the commute, not on top of it",
      "Written note after every lesson, rates quoted in writing before you commit",
      "Online only in Nelamangala; no home visits here",
    ],
  },

  programmesIntro:
    "Whichever IB stage a Nelamangala child is at, the school is more likely to sit in Bengaluru than in the taluk, so tutoring has to fit around a long school day. Here is how each programme tends to play out for families living on this side of the city.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery-5, ages 3-12",
      description:
        "Learning is organised around units of inquiry rather than separate textbooks, and the final year ends with the PYP Exhibition. A tutor keeps number sense, reading and written expression moving without turning play-based learning into drill.",
      countryNote:
        "PYP families here are often newly arrived from another state for a logistics, manufacturing or IT posting and want the child's reading and number work steady while the new school is settling.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Subjects are marked against criteria, and the programme closes with the Personal Project. Students who were strong on recall can find criterion-based writing in Sciences and Individuals and Societies a sharp change.",
      countryNote:
        "A Nelamangala MYP student typically leaves home early for a Bengaluru school bus, so lessons tend to land after 7 pm or on Sunday mornings.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three or four at Higher Level, alongside TOK, the Extended Essay and CAS. Internal assessments feed each subject grade and papers are sat in the May or November session.",
      countryNote:
        "Diploma students from this side of Bengaluru often balance a long bus ride with HL Maths or Sciences, so short weekday sessions and a longer weekend one work better than three heavy evenings.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students combine Diploma courses with a career-related study and a reflective project. Few Indian schools run it, so requests usually concern one Diploma course inside the pathway.",
      countryNote:
        "CP requests from Nelamangala are rare. When they come, we coach the Diploma courses involved and leave the career-related element to the school.",
    },
  ],

  subjectsIntro:
    "Subject choice is where an international syllabus becomes personal. We start from the course, the level and the next assessment date, then pick a tutor, rather than the other way round.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and proof for future engineers. Students from a Karnataka State Board or CBSE background calculate quickly but must learn to write each step as a reasoned argument." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator technique, a natural fit for students heading towards business, economics or social science." },
    { name: "IB Physics", levels: "HL / SL", description: "Data-booklet use, units and graphical analysis carry marks that formula memory never will. Tutors rehearse Paper 2 explanations aloud." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, organic pathways and equilibrium, plus the discipline of writing observations the way the mark scheme wants them." },
    { name: "IB Biology", levels: "HL / SL", description: "Large content, so tutoring concentrates on command terms and on turning diagrams into precise sentences." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Relevant in a district ringed by tech parks. Pseudocode, data structures and the paper-based approach to programming are taught explicitly." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram drawing, evaluation paragraphs and real-world examples, with plenty of Indian cases for the commerce-minded student." },
    { name: "IB Business Management", levels: "HL / SL", description: "Useful for children of factory owners and small-business families; case-study practice is the core of the sessions." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Textual analysis and comparative essay building for students who think in Kannada or Hindi at home." },
    { name: "IB English A: Literature", levels: "HL / SL", description: "Close reading of set works and structured literary argument, with tutors giving feedback on essay plans, not writing them." },
    { name: "IB Kannada and Hindi (Language B / A)", levels: "SL / HL", description: "Kannada and Hindi are living languages in Nelamangala homes; tutors help with grammar, oral practice and set texts." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, evaluation and the discipline of writing a clear short-answer response." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "Coaching on knowledge questions and exhibition planning. Tutors guide thinking and never write the essay." },
    { name: "IB Visual Arts and Design Technology", levels: "SL / HL", description: "Process journals and critical commentary; supported through feedback, not by producing the work." },
  ],
  igcseSubjectsIntro:
    "Many IGCSE enquiries from Nelamangala are about Cambridge or Edexcel candidates, often private candidates who study at home. Tutors are assigned by board and syllabus code, then by Core or Extended tier.",
  igcseSubjects: [
    { name: "IGCSE Mathematics (Core and Extended)", levels: "Core / Extended", description: "Tier choice matters; tutors first sort out which one a child can aim for, then drill algebra, trigonometry and graphs." },
    { name: "IGCSE Additional Mathematics", levels: "Cambridge", description: "Calculus and functions as a bridge to A Level or IB Maths; good for children who found Extended too easy." },
    { name: "IGCSE Physics", levels: "Cambridge / Edexcel", description: "Equations, practical-skills Paper 6 and written explanation of everyday physics." },
    { name: "IGCSE Chemistry", levels: "Cambridge / Edexcel", description: "Moles, bonding and qualitative analysis, with the Paper 6 style of observation practised often." },
    { name: "IGCSE Biology", levels: "Cambridge / Edexcel", description: "Systems, genetics and ecology, with data-response answers practised against marking schemes." },
    { name: "IGCSE Computer Science", levels: "Cambridge", description: "Algorithms, binary logic and programming from paper, which a district full of IT parents often wants stronger." },
    { name: "IGCSE English as a First or Second Language", levels: "Cambridge", description: "Directed writing, summary work and speaking-and-listening for children whose home language is Kannada or Hindi." },
    { name: "IGCSE Business Studies and Economics", levels: "Cambridge / Edexcel", description: "Case-based questions and structured writing; a natural pairing with a family business background." },
    { name: "IGCSE Hindi and Kannada (as languages)", levels: "Cambridge", description: "Grammar, comprehension and writing in the language spoken at home." },
  ],

  regionsTitle: "Nelamangala localities and the school routes around them",
  regionsIntro:
    "Nelamangala is spread along one highway and a few feeder roads, so the practical question is less 'which neighbourhood' than 'how long is the school bus ride and when does the child get home'. These notes reflect that.",
  regions: [
    { name: "Nelamangala town centre", note: "The old bazaar and bus-stand area. Many families here send children by school bus towards Bengaluru and expect homework time after 6.30 pm." },
    { name: "Dobbaspet", note: "An industrial and residential pocket where the Hassan road leaves the highway. Factory-shift families need flexible evening and weekend slots." },
    { name: "Sompura Hobli", note: "Home to a large industrial estate; workers' families with children in state-board or CBSE schools sometimes add international maths or science depth." },
    { name: "Tyamagondlu", note: "Smaller settlement on the Tumakuru side. Bus timings control the day, so lessons are tied to the child's actual return time." },
    { name: "Shivagange side", note: "Close to the hill temple and further out on the highway. Evenings here are quiet, which suits long focused sessions." },
    { name: "Madanayakanahalli and Hesaraghatta Road", note: "Newer layouts with Bengaluru-working parents. Children often study at schools in Bengaluru North." },
    { name: "Adakamaranahalli industrial area", note: "A manufacturing and warehouse belt on the Tumakuru side; parents here may be managers on transferable posts." },
    { name: "Soladevanahalli and the Bengaluru boundary", note: "Residents commute into Peenya and Jalahalli; a sharing of school and work travel often fixes lesson times." },
    { name: "Bengaluru North commuters", note: "Households that live near Madavara or Nagasandra but still search 'Nelamangala' because of the highway; online lessons ignore the boundary." },
  ],

  schoolClusters: [
    {
      city: "Nelamangala taluk itself",
      note: "We could not confirm an IB or Cambridge/Edexcel campus inside the taluk. State Board, CBSE and ICSE schools dominate, so most international-syllabus families look south into Bengaluru.",
      schools: [],
    },
    {
      city: "Nearby: Bengaluru North",
      note: "The nearest cluster for a Nelamangala family. Check the daily bus route and the school's own admissions page before you plan around it.",
      schools: ["Stonehill International School", "Greenwood High International School"],
    },
    {
      city: "Nearby: Bengaluru (wider)",
      note: "Further schools that students in the northern suburbs choose when they accept a longer commute or hostel stay.",
      schools: ["Canadian International School, Bengaluru", "The International School Bangalore", "Trio World Academy"],
    },
    {
      city: "Nearby: Tumakuru side",
      note: "Families on the Tumakuru end of the highway often look at the same Bengaluru names, since local options are limited.",
      schools: ["Candor International School"],
    },
  ],
  schoolDisclaimer:
    "School names are listed for geographic context only. IB Gram is an independent tutoring service with no link to the IB, Cambridge, Pearson or any school, and a mention here is not an endorsement or a claim that a school has authorised us. Please confirm programme details with the school.",

  modesIntro:
    "Three ways to learn, all delivered online for Nelamangala students. The choice is about rhythm and goals, not about distance.",
  modes: [
    {
      title: "Online one-to-one",
      description: "The default for Nelamangala: a private live lesson at your own dining table.",
      bullets: ["One tutor, one child, a shared digital whiteboard", "Weekday evening or weekend slots", "A written note after each session"],
    },
    {
      title: "Intensive exam blocks",
      description: "Short, dense runs before an IB session or Cambridge series.",
      bullets: ["Past-paper timing and mark-scheme practice", "Weekend-heavy when the school bus eats weekdays", "Ends with a clear list of remaining gaps"],
    },
    {
      title: "Hybrid online support",
      description: "A steady weekly lesson plus short check-ins before submissions.",
      bullets: ["Feedback on drafts the student writes", "Quick doubt-clearing windows", "No IA, EE or TOK essay is ever written by the tutor"],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools do Nelamangala families use?",
      paragraphs: [
        "The short answer is that most of them travel. We could not confirm an IB or Cambridge IGCSE campus inside Nelamangala taluk, so families look to Bengaluru's northern and eastern belts, to residential schools elsewhere in Karnataka, or to a Cambridge private-candidate route where a child studies at home and sits papers at a registered centre.",
        "That mix is not unusual for a town on a city fringe. Housing prices push families outwards, but the specialist school stays where the original catchment was. A morning school bus of an hour or more is accepted in exchange for a larger plot or a lower rent.",
        "Who are these families? Several groups appear again and again: people working in Peenya's engineering units and moving up to supervisory roles, managers in the Dobbaspet and Sompura industrial belts, IT professionals priced out of the inner suburbs, and returning NRIs who bought land along the highway for a weekend house and stayed.",
        "Because the school is far, evening support matters more than usual. A child back at 6.30 pm cannot do two hours of Physics before dinner. Tutors therefore work short, targeted sessions that reinforce the day's class rather than re-teach everything.",
      ],
      bullets: [
        "Bengaluru North names on this page are for context; check admission rules with each school",
        "Boarding is common for DP years among families who find the bus ride unsustainable",
        "Private candidates for Cambridge IGCSE need a registered exam centre and early entry",
        "Tutoring is added to a school course, not a replacement for it",
      ],
    },
    {
      heading: "How do Karnataka State Board, CBSE, IB and IGCSE compare for a Nelamangala child?",
      paragraphs: [
        "Karnataka's SSLC and the second PUC are examination-centred and textbook-bound; CBSE is similar but with a national scope; the IB and Cambridge IGCSE are skill-centred and assessed in many forms. For a family in Nelamangala the practical difference lies in how the child is asked to show learning.",
        "State Board students usually arrive at an international course with strong arithmetic and weak extended writing. CBSE students tend to have firmer English but sometimes meet open-ended questions for the first time in MYP or IGCSE. Neither group is behind; they just need different bridges.",
        "The table below sets out the four routes side by side. It is a guide, not a ranking: the right board depends on where the child hopes to study later and what the family can sustain day to day.",
        "If you are switching mid-way, ask your target school about its entry assessments. Tutors can then build a bridge course in the months before the switch.",
      ],
      table: {
        caption: "Boards compared for a family in Nelamangala",
        columns: ["Feature", "Karnataka State Board", "CBSE", "IB Diploma", "Cambridge or Edexcel IGCSE"],
        rows: [
          ["Typical age band", "Class 1-10 SSLC, then PUC", "Class 1-12", "Class 11-12", "Class 9-10"],
          ["Assessment style", "Written annual exams", "Board papers, some internals", "Papers plus IA, EE, TOK", "Papers, some coursework, practical or alternative"],
          ["Language of study", "Kannada or English medium", "English or Hindi", "English; second language", "English; many language options"],
          ["Entrance link", "KCET, NEET, JEE", "JEE, NEET, CUET-UG", "AIU equivalence; CUET-UG subject-dependent", "Gateway to A Level or IB"],
          ["Local availability", "Across the taluk", "Several schools", "Nearest campuses are in Bengaluru", "Bengaluru and online private candidacy"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Nelamangala, and what drives it?",
      paragraphs: [
        "Because we publish no price list, the honest answer is about what moves a rate. The four main drivers are the programme (a PYP reading tutor and an IB Physics HL specialist are different roles), the subject level, how many lessons per week and how soon the exam is.",
        "Tutors are based in India and teach in IST, so you are not paying for travel across Bengaluru; online delivery removes that line. What remains is subject depth and the tutor's experience with the exact paper style.",
        "Ask any provider the same questions we answer: Is the rate quoted in writing before the first lesson? Is the trial free? What happens if the fit is wrong? We quote in writing, offer a free trial and will change the tutor without drama.",
        "For planning, many Nelamangala families pick one subject and two sessions a week for a term, then add a block before the exam. That keeps spend predictable without overserving a child who only needs targeted help.",
      ],
      bullets: [
        "Rates are quoted in writing before you book",
        "No published price list: needs differ by programme and subject",
        "Free trial lesson; tutor changes at no extra cost if the fit is poor",
        "Exam-block weeks cost more than steady weekly lessons because of intensity",
      ],
    },
    {
      heading: "How does online home tuition compare with centres, private tutors and self-study?",
      paragraphs: [
        "Nelamangala has coaching centres, mostly for JEE, NEET and state-board subjects, and some private teachers who handle CBSE. Few advertise an international syllabus, and those that do usually run group batches in Bengaluru.",
        "Online one-to-one tuition costs the student no commute, and the tutor can be chosen for the exact course. Group centres are cheaper per head but pace to the middle of the room. A home private tutor on the CBSE side may be warm and local, yet seldom knows IB command terms.",
        "Self-study with past papers is a perfectly good path for a disciplined student. It breaks down where feedback is needed, such as an extended Maths proof or a Chemistry data question. A tutor's real value is the marked attempt.",
        "The table puts the four routes side by side for a family weighing them up.",
      ],
      table: {
        caption: "Learning routes compared for a Nelamangala student",
        columns: ["Route", "Where it happens", "IB and IGCSE depth", "Flexibility", "Main trade-off"],
        rows: [
          ["Online one-to-one (IB Gram)", "At home, on a laptop", "Tutor chosen for the exact course", "High: evenings and weekends", "Needs a quiet spot and decent internet"],
          ["Local coaching centre", "Town or Bengaluru branch", "Mostly state board, JEE or NEET", "Fixed batch timings", "Group pace, commute time"],
          ["Private home tutor (local)", "Student's home", "Varies, usually CBSE-based", "Medium", "Seldom knows IB marking criteria"],
          ["Self-study with past papers", "Anywhere", "Depends on discipline", "Total", "No expert marking or feedback"],
        ],
      },
    },
    {
      heading: "When are exams, and how do the school year and the festival calendar affect study here?",
      paragraphs: [
        "IB Diploma exams run in May and November sessions; IGCSE series are typically in May-June and October-November with a smaller January window for some boards. Check the school or exam centre for exact papers and dates, which are published by each board.",
        "In Karnataka the academic year starts in June for state-board schools and in April for CBSE, so a child moving between them can lose weeks. Dasara in October gives a long break, and Ugadi in March or April sometimes lands on top of exam preparation for a May session.",
        "Monsoon is moderate on this plateau, but heavy evening rain slows Tumakuru Road and can delay buses. Online lessons absorb that: nothing is cancelled because a lorry broke down near Dobbaspet.",
        "The table below gives a planning calendar. It is a general guide, not a timetable; always confirm with your school.",
      ],
      table: {
        caption: "A planning calendar for Nelamangala students",
        columns: ["Period", "What is happening", "Study focus"],
        rows: [
          ["January-February", "IB mocks; school prelims", "Past-paper timing and weak-topic repair"],
          ["March-April", "Ugadi, CBSE exams, IGCSE coursework deadlines", "Short sessions; keep revision rhythm"],
          ["May-June", "IB May session; IGCSE May-June series", "Exam-day routines and rest"],
          ["July-September", "New school year; Ganesh Chaturthi", "Fresh-year foundations and IA planning (student's own work)"],
          ["October-November", "Dasara break; IB November session; IGCSE Oct-Nov series", "Holiday block lessons and final revision"],
          ["December", "Deepavali tail; mock papers", "Gap review before January mocks"],
        ],
      },
    },
    {
      heading: "Which universities can a Nelamangala IB or IGCSE student aim for?",
      paragraphs: [
        "Students from this edge of Bengaluru look in four directions: Bengaluru's own universities and private institutions, Indian central and national universities, study abroad, and the Indian engineering and medical entrance routes.",
        "IB Diploma results are treated as equivalent to Indian Class 12 by the Association of Indian Universities, which is the basis for most admissions. For central universities using CUET-UG, subject choices must match the course; check the current notification. JEE Main and NEET eligibility for IB and IGCSE candidates depends on subject combination and board-equivalence; confirm each year with the testing agency.",
        "Abroad, the IB is widely recognised in the UK, Canada, Australia and the US, and a Cambridge IGCSE alone is a stepping stone to A Level or the IB Diploma rather than a school-leaving certificate. Admissions staff ask for predicted grades, so steady classroom evidence matters.",
        "From Nelamangala, the practical path is to decide by Class 9 whether the child wants a domestic route or an overseas one, since subject choices in Class 11 narrow the options.",
      ],
      bullets: [
        "AIU equivalence for the IB Diploma enables Indian university applications",
        "CUET-UG subject mapping should be checked early",
        "JEE and NEET eligibility must be confirmed with the testing agency each year",
        "Study abroad needs predicted grades and sometimes SAT or IELTS",
      ],
    },
    {
      heading: "How do IB Maths and the sciences work in detail for Nelamangala students?",
      paragraphs: [
        "IB Maths comes in two courses, each at HL and SL. Analysis and Approaches is for students heading to engineering, pure science or economics; Applications and Interpretation suits business, psychology and social science. Switching later is painful, so decide before Class 11 starts.",
        "Karnataka students often compute quickly and enter Analysis and Approaches with strong algebra. They struggle when asked to justify a result in words, or to use the calculator for statistics. Tutors build both habits early.",
        "The sciences share a pattern: Paper 1 multiple choice, Paper 2 structured, and Paper 3 options or data. Internal assessment is the student's own investigation. Our tutors explain the criteria and give feedback on a student's plan, but never write or edit it into shape.",
        "Language matters too. A child who reads in Kannada at home needs extra practice in precise scientific English; short oral explanation drills in the lesson help more than extra reading.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Nelamangala student choose?",
      paragraphs: [
        "Core caps the grade at C in many Cambridge subjects; Extended opens grades up to A*. The rule of thumb is to take Extended if the child is comfortable with algebra and can work through unfamiliar problems, and Core if foundations are shaky.",
        "Most children begin IGCSE in Class 9. Those starting in Class 10 as private candidates face a compressed timeline, so tutors often prepare an early topic map and a past-paper plan within the first fortnight.",
        "Subject choice also matters. Many students take Maths, Physics, Chemistry, Biology or Computer Science, plus English and a language such as Hindi. If you are unsure, the free trial is a good moment to ask a tutor to test a few topics.",
        "Where a child is aiming for IB DP afterwards, strong IGCSE Maths and a science at Extended level make Class 11 noticeably easier.",
      ],
      bullets: [
        "Core suits a gentler pace; Extended suits a child aiming for top grades",
        "Edexcel and Cambridge differ in paper structure; tutors work by exact code",
        "Private candidates should register with an exam centre early",
        "Language subjects need regular oral and written practice",
      ],
    },
  ],

  process: [
    { title: "Message us", description: "Send the child's class, board, subjects and next exam date on WhatsApp or email. A reply comes with a short list of questions, not a sales call." },
    { title: "Share the context", description: "Tell us where the child studies, how long the bus ride is and which topics feel shaky. A past paper or recent test helps." },
    { title: "Meet a matched tutor", description: "We propose a tutor with the right course and experience. You see the profile before anything is booked." },
    { title: "Take the free trial", description: "A real lesson on a real topic, online. The child decides whether it feels right." },
    { title: "Begin and review", description: "Rates are confirmed in writing, a written note follows each session, and the tutor can be changed if the fit is wrong." },
  ],

  whyPoints: [
    { title: "No highway time", description: "Lessons come to the home laptop, so the ride to Bengaluru is not part of the tuition day." },
    { title: "Matched by course", description: "Tutors are picked for the exact IB or IGCSE course and board, not for where they live." },
    { title: "Written notes", description: "After each lesson you receive a short note on what was covered and what comes next." },
    { title: "Honest about format", description: "Online in Nelamangala, home visits only in Gurugram and parts of Delhi NCR. We say it plainly." },
    { title: "Free trial and a change of tutor", description: "Try first; switch tutors if the fit is wrong." },
    { title: "Coaching, not ghostwriting", description: "Tutors never write IAs, Extended Essays or TOK essays. They explain and give feedback." },
  ],

  tutorsIntro:
    "Every tutor below teaches from elsewhere in India over live video, so a Nelamangala student gets a subject specialist without a drive down Tumakuru Road. Each card names the IB programme or IGCSE syllabus that tutor has taught. Read two or three, then send us your child's course, level and the time the school bus gets home, and we will shortlist a match for the free trial lesson.",

  faqs: [
    { question: "Do you offer IB and IGCSE tutors in Nelamangala?", answer: "Yes, online. Our tutors teach live, one-to-one, over video to students in Nelamangala. Because the tutors are based elsewhere in India and teach in IST, you can match on subject and board instead of distance. Lessons cover IB PYP, MYP, DP and CP, and Cambridge and Pearson Edexcel IGCSE, with a free trial lesson first and a written note after every session." },
    { question: "Is IB home tuition available in Nelamangala?", answer: "Not in person. Tutors do not visit homes in Nelamangala; in-person home tuition runs only in Gurugram and parts of Delhi NCR. What we offer here is online home tuition: a private one-to-one lesson that the student takes from home on a laptop. Many families find that the lack of a visiting tutor is made up by being able to choose a subject specialist from anywhere in India." },
    { question: "Which IB and IGCSE schools are near Nelamangala?", answer: "We could not confirm an IB or Cambridge IGCSE campus inside Nelamangala taluk. Families usually look to Bengaluru North and further into the city; names such as Stonehill International School and Greenwood High International School appear on our Bengaluru page. Please verify programmes and admissions directly with each school, because offerings change." },
    { question: "How much does IB or IGCSE tuition cost in Nelamangala?", answer: "Rates depend on the programme, subject level, number of weekly lessons and how close the exam is, and we quote them in writing before you book. We do not publish a price list because a PYP reading tutor and an IB Physics HL specialist are different roles. The first trial lesson is free, so you can judge value before committing." },
    { question: "Can you help with IB Maths Analysis and Approaches or Applications and Interpretation?", answer: "Yes, at both HL and SL. Tutors help students choose between the two courses, work through past papers and learn the calculator skills needed for statistics. Karnataka and CBSE students often calculate well but need practice writing a reasoned argument, so sessions focus on structure and clarity as well as answers." },
    { question: "Do you teach both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes. Tutors are assigned by board and syllabus code, since Cambridge and Edexcel papers differ in style and weighting. Tell us the subject code printed on the student's registration or syllabus and we match a tutor who has taught that specification. Core and Extended tiers are both covered." },
    { question: "Will a tutor write my child's Internal Assessment or Extended Essay?", answer: "No. Tutors coach but never write, edit into shape or ghostwrite any assessed work, including IAs, Extended Essays and TOK essays. They can explain the criteria, discuss how to plan an investigation and give general feedback on drafts the student has produced. The work must remain the student's own." },
    { question: "What time are lessons for Nelamangala students?", answer: "We schedule around the school bus, not against it. Most weekday lessons are after 7 pm, and many families prefer weekend mornings. Tutors teach in IST, so there is no time zone adjustment. If Tumakuru Road traffic delays the bus, a lesson can be moved by message." },
    { question: "How does the free trial lesson work?", answer: "It is a real lesson on a topic your child chooses, taught online by the tutor we propose. There is no obligation afterwards. If the style or subject match is wrong, we offer another tutor. If you decide to continue, rates are confirmed in writing before any payment." },
    { question: "Can a student in Nelamangala sit Cambridge IGCSE as a private candidate?", answer: "Yes in principle, but the student needs a registered Cambridge or Pearson exam centre that accepts private candidates, and entries close months before the series. Tutors can prepare the syllabus and past-paper practice; the centre handles registration. Check with the centre early, especially for science practical or coursework components." },
    { question: "Is IB accepted for Indian university admission from Nelamangala?", answer: "Generally yes. The Association of Indian Universities treats the IB Diploma as equivalent to Class 12, which is the basis for most admissions. CUET-UG, JEE Main and NEET have their own subject and eligibility rules, so confirm them with the agency each year. Tutors help with subject depth but do not guarantee admission." },
    { question: "My child is in a State Board school. Can tuition help a move to IB or IGCSE?", answer: "Yes. A bridge course usually targets English writing, Maths reasoning and science command terms. A tutor reviews a recent test, finds the gaps and plans a few weeks of preparation before the new school year. Start at least a term before the switch if you can." },
    { question: "How do I get started?", answer: "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the child's class, board, subjects and next exam. We reply with a proposed tutor and a free trial slot. There is no registration fee and nothing is booked until you approve the rate in writing." },
    { question: "Do you cover IB PYP and MYP as well as the Diploma?", answer: "Yes. For PYP, tutors keep reading, writing and number work steady while the school's inquiry units run. For MYP they help with criterion-based writing in Sciences, Maths and Individuals and Societies, and coach the Personal Project process without writing it. Diploma support covers HL and SL subjects and the core." },
    { question: "Can tutors help with Kannada or Hindi as a language subject?", answer: "Yes, for IB Language A or B and for IGCSE first-language or foreign-language Hindi and Kannada. Tutors focus on grammar, oral practice and set-text analysis. Availability of a Kannada specialist varies by session, so mention the need early so we can match in time." },
    { question: "What if my child and the tutor do not click?", answer: "We change the tutor at no extra charge. Tell us what felt off, whether the pace, the explanation style or the schedule, and we propose another. Most mismatches are fixed in a single swap, and the free trial exists precisely so this is found early." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The national overview of how our online lessons work for Indian students." },
    { label: "IB and IGCSE tutors in Bengaluru", href: "/bengaluru/", description: "The city page for families living inside Bengaluru, with a different school and locality picture." },
    { label: "IB and IGCSE tutors in Tumakuru", href: "/tumkur/", description: "Our page for the next town up the highway." },
    { label: "IB and IGCSE tutors in Ramanagaram", href: "/ramanagaram/", description: "A neighbouring district town on the Mysuru road." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Meet the tutor team and subject coverage." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE support." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the Diploma asks of a student, subject by subject." },
    { label: "IB MYP", href: "/programmes/myp/", description: "Middle Years support for Classes 6-10." },
    { label: "IB Maths", href: "/courses/ib/mathematics/", description: "AA and AI courses explained." },
    { label: "Contact us", href: "/contact-us/", description: "Ask for a free trial lesson." },
  ],

  closingHeading: "Start with one free lesson from Nelamangala",
  closingBody:
    "Pick one subject, tell us the exam date and the school bus timing, and we will propose a tutor. The first lesson is free, rates come in writing, and the highway stays out of it. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com.",
};
