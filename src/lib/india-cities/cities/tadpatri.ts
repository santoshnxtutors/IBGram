import type { CitySeoPage } from "../types";

/**
 * No school in Tadpatri could be confirmed for the IB or Cambridge/Edexcel IGCSE, so stripSchools is
 * empty. The clusters reuse names already verified on the Kurnool, Anantapur and Bengaluru pages and
 * are labelled as nearby, with the distances stated honestly.
 */
export const tadpatri: CitySeoPage = {
  slug: "tadpatri",
  countryName: "Tadpatri",
  countryNameLong: "Tadpatri (Tadipatri), Andhra Pradesh",
  demonym: "Tadpatri",
  flagCode: "in",
  countryCode: "IN",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Cooler evening hours after the day's heat has eased, plus Sunday mornings before it builds again",
  lastUpdated: "2026-09-21",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  geo: { latitude: 14.9091, longitude: 78.0091 },
  wikipedia: "https://en.wikipedia.org/wiki/Tadpatri",
  alternateNames: ["Tadipatri", "Tadipatri Anantapur", "Tadapatri"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Tadpatri | Private Tuition at Home",
  metaDescription:
    "Private IB and IGCSE tuition for Tadpatri students, taught live one-to-one online from home by tutors who know your syllabus. Start with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Tadpatri",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR TADPATRI",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE students in Tadpatri, given as live online lessons with a tutor who already teaches your child's course. Tadpatri sits on the Penna river in the Rayalaseema country of Anantapur district, where a Telugu-medium or CBSE school day is the norm and international syllabuses are almost unknown. That makes matching a student with the right specialist tutor the most important decision a family here can take.",
  primaryKeyword: "IB and IGCSE tutors in Tadpatri",
  imageAltText: "Tadpatri student in a home study corner following a live IGCSE Biology lesson with an online tutor",
  secondaryKeywords: [
    "IB tutor in Tadpatri",
    "IGCSE tutor in Tadpatri",
    "IB home tuition Tadpatri",
    "IGCSE home tuition Tadpatri",
    "IB private tuition Tadpatri",
    "IB Maths tutor Tadpatri",
    "IGCSE Maths tutor Tadpatri",
    "IB Physics tutor Tadpatri",
    "IB Chemistry tutor Tadpatri",
    "IB Biology tutor Tadpatri",
    "IB DP tutor Tadpatri",
    "IB MYP tutor Tadpatri",
    "IB PYP tutor Tadpatri",
    "IGCSE online tuition Tadpatri",
    "IB tutor Tadipatri",
    "IGCSE tutor Tadipatri",
    "IB tuition Anantapur district",
    "IB online tuition Rayalaseema",
  ],

  heroTrustPoints: [
    "Live private lessons, one student and one tutor",
    "Tutors experienced in IB PYP, MYP, DP and Cambridge or Edexcel IGCSE",
    "Evening slots that avoid the hottest hours of the day",
    "Free trial lesson, written rate, no advance payment",
    "Short written note after each lesson, tutor change at no charge",
  ],
  heroStats: [
    { value: "IST", label: "Indian Standard Time" },
    { value: "PYP to DP", label: "The full IB range" },
    { value: "Free trial", label: "Before any payment" },
    { value: "May & Nov", label: "Exam sessions covered" },
  ],

  intro: {
    heading: "An international syllabus, studied in a Rayalaseema town",
    paragraphs: [
      "Tadpatri is best known for its two old temples on the banks of the Penna, the Chintala Venkataramana and Bugga Ramalingeswara shrines, and for a limestone and cement economy that has drawn engineers and managers to the district. Around it lies the dry, sun-baked country of Anantapur, where the school calendar is set by Andhra Pradesh's own boards and by the heat. Most children study for the state SSC and Intermediate, or for CBSE, with EAPCET, NEET and JEE as the usual next stop. A few study something else altogether.",
      "Those few are the students we serve. Some are children of engineers and managers posted to industry in the region and used to an international syllabus elsewhere. Some belong to families with relatives in the Gulf, the United States or the United Kingdom who want an IGCSE or IB record. Others have been placed in a distance or online international programme because a school in Bengaluru or Hyderabad is simply too far. In every case, the nearest person who has taught Chemistry HL or IGCSE Extended Mathematics is a long drive away.",
      "Our IB and IGCSE tutors in Tadpatri arrangement removes that distance. Lessons are live, private and taught from India on Indian time, and the student sits at home. Below are the details a Tadpatri parent needs: what schools really exist, how the boards differ, how rates are set, how the exam calendar fits a Rayalaseema year, what universities ask for and how each subject is taught. We are independent of the IB, Cambridge, Pearson and any school, and tutors coach but never write assessed work.",
    ],
  },

  programmesIntro:
    "For Tadpatri families, the programme almost never comes from a local school. It usually arrives through a transfer, a distance provider or a plan to study abroad, and the tutor's job depends on which.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Learning through themed units and a final Exhibition. Tutoring stays light and playful, with reading, number work and confident spoken explanation.",
      countryNote:
        "Rarely met in Tadpatri itself. When a child arrives from a PYP school elsewhere, a short weekly session keeps the approach familiar.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Criteria-based assessment in eight subject areas and a Personal Project. Tutors focus on reading task instructions and shaping clear written answers.",
      countryNote:
        "A student used to Telugu-medium or state-syllabus exams must learn a new written style. Early MYP lessons therefore spend time on structure.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, Theory of Knowledge, the Extended Essay and CAS. Tutors teach the content and the exam method but never write internal assessments.",
      countryNote:
        "With no local school to lean on, a Tadpatri Diploma student's private tutor often carries Higher Level teaching almost alone.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "DP courses combined with a career-related study and a project. Tutors work on the academic courses.",
      countryNote:
        "Very unlikely to be found locally; we take requests and pair a tutor with the chosen courses.",
    },
  ],

  subjectsIntro:
    "Each course is given to a tutor who has taught that level before and who can adjust the pace to a student who may be seeing the IB style for the first time.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, algebra and proof, with HL topics introduced steadily." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and technology work for Paper 2." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through fields and nuclear physics, plus data-response practice." },
    { name: "Chemistry", levels: "SL / HL", description: "Stoichiometry, energetics, kinetics and organic chemistry." },
    { name: "Biology", levels: "SL / HL", description: "Cell biology, genetics, physiology and ecology with precise terminology." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Drought, water use and land management make a ready supply of local case material." },
    { name: "Economics", levels: "SL / HL", description: "Diagram work, evaluation and case questions using Indian examples." },
    { name: "Business Management", levels: "SL / HL", description: "Tools, calculations and unseen case analysis." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms and programming logic in exam form." },
    { name: "Geography", levels: "SL / HL", description: "Resources, population and change, plus fieldwork method." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Text analysis, commentary and comparative essays." },
    { name: "Telugu and Hindi support", levels: "School-based / SL", description: "Help with Telugu or Hindi where the school offers it, and Hindi B for those who take it." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion practice for knowledge questions; the essay is the student's own." },
  ],

  igcseSubjectsIntro:
    "Whether a student sits Cambridge or Pearson Edexcel, tutors are matched to that board's specification, because the papers are not interchangeable.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, geometry and statistics with paper practice." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, energy, waves, electricity and atoms." },
    { name: "Chemistry", levels: "Core / Extended", description: "Bonding, reactions, electrolysis and organic basics." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, transport, inheritance and ecology." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For students on a double-award science route." },
    { name: "English as a First or Second Language", levels: "Core / Extended", description: "Reading, writing and speaking preparation." },
    { name: "Geography", levels: "Single tier", description: "Case studies and skills papers." },
    { name: "Computer Science", levels: "Single tier", description: "Programming and data representation." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Concepts and numeric questions." },
    { name: "Hindi and Telugu as second languages", levels: "Core / Extended", description: "Reading, writing and oral work where a school offers them." },
  ],

  regionsTitle: "Tadpatri and the surrounding Anantapur towns",
  regionsIntro:
    "Students live across a small-town and village landscape where the bus or the family two-wheeler decides the schedule. These notes show how a day usually runs in each pocket.",
  regions: [
    { name: "Tadpatri town centre", note: "The main bazaar and the roads around the two riverside temples. Evenings are lively during temple festivals, so lessons on those days are best booked early." },
    { name: "Penna riverside and the temple lanes", note: "Older residential lanes on the river bank where extended families live together; a quiet corner of the house helps for online lessons." },
    { name: "Railway station and Gooty road", note: "The east side of town, connected to Guntakal and Gooty by road and rail. Families here often have a parent who works away and returns at the weekend." },
    { name: "Cement and industrial belt", note: "Colonies and layouts around the cement plants and mines, home to engineers and managers whose children have often studied elsewhere." },
    { name: "Yadiki", note: "A nearby mandal town, with families who travel to Tadpatri for shopping and schooling and prefer evening slots." },
    { name: "Peddapappur and Pamidi side", note: "Rural mandals near Tadpatri where school options are thinner and home learning matters more." },
    { name: "Gooty", note: "A historic town with a hill fort, about thirty kilometres away, sometimes chosen for schooling by Tadpatri families." },
    { name: "Guntakal", note: "A railway junction city nearby and the usual gateway to Bengaluru and Hyderabad by train." },
    { name: "Anantapur city", note: "The district headquarters, with universities and more schooling choice. See our separate page for Anantapur." },
  ],

  schoolClusters: [
    {
      city: "Tadpatri and Anantapur district",
      note: "We could not confirm any school in Tadpatri or elsewhere in the district as an IB World School or a Cambridge or Edexcel centre. Local choice for these syllabuses is, in plain terms, nothing we can verify.",
      schools: [],
    },
    {
      city: "Nearby: Kurnool and Nandyal",
      note: "The closest confirmed options are in the Kurnool region, a few hours away. They suit boarding or a family move more than a daily journey from Tadpatri.",
      schools: ["Monte International School, Kallur", "Nandi Academy International School, Nandyal"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Bengaluru has the region's deepest choice of IB and Cambridge schools. From Tadpatri it is a serious journey, so families use it for boarding or relocation.",
      schools: ["Stonehill International School", "Canadian International School, Bengaluru"],
    },
    {
      city: "Nearby: Hyderabad",
      note: "Hyderabad is the other big option, again a long trip from Tadpatri. Listed for families researching boarding.",
      schools: ["International School of Hyderabad, Patancheru", "Oakridge International School, Hyderabad"],
    },
  ],
  schoolDisclaimer:
    "The schools above are listed only to show where confirmed IB or Cambridge options exist in relation to Tadpatri. IB Gram is an independent service, not affiliated with the IB, Cambridge, Pearson or any school, and every school sets its own admissions.",

  modesIntro:
    "Tutors do not visit homes in Tadpatri, so all three formats are live online lessons taken at home. Each is designed for the heat, the distances and the small-town calendar.",
  modes: [
    {
      title: "Private online tuition at home",
      description: "One student and one tutor in a live lesson, on your own laptop at your own desk.",
      bullets: ["Shared screen for papers and diagrams", "Same tutor throughout", "Written note after each class"],
    },
    {
      title: "Pre-exam revision intensive",
      description: "A short, dense series of lessons before school tests or an IB or IGCSE exam session.",
      bullets: ["Timed paper practice with feedback", "Mark-scheme literacy", "Slots that avoid mid-afternoon heat"],
    },
    {
      title: "Steady weekly tutoring",
      description: "One lesson a week in a single subject, running all year.",
      bullets: ["Suits MYP and IGCSE years", "Breaks for Sankranti and Dasara", "Subject can change mid-year"],
    },
  ],

  tutorsIntro:
    "Tutors teach from across India on Indian Standard Time, so a Tadpatri student's evening lesson is never at an awkward hour for the tutor.",

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Tadpatri?",
      paragraphs: [
        "There is none that we could confirm. Searching the IB school directory and Cambridge and Edexcel lists turned up nothing in Tadpatri, and nothing in the surrounding Anantapur towns. Tadpatri has good private schools, some with strong records in the state and CBSE boards and in entrance-exam preparation, but none we could verify as authorised for an international syllabus.",
        "The nearest confirmed schools are in the Kurnool and Nandyal area, in Bengaluru and in Hyderabad. Every one is a long journey from Tadpatri, which limits the choice to boarding or moving house. Many families weigh that carefully and decide to stay put.",
        "So who studies the IB or IGCSE in Tadpatri? Typically, a family with a link to industry in the area, a returning NRI household, or parents planning study abroad who want the qualification on the record. Often the school is elsewhere, or online, and the child studies at home with limited subject support.",
        "We prefer to state these facts plainly. If a Tadpatri school begins an authorised international programme, we can start tutoring against that syllabus in a matter of days.",
      ],
    },
    {
      heading: "Andhra Pradesh SSC, Intermediate, CBSE, IB and IGCSE: what changes?",
      paragraphs: [
        "Andhra Pradesh's own boards, the SSC in Class 10 and the Intermediate at 17 to 18, are the everyday route in Tadpatri, with EAPCET as the entrance gate for engineering and much of medicine and pharmacy. CBSE is also present in private schools. All of these reward completeness of syllabus and accuracy of recall.",
        "The IB and IGCSE ask something different. IGCSE examiners expect tightly worded answers that match a mark scheme, and the IB asks students to apply ideas to unfamiliar situations in longer answers. A strong student from a state or CBSE background is not weak, only unpractised in that style.",
        "The table lays out the differences.",
      ],
      table: {
        caption: "Boards from a Tadpatri family's point of view",
        columns: ["Board", "What the papers reward", "Medium", "Typical destination", "Local help"],
        rows: [
          ["AP SSC and Intermediate", "Completeness and recall", "Telugu or English", "EAPCET, NEET, state colleges", "Abundant"],
          ["CBSE", "NCERT-centred accuracy", "English", "JEE, NEET, CUET-UG", "Good"],
          ["Cambridge or Edexcel IGCSE", "Precise, mark-scheme answers", "English", "IB, A Level or Indian Class 11", "Extremely limited"],
          ["IB Diploma", "Application, reasoning, extended writing", "English", "Indian and overseas universities", "None we could confirm"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Tadpatri?",
      paragraphs: [
        "Parents in Tadpatri usually ask this first, and the honest answer is that it depends. We do not publish a price list. What we do is send a written quote before you book, so the cost is clear before your child ever sits a lesson.",
        "Four things move the rate. The first is level: a Higher Level Diploma science needs a tutor with substantial experience, and a Class 7 MYP science lesson does not. The second is how few tutors teach the subject; Computer Science HL or Geography HL are harder to staff than English.",
        "The third is the shape of the plan. Weekly support across a year is easier to schedule than a rush of daily lessons in the fortnight before a paper. The fourth is timing. Late October and early April are the busy periods.",
        "There is one more consideration particular to Tadpatri. The other route to an international syllabus usually means boarding at a school in another city, and comparing online tuition with that cost changes the picture entirely.",
      ],
      bullets: [
        "Level of the course",
        "Scarcity of qualified tutors in that subject",
        "Lessons per week and length of plan",
        "Exam-season demand",
      ],
    },
    {
      heading: "Online lessons, city coaching, a local tutor or self-study: which works from Tadpatri?",
      paragraphs: [
        "Four options are open to a Tadpatri student. Online private lessons put a specialist at the desk. City coaching in Anantapur, Bengaluru or Hyderabad offers depth but demands travel. A local tutor is close and familiar with state and CBSE syllabuses. Self-study costs nothing but attention, and works only for the most disciplined.",
      ],
      table: {
        caption: "Support routes for an IB or IGCSE student in Tadpatri",
        columns: ["Route", "Syllabus knowledge", "Travel", "Best when"],
        rows: [
          ["Live private online lessons", "Matched to the exact paper", "None", "The paper is international and no local expert exists"],
          ["City coaching in Anantapur or beyond", "Varies; mostly Indian boards", "Long, regular", "The student boards or lives near a city"],
          ["Local private tutor", "State and CBSE trained", "Little", "Revising content the student already knows"],
          ["Self-study", "Whatever the student can manage", "None", "The student is strong and self-directed"],
        ],
      },
    },
    {
      heading: "Heat, Sankranti and exam sessions: the Tadpatri study year",
      paragraphs: [
        "A student in Tadpatri plans study around heat as much as around the syllabus. Summer temperatures across Anantapur district regularly climb into the forties, and afternoons from April to June are hard on both children and devices. Evening slots after the heat has eased hold up better.",
        "Festivals mark the rest of the calendar. Sankranti in January, Ugadi in spring, Vinayaka Chavithi, Dasara and Deepavali in autumn, along with temple festivals in Tadpatri itself, all interrupt lessons. Lessons are moved, not lost.",
        "The IB Diploma has May and November exam sessions, with results in July and January. Cambridge IGCSE has sessions around February and March, May and June, and October and November, and Pearson Edexcel International GCSE has January, May and June, and October and November. The school or centre registers the entry, and tutors plan backwards from those dates.",
      ],
      table: {
        caption: "Tadpatri's study calendar at a glance",
        columns: ["Months", "Local life", "Effect on study", "Tutoring adjustment"],
        rows: [
          ["Jan to Feb", "Sankranti holidays; IGCSE series starts", "Broken weeks", "Moveable lessons, mock papers"],
          ["Mar to Jun", "Ugadi; extreme heat; IB May exams", "Fatigue and power strain", "Evening slots, buffer minutes"],
          ["Jul to Sep", "Monsoon showers, Vinayaka Chavithi; IB results", "New term begins", "Foundation lessons before pace increases"],
          ["Oct to Dec", "Dasara, Deepavali; November exams", "Festival gaps", "Front-loaded revision, spare weeks"],
        ],
      },
    },
    {
      heading: "What happens after IB or IGCSE for a Tadpatri student?",
      paragraphs: [
        "Within reach of Tadpatri are Jawaharlal Nehru Technological University and Sri Krishnadevaraya University in Anantapur, the Central University of Andhra Pradesh, and the Sri Sathya Sai Institute at Puttaparthi. Most IB or IGCSE students, however, look further afield: to Bengaluru, Hyderabad, Chennai or Delhi for engineering and medicine, or abroad.",
        "IB Diploma holders apply to Indian universities with an equivalence certificate from the Association of Indian Universities, and CUET-UG is the standard route to central universities. Engineering and medicine depend on subject combinations, so eligibility for JEE and NEET should be checked with the exam authority before Class 11 subjects are locked in.",
        "IGCSE students choose between IB, A Level and an Indian Class 11 stream. The right time to choose is Class 9 or the first half of Class 10, so that the final IGCSE year can be planned around the intended path.",
        "Study abroad is common in the region's families, with the Gulf, the United Kingdom and the United States as familiar destinations. Predicted grades, school reports and English tests matter, and tutoring can help lift the grades those applications rest on.",
      ],
    },
    {
      heading: "How do IB Mathematics AA and AI, and the sciences, get taught to a Tadpatri student?",
      paragraphs: [
        "The choice between Analysis and Approaches and Applications and Interpretation is best made by reviewing what the student enjoys. AA goes deep into calculus and proof, and suits future engineers and scientists. AI emphasises statistics and modelling, and suits future economists, doctors and designers.",
        "A typical Tadpatri student is strong on procedure from years of state or CBSE practice, and needs help with modelling questions and with explaining reasoning in words. Tutors start there, then work through topics with past questions, building speed and accuracy together.",
        "In the sciences, tutors focus on the weak links. Physics students practise dimensional analysis and data-based questions. Chemistry students get repeated mole and equilibrium calculations. Biology students learn the exact vocabulary that mark schemes reward.",
        "Each science includes an internal investigation. The work belongs to the student. A tutor may explain the criteria and how to plan a fair test, but does not carry out or correct the report.",
      ],
    },
    {
      heading: "Choosing IGCSE tiers, boards and subjects from a small town",
      paragraphs: [
        "Students should start by settling the board. Cambridge and Pearson Edexcel both offer respected international qualifications, but their papers differ in structure and grading. If your child is registered through a centre elsewhere, ask which board and which papers they are entered for.",
        "Next comes tier. Cambridge Core caps the grade a student can earn, and Extended opens the whole range. Edexcel's Foundation and Higher tiers work similarly. A student aiming at science at IB or A Level should generally sit Extended or Higher.",
        "Finally, subject mix. Keeping mathematics, all three sciences and English on the list preserves engineering and medicine. A student leaning toward business could add economics or business studies.",
        "For Telugu-medium students, extended English writing is often the hardest paper. A few weeks of directed-writing practice, with feedback on each attempt, usually closes most of that gap.",
      ],
    },
    {
      heading: "How do you keep a live lesson reliable in a small town?",
      paragraphs: [
        "Small-town connectivity is a fair worry and it deserves a straight answer. Most Tadpatri households have fibre or a decent mobile connection, but there are outages, especially during storms and in the hottest weeks when power demand spikes.",
        "The practical solution is layered. A laptop with a charged battery covers short power cuts. A mobile hotspot covers a broadband failure. Tutors record what was covered in the written note, so a lesson interrupted halfway can be resumed without losing ground.",
        "Set-up matters too. A quiet corner, a headset, a notebook and a phone camera pointed at the page for handwritten work make lessons run smoothly. Tutors check this in the trial class, and adjust the lesson format if something is not working.",
      ],
    },
    {
      heading: "What does a typical first month look like for a Tadpatri student?",
      paragraphs: [
        "The first week is diagnostic. After the free lesson, the tutor asks for the school's syllabus outline, a recent test or two and a list of topics the student finds hardest. From those the tutor drafts a plan that is written down and shared with the parent, so both sides know what the next four weeks are meant to achieve.",
        "In weeks two and three, lessons settle into a rhythm. A typical hour opens with a few questions from the previous session, moves to a new topic or a weak one, and closes with a short exercise for the student to try alone. The written note afterwards records the topics, the mistakes and the task set.",
        "By the end of the month, most families can tell whether the fit is right. The student should be able to say what the last lesson was about in a couple of sentences, and the marks on practice questions should show some movement. If not, the tutor is changed, and no time is lost in the process.",
        "Parents in Tadpatri often ask how much they need to be involved. Less than they fear. A glance at the weekly note and a check that the laptop is charged before the lesson is usually all it takes.",
      ],
    },
  ],

  process: [
    { title: "Tell us what you need", description: "Send the programme, subject, level and exam date through WhatsApp or email." },
    { title: "Meet a matched tutor", description: "We propose a tutor who has taught your child's paper, with a short profile." },
    { title: "Try one free lesson", description: "A live class on a real topic, with nothing to pay and no obligation." },
    { title: "Get the rate in writing", description: "If it fits, we send the rate and plan in writing before anything begins." },
    { title: "Study week by week", description: "Regular lessons, a written note after each, and a tutor change if needed." },
  ],

  whyPoints: [
    { title: "Right tutor for the right paper", description: "Your child's tutor has taught the exact course, board and level." },
    { title: "Planned around the heat", description: "Lessons run in the cooler evening window, with spare minutes for interruptions." },
    { title: "Direct about local options", description: "We say plainly that no school in Tadpatri could be confirmed for these syllabuses, and plan on that basis." },
    { title: "Notes that make sense", description: "After each lesson, a short note lists what was covered and what is next." },
    { title: "Coaching with limits", description: "Tutors explain and coach; they do not write internal assessments, essays or coursework." },
    { title: "Easy to start, easy to change", description: "The first lesson is free, the rate is written, and a tutor swap costs nothing." },
  ],

  faqs: [
    { question: "Are there IB or IGCSE schools in Tadpatri?", answer: "None that we could confirm. We checked the IB directory and Cambridge and Edexcel listings and found no authorised school in Tadpatri or in the neighbouring Anantapur towns. The nearest confirmed options are in the Kurnool area, Bengaluru and Hyderabad, all far away, which is why live online tuition matters here." },
    { question: "Will a tutor come to our house in Tadpatri?", answer: "No. Tutors do not visit homes in Tadpatri, since home visits run only in Gurugram and parts of Delhi NCR. Our online home tuition is a live lesson over video with your child at home, and the tutor teaches from India on Indian Standard Time." },
    { question: "How do I find IB and IGCSE tutors in Tadpatri for one subject?", answer: "Message us the programme, subject, level and exam session. We pick a tutor who has taught that paper, share a short profile and set a free trial. If the fit is wrong, we change the tutor at no extra cost." },
    { question: "What does IB tuition cost in Tadpatri?", answer: "The rate depends on level, subject scarcity, lessons per week and how long the plan runs. We do not publish prices. A written quote is sent before booking, and it is worth comparing with the cost of boarding in a city." },
    { question: "Will power cuts or weak internet spoil the lessons?", answer: "They can interrupt, but they do not have to derail. A charged laptop and a mobile hotspot cover most gaps, and any lost time is moved to another slot that week. Tutors also leave a written note so the next lesson picks up where the last one stopped." },
    { question: "Can a student moving from the AP board switch to IB or IGCSE?", answer: "Yes, and starting early helps. Content overlaps more than parents expect, but the style of question and the length of answer are new. Tutors work on that first, then fill topic gaps as they show up." },
    { question: "Which IB exam sessions do you prepare students for?", answer: "Both the May and November sessions. The student's school or registered centre handles entry, and we plan lessons backwards from the paper dates. IB results arrive in July and January." },
    { question: "Will a tutor write my child's internal assessment or Extended Essay?", answer: "No. Tutors coach and explain, and never write internal assessments, Extended Essays, TOK essays or coursework. They can go through the criteria and give feedback on drafts the student wrote." },
    { question: "How does the free trial lesson work?", answer: "It is a real live class on a topic from your child's syllabus with the tutor who would teach them. There is no fee and no commitment. You receive a short written note afterwards, and the rate in writing if you wish to continue." },
    { question: "Do you teach both Cambridge and Edexcel?", answer: "Yes. Tutors are matched by board code because the papers and tiers differ. Tell us which board your child sits, and we will find a tutor who knows its papers." },
    { question: "Which Mathematics course should my child pick, AA or AI?", answer: "Analysis and Approaches suits students who enjoy algebra and calculus and may study engineering or physical sciences. Applications and Interpretation suits students headed toward medicine, business or social sciences. A tutor can review your child's strengths before the choice is made." },
    { question: "Can students from Yadiki, Gooty or nearby villages join?", answer: "Yes. Since lessons are online, any home with a steady connection works. We plan around bus times and family schedules, and we recommend a hotspot backup in villages where the signal drops." },
    { question: "When are lessons held?", answer: "Weekday evenings and Sunday mornings are the usual choices, on Indian Standard Time, because they avoid the hottest hours of the day. Exam blocks may add extra slots. Festival weeks are handled by rescheduling." },
    { question: "Is the IB Diploma valid for Indian universities?", answer: "Generally yes, with an Association of Indian Universities equivalence certificate, and CUET-UG is the standard route for central universities. Engineering and medicine depend on subject choices, so check JEE and NEET rules before finalising Class 11 subjects." },
    { question: "How do we get started?", answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's board, subject and level. A tutor match and trial time usually follow within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The same service, city by city." },
    { label: "IB tutors, every programme", href: "/ib-tutors/", description: "How IB tutoring is organised at IB Gram." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel subjects." },
    { label: "Diploma Programme tutoring", href: "/programmes/dp/", description: "Support for Classes 11 and 12." },
    { label: "PYP tutoring", href: "/programmes/pyp/", description: "Primary-years support for younger students." },
    { label: "IB Mathematics tutoring", href: "/courses/ib/mathematics/", description: "AA and AI at SL and HL." },
    { label: "Meet our tutors", href: "/tutors/", description: "Profiles of the tutors who teach lessons." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "IB and IGCSE tutors in Anantapur", href: "/anantapur/", description: "The district headquarters, close to Tadpatri." },
    { label: "IB and IGCSE tutors in Guntakal", href: "/guntakal/", description: "The nearby railway junction city." },
    { label: "IB and IGCSE tutors in Kurnool", href: "/kurnool/", description: "The Kurnool region, with the closest confirmed international schools." },
    { label: "IB and IGCSE tutors in Kadapa", href: "/kadapa/", description: "Another Rayalaseema city served by the same online model." },
  ],

  closingHeading: "A free first lesson, from your own home in Tadpatri",
  closingBody:
    "Share your child's programme, subject and exam session, and we will pair a tutor and arrange a free trial class. The rate follows in writing before you decide anything. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
