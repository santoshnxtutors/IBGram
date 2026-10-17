import type { CitySeoPage } from "../types";

/**
 * /chirala/ - IB and IGCSE tutoring page for Chirala, Bapatla district, Andhra Pradesh. Delivery is
 * online one-to-one only (homeTuition false). No IB or Cambridge/Edexcel school in Chirala could be
 * confirmed, so stripSchools is empty and the clusters point honestly to Vijayawada, Hyderabad and
 * Chennai using names already verified on neighbouring city pages. Rendered with the shared
 * CountryLanding layout used by /gurgaon/.
 */
export const chirala: CitySeoPage = {
  slug: "chirala",
  countryName: "Chirala",
  countryNameLong: "Chirala, Andhra Pradesh",
  demonym: "Chirala",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are fixed around the evening power cuts and cyclone-season disruptions on the Bapatla coast, the Sankranti fortnight and whatever hours your child's own school leaves free",
  lastUpdated: "2026-09-21",
  geo: { latitude: 15.8246, longitude: 80.3521 },
  wikipedia: "https://en.wikipedia.org/wiki/Chirala",
  alternateNames: ["Chirala Bapatla", "Chinna Bombay", "Cheerala"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Chirala | Online Private Tuition",
  metaDescription:
    "Chirala families can study IB and IGCSE with live online one-to-one tutors matched to the syllabus, on IST evenings, with a free trial lesson to begin.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Chirala",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR CHIRALA AND BAPATLA DISTRICT",
  heroSubtitle:
    "Looking for home tuition in Chirala for an IB or IGCSE student? Nobody here can send a tutor to your door, because IB Gram teaches Chirala children online: a private, one-to-one lesson taken at home on a laptop, with a specialist who has taught the same subject and level before. The coast town is a handloom and fishing centre with a proud municipal history, and its IB and Cambridge students usually study through a school elsewhere or an online programme.",
  primaryKeyword: "IB and IGCSE tutors in Chirala",
  imageAltText: "A Chirala student at a desk near the window working through an IGCSE Physics paper with an online tutor on a laptop",
  secondaryKeywords: [
    "IB tutor Chirala",
    "IGCSE tutor Chirala",
    "IB home tuition Chirala",
    "IGCSE home tuition Chirala",
    "IB private tuition Chirala",
    "IB Maths tutor Chirala",
    "IGCSE Maths tutor Chirala",
    "IB Physics tutor Chirala",
    "IB Chemistry tutor Chirala",
    "IB Biology tutor Chirala",
    "IB DP tutor Chirala",
    "IB MYP tutor Chirala",
    "IB PYP tutor Chirala",
    "IGCSE online tuition Chirala",
    "IB tutor Jandrapet Chirala",
    "IGCSE tutor Vetapalem",
    "IB tutor Bapatla district",
    "online IB tutor Chirala Andhra Pradesh",
    "IB and IGCSE tutors in Chirala",
  ],

  heroTrustPoints: [
    "Online private lessons for Chirala students, with no tutor travelling to a home here",
    "A tutor chosen for your child's exact subject, level and exam session",
    "Written note after each lesson so parents in Chirala can follow progress",
    "Free trial lesson and a tutor change if the first match is not right",
    "Rates quoted in writing before anything is booked",
  ],
  heroStats: [
    { value: "IST", label: "Evening slots around Chirala school hours" },
    { value: "PYP to DP", label: "IB programmes covered" },
    { value: "Free trial", label: "First lesson at no charge" },
    { value: "May & Nov", label: "Exam sessions we plan towards" },
  ],

  intro: {
    heading: "Why Chirala families look beyond the town for IB and IGCSE support",
    paragraphs: [
      "Chirala is a municipality with a long memory. It has been a civic unit since 1871, it gave its name to the Chirala-Perala protest of 1919, and its weavers turned the town into a handloom name across the Telugu country. Schooling follows that practical spirit. Most children go to Andhra Pradesh state board schools or a CBSE school, and families think first of Intermediate colleges and EAPCET coaching rather than international curricula.",
      "That is what makes IB and IGCSE here a special case. When a Chirala student does take up the International Baccalaureate or a Cambridge or Pearson Edexcel IGCSE, it is usually because the family has a link to Hyderabad, Chennai or the Gulf, a job that moves, or a plan to study abroad. The school is often somewhere else, or the student follows an online programme from home, and the town itself has no classroom that teaches the syllabus.",
      "IB Gram steps into exactly that gap. The service is independent, run by tutors based in India, and it works in Indian Standard Time. We find a tutor who has taught the student's precise subject, say IB Chemistry HL or IGCSE Additional Mathematics, and run the lessons live on video with a shared whiteboard. Parents get a short written note after every session, and a free trial lesson comes before any commitment.",
    ],
  },

  programmesIntro:
    "Each IB programme asks something different of a student and a tutor. Here is how IB Gram approaches all four for a child who is studying in or from Chirala.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Inquiry-based learning built around units of inquiry. Our tutors help primary children with number sense, reading fluency and the habit of asking why, without turning homework into rote drill.",
      countryNote:
        "A PYP child in Chirala is unusual, since no local primary school runs it. Families typically arrive with the programme from a previous posting and want a steady online tutor so the child does not fall behind in the transition.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Concept-driven subjects, global contexts and criterion-based assessment. Tutors explain what each criterion descriptor asks for and how to structure a strong response, and they coach eAssessment preparation in Year 5.",
      countryNote:
        "For MYP students from Chirala, the real pressure arrives in Class 9 and 10, when personal project planning and subject criteria begin to overlap. A weekly online slot keeps that manageable alongside a school timetable.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard Level, plus TOK, the Extended Essay and CAS. Tutors teach content, past-paper technique and command terms, and they never write assessed coursework.",
      countryNote:
        "DP students from the Chirala and Bapatla side are often the only one in their circle following it, which makes a subject specialist and a regular exam-style rhythm especially valuable through the two years.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three DP courses alongside a career-related study and the reflective project. Tutors support the academic DP courses and help a student organise time between them and the practical strand.",
      countryNote:
        "The CP is rare across coastal Andhra, so most tuition requests are for the DP courses inside it, usually Business Management, English or a language.",
    },
  ],

  subjectsIntro:
    "These are the IB subjects Chirala students most often ask for. Each is matched to a tutor who has taught that subject at that level before, and the list below is not exhaustive.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions and proof-style thinking. Favoured by students aiming at engineering or pure science, with paper 1 technique a constant theme." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and technology. A good fit for students heading to economics, business or life sciences." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics through quantum and nuclear physics, plus the option topic. Numerical fluency and data-based questions get the most attention." },
    { name: "Chemistry", levels: "SL and HL", description: "Stoichiometry, energetics, organic mechanisms and equilibrium, with practical-skills questions treated as their own topic." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology to ecology, with extended-response structure and data analysis practised from the first term." },
    { name: "Economics", levels: "SL and HL", description: "Diagram discipline, evaluation language and real-world application for Paper 1 and Paper 2." },
    { name: "Business Management", levels: "SL and HL", description: "Case-study reading, quantitative tools and the structure of Paper 2 answers." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, programming fluency and the structure of Paper 1 and Paper 2 questions." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Close reading, paper 1 analysis and the individual oral, coached as craft rather than written for the student." },
    { name: "English B", levels: "SL and HL", description: "Language acquisition for students who did not grow up with English at home, balancing the four papers." },
    { name: "Hindi B", levels: "SL and HL", description: "Language acquisition support in Hindi for students who need it as a second or third language." },
    { name: "Telugu A and Telugu B", levels: "SL", description: "Support for students who take their home language in the IB and want a tutor who understands the assessment format." },
    { name: "Psychology", levels: "SL and HL", description: "Research methods, the approaches to behaviour and the structure of short-answer and essay questions." },
    { name: "Theory of Knowledge", levels: "Core", description: "Coaching on knowledge questions and the exhibition, never a written essay on the student's behalf." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE are taught as two separate syllabuses, so we confirm the board and the paper code before the first lesson. These are the subjects Chirala families request.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core and Extended", description: "Topic coverage and paper technique, with Extended students pushed into algebra and trigonometry early." },
    { name: "Additional Mathematics", levels: "Cambridge", description: "A step up for strong mathematicians aiming at A Level or the IB Diploma later." },
    { name: "Physics", levels: "Core and Extended", description: "Formula recall, practical-skills questions and graph interpretation, in Cambridge 0625 or Edexcel 4PH1 style." },
    { name: "Chemistry", levels: "Core and Extended", description: "Equation balancing, the periodic table, organic basics and qualitative analysis." },
    { name: "Biology", levels: "Core and Extended", description: "Definitions, diagrams and six-mark explanations, with practical comparison skills added." },
    { name: "English First Language", levels: "Cambridge and Edexcel", description: "Directed writing, composition and summary work, with careful feedback on a student's own drafts." },
    { name: "English as a Second Language", levels: "Cambridge", description: "Reading, writing and listening strategies for students whose home language is Telugu, Hindi or Urdu." },
    { name: "Computer Science", levels: "Cambridge", description: "Pseudocode, logic and programming practice for the two theory and problem-solving papers." },
    { name: "Economics", levels: "Cambridge and Edexcel", description: "Data response and structured questions with a focus on precise definitions." },
    { name: "Business Studies", levels: "Cambridge", description: "Case-study based questions and the quantitative sections on cost and profit." },
    { name: "Hindi as a Second Language", levels: "Cambridge", description: "Writing and comprehension help for students in Hindi-speaking or bilingual homes." },
  ],

  regionsTitle: "Areas of Chirala and Bapatla district we teach",
  regionsIntro:
    "Every lesson is online, so your tutor never needs to find a particular colony. Knowing where families actually live still helps us pick slots around school buses, the railway gate at the station and the coast road.",
  regions: [
    { name: "Jandrapet", note: "A busy residential and commercial stretch close to the centre. School vans leave early, so most online sessions here run after 5:30 pm." },
    { name: "Ramakrishnapuram", note: "Mixed residential area where many households have a parent working in Ongole or Guntur. Weekend slots suit families who commute on weekdays." },
    { name: "Devangapuri", note: "Long associated with weavers' households. Evening study sits alongside loom hours, and slots are kept short and regular." },
    { name: "Station Road", note: "Close to the Chirala railway station on the Howrah-Chennai line. Families with a parent on the rail or travelling to Vijayawada often prefer late evening sessions." },
    { name: "Perala", note: "The neighbouring area that shares Chirala's protest history. Students here often rely on buses into town, so a fixed post-school slot works best." },
    { name: "Vetapalem", note: "A separate town a few kilometres away whose students frequently join Chirala coaching. Online lessons remove the road time entirely." },
    { name: "Vodarevu", note: "Beach village on the Bay of Bengal, popular on Sundays. Cyclone warnings in October and November can shut schools, so we keep a flexible make-up slot." },
    { name: "Ramapuram", note: "Coastal settlement with another popular beach. Mobile data can dip in bad weather, so we recommend a backup hotspot for exam-season sessions." },
    { name: "Motupalli", note: "A coastal village on the southern side whose students need a reliable evening routine because transport home after dark is limited." },
    { name: "Bapatla", note: "The district headquarters, a short ride away, home to an agricultural college and an engineering college. Some families live here and have a child at school in Chirala." },
  ],

  schoolClusters: [
    {
      city: "Chirala and Bapatla district",
      note: "No IB World School or Cambridge centre in Chirala or Bapatla district could be confirmed, so nothing is listed here. Local schools follow the Andhra Pradesh state board, CBSE or both.",
      schools: [],
    },
    {
      city: "Nearby: Vijayawada",
      note: "The nearest confirmed IB school on the coastal corridor, roughly a hundred kilometres up the railway line, relevant to families considering boarding or relocation.",
      schools: ["Bloomingdale International School, Penamaluru, Vijayawada"],
    },
    {
      city: "Nearby: Hyderabad",
      note: "The larger choice of IB and Cambridge schools, and the usual move for families with a Telangana link. Distances are considerable, so most Chirala students study online instead.",
      schools: ["Chirec International School", "Oakridge International School, Hyderabad"],
    },
    {
      city: "Nearby: Chennai",
      note: "Reachable by the Chennai-bound train and a common choice for families with southern links.",
      schools: ["American International School Chennai"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring service and has no affiliation with the IBO, Cambridge, Pearson or any school named here. Schools are mentioned only to show the wider regional picture. Confirm admissions and the programmes offered directly with each school.",

  modesIntro:
    "Tutors do not visit homes in Chirala, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. Chirala families choose among three online formats instead.",
  modes: [
    {
      title: "Weekly online one-to-one",
      description:
        "A fixed slot each week with one tutor for one subject, taken on a laptop at the family's own desk at home.",
      bullets: [
        "Same tutor every week, so context builds",
        "Shared whiteboard and screen-shared past papers",
        "Written note after every lesson",
        "Reschedule with notice when a cyclone or school event interferes",
      ],
    },
    {
      title: "Exam-season intensive",
      description:
        "Two or three slots a week for a subject during the months before the May or November series.",
      bullets: [
        "Timed past-paper practice with feedback",
        "Command-term and mark-scheme work",
        "Short revision plans for the coming fortnight",
        "Scaled back after the last paper",
      ],
    },
    {
      title: "Catch-up or gap-filling block",
      description:
        "A short run of lessons for a student who joined the IB or IGCSE late, or who lost weeks to illness or a move.",
      bullets: [
        "Diagnostic first session to find the gap",
        "Targeted topics rather than a full syllabus restart",
        "Progress checked against the school's tests",
        "Can move to a weekly slot afterwards",
      ],
    },
  ],

  sections: [
    {
      heading: "Are there IB and IGCSE schools in Chirala, and who takes them?",
      paragraphs: [
        "No school in Chirala could be confirmed as an IB World School or a Cambridge or Edexcel centre. The nearest confirmed IB option that this page can name is in Vijayawada, about a hundred kilometres to the north along the coastal railway, with larger groups of international schools in Hyderabad and Chennai. Chirala families who want the curriculum therefore choose between boarding, relocation and studying online from home.",
        "Who takes it up? From what parents tell us, the families tend to fall into a few groups. Some have a parent working in the Gulf or on a posting in a metro, and plan for a child to apply abroad. Others run businesses around textiles, aquaculture or agriculture and want a foreign-ready qualification for a child who will leave for university. A smaller group are returnees whose children are mid-programme.",
        "Chirala is also close enough to Ongole and Guntur that some students attend a day school there and continue with the IB or IGCSE subjects privately at home. For those students the tutor fills a gap that no classroom nearby can.",
        "We do not claim to know every household, and we do not name schools we cannot confirm. What we can do is teach the syllabus well online, in IST, to a student who has chosen an international route.",
      ],
    },
    {
      heading: "How does the Andhra Pradesh board compare with CBSE, IB and IGCSE?",
      paragraphs: [
        "The short answer is that they measure different things. The Andhra Pradesh board leans on recall of the textbook, CBSE adds a national framework, while the IB and IGCSE reward explanation, data handling and application. A Chirala student who moves across needs a bridge, not a repeat of Class 9.",
        "The table below compares the main routes that Chirala families see. It is a general orientation, and a student's own school remains the authority on its syllabus and assessment calendar.",
        "Most students who switch mid-stream find the writing volume the hardest part. IB Chemistry asks for paragraph explanations, IGCSE Biology expects six-mark answers, and both expect graphs and data tables to be handled fluently. Tutors in our network have seen the same transition many times and plan the first month around it.",
        "If your child is weighing the IB Diploma against Intermediate plus EAPCET, the questions to ask are about the destination: a university abroad, a place through CUET-UG, or a state engineering college. Each path rewards a different preparation, and we are happy to talk it through before any booking.",
      ],
      table: {
        caption: "How the main school routes differ for a Chirala student",
        columns: ["Route", "Assessment style", "Typical Chirala context", "Main exit path"],
        rows: [
          ["Andhra Pradesh state board and Intermediate", "Board exams with textbook recall and long answers", "Most local government and private schools; Telugu medium common", "EAPCET, state colleges, NEET"],
          ["CBSE", "National board exams with case-based questions", "A smaller number of private schools in and around town", "JEE Main, NEET, CUET-UG"],
          ["IGCSE (Cambridge or Edexcel)", "Externally marked papers with structured and data questions", "Taken online or via a school in another city", "IB Diploma, A Level, overseas schools"],
          ["IB Diploma", "Six subjects plus TOK, EE and CAS", "Usually studied away, or from home with private support", "Universities abroad, Indian universities via AIU equivalence"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition in Chirala cost, and what drives the rate?",
      paragraphs: [
        "IB Gram does not publish prices, and we quote every rate in writing before booking. The rate depends on factors you can understand in advance rather than on a flat card, which is why two families in the same lane can be quoted differently.",
        "The first factor is the level: an IB Physics HL or Mathematics AA HL tutor with years of Diploma experience costs more than a tutor for IGCSE Core English. The second is the programme and subject, since rarer combinations such as a language B at HL or Computer Science HL take a narrower pool of teachers.",
        "The third is lesson frequency and length. A weekly 60-minute slot costs less per month than three slots in exam season. Fourth is tutor experience: someone who has examined or taught many sessions is priced differently from someone newer to the syllabus.",
        "Because nothing is travelling, the price carries no transport element. A Chirala family does not pay for travel time, and the tutor does not lose an hour on the road. The free trial lesson exists so you can judge fit before paying anything, and a tutor change is possible if the match is not right.",
      ],
      bullets: [
        "Level (HL, SL, Core or Extended) and the specific subject",
        "Programme: PYP, MYP, DP, CP or IGCSE",
        "Number and length of sessions per week",
        "Tutor experience with the exact syllabus",
        "Timing: exam-season blocks versus steady weekly lessons",
      ],
    },
    {
      heading: "Online home tuition, coaching centres, private tutors or self-study: which suits Chirala?",
      paragraphs: [
        "Chirala has busy tuition lanes for state board and entrance-exam preparation, but the IB and IGCSE are far more specialised. A centre that teaches Intermediate Maths well may not know how an IB Internal Assessment is scored or what a Cambridge 0580 Extended paper looks like.",
        "For a student who lives here and studies an international syllabus, the real choices are four. You can rely on the school alone, try a local private tutor with a general maths or science background, join an online batch, or work one-to-one with a subject specialist over video. The comparison below sets them side by side.",
        "Self-study works for disciplined students who already have good notes and past papers, though it gives no feedback on written answers, which is where marks are usually lost. A general local tutor helps with content but may not recognise IB command terms or the IGCSE mark schemes.",
        "Online one-to-one is the option IB Gram offers. It gives the student the tutor's full attention, records progress in writing, and avoids travel. Its honest limit is that it needs steady internet and a quiet corner, which we discuss with each family before a first lesson.",
      ],
      table: {
        caption: "Ways a Chirala student can get IB or IGCSE help",
        columns: ["Option", "Strength", "Limit", "Fit for IB or IGCSE"],
        rows: [
          ["Online one-to-one with IB Gram", "Subject specialist, flexible slots, written notes", "Needs stable internet and a quiet space", "Strong, matched to level and syllabus"],
          ["Local coaching centre", "Structure and peer energy", "Built for state board and entrance exams, not international syllabuses", "Weak for IB and IGCSE specifics"],
          ["General private tutor nearby", "Face-to-face convenience", "May not know IB command terms or IGCSE mark schemes", "Moderate for basic content only"],
          ["Self-study with past papers", "Low cost, student-paced", "No feedback on written answers", "Good supplement, weak on its own"],
        ],
      },
    },
    {
      heading: "What is the exam and school year like in Chirala?",
      paragraphs: [
        "A Chirala student lives inside three calendars at once. The school's own calendar, the IB or IGCSE exam series, and the rhythm of the coast all pull on time. IB exams run in May and November, Cambridge and Edexcel IGCSE sit mainly in May and June and October and November, and a student's school decides which session applies.",
        "The local rhythm adds texture. Sankranti brings a long holiday, with kite-flying and festival visits. The hot months of April and May fall just before or during exam time, and the Bay of Bengal's cyclone season in October and November can close schools and cut power for a day or two.",
        "We build buffer into the plan. Mock exams are scheduled early enough to allow for a missed week, and weekly lessons use a shared set of notes so a student can pick up again after a power cut without losing the thread.",
        "The table lays out a typical year. Dates differ by school and session, so treat it as a planning aid rather than a timetable.",
      ],
      table: {
        caption: "A typical IB and IGCSE year for a Chirala student",
        columns: ["Period", "What is happening", "Local effect", "What we usually do"],
        rows: [
          ["June to August", "New academic year, first units, Year 12 starts Diploma courses", "Monsoon showers, some school closures", "Set weekly slots, diagnose gaps, agree a plan"],
          ["September to October", "Term tests and first mocks for Year 13", "Dasara holidays and the start of cyclone season", "Past-paper practice, buffer weeks built in"],
          ["November to December", "IB November series, IGCSE October and November papers", "Cyclone warnings on the coast", "Flexible make-up slots, backup hotspot advice"],
          ["January to February", "Mock exams and Internal Assessment deadlines", "Sankranti in mid-January", "Intensive blocks before and after the festival"],
          ["March to May", "Final revision and the May series", "Rising heat, evening power cuts", "Early morning or late evening sessions, timed papers"],
        ],
      },
    },
    {
      heading: "Where do Chirala students go after the IB or IGCSE?",
      paragraphs: [
        "The IB Diploma is recognised by the Association of Indian Universities as equivalent to Class 12, so a Diploma holder from Chirala can apply to Indian universities. CUET-UG accepts scores from all boards, and IB students can sit it for central universities, though they must check each university's subject requirements.",
        "For JEE Main and NEET, eligibility rules should be checked on the current information bulletins. IB and IGCSE students usually need the right subject combination and equivalence documents, which the school or board can supply. A student targeting medicine or engineering in India should ask early rather than late.",
        "Many Chirala students aim abroad: the UK, the United States, Canada, Australia and Singapore are the common choices. IB Diploma points and IGCSE results feed into those applications, and the Extended Essay and TOK are valued for the writing habits they build.",
        "Some stay in Andhra Pradesh and apply to private universities in Vijayawada, Guntur, Hyderabad or Chennai. Whatever the destination, the tutor's role is to lift the predicted grades the student's own school reports, not to choose the university for them.",
      ],
    },
    {
      heading: "How do IB Mathematics and the sciences work for a Chirala student?",
      paragraphs: [
        "IB Mathematics comes in two courses. Analysis and Approaches suits students who like algebra, calculus and proof, while Applications and Interpretation leans on statistics and technology. Each has SL and HL versions, and the choice affects which university courses stay open.",
        "A student from the Andhra Pradesh board is usually strong at calculation but less used to writing out reasoning, which the Mathematics Internal Assessment and Paper 3 of HL demand. We spend early lessons on method marks, command terms such as show that and hence, and calculator use where allowed.",
        "IB Physics, Chemistry and Biology share the same rhythm: content in the first year, practical and data work throughout, and an extended response in each paper. Students from entrance-exam backgrounds tend to be fast with numbers but unused to six-mark explanations, so we practise writing answers aloud before writing them down.",
        "Practical work is a real worry for students studying remotely. We coach the skills of planning, data handling and evaluation, using the student's own lab records and the school's practical rules, but we do not do or write the assessed Internal Assessment.",
      ],
      bullets: [
        "AA HL: calculus, vectors, complex numbers, proof",
        "AI HL: statistical inference, modelling, technology",
        "Physics: mechanics, waves, fields, nuclear and quantum",
        "Chemistry: organic mechanisms, equilibrium, energetics",
        "Biology: genetics, ecology, physiology and data questions",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Chirala student choose?",
      paragraphs: [
        "Core papers cap the highest grade a student can reach, while Extended papers open all grades. For most students aiming at the IB Diploma or A Level later, Extended is the honest choice in Mathematics and the sciences, because those courses assume it.",
        "Subject choice depends on the destination. A student who wants engineering needs Mathematics, Physics and Chemistry in the strongest form the school allows, while a future commerce student might add Business Studies and Economics. Languages such as Hindi or Telugu can add variety, though a second language may not be offered at every school.",
        "Cambridge and Edexcel differ in layout. Cambridge papers often include more structured questions and practical-skill papers, while Edexcel papers can be more linear in style. We check the student's syllabus code at the first lesson and work from the actual past papers, not from a generic textbook.",
        "Chirala students starting IGCSE at Class 9 or 10 have two years, so a weekly online lesson in each of two or three subjects is often enough, with extra slots in the months before the paper. Late starters can follow the catch-up block in the formats section above.",
      ],
    },
  ],

  process: [
    { title: "Message us with the syllabus", description: "Send the board, programme, subject, level and exam session on WhatsApp or by email, so we start from facts." },
    { title: "Receive a matched tutor profile", description: "We suggest a tutor who has taught that precise course, with their background and available evenings shown clearly." },
    { title: "Take the free trial lesson", description: "A live online session on a real topic from your child's own notes, so you can judge fit before any payment." },
    { title: "Agree the rate in writing", description: "The rate, length and frequency are confirmed in writing before the first paid lesson, with no surprises." },
    { title: "Learn weekly with written notes", description: "Lessons run each week with a short note after every session, and a tutor change is always possible if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Subject specialists, not generalists", description: "We match the tutor to the exact level, say IB Biology SL or IGCSE Edexcel Chemistry, rather than offering someone who teaches everything." },
    { title: "Evening slots in Indian time", description: "Tutors are based in India and teach in IST, so a lesson never lands at midnight and the school day stays intact." },
    { title: "Honest about what we are", description: "We tell Chirala families plainly that lessons are online, and that in-person visits run only in Gurugram and parts of Delhi NCR." },
    { title: "Coaching, never ghost-writing", description: "Tutors explain and give feedback, but they never write IAs, Extended Essays, TOK essays or coursework for a student." },
    { title: "A record parents can read", description: "A written note after each session lets busy parents in Chirala see what was covered and what comes next." },
    { title: "Low-risk start", description: "A free trial, a written rate and the right to change tutor keep the first decision small." },
  ],

  tutorsIntro:
    "These tutors are based in India and teach online in IST. The profiles show the subjects and levels each person has taught, so a Chirala family can see who fits before a trial lesson.",

  faqs: [
    {
      question: "Are there IB and IGCSE tutors in Chirala for home tuition?",
      answer: "Yes, but online rather than in person. IB Gram teaches Chirala students live over video at home. Tutors do not visit homes in Chirala, because in-person home tuition runs only in Gurugram and parts of Delhi NCR. The lessons are private and one-to-one, and the tutor is matched to the student's subject and level. A free trial lesson comes first, so the family can see how the online format feels before deciding anything.",
    },
    {
      question: "Is there an IB or IGCSE school in Chirala?",
      answer: "None that we could confirm. We checked the usual directories and found no IB World School or Cambridge or Edexcel centre listed in Chirala. The nearest confirmed IB school on this page is in Vijayawada, with larger groups in Hyderabad and Chennai. If you know of a local school that offers either curriculum, tell us and we will check it. Until then the practical choices are boarding, relocation or online study from home.",
    },
    {
      question: "How much does IB or IGCSE tuition cost in Chirala?",
      answer: "We do not publish prices, and every rate is quoted in writing before booking. The rate depends on the programme, the level such as HL or Extended, the subject, how many lessons you take each week, and the tutor's experience. There is no travel cost because lessons are online. Message us on WhatsApp with the subject and level and we will send a written quote, and the first trial lesson carries no charge.",
    },
    {
      question: "Can IB Gram help with my child's IA, Extended Essay or TOK essay?",
      answer: "Only as a coach. Tutors explain what the criteria ask for, discuss ideas, and give feedback on a student's own drafts. They never write or rewrite an Internal Assessment, Extended Essay, TOK essay or any assessed coursework. That protects the student from academic misconduct rules, and it keeps the work honest. If a student is stuck on structure or evidence, a tutor can help them find a way forward.",
    },
    {
      question: "Which IGCSE boards do you cover for Chirala students?",
      answer: "Both Cambridge and Pearson Edexcel. The two boards have different papers and mark schemes, so we confirm the board and syllabus code at the start, for example Cambridge 0580 Mathematics or Edexcel 4MA1. A Chirala student then works from past papers of that exact board. If you are unsure which board your school uses, check the exam entry or the textbook cover and send us a photo.",
    },
    {
      question: "What time are lessons for students in Chirala?",
      answer: "Lessons run in Indian Standard Time, usually between 5 pm and 9 pm on weekdays and through the day at weekends. Because tutors are in India, there is no late-night slot. During cyclone season or when a power cut is expected, we agree a make-up slot in advance. During exam months, sessions can move to early mornings. The schedule is always set around the student's school hours.",
    },
    {
      question: "What internet speed and equipment do we need?",
      answer: "A laptop or tablet, a working webcam and microphone, and a stable connection that can hold a video call. A phone hotspot is a useful backup on the coast, where weather can affect mobile data. We use a shared whiteboard and screen sharing for past papers, so a larger screen helps. Headphones reduce background noise. If the connection drops, the lesson resumes or is rescheduled at no penalty.",
    },
    {
      question: "My child studies the Andhra Pradesh board. Can the IB or IGCSE still work?",
      answer: "Yes, with a bridge. A student from the state board is often strong at calculation and recall but less used to structured explanation and data questions. A tutor can build that in over the first month, focusing on command terms, diagram habits and written answers. If the student is also preparing for EAPCET, we can plan the weekly load so the two tracks do not collide.",
    },
    {
      question: "How do JEE, NEET and CUET-UG work for IB and IGCSE students?",
      answer: "Eligibility depends on subject combination and equivalence, and the rules change, so always check the current bulletin. The IB Diploma is treated as equivalent to Class 12 by the Association of Indian Universities, and CUET-UG accepts students from all boards. For JEE Main and NEET, students should confirm the subject and mark requirements. Tutors teach the subject content and do not give admission guarantees.",
    },
    {
      question: "Do you offer IB PYP and MYP tutoring in Chirala?",
      answer: "Yes. PYP tutoring supports primary children in reading, number sense and inquiry projects, while MYP tutoring supports Class 6 to 10 in subjects such as Mathematics, Sciences, English and Individuals and Societies. Because no school in Chirala runs these programmes, most families come from a previous posting or follow an online school. We match a tutor who understands the programme's criteria, not only the subject content.",
    },
    {
      question: "Can my child switch tutor if the fit is not right?",
      answer: "Yes, at any point. A tutor change costs nothing extra, and you do not need to justify it in detail. Some students learn better from a slower pace, others from a sharper one, and a first match is not always perfect. Tell us what felt off, for example pace or style, and we will propose another tutor. The free trial lesson exists to reduce the chance of needing a change.",
    },
    {
      question: "Do tutors visit homes in Chirala or Bapatla?",
      answer: "No. IB Gram does not send tutors to homes in Chirala, Bapatla or anywhere in Andhra Pradesh. Home visits run only in Gurugram and parts of Delhi NCR. In Chirala, home tuition means online private lessons, taken on a laptop at home with a live tutor. We say this clearly so there is no confusion, and it is why we keep our tutors matched to the subject rather than to a street.",
    },
    {
      question: "How does the free trial lesson work?",
      answer: "It is a live online session, usually 30 to 45 minutes, on a real topic from your child's syllabus. The tutor asks about the student's current work, explains one idea, and sets a short task. You can join at the start or end. There is no payment and no commitment. Afterwards you receive a short written note and, if you wish to continue, a written rate before booking.",
    },
    {
      question: "What can we do if a cyclone or power cut interrupts a lesson?",
      answer: "We reschedule without penalty. Chirala's coast faces cyclone warnings in October and November, and evening power cuts can occur in summer. Tell us as early as you can, and the tutor offers another slot that week. The shared notes from each lesson mean the student does not lose the thread, and in exam season we add a short recovery session to cover missed material.",
    },
    {
      question: "How do we get started?",
      answer: "Message us on WhatsApp at +91 7439 368 115 or write to support@ibgram.com with your child's class, programme, subject and exam session. We send back a tutor profile and a trial time, usually within a day. After the trial you receive a written rate, and you can begin weekly lessons if you are happy. The whole first step costs nothing and carries no obligation.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The overview of where IB Gram teaches and how online tuition works for Indian cities." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse the IB subject specialists and read how each programme is taught." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Subject pages for Cambridge and Pearson Edexcel IGCSE." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "Detailed guide to DP courses, core requirements and exam preparation." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criteria, projects and eAssessment preparation for Years 1 to 5." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Support for inquiry learning in the primary years." },
    { label: "IB Mathematics tutors", href: "/courses/ib/mathematics/", description: "AA and AI courses at SL and HL, with paper technique." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of tutors, their subjects and the levels they have taught." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a message or WhatsApp us to arrange the free trial lesson." },
    { label: "IB and IGCSE tutors in Ongole", href: "/ongole/", description: "The page for families in the neighbouring Prakasam district town." },
    { label: "IB and IGCSE tutors in Guntur", href: "/guntur/", description: "A look at how online tuition works for families across the Guntur region." },
    { label: "IB and IGCSE tutors in Vijayawada", href: "/vijayawada/", description: "For families planning around the confirmed IB school in the capital region." },
  ],

  closingHeading: "Start with one free lesson, taught online from Chirala",
  closingBody:
    "If your child in Chirala is studying the IB or an IGCSE, the first step is small: send us the subject, the level and the exam session, and we will propose a tutor and a trial lesson in Indian time. The trial is free, the written rate comes before any booking, and a tutor change is always possible. Message us on WhatsApp at +91 7439 368 115 or write to support@ibgram.com.",
};
