import type { CitySeoPage } from "../types";

/**
 * /shajapur/ - IB and IGCSE tutoring page for Shajapur, Malwa, Madhya Pradesh. Online-only delivery.
 * No IB or Cambridge/Edexcel school was confirmed in Shajapur (edustoke lists no IB school there), so
 * stripSchools is empty and schoolClusters point honestly to Indore and Bhopal, reusing names already
 * confirmed on the Indore, Ujjain and Bhopal pages.
 */
export const shajapur: CitySeoPage = {
  slug: "shajapur",
  countryName: "Shajapur",
  countryNameLong: "Shajapur, Madhya Pradesh",
  demonym: "Shajapur",
  state: "Madhya Pradesh",
  stateCode: "IN-MP",
  flagCode: "in",
  countryCode: "IN",
  region: "Madhya Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons work around the wheat harvest in March and April, the soybean sowing and harvest weeks, Navratri, Diwali and Holi, the Malwa monsoon, and above all the school timetable",
  lastUpdated: "2026-09-21",
  geo: { latitude: 23.4273, longitude: 76.2786 },
  wikipedia: "https://en.wikipedia.org/wiki/Shajapur",
  alternateNames: ["Shujalpur Shajapur", "Shajapur Malwa"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Shajapur | Online Tuition at Home",
  metaDescription:
    "IB and IGCSE tutors for Shajapur, Malwa: live one-to-one online tuition at home for PYP, MYP, DP and Cambridge or Edexcel IGCSE, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Tuition at Home in Shajapur",
  heroEyebrow: "ONLINE IB & IGCSE TUITION FOR SHAJAPUR FAMILIES",
  heroSubtitle:
    "Private tuition at home, taught online, for IB and IGCSE students in Shajapur: a tutor works with your child one to one over video, since no school in this Malwa district town is confirmed to run either curriculum and the nearest international schools are in Indore and, with limits, Ujjain and Bhopal. Whether your child boards in Indore, follows an online international school or arrived with a parent posted to a local plant, a tutor is matched to the exact course and exam session.",
  primaryKeyword: "IB and IGCSE tutors in Shajapur",
  imageAltText: "Shajapur student working through IGCSE Additional Mathematics questions with a tutor during a live online lesson",
  secondaryKeywords: [
    "IB tutor Shajapur",
    "IGCSE tutor Shajapur",
    "IB home tuition Shajapur",
    "IGCSE home tuition Shajapur",
    "IB private tuition Shajapur",
    "IB Maths tutor Shajapur",
    "IGCSE Maths tutor Shajapur",
    "IB Physics tutor Shajapur",
    "IB Chemistry tutor Shajapur",
    "IB Biology tutor Shajapur",
    "IB DP tutor Shajapur",
    "IB MYP tutor Shajapur",
    "IB PYP tutor Shajapur",
    "IGCSE online tuition Shajapur",
    "Cambridge IGCSE tutor Shajapur Madhya Pradesh",
    "online IB tutor Shajapur MP",
    "IB tutor Shujalpur",
    "IGCSE tutor Maksi",
    "IB tutor Kalapipal",
    "IB tutor near Ujjain Shajapur",
  ],

  heroTrustPoints: [
    "Each tutor is chosen for your child's actual programme, subject and tier, not for a general claim about international education",
    "Lessons are live on screen only; tutors visit homes solely in Gurugram and parts of Delhi NCR, and never in Shajapur",
    "A full trial lesson is yours to sit through before any money or promise is involved",
    "No link to the schools named on this page or to the IB, Cambridge and Pearson Edexcel",
  ],
  heroStats: [
    { value: "Malwa plateau", label: "Wheat, soybean and a long road to Indore" },
    { value: "PYP to DP", label: "IB primary through Diploma" },
    { value: "IST", label: "Same clock for everyone" },
    { value: "Free trial", label: "Judge the teaching yourself" },
  ],

  intro: {
    heading: "Learning an international syllabus on the Malwa plateau",
    paragraphs: [
      "Shajapur lies on the Malwa plateau in the basin of the Kali Sindh river, in black-soil country where wheat is cut in spring and soybean dominates the monsoon season. The district headquarters takes its name from a Malwa governor, Shuja'at Khan, and sits on the Agra-Mumbai national highway and the Gwalior-Indore railway line, a couple of hours from Indore and close to Ujjain. Industrial names such as the Dabur unit at Maksi and an edible-oil plant at Shujalpur give the district a working population beyond farming, and the literacy rate is comfortably above the national average.",
      "An IB or Cambridge or Pearson Edexcel school is not something we could confirm in the town, which is why families here mostly meet these curricula second-hand. One group has a manager, engineer or chemist posted to a district plant whose child began an IB or IGCSE in another city. Another has a child boarding at a school in Indore and wants help through the holidays. A third has enrolled a child in an accredited online international school and needs a live teacher to explain and correct.",
      "These families do not need a generalist. They need someone who has taught IB Chemistry Paper 2 or IGCSE Extended Mathematics and can tell a student why a mark was lost. Lessons are taught live by tutors who are based in India and teach in Indian Standard Time, so a session can start after a Shajapur school day ends without anyone staying awake for a distant time zone.",
      "To be clear about the relationship: IB Gram is independent. It has no connection with any school mentioned here, with the IB, with Cambridge or with Pearson. Tutors explain and mark practice, but they do not write a student's Internal Assessment, Extended Essay, Theory of Knowledge essay or coursework, because that work must belong to the student.",
    ],
    bullets: [
      "No confirmed IB or Cambridge school in Shajapur; Indore is the practical reference point",
      "Helps plant-posted families, boarders and online-school students",
      "Cambridge and Edexcel IGCSE matched by subject code and tier",
      "Live, private, one-to-one lessons on Indian Standard Time",
      "Tutors do not visit Shajapur homes; in-person lessons exist only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Shajapur has no authorised IB school, so each programme reaches a family by a different route: a posting to a district plant, a boarding seat in Indore or a web-based school. Here is how each stage usually looks in a tutoring room.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 6-12",
      description:
        "Children explore units of inquiry instead of isolated subjects and finish with a student-led Exhibition. Because nothing is externally examined, tutoring is about building reading habits, number sense and the confidence to pose and follow a question.",
      countryNote:
        "A PYP enquiry in Shajapur tends to come from a family newly posted to a plant or government office, whose child has been in a city school and needs a gentle bridge.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is marked against criteria with descriptors that change from band to band, and most schools add a Personal Project. Students have to learn that explaining a method and evaluating it are separate skills with separate marks.",
      countryNote:
        "For a boarder from Shajapur at an Indore MYP school, tutoring often falls in the Diwali and summer breaks and targets the criteria that term-time teaching did not settle.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects, plus Theory of Knowledge, an Extended Essay and CAS. Written exams are in May and results come in July, but internal assessment deadlines arrive far earlier.",
      countryNote:
        "A Diploma student linked to Shajapur will usually be studying at a school in another city, so lessons follow that school's timetable, with weekends the main window.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A few Diploma courses are combined with a career-related study, a reflective project and skills modules. Very few Indian schools offer it, and most students we teach are in major metros.",
      countryNote:
        "CP requests from Shajapur would be rare; if one appears, the tutor concentrates on the Diploma courses in the student's pathway.",
    },
  ],

  subjectsIntro:
    "Matching starts with the subject, level and session your child will sit. These are the IB courses students connected to Shajapur ask about, with a short note on how we approach each.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "For students comfortable with abstract algebra; calculus and functions are taught through timed problem sets, and the Exploration starts with a topic a student can actually finish." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology use; a tutor makes sure the calculator steps are quick and that answers are interpreted in context." },
    { name: "IB Physics", levels: "HL / SL", description: "Rearranging formulae without error comes first, then depth in waves and fields; the investigation is designed around measurements that can be repeated." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry is made automatic before equilibrium and organic mechanisms, and lab reports are built to match the published criteria." },
    { name: "IB Biology", levels: "HL / SL", description: "Students practise aligning each answer with its command term, and learn to read graphs and data tables quickly and accurately." },
    { name: "IB Chemistry for agri-linked students", levels: "HL / SL", description: "Soil, fertiliser and food-processing examples from Malwa help some students connect equilibrium, acids and organic chemistry to ideas they already know." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams and policy evaluation, with agricultural markets, minimum support prices and commodity examples from central India when they serve an argument." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-study practice, the right analytical tool for each scenario and planning for the internal research project." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Systems thinking, water use and land management, suited to students near farming districts, with writing practice for the extended paper." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen commentary, essay structure and the individual oral, each trained separately." },
    { name: "IB Hindi A", levels: "HL / SL", description: "Literary analysis in Hindi for students who want it as a first language on the Diploma record." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Written accuracy, listening and speaking for students taking Hindi as an additional language." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and data structures through frequent short tasks that get run, not just read." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "Guided discussion on knowledge questions; the assessed essay and exhibition stay with the student." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel both offer IGCSE, each with distinct codes and paper structures, so we confirm board and tier at the start. Hindi can sit alongside the sciences for families who wish to keep it on the record.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Core tightens number and algebra; Extended adds functions, vectors and trigonometry, with calculator and non-calculator papers drilled separately." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Class 9-10", description: "Calculus and algebra depth that prepares students for senior Maths and suits those aiming at engineering." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Electricity, forces and waves with worked examples; the alternative-to-practical paper is taught as a skill of its own." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Bonding, mole calculations and reactivity, using short recall drills so facts are at hand during the paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, plant transport and ecology, with longer written answers practised for clarity." },
    { name: "IGCSE Agriculture 0600", levels: "Class 9-10", description: "A Cambridge option relevant to a farming district; crop and soil topics are worked through with structured written practice." },
    { name: "IGCSE Economics 0455", levels: "Class 9-10", description: "Supply and demand diagrams and compact evaluative writing." },
    { name: "IGCSE Business Studies 0450", levels: "Class 9-10", description: "Case analysis, simple ratios and naming the business in every answer." },
    { name: "IGCSE English as a Second Language 0510", levels: "Class 9-10", description: "Reading, writing and listening for students whose home language is Hindi or Malvi." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Class 9-10", description: "Reading and writing accuracy and oral confidence for families keeping Hindi within the IGCSE record." },
  ],

  regionsTitle: "Where Shajapur students learning IB or IGCSE are based",
  regionsIntro:
    "Since tutor and student meet only on video, the notes below give context rather than directions: how each part of the district is usually schooled and what a household's week looks like in the agricultural and industrial calendar.",
  regions: [
    { name: "Shajapur city centre", note: "The district headquarters, with the widest choice of CBSE and state-board private schools and the best broadband in the district." },
    { name: "Railway station and highway corridor", note: "Along the Agra-Mumbai road and the Gwalior-Indore line; families here are well placed for a day trip to Indore or Ujjain." },
    { name: "Shujalpur", note: "A major town in the district with an edible-oil processing plant, whose professional families sometimes bring children with experience of schooling in other states." },
    { name: "Maksi", note: "An industrial town known for a large consumer-goods unit, with a mix of plant employees and farming households." },
    { name: "Kalapipal", note: "A trading and farming town in the district, where most schooling is on the state board or CBSE and online lessons help bridge distance." },
    { name: "Akodiya", note: "A block centre in the Malwa farmland, with smaller schools and households that depend on seasonal agricultural work." },
    { name: "Mohan Badodiya", note: "A town towards the Ujjain side of the district, where families look to Ujjain and Indore for higher studies." },
    { name: "Gulana", note: "A smaller town where most study happens on a mobile phone or a shared family device, so connection planning matters." },
    { name: "Kali Sindh riverside villages", note: "Farming villages in the river basin whose households follow the sowing and harvest calendar closely." },
  ],

  schoolDisclaimer:
    "The schools named below are listed only to show where international curricula are offered within reach of a Shajapur family. IB Gram is an independent tutoring service, unconnected with those schools, the International Baccalaureate, Cambridge or Pearson Edexcel. Please confirm each school's current programmes and admission terms before you rely on it.",
  schoolClusters: [
    {
      city: "Shajapur itself",
      note: "No school in Shajapur is confirmed to teach the IB, and we could not verify a Cambridge or Edexcel IGCSE school there either. Local schools run the Madhya Pradesh Board or CBSE, so international questions are usually settled in Indore.",
      schools: [],
    },
    {
      city: "Nearby: Indore, central belt",
      note: "Indore is the nearest city with established IB and Cambridge schools, reached along the highway and often chosen for its boarding options.",
      schools: ["Choithram International School", "Daly College"],
    },
    {
      city: "Nearby: Indore, southern edge",
      note: "A Cambridge and IB Diploma school on the Rau side of Indore, used by families who prefer to board a child instead of commuting.",
      schools: ["The Emerald Heights International School"],
    },
    {
      city: "Nearby: Bhopal",
      note: "Bhopal is a longer journey east but appears for families who want a state-capital boarding option.",
      schools: ["The Sanskaar Valley School, Chandanpura"],
    },
  ],

  modesIntro:
    "Each format below is live on video. No tutor comes to Shajapur, because home visits are offered only in Gurugram and parts of Delhi NCR. The real choice is between a steady weekly pace, a focused rescue block and a revision run before exams.",
  modes: [
    {
      title: "Weekly private lessons",
      description: "A fixed weekly slot with one tutor, for a student who wants regular reinforcement alongside school or an online programme.",
      bullets: ["Same tutor every week", "Homework reviewed at each lesson", "Short written note afterwards", "Reschedule around harvest or festivals"],
    },
    {
      title: "Targeted subject recovery",
      description: "Several lessons a week for a few weeks to rebuild one weak subject before an internal exam or a school report.",
      bullets: ["Quick diagnostic in session one", "Topics ranked by marks at risk", "Mock paper midway", "Stops once the gap is closed"],
    },
    {
      title: "Pre-exam revision run",
      description: "Intensive sessions before the May or November series, built around past papers, timing drills and a log of repeated mistakes.",
      bullets: ["Timed papers in exam conditions", "Mark-scheme training", "Command-word practice", "Fits around study leave"],
    },
  ],

  sections: [
    {
      heading: "Who seeks IB or IGCSE tuition in Shajapur?",
      paragraphs: [
        "Shajapur's population was around sixty-nine thousand in 2011, with a literacy rate above eighty-five per cent, and the town's schools are overwhelmingly on the Madhya Pradesh Board or CBSE. Families who ask about international curricula are few, and their reasons are quite specific.",
        "The most distinctive group is connected to industry. Plants in Maksi and Shujalpur employ chemists, engineers and managers from other states and sometimes from abroad, and their children may have started the IB or IGCSE before the posting. With no matching school in the district, tutoring keeps the course going.",
        "Another group sends children to board in Indore and wants help during long breaks. A third uses an online international school from home. A fourth is made up of returning families, for whom a live teacher offers a bridge between a foreign or metro syllabus and whatever school they settle on.",
        "What binds them is a need for someone who can teach to an assessment, not just to a topic. A tutor experienced in the IB or IGCSE can explain why a full-mark answer looks the way it does, and that is hard to find in a town without a single international school.",
      ],
    },
    {
      heading: "MP Board, CBSE, IGCSE and IB: what changes for a Shajapur student?",
      paragraphs: [
        "The Madhya Pradesh Board sets state-wide annual papers for Classes 10 and 12, leaning on recall of a prescribed syllabus. CBSE follows a national syllabus and gives more marks to application. IGCSE assesses through structured papers and sometimes coursework, and the IB adds internal assessment, an extended essay and a required breadth of subjects.",
        "A student crossing over from a state-board school meets three adjustments. Command words such as evaluate, justify and suggest have fixed meanings in a mark scheme. The internal assessments are long projects that must be managed over months. And all writing is in English, so students from Hindi-medium schools need practice in precise scientific English.",
        "The comparison below sets the routes side by side. A student aiming for a medical seat through NEET or for Madhya Pradesh engineering counselling may be well served by staying with the state board or CBSE, while one planning to study overseas may need an international record.",
        "Whichever route is chosen, tutoring works the same way: find the assessment objectives, locate the gaps, practise under time and keep notes so a family can see progress.",
      ],
      table: {
        caption: "Curricula compared for Shajapur families",
        columns: ["Feature", "MP Board", "CBSE", "Cambridge or Edexcel IGCSE", "IB Diploma"],
        rows: [
          ["Exam timing", "Class 10 and 12 in spring", "February to April", "Series in May-June and October-November", "May session, results in July"],
          ["Assessment style", "Recall-based annual papers", "Papers with internal marks", "Structured papers with optional coursework", "Exams, internal work and an essay"],
          ["Language", "Hindi or English medium", "Hindi or English medium", "English", "English with a second language"],
          ["Entrance route", "State counselling, NEET, JEE", "JEE, NEET, CUET-UG", "Leads to IB, A Level or CBSE Class 11", "CUET-UG via AIU equivalence; JEE and NEET need checks"],
          ["Nearest option", "In Shajapur", "In Shajapur and Ujjain", "Indore or online", "Indore or online"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Shajapur, and how is the rate set?",
      paragraphs: [
        "IB Gram does not publish prices. The rate depends on the course, the level and the tutor's experience with that syllabus, and it is shared in writing before you book. Living in Shajapur does not raise or lower it, since the tutor's hour is the same wherever the student sits.",
        "Higher Level sciences, Extended IGCSE Maths and work that involves careful marking of past papers demand more preparation than a foundation topic and are priced accordingly. A weekly arrangement across a term is structured differently from a fortnight of revision, and families with more than one child or more than one subject can ask for a joint plan.",
        "The comparison most families make is with sending a child to Indore for coaching. That involves a journey of well over an hour each way or a hostel, plus time away from school and home. Online lessons remove those costs, but require a dependable connection, a device with a camera and a fixed quiet corner.",
        "If money is tight, say so. A focused set of lessons before a specific paper can be worth more than months of open-ended tuition, and we would prefer to recommend that than to sell hours that are not needed.",
      ],
    },
    {
      heading: "Is online tuition better than coaching classes or self-study in Shajapur?",
      paragraphs: [
        "It depends on the goal. Coaching classes in Shajapur and Ujjain are designed for MP Board, CBSE and entrance exams. They are valuable for those aims, but they rarely cover IB command terms or IGCSE paper structures, and a batch cannot slow for one student.",
        "A local private teacher can shore up basics in Maths or Science, and that is useful. The assessment language of international papers still has to come from someone who has taught them. Self-study works for a disciplined student with good past papers, but it cannot explain why marks were lost.",
        "Live online one-to-one lessons close that gap. A specialist who knows the course can focus on exactly what a student misunderstands. The costs are a need for reliable internet and a student who can concentrate on a screen for an hour.",
        "The table lines the options up. Many families combine them: coaching for entrance exams, online lessons for the international course and self-study in between.",
      ],
      table: {
        caption: "Support options for IB and IGCSE students in Shajapur",
        columns: ["Option", "Understands IB or IGCSE marking", "Timing", "Attention", "Limit"],
        rows: [
          ["Online one-to-one tuition", "Yes, matched to the course", "Evenings and weekends in IST", "One student per lesson", "Needs stable internet"],
          ["Coaching class", "Rarely", "Fixed batch hours", "Shared", "Built for other exams"],
          ["Local private teacher", "Partly, for basics", "Flexible", "Personal", "No experience of international papers"],
          ["Self-study", "Depends on the student", "Fully flexible", "None", "No feedback"],
        ],
      },
    },
    {
      heading: "How do exam series and the Malwa farming year fit together?",
      paragraphs: [
        "IB Diploma papers are sat in May, with results in July. Cambridge IGCSE offers series in February-March, May-June and October-November, and Pearson Edexcel in January, May-June and October-November. A student's school or online provider confirms the entry session and the mock dates.",
        "Malwa's farming year lays its own grid over this. Wheat is harvested in March and April, directly on top of the May exams, and farm families often need older children at home for a few days. Soybean is sown after the first monsoon rains and harvested around October, close to the November series. Festivals add more breaks: Holi in March, Navratri and Dussehra in autumn, Diwali soon after.",
        "Weather matters too. Summer highs reach the mid-forties and the record is above forty-seven degrees, so afternoons are difficult for study. The monsoon brings heavy rain between July and September. Evening sessions are sensible through most of the year.",
        "The table shows where these overlap. A good plan sets internal assessments before the Navratri-Diwali stretch and uses January and February for past papers.",
      ],
      table: {
        caption: "Exam and farming-year overlaps for Shajapur students",
        columns: ["Period", "Exam or school event", "Shajapur factor", "Advice"],
        rows: [
          ["January to February", "IGCSE Edexcel January series, school mocks", "Cool, dry weather and wheat growing", "A good period for steady past-paper work"],
          ["March to May", "IGCSE and IB papers begin", "Wheat harvest, Holi, rising heat", "Fix lessons early and use evenings"],
          ["June to September", "Results and new term", "Soybean sowing, monsoon rain", "Start Internal Assessments and plan for outages"],
          ["October to November", "IGCSE and IB November series", "Soybean harvest, Navratri, Diwali", "Finish revision before the festival stretch"],
        ],
      },
    },
    {
      heading: "What universities and careers can follow from here?",
      paragraphs: [
        "With an IB Diploma or an IGCSE-to-A Level route, a Shajapur student can apply to Indian universities through CUET-UG, usually with an equivalence certificate from the Association of Indian Universities. Private universities often accept international results directly, and study abroad is the third route.",
        "Indore is the obvious local centre for higher study, with established engineering, management and medical institutions, and Ujjain has its own colleges. Admission rules for JEE, NEET and state counselling differ for students from international boards, so the current notices need checking early.",
        "For study abroad, universities look at Higher Level subjects: Maths and Physics for engineering, Chemistry and Biology for medicine, Economics and Maths for finance. A tutor can explain what a combination usually opens, though the choice belongs to the student and family.",
        "Families with an agricultural or food-industry background sometimes consider courses in agricultural science or food technology, and subjects such as Chemistry, Biology and Environmental Systems are useful preparation. We help with marks and never promise admission.",
      ],
    },
    {
      heading: "How should a Shajapur student approach IB Maths and the sciences?",
      paragraphs: [
        "The two IB Maths courses suit different students. Analysis and Approaches develops algebra, calculus and proof, and suits those heading for engineering or pure science. Applications and Interpretation emphasises modelling and statistics, and suits students who prefer data. Both come at Standard and Higher Level with an individual Exploration.",
        "Most marks are lost to slow algebra, missing working and misreading the context. Timed past-paper sets and the habit of explaining each step aloud address all three.",
        "In the sciences, Physics students should drill units and equation choice, Chemistry students should master calculation types before mechanisms, and Biology students should read the command term and answer that. Internal investigations are the student's own, although a tutor can test whether a question is workable and whether the data are good enough.",
        "Higher Level courses carry more content, so the sensible sequence is weak core topics first, then past papers, then consolidation with a weekly review of the mistake log.",
      ],
      bullets: [
        "Pick the Maths course that fits the intended degree",
        "Units and equation choice in Physics",
        "Calculation types before mechanisms in Chemistry",
        "Answer the command term in Biology",
      ],
    },
    {
      heading: "IGCSE Core or Extended: which tier suits a Shajapur student?",
      paragraphs: [
        "Most IGCSE subjects are examined at two tiers. Core limits the highest grade, while Extended covers more content and reaches the top grades. A student planning Diploma Maths, A Level or a science route normally needs Extended, at least in Maths and the sciences.",
        "The right call comes from evidence. A few diagnostic lessons show whether the problem is speed, content or confidence, and whether a few months of work can make Extended realistic. The school or online provider usually decides entry.",
        "Subject mixes matter too. The three sciences can be taken separately or as a combined award, which changes paper codes and workload. A student curious about Economics, Business or Agriculture can sample them at IGCSE before committing to Diploma choices.",
        "At either tier the habits that help are the same: read the command word, show working, and practise under time. A weekly lesson with a timed paper every fortnight usually outperforms a last-minute rush.",
      ],
    },
  ],

  tutorsIntro:
    "Every tutor works from India on IST, so a Shajapur lesson can begin once the school bus is home. Each profile names the courses that tutor has actually taught; we choose by syllabus first and by personality second.",
  process: [
    { title: "Describe the situation", description: "WhatsApp +91 7439 368 115 or email us the board, subjects, level, exam session and whatever is going wrong at the moment, whether that is a failed mock or a move between schools." },
    { title: "Hear our suggestion", description: "We come back with one tutor who has taught that very syllabus, and say in a few lines what that tutor has done with it." },
    { title: "Watch a lesson first", description: "The trial is a real session on a real topic, free of charge, and a parent can listen in from the next chair." },
    { title: "Read the terms", description: "You receive days, timings and rate in writing, so nothing about money is left to be discussed after the lesson." },
    { title: "Keep an eye on progress", description: "Short notes follow every session, we check in every few weeks, and swapping tutors is a normal request rather than an awkward one." },
  ],
  whyPoints: [
    { title: "Syllabus before subject", description: "A tutor for IB Chemistry HL is not the same as a tutor for IGCSE Chemistry Core, and we choose accordingly." },
    { title: "Nobody else in the room", description: "No batch to keep up with; the pace is set by your child's questions." },
    { title: "No night-time calls", description: "Indian Standard Time means a session ends well before a Shajapur family's dinner." },
    { title: "Parents see what happened", description: "The note after a lesson lists topics covered and what to practise before the next one." },
    { title: "Swap if it is not working", description: "A mismatch is fixed with a different tutor, not with months of patience." },
    { title: "Coaching, not ghost-writing", description: "We will help a student think about an Extended Essay, but will not write a line of it." },
  ],

  faqs: [
    { question: "Can I get IB or IGCSE tuition in Shajapur?", answer: "Yes, as live online tuition. A tutor teaches your child one to one over video at a time fixed on Indian Standard Time. Nobody travels to Shajapur; home visits are a Gurugram and Delhi NCR arrangement only. Send us the syllabus, subject and exam series, and a matching tutor plus a free trial lesson follows." },
    { question: "Is there an IB school in Shajapur?", answer: "Not that we could confirm, and the edustoke listing for Shajapur shows no IB school. Town schools teach the Madhya Pradesh Board or CBSE syllabus. The established IB and Cambridge campuses lie in Indore. Call or email any school yourself for up-to-date programmes, because what a school offers can change between one admissions season and the next." },
    { question: "Will a tutor come to my house in Shajapur?", answer: "No. When we say home tuition for Shajapur, we mean a private lesson your child attends from home using a laptop or tablet, with the tutor on screen. Tutors do not come to the district. Face-to-face lessons at a student's house are limited to Gurugram and some parts of Delhi NCR." },
    { question: "What is the fee for IB or IGCSE tuition in Shajapur?", answer: "There is no published price list. Fees follow the course, the level and how much experience the tutor has with that syllabus, and you get the figure in writing first. Living in Shajapur changes nothing, and there is no fuel or hostel cost. If you have a ceiling in mind, tell us so we can plan within it." },
    { question: "Which IB subjects are available?", answer: "Both Maths courses, Physics, Chemistry, Biology, Economics, Business Management, Environmental Systems and Societies, Computer Science, English A, Hindi A and B, plus Theory of Knowledge discussion sessions, all at Higher or Standard Level where the subject has both. Something missing from the list is worth asking about; we will answer frankly." },
    { question: "Is IGCSE Maths covered?", answer: "Yes: Cambridge 0580 Core and Extended, Additional Mathematics 0606, and the Edexcel equivalents. A first session usually reveals whether a student is losing marks through shaky algebra, slow arithmetic or poor paper technique. From there we work through timed past papers and keep a running list of repeated slips." },
    { question: "Can a tutor write my IA or Extended Essay?", answer: "No, and this holds for every tutor we send. Internal Assessments, Extended Essays, Theory of Knowledge essays and coursework are assessed as the student's own work. A tutor may talk through the criteria, question an argument, suggest how to tighten a structure or point out a weak data set, and nothing beyond that." },
    { question: "How does the trial lesson work?", answer: "It is a proper one-to-one class with a tutor matched to your course, costing nothing and binding you to nothing. The tutor picks up a topic your child finds hard and teaches it. A parent can watch. Afterwards you decide whether to go on; if the style is wrong, we propose another tutor." },
    { question: "What internet do we need?", answer: "Broadband or a good 4G signal is enough, along with a laptop or tablet that has a camera and microphone. Handwriting on paper held up to the camera, or a stylus tablet, works for Maths. In July and August, rain may knock out power or signal, so a charged second device and a phone hotspot are sensible insurance." },
    { question: "Can a child from an MP Board school switch to IGCSE or IB?", answer: "Often yes, usually at Class 9 or Class 11, although each school sets its own rules. Students generally find the English-language science writing and the command words harder than the content itself. Begin preparing a few months ahead, not after the first unit test, so the change feels gradual." },
    { question: "Do IB and IGCSE qualify for JEE, NEET or state counselling?", answer: "That varies by exam and by year, so read the current notification before choosing subjects. Rules for international boards include equivalence conditions. CUET-UG and many private universities take IB and Cambridge results, normally alongside an equivalence certificate from the Association of Indian Universities." },
    { question: "Do you teach Cambridge and Edexcel IGCSE?", answer: "Both. The two boards differ in syllabus codes, tiers and mark schemes, so we check which one your child is registered with before suggesting a tutor. AS and A Level support exists too, for students who are going on beyond IGCSE, though this page is mainly about IB and IGCSE." },
    { question: "When do we begin for May papers?", answer: "IB Diploma students do well to start in late summer of the final year, leaving room for internal assessments as well as past papers. IGCSE candidates sitting in May or June can begin in October. A weak Maths or Physics base deserves an earlier start, since those subjects rebuild slowly." },
    { question: "Can you tutor a child who boards in Indore?", answer: "Yes, and we expect it. Lessons take place in holidays, weekends or evenings, following the school's scheme of work. Send us the units coming up and the deadlines, and we will plan sessions that build on class teaching rather than duplicating what the boarding school has already covered." },
    { question: "How do we start?", answer: "Send a message to +91 7439 368 115 on WhatsApp, or email support@ibgram.com, saying which programme or board, which subjects and level, the exam series and the topics causing trouble. A matched tutor and a trial slot come back, and nothing is paid until you have watched a lesson and accepted the rate." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "A list of the Indian cities where IB Gram teaches online." },
    { label: "Indore IB and IGCSE tutoring", href: "/indore/", description: "Closest big city, home to the IB and Cambridge schools most Shajapur families compare." },
    { label: "Ujjain IB and IGCSE tutoring", href: "/ujjain/", description: "The neighbouring temple city in Malwa, with its own school picture." },
    { label: "Bhopal IB and IGCSE tutoring", href: "/bhopal/", description: "The state capital, considered by some families for boarding." },
    { label: "Ratlam IB and IGCSE tutoring", href: "/ratlam/", description: "Another western Madhya Pradesh city, covered on its own page." },
    { label: "IB tutors", href: "/ib-tutors/", description: "General guide to IB tutoring from primary years to the Diploma." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Subjects, tiers and exam series for Cambridge and Edexcel." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "The structure of the Diploma, from subject groups to the core." },
    { label: "IB Maths tutoring", href: "/courses/ib/mathematics/", description: "Analysis or Applications, Higher or Standard, explained." },
    { label: "Meet the tutors", href: "/tutors/", description: "Who teaches what, and what each tutor has taught before." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Reach us by email or WhatsApp to book a trial." },
  ],

  closingHeading: "A free first lesson for your Shajapur student",
  closingBody:
    "Give us the syllabus, the subject and the exam series, and we will find a tutor who has taught precisely that, at an hour that works once school ends. Our email is support@ibgram.com and our WhatsApp number is +91 7439 368 115. Sit through the whole trial, look at the written rate, then make up your mind.",
};
