import type { CitySeoPage } from "../types";

/**
 * /sullurpeta/ - IB and IGCSE tutoring page for Sullurpeta (Sullurupeta), Tirupati district, Andhra
 * Pradesh, the gateway town to the Sriharikota space centre. Online one-to-one only (homeTuition
 * false). No IB or Cambridge/Edexcel school in Sullurpeta could be confirmed, so stripSchools is
 * empty; clusters reuse the Chennai and Tirupati names verified on neighbouring city pages.
 */
export const sullurpeta: CitySeoPage = {
  slug: "sullurpeta",
  countryName: "Sullurpeta",
  countryNameLong: "Sullurpeta, Andhra Pradesh",
  demonym: "Sullurpeta",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We plan around rocket-launch days that clog the road to Sriharikota, the northeast monsoon rains and the Tamil New Year and Sankranti breaks that both halves of the town keep",
  lastUpdated: "2026-09-21",
  geo: { latitude: 13.7, longitude: 80.0181 },
  wikipedia: "https://en.wikipedia.org/wiki/Sullurpeta",
  alternateNames: ["Sullurupeta", "Sulurpet", "Sullurupet"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sullurpeta | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Sullurpeta families near Sriharikota: one-to-one home tuition on a laptop, Indian-time slots and a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Sullurpeta",
  heroEyebrow: "ONLINE HOME TUITION FOR IB & IGCSE STUDENTS NEAR SRIHARIKOTA",
  heroSubtitle:
    "Sullurpeta is the town that most people pass on the way to the Sriharikota launch centre, and its children grow up with rockets on the horizon but no IB or IGCSE classroom in town. For home tuition in Sullurpeta that follows an international syllabus, IB Gram teaches online: private, one-to-one lessons on a laptop with a subject specialist, because tutors do not visit homes here.",
  primaryKeyword: "IB and IGCSE tutors in Sullurpeta",
  imageAltText: "A Sullurpeta student working through an IB Physics kinematics question with an online tutor, a launch-vehicle poster on the wall behind",
  secondaryKeywords: [
    "IB tutor Sullurpeta",
    "IGCSE tutor Sullurpeta",
    "IB home tuition Sullurpeta",
    "IGCSE home tuition Sullurpeta",
    "IB private tuition Sullurpeta",
    "IB Maths tutor Sullurpeta",
    "IGCSE Maths tutor Sullurpeta",
    "IB Physics tutor Sullurpeta",
    "IB Chemistry tutor Sullurpeta",
    "IB Biology tutor Sullurpeta",
    "IB DP tutor Sullurpeta",
    "IB MYP tutor Sullurpeta",
    "IB PYP tutor Sullurpeta",
    "IGCSE online tuition Sullurpeta",
    "IB tutor Sullurupeta",
    "IB tutor Sriharikota",
    "IB tutor Tada",
    "IGCSE tutor Tirupati district",
    "IB and IGCSE tutors in Sullurpeta",
  ],

  heroTrustPoints: [
    "Online lessons only for Sullurpeta: nobody from IB Gram visits a home in the town",
    "Tutors selected for your child's programme, subject and level",
    "A short summary after every lesson for parents to read",
    "Complimentary first lesson and a written rate before booking",
    "Tutor swap available if the fit is poor",
  ],
  heroStats: [
    { value: "Online", label: "One-to-one, live, from home" },
    { value: "DP, MYP, PYP", label: "Plus Cambridge and Edexcel IGCSE" },
    { value: "Free trial", label: "Before any rate is agreed" },
    { value: "IST", label: "Indian-time evenings and weekends" },
  ],

  intro: {
    heading: "An IB or IGCSE student growing up beside the space coast",
    paragraphs: [
      "Sullurpeta is a small municipality on the Chennai-Kolkata highway and the main railway line, with the Pulicat lagoon to the east and the space centre at Sriharikota a short drive beyond. People here speak Telugu and Tamil, often in one sentence. The town's identity is tied to its old Chengalamma Parameswari temple, to its market, and more recently to the launches that bring visitors through it.",
      "That setting produces a particular kind of family. Some have a parent working for the space programme or a contractor, some commute into the industrial belt towards Sri City and Chennai, and others are returnees from the Gulf or a metro. A few want an international syllabus for a child who might study engineering abroad, but no school in Sullurpeta offers it that we could verify.",
      "IB Gram exists for that student. A tutor who has taught the same course, for example IB Physics HL or IGCSE Additional Mathematics, meets the child on video, in Indian time, with a shared whiteboard and a written note at the end. The first lesson is free, and any rate is given in writing beforehand.",
    ],
  },

  programmesIntro:
    "IB programmes ask different things at different ages. The notes below explain how we teach each one to a child in or around Sullurpeta.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning organised around big ideas rather than subjects. Tutors use short activities, reading aloud and number games so a young child leaves each session having done something, not merely listened.",
      countryNote:
        "A PYP child in Sullurpeta is most likely the son or daughter of a transferred professional. A weekly online tutor offers continuity after a move that took the child away from a PYP school.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked on criteria. Our tutors unpack each criterion in plain words, show sample responses at different bands, and help students plan the personal project without doing it for them.",
      countryNote:
        "MYP students near Sullurpeta often switch from the state board in Class 8. The early weeks go into writing in full sentences and showing reasoning rather than only final answers.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across three HL and three SL, plus TOK, the Extended Essay and CAS. Tutors teach the content, drill past papers and explain command terms, leaving the assessed coursework in the student's hands.",
      countryNote:
        "Students from the Sullurpeta belt who follow the DP usually do so through a school in Chennai or an online route. A subject tutor nearby in time zone, though not in distance, is a real advantage.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A mix of DP courses and a practical, career-focused strand with a reflective project. Tutors strengthen the academic courses and help the student balance them against the practical work.",
      countryNote:
        "The CP is uncommon around Sullurpeta, so most requests concern one or two DP courses inside it, such as Mathematics or Business Management.",
    },
  ],

  subjectsIntro:
    "These are the IB subjects Sullurpeta families ask about most. Send us the subject code if yours is not here and we will see who is available.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, series and proof, suited to students with aerospace or engineering ambitions." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistical reasoning, modelling and spreadsheet or calculator technology." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics, thermal physics, waves and fields, with orbital motion a natural fit for local students." },
    { name: "Chemistry", levels: "SL and HL", description: "Quantitative chemistry, energetics and organic reactions, including fuel and propellant examples." },
    { name: "Biology", levels: "SL and HL", description: "Cell and molecular biology through ecology, using the Pulicat lagoon wetland as a living example." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming, data structures and systems, popular with students drawn to technology." },
    { name: "Economics", levels: "SL and HL", description: "Market failure, trade and development, written in clear diagram-backed answers." },
    { name: "Business Management", levels: "SL and HL", description: "Operations, finance and strategy cases, relevant to families linked to the industrial belt." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Coastal ecosystems, water and climate, with local lagoon and cyclone examples." },
    { name: "Design Technology", levels: "SL and HL", description: "Design thinking, materials and modelling, with guidance on technical theory papers." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Textual analysis, writing under time, and the individual oral." },
    { name: "English B", levels: "SL and HL", description: "Language acquisition for students who use Telugu or Tamil at home." },
    { name: "Telugu A", levels: "SL", description: "Support for students taking their home language as a school-supported subject." },
    { name: "Tamil B", levels: "SL and HL", description: "Reading and writing support for families on the Tamil-speaking border side." },
    { name: "Theory of Knowledge", levels: "Core", description: "Coaching on knowledge questions and the exhibition; the essay remains the student's own." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Edexcel set different IGCSE papers. A tutor checks the syllabus code your school or online provider has entered your child for, and then trains on matching past papers.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core and Extended", description: "Number through trigonometry, with Extended students drilled on multi-step problems." },
    { name: "Additional Mathematics", levels: "Cambridge", description: "Functions, calculus and coordinate geometry for strong mathematicians." },
    { name: "Physics", levels: "Core and Extended", description: "Forces, electricity, waves and space physics, which suits a town close to the launch pad." },
    { name: "Chemistry", levels: "Core and Extended", description: "Bonding, reactions, rates and organic chemistry, with careful calculation habits." },
    { name: "Biology", levels: "Core and Extended", description: "Living organisms, inheritance and ecosystems, with diagrams and data questions." },
    { name: "Computer Science", levels: "Cambridge", description: "Pseudocode, networks and programming fundamentals for both papers." },
    { name: "English First Language", levels: "Cambridge and Edexcel", description: "Composition, directed writing and close reading." },
    { name: "English as a Second Language", levels: "Cambridge", description: "Reading, writing, listening and speaking for students in Telugu or Tamil homes." },
    { name: "Economics", levels: "Cambridge and Edexcel", description: "Definitions, data response and short essays." },
    { name: "Business Studies", levels: "Cambridge", description: "Case-based questions with finance and marketing calculations." },
    { name: "Hindi as a Second Language", levels: "Cambridge", description: "Comprehension and writing for bilingual learners." },
    { name: "Geography", levels: "Cambridge and Edexcel", description: "Coastal processes, population and hazards, with enough case-study detail for the long answers." },
  ],

  regionsTitle: "Sullurpeta and the surrounding coast we teach",
  regionsIntro:
    "Lessons are online wherever the student lives. This guide to the town and its neighbours helps us choose slots that suit the road, the railway and the launch calendar.",
  regions: [
    { name: "Station Road", note: "Near the railway station on the Chennai line. Families with a parent who travels by train usually prefer later evening slots." },
    { name: "Bus stand junction", note: "The busy commercial core, where tuition lanes cluster. Online lessons spare students the walk home after dark." },
    { name: "Chengalamma temple area", note: "The old town around the temple, where festival weeks reshape the week and lessons are moved to suit." },
    { name: "National Highway belt", note: "Newer houses along the highway, home to commuting professionals, where school vans and trucks crowd the morning road." },
    { name: "Tada", note: "A neighbouring town near the border with Tamil Nadu, where many households speak both Telugu and Tamil." },
    { name: "Doravarisatram", note: "A nearby settlement on the Nellore side, with limited school options and students who rely on the highway." },
    { name: "Sriharikota", note: "The island that houses the space centre. Families connected to it may have unusual shift patterns, so slots are set flexibly." },
    { name: "Pulicat", note: "The lagoon town to the east, known for its lake and bird life, where internet can be patchy during storms." },
    { name: "Nelapattu", note: "The village near the bird sanctuary, a short trip for school excursions and home to a few farming households." },
    { name: "Sri City side", note: "The industrial township towards Chennai, which draws professionals whose children may be mid-programme in another board." },
  ],

  schoolClusters: [
    {
      city: "Sullurpeta and its mandal",
      note: "No IB World School or Cambridge or Edexcel centre in Sullurpeta could be confirmed, so none is listed. Local schools follow the Andhra Pradesh state board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Chennai",
      note: "About 85 kilometres south, Chennai holds the closest large group of confirmed IB and Cambridge schools, so it is where boarding or relocation is usually considered.",
      schools: ["Gateway International School", "KC High International School", "MCTM Chidambaram Chettyar International School"],
    },
    {
      city: "Nearby: Tirupati",
      note: "Roughly 75 kilometres west, with a few international-curriculum options that families in the town sometimes weigh.",
      schools: ["Sree Vidyanikethan International School", "Edify School"],
    },
    {
      city: "Nearby: Hyderabad",
      note: "A longer journey for families with relatives in Telangana.",
      schools: ["Oakridge International School, Hyderabad"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent service with no link to the IBO, Cambridge, Pearson or any school named here. Schools appear only to show what lies around Sullurpeta. Please confirm programmes and admission rules with each school itself.",

  modesIntro:
    "No tutor travels to a home in Sullurpeta, because in-person tuition exists only in Gurugram and parts of Delhi NCR. Families here pick from three online formats.",
  modes: [
    {
      title: "Weekly live lesson",
      description:
        "A regular hour with one tutor, for one subject, through the school year.",
      bullets: [
        "Same tutor, same time each week",
        "Whiteboard and past papers on screen",
        "A short note sent after every lesson",
        "Pauses for festivals and travel on request",
      ],
    },
    {
      title: "Mock and exam sprint",
      description:
        "Extra sessions in the six to eight weeks before mocks and the May or November exams.",
      bullets: [
        "Timed papers and immediate feedback",
        "Command-term and mark-scheme practice",
        "Topic checklists updated each week",
        "Winds down after the last paper",
      ],
    },
    {
      title: "Transfer support block",
      description:
        "Focused lessons for a student who has just moved from another board or another country into an IB or IGCSE course.",
      bullets: [
        "A first session that maps the gaps",
        "Subject vocabulary built from the student's own notes",
        "Short written tasks with careful feedback",
        "A smooth switch to weekly lessons",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Sullurpeta have an IB or IGCSE school?",
      paragraphs: [
        "Not one we could confirm. The directories we use show no IB World School and no Cambridge or Edexcel centre in Sullurpeta, and we would rather say so than print an unverified name. Schools in town teach the Andhra Pradesh state board or CBSE.",
        "The closest verified cluster of international schools is in Chennai, about 85 kilometres south by the highway and the railway, with another small group in Tirupati. For Sullurpeta families these are useful in two ways: as a boarding or relocation choice, and as a picture of what the curriculum looks like when a school teaches it.",
        "What happens in practice is simpler. A student follows an IB or IGCSE course through an online provider or a school elsewhere, and keeps living at home. Subject help has to come by video because the town has no classroom for it.",
        "If you know of a school in Sullurpeta that teaches either curriculum, tell us and we will check and add it to this page.",
      ],
    },
    {
      heading: "How do space-centre, industrial and returnee families shape demand for the IB here?",
      paragraphs: [
        "Every town has its own reasons for wanting an international syllabus. In Sullurpeta, three groups stand out. Families linked to Sriharikota, directly or through contractors, are used to moving between postings and value a qualification recognised in many places. Families tied to the industrial belt near Sri City and Chennai often have relatives in Tamil Nadu and a habit of commuting.",
        "The third group are returnees. Sullurpeta has parents who spent years in the Gulf, the United States or Singapore and came back with a child already in the IB or an IGCSE course. Their question is usually how to keep a child at the same level in a town without a matching school.",
        "We do not assume who you are, and we make no claims about any single employer. What we see is that these families ask similar things: a tutor who understands the syllabus, who teaches at times that fit shift work or a long commute, and who keeps parents informed.",
        "An evening online slot answers all three. The table shows how the main routes compare for a family weighing options.",
      ],
      table: {
        caption: "Routes a Sullurpeta student might follow",
        columns: ["Route", "Format", "What it suits", "Where tutoring helps"],
        rows: [
          ["State board and Intermediate", "Local school, Telugu or English medium", "Families aiming at EAPCET and state colleges", "Extra practice, not a syllabus switch"],
          ["CBSE", "English-medium private school", "Families expecting postings across India", "JEE, NEET and CUET-UG preparation"],
          ["IGCSE (Cambridge or Edexcel)", "Online programme or school in Chennai", "Students bound for the Diploma or A Level", "Extended papers, written answers, practicals"],
          ["IB Diploma", "School elsewhere or online, with home study", "Students aiming abroad or at AIU-recognised routes", "HL and SL subject depth, past papers"],
        ],
      },
    },
    {
      heading: "What does tuition for the IB or IGCSE cost in Sullurpeta, and why do rates differ?",
      paragraphs: [
        "IB Gram does not advertise a fixed price list, and a family always receives the rate in writing before booking. That is because the work behind two lessons can differ a great deal, even in the same subject.",
        "Level and subject set the starting point. An experienced teacher of IB Mathematics AA HL or Physics HL spends more time preparing than a tutor for IGCSE Core English, and the rate reflects it.",
        "Volume matters too. One lesson a week across the year is a light commitment, while three lessons a week for the two months before an exam is a heavier one. Many Sullurpeta families begin light and scale up when mocks draw near.",
        "Tutor background is the last factor. A teacher who has marked papers or taught many cohorts through the same course may charge differently from someone newer. Since everything is online, there is no travel cost, and the free trial lesson lets you decide before paying.",
      ],
      bullets: [
        "The programme, level and subject",
        "How many lessons each week, and for how long",
        "The tutor's experience of the exact syllabus",
        "Whether the plan is year-long or an exam sprint",
        "How rare the subject combination is",
      ],
    },
    {
      heading: "Online home tuition, a Chennai coaching centre, or studying alone: which works from Sullurpeta?",
      paragraphs: [
        "Sullurpeta families sometimes look towards Chennai for coaching, but the road is long and the timetables rarely fit a school day. A weekly journey of three hours to reach a class that may not teach the student's syllabus is hard to justify.",
        "Online one-to-one lessons take the journey away and keep the subject specialist. The lesson is private, the tutor sees exactly where the student goes wrong, and the written note records it. The honest limit is that a student needs steady internet and a place to work undisturbed.",
        "A local general tutor can help with younger students and with basics, but may not know IB command terms or the wording of IGCSE mark schemes. Self-study suits disciplined older students who already have notes and past papers, though nobody marks their written answers.",
        "The table compares the four options. Many families combine two, such as online lessons for the difficult subject and self-study for the rest.",
      ],
      table: {
        caption: "Support choices for a Sullurpeta IB or IGCSE student",
        columns: ["Option", "Advantage", "Drawback", "Best used for"],
        rows: [
          ["Online one-to-one", "Specialist tutor, no travel, written notes", "Depends on connection and a quiet corner", "DP, MYP and IGCSE subject depth"],
          ["Chennai coaching centre", "Peer group and classroom routine", "Long travel and a syllabus that may not match", "Occasional intensive courses"],
          ["Local private tutor", "Nearby and personal", "May be unfamiliar with the international syllabus", "Younger students and foundations"],
          ["Self-study", "Free and flexible", "No feedback on written work", "Revision alongside other support"],
        ],
      },
    },
    {
      heading: "How do the northeast monsoon and launch days affect a Sullurpeta study year?",
      paragraphs: [
        "Sullurpeta's weather sets a different rhythm from most of India. The southwest monsoon barely touches this coast, but the northeast monsoon brings heavy rain between October and December, often with cyclone alerts, flooded roads and power cuts. That overlaps with the November exam series.",
        "Launches add another local variable. When a rocket goes up from Sriharikota, roads toward the coast fill with visitors, and some households with a link to the centre work unusual hours. None of this stops learning, but it makes fixed slots worth negotiating.",
        "The festival calendar is shared between two cultures. Sankranti in January, Ugadi in spring and Tamil New Year in April all matter in town, and summer heat peaks in May, when the IB session begins.",
        "We therefore build slack into the plan: a flexible make-up slot in the wet months, earlier mocks, and shared notes so a missed lesson does not become a missed topic. A sample year follows in the table.",
      ],
      table: {
        caption: "A sample Sullurpeta study year",
        columns: ["Months", "Academic focus", "Local factor", "What we do"],
        rows: [
          ["June to September", "New units and gap diagnosis", "Hot, dry weather with little rain", "Establish weekly slots"],
          ["October to December", "Mocks and the November series", "Northeast monsoon, cyclone alerts, power cuts", "Flexible make-up slot, backup connectivity advice"],
          ["January", "Mock exams and IA drafts", "Sankranti holidays", "Intensive blocks before the break"],
          ["February to April", "Revision and practical write-ups", "Ugadi and Tamil New Year", "Adjust slots, protect revision time"],
          ["May", "Final papers of the IB and IGCSE sessions", "Peak summer heat", "Early morning or late evening practice"],
        ],
      },
    },
    {
      heading: "Where can a Sullurpeta student study after the IB or IGCSE?",
      paragraphs: [
        "Many students here grow up curious about space and engineering, and the IB Diploma with Mathematics and Physics HL is a solid route for it. India's Association of Indian Universities treats the Diploma as a Class 12 equivalent, so Indian applications stay open.",
        "For entrance exams, IB and IGCSE students should read the current JEE Main, NEET and CUET-UG brochures and ask their school for equivalence documents. Subject combinations matter, and rules change from year to year.",
        "Abroad, students look at the United Kingdom, the United States, Canada, Singapore and Australia. IB points, IGCSE grades and a school's predicted grades are all read by admissions teams, and tutoring aims to raise the subject marks that feed them.",
        "Within India, Chennai, Hyderabad and Bengaluru are the common choices, along with Tirupati for some degrees. Tutors never choose the destination for a student and never promise a place.",
      ],
    },
    {
      heading: "How do the IB sciences and Mathematics work for a student near the space coast?",
      paragraphs: [
        "IB Mathematics offers Analysis and Approaches, heavy on calculus and proof, and Applications and Interpretation, heavier on statistics and modelling. A student drawn to aerospace usually chooses AA at HL, and pairs it with Physics HL.",
        "Students from a Telugu-medium background often handle calculation well but need practice writing explanations in English. Tutors therefore use the first month to build a precise vocabulary for physics and chemistry, especially for words such as explain, discuss and evaluate.",
        "In Physics the topics of orbital motion, gravitational fields and energy fit this town naturally, and tutors may use launch examples when they help. In Chemistry the same applies to combustion and energetics, in Biology to the lagoon's ecology.",
        "Practical skills remain a concern for remote learners. Tutors help a student plan, record and evaluate experiments from the school's or provider's own lab instructions, and do not carry out or write the assessed Internal Assessment.",
      ],
      bullets: [
        "Mathematics AA: calculus, differential equations, vectors",
        "Mathematics AI: statistical tests, finance, modelling",
        "Physics: mechanics, gravitation, waves, fields, nuclear",
        "Chemistry: energetics, kinetics, equilibrium, organic",
        "Biology: genetics, ecology, physiology and data analysis",
      ],
    },
    {
      heading: "How should a Sullurpeta student choose between IGCSE Core and Extended and pick subjects?",
      paragraphs: [
        "Core papers stop at a lower maximum grade, while Extended papers allow the whole scale. A student who wants the IB Diploma or A Level should sit Extended in Mathematics and the sciences, because later courses assume that depth.",
        "Subject choice follows the destination. Aspiring engineers take Mathematics, Additional Mathematics where offered, Physics and Chemistry. Students inclined to medicine add Biology, and those interested in business add Economics or Business Studies. Computer Science suits students drawn to technology.",
        "Cambridge and Edexcel set their papers in different layouts. Cambridge tends to include more structured parts and a dedicated practical-skills paper, while Edexcel uses a different mix. We confirm the code first and practise on that board only.",
        "A typical IGCSE course runs two years, and one weekly lesson in each of two or three subjects usually suffices, with extra sessions before the papers. A student who joins in the final year can use the transfer support block.",
      ],
    },
  ],

  process: [
    { title: "Send us the basics", description: "Message the class, board, programme, subject and exam session by WhatsApp or email." },
    { title: "Meet the suggested tutor", description: "We share a profile of someone who has taught that exact course, with time slots that fit your routine." },
    { title: "Attend a free trial", description: "A live online lesson on a topic from your child's own work, at no charge." },
    { title: "Confirm the rate in writing", description: "Lesson length, frequency and price are sent to you before anything is billed." },
    { title: "Begin weekly lessons", description: "Each session ends with a short note, and you may change tutor at any time." },
  ],

  whyPoints: [
    { title: "Matched on syllabus, not convenience", description: "The tutor has taught your child's exact course, whether IB Chemistry SL or Edexcel IGCSE Physics." },
    { title: "Timetables in Indian Standard Time", description: "Lessons fall on ordinary school evenings and weekends, with no overnight sessions." },
    { title: "Plain about online delivery", description: "We say clearly that nobody visits homes in Sullurpeta, and that in-person lessons are limited to Gurugram and parts of Delhi NCR." },
    { title: "Coaching that leaves the work yours", description: "Tutors guide and give feedback, but assessed work such as an IA, Extended Essay or TOK essay is never written for a student." },
    { title: "Notes parents can follow", description: "A short written summary follows every lesson, which suits parents working shifts or away from home." },
    { title: "A small first step", description: "A free trial, a rate in writing and the option to change tutor keep risk low." },
  ],

  tutorsIntro:
    "The tutors below teach online from elsewhere in India, on IST. Their profiles list the subjects and levels each has taught, so a Sullurpeta family can see who is closest to the course.",

  faqs: [
    {
      question: "Is IB and IGCSE home tuition available in Sullurpeta?",
      answer: "It is available online. IB Gram teaches Sullurpeta students live over video, one to one, from the student's own home. Tutors do not visit homes in Sullurpeta, since in-person home tuition runs only in Gurugram and parts of Delhi NCR. The lesson is private, the tutor is matched to the syllabus, and the first session is a free trial. For a town with no international school, online is the practical route.",
    },
    {
      question: "Is there an IB or Cambridge school in Sullurpeta?",
      answer: "We could not confirm one. Directories show no IB World School or Cambridge or Edexcel centre in Sullurpeta. The nearest verified clusters on this page are in Chennai and Tirupati. If you know a local school that teaches either curriculum, send us its name and we will check it. Until then the options for a family are boarding, relocation or an online programme studied from home.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Sullurpeta?",
      answer: "No price is published here, and every rate is given in writing before booking. It depends on the programme, level, subject, lessons per week and tutor experience. There is no travel cost, since lessons are online. Message us with the details for a written quote. The trial lesson is free, so you can judge the tutor before any payment is agreed.",
    },
    {
      question: "We live near Sriharikota. Can lessons fit a shift-work schedule?",
      answer: "Yes, within reason. Tutors teach in Indian Standard Time, mostly in the evening and at weekends, and we can fix slots around a parent's shifts or a launch-day road closure. Tell us which days are difficult and we will propose times that stay stable week to week. If a launch campaign disrupts a particular week, we reschedule without penalty.",
    },
    {
      question: "My child speaks Telugu and Tamil at home. Is that a problem for the IB?",
      answer: "No, and it can be an advantage. English remains the language of instruction and exams, so the tutor builds subject vocabulary from the student's own notes, and practises written answers aloud. Some students may also take Telugu or Tamil as a language subject, where the school or provider supports it. Bilingual students often adapt faster than parents expect.",
    },
    {
      question: "Do tutors write IAs, Extended Essays or TOK essays?",
      answer: "No. Tutors coach and never write assessed work. They will explain criteria, discuss ideas and comment on a student's own drafts, yet they do not draft, rewrite or supply content for an Internal Assessment, Extended Essay, TOK essay or coursework. This keeps the student safe from misconduct rules and keeps the work honest.",
    },
    {
      question: "Which IGCSE boards do you teach?",
      answer: "Both Cambridge International and Pearson Edexcel. We confirm the board and syllabus code first, for example Cambridge 0625 Physics or Edexcel 4PH1, and then work from past papers of that board. If you are not sure which one your child is entered for, check the entry confirmation or ask the school or online provider and send us the code.",
    },
    {
      question: "How reliable is online learning during the northeast monsoon?",
      answer: "It is workable with a little planning. Heavy rain and cyclone alerts between October and December can cause power and mobile data failures, so we recommend a charged laptop, a phone hotspot as backup and a reserve slot each week. If a lesson is lost we reschedule without penalty, and shared notes keep the student on track for the November series.",
    },
    {
      question: "What equipment do we need for lessons?",
      answer: "A laptop or tablet with a camera and microphone, a steady internet connection and a quiet space. A second device or hotspot is a sensible backup near the coast. We use a shared whiteboard and screen-shared past papers, which are easier on a larger screen than on a phone. Headphones reduce background noise. Nothing else needs buying.",
    },
    {
      question: "How do JEE, NEET and CUET-UG work for IB and IGCSE students?",
      answer: "Eligibility depends on the subject combination and equivalence, and rules change, so check the current official brochure. The Association of Indian Universities treats the IB Diploma as equivalent to Class 12, and CUET-UG accepts students from all boards. For JEE Main and NEET, confirm subject and mark requirements. Our tutors teach the subject and do not promise ranks or admission.",
    },
    {
      question: "Do you teach the IB PYP and MYP in Sullurpeta?",
      answer: "Yes. PYP tutoring supports reading, number and inquiry for Classes 1 to 5, and MYP tutoring covers subjects from Class 6 to 10 with criterion-based assessment. Since no local school runs these programmes, most children come from a transferred family or follow an online school. A tutor who knows the programme language makes settling in far smoother.",
    },
    {
      question: "Can we change tutor if the first one is not right?",
      answer: "Yes, at any time and at no extra cost. A first match is not always perfect, and pace or style can matter. A short note on what did not work is enough, and we will propose another tutor. The free trial lesson is there to lower the chance of needing a change, but the option stays open throughout.",
    },
    {
      question: "Will anyone visit our home in Sullurpeta for tuition?",
      answer: "No. IB Gram does not send tutors to homes in Sullurpeta or anywhere in Andhra Pradesh. Home visits run only in Gurugram and parts of Delhi NCR. In Sullurpeta, home tuition means private online lessons taken at home on a laptop. We say this openly so no family waits for a visit that will not happen.",
    },
    {
      question: "What happens in the free trial lesson?",
      answer: "A live online session of around thirty to forty-five minutes on a real topic from your child's syllabus. The tutor asks about current work, explains one idea and sets a short exercise. Parents may join. There is no payment or commitment, and you receive a written summary afterwards, plus a written rate if you wish to continue.",
    },
    {
      question: "How do we get started?",
      answer: "Send a WhatsApp message to +91 7439 368 115 or email support@ibgram.com with your child's class, programme, subject and exam session. We reply with a tutor profile and a trial time, usually within a day. After the trial you get a written rate and can start weekly lessons only if you are happy. The first step costs nothing.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in India", href: "/india/", description: "See the cities IB Gram serves and how online tuition is arranged." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Browse IB subject tutors and programme guides." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Subject pages for Cambridge and Edexcel IGCSE." },
    { label: "IB Diploma programme", href: "/programmes/dp/", description: "The structure of DP subjects, the core and assessment." },
    { label: "IB MYP programme", href: "/programmes/myp/", description: "MYP criteria and the personal project explained." },
    { label: "IB PYP programme", href: "/programmes/pyp/", description: "Inquiry learning for primary-age children." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "AA and AI at SL and HL." },
    { label: "Our tutors", href: "/tutors/", description: "Tutor profiles by subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write or WhatsApp to set up a trial lesson." },
    { label: "IB and IGCSE tutors in Nellore", href: "/nellore/", description: "The page for the district town to the north." },
    { label: "IB and IGCSE tutors in Tirupati", href: "/tirupati/", description: "For families weighing the Tirupati school cluster." },
    { label: "IB and IGCSE tutors in Chennai", href: "/chennai/", description: "The city with the closest confirmed international schools." },
    { label: "IB and IGCSE tutors in Srikalahasti", href: "/srikalahasti/", description: "Our page for the temple town on the same highway belt." },
  ],

  closingHeading: "A free online lesson for Sullurpeta students",
  closingBody:
    "A child who grows up watching rockets climb over the Bay of Bengal should not have to settle for a tutor who has never seen the syllabus. Send us the subject, level and exam session, and we will suggest a specialist and a trial lesson in Indian time. The trial is free, the rate arrives in writing first, and you can change tutor whenever you like. WhatsApp +91 7439 368 115 or email support@ibgram.com.",
};
