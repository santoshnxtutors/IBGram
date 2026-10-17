import type { CitySeoPage } from "../types";

/**
 * No school in Zirakpur could be confirmed for the IB or Cambridge/Edexcel IGCSE (the Chandigarh page
 * says the same), so stripSchools is empty. Cluster names come from the checked Chandigarh, Panchkula
 * and Mohali pages and are labelled as nearby.
 */
export const zirakpur: CitySeoPage = {
  slug: "zirakpur",
  countryName: "Zirakpur",
  countryNameLong: "Zirakpur, Punjab",
  demonym: "Zirakpur",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Slots set after the highway rush has cleared, usually a little after seven on weekdays and mid-morning at weekends",
  lastUpdated: "2026-09-21",
  state: "Punjab",
  stateCode: "IN-PB",
  geo: { latitude: 30.6425, longitude: 76.8173 },
  wikipedia: "https://en.wikipedia.org/wiki/Zirakpur",
  alternateNames: ["Zirakpur Punjab", "Zirakpur Chandigarh", "Zirakpur Mohali district"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Zirakpur | Online Tuition at Home",
  metaDescription:
    "Live online IB and IGCSE home tuition for Zirakpur families near Chandigarh: one-to-one tutors matched to your syllabus, with a free trial lesson to begin.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Zirakpur",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR ZIRAKPUR",
  heroSubtitle:
    "Home tuition for IB and IGCSE students in Zirakpur, given as live private lessons on video so that nobody has to fight the Ambala highway junction at dusk. Zirakpur has grown into a district of apartment towers on the edge of Chandigarh, and its children go to schools in three different cities. The school may be far, but the tutor who has taught your child's paper can be on the screen within the hour.",
  primaryKeyword: "IB and IGCSE tutors in Zirakpur",
  imageAltText: "Zirakpur student in an apartment study room taking a live IGCSE Maths lesson with an online tutor",
  secondaryKeywords: [
    "IB tutor in Zirakpur",
    "IGCSE tutor in Zirakpur",
    "IB home tuition Zirakpur",
    "IGCSE home tuition Zirakpur",
    "IB private tuition Zirakpur",
    "IB Maths tutor Zirakpur",
    "IGCSE Maths tutor Zirakpur",
    "IB Physics tutor Zirakpur",
    "IB Chemistry tutor Zirakpur",
    "IB Biology tutor Zirakpur",
    "IB DP tutor Zirakpur",
    "IB MYP tutor Zirakpur",
    "IB PYP tutor Zirakpur",
    "IGCSE online tuition Zirakpur",
    "IB tutor VIP Road Zirakpur",
    "IGCSE tutor Dhakoli",
    "IB tuition Baltana",
    "IB tutor near Chandigarh",
  ],

  heroTrustPoints: [
    "Live one-to-one lessons taught from India on Indian time",
    "Tutors for IB DP, MYP, PYP and Cambridge or Edexcel IGCSE",
    "No highway commute: lessons happen at your own desk",
    "Free trial lesson and a rate in writing before you commit",
    "Short note after every lesson, tutor swap at no charge",
  ],
  heroStats: [
    { value: "IST", label: "Indian Standard Time" },
    { value: "PYP to DP", label: "Every IB programme" },
    { value: "Free trial", label: "Try first" },
    { value: "May & Nov", label: "IB sessions supported" },
  ],

  intro: {
    heading: "A highway town where three cities' school runs meet",
    paragraphs: [
      "Zirakpur sits where the Ambala road, the Patiala road and the Kalka road meet, just outside Chandigarh's boundary and just inside Punjab's. Twenty years ago it was a roadside market town. Now it is a wall of gated societies and apartment towers along VIP Road, Dhakoli and Baltana, with a resident population that includes Chandigarh professionals priced out of the city, rented-flat households on temporary postings, small business owners and families who moved from other states. Its children go to schools in Chandigarh, Mohali and Panchkula, sometimes in more than one of them across their years.",
      "None of the schools that carry IB or Cambridge status is in Zirakpur itself. We could confirm none in the town, and the Chandigarh tricity has only a handful of confirmed campuses across all three cities. A family here who follows the IB or IGCSE, or who is moving toward it, faces a long journey through one of the region's more congested junctions, and a child who returns home late needs help that a classroom cannot provide.",
      "That is the reason our IB and IGCSE tutors in Zirakpur teach on live video, one child at a time. The tutor has taught the paper, teaches from India on Indian time and works to a written plan. The page that follows covers the facts a Zirakpur parent needs: the school picture, the boards, what drives the rate, how traffic, heat, monsoon and fog affect the calendar, university routes and how subjects are taught. IB Gram is independent of the IB, Cambridge, Pearson and any school, and tutors never write assessed work for a student.",
    ],
  },

  programmesIntro:
    "Children in Zirakpur meet the IB and IGCSE at different points, often after a family move, so tutoring has to fit a child's starting position rather than a fixed pathway.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Inquiry units and a closing Exhibition. Tutoring is short and light, with reading aloud, number play and practice at explaining an idea to an adult.",
      countryNote:
        "Families who rent in Zirakpur for a posting sometimes bring a PYP child from another city. A weekly lesson helps the child keep the style through the move.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against published criteria, plus the Personal Project. Tutors teach how to break down a task and structure a reply.",
      countryNote:
        "A child switching from CBSE into MYP faces open tasks and reflective writing that CBSE seldom asks for, so structure comes first in early lessons.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Theory of Knowledge, the Extended Essay and CAS. Tutors work on examined content and the internal-assessment method, and leave the assessed writing with the student.",
      countryNote:
        "A student who joins a Chandigarh-area school in Class 11 often needs to catch up on prior content fast, and a private tutor can compress that.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "DP courses with a career-related study and a reflective project. Tutors support the academic courses.",
      countryNote:
        "CP is uncommon in the region. We take requests and match tutors to the specific DP courses chosen.",
    },
  ],

  subjectsIntro:
    "Every subject is assigned to a tutor who has taught that paper at that level, and who can explain a topic in more than one way.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, sequences and proof, with HL extensions and Paper 3 problem solving." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology, with plenty of real-data questions." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through fields and quantum topics, with data-based questions and lab-method explanations." },
    { name: "Chemistry", levels: "SL / HL", description: "Structure, energetics, equilibrium and organic pathways with regular calculation work." },
    { name: "Biology", levels: "SL / HL", description: "From molecules to ecosystems, with the precise wording mark schemes reward." },
    { name: "Economics", levels: "SL / HL", description: "Diagrams, evaluation and case work, often using examples from real estate and retail in the region." },
    { name: "Business Management", levels: "SL / HL", description: "Tools, formulae and unseen organisations under timed conditions." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, programming logic and system questions." },
    { name: "Psychology", levels: "SL / HL", description: "Key studies, evaluation and essay structure." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Urban growth, waterlogging and air quality provide close-to-home case studies." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Text analysis, commentary and comparative essays." },
    { name: "Hindi B and Punjabi support", levels: "SL / HL and school-based", description: "Language practice for students who use Hindi or Punjabi at home." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching around knowledge questions; the essay stays the student's own." },
  ],

  igcseSubjectsIntro:
    "Tutors are matched to the specific IGCSE board, because Cambridge and Pearson Edexcel organise their papers and tiers in different ways.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, geometry, trigonometry and statistics with timed papers." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, thermal physics, waves, electricity and atoms." },
    { name: "Chemistry", levels: "Core / Extended", description: "Bonding, the mole, rates and organic basics." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, human systems, inheritance and the environment." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For the double-award science route." },
    { name: "English as a First or Second Language", levels: "Core / Extended", description: "Comprehension, directed writing and speaking preparation." },
    { name: "Computer Science and ICT", levels: "Single tier", description: "Programming, data and networks." },
    { name: "Business Studies and Economics", levels: "Single tier", description: "Concepts, calculations and case questions." },
    { name: "Accounting", levels: "Single tier", description: "Ledgers and financial statements." },
    { name: "Hindi and Punjabi as second languages", levels: "Core / Extended", description: "Reading, writing and oral preparation where offered." },
  ],

  regionsTitle: "Roads, societies and neighbouring towns around Zirakpur",
  regionsIntro:
    "In Zirakpur, an address usually means a society on a named road, and the school run depends on which highway the bus takes. The notes below describe how a day tends to run in each pocket.",
  regions: [
    { name: "VIP Road", note: "The main spine of tall apartment societies running toward Chandigarh airport, popular with professionals working in the tricity and with returning NRI families." },
    { name: "Dhakoli", note: "A large residential belt with many gated societies and a growing market. Children here often go to schools in Panchkula or Chandigarh and get home late." },
    { name: "Baltana", note: "A neighbourhood near the Chandigarh border, mixing older housing and newer towers, with a relatively young population." },
    { name: "Peer Muchalla", note: "The older, established side, close to the Panchkula boundary and the Kalka road. School buses and evening traffic both use this corridor." },
    { name: "Bhabat", note: "A residential and commercial area on the Patiala road, with a mix of long-term residents and newer arrivals." },
    { name: "Lohgarh and Gazipur", note: "Fast-growing colonies toward the airport and the Patiala side, where families often moved in the last few years." },
    { name: "Ambala highway belt", note: "The stretch of shops, showrooms and flats along the main highway, noisy through the day and busiest in the evening rush." },
    { name: "Panchkula border", note: "The Haryana side of the boundary, close to Zirakpur, where some Zirakpur children attend school." },
    { name: "Kalka and Pinjore road", note: "The way toward Himachal, with cooler evenings in summer and heavy traffic on holiday weekends." },
  ],

  schoolClusters: [
    {
      city: "Zirakpur",
      note: "We could not confirm any school in Zirakpur as an authorised IB World School or a Cambridge or Edexcel centre. Locally, the count is none.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh, Sector 26",
      note: "Two IB schools sit in Chandigarh's Sector 26, reachable from Zirakpur by the Chandigarh road at the cost of a long daily journey in peak hours.",
      schools: ["Strawberry Fields High School, Sector 26", "Firststeps School, Sector 26"],
    },
    {
      city: "Nearby: Mohali",
      note: "Mohali has one confirmed IB and Cambridge school, closer to Zirakpur than the Chandigarh campuses for some societies.",
      schools: ["Oakridge International School, Mohali"],
    },
    {
      city: "Nearby: Panchkula",
      note: "No IB or Cambridge school in Panchkula could be confirmed, so families across the Haryana boundary face the same limited choice as Zirakpur.",
      schools: [],
    },
  ],
  schoolDisclaimer:
    "The schools above are listed only to show where confirmed IB or Cambridge options lie around Zirakpur. IB Gram is an independent service with no affiliation to the IB, Cambridge, Pearson or any school, and each school decides its own admissions.",

  modesIntro:
    "Tutors do not visit homes in Zirakpur, so every format is live and online, timed to keep clear of the highway rush.",
  modes: [
    {
      title: "Live private lessons from home",
      description: "One tutor and one student in a live session, on the family laptop in the study room.",
      bullets: ["Shared whiteboard and scanned papers", "Same tutor week after week", "A short written note after each class"],
    },
    {
      title: "Pre-exam revision series",
      description: "Concentrated lessons before school exams and IB or IGCSE sessions.",
      bullets: ["Timed paper practice with feedback", "Mark-scheme habits", "Slots moved easily if traffic or weather interferes"],
    },
    {
      title: "Steady weekly tutoring",
      description: "One regular lesson a week in a single subject, kept up through the school year.",
      bullets: ["Good for MYP and IGCSE years", "Pause for holidays or a move", "Switch subject if needs change"],
    },
  ],

  tutorsIntro:
    "Tutors teach from across India on Indian Standard Time, and most are free in the early evening, when Zirakpur's roads have started to clear.",

  sections: [
    {
      heading: "Why does a Zirakpur family end up needing help with an international syllabus?",
      paragraphs: [
        "Because the town's growth outran its school choices. Zirakpur's apartment towers filled with people who work in Chandigarh, Mohali and Panchkula, and who chose the town for housing rather than for schools. Children then travel outward each morning, and the schools they attend are decided by where a seat was available.",
        "Some of those schools follow the IB or IGCSE. Most follow CBSE. A child who joins an international programme after a move often arrives mid-course, with gaps that the school has no time to fill. Others follow IGCSE at a school that does not offer every subject, and need private help for the ones it lacks.",
        "A third group are households planning ahead: parents who intend to move abroad in a few years, who want an IGCSE or IB record on the file. These families are rarely short of ambition, but they are short of local teachers who have taught the papers.",
        "For all three, the useful thing is the same. A tutor who has taught the paper, available at a time that suits a crowded household, without another hour in the car.",
      ],
    },
    {
      heading: "Which schools around Zirakpur offer the IB or Cambridge IGCSE?",
      paragraphs: [
        "Not one inside the town that we could confirm. The IB school directory and the Cambridge and Edexcel lists show nothing in Zirakpur, and the Chandigarh tricity has just three confirmed campuses across all three cities: two in Chandigarh's Sector 26 and one in Mohali.",
        "That leaves a Zirakpur family with two decisions. First, whether the daily journey is workable. Zirakpur to Sector 26 is short on a map and slow at peak hours, mostly because of the junctions on the highway. Second, whether a boarding or relocation option is worth exploring, in Amritsar, Ludhiana or further afield.",
        "Parents also meet schools that use words such as global, world or international in their names. We treat those as branding until an authorisation is confirmed, and this page names only schools that hold it.",
        "If a school in Zirakpur announces an IB or Cambridge programme, we can begin tutoring against that syllabus within days.",
      ],
    },
    {
      heading: "Comparing CBSE, Punjab board, ICSE, IB and IGCSE from a Zirakpur flat",
      paragraphs: [
        "CBSE is by far the most common board among Zirakpur families, followed by Punjab board schools and a small number of ICSE schools. All three lead toward JEE, NEET, CUET-UG and state entrance tests, and all three reward complete and accurate recall.",
        "The IB and IGCSE ask for something different. IGCSE examiners look for exact wording against a mark scheme, and the IB looks for reasoning applied to unfamiliar situations. Neither is harder in absolute terms, but each is unfamiliar to a student who has only known one style.",
        "A summary follows.",
      ],
      table: {
        caption: "Board comparison for Zirakpur households",
        columns: ["Board", "What is rewarded", "Common exit route", "Local help near Zirakpur"],
        rows: [
          ["CBSE", "NCERT-centred, complete answers", "JEE, NEET, CUET-UG", "Coaching centres on every main road"],
          ["Punjab School Education Board", "State textbook accuracy", "State colleges, entrance coaching", "Local tutors plentiful"],
          ["ICSE and ISC", "Wider content, more written English", "CUET-UG, Indian universities", "A few tutors"],
          ["Cambridge or Edexcel IGCSE", "Precise, mark-scheme answers in tiered papers", "IB, A Level or Indian Class 11", "Very few"],
          ["IB Diploma", "Reasoning, application and extended essays", "Indian and overseas universities", "Almost none"],
        ],
      },
    },
    {
      heading: "What determines the price of IB and IGCSE tuition in Zirakpur?",
      paragraphs: [
        "We do not publish rates, and a standard hourly number would mislead. Each family gets a written quote before any trial lesson is booked, so nothing is agreed casually.",
        "Level is the first driver. A tutor for Higher Level Diploma Physics or Mathematics carries much more experience than one helping with Class 7 science. Scarcity is the second. Subjects such as Computer Science HL, Economics HL or Further Mathematics have few qualified teachers.",
        "The shape of the plan is the third. One lesson a week through the year is easy to schedule and is priced accordingly, while a burst of daily lessons in the fortnight before an exam is an intensive and is priced differently. The fourth is when in the year the lessons fall.",
        "A Zirakpur family should also count the true cost of the alternative. Petrol, parking, time lost at the highway junction and an evening consumed by the round trip are all part of the arithmetic, and they change the comparison with an online lesson at home.",
      ],
      bullets: [
        "Level of the course",
        "Rarity of the subject among qualified tutors",
        "Lessons per week and how long the plan runs",
        "Exam-season demand",
      ],
    },
    {
      heading: "Online lessons, Chandigarh centres, home tutors and self-study: what works from Zirakpur?",
      paragraphs: [
        "Zirakpur students have four options. Online lessons bring a specialist to the desk. Chandigarh and Mohali centres offer group teaching at the price of a commute. Local home tutors are convenient and good for Indian boards. Self-study needs a steady, self-driven student.",
        "The commute is the deciding factor for many families. A centre may be twenty minutes away on a quiet Sunday, and fifty on a weekday evening.",
      ],
      table: {
        caption: "Ways to get IB or IGCSE help around Zirakpur",
        columns: ["Route", "Syllabus knowledge", "Travel", "Main catch"],
        rows: [
          ["Live private online lessons", "Matched to the exact paper", "None", "Needs a stable connection"],
          ["Centre in Chandigarh or Mohali", "Mixed; often Indian boards", "Highway travel, peak hours", "Fixed batch times"],
          ["Local private tutor", "CBSE or Punjab board trained", "Little", "Few have taught international papers"],
          ["Self-study", "Whatever the student can manage", "None", "No feedback on weak answers"],
        ],
      },
    },
    {
      heading: "Traffic, heat, monsoon and fog: how the Zirakpur year runs",
      paragraphs: [
        "Zirakpur's calendar has features that a classroom timetable does not capture. Summer heat from May to June is severe, monsoon downpours can flood underpasses and slow the highway, and winter fog from December to January reduces visibility and delays buses.",
        "Festivals add gaps. Lohri and Baisakhi, Diwali and Dussehra, Gurpurab and the school winter break each interrupt lessons. Online sessions can be moved rather than cancelled.",
        "IB Diploma exams are held in May and November, with results in July and January. Cambridge IGCSE has sessions around February and March, May and June, and October and November, and Pearson Edexcel International GCSE runs in January, May and June, and October and November. The entry is made by the school, and tutors plan backwards from it.",
      ],
      table: {
        caption: "Zirakpur through the year",
        columns: ["Months", "Local conditions", "Effect on study", "Tutoring response"],
        rows: [
          ["Dec to Feb", "Fog, Lohri, winter break; IGCSE Feb series", "Delayed buses, broken weeks", "Online slots unaffected by roads"],
          ["Mar to Jun", "Baisakhi, rising heat; IB May exams", "Exam stress and high temperatures", "Late-afternoon and early-evening lessons"],
          ["Jul to Sep", "Monsoon rain, IB results, new term", "Road delays, fresh syllabus", "Foundation lessons and easily moved slots"],
          ["Oct to Nov", "Dussehra, Diwali, Gurpurab; November exams", "Festival gaps", "Compressed revision with spare weeks"],
        ],
      },
    },
    {
      heading: "Where do students from Zirakpur go after IB or IGCSE?",
      paragraphs: [
        "Zirakpur students have a wide set of choices within reach: Panjab University and the colleges of Chandigarh, the ISB and IISER at Mohali, the universities around Kharar and Gharuan, and the Punjab and Haryana colleges beyond.",
        "IB Diploma holders apply to Indian universities with an equivalence certificate from the Association of Indian Universities, and CUET-UG is the usual route to central universities. Engineering and medicine depend on the subject combination taken in Class 11, so JEE and NEET eligibility should be checked with the exam authority before subjects are fixed.",
        "Study abroad is common among tricity families, with Canada, the UK, Australia and the US the frequent destinations. Predicted grades, school reports and English tests all matter, and tutoring can help lift the grades that applications rest on.",
        "IGCSE students choose between the IB, A Level and an Indian Class 11 stream. The right time to decide is Class 9 or early Class 10, so that the final IGCSE year can be planned around the intended path.",
      ],
    },
    {
      heading: "How are IB Mathematics AA and AI, and the sciences, taught to a Zirakpur student?",
      paragraphs: [
        "Analysis and Approaches is for students who enjoy algebra, calculus and proof, and often lead to engineering or physical science. Applications and Interpretation suits students headed for business, medicine or social science, with its focus on statistics and modelling.",
        "Students from a CBSE background are usually quick with procedure and slower to explain in words. Tutors start with modelling questions and written reasoning, then move to past papers to build speed and accuracy together.",
        "For the sciences, Physics practice centres on units and data questions, Chemistry on mole calculations and equilibrium, and Biology on exact terms. Each lesson opens with the mistakes from last week.",
        "The internal investigations are the student's own. A tutor can explain the criteria and the design of a fair test, but does not run, write or correct the report.",
      ],
    },
    {
      heading: "IGCSE tiers, boards and subject choices for Zirakpur students",
      paragraphs: [
        "The first decision is board. Cambridge and Pearson Edexcel are both respected, but the papers are not interchangeable. Ask the school which board and which papers are on the entry before booking a tutor.",
        "Tier comes next. Cambridge Core papers cap the top grade, and Extended opens the full range. Edexcel Foundation and Higher tiers work the same way. Students aiming at science at IB or A Level should generally take Extended or Higher.",
        "Subject mix follows. Mathematics, the sciences and English keep engineering and medicine open, and a business-minded student can add economics or business studies.",
        "For students coming from Punjabi-medium or Hindi-medium backgrounds, extended English writing can be the biggest surprise, and a few weeks of directed-writing practice often makes a marked difference.",
      ],
    },
    {
      heading: "Renting in Zirakpur on a posting: how do we keep a child on track through a move?",
      paragraphs: [
        "A fair share of Zirakpur households are in rented flats for a year or three, on a transfer, a contract or a phase of career. Their children may be halfway through an IB or IGCSE course, and the next school may follow a different board.",
        "Continuity is what tutoring offers here. The same tutor can follow a child across a change of address, a change of school and even a change of city, because the lessons are online and the plan is written down. Handover notes make a mid-year transfer far easier.",
        "Families in this position often ask for a diagnostic lesson in the first week after arriving, to compare the new school's pace with the old. That comparison shows within an hour what needs attention, and helps a family decide whether to ask the school for extra help.",
      ],
    },
  ],

  process: [
    { title: "Message us the syllabus", description: "Write on WhatsApp or by email with the board, subject, level and the session your child is entered for." },
    { title: "We line up a tutor", description: "Someone who has already taught that paper is shortlisted, with a brief profile sent across." },
    { title: "A first class at no cost", description: "Your child works a real topic live, and you both decide whether the teaching style suits." },
    { title: "Terms arrive in writing", description: "Should you wish to carry on, the rate and weekly plan are emailed before any booking is made." },
    { title: "Lessons settle into a rhythm", description: "A regular slot, a summary note after each hour, and a fresh tutor if the chemistry is off." },
  ],

  whyPoints: [
    { title: "Chosen for your paper", description: "The person on screen has taught this very course, board and level, not a neighbouring one." },
    { title: "Outside the highway crush", description: "Lessons start after the evening jam and shift easily when rain or a blocked flyover intervenes." },
    { title: "Straight about local schools", description: "You will not find a padded list here: nothing in Zirakpur could be confirmed, and we say so." },
    { title: "A record parents can read", description: "Each hour ends with a few lines on topics covered, errors spotted and the next task." },
    { title: "Guidance without ghost-writing", description: "Tutors teach method and content, while assessed pieces remain the student's own work." },
    { title: "Little risk at the start", description: "No payment for the first class, terms in writing, and a swap of tutor is free." },
  ],

  faqs: [
    { question: "Is there any IB or IGCSE school in Zirakpur?", answer: "None that we could confirm. The IB directory and Cambridge and Edexcel listings show no authorised school in Zirakpur. The nearest confirmed campuses are two in Chandigarh's Sector 26 and one in Mohali, and Panchkula has none we could verify, so many families use online tuition alongside school." },
    { question: "Will a tutor visit our flat in Zirakpur?", answer: "No. Tutors do not visit homes in Zirakpur, since home visits run only in Gurugram and parts of Delhi NCR. Our online home tuition is a live private lesson over video, taken at your child's own desk, with a tutor who teaches from India on Indian Standard Time." },
    { question: "How do I find IB and IGCSE tutors in Zirakpur for a single subject?", answer: "Message us the programme, subject, level and exam session. We pick a tutor who has taught that paper, share a short profile and set up a free trial. If the match is wrong, another tutor is offered at no extra cost." },
    { question: "What does IB tuition cost in Zirakpur?", answer: "The rate depends on level, subject scarcity, lessons per week and the length of the plan. We do not publish prices. A written quote comes before booking, and it is worth comparing with the real cost of highway travel to a centre." },
    { question: "Which is better for us, a Chandigarh centre or online lessons?", answer: "For most Zirakpur families the online lesson wins on time, because the highway junction can turn a twenty-minute drive into fifty. A centre suits students who want a group and a fixed routine. It is a fair choice either way, and the trial lesson costs nothing." },
    { question: "Can you help my child join an IB or IGCSE school mid-year?", answer: "Yes. A diagnostic lesson shows where your child stands against the new school's paper, and the tutor builds a catch-up plan for only what is missing. Starting in the first fortnight after the move usually saves a difficult term." },
    { question: "Which IB sessions can lessons be planned around?", answer: "Both the May and the November sitting. Your child's school files the entry, so we count back from the paper timetable it gives you. Diploma results come out in July and again in January." },
    { question: "Can a tutor complete my child's internal assessment or essay?", answer: "No, and no reputable tutor should. Ours explain the criteria, discuss method and comment on drafts the student has written, but the internal assessment, Extended Essay, TOK essay and any coursework stay entirely the student's own effort." },
    { question: "What actually happens in the trial lesson?", answer: "Your child works through a genuine topic from their syllabus with the tutor who would be teaching them, live on video. You pay nothing and promise nothing. A few lines follow by message, and terms in writing if you ask for them." },
    { question: "Do you cover Cambridge as well as Edexcel IGCSE?", answer: "We do, and the tutor is picked by board code as well as subject, since the two boards set papers and tiers differently. Tell us which specification your child's school uses and which papers are on the entry." },
    { question: "Should my child choose Maths AA or AI?", answer: "Analysis and Approaches suits a student who likes algebra and calculus and is leaning toward engineering or pure science. Applications and Interpretation fits a future doctor, economist or designer better. A tutor can test strengths in a single session before the Class 11 form is filled." },
    { question: "Can students from Dhakoli, Baltana or Peer Muchalla all join?", answer: "Yes. Lessons are online, so any society in Zirakpur with a steady connection works. We choose slots that avoid the evening jam and suggest a hotspot as backup in case of a broadband outage." },
    { question: "When are lessons held?", answer: "Weekday early evenings and weekend mornings, on Indian Standard Time. Exam blocks can add sessions. Fog days, heavy rain and festival weeks are handled by rescheduling." },
    { question: "Will Indian universities accept the IB Diploma?", answer: "Broadly yes, once the Association of Indian Universities issues an equivalence certificate, and CUET-UG is the usual doorway to central universities. Engineering and medicine hinge on the subjects taken, so confirm JEE and NEET rules before fixing Class 11 subjects." },
    { question: "How do we begin?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's board, subject and level. You will normally hear back within a day or two with a tutor suggestion and a possible trial time." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The same service in cities all over the country." },
    { label: "IB tutors, all programmes", href: "/ib-tutors/", description: "How IB tutoring is organised at IB Gram." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects by board." },
    { label: "Diploma Programme tutoring", href: "/programmes/dp/", description: "Support for Classes 11 and 12." },
    { label: "PYP tutoring", href: "/programmes/pyp/", description: "Primary-years support for younger students." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "AA and AI at SL and HL." },
    { label: "Meet our tutors", href: "/tutors/", description: "Profiles of the tutors who teach lessons." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "IB and IGCSE tutors in Chandigarh", href: "/chandigarh/", description: "The city on Zirakpur's doorstep, with two IB schools in Sector 26." },
    { label: "IB and IGCSE tutors in Mohali", href: "/mohali/", description: "The Punjab-side neighbour with a confirmed IB and Cambridge school." },
    { label: "IB and IGCSE tutors in Panchkula", href: "/panchkula/", description: "The Haryana side of the tricity." },
    { label: "IB and IGCSE tutors in Patiala", href: "/patiala/", description: "Down the Patiala road, another Punjab city served online." },
  ],

  closingHeading: "A free trial lesson at home in Zirakpur, no highway required",
  closingBody:
    "Share your child's programme, subject and exam session, and we will match a tutor and arrange a free first lesson. The rate follows in writing before you decide. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
