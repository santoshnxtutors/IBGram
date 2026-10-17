import type { CitySeoPage } from "../types";

/**
 * /alirajpur/ - IB and IGCSE tutoring page for Alirajpur, Madhya Pradesh. Online only.
 * No IB or Cambridge/Edexcel school in Alirajpur is confirmed, so stripSchools is empty and the
 * clusters are honestly labelled nearby options reused from the Indore and Vadodara pages.
 */
export const alirajpur: CitySeoPage = {
  slug: "alirajpur",
  countryName: "Alirajpur",
  countryNameLong: "Alirajpur, Madhya Pradesh",
  demonym: "Alirajpur",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson slots that work around Bhagoria week, the June to September rains, summer power cuts and the long drive to Indore or Vadodara",
  lastUpdated: "2026-09-21",
  geo: { latitude: 22.3039, longitude: 74.3617 },
  wikipedia: "https://en.wikipedia.org/wiki/Alirajpur",
  alternateNames: ["Ali Rajpur", "Alirajpur district", "Jobat Alirajpur"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Alirajpur | Online Private Tuition",
  metaDescription:
    "Online one-to-one IB and IGCSE tutors for Alirajpur, Madhya Pradesh: Maths, Sciences, English and Hindi for students far from an IB school. Free trial.",
  h1: "IB and IGCSE Tutors and Private Tuition from Home in Alirajpur",
  heroEyebrow: "IB & IGCSE TUITION FOR ALIRAJPUR AND WESTERN MADHYA PRADESH, ONLINE",
  heroSubtitle:
    "If you are after private tuition at home for an IB or IGCSE student in Alirajpur, the practical answer is live one-to-one lessons on a laptop, taught by a tutor who has handled that exact syllabus. Alirajpur sits in the far west of Madhya Pradesh, close to the Gujarat border, and the nearest international schools are a long journey away. A good video connection takes their place without anyone leaving the district.",
  primaryKeyword: "IB and IGCSE tutors in Alirajpur",
  imageAltText: "A student in Alirajpur studying IGCSE Physics from a notebook while a tutor explains on a laptop screen",
  secondaryKeywords: [
    "IB tutor Alirajpur",
    "IGCSE tutor Alirajpur",
    "IB home tuition Alirajpur",
    "IGCSE home tuition Alirajpur",
    "IB private tuition Alirajpur",
    "IB Maths tutor Alirajpur",
    "IGCSE Maths tutor Alirajpur",
    "IB Physics tutor Alirajpur",
    "IB Chemistry tutor Alirajpur",
    "IB Biology tutor Alirajpur",
    "IB DP tutor Alirajpur",
    "IB MYP tutor Alirajpur",
    "IB PYP tutor Alirajpur",
    "IGCSE online tuition Alirajpur",
    "online IB tutor Madhya Pradesh tribal district",
    "IB tutor Jobat",
    "IB tutor Jhabua Alirajpur",
    "Cambridge IGCSE tutor near Dahod Chhota Udaipur",
    "online tuition for students moving from Alirajpur to Indore or Vadodara",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB subject and level or IGCSE syllabus code",
    "Live one-to-one video lessons that run on an ordinary home broadband or mobile connection",
    "A free first lesson before any fee is discussed",
    "A private service with no link to the IB, Cambridge, Pearson or any school",
  ],
  heroStats: [
    { value: "IST", label: "Lessons in Indian Standard Time" },
    { value: "PYP to DP", label: "IB stages supported" },
    { value: "Cambridge and Edexcel", label: "IGCSE boards" },
    { value: "Free trial", label: "Before you commit" },
  ],

  intro: {
    heading: "When the nearest IB classroom is a day trip away, the tutor arrives by screen",
    paragraphs: [
      "Alirajpur is one of the smaller district headquarters in Madhya Pradesh. It was carved out of Jhabua district in 2008, it has a large Bhil and Bhilala population, and its boundary runs alongside Gujarat. Schooling here is overwhelmingly government, MP Board and CBSE, with a handful of private English-medium institutions. A family asking about IB or Cambridge IGCSE is usually an exceptional case: a parent posted here as an officer, a doctor or an engineer, a household planning a move to Indore or Vadodara, or a teenager heading abroad.",
      "Our answer for them is online home tuition. The child sits at home in Alirajpur, Jobat or a nearby town with a laptop, and a tutor based elsewhere in India teaches live and one to one. Nobody travels to Alirajpur, and IB Gram's in-person home visits exist only in Gurugram and parts of Delhi NCR. What the lesson keeps from a home visit is the private, unhurried format. What it removes is the need to find a local teacher who has never seen an IB Mathematics paper.",
      "Where a family already studies with an international school in another city, we teach the syllabus code that school uses, whether that is Cambridge 0580 or an IB Mathematics Analysis and Approaches course. Where the child is still on MP Board or CBSE and preparing for a move, we start with a short diagnostic to see what the new course will ask that the old one did not.",
      "IB Gram is an independent tutoring business. We do not represent the IB, Cambridge, Pearson Edexcel or any school, and our tutors will coach a student through an Internal Assessment or an Extended Essay without ever drafting one. Your first lesson costs nothing, and the tutor sends a short written note after every session.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, plus Cambridge and Edexcel IGCSE",
      "Live video lessons only; no tutor visits homes in Alirajpur",
      "Suitable for students preparing to move to a city with an IB or IGCSE school",
      "Free first lesson and a written note after each session",
    ],
  },

  programmesIntro:
    "A family in a remote district reads the IB programmes through one question: which stage can be supported from here, and which one depends on a school that sits somewhere else? The notes below answer that for each programme.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "The PYP teaches through six shared themes instead of one textbook per subject, and ends with a pupil-led Exhibition. Tutoring for this age is light: English reading aloud, number sense, and curiosity questions the class never had time to explore.",
      countryNote:
        "A primary child in Alirajpur rarely has a PYP school nearby. Families expecting a transfer to Indore or Vadodara use a weekly lesson to get spoken English and basic problem-solving ready before the first day.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP work is assessed against published criteria, and every student completes a Personal Project at the end. Children arriving from textbook-driven boards often need help seeing what a criterion expects.",
      countryNote:
        "A Class 8 student from an MP Board background joining an MYP school usually struggles most with explaining reasoning in full English sentences. Online sessions rehearse that habit months before the move.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects across Higher and Standard Level, together with TOK, the Extended Essay and CAS. The Diploma rewards steady weekly work and punishes a sudden gap in a core subject such as Mathematics.",
      countryNote:
        "DP students connected to Alirajpur are typically boarders or relocated families, and a tutor at home in the holidays keeps Physics and Mathematics fluent while the school is closed.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The CP pairs at least two DP subjects with a career-related study and a reflective project. Very few schools in India offer it.",
      countryNote:
        "We know of no CP school in or near Alirajpur. Any CP support would be for the DP-level subjects of a student enrolled elsewhere.",
    },
  ],

  subjectsIntro:
    "Few tutors in western Madhya Pradesh have ever taught an IB Chemistry HL class. We pair your child with someone who has, and we ask early which course, which level and which school's pace the lessons should follow.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof for future engineers, with regular work on problems that do not look like the textbook example." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Modelling, statistics and technology-assisted problem solving, plus early planning of the exploration." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves, electricity and fields, with attention to units, uncertainty and data questions." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, stoichiometry, energetics and organic pathways, built around the data booklet." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and physiology, with clear command-term answers." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram fluency and examples from agriculture, migration and rural development, which suit this region well." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study reading, finance calculations and balanced recommendations." },
    { name: "IB Geography", levels: "HL / SL", description: "Population, resources and change, with river-basin and tribal-region case studies that feel close to home." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading, comparative writing and oral practice for students whose daily language is Hindi or Bhili." },
    { name: "IB Hindi A and Hindi B", levels: "HL / SL", description: "Literature analysis for first-language speakers and language acquisition for those who want the Hindi credit." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, databases and networks, with a structured approach to the programming project." },
    { name: "IB Environmental Systems and Societies", levels: "SL", description: "Ecology, resources and sustainability, using the Narmada valley and forest regions as worked examples." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies as evidence, and extended answers within the time limit." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Conversation on how knowledge is made, leading to an exhibition and essay that belong to the student." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Finding an answerable question and planning a research route. Advice only; the essay is the student's own." },
    { name: "IB MYP Mathematics and Sciences", levels: "MYP 1-5", description: "Investigation skills, written reasoning and the foundations for DP work." },
  ],

  igcseSubjectsIntro:
    "Cambridge is the usual IGCSE board across Indian international schools, with Pearson Edexcel as the second. A student who will join a school in Indore or Vadodara may not yet know which board it uses, so we confirm the syllabus code before any lesson plan is drawn up.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with advice on the right tier for the student." },
    { name: "IGCSE Additional Mathematics", levels: "Grade 10", description: "Calculus, functions and trigonometry for students aiming at IB or A Level Mathematics." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Motion, energy, electricity and waves, plus the practical-skills paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Particles, reactions, the periodic table and organic basics, with careful calculation layout." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Cells, nutrition, inheritance and ecosystems, including data-handling questions." },
    { name: "IGCSE Combined and Co-ordinated Sciences", levels: "Grade 9-10", description: "Three sciences in a single qualification, revised on one joint timetable." },
    { name: "IGCSE Computer Science", levels: "Grade 9-10", description: "Logic, algorithms and pseudocode, with short weekly programming tasks." },
    { name: "IGCSE Economics and Business Studies", levels: "Grade 9-10", description: "Definitions, diagrams and short data-response answers." },
    { name: "IGCSE English as a Second Language", levels: "Grade 9-10", description: "Reading, directed writing and speaking for students who think first in Hindi or Bhili." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Reading and writing tasks in Hindi, a realistic scoring subject for a native speaker." },
  ],

  regionsTitle: "Alirajpur and the nearby towns we teach online",
  regionsIntro:
    "Because lessons are remote, what matters is the student's circumstances and not the pin on a map. The areas below are where families have different schooling patterns, electricity and travel realities, and the notes show what we plan around.",
  regions: [
    { name: "Alirajpur town", note: "The district headquarters, with government offices, a market and the few private English-medium schools; evenings are the usual study time." },
    { name: "Jobat", note: "The second main town of the district, with its own block-level schools and families who often consider Dahod or Indore for higher study." },
    { name: "Kathiwada", note: "A smaller town near the Gujarat side, where connectivity and power can vary and lesson times are kept flexible." },
    { name: "Bhabra", note: "A market town in the north-west of the district, with families who travel to neighbouring Jhabua and Gujarat for work and study." },
    { name: "Udaigarh", note: "A block town with mostly government schooling; parents here tend to ask about Cambridge Mathematics as a stepping stone to a city school." },
    { name: "Sondwa", note: "A hill-forest block in the south, where study happens around farming seasons and intermittent connections." },
    { name: "Chandpur and Nanpur", note: "Villages and small clusters in the district where a child with a parent in government service may have a stable connection at home." },
    { name: "Government colony and officers' housing", note: "Families of postings in revenue, health, education and forest services, who move every few years and value a tutor who moves with them." },
    { name: "Narmada valley villages", note: "Settlements along the river belt in the south of the district, where monsoon roads can be cut off and online lessons stay reachable." },
  ],

  schoolClusters: [
    {
      city: "Alirajpur and its district",
      note: "We could not confirm an IB or Cambridge / Edexcel IGCSE school in Alirajpur town or Jobat. Local schools follow MP Board or CBSE.",
      schools: [],
    },
    {
      city: "Nearby: Indore",
      note: "The largest city in Madhya Pradesh, with several international school options. The journey from Alirajpur is long, so most families consider a boarding or relocation arrangement.",
      schools: ["Choithram International School", "Daly College", "The Emerald Heights International School"],
    },
    {
      city: "Nearby: Vadodara",
      note: "The closest large Gujarat city with international curricula, reachable by road through Chhota Udaipur. Families with work ties to Gujarat often look here.",
      schools: ["Navrachana International School", "VIBGYOR High School, Padra Road"],
    },
  ],
  schoolDisclaimer:
    "School names appear only to describe where students in western Madhya Pradesh sometimes go for international curricula. IB Gram has no connection with, and does not speak for, any school, board or examining body, and we have confirmed no IB or IGCSE school inside Alirajpur itself. Please check admissions and curriculum details with each school directly.",

  modesIntro:
    "Every lesson for an Alirajpur student is live and online. The three set-ups below reflect what a district with patchy travel links actually needs.",
  modes: [
    {
      title: "Weekly online home tuition",
      description:
        "A fixed weekly slot with one tutor, on a laptop or tablet at home. It is private tuition without the travel, so a student in Jobat has the same tutor quality as one in Indore.",
      bullets: [
        "One tutor matched to the subject and level",
        "Saved working and a written note after each lesson",
        "Slots moved around power cuts or festivals",
        "No tutor visits homes in Alirajpur",
      ],
    },
    {
      title: "Transfer readiness before a move",
      description:
        "For a student who will soon join an IB or IGCSE school in another city, a block of weekly lessons identifies which topics and writing habits the new course assumes, and closes those gaps before day one.",
      bullets: [
        "Diagnostic on the first lesson",
        "English writing and problem-solving practice",
        "Past-paper exposure in the new syllabus style",
        "Regular check-ins until the student settles",
      ],
    },
    {
      title: "Holiday and exam-window intensives",
      description:
        "Boarders and relocated students often come home for Diwali and summer. Short, busy blocks of lessons then keep difficult topics moving, and extra sessions are added before mocks and exams.",
      bullets: [
        "Daily or alternate-day sessions in breaks",
        "Timed papers and mark-scheme review",
        "Revision plans shared with the parent",
        "Return to a normal weekly slot afterwards",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools serve families in Alirajpur?",
      paragraphs: [
        "None that we can confirm. Alirajpur town and Jobat have government schools, CBSE-affiliated private schools and a number of MP Board institutions, but our checks of school directories, the IB's school finder and Cambridge's listings found no authorised IB or Cambridge / Edexcel IGCSE school in the district. We would rather say this plainly than fill the page with names that could mislead a parent who has already travelled far to ask.",
        "For families who want an international curriculum, the realistic options sit in other cities. Indore has the widest choice in Madhya Pradesh, including Choithram International School, Daly College and The Emerald Heights International School, all three confirmed on our Indore page. Vadodara is the nearest large Gujarat city with IB and IGCSE options, including Navrachana International School and VIBGYOR High School on Padra Road. Both are long road journeys, which is why boarding or relocation usually comes up.",
        "The households who contact us fall into a few groups. Some are officials and professionals posted to Alirajpur for a few years who do not want their children to lose an international syllabus. Some are local business or farming families planning for a child to study in a bigger city. A few are students already enrolled as boarders who need help in the holidays. In every case, the tutor supports the school route instead of replacing it.",
        "If you are undecided, a free trial lesson is a low-pressure way to see how your child responds to a teacher who works in the style of an IB or Cambridge classroom. That experience often clarifies the decision better than a brochure.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed inside Alirajpur district",
        "Indore and Vadodara are the nearest cities with options",
        "Families include posted officials, local businesses and boarders",
        "Tutoring supports a school route and never replaces it",
      ],
    },
    {
      heading: "How does IB or IGCSE compare with MP Board and CBSE for a student in Alirajpur?",
      paragraphs: [
        "MP Board is the board most students in Alirajpur district know. It is textbook-centred, taught largely in Hindi, and examined on recall of the state syllabus. CBSE, available in a few private schools, follows NCERT books and sits nearer the national entrance exams. Both give families a clear, familiar route to local colleges and to state and national competitive tests.",
        "IB and IGCSE ask for something else. The course is set by an international guide, teaching is in English, and marks go to students who can argue, apply and evaluate, not only recall. A Class 9 student who has scored well on MP Board tests may need time to learn that an IGCSE Chemistry answer wants a stated reason alongside the fact. That shift, more than the content itself, is what a tutor helps with.",
        "Language deserves a separate mention. Many children here speak Bhili or Bhilali at home and Hindi at school, with English as a third language. Switching to English-medium science and Mathematics can feel heavy. Short weekly practice in reading questions carefully, building key vocabulary and writing one clear paragraph at a time helps the student join an English-medium class without losing confidence.",
        "The table lays out the differences side by side for a family weighing a move.",
      ],
      table: {
        caption: "MP Board, CBSE and IB or IGCSE seen from Alirajpur",
        columns: ["Feature", "MP Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Usual language of teaching", "Hindi, sometimes English", "English or Hindi", "English, with a second language"],
          ["Assessment style", "Recall of the state textbook", "Recall and application", "Reasoning, evidence and evaluation"],
          ["Availability in Alirajpur", "Widespread", "A few private schools", "None confirmed; nearest in Indore and Vadodara"],
          ["Route to Indian universities", "Direct", "Direct, through CUET-UG and national exams", "Through AIU equivalence, CUET-UG and eligibility rules"],
          ["Portability after a move", "Weaker outside the state", "Strong across India", "Strong between authorised schools worldwide"],
        ],
      },
    },
    {
      heading: "How is the fee for IB or IGCSE tuition in Alirajpur worked out?",
      paragraphs: [
        "The rate for a student in Alirajpur is set by the same things that set it anywhere: the programme and level, the subject, the length of each lesson, how many lessons a week, and how experienced the tutor is with that particular syllabus. An IB Diploma HL Physics tutor with years of experience in the course costs more than a tutor for a Class 6 MYP student working on reading and number sense.",
        "Because the lessons are online, the family pays nothing towards fuel, bus fare or a tutor's travel time, a real saving in a district where the nearest city is a three or four hour journey by road. Nor is the pool of tutors restricted to those who happen to live in Alirajpur, which is the main reason families in small towns choose online over a local teacher.",
        "IB Gram does not publish prices. After a short conversation on WhatsApp about your child's class, syllabus and goal, we send a written figure. You see it before you book the free trial lesson, and if the trial does not suit, there is nothing to pay.",
        "To keep the cost proportionate, many families start with one lesson a week in the subject that worries them most, review after a month, and add hours only before mocks or for a particular gap. You can pause during harvest, festivals or a family trip and resume later, and you can change tutor at no charge if the fit is wrong.",
      ],
      bullets: [
        "Programme, level, subject, lesson length and frequency drive the rate",
        "No travel cost and no dependence on local tutor supply",
        "Written rate before the free trial",
        "Pause, reduce or change tutor whenever needed",
      ],
    },
    {
      heading: "Online home tuition, local teachers or coaching: which suits an Alirajpur student?",
      paragraphs: [
        "Alirajpur and Jobat have private teachers and small coaching classes, mostly for MP Board and CBSE subjects, and some children travel to Dahod, Jhabua or Indore for JEE and NEET coaching. Those options work well for the exams they were built for. They are less useful for an IB or IGCSE student, because the papers are written differently and the teachers may never have seen the syllabus.",
        "An online tutor from IB Gram is chosen for experience with the specific course. The lesson follows past papers from the right board, shows what an examiner's mark scheme rewards, and ends with a short written note so that parents can see progress without sitting in. Because the format is one to one, the tutor can slow down for a student who is still building English fluency.",
        "Self-study has a place in revision, and recorded lectures are useful for topics a student can review at leisure. They are weaker where feedback matters, such as extended answers, laboratory reports and oral practice. A tutor notices the small habits that cost marks, which videos cannot.",
        "The table puts the four routes side by side for a household in the district.",
      ],
      table: {
        caption: "Study routes for an IB or IGCSE student in Alirajpur",
        columns: ["Route", "Knows the IB or IGCSE course", "Feedback", "Practical fit for the district"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched to the syllabus", "Every lesson, personal", "Needs a steady connection; no travel"],
          ["Local private teacher", "Rarely, usually MP Board or CBSE", "Personal", "Easy to reach but limited for international papers"],
          ["Coaching class in Dahod, Jhabua or Indore", "No, built for JEE, NEET or boards", "Shared with a batch", "Long travel; not aligned to IB or IGCSE"],
          ["Self-study with videos", "Depends on the student", "None without review", "Flexible but unsupported"],
        ],
      },
    },
    {
      heading: "How do Bhagoria, the monsoon and summer heat shape the school year in Alirajpur?",
      paragraphs: [
        "Life in the district follows the agricultural and festival calendar closely. Bhagoria, the tribal festival celebrated in the week before Holi, draws families from villages to the weekly haats and melas in Alirajpur and Jhabua districts. Students often travel, and lessons in that week are better moved than squeezed in. Diwali, Holi and Raksha Bandhan have a similar effect on study hours.",
        "The monsoon from June to September matters in a different way. Heavy rain can damage roads in the forest and river areas, particularly in the south along the Narmada, and power and mobile signals sometimes fail. We therefore keep a plan for missed lessons: a rebooked slot within the same week, or a recorded board-work summary where the tutor agrees to it.",
        "Summers are hot, with daytime temperatures that push study into early mornings and evenings. Schools close for the vacation from May into June, which is also the moment when IB results are released in July and many boarders come home. It is a natural window for a catch-up block before the new academic year starts.",
        "The table ties the local calendar to the international exam cycle.",
      ],
      table: {
        caption: "Alirajpur's festival, weather and farm calendar against IB and IGCSE dates",
        columns: ["Months", "Local pattern", "Academic point"],
        rows: [
          ["February to March", "Bhagoria haats and Holi; wheat harvest in irrigated areas", "Mock exams and final coursework deadlines in many schools"],
          ["April to June", "Severe heat, school vacation, marriage season", "IB May and Cambridge May-June exams; boarders return home"],
          ["July to September", "Monsoon, sowing of kharif crops, Raksha Bandhan", "New academic year; IB May results in early July"],
          ["October to December", "Dussehra, Diwali, cooler weather", "Cambridge and Edexcel autumn papers; IB November session"],
        ],
      },
    },
    {
      heading: "What can an Alirajpur student do after IB or IGCSE?",
      paragraphs: [
        "A student who completes IGCSE and then the IB Diploma or A Levels has several doors. In India, the Association of Indian Universities issues equivalence certificates for IB and Cambridge results, and most universities ask for one. CUET-UG lets international-board students apply to central universities, and each course publishes its subject requirements. Engineering, medical and professional entrances have their own eligibility notes for international boards, which a family must check in the official notifications each year.",
        "For students in this part of Madhya Pradesh, the nearest strong institutions are in Indore, including IIT Indore, IIM Indore and Devi Ahilya Vishwavidyalaya, and in Vadodara, including The Maharaja Sayajirao University of Baroda. Many families also look to Delhi, Pune and Bengaluru, and a growing number consider study in the UK, Canada, Australia or the United States.",
        "Students from tribal and rural backgrounds sometimes find that scholarships, government schemes and state hostel facilities apply differently to international boards than to state ones. Ask the relevant department or institution early and keep copies of the written reply.",
        "A tutor's role here is modest but useful. We help the student reach the grades those pathways need, and we point parents towards the official sources instead of guessing. Tutors do not write personal statements, essays or applications.",
      ],
      bullets: [
        "AIU equivalence is often needed for Indian universities",
        "CUET-UG, JEE and NEET have their own rules for international boards",
        "Indore and Vadodara are the nearest strong study cities",
        "Always confirm scholarship and hostel rules with the provider",
      ],
    },
    {
      heading: "What do IB Mathematics and the IB sciences demand, and how does a tutor help?",
      paragraphs: [
        "IB Mathematics comes in two courses. Analysis and Approaches suits students who like algebra and calculus and who might study engineering, the physical sciences or economics. Applications and Interpretation leans towards data, modelling and technology. A student from MP Board or CBSE often finds both courses lighter on routine drill and heavier on explanation, and the written exploration asks for independent work. A tutor helps choose the course, and works on unfamiliar problem types and on notation.",
        "IB Physics moves from measurement and uncertainty through mechanics, thermal physics, waves and electricity to fields and, at HL, quantum and nuclear ideas. Students are expected to handle data, draw conclusions from graphs and answer open questions in a few well-chosen sentences. A tutor rehearses that style with past questions and clear working.",
        "IB Chemistry and Biology share a habit of precise language. A Chemistry answer has to name the species, the change and the reason. A Biology answer has to use accepted terms instead of loose descriptions. We spend time on command terms such as describe, explain, evaluate and compare, because knowing what each one wants is worth marks across the paper.",
        "Each science also has an Internal Assessment, which is the student's own investigation. The tutor can discuss method, variables and data analysis, and can give feedback on structure. The student writes the work. That boundary is one we hold firmly.",
      ],
      bullets: [
        "Choose between Analysis and Approaches and Applications and Interpretation early",
        "Practise command terms as much as content",
        "Use past papers under timed conditions",
        "Advice on Internal Assessments, never authorship",
      ],
    },
    {
      heading: "How do Core and Extended IGCSE differ, and which subjects should a student take?",
      paragraphs: [
        "Most Cambridge IGCSE subjects are offered at two tiers. Core papers cover the essential syllabus and cap the grade at C in most subjects. Extended papers cover additional topics and allow grades up to A*. A student aiming for IB Mathematics or A Level sciences afterwards should usually sit Extended, because the extra topics are the ones later courses assume.",
        "Choosing subjects is a balance. A typical plan has English, Mathematics, at least two sciences, a language, and one or two subjects suited to the student's interests, such as Computer Science, Economics or Geography. For a child who may move to a school that has already set its choices, a tutor can keep options open by covering the topics that most courses share.",
        "For students in Alirajpur, some practical points apply. English as a Second Language is worth serious preparation, because it supports every other paper. Hindi as a Second Language is often a dependable subject for a native speaker. Practical papers in Physics, Chemistry and Biology are a particular challenge where the student has limited laboratory exposure, and alternative-to-practical papers need regular rehearsal.",
        "Edexcel papers differ slightly in layout and emphasis from Cambridge, so the tutor confirms the board before choosing materials.",
      ],
    },
  ],

  process: [
    { title: "Share the brief", description: "Message us on WhatsApp with the class, board, subject and any school in another city you are considering." },
    { title: "Get matched", description: "We suggest a tutor who has taught that precise course, with a short profile and a written rate." },
    { title: "Take the free trial", description: "A first lesson online, with a chance to meet the tutor and test the connection from home." },
    { title: "Fix a weekly plan", description: "Agree a slot that suits power, travel and festivals, and a first-month goal." },
    { title: "Review each month", description: "Read the written notes, adjust hours, and change tutor if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched to the syllabus", description: "Tutors have taught your exact IB course or IGCSE code, not just the subject name." },
    { title: "Works without a local school", description: "You do not need an IB or IGCSE school in Alirajpur for lessons to begin." },
    { title: "Patient with English transition", description: "Tutors slow the pace for students moving from Hindi-medium learning." },
    { title: "Notes for parents", description: "A written summary after every session, so progress is visible from a distance." },
    { title: "Flexible around local life", description: "Slots move for Bhagoria, the monsoon, harvest and travel." },
    { title: "Honest boundaries", description: "No guarantees and no ghost-written coursework, only teaching and feedback." },
  ],

  tutorsIntro:
    "Our tutors are based across India and teach in Indian Standard Time. Each has worked with the specific syllabus they teach, and we match by course rather than by subject label.",

  faqs: [
    {
      question: "Is there an IB or IGCSE school in Alirajpur?",
      answer:
        "We could not confirm one. Alirajpur's schools follow MP Board or CBSE, and our checks of the IB and Cambridge school lists found no authorised school in the district. The nearest cities with IB or IGCSE options are Indore in Madhya Pradesh and Vadodara in Gujarat. Online tutoring lets a student prepare for or continue such a course without waiting for a school to open nearby. Please verify any school's status directly before applying.",
    },
    {
      question: "Do tutors come to my home in Alirajpur?",
      answer:
        "No. Tutors do not visit homes in Alirajpur, and in-person home tuition runs only in Gurugram and parts of Delhi NCR. What we offer here is online home tuition: a live private lesson that your child takes at home on a laptop or tablet, with a tutor elsewhere in India. The format keeps the one-to-one attention of a home tutor, and you are not limited to whoever lives in the district.",
    },
    {
      question: "What internet speed does my child need for online lessons?",
      answer:
        "A stable connection matters more than a fast one. Video lessons generally work on a typical home broadband line or a good 4G mobile signal, and a laptop with headphones gives the clearest experience. If the signal is weak where you live, tell us in the first message. We can shift to a time of day when it is steadier, and tutors can switch to audio with shared notes for a short while if needed.",
    },
    {
      question: "How much does IB or IGCSE tuition cost for students in Alirajpur?",
      answer:
        "There is no fixed price list. The rate depends on the programme and level, the subject, lesson length, weekly frequency and the tutor's experience with your syllabus. Because lessons are online, there is no travel cost. We send a written rate before the free trial, so you can decide with the figure in front of you, and you can reduce or pause the hours at any time.",
    },
    {
      question: "My child studies in an MP Board Hindi-medium school. Can they switch to IGCSE?",
      answer:
        "Yes, with preparation, and the main gap is usually English-medium reasoning and not the content. We begin with a diagnostic lesson, then build English vocabulary for Mathematics and Science, practise writing short structured answers, and move into past-paper questions. Most families plan six to twelve months before a change of school, and we suggest choosing Extended tier where the student aims to continue to A Level or IB.",
    },
    {
      question: "Can a tutor help with the IB Internal Assessment or Extended Essay?",
      answer:
        "A tutor can coach you on both, but never write them. Help includes choosing a question that can be answered in the limits, planning method, discussing how to analyse data, and giving feedback on structure and clarity. The student writes every word. IB Gram tutors do not produce IAs, Extended Essays, TOK essays or any other assessed work, and we would end an arrangement that asked for that.",
    },
    {
      question: "Which exam sessions apply, and when should a student start preparing?",
      answer:
        "IB Diploma exams run in May and November, with results in July and January. Cambridge IGCSE has sessions in February and March, May and June, and October and November, and Edexcel runs January, May and June, and November sessions. Start topic revision at least six months ahead, then shift to timed papers in the last two months. Your school or exam centre confirms the dates that apply to your child.",
    },
    {
      question: "Does Alirajpur's monsoon or power supply affect online lessons?",
      answer:
        "It can, which is why we plan for it. Heavy rain between June and September may interrupt roads, power and mobile signals, particularly in the southern river belt. Keep a charged laptop and a phone hotspot as a backup, and tell the tutor early if a storm is forecast. Missed lessons are rebooked within the week, and the tutor may share worked board-notes afterwards.",
    },
    {
      question: "Can my child take lessons in Hindi?",
      answer:
        "Partly. IB and IGCSE exams are set in English for most subjects, so the tutor teaches in English, but many tutors can explain a hard idea in Hindi first and then rebuild it in English. This works well for a student making the switch from a Hindi-medium school. Hindi itself is also available as an IB Hindi A or B and as IGCSE Hindi as a Second Language.",
    },
    {
      question: "Can a child from a tribal or rural family join?",
      answer:
        "Yes. Our lessons depend only on a device and a workable connection, not on where a family lives or what it does. Some government and private scholarship schemes have conditions tied to the board or the school, so ask the scheme's office in writing how they treat IB and IGCSE. We will teach the same way whichever scheme applies.",
    },
    {
      question: "What is the difference between IGCSE Core and Extended?",
      answer:
        "Core covers the essential topics and limits the top grade, while Extended adds further topics and opens the full range up to A*. A student planning IB Mathematics, A Level or competitive science courses should usually prepare for Extended. We check past scores in the first lesson and, if needed, recommend a tier that matches the student's current level and future plans.",
    },
    {
      question: "Do you teach Mathematics AA or AI, and how should we choose?",
      answer:
        "We teach both Analysis and Approaches and Applications and Interpretation, at HL and SL. Analysis and Approaches suits students going on to engineering, physics or pure mathematics, while Applications and Interpretation suits students heading towards social science, business or design. Ask the school about its offer, and let a trial lesson show how your child responds to each style of problem.",
    },
    {
      question: "Can my child continue lessons if we move to Indore or Vadodara?",
      answer:
        "Yes, and this is one of the main reasons families choose online tutoring. The tutor, the lesson slot and the progress notes all stay the same after a move, since lessons travel with the student. If the new school follows a different board, the tutor adapts the plan within a session or two, and you can also ask for a fresh match.",
    },
    {
      question: "How do I get started, and is the first lesson really free?",
      answer:
        "Yes, the first lesson is free. Send us a WhatsApp message on +91 7439 368 115 or an email to support@ibgram.com with the class, syllabus and subject. We reply with a tutor profile and a written rate, then arrange the trial at a time that suits your household. If the tutor is not right, tell us and we will match another.",
    },
    {
      question: "Is IB Gram connected with the IB, Cambridge, Pearson or any school?",
      answer:
        "No. IB Gram is an independent tutoring service. We are not affiliated with or endorsed by the International Baccalaureate, Cambridge, Pearson Edexcel, or any school named on this page. Names of schools appear only to help families understand where students in this region sometimes go for international curricula. Always confirm admissions, fees and curriculum details with the school itself.",
    },
    {
      question: "What if my child is in Class 11 and already behind in Physics?",
      answer:
        "Catch-up is common and manageable. We start by locating the exact topics where understanding broke, usually mechanics, energy or electricity, then rebuild them with short problem sets and explanation. Two or three lessons a week for a few weeks often steadies a student, after which one weekly lesson keeps pace with the school. The earlier we start, the lighter the workload feels.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The national page, covering every city where IB Gram tutors teach online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB subject support from PYP to DP." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE tuition, subject by subject." },
    { label: "IB Diploma Programme tuition", href: "/programmes/dp/", description: "What DP tutoring covers across six subjects and the core." },
    { label: "IB MYP tuition", href: "/programmes/myp/", description: "Criteria, the Personal Project and Class 6-10 support." },
    { label: "IB Mathematics tuition", href: "/courses/ib/mathematics/", description: "Analysis and Approaches and Applications and Interpretation." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of IB Gram tutors and their syllabus experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write to us or message on WhatsApp to book a free trial." },
    { label: "IB and IGCSE tutors in Indore", href: "/indore/", description: "The nearest large Madhya Pradesh city with international school options." },
    { label: "IB and IGCSE tutors in Vadodara", href: "/vadodara/", description: "The nearest large Gujarat city with IB and IGCSE schools." },
    { label: "IB and IGCSE tutors in Ratlam", href: "/ratlam/", description: "A western Madhya Pradesh neighbour with a similar school picture." },
  ],

  closingHeading: "Start with one free lesson from your own home in Alirajpur",
  closingBody:
    "Tell us the class, the syllabus and what worries you most. We will suggest a tutor, send a written rate and arrange a trial lesson at a time that suits your household. Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com, and you will have an answer without any visit, commute or commitment.",
};
