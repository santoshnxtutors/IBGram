import type { CitySeoPage } from "../types";

/**
 * /dhubri/ - IB and IGCSE tutoring page for Dhubri, Assam. Online-only delivery: tutors do not
 * visit homes in Dhubri, since in-person home tuition is offered only in Gurugram and parts of
 * Delhi NCR. No IB or Cambridge school is confirmed in the town, so the school clusters point to
 * Guwahati and Kolkata and reuse names already confirmed on neighbouring pages.
 */
export const dhubri: CitySeoPage = {
  slug: "dhubri",
  countryName: "Dhubri",
  countryNameLong: "Dhubri, Assam",
  demonym: "Dhubri",
  state: "Assam",
  stateCode: "IN-AS",
  flagCode: "in",
  countryCode: "IN",
  region: "Assam, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons are planned around the Brahmaputra flood weeks, Bohag Bihu and Durga Puja, and otherwise follow your child's own school timetable",
  lastUpdated: "2026-09-21",
  geo: { latitude: 26.0207, longitude: 89.9743 },
  wikipedia: "https://en.wikipedia.org/wiki/Dhubri",
  alternateNames: ["Dhubri town", "Dhubri Assam"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Dhubri | Online Home Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Dhubri, Assam students: DP, MYP, PYP, Cambridge and Edexcel IGCSE, live one-to-one lessons on IST, with a free trial class.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Dhubri",
  heroEyebrow: "IB & IGCSE ONLINE TUITION FOR DHUBRI STUDENTS",
  heroSubtitle:
    "Looking for private tuition from home in Dhubri for an IB or IGCSE course? Nobody in town teaches these syllabuses, so IB Gram brings the tutor to your laptop instead: live one-to-one online lessons, matched to the exact subject, level and exam board your child follows, on Indian Standard Time.",
  primaryKeyword: "IB and IGCSE tutors in Dhubri",
  imageAltText: "A Dhubri student with a laptop and notebook in a live online IB Mathematics lesson",
  secondaryKeywords: [
    "IB tutor Dhubri",
    "IGCSE tutor Dhubri",
    "IB home tuition Dhubri",
    "IGCSE home tuition Dhubri",
    "IB private tuition Dhubri",
    "IB Maths tutor Dhubri",
    "IGCSE Maths tutor Dhubri",
    "IB Physics tutor Dhubri",
    "IB Chemistry tutor Dhubri",
    "IB Biology tutor Dhubri",
    "IB DP tutor Dhubri",
    "IB MYP tutor Dhubri",
    "IB PYP tutor Dhubri",
    "IGCSE online tuition Dhubri",
    "online IB tutor Dhubri Assam",
    "IGCSE tutor Gauripur Dhubri district",
    "IB tutor near Bholanath College Dhubri",
    "Cambridge IGCSE tuition lower Assam",
  ],

  heroTrustPoints: [
    "Tutors are chosen for your child's exact IB subject and level, or IGCSE board and tier",
    "All lessons are live and online, so a school hundreds of kilometres away never limits the choice",
    "A free trial lesson comes first, before any decision or payment",
    "Independent of the IB, Cambridge, Pearson and every school named on this page",
  ],
  heroStats: [
    { value: "IST", label: "Same clock for tutor and student" },
    { value: "PYP to DP", label: "Primary Years to Diploma" },
    { value: "Free trial", label: "One full lesson, no payment" },
    { value: "May & Nov", label: "IB and IGCSE exam sessions" },
  ],

  intro: {
    heading: "What IB and IGCSE tutoring looks like for a family in Dhubri",
    paragraphs: [
      "Dhubri sits where the Brahmaputra and the Gangadhar wrap around three sides of the town, in the far west of Lower Assam. For generations it was a river port for the jute trade, and the old habits of a trading town still shape how families think about schooling: steady, practical, and cautious about anything that cannot be checked. That caution is worth keeping in mind here, because IB and IGCSE tutoring is exactly the sort of thing a careful parent wants to see for themselves before paying.",
      "The plain position is that no school inside Dhubri is confirmed to teach the IB or the Cambridge and Edexcel IGCSE. Children in town follow the Assam state boards or CBSE. Families who do meet these international syllabuses usually do so because a child has been sent to a school in Guwahati, Siliguri or Kolkata, because a parent's posting is about to move the household, or because the family is planning a degree abroad and wants a curriculum that universities read easily.",
      "For those families, private tuition from home over a video link is the only workable kind of support, and it works better than the phrase suggests. A tutor who teaches IB Chemistry or IGCSE Mathematics every week, with a shared digital whiteboard and past papers on screen, can do everything a visiting tutor would do for a subject of this kind, without an hour of road travel on either side.",
      "To be clear about the format: tutors from IB Gram do not visit homes in Dhubri. In-person home tuition runs only in Gurugram and parts of Delhi NCR. Everywhere else, including Dhubri, lessons are one-to-one and online, which means a steady broadband or mobile data connection and a laptop are the only things a household needs to arrange.",
    ],
    bullets: [
      "IB PYP, MYP and Diploma tutoring, with HL and SL subjects matched separately",
      "Cambridge and Pearson Edexcel IGCSE, Core or Extended, Foundation or Higher",
      "Live one-to-one online lessons scheduled on IST, including evenings and weekends",
      "A free trial lesson and a written note after every session",
      "No in-person home visits in Dhubri; those run only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "Children in Dhubri usually begin on the Assam board or CBSE, and the international programmes arrive later and from outside the town. Here is how each IB stage looks from a Dhubri family's seat, and where a tutor fits in it.",
  programmes: [
    {
      code: "PYP",
      ageRange: "Class 1-5, ages 6-11",
      name: "IB Primary Years Programme",
      description:
        "The PYP replaces the textbook chapter with a unit of inquiry: a big idea such as how people use rivers, explored across languages, maths and science over several weeks. Children are assessed on what they can explain and do, and the programme ends with a small self-directed Exhibition. A tutor's job is to keep reading, number sense and written expression steady underneath all that project work.",
      countryNote:
        "A Dhubri child on PYP is almost always studying away from town, often in Guwahati. Families tend to ask for support with English reading, maths fluency and the confidence to speak up in a discussion-based classroom.",
    },
    {
      code: "MYP",
      ageRange: "Class 6-10, ages 11-16",
      name: "IB Middle Years Programme",
      description:
        "MYP marks every subject against four criteria rather than one total, so a student can understand the content and still lose marks on how the answer is framed. Interdisciplinary units, a service component and the Personal Project in the last year round it out. Tutoring here is mostly about decoding the criteria and practising the command words.",
      countryNote:
        "For Dhubri families the MYP years are the moment of decision about whether to continue into the Diploma. Tutors help a child judge honestly which subjects suit Higher Level before the choice is made, using real MYP work as evidence.",
    },
    {
      code: "DP",
      ageRange: "Class 11-12, ages 16-19",
      name: "IB Diploma Programme",
      description:
        "Six subjects are studied over two years, three at Higher Level and three at Standard, alongside Theory of Knowledge, the Extended Essay and the CAS requirement. Internal assessments count towards the final grade in most subjects. It is a heavy load, and a steady weekly tutor is frequently what keeps it manageable.",
      countryNote:
        "Dhubri DP students are few, so requests are specific: Mathematics, Physics and Chemistry for future engineers and doctors, Economics and Business Management for those heading to commerce degrees, and English B for students who switched language of schooling late.",
    },
    {
      code: "CP",
      ageRange: "Class 11-12, ages 16-19",
      name: "IB Career-related Programme",
      description:
        "The Career-related Programme pairs at least two Diploma Programme courses with a career-related study, a reflective project and personal and professional skills. It suits students who want a vocational direction but still need a recognised international qualification.",
      countryNote:
        "CP is rare anywhere in north-east India, and no Dhubri family has reason to expect it locally. Where a child does take it elsewhere, tutoring usually narrows to the two academic courses and the reflective project's structure.",
    },
  ],

  subjectsIntro:
    "Two students from Dhubri can both be in IB Mathematics and need very different help, because Analysis and Approaches and Applications and Interpretation are separate courses with separate papers. Matching starts from the precise course code, never from a subject name alone.",
  subjects: [
    { levels: "HL / SL", name: "IB Maths Analysis & Approaches", description: "Built for students who enjoy algebra and calculus for their own sake. Paper 3 at Higher Level asks for extended reasoning, and tutoring spends real time on proof-style writing and on recovering marks when a line of working goes wrong." },
    { levels: "HL / SL", name: "IB Maths Applications & Interpretation", description: "Technology is central here, so a tutor must be fluent with the graphic display calculator and with spreadsheet-style modelling. The Mathematical Exploration is coached for structure and reflection, never written for the student." },
    { levels: "HL / SL", name: "IB Physics", description: "Mechanics, fields, waves and modern physics are assessed through data-heavy questions. Students who can read a graph and propagate uncertainty usually gain more than those who simply memorise formulae." },
    { levels: "HL / SL", name: "IB Chemistry", description: "Equilibrium, kinetics and organic reaction pathways carry much of the weight. A tutor builds a habit of writing balanced equations with states, since examiners reward that detail." },
    { levels: "HL / SL", name: "IB Biology", description: "Ecology, genetics and physiology all arrive in the course, and the command word decides the answer: outline, explain and evaluate are three different tasks. Practice is built around that distinction." },
    { levels: "HL / SL", name: "IB Economics", description: "Diagrams must be drawn, labelled and then explained in words. Tutoring trains the chain of reasoning from a change in the market to a real-world consequence, with current examples." },
    { levels: "HL / SL", name: "IB Business Management", description: "Case-study papers reward structured answers that use the supplied data. Students practise quoting numbers from the stimulus material and judging them, rather than reciting textbook definitions." },
    { levels: "HL / SL", name: "IB English A: Language and Literature", description: "Paper 1 textual analysis and the Individual Oral are both skills that improve with timed, marked repetition. Tutors give feedback on argument and close reading without drafting anything for the student." },
    { levels: "SL", name: "IB English B", description: "For students whose first languages are Assamese, Bengali or Hindi, this course depends on steady vocabulary and accurate written register. Practice uses real texts and timed writing." },
    { levels: "HL / SL", name: "IB Computer Science", description: "Algorithms, data structures and a programming-based internal assessment. A tutor explains the logic of a trace table and keeps code comments and documentation in line with the criteria." },
    { levels: "HL / SL", name: "IB History", description: "Source analysis and essay planning over a chosen route through twentieth-century topics. Students learn to weigh origin, purpose, value and limitation without padding." },
    { levels: "SL", name: "IB Hindi B and Bengali B", description: "Language acquisition courses that suit Dhubri students who already speak the language at home. The focus is on formal writing, listening comprehension and the oral assessment." },
    { levels: "SL", name: "IB Environmental Systems and Societies", description: "An interdisciplinary course that connects well with a river-town childhood, with floods, sediment and land use as natural case studies. Tutoring focuses on data questions and evaluation." },
  ],
  igcseSubjectsIntro:
    "IGCSE is offered by two boards, Cambridge and Pearson Edexcel, and the syllabus codes differ even when subject names match. Tutors teach from the code on your child's entry form, with the right tier, Core or Extended, Foundation or Higher.",
  igcseSubjects: [
    { levels: "Core / Extended", name: "Cambridge IGCSE Mathematics 0580", description: "Extended students are expected to show full working across non-calculator and calculator papers. Tutoring drills algebra, trigonometry and graphs until method marks become automatic." },
    { levels: "Grade 10", name: "Cambridge IGCSE Additional Mathematics 0606", description: "A stretch course in calculus, functions and trigonometry, often taken by students aiming at IB Maths HL or Indian engineering pathways later." },
    { levels: "Foundation / Higher", name: "Edexcel IGCSE Mathematics A 4MA1", description: "Edexcel phrases questions differently from Cambridge, with more multi-step problem solving in the later questions. A tutor trains students on that style specifically." },
    { levels: "Core / Extended", name: "Cambridge IGCSE Physics 0625", description: "Electricity, thermal physics and waves dominate the marks. Students practise rearranging equations and explaining experiments in complete sentences." },
    { levels: "Core / Extended", name: "Cambridge IGCSE Chemistry 0620", description: "Stoichiometry, the periodic table and organic basics, plus the alternative-to-practical paper that many students find unfamiliar without rehearsal." },
    { levels: "Core / Extended", name: "Cambridge IGCSE Biology 0610", description: "Cell biology, human physiology and ecosystems, with data-handling questions that reward careful reading of graphs and tables." },
    { levels: "Grade 9-10", name: "Cambridge IGCSE English as a Second Language 0510", description: "A fit for students whose home language is Assamese, Bengali or Hindi. Reading, writing, listening and speaking are each practised under exam conditions." },
    { levels: "Grade 9-10", name: "Cambridge IGCSE Economics 0455", description: "Clear diagrams, definitions and short evaluative paragraphs. Tutoring builds the habit of linking each point to cause and effect." },
    { levels: "Grade 9-10", name: "Cambridge IGCSE Computer Science 0478", description: "Pseudocode, logic gates and networks, with a written paper that rewards precise technical vocabulary." },
    { levels: "Grade 9-10", name: "Cambridge IGCSE Hindi as a Second Language", description: "For students who want a strong language grade alongside science and maths, with a steady plan for writing and comprehension." },
  ],

  regionsTitle: "Dhubri areas where our online IB and IGCSE tutors reach students",
  regionsIntro:
    "Lessons in Dhubri are online, so these areas are listed for context, not travel: which colleges and institutions shape each neighbourhood, and how the usual evening routine affects a good lesson slot. Nearby towns are named where families there commonly look to Dhubri.",
  regions: [
    { name: "Dhubri town centre and the old river port", note: "The historic trading core on the Brahmaputra bank, home to families from jute and wholesale trade who often think of schooling as a long-term investment." },
    { name: "Dhubri Sahib Gurdwara riverfront", note: "One of the town's best-known landmarks, with residential lanes behind the river road. Evenings are quieter here, which suits a focused lesson." },
    { name: "Bholanath College area", note: "Around the oldest college in western Assam, a neighbourhood with teachers, college staff and students who are already comfortable with structured study." },
    { name: "Dhubri Medical College area", note: "Home to doctors and medical staff, many of whom are interested in an international curriculum for their children and in NEET-compatible science depth." },
    { name: "Dhubri Girls' College locality", note: "An established educational pocket where households tend to value steady weekday routines and early evening study." },
    { name: "Railway station and Bidyapara side", note: "A busy, commercial part of town where shopkeeping families keep long hours, so lesson times are often set after the evening rush." },
    { name: "Rupsi road and airport side", note: "The road towards Rupsi Airport, about 15 km away, which has carried commercial flights since 2021 and suits families with relatives who travel." },
    { name: "Gauripur (nearby town)", note: "A separate town in Dhubri district where students often look to Dhubri for coaching and services. Online lessons remove the commute entirely." },
    { name: "Bilasipara (nearby town)", note: "Another district town where good in-person subject tutors for international syllabuses are simply unavailable, so online is the practical route." },
    { name: "Golakganj (nearby town)", note: "Close to the West Bengal border, with families who often compare schooling in Assam, North Bengal and Kolkata." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service. The schools mentioned here are listed only to show where Dhubri families realistically find IB or Cambridge schooling; they are not partners, and nothing implies endorsement by them, the IB, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Dhubri itself",
      note: "No school in Dhubri is confirmed to offer the IB Diploma, MYP, PYP or Cambridge and Edexcel IGCSE. Local options are Assam board and CBSE schools, so local choice for international curricula is limited.",
      schools: [],
    },
    {
      city: "Nearby: Guwahati",
      note: "The main city of Assam, roughly 270 km east by road. Families who want an international curriculum without leaving the state generally begin the search here.",
      schools: ["International School Guwahati"],
    },
    {
      city: "Nearby: Kolkata",
      note: "Dhubri has a long rail and cultural link with Bengal, and a number of families look to Kolkata for boarding or relocation. Distances are large, so these are options to research, not commutes.",
      schools: ["The Heritage School", "Calcutta International School"],
    },
  ],

  modesIntro:
    "Since every lesson is online, the real question for a Dhubri family is not the venue but the rhythm: how often, how intensely, and with what review. These three patterns cover most needs.",
  modes: [
    {
      title: "Weekly live one-to-one lessons",
      description:
        "One fixed slot each week with a single tutor, a shared whiteboard and a short written note afterwards. It fits the ordinary school term and keeps the same person familiar with your child's gaps.",
      bullets: [
        "The same tutor throughout the term",
        "Works for IB DP, MYP, PYP and IGCSE",
        "Past papers and diagrams worked live on screen",
        "Slots scheduled around school, not the other way round",
      ],
    },
    {
      title: "Twice-weekly support in a demanding subject",
      description:
        "For a subject that has fallen behind, such as IB Physics HL or IGCSE Additional Mathematics, two sessions a week allow concepts to be taught and then practised before they fade.",
      bullets: [
        "A written baseline in the first fortnight",
        "Separate sessions for theory and for exam practice",
        "Progress reviewed in writing every few weeks",
        "Easy to scale down once the student is steady",
      ],
    },
    {
      title: "Intensive blocks before mocks and May or November exams",
      description:
        "Three to four sessions a week for a short stretch, using timed papers and marking against the current mark schemes, arranged so that Durga Puja and exam dates do not collide.",
      bullets: [
        "Timed papers marked to official criteria",
        "Feedback within days",
        "Best begun three to four weeks before the exam window",
        "Festival and flood weeks planned in advance",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE schools and families in Dhubri",
      paragraphs: [
        "Dhubri is a district headquarters with a long institutional history: a municipality since 1883, Bholanath College founded in 1946, a medical college and hospital, and a girls' college. What it does not have, as far as can be confirmed, is a school teaching the IB or the Cambridge and Edexcel IGCSE. That is not unusual for a town of its size in lower Assam, where CBSE and the state boards carry nearly all secondary schooling.",
        "The families who look for IB and IGCSE tutors in Dhubri come from a handful of situations. Some have a child boarding or living with relatives in Guwahati, where an international school offers the syllabus. Some are doctors or officials who expect a transfer and want a curriculum that travels. Others are business families with relatives abroad who are planning overseas study and like the credibility of an international qualification.",
        "Each of those families runs into the same practical problem. There is no local specialist, and a general tutor of CBSE science is not the same as an IB Chemistry tutor who knows how internal assessments and paper structures work. The mismatch shows up quickly in marks: a student can understand the science and still lose points because an answer is shaped for the wrong board.",
        "This is where matching by exact syllabus matters more than matching by city. A tutor in another state who teaches the same IB course weekly is more useful to a Dhubri child than a general tutor next door, and the online format makes the distance irrelevant. The rest of this page explains how that works in practice.",
      ],
      table: {
        caption: "Where Dhubri families actually find IB and IGCSE schooling",
        columns: ["Place", "Distance from Dhubri", "What is available"],
        rows: [
          ["Dhubri town", "Local", "Assam state board and CBSE schools; no confirmed IB or Cambridge school"],
          ["Guwahati", "About 270 km by road", "International School Guwahati, among the options to research for an international curriculum"],
          ["Kolkata", "A long rail or air journey", "The Heritage School and Calcutta International School, listed on neighbouring city pages"],
          ["Online from Dhubri", "No travel", "IB Gram tutors for IB and IGCSE subjects, live and one-to-one"],
        ],
      },
      bullets: [
        "No school in Dhubri is confirmed to offer the IB or Cambridge IGCSE",
        "Most families meet these syllabuses through a school elsewhere",
        "Matching by exact course code matters more than proximity",
        "Online lessons work the same way in Dhubri as in any big city",
      ],
    },
    {
      heading: "Assam board, CBSE, IB and IGCSE: how do they differ for a Dhubri student?",
      paragraphs: [
        "The four systems reward different habits. Assam's board examinations, run by SEBA at Class 10 and AHSEC at Class 12, lean on textbook content and recall. CBSE is more standardised and leans on the NCERT text. IB and IGCSE both test application, and they expect answers in full sentences with reasoning shown.",
        "A Dhubri student moving from the state board to IGCSE usually finds the mathematics content familiar but the question style new. Problems are framed in context, and marks are given for method, not only for the final number. In science, practical-skills papers and data questions appear that a state board student may never have seen.",
        "Moving to the IB Diploma is a bigger step. Six subjects run together, three at Higher Level, and internal assessments count towards the final grade. The Extended Essay and Theory of Knowledge add writing and thinking tasks that have no counterpart in either the state board or CBSE.",
        "None of this means one board is stronger than another. It means that a child who switches needs time and targeted practice on the new style, and a tutor who has taught that exact syllabus can shorten that adjustment considerably.",
      ],
      table: {
        caption: "Board comparison for a Dhubri family",
        columns: ["Feature", "Assam board", "CBSE", "IGCSE", "IB Diploma"],
        rows: [
          ["Typical exam style", "Textbook-based written papers", "NCERT-based papers", "Structured and extended answers", "Extended answers plus coursework"],
          ["Language of instruction", "Assamese, Bengali or English", "English or Hindi", "English", "English"],
          ["Assessment mix", "Mostly final exams", "Mostly final exams", "Final exams, some coursework", "Exams plus internal assessments"],
          ["Local availability in Dhubri", "Widely available", "Available", "Not confirmed locally", "Not confirmed locally"],
          ["Tutor support", "Local tutors common", "Local tutors common", "Online specialists", "Online specialists"],
        ],
      },
      bullets: [
        "State board and CBSE tutors cannot replace IB or IGCSE specialists",
        "Method marks matter far more in IGCSE and IB",
        "The first term after a switch is where most marks are lost",
        "A written baseline in the first fortnight shows what to fix first",
      ],
    },
    {
      heading: "What does IB and IGCSE tuition cost in Dhubri?",
      paragraphs: [
        "There is no fixed price list, and rates are quoted in writing before any booking. What a family pays depends on a handful of things, and understanding them makes the conversation with any tutoring service shorter and clearer.",
        "The programme and level come first. IB Diploma Higher Level Mathematics or Physics involves a tutor with deeper subject knowledge than MYP Sciences or a first-year IGCSE subject. Scarcity matters too: a tutor who can teach both IB Chemistry HL and its internal assessment structure is harder to find than a general science teacher.",
        "Frequency and duration shape the total. One lesson a week costs less per month than an intensive block before a mock, but a steady weekly schedule often lowers the need for an expensive last-minute push. Families in Dhubri commonly begin with weekly lessons and add a short intensive period before exams.",
        "Lastly, the format itself is a saving. Because lessons are online, there is no travel cost, no travel time to pay for and no restriction to tutors within a short drive. A student in Dhubri pays for teaching, not for a commute.",
        "To get a figure, send the programme, subject, level and preferred hours to IB Gram. A quote arrives in writing before anything is booked, and the free trial lesson comes first.",
      ],
      bullets: [
        "Level and programme are the main drivers of the rate",
        "Weekly lessons cost less per month than intensive blocks",
        "No travel cost for online tutoring",
        "Written quotes before booking, with a free trial first",
        "A tutor can be changed if the fit is wrong",
      ],
    },
    {
      heading: "Online home tuition, local tutors, coaching centres or self-study?",
      paragraphs: [
        "For an IB or IGCSE student in Dhubri, the options are fewer than in a large city. The clear choices are online one-to-one tuition, a local private tutor who teaches related boards, a general coaching centre, or self-study with past papers.",
        "A local tutor is convenient and familiar, but someone who teaches state-board and CBSE children cannot easily coach IB internal assessments or IGCSE tier choices. A coaching centre in town tends to be built around entrance exams such as JEE and NEET and group batches rather than one student's syllabus.",
        "Online one-to-one tuition removes the geography problem. The tutor is chosen by subject and level, the lesson is live, and a shared screen handles diagrams, graphs and past papers. A written note after each session gives parents a clear record of what was covered.",
        "Self-study has a place, especially in the last weeks before exams, but it pays off once a tutor has already shown how marks are earned. Without that, a student can practise hard and still repeat the same errors on every paper.",
      ],
      table: {
        caption: "Tuition options for IB and IGCSE students in Dhubri",
        columns: ["Option", "Specialist IB or IGCSE knowledge", "Flexible timing", "Travel needed", "Good for"],
        rows: [
          ["Online one-to-one from IB Gram", "High", "Yes, evenings and weekends", "None", "Exact-syllabus support for any programme"],
          ["Local private tutor", "Usually low for IB or IGCSE", "Often", "Some", "General subject help for related boards"],
          ["Coaching centre", "Low", "Fixed batch times", "Daily", "JEE or NEET preparation in groups"],
          ["Self-study with past papers", "Depends on the student", "Fully flexible", "None", "Last-stage practice after a foundation is built"],
        ],
      },
      bullets: [
        "Online specialists fill the gap no local provider can",
        "Coaching centres focus on entrance exams, not IB or IGCSE papers",
        "Self-study works best after guided teaching",
        "Combining options is common and often sensible",
      ],
    },
    {
      heading: "Exam calendar and the Dhubri school year: what should families plan around?",
      paragraphs: [
        "IB and IGCSE exams run on a global calendar, while a Dhubri family lives on an Assam calendar shaped by the Brahmaputra. The two need to be laid side by side well ahead of time, or lessons will collide with floods, festivals and travel.",
        "The IB Diploma has a May session for most students, with results in July, and some schools also use a November session. IGCSE follows a May and June series and an October and November series, with results in August and January. Mock examinations usually fall in the winter or early spring, and internal assessment deadlines sit well before them.",
        "In Dhubri, the monsoon months, from roughly June to September, can bring flooding across the district. Internet outages and transport disruption become real possibilities, so important lessons are best not scheduled for the peak of the flood season without a backup plan.",
        "Bohag Bihu in April brings a week of celebration, Durga Puja in autumn often pauses schedules for several days, and Eid takes place according to the lunar calendar. A good plan puts these dates on the calendar in advance and moves lessons rather than cancelling them.",
      ],
      table: {
        caption: "A year in the life of an IB or IGCSE student in Dhubri",
        columns: ["Period", "What is happening", "Planning advice"],
        rows: [
          ["January to March", "Winter cool, mock exams, IA drafts", "Good months for regular weekly lessons and mock preparation"],
          ["April", "Bohag Bihu, study leave begins", "Plan around the holiday week; start intensive blocks after it"],
          ["May to June", "IB and IGCSE May exams; early monsoon", "Keep revision blocks short and confirm internet backup"],
          ["July to September", "Peak monsoon and flood risk", "Plan for possible outages; shift lessons rather than skip them"],
          ["October to November", "Durga Puja, autumn IGCSE series and IB November session", "Schedule before and after the festival break"],
          ["December", "Cool and dry, term-end", "Ideal for catching up on weaker topics"],
        ],
      },
      bullets: [
        "IB and IGCSE exams follow global dates, not local ones",
        "Flood-season outages are planned for, not ignored",
        "Bohag Bihu and Durga Puja are moved around, not skipped",
        "Start intensive revision three to four weeks before the exam window",
      ],
    },
    {
      heading: "University pathways from Dhubri: what do IB and IGCSE students need to know?",
      paragraphs: [
        "Students from Dhubri with an IB Diploma have more options than many families expect. Indian universities accept the Diploma with recognition through the Association of Indian Universities, and the Common University Entrance Test, CUET-UG, is open to students from the IB and Cambridge boards for central university admissions.",
        "Engineering and medicine need a closer look. JEE Main and NEET-UG both have subject requirements, typically Physics, Chemistry and either Mathematics or Biology, and a student from the IB or IGCSE stream must check the current eligibility rules before choosing subjects, because those rules have been revised in the past.",
        "Study abroad is the route many IB families have in mind from the start. The IB is widely read by universities in the United Kingdom, the United States, Canada, Australia and Europe, and Cambridge IGCSE followed by A Level is equally familiar. Predicted grades matter, so steady work across the two years counts.",
        "For students who wish to stay in Assam, degree colleges such as those affiliated to Gauhati University and the state's professional institutions are options, and equivalence certificates are usually needed. A tutor cannot decide any of this, but can flag which subject and level choices keep doors open.",
      ],
      table: {
        caption: "University routes for IB and IGCSE students from Dhubri",
        columns: ["Route", "Key requirement", "What tutoring helps with"],
        rows: [
          ["Indian central universities through CUET-UG", "Subject-wise entrance test plus board equivalence", "Keeping IB or IGCSE subjects aligned with the test domains"],
          ["Engineering through JEE Main", "Physics, Chemistry, Mathematics as eligibility subjects", "Mathematics and Physics depth at HL or Extended"],
          ["Medicine through NEET-UG", "Physics, Chemistry, Biology as required subjects", "Biology and Chemistry depth"],
          ["Study abroad", "Predicted and final IB or A Level grades", "Consistent marks and strong internal assessments"],
        ],
      },
      bullets: [
        "Always check equivalence and eligibility rules for the year of application",
        "Subject and level choices in Class 11 shape later doors",
        "Tutors coach; they do not write coursework",
        "Starting early gives more room to fix weak topics",
      ],
    },
    {
      heading: "What does IB Maths, Physics and Chemistry tutoring involve for a Dhubri student?",
      paragraphs: [
        "IB Mathematics comes in two courses, Analysis and Approaches and Applications and Interpretation, each at Standard or Higher Level. A tutor first checks that the course fits the student's plans, because the two are not interchangeable for future engineering.",
        "Sessions follow a pattern. A new idea is explained, worked through a few examples, and then a past-paper question is attempted by the student on screen. The tutor listens to the reasoning and corrects it at the moment it goes wrong. Calculators, including the graphic display model, are taught as a skill, not a shortcut.",
        "IB Physics and Chemistry share a pattern. The content is demanding, but many marks are lost on units, significant figures, definitions and uncertainty. Tutors therefore spend time on the habits that examiners reward: stating the law, substituting with units, and explaining in a sentence what the number means.",
        "The internal assessments deserve separate care. A tutor can explain the criteria, discuss how to choose a workable research question, and comment on a draft structure. The investigation and the writing remain the student's own, since IB Gram tutors coach and never write coursework for students.",
      ],
      bullets: [
        "Course choice between Analysis and Approaches and Applications and Interpretation checked first",
        "Past-paper practice on screen, with live correction",
        "Unit, uncertainty and definition habits built early",
        "Internal assessment criteria explained, not written for the student",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Dhubri student choose subjects and tiers?",
      paragraphs: [
        "IGCSE students normally take six to nine subjects, and in Mathematics and the sciences Cambridge offers Core and Extended tiers, while Edexcel offers Foundation and Higher. The tier decides the highest grade available, so it is worth a careful conversation.",
        "Core caps the top grade at a C in Cambridge, and Foundation at a 5 in Edexcel. A student who is comfortable with algebra and enjoys problem-solving is usually better placed in Extended or Higher, particularly if the next step is IB or A Level Mathematics or Sciences.",
        "Subject choice should reflect the next stage. A student heading to engineering benefits from Mathematics, Additional Mathematics, Physics and Chemistry. A student drawn to medicine benefits from Biology and Chemistry alongside Mathematics. Commerce-minded students often pair Economics and Business Studies with English.",
        "English needs deliberate thought in a household where Assamese, Bengali or Hindi is the home language. English as a Second Language and English First Language are separate syllabuses, and some universities ask for one rather than the other, so it is worth checking early.",
      ],
      table: {
        caption: "IGCSE tiers at a glance",
        columns: ["Board", "Lower tier", "Higher tier", "Top grade in lower tier"],
        rows: [
          ["Cambridge Mathematics 0580", "Core", "Extended", "Grade C"],
          ["Cambridge sciences", "Core", "Extended", "Grade C"],
          ["Edexcel Mathematics A 4MA1", "Foundation", "Higher", "Grade 5"],
        ],
      },
      bullets: [
        "Pick the tier with the next stage in mind",
        "Extended or Higher keeps A Level and IB Maths doors open",
        "English as a Second Language and First Language are not interchangeable",
        "A tutor can test a student on past papers before the tier is fixed",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE to students across India. For a Dhubri family, each match is made on subject, level, board and the evening hours that suit your household.",

  process: [
    { title: "Send your child's details", description: "Share the programme or board, subject, level, exam session and the days and times that work in a Dhubri household." },
    { title: "Review a short list of tutors", description: "You receive a few suggestions with a clear reason for each, based on the syllabus your child follows." },
    { title: "Attend a free trial lesson", description: "One real topic is taught live, online, with no payment and no obligation to continue." },
    { title: "Agree a written plan", description: "Frequency, first-month goals and the rate are confirmed in writing before any booking." },
    { title: "Review and adjust", description: "A short note follows each session, progress is reviewed every few weeks, and the tutor can be changed if the fit is wrong." },
  ],

  whyPoints: [
    { title: "Matched by exact syllabus", description: "Tutors are chosen for the course and level your child studies, not as a general subject teacher." },
    { title: "Distance stops mattering", description: "No IB or Cambridge school is confirmed in Dhubri, so the search covers India and the lessons run online." },
    { title: "A trial before any commitment", description: "The first lesson is free, so the decision rests on what you actually see." },
    { title: "Coaching, never ghost-writing", description: "Tutors explain criteria and give feedback, while IAs, the Extended Essay and coursework stay the student's own work." },
    { title: "Plain written progress notes", description: "A short note follows every lesson, so parents always know what was covered and what comes next." },
    { title: "Easy to change or stop", description: "No lock-in, and a replacement tutor whenever the fit is not right." },
  ],

  faqs: [
    { question: "How do I find an IB tutor in Dhubri?", answer: "Send the programme, subject, level and exam session to IB Gram on WhatsApp or email and a matched tutor is suggested. Because no IB school is confirmed in Dhubri, the tutor is chosen from across India and teaches online. You then attend a free trial lesson and decide afterwards, with the rate quoted in writing beforehand." },
    { question: "Do you offer IGCSE home tuition in Dhubri for Cambridge and Edexcel?", answer: "Yes, for both boards, but as online home tuition, not home visits. The student takes live one-to-one lessons from home on a laptop. Tutors are matched to the syllabus code and the tier, Core or Extended, Foundation or Higher, so the lesson follows the actual paper your child will sit." },
    { question: "Do your tutors visit homes in Dhubri?", answer: "No. In-person home tuition runs only in Gurugram and parts of Delhi NCR. In Dhubri every lesson is online and one-to-one, so a tutor never travels to your area. All that is needed on your side is a laptop, a quiet corner and a reliable connection at the agreed hour." },
    { question: "What does an IB or IGCSE tutor in Dhubri cost?", answer: "The rate depends on the programme, the level, the subject and how many sessions a week you need, and it is quoted in writing before booking. IB Diploma Higher Level subjects generally take more specialist teaching than early IGCSE. Online lessons remove travel costs, and the first trial lesson is free." },
    { question: "Which schools near Dhubri offer IB or IGCSE?", answer: "None in Dhubri town is confirmed to do so. The nearest options to research are in Guwahati, where International School Guwahati is listed on our neighbouring page, and in Kolkata for families willing to relocate. Always confirm current curriculum directly with any school before making plans." },
    { question: "Is there a free trial lesson before I commit?", answer: "Yes. The trial is a full live lesson on a real topic from your child's syllabus, taught online by the tutor proposed for the match. No payment is taken and nothing is booked until you have seen how the tutor teaches, how your child responds and whether the pace feels right." },
    { question: "Can a tutor help with IB Internal Assessments from Dhubri?", answer: "Yes, within clear limits. A tutor can explain the criteria, discuss how to shape a workable research question and give feedback on structure. The investigation, data and writing must be the student's own, because IB Gram tutors coach and never write IAs, Extended Essays, TOK essays or coursework." },
    { question: "Which IB Diploma subjects can you cover for a Dhubri student?", answer: "Mathematics in both Analysis and Approaches and Applications and Interpretation, Physics, Chemistry, Biology, Economics, Business Management, English, Computer Science, History and several language courses including Hindi and Bengali. Tell us the exact subject and level, HL or SL, so the match is precise." },
    { question: "Do you tutor MYP and PYP students connected to Dhubri?", answer: "Yes, every stage from PYP to DP is covered. For younger children the emphasis is on reading, number sense and confident expression, while MYP tutoring works on criteria-based marking and the Personal Project's structure. Sessions are shorter and more interactive for primary-age students." },
    { question: "Is online tutoring as effective as in-person tuition for IB and IGCSE?", answer: "For these subjects, yes, when the tutor is the right specialist and the lessons are live. A shared whiteboard and screen-shared past papers replace the page on a desk. In a town without local IB or IGCSE specialists, the online route usually gives a stronger match than any in-person option." },
    { question: "How are tutors verified?", answer: "Qualifications and subject knowledge are checked, along with experience teaching the specific syllabus, and a trial lesson lets you judge teaching style directly. A tutor who is not working out is replaced at no penalty. Parents also receive a short written note after each session to track progress." },
    { question: "When should a Dhubri student start IB or IGCSE tutoring?", answer: "As early in the course as possible, ideally in the first term. Early help builds habits that keep paying off, such as showing full working, using command words correctly and planning internal assessments. Starting in the final months is still worthwhile but leaves little room to correct older gaps." },
    { question: "My child is moving from the Assam board or CBSE to IB or IGCSE. Can a tutor help?", answer: "Yes, and this is one of the most common reasons families contact us. The content is often familiar, but the question style, criteria-based marking and expected answer length are different. A tutor identifies the gaps in the first fortnight and builds a plan to close them." },
    { question: "Can lessons take place on weekends or late evenings?", answer: "Yes. Most Dhubri students take lessons after school on weekday evenings or on weekends, and slots are fixed around the family's routine. Because tutors are based in India and teach on IST, there is no time-zone difficulty. Festival and flood weeks can be rescheduled with notice." },
    { question: "What if we are not happy with the tutor?", answer: "Tell us, and a different tutor is found. There is no penalty and no awkward conversation with the first tutor. The fit between student and tutor matters more than anything else, so a change is treated as a normal part of finding the right match, not as a failure." },
    { question: "Is IB Gram affiliated with any school, the IB, Cambridge or Pearson?", answer: "No. IB Gram is an independent tutoring service. School names on this page are used only to describe geography, and nothing on the page suggests endorsement by the IB, Cambridge, Pearson or any school. Families should always confirm details directly with the relevant school or examining body." },
    { question: "Can you help with JEE or NEET alongside IB or IGCSE?", answer: "Partly. IB and IGCSE tutors strengthen Physics, Chemistry, Biology and Mathematics concepts that overlap with entrance exams, but IB Gram does not run JEE or NEET coaching batches. Students aiming at both usually pair IB or IGCSE tutoring with a separate entrance plan, and check eligibility rules for the year." },
  ],

  internalLinks: [
    { label: "Home", href: "/", description: "IB Gram's main page, for a first look at how the service is organised." },
    { label: "IB tutoring across India", href: "/india/", description: "How families in other Indian cities approach the same IB and IGCSE questions." },
    { label: "IB and IGCSE home tuition in Gurgaon", href: "/gurgaon/", description: "The one city where home visits are offered, for context on how the service differs." },
    { label: "IB tutors", href: "/ib-tutors/", description: "An overview of IB subjects and how tutors are matched to them." },
    { label: "IGCSE guide", href: "/igcse/", description: "Cambridge and Edexcel compared, with tiers and subject codes." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "HL and SL subjects, TOK, the Extended Essay and CAS explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project in plain terms." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the PYP Exhibition." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between Analysis and Approaches and Applications and Interpretation." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles organised by subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's details and arrange a trial lesson." },
    { label: "IB and IGCSE tutoring in Guwahati", href: "/guwahati/", description: "The nearest big city in Assam, where many Dhubri families begin their school search." },
    { label: "IB and IGCSE tutoring in Siliguri", href: "/siliguri/", description: "A North Bengal city that some families in western Assam consider for schooling." },
  ],

  closingHeading: "Book your Dhubri child's free trial lesson",
  closingBody:
    "Send the programme or board, subject, level and the evening hours that suit your household in Dhubri. A tutor matched to that exact syllabus will teach a free trial lesson online, and the rate is quoted in writing only after you have seen how it goes. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
