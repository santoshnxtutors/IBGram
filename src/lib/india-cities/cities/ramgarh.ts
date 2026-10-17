import type { CitySeoPage } from "../types";

/**
 * /ramgarh/ - IB and IGCSE tutoring page for Ramgarh (Ramgarh Cantonment), Jharkhand. Online-only.
 * No IB or Cambridge school is confirmed in Ramgarh or nearby Ranchi, so stripSchools is empty and
 * clusters reuse the honest Ranchi-page pattern (Kolkata, Delhi NCR boarding routes) plus Bhopal-free
 * regional context. Defence transfers, CCL and Damodar-belt families are the local hook.
 */
export const ramgarh: CitySeoPage = {
  slug: "ramgarh",
  countryName: "Ramgarh",
  countryNameLong: "Ramgarh, Jharkhand",
  demonym: "Ramgarh",
  state: "Jharkhand",
  stateCode: "IN-JH",
  flagCode: "in",
  countryCode: "IN",
  region: "Jharkhand, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "We work around Chhath on the Damodar ghats, the Durga Puja week, the dust and heat of the coalfield summer and each school's own term calendar",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.6294, longitude: 85.5137 },
  wikipedia: "https://en.wikipedia.org/wiki/Ramgarh_Cantonment",
  alternateNames: ["Ramgarh Cantonment", "Ramgarh Cantt", "Ramgarh Jharkhand"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Ramgarh | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors in Ramgarh, Jharkhand: one-to-one online private tuition for cantonment, CCL and Damodar-belt families, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Ramgarh",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR RAMGARH FAMILIES",
  heroSubtitle:
    "Home tuition for an international curriculum in Ramgarh means an online one-to-one lesson, since no tutor from IB Gram travels into Jharkhand. Army households at the cantonment, families linked to the coal companies and power plants of the Damodar belt, and parents who expect a posting to a big city are the ones who ask most, usually about a child who may soon enter an IB or Cambridge classroom.",
  primaryKeyword: "IB and IGCSE tutors in Ramgarh",
  imageAltText: "Ramgarh student working through an IB Mathematics past paper with a tutor over a live online lesson",
  secondaryKeywords: [
    "IB tutor Ramgarh",
    "IGCSE tutor Ramgarh",
    "IB home tuition Ramgarh",
    "IGCSE home tuition Ramgarh",
    "IB private tuition Ramgarh",
    "IB Maths tutor Ramgarh",
    "IGCSE Maths tutor Ramgarh",
    "IB Physics tutor Ramgarh",
    "IB Chemistry tutor Ramgarh",
    "IB Biology tutor Ramgarh",
    "IB DP tutor Ramgarh",
    "IB MYP tutor Ramgarh",
    "IB PYP tutor Ramgarh",
    "IGCSE online tuition Ramgarh",
    "Cambridge IGCSE tutor Ramgarh",
    "IB tutor Ramgarh Cantonment",
    "IB tutor Jharkhand",
    "IGCSE tutor Patratu",
    "online IB tuition Ramgarh Jharkhand",
  ],

  heroTrustPoints: [
    "Live one-to-one lessons on video, in IST, for army, coal-belt and business families",
    "Tutors matched to the exact IB subject and level or the Cambridge and Edexcel code",
    "Free trial lesson first, a written note after each session, rates in writing before booking",
    "No link to any school, the IB, Cambridge or Pearson",
  ],
  heroStats: [
    { value: "Cantt to campus", label: "Support ahead of a posting or transfer" },
    { value: "PYP to DP", label: "The IB continuum, delivered online" },
    { value: "JAC, CBSE, ICSE", label: "Local boards understood" },
    { value: "Free trial", label: "A whole lesson before deciding" },
  ],

  intro: {
    heading: "Where Ramgarh families meet the IB and IGCSE",
    paragraphs: [
      "Ramgarh is a small district town with an outsized share of mobile households. The cantonment hosts army regimental centres, and officers and JCOs are posted in and out on a regular cycle. Around the town, collieries and power plants employ engineers and managers who are transferred within Jharkhand and beyond. A child in such a household may well spend Class 9 here and Class 10 in Pune or Bengaluru.",
      "That mobility is the real reason IB and Cambridge come up. Army and public-sector families often land in a city where the good school is an IB or IGCSE campus, and the child arrives having studied the JAC or CBSE syllabus. We built this service for that gap: a tutor who understands both systems and can work with a child while they are still in Ramgarh.",
      "Because IB and IGCSE tutors in Ramgarh are not locally based, every lesson runs online. The child sits at home with a laptop, the tutor teaches live from elsewhere in India, and a shared whiteboard replaces the desk. Nobody arrives at your door; our in-person model is limited to Gurugram and parts of Delhi NCR.",
      "The service is independent of any school or examining body. Tutors coach subjects and technique, never write an Internal Assessment, Extended Essay, TOK essay or coursework. A free trial lesson comes first, a note follows each session, and your rate is agreed in writing before you book.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP tuition, plus Cambridge and Edexcel IGCSE",
      "Bridge lessons for children heading to an international school after a posting",
      "Live video, IST, one tutor per child",
      "Home visits are not offered in Ramgarh, only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "No IB programme is confirmed as running in Ramgarh. Below is how each one usually appears to a family here: after a posting order, through a hostel in a metro, or when a relative abroad suggests a portable qualification.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Younger pupils explore transdisciplinary themes, asking questions and building skills through projects rather than through a textbook page. The last year features an Exhibition, a piece of inquiry the child leads.",
      countryNote:
        "For a Ramgarh child, PYP tuition is mostly preparation: reading fluency, talking through ideas and comfort with open questions, ahead of a move into a PYP school.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers mark students on separate criteria in every subject, and the programme finishes with a Personal Project. Skills of research, planning and reflection matter alongside subject content.",
      countryNote:
        "Ramgarh students on MYP are typically at a school in a metro such as Kolkata or Delhi NCR, so lessons are set around that school's calendar, not a cantonment one.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The Diploma combines six subjects, three at Higher Level, with TOK, the Extended Essay and CAS. External exams sit in May or November, and marks from internal assessments count towards each grade.",
      countryNote:
        "Diploma help connected to Ramgarh normally supports a student in another city or a child who returns to the cantonment for holidays and needs a focused revision block.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP mixes Diploma courses with a career-related qualification and reflective work. Only a few schools in India teach it.",
      countryNote:
        "A CP enquiry from Ramgarh is uncommon. If it arrives, we tutor the academic courses that count towards the programme.",
    },
  ],

  subjectsIntro:
    "Requests from Ramgarh are usually practical: a science paper that a new school will test quickly, a Maths course a child needs to catch up on, or English writing for a very different marking style. We pick the tutor by subject and level first.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Best for students moving towards engineering, including those aiming at BIT Mesra or IIT (ISM) Dhanbad routes. Calculus and proof-style problems get most of the time." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator work suit students bound for business or social sciences. The exploration needs an early, realistic topic." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, fields and waves are practised with unfamiliar question wording, since the state and CBSE styles seldom prepare students for that." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Students learn how to structure calculations and mechanisms, and how to write an investigation that a moderator will credit." },
    { name: "IB Biology", levels: "HL / SL", description: "Command terms decide marks here. We rehearse short, exact explanations and the reading of experimental data." },
    { name: "IB Economics", levels: "HL / SL", description: "Coal, power and mining offer vivid examples for externalities and resource discussions in evaluation answers." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study writing gets steady practice, with definitions used precisely and theory tied to the organisation described." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Students from Hindi or Bengali-speaking homes work on close reading of unseen texts and on structured comparative essays." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, data structures and coding are covered in tandem, with the internal product checked for clear documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies are learned accurately and written up in evaluation-focused paragraphs under timed conditions." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "The Damodar valley, mining landscapes and reclaimed land give students local material for sustainability arguments." },
    { name: "IB Hindi A / B", levels: "HL / SL", description: "Text types, register and precise written Hindi come first, followed by conversation practice for the oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Lessons explore how we know what we know, and help students shape arguments for the exhibition without writing it for them." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE is what many transferred families encounter first. We match the tutor to the syllabus code and tier, and to Edexcel for children arriving from a school that follows Pearson.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Students often know the methods but lose marks on layout and working, so we practise complete written solutions." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Functions, trigonometry and an early look at calculus prepare a student for the algebra demanded by IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Timed calculations and graph reading dominate, with the alternative-to-practical paper practised often." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Moles, electrolysis and organic reactions are taught in order, with practical questions used as revision." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Enzymes, transport and inheritance are covered, and written answers are trimmed until they answer exactly what is asked." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams win easy marks, so lessons devote the time to evaluative writing." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Programming problems are set and run, making logic visible before exams." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Reading skills and directed writing improve with timed practice and immediate feedback." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Students practise applying terms to a given business, avoiding generic answers." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Comprehension and formal writing are rehearsed for students who speak Hindi but rarely write it formally." },
  ],

  regionsTitle: "Ramgarh and Damodar-belt localities we match tutors for",
  regionsIntro:
    "Because lessons are online, the areas below serve as context: who lives there, which boards the local schools follow and how the working day of the cantonment, the mines or the highway shapes an evening.",
  regions: [
    { name: "Ramgarh Cantonment", note: "The military area with regimental centres, where families move on a posting cycle and often plan for a school in another city." },
    { name: "Ramgarh town and the main market", note: "The civil centre of the district, with a mix of JAC, CBSE and ICSE schools and long-established local tutors." },
    { name: "Chitarpur", note: "A town on the Ranchi road with industrial and coal-linked households and heavy highway traffic in the evenings." },
    { name: "Patratu", note: "Known for its thermal power project and the scenic valley road, home to many engineering and technical families." },
    { name: "Barkakana", note: "A railway and coal-company town where rail and colliery employees make up much of the community." },
    { name: "Gola", note: "A smaller town on the Damodar side, where school options are limited and online lessons carry weight." },
    { name: "Mandu", note: "An area of collieries and villages where connectivity varies and a backup connection is useful." },
    { name: "Rajrappa", note: "The temple site on the Damodar and Bhairavi rivers, busy with pilgrims and visitors at festival times." },
    { name: "Kuju", note: "A colliery township whose families are tied to coal-company postings." },
    { name: "Ranchi road corridor", note: "The highway towards the state capital, along which some families relocate to be near larger schools." },
  ],

  schoolDisclaimer:
    "No IB or Cambridge school inside Ramgarh could be confirmed, so the campuses below are in other regions and named only for orientation. IB Gram is an independent tutoring service with no affiliation to any of these schools, to the International Baccalaureate, to Cambridge Assessment International Education or to Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Ramgarh and Ranchi",
      note: "We could not confirm a school teaching the IB continuum or Cambridge or Edexcel IGCSE in Ramgarh or nearby Ranchi. Local families overwhelmingly follow JAC, CBSE or ICSE, which is why online tutoring carries so much of the load here.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "The nearest metro with a long-established IB campus, and a common hostel or relocation choice for eastern Jharkhand families.",
      schools: ["Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR boarding routes",
      note: "Army and public-sector families with an NCR posting or hostel budget often look at established IB schools around Gurugram.",
      schools: ["Pathways World School", "GD Goenka World School"],
    },
  ],

  modesIntro:
    "A single tutor, a single student, live on video and on Indian time is the pattern for every Ramgarh family. What differs is the rhythm around a posting or a term. No tutor visits your house here; that arrangement is confined to Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Weekly lessons from home",
      description:
        "A regular slot on a laptop with a shared whiteboard. Suits families staying in Ramgarh for the long term or waiting for a transfer.",
      bullets: [
        "Any Indian tutor can be considered",
        "Works for DP, MYP and IGCSE subjects",
        "Past papers marked together on screen",
        "One tutor throughout the term",
      ],
    },
    {
      title: "Pre-posting bridge lessons",
      description:
        "A short, focused run of lessons in the months before a posting or hostel move, aimed at question style, written answers and pace.",
      bullets: [
        "Aimed at command words and coursework habits",
        "Timed to the move date",
        "Uses the future school's board where known",
        "Can continue after the move",
      ],
    },
    {
      title: "Holiday revision for children away",
      description:
        "Concentrated blocks over Diwali, Durga Puja or summer for a child studying away who returns to Ramgarh for a few weeks.",
      bullets: [
        "Timed papers with quick marking",
        "Built around the child's school syllabus",
        "Avoids peak Chhath and puja days",
        "Booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Why do army and coal-belt families in Ramgarh ask about IB and IGCSE?",
      paragraphs: [
        "A posting order changes a child's school within weeks. Ramgarh Cantonment hosts army regimental centres, and its families rotate through postings across the country. Many end up in a city where the leading school follows the IB or Cambridge, and the child arrives with a completed year of JAC or CBSE work.",
        "The same is true of employees at coal companies, thermal power plants and steelworks in the region. Transfers within the company or a career move to a metro can push a household towards an international school, often with little notice.",
        "For these families the question is not which board is better. It is how quickly a child can settle into a different way of being assessed. The answer is usually to practise the new style before the move, not after it.",
        "That is the work of IB and IGCSE tutors in Ramgarh: a specialist reached online, familiar with both systems, who can prepare a child while the household is still at its current address.",
      ],
      table: {
        caption: "Who asks about IB and IGCSE in Ramgarh, and why",
        columns: ["Household type", "Typical trigger", "What tutoring focuses on"],
        rows: [
          ["Army families at the cantonment", "Posting to a city with an international school", "Question style, written answers, subject gaps"],
          ["Coal and power company staff", "Transfer or move to a metro", "Bridge lessons before the move"],
          ["Business families along the Ranchi road", "Plans for study abroad", "HL subject depth and predicted grades"],
          ["Families returning from the Gulf or abroad", "Mid-course entry to a local school", "Continuity with the previous syllabus"],
        ],
      },
      bullets: [
        "Postings and transfers drive most enquiries",
        "Children arrive with a JAC or CBSE background",
        "Preparation works best before the move",
        "Online matching reaches specialists who are not local",
      ],
    },
    {
      heading: "Which IB or IGCSE schools are near Ramgarh?",
      paragraphs: [
        "None in Ramgarh or nearby Ranchi could be confirmed. The nearest established IB options are in Kolkata, and many army and public-sector families look at campuses in Delhi NCR, particularly around Gurugram.",
        "Calcutta International School is a long-standing IB name in Kolkata. Pathways World School and GD Goenka World School are among the campuses in the NCR region that families with postings there consider.",
        "Anyone reading this from Ramgarh should treat these as orientation points, not recommendations. Which school suits a child depends on the family's posting, budget and the child's stage.",
        "It also explains why local specialist tutors are very rare. With no campus in the district, few local teachers have taught IB Chemistry HL or IGCSE 0606 recently, so online matching is the practical route.",
      ],
      bullets: [
        "No IB or Cambridge school is confirmed in Ramgarh or Ranchi",
        "Kolkata and Delhi NCR host the nearest established campuses",
        "School choice follows posting and budget",
        "Local specialists are scarce, so tutoring is matched nationally",
      ],
    },
    {
      heading: "How do JAC, CBSE and ICSE compare with IB and IGCSE for a Ramgarh child?",
      paragraphs: [
        "The Jharkhand Academic Council board is the state option, CBSE is widespread in the cantonment and town, and some ICSE schools operate in the Ranchi area. All three prepare students for JEE Main, NEET and the CUET-UG route, and all reward accurate knowledge of a fixed syllabus.",
        "IB and IGCSE emphasise explanation. IGCSE Extended questions can wrap a familiar topic in an unfamiliar context, and the IB awards credit against published criteria. Coursework, from a science investigation to the Extended Essay, is a bigger share of the picture than a JAC or CBSE student is used to.",
        "In practice, students from JAC or CBSE arrive strong on facts and slower at extended writing. A few months of deliberate practice tends to close the gap, which is why we start early where we can.",
        "Neither system is superior. The choice depends on where the child will live, what they plan to study and whether a route abroad is likely.",
      ],
      table: {
        caption: "Boards compared from a Ramgarh viewpoint",
        columns: ["Feature", "JAC / CBSE / ICSE", "IB / IGCSE"],
        rows: [
          ["Presence in Ramgarh", "Most local schools", "None confirmed"],
          ["Style of assessment", "Fixed board papers", "Papers plus coursework and internal assessment"],
          ["Entrance path in India", "JEE Main, NEET, CUET-UG directly", "AIU equivalence, subject rules, CUET-UG"],
          ["Portability", "Strong within India", "Recognised internationally"],
        ],
      },
      bullets: [
        "JAC, CBSE and ICSE match Indian entrance exams directly",
        "IB and IGCSE reward explanation and independent work",
        "Extended writing is the common gap on a switch",
        "The right board depends on where the child will live",
      ],
    },
    {
      heading: "What determines the cost of IB or IGCSE tuition for a Ramgarh family?",
      paragraphs: [
        "Ramgarh does not have a price list, because rates depend on the case. The level of the course, the subject, the frequency of sessions and the tutor's recent teaching of the exact syllabus all count. A Higher Level Diploma science and an IGCSE Core language are not comparable purchases.",
        "There is no travel charge, since nobody travels. A tutor in another state charges a Ramgarh student the same as one in Ranchi, and the family avoids the time and cost of taking a child to a class.",
        "We give the rate in writing before the free trial, so there are no surprises later. Sessions can be paused around postings, exams or festivals, and a tutor change is available if the fit is not right.",
        "For families expecting a move, a short, focused bridge course often costs less than a long run of general lessons, because it targets exactly what the new school will test.",
      ],
      bullets: [
        "Level, subject, frequency and tutor experience set the rate",
        "No travel cost, as lessons are online",
        "Rate confirmed in writing before the trial",
        "Short bridge courses can be cost-efficient before a move",
      ],
    },
    {
      heading: "Online tutoring or local options in Ramgarh?",
      paragraphs: [
        "Ramgarh and nearby Ranchi have coaching centres for JEE, NEET, the CDS and NDA. They serve their purpose, but there are no batches for IB Economics or IGCSE Business Studies, since not enough students in the region take those courses.",
        "Local home tutors handle school subjects well, and many students in the cantonment rely on them. The gap for international syllabuses is knowledge of current mark schemes and command terms.",
        "Independent study is possible for confident learners, because Cambridge papers are freely available. Where it falls short is coursework and long-form writing, where an experienced reader is needed to point out what the student cannot see.",
        "An online tutor supplies that reader. Lessons are individual, the schedule fits around a posting or a shift, and the tutor can be replaced without changing schools.",
      ],
      table: {
        caption: "Options for IB and IGCSE support from Ramgarh",
        columns: ["Option", "Syllabus fit", "Attention", "Constraint"],
        rows: [
          ["Coaching centres", "Built for JEE, NEET, NDA", "Group", "No IB or IGCSE batches"],
          ["Local home tutor", "School boards", "One to one", "Limited current IB or Cambridge experience"],
          ["Self-study", "Student-directed", "None", "Coursework and extended writing unchecked"],
          ["Online specialist", "Matched to the course", "One to one", "Needs reliable internet"],
        ],
      },
      bullets: [
        "Local coaching centres focus on entrance and defence exams",
        "Few local tutors know current IB or Cambridge schemes",
        "Self-study lacks feedback on written work",
        "Online tutoring matches the exact course",
      ],
    },
    {
      heading: "How do Chhath, Durga Puja and the coalfield summer affect study time in Ramgarh?",
      paragraphs: [
        "Chhath Puja, in October or November, is the great family occasion of the region, with devotees gathering at the Damodar ghats and near ponds. Routines shift for several days, and students rarely study late those evenings. Durga Puja and Diwali fall close to each other and further break the autumn term.",
        "Summer brings heat and dust, and collieries can add to both. May and June are difficult months for long afternoon sessions. Early-morning or late-evening lessons work better, and a backup connection is useful in outlying areas.",
        "The winter is milder and better for study, and it is when many families plan revision blocks. For exam calendars, Cambridge IGCSE runs sessions in May-June and October-November. The IB Diploma is examined in May, with results in July, and a November session serves a smaller group.",
        "The school's calendar matters more than the town's. A child at a school in Kolkata or Delhi NCR follows that timetable, and our planning follows it too.",
      ],
      table: {
        caption: "Seasonal rhythm and lesson planning in Ramgarh",
        columns: ["Time of year", "What happens", "What we do"],
        rows: [
          ["October-November", "Durga Puja, Diwali, Chhath", "Move or skip lessons on peak days"],
          ["December-February", "Cool, dry weather", "A good period for revision blocks"],
          ["April-June", "Heat, dust, exam series", "Early or late slots; backup internet"],
          ["July-September", "Monsoon", "Flexible timings in case of outages"],
        ],
      },
      bullets: [
        "Chhath and Durga Puja disturb autumn evenings",
        "Summer heat favours early or late lessons",
        "Winter suits intensive revision",
        "The child's school calendar sets the exam timetable",
      ],
    },
    {
      heading: "What do Ramgarh students aim for after IB or IGCSE?",
      paragraphs: [
        "Jharkhand has several well-known destinations within reach. BIT Mesra near Ranchi, IIT (ISM) Dhanbad, NIT Jamshedpur and XLRI Jamshedpur attract many students, while others look to central universities through CUET-UG or to institutions elsewhere in India.",
        "For IB and IGCSE students, Indian admission depends on Association of Indian Universities equivalence and on meeting subject requirements for JEE or NEET. Extra coaching, if needed, is usually taken alongside subject tutoring.",
        "Study abroad also appears often, especially where relatives live in the UK, the US or the Gulf. Predicted grades in Class 12 matter, and universities set requirements by subject and level.",
        "Our tutors help with the academic side: subject depth, technique and grade improvement. We describe what a target course usually expects and do not offer admissions consulting.",
      ],
      bullets: [
        "BIT Mesra, IIT (ISM) Dhanbad and NIT Jamshedpur are local destinations",
        "AIU equivalence matters for Indian admissions",
        "Predicted grades matter for overseas applications",
        "Tutoring supports subjects and technique",
      ],
    },
    {
      heading: "IB Maths and the sciences: what Ramgarh students should expect",
      paragraphs: [
        "IB Maths comes in two forms. Analysis and Approaches is algebra, calculus and proof heavy, and suits future engineers. Applications and Interpretation is statistics and modelling heavy, and suits future economists and social scientists.",
        "Physics and Chemistry at Higher Level demand quick, accurate work. Physics students must handle the data booklet confidently, and Chemistry students must master mechanisms and equilibrium. Both subjects include an internal investigation that needs a real experimental question.",
        "Biology marks depend on precise command-term answers and on careful reading of graphs and data. Many students know the content and lose marks on wording.",
        "A tutor with recent experience of the syllabus can identify these habits quickly. For a student from JAC or CBSE, targeted practice of a few months often gives more benefit than general revision.",
      ],
      bullets: [
        "AA for algebra and calculus, AI for data and modelling",
        "HL sciences demand speed and accuracy",
        "Biology marks depend on command-term precision",
        "Recent syllabus experience helps a tutor spot habits early",
      ],
    },
    {
      heading: "Core or Extended IGCSE for a child moving from Ramgarh?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in maths and sciences. Core caps the grade lower, and Extended allows the full range, so Extended is usual for students who may go on to the IB Diploma or A Levels.",
        "When a posting leads to a new school, the school usually chooses the tier. Tutoring then works within that decision, closing the gap between where the child is and what the paper asks.",
        "Additional Mathematics 0606, where offered, builds algebra and calculus for later study. Extended sciences make the transition to Diploma Physics and Chemistry easier.",
        "Edexcel has its own wording and structure. A child arriving from an Edexcel school should work with a tutor who knows those papers.",
      ],
      bullets: [
        "Core limits the top grade; Extended does not",
        "The new school often sets the tier",
        "Additional Mathematics prepares for Diploma Maths",
        "Edexcel needs a tutor who knows its papers",
      ],
    },
  ],

  tutorsIntro:
    "Every tutor below teaches live on video. For a family in Ramgarh that means a laptop at your own table, one adult teacher, one child, and a syllabus chosen to match the class the child is actually in or is about to join.",

  process: [
    { title: "Write to us", description: "Say which board or programme, which subject and level, where your child's marks stand, and which hours the household really has free." },
    { title: "Read the shortlist", description: "A few tutors come back with the reason each was chosen, weighted towards recent teaching of your exact course, since nobody local will have it." },
    { title: "Watch a trial lesson", description: "A complete free lesson on a topic from your child's syllabus, with no fee and nothing to sign." },
    { title: "Settle the first month", description: "The tutor proposes topics and a weekly pattern, and you accept it or ask for it to be reshaped." },
    { title: "Keep a steady slot", description: "One fixed weekly session carries on, with a check-in every few weeks and a different tutor offered if things drift." },
  ],

  whyPoints: [
    { title: "Built around moves", description: "Postings, transfers and hostel plans are part of life in this district, so bridge lessons before a new school are a core service." },
    { title: "Course-level matching", description: "A tutor is picked for your child's own IB subject and level or Cambridge code and tier, not for a general reputation." },
    { title: "Judge it yourself", description: "The free lesson comes first, so the decision rests on what you saw on screen." },
    { title: "Coursework remains theirs", description: "Explanation, feedback and practice are all fair game; drafting or editing an assessed piece is never done." },
    { title: "A paper trail for parents", description: "Each session ends with a written note, and a longer review follows every few weeks." },
    { title: "Nothing binds you", description: "No school link, no exam board link, no term contract, and a fresh tutor whenever you ask." },
  ],

  faqs: [
    { question: "Is there an IB tutor for Ramgarh students?", answer: "Yes, and the lessons are online. IB Gram pairs Ramgarh students with tutors elsewhere in India who teach the exact IB subject and level. Sessions are live one-to-one video with a shared whiteboard. Since no IB school is confirmed in Ramgarh, we choose on syllabus fit, and a free trial lesson comes first." },
    { question: "Can my child get IGCSE tuition in Ramgarh?", answer: "Yes. IGCSE tuition for Ramgarh students runs online, matched to the Cambridge code and tier or the Edexcel specification. Common requests include Mathematics 0580, Additional Mathematics 0606 and the sciences, and lessons use official past papers and mark schemes." },
    { question: "Do tutors come to my home in Ramgarh?", answer: "No. Tutors do not visit homes in Ramgarh. In-person home tuition exists only in Gurugram and parts of Delhi NCR. Elsewhere, including Ramgarh, home tuition means online private tuition: the student learns at home on a laptop, one to one with a tutor." },
    { question: "What does IB or IGCSE tuition cost in Ramgarh?", answer: "A single figure would mislead, because the rate moves with the programme, subject, session length and how recently the tutor taught your syllabus. You receive a quote in writing before the trial lesson. Higher Level Diploma subjects generally cost more than IGCSE Core help, and there is no travel element or long contract." },
    { question: "Which IB or IGCSE schools are near Ramgarh?", answer: "None inside Ramgarh or nearby Ranchi could be confirmed. Established IB options lie in Kolkata, such as Calcutta International School, and in Delhi NCR, such as Pathways World School and GD Goenka World School. These are distant, so many families use online tuition to prepare for a move." },
    { question: "An army posting is coming. How soon before it should tutoring begin?", answer: "As early as the posting order allows, ideally one to two terms ahead. That time lets the child practise command words, written explanations and the pace of a new board before results count. Lessons can pick up straight after the move, with the same tutor, even when the new city has a different timetable." },
    { question: "Is there a free trial?", answer: "Yes. The first lesson costs nothing and uses a real topic from your child's syllabus. Nobody has to continue, and a short plan follows so you can compare it against what you saw. If the tutor does not suit your child, another one is offered." },
    { question: "Can a tutor write my child's Internal Assessment?", answer: "No, and that is a firm rule. A tutor may explain what a criterion rewards, help narrow a research question and comment on a draft, but never drafts or reworks the assessed text. Doing so would breach the IB's academic integrity policy and harm the student." },
    { question: "Which IB Diploma subjects can you cover?", answer: "Most of the subjects families in Jharkhand ask about: Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology and Hindi, with Theory of Knowledge and Extended Essay guidance. Give us the level and exam session and we will confirm who is free." },
    { question: "Do you teach younger students on MYP or PYP?", answer: "Yes. For MYP, lessons centre on criterion-based writing in the sciences and languages and on the Personal Project journal. For PYP, they centre on reading, writing, number sense and inquiry habits. Ramgarh families mostly ask because a child is about to join a new school." },
    { question: "Does online tuition really work for a demanding syllabus?", answer: "It does, and more so where no local specialist exists. Shared whiteboards, screen-shared past papers and written notes reproduce what a tutor at the desk does, and the choice of tutor widens to all of India. What you need is a laptop, steady internet and a quiet corner." },
    { question: "What checks do tutors go through?", answer: "Before an introduction each tutor is reviewed for qualifications, recent teaching of the specific subject and level, and their handling of assessment criteria. After that, the trial lesson is your own test of fit, and we swap the tutor when it is not right." },
    { question: "What is the right moment to begin tutoring?", answer: "The beginning of a course is ideal: Class 11 for the Diploma, Grade 9 for IGCSE. Where a move is planned, one or two terms before it works even better. A late start still helps when revision is targeted and papers are timed." },
    { question: "My child studies under JAC or CBSE. What changes at an IB or Cambridge school?", answer: "Mostly the way answers are judged. Content is familiar, but explanation, evaluation and independent projects carry more weight than recall. Working through a handful of past papers with a tutor before the switch removes much of the shock in the first term." },
    { question: "Can lessons avoid Chhath and puja days?", answer: "Yes. We work around Chhath, Durga Puja, Diwali and the fierce summer months, using early or late slots when needed. An extra weekly session before mocks is simple to add because everything runs online." },
    { question: "Does IB Gram have any tie to the schools or boards mentioned?", answer: "No. IB Gram is an independent tutoring service. It is not affiliated with, endorsed by or acting for any school named on this page, the International Baccalaureate, Cambridge Assessment International Education or Pearson Edexcel. Schools are listed so families can see where the nearest campuses are, nothing more." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "Browse every city we cover online." },
    { label: "IB and IGCSE tuition in Gurgaon", href: "/gurgaon/", description: "Where in-person home lessons are available." },
    { label: "IGCSE guide", href: "/igcse/", description: "Explains Cambridge and Edexcel tiers, subjects and sessions." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the six subjects and the core ask of a student." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "How MYP criteria work and what the Personal Project involves." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the final Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Which of the two Maths courses suits which student." },
    { label: "Browse tutors", href: "/tutors/", description: "See tutor profiles filtered by subject and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a brief and ask for a trial lesson." },
    { label: "IB and IGCSE tutoring in Ranchi", href: "/ranchi/", description: "The state capital, roughly 40 km from Ramgarh." },
    { label: "IB and IGCSE tutoring in Bokaro Steel City", href: "/bokaro-steel-city/", description: "A steel town to the east with the same online-only arrangement." },
    { label: "IB and IGCSE tutoring in Dhanbad", href: "/dhanbad/", description: "A coalfield city and home to IIT (ISM)." },
    { label: "IB and IGCSE tutoring in Hazaribag", href: "/hazaribag/", description: "The neighbouring district to the north." },
  ],

  closingHeading: "Ask for a trial lesson from Ramgarh",
  closingBody:
    "Write to us with the board or programme, the subject and level, and a line on where your child stands and when your household is free. A shortlisted tutor, a brief description of their teaching and a few trial times come back, all online, one to one and without cost or obligation. Reach support@ibgram.com or +91 7439 368 115 on WhatsApp, and we will begin from your child's syllabus.",
};
