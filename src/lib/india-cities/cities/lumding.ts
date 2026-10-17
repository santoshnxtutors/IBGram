import type { CitySeoPage } from "../types";

/**
 * /lumding/ - IB and IGCSE tutoring page for Lumding, Hojai district, Assam. No local IB/IGCSE
 * school is confirmed, so stripSchools is empty and clusters are labelled nearby cities.
 * Online one-to-one tuition only.
 */
export const lumding: CitySeoPage = {
  slug: "lumding",
  countryName: "Lumding",
  countryNameLong: "Lumding, Hojai district, Assam",
  demonym: "Lumding",
  state: "Assam",
  stateCode: "IN-AS",
  flagCode: "in",
  countryCode: "IN",
  region: "Assam, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timings are set around railway-duty rosters, Bihu and Durga Puja weeks, and the monsoon rain that sometimes breaks the connection in the hills",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.75, longitude: 93.17 },
  wikipedia: "https://en.wikipedia.org/wiki/Lumding",
  alternateNames: ["Lumding Junction"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Lumding | Private Home Tuition Online",
  metaDescription:
    "Online IB and IGCSE tutors for Lumding, Hojai district: private one-to-one tuition at home, Assam board switch support, railway-family timings, free trial.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Lumding",
  heroEyebrow: "LUMDING, HOJAI DISTRICT: PRIVATE IB & IGCSE TUITION, ONLINE",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Lumding has one honest limit: tutors do not walk into homes here, since home visits run only in Gurugram and parts of Delhi NCR. What Lumding gets is private one-to-one tuition at home, delivered online by a tutor who has taught the specific course. It is built for railway families who can be transferred without notice, for students of Assamese and Bengali backgrounds heading towards a school elsewhere, and for parents who want an international option the town itself cannot supply.",
  primaryKeyword: "IB and IGCSE tutors in Lumding",
  imageAltText: "A Lumding student working on IGCSE Chemistry questions during a live one-to-one online lesson",
  secondaryKeywords: [
    "IB tutor Lumding",
    "IGCSE tutor Lumding",
    "IB home tuition Lumding",
    "IGCSE home tuition Lumding",
    "IB private tuition Lumding",
    "IB Maths tutor Lumding",
    "IGCSE Maths tutor Lumding",
    "IB Physics tutor Lumding",
    "IB Chemistry tutor Lumding",
    "IB Biology tutor Lumding",
    "IB DP tutor Lumding",
    "IB MYP tutor Lumding",
    "IB PYP tutor Lumding",
    "IGCSE online tuition Lumding",
    "IB tutor Hojai district",
    "IGCSE tutor Lumding railway colony",
    "online IB tutor Assam",
    "IB tutor Lumding Assam",
  ],

  heroTrustPoints: [
    "Private online lessons from home with a tutor who knows your child's exact IB or IGCSE course",
    "Tutors do not visit homes in Lumding; in-person visits exist only in Gurugram and parts of Delhi NCR",
    "A free first lesson, then a rate quoted in writing",
    "Not connected to the IB, Cambridge, Pearson or any school mentioned here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Across the full IB continuum" },
    { value: "IGCSE", label: "Cambridge and Pearson Edexcel" },
    { value: "IST", label: "One time zone, no jet lag" },
    { value: "Free trial", label: "Judge a lesson first" },
  ],

  intro: {
    heading: "What IB and IGCSE help looks like from Lumding",
    paragraphs: [
      "Lumding is a railway junction town in Hojai district, and for most of the last century the railway has set its rhythm. Families here are Assamese, Bengali, Hindi-speaking and Manipuri, many connected to the Northeast Frontier Railway, and the schools are overwhelmingly SEBA, Assam board and CBSE. There is no international school in town, which is why this page exists: a few families want one anyway.",
      "The reasons are specific. A railway officer expecting a posting to Delhi, Chennai or Mumbai may want a child to be in step with an IB or IGCSE classroom before the move. Parents with children already at a boarding school in another city may want holiday support in the same syllabus. Others are exploring online international schools that can be attended from Lumding itself.",
      "Every lesson is online. A Lumding student logs in from home and meets a tutor who might live in Hyderabad or Pune; the specialist is chosen for what they have taught, not for where they live. In-person home visits are offered only in Gurugram and parts of Delhi NCR, so none are available in Lumding, and we would rather say so now.",
      "Tutors coach and mark; they do not write Internal Assessments, Extended Essays, TOK essays or any coursework. IB Gram is independent of the IB, Cambridge, Pearson and every school in this page.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, with tutors matched by subject and level",
      "Cambridge and Pearson Edexcel IGCSE, in any tier",
      "Live one-to-one lessons by video, in Indian Standard Time",
      "Free trial lesson, then a written plan and rate",
      "No home visits in Lumding; those exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "A Lumding student rarely meets the IB through a neighbourhood school, so the first conversation with a tutor is about where the child actually studies and which stage of the programme they are in. Here is what each stage demands.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 5, ages 3-12",
      description:
        "Teaching is arranged around big themes explored through inquiry, and the programme finishes with a student-led Exhibition. No external exam exists at this level, so a tutor works on reading comfort, number sense and speaking up in a lesson.",
      countryNote:
        "In Lumding the PYP question usually comes from a railway family anticipating a transfer to a city where the child will join an IB primary class.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups, assessed through criteria, with a Personal Project at the end and optional on-screen exams. Understanding the topic is rarely the problem; arguing it in the form a criterion demands is.",
      countryNote:
        "Students coming from an Assam board or CBSE background take a few months to adjust to writing explanations rather than reproducing notes.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A two-year course of six subjects across Higher and Standard Level, with TOK, the Extended Essay and CAS. Internal assessments feed into the final grade, and written papers are sat in May or November.",
      countryNote:
        "A Lumding DP student is normally enrolled in a school or online programme elsewhere, and wants Maths, science or English tutoring that follows that school's pace.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Pairs Diploma courses with a vocational pathway and a reflective project. Few Indian schools offer it, but the academic courses inside it need the same quality of tuition as any Diploma subject.",
      countryNote:
        "Requests from Lumding are uncommon; we support only the Diploma-level courses within the child's CP.",
    },
  ],

  subjectsIntro:
    "Assam board and CBSE papers reward neat, complete answers. IB examiners look for a precise response to a command word. The first few lessons for most Lumding students go into reading mark schemes, since that skill alone changes marks in every subject. Because the same subject name can hide very different courses, we match by code, level and session.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions, vectors and proof. Students who enjoyed JEE-type problem solving feel at home, though HL Paper 3 asks for a longer chain of reasoning than a coaching worksheet." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Probability, regression and modelling with a graphic calculator. The Exploration is better when the idea comes from something the student actually cares about." },
    { name: "IB Physics", levels: "HL / SL", description: "Includes the Scientific Investigation. Students often know formulae but lose marks on uncertainty, graph interpretation and stating assumptions." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Organic chemistry, energetics and equilibrium take the longest to settle. A tutor cuts the amount of rote learning by showing the pattern behind mechanisms." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and physiology. Precise vocabulary is rewarded, and loose paraphrase is not." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram-led, with a requirement to evaluate. Railway, tea, oil and border-trade examples from the Northeast make useful real-world cases." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based questions that reward applying a tool to the firm named in the stimulus." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading, comparison and a spoken commentary. Students who think in Assamese or Bengali often need extra work on formal English argument." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, databases, networks and, at HL, further depth. Writing and tracing code by hand matters as much as running it." },
    { name: "IB Psychology", levels: "HL / SL", description: "Study recall plus evaluation; the long-response paper rewards a clear structure." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "A systems approach with plenty of regional material: monsoon flooding of the Brahmaputra basin, tea estates, forest cover and biodiversity." },
    { name: "IB Geography", levels: "HL / SL", description: "Data response, case studies and fieldwork. Northeast India provides vivid examples of rivers, migration and hazards." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation and argument essays, with separate preparation for each paper." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Unseen comprehension, text types and the individual oral. Assamese and Bengali speakers benefit from structured practice in Hindi grammar." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Seminar-style coaching to help students frame a title, test counterexamples and plan an exhibition. The writing stays the student's." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson run separate IGCSEs with their own codes, tiers and calendars. We confirm the board, the code and the sitting before the first lesson so that the papers a Lumding student practises are the ones they will meet.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended candidates need disciplined working and a good non-calculator paper; tutoring fixes slips in algebra and number handling." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, logarithms and vectors, a head start for IB Maths AA." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Familiar topics asked in Edexcel's own style, best practised on Edexcel papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Rearranging equations, interpreting graphs and the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, electrolysis, the periodic table and organic basics, with qualitative-analysis questions practised early." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance and ecosystems; the extended-answer structure is taught explicitly." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Basic economic ideas applied to short data extracts, with practice on the evaluative paragraph." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Logic gates, trace tables, pseudocode and Python on unfamiliar tasks." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Writing for effect, summary and directed writing on unseen texts." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading, short writing and conversation, with spoken practice done live on video." },
  ],

  regionsTitle: "Neighbourhoods around Lumding we teach into",
  regionsIntro:
    "Lessons happen on screen, so the locality only changes the practical side: railway-shift routines, evening power, the Hill Section rain and how many visitors a festival brings to the house.",
  regions: [
    { name: "Lumding Railway Colony", note: "The large residential area for Northeast Frontier Railway staff, where transfers are a normal part of family life and an adaptable syllabus is attractive." },
    { name: "Station Road area", note: "The busy commercial belt near the junction, with shops and coaching centres." },
    { name: "Lumding Bazar", note: "The town's trading centre, home to business families who often look for broader study options for their children." },
    { name: "Lumding College area", note: "Around the Gauhati University-affiliated college established in 1959, a quieter educational pocket." },
    { name: "Divisional headquarters area", note: "Offices and quarters linked to the railway administration, with housing for officers whose postings change." },
    { name: "Hojai", note: "The district town, reached by road and rail, with a bigger commercial market and more schools." },
    { name: "Doboka", note: "A junction town along the rail and road corridor in Hojai district, with its own small market." },
    { name: "Lanka", note: "A town in the district on the line towards Guwahati, used by many families for trade and rail travel." },
    { name: "Haflong", note: "In neighbouring Dima Hasao, reached by the scenic hill-section line out of Lumding, with its own hill-district school context." },
    { name: "Nagaon", note: "A larger city in central Assam that families visit for hospitals, colleges and shopping." },
  ],

  schoolDisclaimer:
    "No school in Lumding is confirmed to teach the IB or a Cambridge or Edexcel IGCSE, so the clusters below describe other cities Lumding families look at. They are named for orientation and IB Gram has no contract with, endorsement from or agency for any of them, the International Baccalaureate, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Lumding itself",
      note: "Schools in town follow SEBA, the Assam board or CBSE; none is confirmed for IB or IGCSE, so local options for those syllabi are limited.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The usual big-city destination for families in Assam seeking an established international school, reachable by train and flight.",
      schools: ["Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Where many railway and government families get posted, and where IB Gram's own in-person service operates.",
      schools: ["The British School, New Delhi", "Pathways World School, Gurugram"],
    },
  ],

  modesIntro:
    "In Lumding the format is always the same: a private tutor on video, with the student at home. Lessons differ by rhythm, not by medium.",
  modes: [
    {
      title: "Standing weekly lesson, online",
      description:
        "One fixed slot a week, usually an evening after school and any railway-colony errands, using a shared whiteboard and the student's own papers.",
      bullets: [
        "Same tutor throughout the year",
        "Whiteboard, past papers and mark schemes live on screen",
        "IB PYP, MYP, DP or IGCSE",
        "Written note after each lesson",
      ],
    },
    {
      title: "Two lessons a week for a catching-up term",
      description:
        "For a student who has joined an online school midway or fallen behind after a move. Two sessions weekly rebuild basics first and then move on to the current unit.",
      bullets: [
        "Starts with a short diagnostic",
        "Sessions step down once the gap closes",
        "Weekly note to parents",
        "Easy to scale back during Bihu or Puja weeks",
      ],
    },
    {
      title: "Mock-and-exam intensive",
      description:
        "A short run of frequent lessons ahead of internal mocks or the May and November papers, built around timed questions and fast marking.",
      bullets: [
        "Papers marked against the current criteria",
        "Targeted revision for weak topics",
        "Booked two to three weeks ahead",
        "Plan avoids festival and travel dates",
      ],
    },
  ],

  sections: [
    {
      heading: "Do any schools in Lumding teach the IB or IGCSE?",
      paragraphs: [
        "None that we can confirm. Lumding's schools belong to the Assam state board system, to CBSE or to railway and mission networks, and an honest answer on a page like this is that families here cannot simply enrol a child in a local IB or IGCSE classroom. Anyone who tells you otherwise should be asked for the school's authorisation record on the IB or Cambridge website.",
        "What families do instead falls into three patterns. One is to use an online international school or an approved online course while living in Lumding. Another is to send a child to boarding or day school in a bigger city such as Kolkata or the Delhi region, and to keep up with the course at home during breaks. The third is simply to prepare in advance of an expected transfer.",
        "Guwahati, roughly 150 to 200 kilometres away, is the regional hub for colleges and hospitals, but for international curricula the reach of the Northeast is limited, which is why we do not name a Guwahati school here. Rather than guess, we list the Kolkata and Delhi NCR schools that are well documented as IB schools.",
        "Whichever pattern applies, the tutor's task is the same: know the syllabus, set the right past papers and keep the student on pace, without needing a local school.",
      ],
      table: {
        caption: "Routes into an international curriculum from Lumding",
        columns: ["Route", "How it works", "Where tutoring fits"],
        rows: [
          ["Online international school", "Child attends classes on a laptop from Lumding", "Weekly tutor for the hardest subjects and for exam technique"],
          ["Boarding in another city", "Child lives at school, returns in breaks", "Holiday catch-up and mock preparation online"],
          ["Pre-transfer preparation", "Family expects a posting to a metro", "Bridging lessons in Maths, science and English"],
          ["Private IGCSE candidate", "Child studies privately and sits exams at a registered centre", "Full syllabus coverage with a tutor and past papers"],
        ],
      },
      bullets: [
        "No confirmed IB or IGCSE school in Lumding",
        "Online schools and boarding elsewhere are the usual routes",
        "Kolkata and Delhi NCR schools are shown as nearby clusters",
        "A tutor matches the syllabus, wherever it is taught",
      ],
    },
    {
      heading: "How do SEBA, Assam board and CBSE compare with IB and IGCSE?",
      paragraphs: [
        "The shortest comparison is this: SEBA and CBSE reward correct recall, while IB and IGCSE reward correct reasoning. Both take intelligence, but they test different habits, and a student excellent at the first can be surprised by the second.",
        "Take a Biology question. A board paper may ask a student to list the stages of a process. An IGCSE Extended or IB paper is likelier to give a graph or an unfamiliar organism and ask what a result suggests. The facts are the same; the application is new.",
        "Another difference is how long the work stretches. IB internal assessments take weeks and need a draft, feedback and a final version. Some IGCSE subjects have coursework or practical papers. Assam board students are more used to a single exam at the end, so the planning habit has to be learned.",
        "The advantage runs the other way too. Students from board backgrounds are usually good at memorising and at stamina, and an IB tutor can aim those strengths at the formula sheets and definitions that the exam still requires.",
      ],
      table: {
        caption: "SEBA / CBSE and IB / IGCSE in practice",
        columns: ["Aspect", "SEBA and CBSE", "IB and IGCSE"],
        rows: [
          ["What earns marks", "Accurate recall of taught content", "Applying ideas to unseen contexts"],
          ["Long assignments", "Few, usually practical files", "IAs, Extended Essay, coursework in some subjects"],
          ["Language of answers", "Often Assamese, Hindi, Bengali or English", "English, with some language courses in Hindi and others"],
          ["Overseas readability", "Needs explanation", "Instantly understood by most foreign admissions offices"],
        ],
      },
      bullets: [
        "Board training builds stamina and memory",
        "IB and IGCSE add application and evaluation",
        "Long assessed work needs planning skills",
        "A tutor links the two styles",
      ],
    },
    {
      heading: "What should Lumding parents expect to pay for IB or IGCSE tuition?",
      paragraphs: [
        "Fees are set per match, not per town. The main drivers are the level of the course, how scarce tutors for that subject are, the length of each lesson and how often the lessons run. A tutor for IB Higher Level Physics costs more than one for IGCSE Biology Core because far fewer people can teach it at that depth.",
        "Because teaching is online, no money is spent on getting a tutor to Lumding. A Lumding family pays what a family in a big city pays for the same tutor, with no surcharge for the junction's distance from the metros.",
        "We do not print a price list, because a quote without knowing the course would be a guess. The rate for your tutor and schedule is sent in writing after the free trial and before you book anything.",
        "Value is measured in marks recovered, not in hours. A single well-marked past paper with a clear action list can be worth more than weeks of general revision.",
      ],
      bullets: [
        "Level, subject, lesson length and frequency set the rate",
        "No travel surcharge",
        "Written quote after the free trial",
        "Pause or stop without penalty",
      ],
    },
    {
      heading: "Online home tuition, Lumding coaching centres, local tutors or self-study: which fits IB and IGCSE?",
      paragraphs: [
        "Coaching around Lumding is built for the Assam board, HSLC and HS exams, JEE, NEET and railway recruitment tests. That industry is serious, but its batches have no IB Economics or IGCSE Chemistry in the timetable.",
        "Local private tutors are available and often affordable. They are an excellent choice for school-board subjects and for helping a younger child with homework. They are less likely to know what a Paper 2 data-booklet question looks like.",
        "Students who study alone can do well with a clear syllabus and a stack of past papers, particularly in IGCSE Mathematics. What they miss is feedback: nobody reads their working, tells them an investigation question is too wide or points out that an essay answers a different command word.",
        "A live online tutor brings the two missing things together, syllabus knowledge and personal feedback. The trade-off is that the student needs a reliable laptop and connection, which in the hills around Lumding is worth checking before lessons begin.",
      ],
      table: {
        caption: "Comparing study options in Lumding for IB and IGCSE",
        columns: ["Option", "Knows IB / IGCSE?", "Personal feedback?", "Practical issue"],
        rows: [
          ["Coaching centre", "No, exam-board and entrance focus", "Limited in a batch", "Timings fixed by the batch"],
          ["Local tutor", "Rarely", "Yes", "May not have used IB or IGCSE papers"],
          ["Self-study", "Only from books", "None", "Hard to judge own progress"],
          ["Online specialist tutor", "Yes, matched to course", "Yes", "Requires stable internet and a laptop"],
        ],
      },
      bullets: [
        "Local coaching targets other exams",
        "Local tutors are good for board subjects",
        "Self-study lacks feedback",
        "Online specialists combine syllabus knowledge and attention",
      ],
    },
    {
      heading: "How do Bihu, Durga Puja and the monsoon shape the study year in Lumding?",
      paragraphs: [
        "Bihu in mid-April, with Rongali Bihu marking the Assamese new year, falls during the weeks when many IB and IGCSE students are in final revision for May papers. Durga Puja in autumn, a big occasion for the Bengali community in Lumding, interrupts the October-November IGCSE season. Planning around both is less a courtesy than a necessity.",
        "The monsoon is the other big factor. Heavy rain from June to September makes roads slippery and sometimes cuts power or mobile data, and landslides on the hill-section line can disrupt rail travel for those in transit. A good schedule keeps a spare slot each week and gives the tutor a phone number to continue by audio if video drops.",
        "Winters are cool, with night lows that can fall to about 4 or 5 degrees Celsius, and the dry months from November to February are ideal for mock exams. Summer highs can touch 40 degrees, so afternoon lessons are best avoided.",
        "Putting it together, the most productive blocks are usually November to February for exam practice and July to September for new content, with lighter weeks around the big festivals.",
      ],
      table: {
        caption: "A Lumding study calendar for IB and IGCSE students",
        columns: ["Months", "Local conditions", "Study focus"],
        rows: [
          ["March-May", "Rongali Bihu, rising heat, IB May papers", "Final revision, timed papers, early or late lesson slots"],
          ["June-September", "Heavy monsoon, school terms resume", "New content, IA planning, backup connection plan"],
          ["October-November", "Durga Puja, Kali Puja, Cambridge Oct-Nov series", "Short, focused sessions around festivals"],
          ["December-February", "Cool, dry weather; mock season", "Full mocks, Edexcel January series, feedback cycles"],
        ],
      },
      bullets: [
        "Bihu overlaps with May exam preparation",
        "Durga Puja sits inside the autumn IGCSE window",
        "Monsoon needs a backup connection plan",
        "Winter is the best time for mocks",
      ],
    },
    {
      heading: "Where can an IB or IGCSE student from Lumding go after school?",
      paragraphs: [
        "In India, the IB Diploma is treated as equivalent to Class 12 by the Association of Indian Universities, so a Lumding student can apply to Gauhati University, Cotton University, Tezpur University, NIT Silchar or universities elsewhere. For central universities, CUET-UG is the route, and subject combinations should be planned in Class 11.",
        "Those aiming for IIT Guwahati or other engineering institutes should check eligibility wording for JEE Main and Advanced, which refer to Class 12 or equivalent and specific subjects. Medical aspirants face NEET-UG's own rules about Biology, Physics, Chemistry and English. A tutor can help the student think through the subject mix; the official notification is the final word.",
        "Overseas, the IB Diploma and IGCSE followed by A Levels are the usual pathways to the UK, Canada, Australia, the US and Europe. Predicted grades, English-language scores, references and essays matter, and a well-chosen set of Higher Level subjects makes the offer stronger.",
        "Students who return to Northeast India after studying elsewhere often bring the IB with them into careers in public policy, hospitality and tea or oil industries. It is a flexible qualification if the subject choices were made with a direction in mind.",
      ],
      table: {
        caption: "Pathways from Lumding with an IB or IGCSE background",
        columns: ["Goal", "Typical route", "Check"],
        rows: [
          ["Assam and Northeast universities", "IB Diploma with AIU equivalence; CUET-UG for central universities", "Each institution's current admission notice"],
          ["Engineering", "JEE Main/Advanced with PCM subjects", "Eligibility language for IB and international boards"],
          ["Medicine", "NEET-UG with Biology, Physics, Chemistry, English", "Subject combination in Class 11"],
          ["Overseas degree", "IB Diploma or IGCSE then A Levels", "Predicted grades, language tests, deadlines"],
        ],
      },
      bullets: [
        "AIU equivalence supports Indian university applications",
        "CUET-UG, JEE and NEET have separate rules",
        "Predicted grades matter for overseas offers",
        "Verify with each institution before choosing subjects",
      ],
    },
    {
      heading: "How should a Lumding student choose between IB Maths AA and AI?",
      paragraphs: [
        "Analysis and Approaches builds algebra, calculus and proof. It suits students aiming at engineering, physical science, computer science or economics at a research-oriented university. Applications and Interpretation is built around statistics, modelling and technology, and suits students aiming at business, social science, psychology or design.",
        "The decision should be made with a subject teacher and, where possible, with a look at the entry requirements of the courses the child might apply for. Some universities specify AA at Higher Level; others accept either course.",
        "In our online lessons, the Maths tutor uses a shared writing surface so that every line of the student's working is visible. Common mistakes, such as dropped brackets, unsupported steps and calculator-only answers, appear early and can be corrected before they harden into habits.",
        "For the Exploration, the tutor helps the student find a manageable topic and understand what the assessment criteria reward. The mathematics, writing and analysis remain the student's own work.",
      ],
      bullets: [
        "AA for calculus-heavy university routes",
        "AI for statistics-led and applied routes",
        "Check university entry requirements first",
        "Exploration coaching is guidance, not authorship",
      ],
    },
    {
      heading: "What are the Core and Extended choices for an IGCSE student in Lumding?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in many subjects; Edexcel offers Foundation and Higher. The tier decides the top grade available, and it is a decision best made on the evidence of how a student performs on timed practice papers, not on hope.",
        "Students intending to take IB Maths or a science at Higher Level later should aim for Extended tiers. Students who find the pace hard in some subjects may do better on Core and put the saved effort into another course.",
        "Hindi is available at IGCSE as a first or second language. Combined with English, it makes a sensible pair for students from Hindi-speaking homes; students from Assamese or Bengali homes may find Hindi as a second language a comfortable scoring subject.",
        "Before the first lesson we ask for the syllabus code, the tier and the series so that the practice papers and mark schemes line up.",
      ],
      bullets: [
        "Core and Foundation cap the top grade",
        "Extended and Higher open the full range",
        "Choose the tier from timed mock evidence",
        "Hindi offers dependable marks for many Lumding students",
      ],
    },
  ],

  process: [
    { title: "Send the brief", description: "Tell us the programme or board, the subject, level, exam session and where the child studies. A WhatsApp message is enough." },
    { title: "Receive a shortlist", description: "We propose a tutor who has taught that exact syllabus lately, with a short note on why they suit your child." },
    { title: "Take a free lesson", description: "The student attends a real session on a topic they are currently studying, with no payment due." },
    { title: "Get the rate in writing", description: "If you want to continue, we send the weekly rate and timetable in writing before anything is booked." },
    { title: "Begin and review", description: "Weekly lessons start, a written note follows each, and progress is reviewed every few weeks with a free tutor change if needed." },
  ],

  whyPoints: [
    { title: "Right tutor for the course", description: "We match by exact syllabus, level and session, not by a general subject label." },
    { title: "No overpromising", description: "Tutors do not visit homes in Lumding, lessons are online and we say that up front." },
    { title: "A note after each class", description: "Parents see what was covered, where marks slipped and what is next." },
    { title: "Trial before payment", description: "The first lesson is free so that the student can judge the teaching." },
    { title: "Change without friction", description: "If the fit is poor, we switch tutors with no argument and no fee." },
    { title: "Integrity first", description: "We coach and mark but never write IAs, the Extended Essay, TOK essays or coursework." },
  ],

  faqs: [
    { question: "Are there IB tutors in Lumding?", answer: "Not based in the town. IB Gram tutors teach online from elsewhere in India, and a Lumding student joins by video from home. We choose the tutor by programme, subject, level and exam session, so the expertise is local to the syllabus, not to the postcode." },
    { question: "Can a tutor come to my house in Lumding for IGCSE home tuition?", answer: "No. In-person home tuition is available only in Gurugram and parts of Delhi NCR. In Lumding, home tuition means private one-to-one lessons taken at home, online, with no tutor travelling to you." },
    { question: "How much does IB or IGCSE tuition cost in Lumding?", answer: "It depends on the course level, subject, lesson length, frequency and the tutor's experience. We do not publish prices; you receive a written quote after the free trial lesson and before you commit to anything." },
    { question: "Is there an IB school in Lumding or Hojai district?", answer: "We cannot confirm one. Schools we know of in the area follow SEBA, the Assam board or CBSE. Families seeking IB usually look at an online school or a school in Kolkata or Delhi NCR." },
    { question: "My child studies in an Assam board school. Can they switch to IGCSE?", answer: "Yes, though it normally means enrolling with a school or exam centre that offers IGCSE. A tutor can help bridge the gap in English, Maths and science during the switch, so the first term is not lost." },
    { question: "Which subjects do Lumding families ask about most?", answer: "Maths, Physics, Chemistry and English are the most requested, followed by Biology, Economics and Computer Science. Railway and government families often ask for Maths and science first." },
    { question: "Do you teach IB MYP and PYP as well as DP?", answer: "Yes. MYP lessons build criterion-based writing and Personal Project planning, and PYP lessons use short, regular sessions on reading, number and the Exhibition." },
    { question: "What internet speed do we need?", answer: "A steady connection that can carry video, which usually means a few megabits a second each way. If mobile data is the only option, a hotspot with a strong signal near the window often works." },
    { question: "What happens if the rain cuts the connection?", answer: "We agree a backup before lessons start: continue by phone audio, move to a spare slot that week or send a recorded summary. Missed lessons caused by outages are rescheduled." },
    { question: "Will the tutor write my child's Internal Assessment?", answer: "No. Tutors coach, giving feedback on structure and criteria, but the work submitted must be the student's own. IB Gram does not write IAs, Extended Essays, TOK essays or coursework." },
    { question: "Which exam sessions do you prepare for?", answer: "IB Diploma in May and November, Cambridge IGCSE in May-June and October-November and Pearson Edexcel IGCSE in January and May-June. We work backwards from the date to place mocks and revision blocks." },
    { question: "Can my child sit IGCSE privately from Lumding?", answer: "Private entry is possible through a registered centre in some cities, usually requiring travel for practical or written papers. The centre handles entry; we handle preparation. We can help you understand the steps." },
    { question: "When should we start?", answer: "At the beginning of the course if possible: Class 11 for the Diploma and Grade 9 for IGCSE. Starting later is fine if lessons focus on the highest-value topics and past papers." },
    { question: "What if my child does not like the tutor?", answer: "Tell us and we find another. We review progress regularly, and there is no contract that stops you pausing or changing tutor." },
    { question: "Can lessons avoid Bihu and Durga Puja?", answer: "Yes. Tell us your dates and we shift or skip sessions, and plan exam blocks so they do not clash with family festivals." },
    { question: "Are you connected to any school or exam board?", answer: "No. IB Gram is independent and is not affiliated with the IB, Cambridge, Pearson or any school named on this page." },
    { question: "How do we start?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the programme, subject, level and exam date. We reply with a tutor suggestion and trial times." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "The IB Gram homepage." },
    { label: "IB tutoring across India", href: "/india/", description: "How IB and IGCSE tutoring works in cities across the country." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The only place where tutors also visit homes." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subjects, IAs, TOK and the Extended Essay." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers and subjects explained." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA versus AI explained." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Book a free trial." },
    { label: "IB and IGCSE tutors in Guwahati", href: "/guwahati/", description: "Tutoring for students in Assam's largest city." },
    { label: "IB and IGCSE tutors in Kolkata", href: "/kolkata/", description: "Tutoring for families who look to Kolkata for school." },
  ],

  closingHeading: "Start an IB or IGCSE course with a tutor from Lumding",
  closingBody:
    "Tell us the programme, subject and level, and where your child studies now, whether that is an online school, a school in another city or a plan for a coming transfer. We will answer with a shortlisted tutor and trial times that fit a Lumding evening, free and with no obligation. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
  tutorsIntro:
    "These tutors teach from other Indian cities and meet Lumding students by video. None visits homes in Lumding; that exists only in Gurugram and parts of Delhi NCR. Each has taught the syllabus listed beside their name.",
};
