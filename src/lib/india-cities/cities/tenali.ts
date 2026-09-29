import type { CitySeoPage } from "../types";

/**
 * /tenali/ - IB and IGCSE online tuition for Tenali, Andhra Pradesh. No IB or Cambridge/Edexcel school inside
 * Tenali could be confirmed, so stripSchools is empty and schoolClusters use nearby cities. Home visits are
 * not offered here (homeTuition: false in plan.ts).
 */
export const tenali: CitySeoPage = {
  slug: "tenali",
  countryName: "Tenali",
  countryNameLong: "Tenali, Andhra Pradesh",
  demonym: "Tenali",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evening lessons after school and tuition hours, with weekend mornings kept for paper practice",
  lastUpdated: "2026-09-21",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  geo: { latitude: 16.2430, longitude: 80.6400 },
  alternateNames: ["Tenali Guntur", "Andhra Paris", "Tenali town"],
  wikipedia: "https://en.wikipedia.org/wiki/Tenali",
  stripSchools: [],

  title: "Tenali IB & IGCSE Tutors | Private Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Tenali students: private one-to-one tuition from home over live video for DP, MYP, PYP and IGCSE, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Tenali",
  heroEyebrow: "PRIVATE ONLINE IB & IGCSE TUITION IN TENALI",
  heroSubtitle:
    "Searching for home tuition in Tenali for an international syllabus? IB Gram offers private one-to-one lessons at home, delivered live over video, for IB PYP, MYP, Diploma and Cambridge or Edexcel IGCSE. The town known as Andhra Paris for its three Krishna canals has plenty of coaching for the state board and JEE or NEET, but hardly anyone who teaches Diploma Chemistry or IGCSE Additional Mathematics, and that is the gap we fill.",
  primaryKeyword: "IB and IGCSE tutors in Tenali",
  imageAltText: "Tenali student and an online tutor reviewing an IB chemistry graph together during a live evening lesson",
  secondaryKeywords: [
    "IB tutor in Tenali",
    "IGCSE tutor in Tenali",
    "IB home tuition Tenali",
    "IGCSE home tuition Tenali",
    "IB private tuition Tenali",
    "IB Maths tutor Tenali",
    "IGCSE Maths tutor Tenali",
    "IB Physics tutor Tenali",
    "IB Chemistry tutor Tenali",
    "IB Biology tutor Tenali",
    "IB DP tutor Tenali",
    "IB MYP tutor Tenali",
    "IB PYP tutor Tenali",
    "IGCSE online tuition Tenali",
    "Cambridge IGCSE tutor Tenali",
    "Edexcel IGCSE tutor Tenali",
    "online home tuition Tenali",
    "IB tutor Kothapeta Tenali",
    "IGCSE tutor Bose Road Tenali",
    "IB tutor Guntur district",
  ],

  heroTrustPoints: [
    "The tutor is chosen for the exact syllabus, so Diploma Chemistry gets a Diploma Chemistry teacher",
    "Lessons happen live on screen, because tutors do not visit homes in Tenali",
    "A free trial lesson comes before any quote or payment",
    "No link with any school, exam board or coaching chain",
    "Each session ends with a written summary for parents",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "IB stages covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "Online", label: "One-to-one, from home" },
    { value: "May & Nov", label: "Main IB exam windows" },
  ],

  intro: {
    heading: "Private IB and IGCSE tuition for students in Tenali",
    paragraphs: [
      "A student in Tenali who is sitting an IB or IGCSE course faces a practical difficulty before any academic one: finding a person who has taught it. The town's tuition market is built for the Andhra Pradesh state board, CBSE and the intermediate years that lead to EAMCET, JEE and NEET. IB Gram supplies the missing piece with one-to-one lessons over video, matched to the course, level and exam series your child is working towards.",
      "Tenali is a municipality of about 165,000 people in Guntur district, set in the Krishna delta. Three canals run through it, which earned the nickname Andhra Paris, and the surrounding land grows rice in quantity. The town is also the birthplace of the court poet Tenali Ramakrishna and of a generation of Telugu film figures. Tenali Junction keeps it well connected by rail, so relatives in Vijayawada, Guntur, Hyderabad and Chennai are part of most family conversations.",
      "We could not confirm an IB World School or a Cambridge or Edexcel IGCSE school within Tenali itself. Families who want these curricula usually look towards Guntur and Vijayawada, to Hyderabad or Chennai for boarding, or to an online international school. So we say plainly: tutoring here is online only. Home visits run in Gurugram and parts of Delhi NCR, not in Tenali.",
      "IB Gram is independent of the International Baccalaureate, Cambridge, Pearson and any school named on this page. Tutors explain, coach and give feedback, but never author a student's Internal Assessment, Extended Essay, Theory of Knowledge essay or coursework. Write to us on WhatsApp at +91 7439 368 115 or at ibgram24@gmail.com and we will set up your free trial.",
    ],
  },

  programmesIntro:
    "Below is how the four IB programmes line up with school years, plus what each tends to mean for a family living in Tenali rather than in a city with an international campus.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "A transdisciplinary primary curriculum where children explore themes through questions. Tutors help with number fluency, reading and putting ideas into words, which the final-year exhibition later depends on.",
      countryNote:
        "For a Tenali child, PYP tuition usually supports an online primary school or prepares for entry to a school in Guntur, Vijayawada or Hyderabad.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "A five-year framework in which eight subject groups are judged against published criteria. Tutors teach students how to read a criterion, plan a response and reflect on their own work.",
      countryNote:
        "Students arriving from Telugu-medium or English-medium state board classes often find criterion-based writing the biggest change, and short weekly lessons make it manageable.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Theory of Knowledge, the Extended Essay and CAS across two years. Tuition targets one subject at a time, with past-paper training and explanations for whichever topics the student finds hardest.",
      countryNote:
        "Tenali students on the Diploma are typically boarders elsewhere or online learners, and a subject tutor at home in the evening fills the gaps a busy timetable leaves.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A hybrid route in which Diploma courses are paired with a career-related qualification and a reflective project. We cover the Diploma course side and academic skills.",
      countryNote:
        "Very few families in the Krishna delta meet CP directly, so most conversations are about how it compares with the full Diploma.",
    },
  ],

  subjectsIntro:
    "These are the IB subjects we can usually staff, at Standard or Higher Level. Ask about anything else and we will answer honestly whether a tutor is available.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, algebraic structure and reasoning, for students heading into engineering or the mathematical sciences." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Statistics, modelling and technology, a good fit for business, economics and life science degrees." },
    { name: "Physics", levels: "SL and HL", description: "From mechanics to fields, with attention to data analysis questions that reward understanding over rote recall." },
    { name: "Chemistry", levels: "SL and HL", description: "Quantitative chemistry, energetics, kinetics and organic reactions, with worked calculations." },
    { name: "Biology", levels: "SL and HL", description: "Cell processes through ecology, with the structured long answers examiners expect." },
    { name: "Economics", levels: "SL and HL", description: "Markets, macroeconomic policy and international trade, with diagram accuracy and evaluation practice." },
    { name: "Business Management", levels: "SL and HL", description: "Case-study reading, quantitative tools and extended responses." },
    { name: "Computer Science", levels: "SL and HL", description: "Programming logic, systems and networks, and precise technical definitions." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Close reading, comparative essays and oral preparation for students whose first language is Telugu." },
    { name: "English B", levels: "SL and HL", description: "Language acquisition for students who need to strengthen written and spoken English." },
    { name: "Hindi B", levels: "SL and HL", description: "Language study in Hindi for students who need a second language for the Diploma." },
    { name: "History", levels: "SL and HL", description: "Sources, argument and essay technique across the prescribed subjects." },
    { name: "Psychology", levels: "SL and HL", description: "Research methods, studies and evaluative writing." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "A blended science and humanities course, relevant to a delta region where water and farming shape daily life." },
  ],
  igcseSubjectsIntro:
    "IGCSE lessons follow either the Cambridge or the Pearson Edexcel specification. We check the syllabus code together in the first session, as the two boards differ in paper structure.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core and Extended", description: "Number, algebra, geometry and statistics with regular timed practice." },
    { name: "IGCSE Additional Mathematics", levels: "Extended", description: "Calculus and functions for students planning IB Mathematics HL or A Level Mathematics." },
    { name: "IGCSE Physics", levels: "Core and Extended", description: "Motion, energy, electricity and waves, including alternative-to-practical papers." },
    { name: "IGCSE Chemistry", levels: "Core and Extended", description: "Atomic structure, reactions and organic chemistry basics." },
    { name: "IGCSE Biology", levels: "Core and Extended", description: "Human biology, plants, genetics and the environment." },
    { name: "IGCSE Combined Science", levels: "Core and Extended", description: "A joint course for students who take one science pathway rather than three." },
    { name: "IGCSE English First Language", levels: "Extended", description: "Composition, directed writing and summary." },
    { name: "IGCSE English as a Second Language", levels: "Core and Extended", description: "All four skills, helpful for Telugu-speaking students." },
    { name: "IGCSE Hindi as a Second Language", levels: "Core and Extended", description: "Reading, writing and grammar in Hindi." },
    { name: "IGCSE Economics", levels: "Extended", description: "Basic economic problems, the price system and government intervention." },
    { name: "IGCSE Business Studies", levels: "Extended", description: "Business structures, marketing and finance through case studies." },
    { name: "IGCSE Computer Science", levels: "Extended", description: "Algorithms, programming and systems theory." },
  ],

  regionsTitle: "Tenali localities and what to know about study timing in each",
  regionsIntro:
    "Tutors reach you by screen, so the address only matters for internet reliability, power and the daily rhythm of school and tuition. These notes reflect that.",
  regions: [
    { name: "Kothapeta", note: "A busy commercial and residential area in the town centre. Evening market activity can be noisy, so a closed room and headphones help with concentration." },
    { name: "Bose Road", note: "One of the main roads for shops and clinics. Families here tend to have children across several boards, so a fixed lesson slot avoids clashes with other tuition." },
    { name: "Gandhi Chowk", note: "The central junction of the town. Traffic thins after school hours, and this is when most students settle down for an evening session." },
    { name: "Nazarpet", note: "A long-established residential area where several generations often share a house, so a quiet study corner is worth arranging." },
    { name: "Chenchupet", note: "An older neighbourhood close to the railway line. Train noise is occasional, so a headset with a microphone is a practical purchase." },
    { name: "Ithanagar", note: "A mixed residential pocket. Ask your broadband provider about fibre, as speeds differ between lanes." },
    { name: "Angalakuduru", note: "A locality on the town's edge with newer housing. Some households rely on mobile data, so a backup hotspot is wise." },
    { name: "Sultanabad", note: "A residential area with a mix of state board and CBSE schoolchildren, some of whom are exploring IGCSE as a step up." },
    { name: "Ramalingeswarapet", note: "A neighbourhood near the town's older streets and canals. During heavy rain, power interruptions are the main risk, so keep devices charged." },
  ],

  schoolClusters: [
    {
      city: "Nearby: Guntur and Vijayawada",
      note: "Neither Tenali nor its two larger neighbours has an IB or Cambridge or Edexcel school we could confirm. Families in the region therefore often plan boarding elsewhere or online study. Check any school directly before relying on this page.",
      schools: [],
    },
    {
      city: "Nearby: Hyderabad",
      note: "Hyderabad is the main destination for Andhra families who choose boarding for an international curriculum, reachable by train or a short flight.",
      schools: ["Chirec International School", "Oakridge International School, Hyderabad"],
    },
    {
      city: "Nearby: Chennai",
      note: "Chennai is served by the Vijayawada-Chennai rail line and has a longer tradition of international schooling.",
      schools: ["American International School Chennai", "Gateway International School"],
    },
  ],
  schoolDisclaimer:
    "IB Gram works independently and is not affiliated with the schools listed, the International Baccalaureate, Cambridge or Pearson. Listing a school does not mean it endorses us or that a Tenali family should pick it, so please confirm curricula and admission rules with the school.",

  modesIntro:
    "Since every lesson for Tenali runs online, the useful question is which pattern of online lessons fits your child and calendar.",
  modes: [
    {
      title: "Ongoing weekly one-to-one",
      description:
        "One steady lesson slot per subject each week, with the same tutor tracking your child's progress from month to month.",
      bullets: [
        "Slot chosen around school and other tuition",
        "Shared digital whiteboard and past papers",
        "Written summary sent after each lesson",
        "Available from PYP to Diploma and IGCSE",
      ],
    },
    {
      title: "Pre-exam revision sprints",
      description:
        "A denser calendar of lessons before an IB or IGCSE series, focused on timed practice and the weakest topics.",
      bullets: [
        "Built back from the exam date",
        "Full papers marked with feedback",
        "Combines with a weekly subscription",
        "Planned around the October cyclone-season weather where possible",
      ],
    },
    {
      title: "Transition tuition into an international syllabus",
      description:
        "A short programme for a student leaving the AP state board or CBSE for IGCSE or the IB, focusing on how marks are earned under the new system.",
      bullets: [
        "Command terms and criterion reading",
        "Closing gaps from previous chapters",
        "Preparation for school entry tests",
        "Continues after any move to another city",
      ],
    },
  ],

  sections: [
    {
      heading: "What does IB or IGCSE tuition cost in Tenali, and what sets the rate?",
      paragraphs: [
        "IB Gram does not publish a rate card. The quote for a Tenali student is prepared in writing after the trial lesson, and it reflects the subject, level, frequency and tutor. Because the rate is written down first, you can compare it against any local option without feeling pressed to decide on the spot.",
        "Level counts for a lot. A tutor for Diploma Higher Level Physics has different experience and availability from a tutor for IGCSE English or MYP Humanities. Programme depth, meaning how far the lessons go beyond classroom content, also plays into it.",
        "Frequency changes the monthly total more than most families expect. One lesson a week keeps a subject warm, while two or three a week in the months before an exam produce faster progress and a larger bill. A number of families begin light and scale up nearer the exam window.",
        "When comparing, ask what a lower price leaves out. Travel to Guntur or Vijayawada takes hours, generalist tutors may not know the syllabus, and there may be no session notes. IB Gram provides a written note after each lesson and a tutor change if the fit is wrong.",
      ],
      bullets: [
        "Subject scarcity at Higher Level",
        "Number of lessons per week",
        "Programme: PYP, MYP, IGCSE or Diploma",
        "Extra intensive blocks before exams",
      ],
    },
    {
      heading: "State board, CBSE, IGCSE and IB in Tenali: which route fits which child?",
      paragraphs: [
        "Most children in Tenali study the Andhra Pradesh state syllabus, with CBSE schools an established second option. The state route leads through the SSC and the intermediate board towards EAMCET, JEE and NEET, and the whole local tuition ecosystem is arranged around that path.",
        "IGCSE and the IB approach learning differently. They reward students who can apply a principle to a new situation and explain it clearly, and they use coursework and internal assessment in ways the state system does not.",
        "The comparison table gives the headline differences. It is a guide only, and a school's own policies always take priority when it comes to entry and subject choice.",
        "The best fit depends on the child. A student who enjoys open-ended questions and writing often thrives in the IB. Another who prefers clear, structured problems may be happier in the state or CBSE stream with focused entrance coaching. A trial lesson shows how a child responds to international-style questions.",
      ],
      table: {
        caption: "Which board suits which Tenali student",
        columns: ["Route", "How marks are earned", "Common exit", "Consider if"],
        rows: [
          ["AP state board", "Written board papers on a set textbook", "EAMCET, JEE, NEET, state universities", "The family wants a familiar, local route with entrance coaching"],
          ["CBSE", "National curriculum papers with competency questions", "CUET-UG, JEE Main, NEET", "The family may relocate within India"],
          ["Cambridge or Edexcel IGCSE", "Extended written papers, some coursework", "A Level, IB Diploma or CBSE Class 11", "A child wants international skills from Class 9"],
          ["IB Diploma", "Six subjects plus TOK, Extended Essay and CAS", "Indian universities via AIU equivalence, overseas degrees", "The plan is study abroad or a broad, balanced curriculum"],
        ],
      },
    },
    {
      heading: "Who in Tenali looks for IB and IGCSE tutors, and what are they trying to solve?",
      paragraphs: [
        "The families asking are a smaller group than those choosing state board coaching, but their need is sharp. One group includes parents in the Amaravati region economy: government staff, engineers, doctors and traders whose children study at international schools further away or online.",
        "Another group are Telugu families with a link abroad. A sibling or cousin in the United States, the United Kingdom, Canada or Australia sets the ambition, and an international syllabus looks like a natural bridge. IGCSE is often the first step.",
        "A third group is families of agricultural and business owners in the delta who can afford a boarding option in Hyderabad or Chennai and want tutoring for the term breaks, or who want a child prepared before a move.",
        "Whatever the reason, the questions are similar: is there a tutor for this exact subject, will lessons fit around school, and how will I know if it works? A free trial, a written note after each lesson and a tutor swap on request answer all three.",
      ],
    },
    {
      heading: "Online home tuition versus coaching institutes, local private tutors and self-study",
      paragraphs: [
        "Tenali's tuition scene includes established coaching institutes and many individual teachers. They are strong for the state board, EAMCET, JEE and NEET. For international syllabuses, though, the options narrow quickly.",
        "Coaching institutes typically teach large batches with a fixed timetable. That helps discipline but does not allow one-to-one attention on a syllabus like IB Chemistry HL. A private tutor in town may be a superb teacher who has simply never seen an IB paper.",
        "Self-study works for some students, particularly with published past papers and mark schemes. Its weak point is feedback: a misunderstanding can stay hidden for months. Online one-to-one lessons add that missing correction, plus a person who knows the specification.",
        "The table lines these up. Many Tenali students blend the options, staying in a coaching batch for JEE or NEET subjects while using IB Gram for the international ones.",
      ],
      table: {
        caption: "Options compared for an IB or IGCSE student in Tenali",
        columns: ["Option", "What it does well", "Where it falls short", "Suits"],
        rows: [
          ["Online one-to-one with IB Gram", "Syllabus-matched tutor, written notes, home convenience", "Needs stable internet and a laptop", "Students needing exact IB or IGCSE expertise"],
          ["Coaching institute batch", "Structure and peer competition", "Rarely covers international syllabuses", "Entrance test preparation"],
          ["Local private tutor", "Flexible and familiar", "May lack IB or IGCSE experience", "State board and CBSE subjects"],
          ["Self-study", "Free and self-paced", "No feedback on errors", "Disciplined senior students"],
        ],
      },
    },
    {
      heading: "How does the Tenali year, with its festivals, heat and cyclone season, affect study?",
      paragraphs: [
        "Tenali's calendar is shaped by farming and festivals. Sankranti in January, Ugadi in spring, Vinayaka Chaturthi and Dasara in the autumn, and Deepavali each pull families away from routine. Tutors can shift lessons earlier or later when they know a big week is coming.",
        "April and May bring intense heat in the delta, and midday study is unrealistic. Evening lessons after five o'clock work better. During the hottest weeks, tutors keep sessions crisp and avoid long unbroken blocks.",
        "October to December is the period when cyclone-linked rain can hit coastal Andhra Pradesh, with power and network interruptions. It is also the time of the IB November session and the IGCSE October-November series, so a mobile hotspot and a charged backup device are sensible.",
        "The table maps the sessions most relevant here. Exam boards change dates, so always check their official pages for the current timetable.",
      ],
      table: {
        caption: "Exam sessions and local timing in Tenali",
        columns: ["Session", "When", "Local consideration"],
        rows: [
          ["IB May session", "May, results in July", "Summer heat, so favour early morning or evening revision"],
          ["IB November session", "November, results in January", "Coincides with cyclone-season rain, so keep a backup connection"],
          ["Cambridge IGCSE May-June", "May to June", "Plan mock papers in March, before peak heat"],
          ["Cambridge IGCSE October-November", "October to November", "Overlaps Dasara and Deepavali, so schedule early"],
          ["Pearson Edexcel IGCSE", "January, May-June, October", "Check which series your school registers for"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE education lead a student from Tenali?",
      paragraphs: [
        "The Diploma opens both Indian and overseas doors. The Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, and many universities accept it for admission, though each sets its own subject requirements.",
        "CUET-UG lets IB students apply to participating central and other universities, and the accepted subject combinations vary by course. For JEE Main and NEET, eligibility conditions come from the National Testing Agency, and IB or IGCSE students must read the year's bulletin before finalising subjects.",
        "Many Tenali families with international ambitions think of the United Kingdom, Canada, the United States, Australia or Singapore. Predicted grades, subject choices and English proficiency all matter in those applications, which is why early planning helps.",
        "IGCSE is a stepping stone rather than an endpoint. After it, a student can pursue A Level, the IB Diploma or CBSE Class 11. Strong Extended Mathematics and separate sciences keep those doors open, and tutors plan lessons with that destination in mind.",
      ],
    },
    {
      heading: "Should a Tenali student pick IB Maths AA or AI, and how demanding are the sciences?",
      paragraphs: [
        "Analysis and Approaches is the choice for students who like algebra, calculus and proof. It is the usual route to engineering, physics, computing and pure mathematics. Applications and Interpretation emphasises data and modelling, and suits economics, business, biology and social sciences.",
        "Students from the Andhra state board are often strong at calculation speed, which is an advantage in AA. What tends to feel new is justification, where a correct answer without reasoning loses marks. We spot this in trial lessons and work on it directly.",
        "IB sciences ask for more than chapter learning. Students interpret data, judge uncertainty and write structured explanations, and complete an internal investigation. Tutors help with all of this but never write or edit the assessed report for the student.",
        "Students taking two Higher Level sciences should plan for consistent weekly work. Short cumulative quizzes, worked solutions and timed sections keep knowledge fresh, and it is generally more effective to add a lesson in the weaker subject than to spread hours evenly.",
      ],
      bullets: [
        "AA suits engineering and pure science ambitions",
        "AI suits business, economics and data-led courses",
        "Justification is the main adjustment for state board students",
        "Internal investigations remain the student's own work",
      ],
    },
    {
      heading: "Core or Extended: how should a Tenali family choose an IGCSE tier?",
      paragraphs: [
        "IGCSE subjects such as Mathematics and the sciences come in two tiers. Core covers the fundamentals and limits the top grade available, while Extended covers the whole syllabus and allows the highest grades. The school normally enters students for a tier.",
        "A student planning IB Diploma or A Level sciences should aim for Extended. Core makes sense for a student who wants a comfortable pass or who is likely to return to the state board or CBSE for Class 11.",
        "Separate sciences versus Combined Science is another decision. Three separate sciences give a stronger foundation for later science study. Combined Science is a lighter load and works for those who will move into humanities or commerce.",
        "In the trial lesson, a tutor can set a short mixed-difficulty task and show which tier feels natural. That gives a Tenali family real evidence to bring to a school conversation instead of guessing.",
      ],
    },
  ],

  process: [
    { title: "Tell us about the student", description: "Share the class, board, subjects and the next exam date on WhatsApp or email." },
    { title: "See a matched tutor", description: "We propose a tutor who has taught your exact syllabus, with a summary of their background." },
    { title: "Join a free online trial", description: "A live lesson using real questions from your child's course." },
    { title: "Read the written quote", description: "Rates and lesson frequency are set out in writing before you book." },
    { title: "Begin lessons and review", description: "Weekly sessions start, notes follow each one, and you can ask for a different tutor at any point." },
  ],
  whyPoints: [
    { title: "Syllabus-matched tutors", description: "You get someone who has taught this course, not a general subject teacher." },
    { title: "Clear about how it works", description: "Lessons are online. We do not imply home visits in Tenali." },
    { title: "Trial before payment", description: "The first lesson is free so you can judge the teaching yourself." },
    { title: "Records parents can read", description: "A short note after each lesson shows what was taught and what to practise." },
    { title: "Easy tutor change", description: "If the match feels wrong, we swap without fuss." },
    { title: "No school agenda", description: "We are independent, so advice follows what suits the student." },
  ],

  faqs: [
    { question: "Can I find an IB or IGCSE tutor in Tenali?", answer: "Yes, online. IB Gram places subject-matched IB and IGCSE tutors with Tenali students through live one-to-one video lessons, taught in Indian Standard Time. Tutors do not visit homes in Tenali. Your child studies at home on a laptop and the tutor is chosen for the specific programme, subject and level." },
    { question: "Do you offer IB or IGCSE home tuition in Tenali?", answer: "We offer online home tuition, not in-person visits. Lessons are private and one-to-one and happen from your own home, but the tutor appears on screen. In-person home tuition runs only in Gurugram and parts of Delhi NCR. For Tenali, live video is the way we teach." },
    { question: "Is there an IB or IGCSE school in Tenali?", answer: "We could not confirm one. Tenali's schools follow the Andhra Pradesh state board, CBSE and similar boards. Families seeking IB or IGCSE typically look to Hyderabad or Chennai for boarding, or to online schools. Curricula change, so ask a school directly before assuming anything from a directory or from this page." },
    { question: "How much does tuition cost for a Tenali student?", answer: "We do not publish prices. The rate depends on programme, subject, level, tutor experience and how many lessons a week you want. A written quote arrives after your free trial and before any booking, so you can compare it calmly. Message us on WhatsApp for a quote." },
    { question: "Is there a free trial?", answer: "Yes, every new student receives a free trial lesson. It is a live session with a tutor matched to your child's course, using genuine questions. You decide afterwards whether to continue. There is no charge and no obligation, and the written note from the session is yours to keep." },
    { question: "Which IGCSE boards do you support?", answer: "We support Cambridge IGCSE and Pearson Edexcel IGCSE. The tutor checks the syllabus code in the first lesson because paper formats and mark schemes differ. Common subjects include Mathematics, Additional Mathematics, Physics, Chemistry, Biology, English, Hindi, Economics, Business Studies and Computer Science." },
    { question: "Will a tutor write my child's IA or Extended Essay?", answer: "No. Tutors coach and never write. They will explain criteria, discuss structure and comment on drafts the student has written, but they do not draft or rewrite Internal Assessments, Extended Essays, Theory of Knowledge essays or coursework. That keeps the work honest and protects the grade's value." },
    { question: "What time are lessons held?", answer: "Lessons run in Indian Standard Time, mostly in the evening or on weekends. In April and May the delta heat makes early morning or evening the comfortable choice. We fix a weekly slot around school and tuition and adjust for festivals, exams and travel if you tell us early." },
    { question: "My child studies in an AP state board school. Can they still take IB or IGCSE lessons?", answer: "Yes. Many students preparing for a move to an international syllabus take bridge lessons that build the writing and reasoning style the new system expects. The tutor starts by checking earlier gaps, then moves onto the target syllabus at a pace that suits the child." },
    { question: "What do we need for online lessons?", answer: "A laptop or tablet, a working internet connection and a quiet place. A notebook or a stylus helps the tutor see the child's working. Because cyclone-season weather can disturb power and data in the delta, keep a mobile hotspot and a charged device ready as a backup." },
    { question: "What if my child does not get along with the tutor?", answer: "Tell us, and we will arrange another tutor without extra charge. Teaching styles differ and a good fit matters especially for teenagers. Most families find a suitable match in the trial or within the first couple of weeks, and the change is handled by us, not you." },
    { question: "Do you teach IB sciences?", answer: "Yes. IB Physics, Chemistry and Biology are taught at Standard and Higher Level by matched tutors. Lessons cover content, calculation, data-based questions and exam technique. Tutors guide investigation planning but the internal assessment itself must be the student's own work." },
    { question: "Will Indian universities accept an IB Diploma?", answer: "Generally yes. The Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, and CUET-UG accepts IB students, with subject rules set by each university. Eligibility for JEE Main and NEET follows the current NTA bulletin, so read it before choosing Diploma subjects." },
    { question: "Which subjects do Tenali students ask about most?", answer: "We expect Mathematics, Physics, Chemistry, Biology and English to lead, reflecting the engineering and medical interests common in coastal Andhra. Economics and Business Management draw interest from business families. If your subject is less usual, message us and we will tell you whether we have a tutor." },
    { question: "How do I start with IB Gram from Tenali?", answer: "Send a WhatsApp message to +91 7439 368 115 or email ibgram24@gmail.com with your child's class, board, subjects and goals. We reply with a matching tutor and a time for a free trial. A written quote follows, and lessons only begin once you are comfortable." },
    { question: "Are younger children in PYP or MYP taught too?", answer: "Yes, we teach PYP and MYP as well as the Diploma and IGCSE. Lessons for younger children are shorter and more visual, and parents can sit in at first. Tutors support reading, number work and reflection habits without completing any graded project for the child." },
  ],

  tutorsIntro:
    "These tutors teach Tenali students online. Each profile lists subjects, levels and syllabuses, so you can see who might teach your child before the free trial.",

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "Start here for an overview of IB and IGCSE tutoring." },
    { label: "Online tuition across India", href: "/india/", description: "How our online lessons work in cities around the country." },
    { label: "Gurugram in-person tuition", href: "/gurgaon/", description: "The area where home visits are actually offered." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subjects and levels covered for IB students." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel subject support." },
    { label: "IB Maths courses", href: "/courses/ib/mathematics/", description: "AA and AI explained with typical topics." },
    { label: "Tutor profiles", href: "/tutors/", description: "Meet the people who teach." },
    { label: "Get in touch", href: "/contact-us/", description: "Ask a question or book a trial." },
    { label: "Guntur tuition", href: "/guntur/", description: "The district headquarters, with a similar online approach." },
    { label: "Vijayawada tuition", href: "/vijayawada/", description: "The larger neighbouring city, covered the same way." },
    { label: "Nellore tuition", href: "/nellore/", description: "Another Andhra Pradesh city we teach online." },
  ],

  closingHeading: "Start with a free lesson from your home in Tenali",
  closingBody:
    "Tell us your child's class, board and subjects on WhatsApp at +91 7439 368 115 or at ibgram24@gmail.com. You will hear back with a proposed tutor, a free trial time and, afterwards, a written quote.",
};
