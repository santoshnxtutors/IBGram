import type { CitySeoPage } from "../types";

/**
 * /palanpur/ - IB and IGCSE tutoring page for Palanpur, Banaskantha, Gujarat. Online-only delivery.
 * No IB or Cambridge school is confirmed inside Palanpur, so stripSchools is empty and schoolClusters
 * point honestly to Ahmedabad, Kalol and Vadodara (schools already verified on neighbouring pages).
 */
export const palanpur: CitySeoPage = {
  slug: "palanpur",
  countryName: "Palanpur",
  countryNameLong: "Palanpur, Gujarat",
  demonym: "Palanpur",
  state: "Gujarat",
  stateCode: "IN-GJ",
  flagCode: "in",
  countryCode: "IN",
  region: "Gujarat, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson slots are set around the Bhadarvi Poonam pilgrim rush towards Ambaji, the Navratri fortnight, the dry May furnace of north Gujarat and whatever term calendar your child's own school keeps",
  lastUpdated: "2026-09-21",
  geo: { latitude: 24.1725, longitude: 72.4381 },
  wikipedia: "https://en.wikipedia.org/wiki/Palanpur",
  alternateNames: ["Paalanpur", "Palanpur Banaskantha", "Banaskantha"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Palanpur | Private Online Tuition",
  metaDescription:
    "Private IB and IGCSE tuition for Palanpur, Banaskantha: live one-to-one online lessons, Cambridge and IB DP, MYP, PYP support, free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition Online in Palanpur",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR PALANPUR FAMILIES",
  heroSubtitle:
    "Private tuition from home is what most Palanpur households want, and for IB and IGCSE it has to be delivered live online, because our tutors do not travel to Banaskantha. The families who write to us are often diamond and trading households with relatives in Surat, Mumbai or overseas, parents weighing a move away from the Gujarat board, or a child studying at a campus in Ahmedabad who needs a subject specialist at the weekend.",
  primaryKeyword: "IB and IGCSE tutors in Palanpur",
  imageAltText: "Class 11 student in Palanpur working through an IB Physics problem set with a tutor on a live video lesson",
  secondaryKeywords: [
    "IB tutor Palanpur",
    "IGCSE tutor Palanpur",
    "IB home tuition Palanpur",
    "IGCSE home tuition Palanpur",
    "IB private tuition Palanpur",
    "IB Maths tutor Palanpur",
    "IGCSE Maths tutor Palanpur",
    "IB Physics tutor Palanpur",
    "IB Chemistry tutor Palanpur",
    "IB Biology tutor Palanpur",
    "IB DP tutor Palanpur",
    "IB MYP tutor Palanpur",
    "IB PYP tutor Palanpur",
    "IGCSE online tuition Palanpur",
    "Cambridge IGCSE tutor Palanpur",
    "IB tutor Banaskantha",
    "IB tutor Deesa",
    "IGCSE tutor Sardarkrushinagar",
    "online IB tuition Palanpur Gujarat",
  ],

  heroTrustPoints: [
    "One tutor for one child, chosen for the exact IB subject and level or Cambridge code and tier",
    "Every lesson is live on video; visits to your home run only in Gurugram and parts of Delhi NCR",
    "A free trial lesson before you decide anything, then a written note after each session",
    "Rates are given in writing before booking, and the tutor is changed if the fit is wrong",
  ],
  heroStats: [
    { value: "GSEB to IB", label: "Switching support for Gujarat board students" },
    { value: "PYP to DP", label: "The whole IB continuum, online" },
    { value: "IST", label: "Tutor and student on the same clock" },
    { value: "Free trial", label: "See a real lesson first" },
  ],

  intro: {
    heading: "Private tuition in Palanpur for IB and IGCSE, delivered online",
    paragraphs: [
      "Anyone in Palanpur searching for home tuition in an international curriculum meets the same practical wall: nobody who has recently taught IB Physics HL or Cambridge 0580 Extended is sitting in a Banaskantha living room. Our answer is private tuition from home in the literal sense that the student stays at home, opens a laptop and works one to one with a tutor elsewhere in India. It is a live lesson with a shared whiteboard, not a recorded course.",
      "Palanpur has long been known for its diamond merchants, many of them Jain families who built businesses in Surat, Mumbai and Antwerp while keeping ties to the town, and for the Banas Dairy cooperative that anchors the district economy. Both groups think in portable terms. A child may finish school in Ahmedabad, study abroad, or return to the family business, and a qualification that travels is easy to value. That is a large part of why IB and IGCSE questions arrive here at all.",
      "Inside the town itself, school life runs on the Gujarat Secondary and Higher Secondary Education Board, with CBSE schools growing beside it. We could not confirm an IB or Cambridge school inside Palanpur, so we say so plainly further down and point to the nearest confirmed campuses. Whichever route a family takes, the tutoring is built from the syllabus on the desk.",
      "IB Gram is an independent service. Tutors coach subjects, past papers and technique. They never write, rewrite or polish an Internal Assessment, Extended Essay, TOK essay or any other assessed work. A written note follows every lesson, and the fee is agreed in writing before the free trial.",
    ],
    bullets: [
      "IB tuition from PYP to the Diploma, and Cambridge or Edexcel IGCSE",
      "Live one-to-one video lessons in Indian Standard Time",
      "Support for GSEB and CBSE students moving into an international curriculum",
      "No home visits in Palanpur; that model exists only around Gurugram and Delhi NCR",
    ],
  },

  programmesIntro:
    "None of the four IB programmes is confirmed as taught inside Palanpur. What follows describes each stage as it usually reaches a Banaskantha household, whether through a hostel place in Ahmedabad, a business family's move, or a child coming back from abroad.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning in the PYP is organised around a few big themes rather than a timetable of separate subjects, and a child ends the stage with a self-chosen Exhibition. Tutoring at this age is light: reading aloud, comfortable number talk, and practice at explaining what they noticed.",
      countryNote:
        "For Palanpur, PYP requests tend to come from families returning after a stretch in Dubai, Hong Kong or Antwerp, who want a young child's learning kept steady while schooling here is decided.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "MYP teachers grade each piece of work against published criteria, subject by subject, and every student completes a Personal Project of their own design near the end. The shift that surprises newcomers is being asked to justify and evaluate, not just recall.",
      countryNote:
        "A Palanpur student on MYP is usually at a school in Ahmedabad or away in a hostel, so lessons are timed to a boarding or city schedule rather than local school hours.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects are studied over two years, three at Higher Level and three at Standard Level, alongside Theory of Knowledge, the Extended Essay and Creativity, Activity, Service. Internal assessments and final papers together decide the grade, and results appear in early July for the May session.",
      countryNote:
        "Diploma help for Palanpur nearly always supports a student enrolled in another city, so the plan follows that school's deadlines, not a Banaskantha calendar.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students pair a smaller set of Diploma courses with a vocational pathway, a reflective project and personal and professional skills. Few schools in India offer it, but the Diploma-level content inside it is taught in full.",
      countryNote:
        "Enquiries from Palanpur about the CP are rare. When one comes, we tutor the Diploma courses the student is actually taking and leave the vocational strand to the school.",
    },
  ],

  subjectsIntro:
    "Most requests from Palanpur are narrow and specific: a Diploma Maths gap, one science paper, an Economics essay structure. Every match therefore starts with the subject, the level and the exam session, and only then with a tutor's timetable.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Built for students heading into engineering or pure science. The HL extension work on calculus and proof is where a Gujarat-board habit of memorising methods stops paying off, so we practise unfamiliar problems." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "The syllabus leans on data, probability distributions and calculator fluency, which suits students bound for business, economics or design courses. Time goes into the modelling exploration." },
    { name: "IB Physics", levels: "HL / SL", description: "We start from the data booklet and timed mixed-topic questions, then check whether the student's practical investigation would hold up when a moderator reads it." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry usually feels comfortable for a CBSE or GSEB student. Organic mechanisms, equilibrium and energetics need slower, repeated work before Paper 2." },
    { name: "IB Biology", levels: "HL / SL", description: "Content knowledge is rarely the issue. Students lose marks on command terms and on interpreting graphs and experimental data, so we practise short explanations under a clock." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram accuracy comes first, then real examples from India and beyond, which is useful for students from business-minded families in Banaskantha." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies reward application to the firm in front of you. Students from trading households often have strong instincts that need turning into structured, terminology-led answers." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Students who think in Gujarati or Hindi need a steady routine for unseen commentary and the comparative essay, with the Individual Oral rehearsed out loud." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms and data structures are paired with actual programming, and the internal assessment product is checked for documentation that matches the working code." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies and their evaluation must be learned accurately, and extended responses are drilled for structure so that knowledge turns into marks." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Water, soil and land-use topics link well to Banaskantha's own farming and groundwater conversations, which gives students real examples for evaluation questions." },
    { name: "IB Gujarati A / B", levels: "HL / SL", description: "Text types, register and accurate written Gujarati are addressed first, with conversation practice ahead of the oral for students who mostly write in English." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Sessions are discussions about knowledge claims, with the exhibition and prescribed-title thinking practised. The essay itself remains the student's own work." },
  ],

  igcseSubjectsIntro:
    "Cambridge IGCSE is the route most Palanpur families meet first, usually through a campus in Ahmedabad or Kalol. We match tutors to the syllabus code, the tier and the exam series the student is entered for, and to Edexcel where the school or a returning family follows that board.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Moving to Extended needs quick algebra and a habit of showing method on every line, because method marks add up across a paper." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "An early meeting with calculus and functions makes the later jump to IB Maths AA far less abrupt." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Formula rearrangement and unit handling are the usual stumbling blocks, and the alternative-to-practical paper is practised from the start of the course." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, reactivity and organic basics are built up in order, with practical questions rehearsed alongside the theory." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, transport and coordination questions dominate, and longer explanatory answers are rehearsed until they are concise." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Accurate diagrams pick up quick marks, so lessons spend the real effort on the evaluative questions." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Students write and run Python in lessons, since tracing algorithms on paper only sticks after seeing them work." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and summary tasks are practised to a timer, which helps students who are fluent in speech but slow on paper." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Answers must be tied to the case in front of the student, a habit that comes naturally to children who grew up around a family shop or firm." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Reading comprehension and formal writing conventions are practised, useful for students from Gujarati-speaking homes whose Hindi is conversational." },
  ],

  regionsTitle: "Palanpur and Banaskantha localities we match tutors for",
  regionsIntro:
    "Every lesson runs over video, so the places below matter only as context: what the school catchment looks like, how far the nearest confirmed IB or Cambridge campus is, and how travel or festival crowds change an evening.",
  regions: [
    { name: "Station Road and the old town", note: "The oldest part of Palanpur around the railway line, where most families still send children to GSEB and Gujarati-medium schools." },
    { name: "Abu Highway corridor", note: "Housing and shops along the road towards Abu Road, where traffic thickens at school pick-up and again after office hours." },
    { name: "Sardarkrushinagar", note: "The agricultural university township a short drive away, home to faculty families who often keep an eye on national curricula for their children." },
    { name: "Deesa", note: "A large trading town known for potatoes, where business families ask about IGCSE mainly for children who will study away." },
    { name: "Dhanera", note: "A smaller market town in the north of the district, where secondary options are few and online lessons close a real gap." },
    { name: "Ambaji", note: "The temple town in the hills, exceptionally busy around the Bhadarvi Poonam fair, which is worth planning lessons around." },
    { name: "Abu Road and Mount Abu", note: "Just across the Rajasthan border, with its own boarding culture; some Palanpur families compare schools on both sides of it." },
    { name: "Siddhpur", note: "A historic town towards Patan, associated with both temple heritage and the Bohra community, with families active in overseas trade." },
    { name: "Thara and Vav", note: "Rural stretches of the district where connectivity, not school choice, decides whether an evening lesson is practical." },
    { name: "Mehsana side", note: "Households commuting or relocating towards Mehsana and Ahmedabad often begin lessons here and continue after moving." },
  ],

  schoolDisclaimer:
    "We could not confirm an IB or Cambridge school inside Palanpur, so every campus named below lies in another city and is mentioned only to show where families realistically look. IB Gram is independent of these schools, of the International Baccalaureate, of Cambridge Assessment International Education and of Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Nearby: Ahmedabad",
      note: "Roughly three hours by road, Ahmedabad holds the largest set of IB and Cambridge campuses in Gujarat and is where most Banaskantha families begin their search. Local choice is limited, which is why hostels and relocation come up so often.",
      schools: ["Mahatma Gandhi International School", "Ahmedabad International School", "Calorx Olive International School"],
    },
    {
      city: "Nearby: Kalol, Gandhinagar district",
      note: "A Cambridge IGCSE campus on the Gandhinagar side, closer to Palanpur than central Ahmedabad and a practical stop for families driving down from the north.",
      schools: ["Swayam Cambridge International School, Kalol"],
    },
    {
      city: "Nearby: Vadodara",
      note: "Further south, but the one Gujarat campus confirmed to run the full IB continuum alongside a Cambridge track.",
      schools: ["Navrachana International School, Vadodara"],
    },
  ],

  modesIntro:
    "The format is the same for every family in Palanpur: one tutor, one student, live on video, on Indian time. What changes is the rhythm, from a steady weekly slot to a compact holiday block. Outside Gurugram and Delhi NCR, no tutor comes to your door.",
  modes: [
    {
      title: "A fixed weekly online lesson",
      description:
        "One standing evening or weekend slot with the same tutor, using a shared whiteboard and screen. Most Palanpur families begin here.",
      bullets: [
        "The tutor can be anywhere in India",
        "Works for IB DP, MYP and IGCSE subjects",
        "Past papers marked together on screen",
        "The same tutor throughout the term",
      ],
    },
    {
      title: "Weekly lessons with a written record",
      description:
        "The same weekly slot, but each session closes with a short note on what was covered, and a longer review comes after a few weeks so parents are never guessing.",
      bullets: [
        "A note after every lesson",
        "A review every few weeks",
        "Suits younger PYP and MYP students",
        "A second weekly slot can be added quickly",
      ],
    },
    {
      title: "Holiday and pre-exam blocks",
      description:
        "A denser run of lessons across Diwali, summer or the weeks before a series, built on timed papers and quick marking and kept clear of the Ambaji fair week and Navratri evenings.",
      bullets: [
        "Papers timed and marked to the current scheme",
        "Feedback within a few days",
        "Useful for hostel students home on break",
        "Best booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Which IB and IGCSE schools can a Palanpur family actually reach?",
      paragraphs: [
        "No school inside Palanpur is confirmed to teach the IB or Cambridge IGCSE. The nearest confirmed campuses sit in Ahmedabad, in Kalol on the Gandhinagar side and in Vadodara, all a long drive from Banaskantha. That is the honest starting point for any family in the district.",
        "Ahmedabad is the natural centre of gravity. Mahatma Gandhi International School was among Gujarat's early IB World Schools, Ahmedabad International School pairs the IB with Cambridge IGCSE, and Calorx Olive International School is another established name on the western side of the city. Swayam Cambridge International School at Kalol covers the Cambridge route, and Navrachana International School in Vadodara is the state's full-continuum campus.",
        "Who asks us about this? Some are parents of a child already boarding at one of those campuses. Some are Palanpuri families in the diamond trade who move between Surat, Mumbai and overseas and want a syllabus that survives a move. A few are professionals at Sardarkrushinagar or the dairy sector who expect a posting elsewhere.",
        "For all of them the missing piece is a local specialist, and in this district there is almost none for a subject like IB Chemistry HL. Choosing the tutor from the whole country solves that in one step, and the student stays at home while it happens.",
      ],
      table: {
        caption: "Confirmed IB and Cambridge schools nearest to Palanpur",
        columns: ["School", "Where", "Curriculum"],
        rows: [
          ["Mahatma Gandhi International School", "Ahmedabad", "IB Diploma and Middle Years"],
          ["Ahmedabad International School", "Ahmedabad", "IB and Cambridge IGCSE"],
          ["Calorx Olive International School", "Ahmedabad", "International curriculum campus"],
          ["Swayam Cambridge International School", "Kalol", "Cambridge IGCSE"],
          ["Navrachana International School", "Vadodara", "IB continuum and IGCSE"],
        ],
      },
      bullets: [
        "No IB or Cambridge school is confirmed inside Palanpur",
        "Ahmedabad, Kalol and Vadodara hold the nearest campuses",
        "Demand comes from hostel families, business families and relocating professionals",
        "Specialist tutors are rare locally, so matching is national",
      ],
    },
    {
      heading: "How do Gujarat board, CBSE and ICSE differ from IB and IGCSE for a student in Palanpur?",
      paragraphs: [
        "The GSEB syllabus rewards a student who has learned the textbook thoroughly and can reproduce it in a fixed paper. CBSE is similar in spirit, though with more application in Class 11 and 12 science. Both prepare students well for GUJCET, NEET and JEE Main, and both are the sensible default for a family staying in Banaskantha.",
        "IB and IGCSE ask a different question. Cambridge Extended papers wrap familiar topics in unfamiliar scenarios, and IB marking is criterion based, giving credit for reasoning shown, not only answers reached. Students moving across usually discover that written explanation and independent projects, not the content, are what they must build.",
        "The gap is widest in the senior years. A Diploma HL science course goes beyond Class 12 in places, while IGCSE Core is about CBSE level and Extended is a step higher. Choosing the tier in Grade 9 therefore shapes how demanding the last two years feel.",
        "None of this makes one system better than another in the abstract. It decides which one fits a child's likely path, whether that is Gujarat's own admissions, a university abroad or a business career.",
      ],
      table: {
        caption: "Board comparison as seen from Palanpur",
        columns: ["Feature", "GSEB / CBSE / ICSE", "IB / IGCSE"],
        rows: [
          ["Typical school in Palanpur", "Most local schools", "None confirmed; nearest in Ahmedabad, Kalol, Vadodara"],
          ["Main assessment", "Set board papers", "Papers plus coursework or internal assessment"],
          ["Style of question", "Recall and standard application", "Analysis, evaluation, unfamiliar contexts"],
          ["Entrance route in India", "GUJCET, NEET, JEE Main directly", "AIU equivalence, CUET-UG, subject rules"],
        ],
      },
      bullets: [
        "GSEB and CBSE remain the practical choice for most Banaskantha families",
        "IB marking rewards reasoning that is shown, not only answers",
        "IGCSE tier choice in Grade 9 shapes the later Diploma jump",
        "Written explanation is the main skill to build on a switch",
      ],
    },
    {
      heading: "What decides the fee for IB or IGCSE tuition in Palanpur?",
      paragraphs: [
        "There is no published price list, and that is deliberate: two Palanpur families asking for help with different subjects are not buying the same thing. One wants IB Physics HL from someone who has taught the current syllabus. The other wants IGCSE Mathematics Core practice for a Class 9 student. The tutor pools differ in size, so the rate differs.",
        "Four things move the figure. The programme and level come first, since Diploma Higher Level teaching is scarcer than IGCSE Core. The subject matters, because sciences and Maths AA draw on fewer specialists than English. Session length and weekly frequency come next. Last is how recently and how often the tutor has taught that exact syllabus.",
        "Nothing in the fee pays for travel, because nobody travels. A tutor in another state charges the same to a student in Palanpur as to one in Ahmedabad. We quote the rate in writing before the free trial, so the number is agreed before any commitment.",
        "There is no lock-in either. Families review progress every few weeks, lessons can be paused, and if the fit is wrong we change the tutor. A clear conversation about cost early on avoids the awkward one later.",
      ],
      bullets: [
        "Level, subject, session length and tutor experience drive the rate",
        "No travel cost, because lessons are online",
        "The rate is confirmed in writing before the trial lesson",
        "No long contract; pause or stop at any time",
      ],
    },
    {
      heading: "Online tuition, coaching classes, local tutors and self-study compared for Palanpur",
      paragraphs: [
        "Palanpur's coaching classes are built around GSEB, GUJCET, NEET and JEE preparation, which serves the great majority of local students. They are not built for a Cambridge 0606 candidate or an IB Business Management student, because there are too few such students in the district to fill a batch.",
        "Local home tutors are valuable for ordinary school subjects, and many families have a trusted one. The difficulty with IB and IGCSE is currency. The syllabuses change, the command terms matter, and few people in the area have marked recent papers to the actual scheme.",
        "Self-study works better than people expect for IGCSE Mathematics, since past papers and mark schemes are free. It works badly for coursework planning and long written answers, where an experienced second reader spots what the student cannot see in their own writing.",
        "Online tuition suits Palanpur because it swaps a thin local supply for a national one while keeping lessons one to one. The student still studies at home, on a schedule the family controls.",
      ],
      table: {
        caption: "Routes to IB and IGCSE help, compared for Palanpur",
        columns: ["Route", "Syllabus match", "Attention", "Limit for Palanpur"],
        rows: [
          ["Coaching classes", "Built for GSEB, GUJCET, NEET, JEE", "Group", "No batches for IB or Cambridge subjects"],
          ["Local private tutor", "Varies by tutor", "One to one", "Few have taught the current syllabus"],
          ["Self-study", "Whatever the student finds", "None", "Coursework and extended answers go unchecked"],
          ["Matched online tutor", "Chosen for code, level and session", "One to one", "Needs a laptop and steady internet"],
        ],
      },
      bullets: [
        "Coaching in Palanpur is tuned to state and entrance exams",
        "Recent IB or Cambridge marking experience is rare locally",
        "Self-study leaves written work unreviewed",
        "Online matching brings national specialists to a local student",
      ],
    },
    {
      heading: "How do Ambaji fair week, Navratri, Uttarayan and May heat shape the study year in Palanpur?",
      paragraphs: [
        "Study planning in north Gujarat follows the calendar as much as the syllabus. The Bhadarvi Poonam fair sends walking pilgrims towards Ambaji in September, and roads and routines around Palanpur change for days. Navratri follows within weeks and takes most evenings in a household for nine nights, and Uttarayan in mid-January brings a further pause.",
        "Summer is the real endurance test. Temperatures in May climb well past 40 degrees, and power and internet reliability can wobble. We suggest shifting lessons to early morning or late evening in those weeks and keeping a backup device or hotspot ready for exam-season sessions.",
        "The academic side runs on the school's own calendar. Cambridge IGCSE holds a May-June and an October-November series. The IB Diploma sits in May with results in early July, and a November session exists for a smaller cohort. A Palanpur student in Ahmedabad follows that school, not a local one.",
        "The most useful habit is working backwards from the exam. Six to eight weeks before a series is the highest-value stretch for timed papers, and a January start for a May sitting is still worthwhile when the plan is realistic.",
      ],
      table: {
        caption: "Calendar effects on tutoring in Palanpur",
        columns: ["Time of year", "What happens", "What we adjust"],
        rows: [
          ["September", "Bhadarvi Poonam pilgrim movement towards Ambaji", "Move slots earlier or to weekends in fair week"],
          ["September-October", "Navratri nights", "Shorter early-evening lessons or weekend swaps"],
          ["Mid-January", "Uttarayan kite festival", "Skip or shift one or two days"],
          ["May-June", "Peak heat, IGCSE and IB sessions", "Early-morning slots, backup connectivity, timed papers"],
        ],
      },
      bullets: [
        "Ambaji fair week and Navratri each disturb evening routines",
        "May heat calls for early or late lesson slots",
        "The exam session follows the student's school, not Palanpur",
        "Working backwards from the series gives the best plan",
      ],
    },
    {
      heading: "Where do Palanpur students go after IB or IGCSE?",
      paragraphs: [
        "Families in the district look in three directions: Gujarat's own engineering, pharmacy and medical seats, Indian universities elsewhere, and study abroad. The last is especially natural for households whose relatives already live in Antwerp, London, Toronto or Dubai.",
        "For admission inside India, an IB or IGCSE-based qualification needs Association of Indian Universities equivalence, and the subject combination must meet the rules for NEET or JEE. CUET-UG is the main gateway to central universities. Entrance coaching, when needed, is usually a separate arrangement alongside subject tutoring.",
        "For universities abroad, predicted grades issued in Class 12 carry real weight. A UK offer generally names total IB points and Higher Level minimums. US applications treat scores as one part of a wider file, and other countries have their own equivalence tables.",
        "Our tutors stay on the academic side: depth in the subject, technique under time pressure and honest feedback on where the grade stands. We explain what a target course usually asks for, and we do not run admissions consulting.",
      ],
      bullets: [
        "GUJCET seats, NEET and JEE remain relevant for many local families",
        "AIU equivalence and subject levels matter for Indian admissions",
        "Overseas ties in the diamond trade keep study abroad realistic",
        "Tutoring targets subject depth and exam technique",
      ],
    },
    {
      heading: "Why do IB Maths and the sciences need a specialist tutor?",
      paragraphs: [
        "IB Maths splits into Analysis and Approaches and Applications and Interpretation, and the choice matters. AA suits students who enjoy algebra, calculus and proof and who expect to study engineering or physics. AI suits those who prefer data, modelling and statistics, common in business and social science routes.",
        "Physics HL rewards fast, accurate use of the data booklet and clear reasoning about unfamiliar setups. Chemistry HL leans heavily on organic reaction pathways, equilibrium and energetics. Both include an internal investigation that needs an honest method, not a copied textbook practical.",
        "Biology is often content-rich but mark-poor for students who write everything they know. Examiners reward the answer that matches the command term. Data interpretation and basic statistics complete the picture.",
        "A student from a GSEB or CBSE background usually has the knowledge and lacks the exam style. A tutor who has recently marked to the IB scheme can close that in weeks, which a general home tutor working from a textbook rarely does.",
      ],
      bullets: [
        "AA for algebra and calculus routes, AI for data and modelling",
        "Physics and Chemistry HL depend on strong investigations",
        "Biology marks depend on command-term discipline",
        "The exam style, more than the content, is the usual gap",
      ],
    },
    {
      heading: "Should a Palanpur student take IGCSE Core or Extended?",
      paragraphs: [
        "Cambridge IGCSE offers Core and Extended papers in maths and the sciences, and the choice caps the grade available. Core tops out at a lower grade, while Extended opens the full range. The decision is normally taken in Grade 9 with the teacher's advice.",
        "Students who may continue to the IB Diploma should think hard before choosing Core. Extended Mathematics, and Additional Mathematics 0606 where offered, makes Maths AA far less abrupt. Extended sciences ease the jump to Diploma Physics or Chemistry.",
        "A student at a campus in Ahmedabad or Kalol will often be placed by the school, and tutoring works inside that structure. The aim is to close the gaps a particular combination leaves, not to redesign the timetable.",
        "Families returning from an Edexcel school abroad need a tutor familiar with Edexcel's tiers and question style. The mathematics overlaps with Cambridge, but the wording and mark schemes do not.",
      ],
      bullets: [
        "Core limits the top grade, Extended does not",
        "Extended Maths helps a later move into IB Maths AA",
        "Tutoring works inside the school's chosen subject set",
        "Edexcel needs its own technique even when content overlaps",
      ],
    },
  ],

  tutorsIntro:
    "Browse tutors across the IB continuum and Cambridge IGCSE. Each lesson for a Palanpur student is live online and one to one, never at your door, and matches are made on the exact syllabus, level and exam session.",

  process: [
    { title: "Send your brief", description: "Tell us the programme or board, subject and level, current or predicted grade, and which evenings suit your Palanpur household." },
    { title: "See a shortlist", description: "We propose tutors for the syllabus first, with a reason for each, since none can be found close by for most IB subjects." },
    { title: "Take the free trial", description: "Your child works through a real topic with the tutor online, with no charge and no obligation." },
    { title: "Approve a month plan", description: "The tutor sets out topics, weekly rhythm and how progress will be reported, and you accept it or ask for changes." },
    { title: "Settle into a routine", description: "A regular weekly lesson begins, reviewed every few weeks, with a new tutor arranged if the fit slips." },
  ],

  whyPoints: [
    { title: "Syllabus before location", description: "Tutors are picked for the IB subject and level or Cambridge code and tier, wherever in India they teach from." },
    { title: "Honest about local supply", description: "We do not pretend Palanpur has an IB campus. We say where the nearest ones are and tutor around that fact." },
    { title: "See it before you pay", description: "A free trial lesson lets you and your child judge the tutor on a real topic." },
    { title: "Assessed work stays yours", description: "Tutors guide on internal assessments, essays and coursework and never write any of it." },
    { title: "Progress on paper", description: "A short note follows each session and a longer review comes every few weeks." },
    { title: "Independent and flexible", description: "No link to any school or exam board, no long contract, and a change of tutor whenever it is needed." },
  ],

  faqs: [
    { question: "Can I find an IB tutor in Palanpur?", answer: "Yes, though the tutor teaches online. IB Gram matches Palanpur students with tutors elsewhere in India who teach the exact IB subject and level, and lessons run live over video with a shared whiteboard. Because no IB school is confirmed inside Palanpur, matching depends on syllabus fit rather than distance, and a free trial lesson comes before any commitment." },
    { question: "Do you offer IGCSE tutors in Palanpur?", answer: "Yes. IGCSE tuition for Palanpur runs online and one to one, with tutors chosen for the Cambridge code and tier or the Edexcel specification your child follows. Typical requests are Mathematics 0580, Additional Mathematics 0606 and the three sciences, and we use official past papers and mark schemes throughout." },
    { question: "Do your tutors come to homes in Palanpur?", answer: "No. Tutors do not visit homes in Palanpur. In-person home tuition exists only in Gurugram and parts of Delhi NCR. For families elsewhere, including Palanpur, we offer private tuition from home over live video: the student stays at home, and the tutor teaches one to one online." },
    { question: "What does IB or IGCSE tuition cost in Palanpur?", answer: "The rate depends on programme, level, subject, lesson length and the tutor's recent experience with that syllabus, and we confirm it in writing before the free trial. Higher Level Diploma subjects generally cost more than IGCSE Core support. There is no travel cost and no long contract, so you can pause whenever needed." },
    { question: "Which IB or IGCSE schools are near Palanpur?", answer: "None inside Palanpur is confirmed. The nearest confirmed campuses are in Ahmedabad, including Mahatma Gandhi International School and Ahmedabad International School, at Kalol in Gandhinagar district, and in Vadodara. Distances are considerable, so many families combine a local school with online subject tutoring or move a child to a hostel." },
    { question: "My child studies in Ahmedabad and comes home to Palanpur at weekends. Can lessons fit that?", answer: "Yes. Lessons are online, so they can run from a hostel room on weekday evenings or from home on weekends. The tutor follows your child's school calendar for internal exams and deadlines, and we can add a block of extra sessions when a hostel term ends." },
    { question: "Is there a free trial lesson?", answer: "Yes. Every match starts with a free trial lesson on a topic from your child's real syllabus. There is no payment and no obligation, and afterwards a first-month plan is shared. You can go ahead, ask for changes or request a different tutor." },
    { question: "Can a tutor help with my child's IB Internal Assessment?", answer: "Yes, as a guide only. A tutor can help pick a workable question, explain what each criterion rewards, plan data collection and comment on drafts. Writing, rewriting or polishing assessed work breaks IB academic integrity rules, so our tutors decline those requests firmly." },
    { question: "Which IB Diploma subjects can you cover for a Palanpur student?", answer: "We cover most Diploma subjects that students from Gujarat take: Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology and Gujarati, along with Theory of Knowledge and Extended Essay guidance. Tell us the level and session, and we check availability before proposing a tutor." },
    { question: "Do you tutor IB MYP and PYP as well as the Diploma?", answer: "Yes. MYP lessons focus on criterion-based analysis in science and languages and on the Personal Project process. PYP lessons focus on reading, writing, number sense and research habits for the Exhibition. Families in Palanpur usually ask because a child is returning from abroad or changing school." },
    { question: "Is online tuition as good as face-to-face for IB and IGCSE?", answer: "For these curricula it works well. A shared whiteboard, screen-shared past papers and written notes cover almost everything a tutor at the desk would do, and it opens the pool to specialists in HL subjects who do not live near Banaskantha. Reliable internet and a quiet corner are the only requirements." },
    { question: "How do you check the tutors?", answer: "Each tutor is checked for qualifications, recent teaching of the specific subject and level, and their approach to assessment criteria before an introduction. The free trial lesson then lets you judge the fit yourself, and we arrange a different tutor if it is not right." },
    { question: "When should we start tutoring?", answer: "The best time is the start of the course, Class 11 for the Diploma or Grade 9 for IGCSE, so gaps are closed before internal exams and predicted grades. Later starts still help: focused revision on high-value topics and timed papers can move a grade before an exam series." },
    { question: "Our child is moving from a Gujarat board school to IGCSE. What help is available?", answer: "Tutors help with the shift in question style, written explanation and independent work. Content is often familiar, but command words such as evaluate and justify are new. Starting a term before the switch, with a few past papers, makes the first months at the new school far smoother." },
    { question: "Can lessons be held in the evening or at weekends?", answer: "Yes. Most Palanpur families choose weekday evenings or weekend mornings. We plan around the summer heat, the Ambaji fair week, Navratri and Uttarayan, and a second weekly slot before mocks is easy to arrange because sessions are online." },
    { question: "Is IB Gram connected to any school, or to the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service with no affiliation to, endorsement from or representation of any school named on this page, the International Baccalaureate, Cambridge Assessment International Education or Pearson Edexcel. Schools are mentioned only to show where families realistically look, and tutors follow each board's published syllabus." },
  ],

  internalLinks: [
    { label: "IB tutoring across India", href: "/india/", description: "See how IB and IGCSE online tuition works city by city." },
    { label: "IB and IGCSE tuition in Gurgaon", href: "/gurgaon/", description: "The one place where tutors visit homes in person." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and exam series explained." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How HL and SL, the core and internal assessments fit together." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, the Personal Project and how MYP work is graded." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and arrange a free trial lesson." },
    { label: "IB and IGCSE tutoring in Mahesana", href: "/mahesana/", description: "The next district south, with the same online-only setup." },
    { label: "IB and IGCSE tutoring in Ahmedabad", href: "/ahmedabad/", description: "Where the nearest confirmed IB and Cambridge campuses are." },
    { label: "IB and IGCSE tutoring in Udaipur", href: "/udaipur/", description: "A Rajasthan city across the border that some Palanpur families look towards." },
  ],

  closingHeading: "Start with a free lesson for your Palanpur student",
  closingBody:
    "Tell us the programme or board, the subject and level, where your child stands now and which hours your household keeps. We reply with a shortlisted tutor, a short summary of their teaching background and trial slots, all online and one to one, free and without commitment. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp, and let IB and IGCSE tutors in Palanpur start with your syllabus.",
};
