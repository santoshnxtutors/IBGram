import type { CitySeoPage } from "../types";

/**
 * Sarni (Betul district, Madhya Pradesh), a power and coal town. No IB or Cambridge/Edexcel school
 * could be confirmed there, so stripSchools is empty. Clusters point to Nagpur, Bhopal and Indore, reusing
 * school names already verified on the published Nagpur, Bhopal and Indore pages.
 */
export const sarni: CitySeoPage = {
  slug: "sarni",
  countryName: "Sarni",
  countryNameLong: "Sarni, Madhya Pradesh",
  demonym: "Sarni",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons set around parents' shift changes at the power station and mines, with light weeks near Makar Sankranti and Diwali",
  lastUpdated: "2026-09-21",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  geo: { latitude: 22.104, longitude: 78.173 },
  alternateNames: ["Sarni Betul", "Sarni Madhya Pradesh", "Sarni Pathakhera", "Satpura Sarni"],
  wikipedia: "https://en.wikipedia.org/wiki/Sarni,_India",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sarni MP | Online Private Tuition",
  metaDescription:
    "IB and IGCSE tutors for Sarni, Madhya Pradesh: live private online lessons for PYP, MYP, DP and IGCSE, for power and coal-belt families, with a free trial.",
  h1: "IB and IGCSE Tutors and Online Private Tuition in Sarni",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR SARNI AND PATHAKHERA",
  heroSubtitle:
    "Looking for home tuition in Sarni for an IB or IGCSE student? Here it means a private lesson taught live on video, booked for an hour that suits a parent's shift rota. No tutor travels to Sarni or Pathakhera, yet the teacher is chosen for the syllabus and never restricted to whoever lives in Betul district.",
  primaryKeyword: "IB and IGCSE tutors in Sarni",
  imageAltText: "A student in a Sarni power-colony home studying IB Physics on a laptop with a live online tutor",
  secondaryKeywords: [
    "IB tutor Sarni",
    "IGCSE tutor Sarni",
    "IB home tuition Sarni",
    "IGCSE home tuition Sarni",
    "IB private tuition Sarni",
    "IB Maths tutor Sarni",
    "IGCSE Maths tutor Sarni",
    "IB Physics tutor Sarni",
    "IB Chemistry tutor Sarni",
    "IB Biology tutor Sarni",
    "IB DP tutor Sarni",
    "IB MYP tutor Sarni",
    "IB PYP tutor Sarni",
    "IGCSE online tuition Sarni",
    "online IB tutor Sarni Madhya Pradesh",
    "Cambridge IGCSE tutor Sarni",
    "Edexcel IGCSE tutor Sarni",
    "IB tutor Pathakhera",
    "IGCSE tutor Shobhapur Colony",
    "IB tutor Bagdona",
    "IB tutor Betul district",
    "IB Economics tutor Sarni",
    "IGCSE Additional Maths tutor Sarni",
    "online home tuition Sarni IB board",
  ],

  heroTrustPoints: [
    "Every lesson is live and one-to-one, matched to the syllabus code your child studies",
    "Nobody visits homes in Sarni, because all teaching here is online",
    "A free trial lesson comes first, with no obligation attached",
    "IB Gram is independent of each school, board and exam body mentioned",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB coverage" },
    { value: "Two IGCSE boards", label: "Cambridge and Edexcel" },
    { value: "Shift-friendly", label: "Flexible weekly slots" },
    { value: "Free trial", label: "First lesson on us" },
  ],

  intro: {
    heading: "An international syllabus in a Satpura power-and-coal town",
    paragraphs: [
      "Picture the Satpura hills in southern Madhya Pradesh and you land on Sarni, a Betul district town that grew around the Satpura Thermal Power Station and the Pathakhera collieries of Western Coalfields. The municipal council stitches together Sarni, Pathakhera, Shobhapur Colony and Bagdona, and literacy runs well above the state average. Classrooms follow MP Board or CBSE, and we were unable to confirm any IB, Cambridge or Edexcel school inside the town.",
      "Enquiries about IB and IGCSE tend to come from households that did not begin in Sarni. A plant engineer or a mine manager is posted here from a metro, bringing a child who has already started an international course, or expecting another transfer within a few years. For such parents a qualification that moves with the family is a sensible precaution and has little to do with status.",
      "Since no classroom in town offers the course, the teaching arrives over broadband. The tutor and student meet on video once or twice a week, work through problems on a shared whiteboard, and plan private entry for the papers. Gurugram and parts of Delhi NCR are the only places IB Gram sends anyone to a doorstep, so Sarni gets the discipline of a home tutor without the knock at the door, and with a specialist who could be living anywhere in India.",
      "Tutors teach and give feedback, and that is the boundary. They do not write IAs, Extended Essays, TOK essays or coursework, and every submitted word belongs to the student. No link exists between IB Gram and the IB, Cambridge, Pearson Edexcel or any school we mention here.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP all supported by live tutors",
      "Cambridge and Pearson Edexcel IGCSE across sciences, Maths, languages and business",
      "Lessons scheduled around shift work, delivered online",
      "A free first lesson, then a written plan you may accept or change",
    ],
  },

  programmesIntro:
    "With no IB classroom in town, every stage of the IB reaches a Sarni child through a tutor instead. What that looks like changes with age, so each programme below carries its own note.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning revolves around six shared themes, and pupils help pick the questions they chase. It ends with the Exhibition, an investigation of a genuine issue presented to an audience.",
      countryNote:
        "Hindi dominates at home across Sarni and some families with ties to Nagpur also speak Marathi, so primary sessions spend time on spoken English and on turning a curious thought into a complete, clear sentence.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are graded against criteria on a one-to-eight scale. A Personal Project in the final year lets each student plan, build and evaluate a piece of work alone.",
      countryNote:
        "Criterion-based marking is unfamiliar to a child raised on MP Board or CBSE papers, so the tutor rewrites each descriptor as concrete steps and lays a stronger answer beside a weaker one.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students study six subjects, three of them at Higher Level, along with a long essay, Theory of Knowledge and service-based activity. External papers are sat every May.",
      countryNote:
        "Diploma candidates connected to Sarni are typically mid-course transfers or registered at a school in another city, which is why one weekly tutor can hold the syllabus steady when a posting changes.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pair of Diploma courses sits alongside a career-related qualification, a reflective project and a skills strand, designed for applied learners.",
      countryNote:
        "You will seldom meet the CP in this corner of Madhya Pradesh. If your child holds a seat elsewhere, we coach the Diploma courses within it exactly as we would for a full Diploma load.",
    },
  ],

  subjectsIntro:
    "These are the courses Sarni parents ask about most. A tutor who has taught the course recently is assigned, preferably one used to students working from a company colony.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Proof, calculus, sequences and vectors, with HL Paper 3 drills and an Exploration drawn from an interest such as turbines or mining." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, modelling and calculator technology, suitable for future business, science or social-science students." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, fields and circuits, made concrete for children who grow up beside a large generating station." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Energetics, combustion, equilibrium and organic chemistry, with lab technique demonstrated on camera." },
    { name: "IB Biology", levels: "HL / SL", description: "From cells to ecosystems, with investigation topics drawn from Satpura forest and reservoir life." },
    { name: "IB Economics", levels: "HL / SL", description: "Markets, energy pricing and development, with coal and electricity supplying material for the commentary portfolio." },
    { name: "IB Business Management", levels: "HL / SL", description: "Analysis of unseen cases and a research project centred on a nearby shop or service firm." },
    { name: "IB Design Technology", levels: "HL / SL", description: "The design cycle, materials and a documented prototype, well suited to engineering-minded teenagers." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Comparing texts in essays, commenting on unseen passages and rehearsing the oral." },
    { name: "IB Hindi A Literature", levels: "HL / SL", description: "Guided reading of set works and analytic writing in the language most students speak at home." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming, networks and databases, ending in a working product with documentation for the IA." },
    { name: "IB Geography", levels: "HL / SL", description: "Resources, energy and change, using coal extraction and thermal generation as local case studies." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Energy systems, forest ecology and water use across the Satpura landscape." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Questions about what we know and how we know it, with the exhibition and essay staged over months." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Finding a researchable question and shaping an argument, while the writing itself stays with the student." },
  ],

  igcseSubjectsIntro:
    "A Sarni IGCSE candidate normally studies beside an MP Board or CBSE school and enters the papers privately through an approved centre. We pair students with tutors by board, code and tier, preferring those who have coached independent candidates before.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, number, shape and data, with calculator and non-calculator papers practised apart." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 9-10", description: "Functions, trigonometry and calculus, a solid stepping stone to IB Maths or engineering." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Edexcel phrases questions in its own way, so practice uses genuine past papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, electricity, waves and heat, with equation handling and graph reading at the centre." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Stoichiometry, fuels, electrolysis and organic chemistry, plus a dry run of the practical paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Cells, inheritance, body systems and ecology, plus regular data questions." },
    { name: "IGCSE Combined and Coordinated Sciences", levels: "0653 / 0654", description: "All three sciences folded into one weekly plan that a student can realistically follow." },
    { name: "IGCSE Economics 0455", levels: "Class 9-10", description: "Precise definitions, neat diagrams and evaluation, drawing on mining and energy cases." },
    { name: "IGCSE English as a Second Language 0510", levels: "Class 9-10", description: "All four language skills, for students whose home language is Hindi or Marathi." },
    { name: "IGCSE Business Studies 0450", levels: "Class 9-10", description: "Applying vocabulary to the business scenario that sits on the paper." },
    { name: "IGCSE Computer Science 0478", levels: "Class 9-10", description: "Python, pseudocode and logic gates, aimed at the problem-solving paper." },
    { name: "IGCSE Geography 0460", levels: "Class 9-10", description: "Physical and human geography, using energy and hill-forest case studies." },
  ],

  regionsTitle: "Sarni, Pathakhera and nearby areas we support online",
  regionsIntro:
    "Since teaching happens on video, this list exists so a tutor can picture a student's evening routine, internet and household timing, not so that anyone can plan a journey.",
  regions: [
    { name: "Sarni town centre", note: "The main market and municipal core, home to trading families and fairly dependable evening broadband." },
    { name: "Satpura Thermal Power Station colony", note: "Staff housing for engineers, technicians and managers, many on transfer and used to comparing boards." },
    { name: "Pathakhera", note: "The coal-mining end of the municipality, tied to Western Coalfields shift timings and colony life." },
    { name: "Shobhapur Colony", note: "A neighbouring settlement inside the municipal limits, with staff and local families living side by side." },
    { name: "Bagdona", note: "The fourth part of the municipal council, nearer open country and the forest edge." },
    { name: "Satpura Dam and reservoir side", note: "Wooded surroundings where families prize a quiet desk but sometimes lose power during storms." },
    { name: "Mathardev hill", note: "The temple hilltop that anchors local festivals and so shapes holiday planning." },
    { name: "Baretha and the NH69 link", note: "The road corridor that connects Sarni to the national highway, used by families heading to Betul and Nagpur." },
    { name: "Chhindwara road side", note: "The north-western route along State Highway 43, used by households with relatives in Chhindwara." },
    { name: "Ghoradongri and Betul side", note: "The nearest railway point and district links, where mobile data can be patchier." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service. The schools below are merely the closest ones we were able to check; none of them has reviewed this page, and we have no partnership, contract or endorsement with any of them, the IBO, Cambridge or Pearson Edexcel. No IB or IGCSE school in Sarni itself could be confirmed, so none is named.",
  schoolClusters: [
    {
      city: "Sarni and Betul district",
      note: "We checked for an IB World School or an approved Cambridge or Edexcel centre in Sarni and across Betul district and found neither, so this list stays empty. Local classrooms teach MP Board or CBSE, and an international course arrives through a tutor plus private exam entry.",
      schools: [],
    },
    {
      city: "Nearby: Nagpur",
      note: "About 225 kilometres to the south, Nagpur has an airport and the nearest verified IB and Cambridge campuses for many Sarni households. Some weigh boarding or relocation there at Class 9 or Class 11.",
      schools: ["D Y Patil International School, MIHAN", "Centre Point School International", "VIBGYOR World Academy", "International School of Scholars"],
    },
    {
      city: "Nearby: Bhopal",
      note: "Around 200 kilometres north, the state capital has a residential Cambridge school and a school running an IB continuum, making it the obvious choice for families who would rather remain in Madhya Pradesh.",
      schools: ["Shrewsbury International School India", "Eastern Public School, Bhopal (IB PYP, MYP and Diploma Programme, plus Cambridge IGCSE at Class 9-10)"],
    },
    {
      city: "Nearby: Indore",
      note: "Madhya Pradesh's biggest school market lies further west and offers established IB and Cambridge day and boarding choices.",
      schools: ["Choithram International", "Daly College Indore", "Emerald Heights International School"],
    },
  ],

  modesIntro:
    "Sarni households usually settle into one of three arrangements. The right choice turns on the child's school, the exam target and how permanent the family's posting looks.",
  modes: [
    {
      title: "A standing weekly slot with one tutor",
      description:
        "One tutor, one student and one agreed hour on video, using a digital whiteboard, worked examples and a short written summary sent once the lesson ends.",
      bullets: [
        "Timings chosen around the parents' shift rota",
        "A single tutor who learns how the student thinks",
        "Extra sessions added ahead of mock exams",
        "Notes that let parents follow progress without guessing",
      ],
    },
    {
      title: "Steady teaching through a transfer",
      description:
        "When a parent is posted elsewhere, the tutor keeps the IB or IGCSE course moving while the family changes school, town or state.",
      bullets: [
        "The same tutor before, during and after the move",
        "Gaps from a mid-year switch spotted early",
        "Content lined up between two schools with different pacing",
        "No break in lessons while boxes are packed",
      ],
    },
    {
      title: "Private-candidate exam plan",
      description:
        "For students sitting papers outside a school, the calendar is counted back from exam day and filled with timed papers, mark schemes and frank advice on entry.",
      bullets: [
        "A calendar that names each paper from week one",
        "Timed practice returned with written comments",
        "Guidance on centres reachable from Sarni, Nagpur or Bhopal",
        "Plain progress notes for parents",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Sarni?",
      paragraphs: [
        "Not one that we could verify. Every Sarni school we looked at teaches MP Board or CBSE, and none appears on the list of authorised IB World Schools or among Cambridge and Edexcel exam centres. A claim we cannot confirm stays off the page, which is why the local school list above is empty.",
        "Checking the rest of Betul district produced the same answer, so the practical question becomes distance. Nagpur sits roughly 225 kilometres south and Bhopal about 200 kilometres north, and both have campuses we could confirm. Neither can be reached daily from a colony flat, which leaves three paths: board the child, move the household, or keep the child at home and teach the course through a tutor.",
        "Among power-station and mine families, staying put usually wins. Shift rosters and company housing tie a household to Sarni, and a child can remain in a familiar school while a specialist covers the international syllabus in the evening hours.",
        "Before anyone prices a move to another city, a free lesson in the child's weakest subject tells you a great deal. It shows whether reasoning-led questions suit the student, and it costs nothing.",
      ],
      bullets: [
        "Sarni and Betul district have no confirmed IB or IGCSE school",
        "The closest verified campuses are in Nagpur and Bhopal",
        "Families choose between boarding, moving or learning at home",
        "One free lesson helps judge the fit before a big decision",
      ],
    },
    {
      heading: "Which Sarni families ask for IB and IGCSE tuition?",
      paragraphs: [
        "A handful of household types account for most of the messages. Engineers and technical managers at the Satpura power station come first, often after postings in several states. Their children may have begun IB or Cambridge work in a big city, and a transfer to Betul district should not send them back to the start.",
        "Next are coal-belt families linked to Western Coalfields, where officers and technical staff also rotate between areas. These parents plan far ahead and lean towards engineering and geology degrees, which is why Maths and Physics dominate their requests.",
        "Doctors, teachers and administrators across the district form a third group, and they compare boards with care. Local traders from the Sarni market make up a fourth, and they tend to see IGCSE Business Studies or IB Economics as a modern road into commerce and management.",
        "Finally there are teenagers who have decided early to study abroad, usually engineering or computing. A strong IGCSE record in Maths and Physics, or a full Diploma, gives them something concrete that a small town otherwise cannot offer.",
      ],
    },
    {
      heading: "MP Board, CBSE, ICSE, IGCSE and IB: how would things change for a Sarni student?",
      paragraphs: [
        "Most Sarni pupils sit MP Board or CBSE examinations. Those papers pay for faithful recall of set content in layouts the student has seen many times, and marks leak mainly through memory slips. Results feed straight into state and national entrance routes.",
        "IGCSE and IB Diploma papers behave differently. A question may describe an unfamiliar situation and ask the candidate to defend a choice, assess a method or predict an outcome, and top marks need every reasoning step written out. A child with excellent recall can find a first past paper disorienting.",
        "Language adds another layer, since the papers are set in English while many students here studied in Hindi medium. Tutors therefore teach subject vocabulary and paragraph construction together with the content, because a sound idea worded loosely still loses marks.",
        "Where each route leads also differs. Indian board results open JEE, NEET and CUET directly. IGCSE is a Class 10 qualification that continues into A Level or the Diploma, and the Diploma supports overseas applications as well as many Indian universities through equivalence.",
      ],
      table: {
        caption: "How the boards compare for a Sarni household",
        columns: ["Board", "Seen in Sarni?", "Marks go to", "Usual next step"],
        rows: [
          ["MP Board", "Widespread in local schools", "Accurate recall of the prescribed text", "State universities, state entrance tests"],
          ["CBSE", "Offered by a number of schools", "Close NCERT knowledge and worked steps", "JEE, NEET, CUET"],
          ["ICSE and ISC", "Uncommon here", "Wide content with fluent written English", "Colleges across India and abroad"],
          ["Cambridge or Edexcel IGCSE", "No local school confirmed", "Applying ideas, method credit, tiered papers", "AS and A Level, the Diploma, or Class 11"],
          ["IB Diploma", "No local school confirmed", "Inquiry, internal assessment and final papers", "Universities abroad; equivalence plus CUET at home"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Sarni, and what shapes the quote?",
      paragraphs: [
        "Publishing one fixed figure here would be unfair to most families, because a sensible rate follows the child's needs. Once we have the brief, the number goes to you in writing ahead of the free lesson, leaving time to compare without pressure.",
        "Content is the largest factor. Higher Level sciences, IGCSE Additional Maths and Extended-tier papers call for specialists, and those are harder to find than a generalist for junior classes. Lessons per week, session length and the amount of syllabus that must be taught from scratch then adjust the monthly total.",
        "Geography does not change the price. Pathakhera, Bagdona and the town centre are charged alike because the lesson travels by broadband rather than by road. Neighbourhood tuition for board subjects may well cost less, and we will not claim otherwise, but very few nearby teachers have handled IB or Cambridge papers.",
        "When you begin matters too. Starting eighteen months before the exam keeps each week light, while starting in the final term squeezes more into every session, and the written plan spells that out. No lock-in applies, which suits families whose postings can shift at short notice.",
      ],
      bullets: [
        "The course and its level decide the opening rate",
        "Hours per week and session length move the monthly figure",
        "Starting late packs the syllabus tighter and adds lessons",
        "Nothing is charged for travel anywhere in Betul district",
      ],
    },
    {
      heading: "Online tutor, local coaching, home teacher or self-study: what works from Sarni?",
      paragraphs: [
        "Sarni is not short of coaching and private teachers for board and entrance subjects, and some do excellent work. There is no reason to drop a good local teacher for school-syllabus content, and younger children in particular gain from someone nearby.",
        "International syllabi are where the gap opens. Local batches prepare pupils for MP Board, CBSE, JEE and NEET, with notes built around those papers. Sitting IB Physics HL or IGCSE Extended Chemistry in such a batch means hours spent on material the exam never tests.",
        "A teacher who visits the house can steady confidence in one subject, yet few know IB or Cambridge papers, and no single person covers them all. Self-study from past papers works for certain older students, but with no one to mark the answers the same errors repeat until results day.",
        "An online tutor matched to the syllabus fills the hole. The household needs a reliable connection and a student who practises between lessons, and in return receives someone who has taught the exact paper. Evening slots can bend around shift changes.",
      ],
      table: {
        caption: "Ways to reach an international course from Sarni",
        columns: ["Option", "What it does well", "Where it falls short"],
        rows: [
          ["Live online private tutor", "Teaches the exact paper, with hours that bend around a rota", "Relies on steady broadband and a student who practises alone"],
          ["Neighbourhood coaching batch", "Close by, fixed timetable, known to parents", "Built for state-board and entrance syllabi instead"],
          ["Private teacher in town", "Face-to-face attention and no screen time", "Rarely trained on IB or Cambridge; seldom covers every subject"],
          ["Working alone from past papers", "Lowest cost, complete freedom of pace", "Nobody explains why marks were lost"],
          ["Boarding school in Nagpur or Bhopal", "Peers, labs and a whole campus", "Separation from home at a far higher price"],
        ],
      },
    },
    {
      heading: "How do hill weather, shift work and festivals shape the Sarni study year?",
      paragraphs: [
        "Annual rainfall in Sarni is about a metre, nearly all of it in the monsoon, while May afternoons can touch 42 degrees Celsius. Because the hottest weeks overlap with IB and Cambridge papers, we cut lesson length and move sessions into the evening whenever the heat is punishing.",
        "Rotating shifts change how a house runs. A parent coming off a night at the power station or a colliery may sleep through the afternoon, so early evening tends to be calmest. At the outset we ask about the rota and book lessons for a time when the home is quiet and an adult is within reach.",
        "The local calendar also matters. Makar Sankranti in January brings traders and performers from the wider region, and Mathardev hill draws crowds on festival days. Diwali and Dussehra remove several days each, and Holi lands just ahead of the summer papers.",
        "Counting back from the exam gives the year its shape. An IGCSE candidate aiming for May should have covered content by January, and a Diploma student should finish most teaching by the winter of the final year, with mocks in December and January and IA deadlines plotted early.",
      ],
      table: {
        caption: "Sarni through the academic year",
        columns: ["Months", "What is happening locally", "Where the work goes"],
        rows: [
          ["January to February", "Makar Sankranti, mild weather, mocks and IA dates", "Mock sittings and comments on drafts"],
          ["March to April", "Holi, climbing temperatures, state boards wrap up", "Exam technique on past papers"],
          ["May to June", "Fiercest heat, live IB and Cambridge papers", "Short evening sessions and gentle revision"],
          ["July to September", "Monsoon rain, a fresh school year begins", "Laying foundations, with spare slots for outages"],
          ["October to December", "Dussehra, Diwali, Cambridge autumn series", "Reduced workload and resit preparation"],
        ],
      },
    },
    {
      heading: "Where can Sarni students go after an international course?",
      paragraphs: [
        "Young people finishing IGCSE or the Diploma in Sarni almost always intend to leave for college. Nagpur, Bhopal, Indore, Pune and Delhi are the usual Indian destinations, and the UK, Canada and Australia the usual ones abroad.",
        "Within India, the Association of Indian Universities recognises the Diploma as equal to Class 12, and Diploma holders may register for CUET-UG. IGCSE on its own ends at Class 10 level, so a further stage must follow, be it A Level, the Diploma or a board Class 11. The rules for JEE and NEET applicants from international boards are revised from time to time, so verify them each year.",
        "In a town built on power and coal, engineering pulls hard. IB Maths and Physics, or IGCSE Additional Maths, develop habits that suit engineering study and open doors overseas. A few students also consider geology, mining and energy programmes at institutes around Nagpur.",
        "For applications abroad, a Diploma with Higher Level Maths and Physics backs engineering and computing, while HL Biology and Chemistry back medicine and life sciences. Picking subjects with the target degree in mind at Class 11 spares a painful change later.",
      ],
      bullets: [
        "Indian admissions treat the Diploma as equal to Class 12",
        "After IGCSE comes A Level, the Diploma or Class 11",
        "Re-read the JEE and NEET rules for overseas boards every year",
        "Let the intended degree guide each Higher Level choice",
      ],
    },
    {
      heading: "IB Maths AA or AI and the sciences: what does a Sarni tutor cover?",
      paragraphs: [
        "Maths begins with a fork between Analysis and Approaches and Applications and Interpretation. Future engineers and physicists lean towards the first, whereas would-be economists, biologists and managers often prefer the second, which stresses data and technology.",
        "Students from MP Board or CBSE Maths usually arrive with strong procedure. What they must build is the habit of explaining each line, tackling questions with no obvious template and using a graphing calculator fluently. The Exploration needs a topic chosen early and drafted steadily, and the tutor helps with planning but never writes it.",
        "In Physics, Chemistry and Biology the change is from remembering to explaining. Command terms such as suggest, deduce and evaluate have exact meanings, and tutors train students to answer the question that is actually asked. Data-based questions are repeated until graphs feel ordinary.",
        "Experimental work is planned with a home setting in mind. The Scientific Investigation can rest on everyday materials, a public dataset or a simulation, and the tutor shows what sound design looks like so that the finished piece is original and honest.",
      ],
    },
    {
      heading: "Should a Sarni IGCSE student choose Core or Extended?",
      paragraphs: [
        "Anyone likely to continue into the Diploma or A Level sciences is usually better placed on Extended. Core papers limit the top grade and leave out topics that later courses take for granted.",
        "Rather than guess, we test. A short diagnostic during the opening weeks reveals whether a student drops marks through method, arithmetic or misreading, and the tier decision follows what the pattern shows.",
        "Edexcel works on the same principle through its Foundation and Higher tiers. Higher can reach grade 9 while Foundation tops out at 5, a difference that shapes what a student can study next.",
        "Tiers can also differ by subject. A candidate might sit Extended in Maths and Physics yet Core in a subject they plan to drop, and we lay out that trade-off plainly for parents.",
      ],
    },
  ],

  tutorsIntro:
    "These tutors teach the IB and IGCSE live to Sarni students, and they are at home with Hindi-medium backgrounds, transferred families and independent exam candidates.",

  process: [
    { title: "Send your details", description: "Tell us the board, subject, level, school, any exam date and the parents' shift pattern." },
    { title: "Read the shortlist", description: "We suggest tutors whose syllabus experience fits and explain why each was chosen." },
    { title: "Attend a free lesson", description: "Your child works through a real topic on video, at no charge and with no promise to continue." },
    { title: "Sign off on a plan", description: "Weekly slots, topics, pace and fee are put in writing before you commit to anything." },
    { title: "Review together", description: "Every few weeks we look at progress and swap the tutor if the fit is poor." },
  ],

  whyPoints: [
    { title: "Candid about Sarni", description: "We confirmed no local IB or IGCSE school, and we say that openly." },
    { title: "Built for shift families", description: "Lesson times bend around night shifts and colony routines." },
    { title: "Syllabus before convenience", description: "A tutor is picked for the exact board, code and tier." },
    { title: "Judge before you pay", description: "A real lesson happens first, so the tutor is assessed on actual teaching." },
    { title: "The student's own work", description: "Tutors coach, and never write assessed pieces on a student's behalf." },
    { title: "Free to change", description: "There is no lock-in, and a new tutor is available whenever a pairing is not working." },
  ],

  faqs: [
    {
      question: "Will an IB or IGCSE tutor come to my home in Sarni?",
      answer:
        "No. Home visits run only in Gurugram and parts of Delhi NCR, so nobody will turn up at an address in Sarni or Pathakhera. Your child joins a live private video lesson at a fixed weekly hour, which keeps the rhythm of home tuition and lets us choose a specialist from anywhere in India.",
    },
    {
      question: "Is there any IB school in Sarni?",
      answer:
        "None that we could verify. Schools in Sarni follow MP Board or CBSE, and the nearest confirmed IB and Cambridge campuses are in Nagpur, roughly 225 kilometres south, and Bhopal, about 200 kilometres north. Most families leave the child in a local school and add international subjects through a tutor.",
    },
    {
      question: "How much does an IB or IGCSE tutor cost in Sarni?",
      answer:
        "The figure rests on the subject, the level, lessons per week and how much of the course has to be taught from the beginning. Travel is never charged. You receive the rate in writing before the free lesson, which lets you weigh it against local tuition and decide in your own time.",
    },
    {
      question: "Can lessons fit around my shift work at the power station or mine?",
      answer:
        "Yes. Share your rota and the weekly lesson goes where the house is quiet and a parent is reachable, often early evening. When a shift pattern changes, the slot moves instead of being dropped, and the written plan records the arrangement so expectations are clear.",
    },
    {
      question: "We may be transferred. Can tutoring continue through a move?",
      answer:
        "Yes, because the tutor teaches online and belongs to no particular town. One tutor can work with your child before, during and after a transfer and can point out gaps between two schools' pacing. This continuity is a main reason transferred families pick online tuition.",
    },
    {
      question: "Can my child sit IGCSE exams while living in Sarni?",
      answer:
        "Usually yes, through private entry at an approved centre, which might be in Nagpur or Bhopal. Enquire about centres and closing dates early. We prepare the student and help draw up the timetable, while the family takes care of registration itself.",
    },
    {
      question: "My child studies in Hindi medium. Is IGCSE realistic?",
      answer:
        "For many students, yes, given preparation. Written English is the obstacle, so tutors build subject vocabulary and paragraph structure beside the content. IGCSE English as a Second Language can run in parallel, and Diploma students may take Hindi A so that they are examined in a strong language.",
    },
    {
      question: "Which IB subjects do Sarni students request most?",
      answer:
        "Maths and Physics top the list, reflecting the engineering pull of a power-and-coal town, then Chemistry, Biology and Economics, followed by Business Management, English and Computer Science. A rarer subject is not a problem; tell us and we will search for a suitable specialist.",
    },
    {
      question: "Will the tutor write the IA or the Extended Essay?",
      answer:
        "No, and a good tutor would decline. What tutors do is explain what the criteria reward, help pick a workable topic, talk through data planning and comment frankly on drafts the student has written. Submitted work must be the student's own, or the exam body may impose a penalty.",
    },
    {
      question: "Do you support MYP and PYP as well as the Diploma?",
      answer:
        "Yes. Primary lessons centre on English reading, speaking and number sense, while MYP lessons unpack the assessment criteria and keep the Personal Project on schedule. Younger children get shorter, more frequent sessions than Diploma students do.",
    },
    {
      question: "How do Cambridge and Edexcel IGCSE differ?",
      answer:
        "They are separate awarding bodies with their own syllabus codes and paper formats. Cambridge commonly offers Core and Extended tiers, Edexcel offers Foundation and Higher, and both lead on to A Level or the IB. Tutor selection follows the board your child will actually sit.",
    },
    {
      question: "Is broadband in Sarni good enough for video lessons?",
      answer:
        "Across most of the municipal area it is, with mobile data as a fallback. Forest-edge and outlying pockets can be weaker, and monsoon storms occasionally cut service. We test the connection during the trial lesson and set aside a spare slot in the plan.",
    },
    {
      question: "How do heat and festivals affect the timetable?",
      answer:
        "May and June lessons move to the evening and get shorter. Weeks around Makar Sankranti, Holi, Dussehra and Diwali are kept light, and monsoon power dips are absorbed by a spare slot. Every such date is written into the plan, so none arrives as a surprise.",
    },
    {
      question: "When is the right time to start tutoring?",
      answer:
        "The ideal moment is the start of a course: Class 9 for IGCSE and Class 11 for the Diploma. Class 8 works well for laying English and Maths foundations. Beginning within six months of the exams is still possible, though the plan then centres on exam technique rather than full teaching.",
    },
    {
      question: "Would moving to Nagpur for an IB school be better?",
      answer:
        "It depends on your household. A Nagpur school brings classmates and a full campus, but at about 225 kilometres it means boarding or relocating, and costs climb steeply. Plenty of families try one term of online lessons first, to see if the child enjoys the reasoning-based style.",
    },
    {
      question: "Can IB students from Sarni apply to Indian universities?",
      answer:
        "Yes. The Diploma counts as a Class 12 equivalent and IB students may register for CUET-UG. IGCSE alone stops at Class 10 and needs another stage after it. Rules for JEE and NEET applicants from international boards are revised now and then, so review them every year.",
    },
    {
      question: "What happens in the free first lesson?",
      answer:
        "A shortlisted tutor guides your child through a real topic from their syllabus on video, free and with no obligation. You then receive a short note covering strengths, gaps and a suggested plan, and you choose whether to continue or request a different tutor.",
    },
    {
      question: "How do I begin?",
      answer:
        "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp, quoting the board, subject, level and school. A shortlist and evening trial times come back from us, and nothing is charged until you have met the tutor and read the plan.",
    },
  ],

  internalLinks: [
    { label: "Nagpur", href: "/nagpur/", description: "Tutoring for Nagpur, the closest big city with verified IB and Cambridge campuses." },
    { label: "Bhopal", href: "/bhopal/", description: "School context and tutoring for Madhya Pradesh's state capital." },
    { label: "Jabalpur", href: "/jabalpur/", description: "Online lessons for families in Jabalpur and eastern Madhya Pradesh." },
    { label: "Indore", href: "/indore/", description: "IB and IGCSE help for households in Indore." },
    { label: "All India cities", href: "/india/", description: "The full list of Indian cities where we teach online." },
    { label: "Gurgaon and Delhi NCR", href: "/gurgaon/", description: "The single region where an IB Gram tutor can also come to the student's home." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of tutoring across every IB programme." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel boards, tiers and subject choices in plain terms." },
    { label: "Diploma Programme", href: "/programmes/dp/", description: "Higher and Standard Level choices and the Diploma Core." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles sorted by subject, programme and experience." },
    { label: "Contact us", href: "/contact-us/", description: "Send your details and arrange a free first lesson." },
  ],

  closingHeading: "Start with a free IB or IGCSE lesson in Sarni",
  closingBody:
    "Send the board, subject, level and school, plus any exam date and your shift pattern. A tutor shortlist and trial slots will follow, and you pay nothing until you have watched a lesson. Write to support@ibgram.com or WhatsApp +91 7439 368 115.",
};
