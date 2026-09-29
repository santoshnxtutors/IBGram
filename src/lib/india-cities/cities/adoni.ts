import type { CitySeoPage } from "../types";

/**
 * /adoni/ - IB and IGCSE tutoring for Adoni, Kurnool district, Andhra Pradesh. Online only.
 * Skoodos lists no IB or IGCSE school for Adoni, so stripSchools is empty and the clusters point to
 * Kurnool, Hyderabad and Bengaluru, clearly labelled as nearby.
 */
export const adoni: CitySeoPage = {
  slug: "adoni",
  countryName: "Adoni",
  countryNameLong: "Adoni, Andhra Pradesh",
  demonym: "Adoni",
  flagCode: "in",
  countryCode: "IN",
  state: "Andhra Pradesh",
  stateCode: "IN-AP",
  region: "Andhra Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early-evening and weekend slots, kept clear of Adoni's hottest afternoons and the Sankranti and Dasara holidays",
  lastUpdated: "2026-09-21",
  geo: { latitude: 15.628, longitude: 77.275 },
  wikipedia: "https://en.wikipedia.org/wiki/Adoni",
  alternateNames: ["Adavani", "Adoni Kurnool"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Adoni | Private Tuition from Home",
  metaDescription:
    "IB and IGCSE tutors in Adoni offering private one-to-one tuition from home over video, matched to your syllabus, timed around summer heat, free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Adoni",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION IN ADONI",
  heroSubtitle:
    "Private tuition from home is the practical way to study the IB or IGCSE in Adoni, a cotton-trading town in the west of Kurnool district with no international-curriculum school we could find. A subject tutor teaches your child live, one to one, on a laptop from your own house, pitched at the exact IB level or Cambridge and Edexcel code, so nobody has to leave town or switch schools to get proper syllabus support.",
  primaryKeyword: "IB and IGCSE tutors in Adoni",
  imageAltText: "A student in Adoni revising IGCSE Mathematics with a live online tutor at a home desk",
  secondaryKeywords: [
    "IB tutor Adoni",
    "IGCSE tutor Adoni",
    "IB home tuition Adoni",
    "IGCSE home tuition Adoni",
    "IB private tuition Adoni",
    "IB online tuition Adoni",
    "IGCSE online tuition Adoni",
    "IB Maths tutor Adoni",
    "IGCSE Maths tutor Adoni",
    "IB Physics tutor Adoni",
    "IB Chemistry tutor Adoni",
    "IB Biology tutor Adoni",
    "IB DP tutor Adoni",
    "IB MYP tutor Adoni",
    "IB PYP tutor Adoni",
    "Cambridge IGCSE tutor Adoni",
    "Edexcel IGCSE tutor Adoni",
    "IB tutor Kurnool district",
    "IGCSE tuition Adoni Andhra Pradesh",
    "IB tutor near Mantralayam Road Adoni",
    "online IB tutor Andhra Pradesh",
  ],

  heroTrustPoints: [
    "Each tutor is picked for one subject and one syllabus, never a general brief",
    "Lessons on IST, so an Adoni family never juggles a time-zone gap",
    "A free trial class and a written summary after every lesson",
    "Standalone service, unconnected to any school, board or examiner",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as home" },
    { value: "PYP to DP", label: "Plus CP and IGCSE" },
    { value: "Free trial", label: "Before any payment" },
    { value: "May & Nov", label: "Exam sessions we plan for" },
  ],

  intro: {
    heading: "Studying an international syllabus from the west of Kurnool district",
    paragraphs: [
      "Adoni is a busy trading town on the Guntakal to Raichur rail corridor, close to the Karnataka border and famous for its cotton market. The region grows cotton, groundnut and pulses, and the town has long attracted merchant, mill and professional families. Its schools teach the Andhra Pradesh state syllabus or CBSE. A skoodos.com search for IB and IGCSE schools in Adoni returned nothing, and we have found no campus of either kind in town.",
      "So who asks for IB or IGCSE help here? Mostly parents planning ahead. One family has a son or daughter boarding in Bengaluru or Hyderabad at an IB school and wants a familiar tutor through the summer break. Another is settled in the Gulf and expects to bring the children back to India in a few years. A third has a relative abroad and is quietly building a portfolio that a foreign university will read easily.",
      "A tutor cannot change what a school teaches, but can carry a child through a syllabus school does not offer. Our tutors teach live and one to one, from India, on IST. They do not come to Adoni; in-person home tuition is limited to Gurugram and parts of Delhi NCR. What your child gets at home is a real teacher on a screen, working through actual past papers, marking answers and explaining errors.",
      "We are not connected to the International Baccalaureate, Cambridge, Pearson or any school. Tutors teach and give feedback; they never write an Internal Assessment, Extended Essay, TOK essay or coursework.",
    ],
    bullets: [
      "Live tuition for IB PYP, MYP, DP and CP students",
      "Cambridge and Pearson Edexcel IGCSE at Core and Extended tiers",
      "Timings that respect Adoni's summer heat and festival weeks",
      "Support for boarders, online learners and private candidates",
      "A free trial before you decide anything",
    ],
  },

  programmesIntro:
    "Adoni has no IB school of its own, which shapes how each programme reaches a family here. The notes below explain what the stage demands and how tutoring usually fits for someone living in this part of Andhra Pradesh.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery-Class 5, ages 3-12",
      description:
        "There are units of inquiry rather than textbooks, and pupils present a capstone Exhibition near the end. Strong reading and confident arithmetic matter far more than any test, so a tutor spends time on comprehension, number talk and curiosity.",
      countryNote:
        "In Adoni, PYP work is typically preparation for entering an IB primary school in another city, or a light weekly session for a child following an online PYP curriculum from home.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Teachers grade against published criteria instead of a single percentage, and students finish with a Personal Project. Learners struggle most when asked to justify a method; a tutor can rehearse that reasoning in short, regular sessions.",
      countryNote:
        "Adoni MYP students often board in Bengaluru or Hyderabad, so tutors align with the school's term plan and pick up extra sessions during summer vacation, which in Andhra Pradesh falls between April and June.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "The diploma combines six subjects across Higher and Standard levels with the Extended Essay, TOK and CAS. Internal Assessments carry real weight, and the written papers land in May, with some candidates sitting in November.",
      countryNote:
        "With no local DP school, Adoni students are usually at a campus elsewhere or on an accredited online route, and use a weekly tutor for the Higher Level subject they find heaviest.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students combine a few DP courses with career-related study, a reflection project and skills for work and life, which suits those keen on an applied direction.",
      countryNote:
        "Rare for Adoni households, and always delivered through a school outside the town; tutors help with the academic courses inside it.",
    },
  ],

  subjectsIntro:
    "A good match needs the subject, the level and the school's own timetable. Adoni students often follow a plan set by a school hundreds of kilometres away, and a tutor has to work inside that plan.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, algebra and proof for students aiming at engineering or the physical sciences; HL adds Paper 3 problem solving and a well-scoped exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and calculator fluency for students heading to business, economics or life sciences." },
    { name: "IB Physics", levels: "HL / SL", description: "Kinematics, fields, waves and quantum ideas, with the investigation planned early and data analysis rehearsed on real sets." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Mole calculations, energetics, equilibrium and organic mechanisms, with attention to how examiners phrase explanation questions." },
    { name: "IB Biology", levels: "HL / SL", description: "Genetics, ecology, cell processes and physiology; students learn to answer in the wording mark schemes reward." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram discipline, policy evaluation and the three commentary portfolio pieces." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case studies, ratio analysis and the Internal Assessment's research-based commercial question." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, object-oriented ideas, networks and databases, with Java or Python worked through on screen." },
    { name: "IB English A: Language and Literature", levels: "HL / SL", description: "Close reading, individual oral technique and comparative essays across literary and everyday texts." },
    { name: "IB Telugu A and Hindi B", levels: "HL / SL", description: "Telugu literature study for home-language students and Hindi for language acquisition, both taught by native-fluent tutors." },
    { name: "IB Psychology", levels: "HL / SL", description: "Research methods, biological and cognitive approaches, and the design of an ethical experiment." },
    { name: "IB Geography", levels: "HL / SL", description: "Population, resources and global change, with fieldwork-style data handling for the Internal Assessment." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion-led coaching on knowledge questions; tutors do not write the exhibition or the essay." },
  ],
  igcseSubjectsIntro:
    "IGCSE tuition in Adoni follows the board and syllabus code on the student's entry form, because Cambridge and Pearson Edexcel papers are laid out differently even when the subject title matches.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry and statistics, with a decision on tier made from diagnostic work rather than guesswork." },
    { name: "IGCSE Additional Mathematics", levels: "Extended", description: "Calculus and functions for students planning A Level Maths or IB Maths HL." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Motion, electricity and thermal physics, with practical-skills questions drilled paper by paper." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Reactions, bonding, electrolysis and organic basics, plus the qualitative-analysis questions that trip many students." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Transport, nutrition, genetics and the environment, with clear labelled diagrams." },
    { name: "IGCSE English First Language", levels: "Extended", description: "Writing to argue, describe and narrate, plus summary and comprehension technique." },
    { name: "IGCSE English as a Second Language", levels: "Core / Extended", description: "All four skills, especially useful for students from Telugu or Urdu-speaking homes." },
    { name: "IGCSE Computer Science", levels: "Extended", description: "Programming logic, data representation and hardware, with Python practice." },
    { name: "IGCSE Business Studies", levels: "Extended", description: "Enterprise, marketing, finance and operations, using short case-based answers." },
    { name: "IGCSE Telugu and Hindi as a second language", levels: "Core / Extended", description: "Reading, writing and grammar accuracy for students using either as an additional language." },
  ],

  regionsTitle: "Parts of Adoni our students study from",
  regionsIntro:
    "Since every lesson is online, your neighbourhood does not limit the choice of tutor. We still ask where a student lives because local rhythms, such as school-bus hours, market-day noise and afternoon heat, decide the best time for a class.",
  regions: [
    { name: "Old Town and the fort hill", note: "The oldest part of Adoni, under the fort ridge; households here often prefer quiet late-evening lessons after the day's shopping and market noise subside." },
    { name: "Market yard belt", note: "Around the cotton market, where trader families are busy during the season; lesson slots avoid the busiest buying hours." },
    { name: "Railway station side", note: "A well-connected part of town for families with relatives elsewhere on the Guntakal and Raichur line; an evening class after office return works well." },
    { name: "Bus stand and town centre", note: "The commercial heart, where students walk to nearby private schools and prefer a lesson soon after they return." },
    { name: "Bellary Road corridor", note: "The western approach towards Karnataka, with newer housing and a mix of AP and CBSE school-goers." },
    { name: "Kurnool Road corridor", note: "The eastern approach, used by families who travel regularly to Kurnool and sometimes consider a school there." },
    { name: "Mantralayam Road side", note: "The southern approach to the pilgrimage town, with a steady mix of local families and trading households." },
    { name: "Newer colonies on the outskirts", note: "Recently built neighbourhoods where families with professional jobs settle; power interruptions can shape the evening timetable." },
    { name: "Villages around Adoni mandal", note: "Farming households in the surrounding mandal who send children into town for schooling and add tuition once a plan is clear." },
  ],

  schoolClusters: [
    {
      city: "Adoni itself",
      note: "The town's schools follow the Andhra Pradesh board or CBSE. A directory search for IB and IGCSE schools in Adoni came back empty, so families here who want either qualification study online or elsewhere.",
      schools: [],
    },
    {
      city: "Nearby: Kurnool",
      note: "The district headquarters, roughly a couple of hours by road, and the closest place with a school we can confirm teaches Cambridge IGCSE, though we cannot confirm an IB Diploma school in the city.",
      schools: ["Monte International School, Kallur"],
    },
    {
      city: "Nearby: Hyderabad",
      note: "Several hours away by road or overnight train, Hyderabad has a much larger IB and Cambridge network, and some Adoni families consider boarding there for Classes 11 and 12.",
      schools: ["International School of Hyderabad, Patancheru (IB)"],
    },
    {
      city: "Nearby: Bengaluru",
      note: "Reachable by train and highway via Ballari, Bengaluru is another common destination for boarders from this side of Andhra Pradesh.",
      schools: ["Stonehill International School", "The International School Bangalore"],
    },
  ],
  schoolDisclaimer:
    "Schools mentioned here illustrate where Adoni families look when weighing options; they are not partners and are not endorsed. IB Gram works alone, with no link to the IB Organization, Cambridge, Pearson Edexcel or any named school, and readers should check current school lists directly with those bodies.",

  tutorsIntro:
    "Our tutors live in different parts of India and teach on IST. For an Adoni student we pick a person who has taught that exact course before, and the free trial shows whether the style suits.",

  modesIntro:
    "Every arrangement on offer for Adoni is online. A tutor arriving at your gate is not one of the options, since home visits happen only in Gurugram and parts of Delhi NCR. What varies is the shape of the timetable, and the three patterns below cover nearly all families.",
  modes: [
    {
      title: "A regular weekly slot",
      description:
        "The same hour each week with the same tutor, live on video with a digital whiteboard. It builds routine and makes progress easy to see.",
      bullets: [
        "Choose one subject or several",
        "Written summary after each lesson",
        "Works alongside any school or online provider",
        "Tutor swap available if the style is a poor match",
      ],
    },
    {
      title: "Summer-holiday catch-up",
      description:
        "Andhra Pradesh schools break for the hot months, and boarders come home. A short, intense run of lessons in April to June fills gaps before the new academic year.",
      bullets: [
        "Morning or early-evening slots away from peak heat",
        "Topic maps for the term ahead",
        "Past papers reviewed line by line",
        "Easy to pause when the family travels",
      ],
    },
    {
      title: "Exam-window sprint",
      description:
        "The final four to six weeks before May or November papers are used for timed practice, mark-scheme reading and quick reviews of weak areas.",
      bullets: [
        "Papers matched to level and tier",
        "Marks lost analysed by topic",
        "Short recap notes for last-week revision",
        "A steady, calm routine near the exam",
      ],
    },
  ],

  sections: [
    {
      heading: "Who chooses IB or IGCSE in a town like Adoni?",
      paragraphs: [
        "It is a small group, and its members do not look alike. Cotton and grain traders think about a child who may join the business abroad. Engineers and doctors posted to the region think about a move to a metro. Families with a parent in Dubai, Doha or Muscat expect to shift eventually. A few children are academically restless and would simply do better in a discussion-led syllabus.",
        "The catch is location. With no international school in town, the qualification arrives by one of three routes: boarding elsewhere, an accredited online school, or private study for external exams. Each brings a different need. A boarder wants continuity in holidays, an online student wants a live person to talk to, and a private candidate needs a tutor who teaches the whole course.",
        "Some families are only getting ready. A Class 7 student moving to an IB school next year has to shift from a syllabus that rewards recall to one that rewards explanation. Six months of weekly lessons ease that transition far better than a crash course after admission.",
        "If any of this sounds like your household, the next step is a short message describing the child's school, board and target, followed by a free trial.",
      ],
    },
    {
      heading: "Andhra Pradesh board, CBSE, IB and IGCSE: what is the difference?",
      paragraphs: [
        "Most Adoni students follow the Andhra Pradesh state syllabus, with SSC in Class 10 and the intermediate course in Classes 11 and 12, or CBSE. Both connect straight to EAPCET, NEET and JEE Main, the tests that dominate local ambition. IB and IGCSE are different animals, designed around international recognition, and the extra effort of reaching them from here needs a clear reason.",
        "Set the four side by side and the trade-offs become concrete. State and CBSE options are close to home and cheaper. IB and IGCSE mean relocation or distance learning, but open doors overseas and reward analysis over recall.",
        "None of this is an argument for switching. Moving from the state syllabus into IB DP is hard, particularly in English writing and the Internal Assessment habit, and students who do it usually spend a preparatory year on tuition.",
      ],
      table: {
        caption: "Four routes compared for an Adoni family",
        columns: ["Route", "Reachable from Adoni", "How marks are earned", "Typical fit"],
        rows: [
          ["Andhra Pradesh state board", "Yes, in town", "Annual board exams, heavy recall", "Students aiming at EAPCET and local colleges"],
          ["CBSE", "Yes, in some private schools", "Board exams plus internal marks", "JEE, NEET and CUET-UG aspirants"],
          ["IB Diploma", "Not in town; boarding or online", "Internal assessments, core and final papers", "Overseas study or a metro relocation"],
          ["Cambridge or Edexcel IGCSE", "Not in town; boarding or online", "External papers at Core or Extended tier", "Bridge to A Level, IB or an international school"],
        ],
      },
    },
    {
      heading: "What drives the fee for IB and IGCSE tuition in Adoni?",
      paragraphs: [
        "Rates are quoted individually and in writing before booking, and there is no fixed rate card for the town. Three things move the number: who the tutor is, what is being taught, and how often. A former examiner in HL Physics will charge differently from a tutor supporting Class 6 MYP Science.",
        "Level matters too. IB DP Higher Level, IGCSE Additional Mathematics and the run-up to exams tend to cost more than early-year support, because preparation is heavier and the stakes are higher.",
        "Frequency is the lever families control. A single weekly session across the year costs far less than three sessions a week in March, and many households settle on a light routine that grows only when mocks show a problem.",
        "One sensible approach is to book four or five lessons, read the tutor's notes and decide from evidence. If the fit is poor, ask for another teacher, no questions asked.",
      ],
      bullets: [
        "Tutor background and examining experience",
        "Programme, subject and level",
        "Weekly frequency and length of the block",
        "How close the exam session is",
      ],
    },
    {
      heading: "Is online home tuition better than a coaching centre in Adoni?",
      paragraphs: [
        "It depends on what is being coached. Adoni's tuition centres are geared to board exams and to the entrance tests students take for engineering and medicine, and they do that well. They are not built around the IB Internal Assessment or the IGCSE alternative-to-practical paper, and you will rarely find one teacher who covers Chemistry, Economics and English.",
        "A private tutor in town can be excellent for maths, but the range is narrower than what an online marketplace offers. Self-study works for a highly organised student, though extended writing and criterion-based marking need a reader.",
        "The comparison below assumes what really limits families here: a small local pool of specialists, summer heat that interrupts travel, and a need to fit sessions around school and market routines.",
      ],
      table: {
        caption: "How the study options compare in Adoni",
        columns: ["Option", "Coverage of IB and IGCSE", "Travel needed", "Feedback quality"],
        rows: [
          ["Online one-to-one from home", "All major subjects and levels", "None", "Marked against the real mark scheme"],
          ["Local coaching centre", "Mostly maths and sciences for state and entrance exams", "Daily commute in heat", "General, not syllabus-specific"],
          ["Private tutor in town", "Depends on the individual", "Tutor or student travels", "Varies from excellent to thin"],
          ["Self-study", "Whatever the student manages alone", "None", "None without a teacher"],
        ],
      },
    },
    {
      heading: "Which months matter in Adoni's school and exam year?",
      paragraphs: [
        "Adoni is hot and dry for much of the year, with summer temperatures that make afternoon study a chore, a modest monsoon from June and more rain in the north-east season around October and November. State schools break for summer around April and reopen in June, and Sankranti in January and Dasara in autumn bring longer gaps.",
        "The IB and IGCSE calendars run separately. Diploma papers fall in May, with a November session for some, and IGCSE series run in May to June and October to November. A student on a state-board calendar who is also preparing IGCSE papers privately has to juggle March exams with international deadlines.",
        "Tuition is timed accordingly: holiday intensives in April to June, steady weekly work through the rest, and a sprint before the external series.",
      ],
      table: {
        caption: "A year of study for an Adoni IB or IGCSE student",
        columns: ["Months", "Local rhythm", "Tuition emphasis"],
        rows: [
          ["January to March", "Sankranti break, state board exams, warming days", "Mock papers, gap analysis"],
          ["April to June", "Peak heat, school holiday, May exam series", "Early-morning intensives, revision sprint"],
          ["July to September", "Monsoon showers, new academic year", "New-topic teaching, IA planning"],
          ["October to December", "Dasara, north-east rains, November exam series", "Past papers, resit preparation, Extended Essay milestones"],
        ],
      },
    },
    {
      heading: "What can an Adoni student do after IB or IGCSE?",
      paragraphs: [
        "Within India, the IB Diploma is treated as equivalent to Class 12 through the Association of Indian Universities, and many private universities accept IB and A Level scores. For central universities, CUET-UG is the usual route. Students hoping for medicine or engineering must read the eligibility rules for NEET and JEE Main carefully, and confirm how their qualification is treated.",
        "Closer to home, IIIT Kurnool, Rayalaseema University, Sri Krishnadevaraya University and the IITs and NITs in the south draw applicants from this side of Andhra Pradesh. Some of those routes use EAPCET or JoSAA, so the subject choices made at IB or IGCSE level have consequences that should be checked early.",
        "Overseas study is the other pole. UK, US, Canadian, Australian and European universities read IB Diplomas and IGCSE plus A Levels routinely, and tests such as SAT, IELTS or UCAT may add to the profile. Tutors sharpen subject strength and exam technique; they do not write personal statements.",
      ],
      bullets: [
        "AIU equivalence and CUET-UG for Indian universities",
        "EAPCET, JEE and NEET rules checked for each student",
        "Universities and institutes within Andhra Pradesh and the south",
        "Study abroad with the IB Diploma or IGCSE plus A Level",
      ],
    },
    {
      heading: "How are IB Maths, Physics, Chemistry and Biology taught over video?",
      paragraphs: [
        "The maths choice comes first. Analysis and Approaches suits a student planning engineering, computing or pure science, while Applications and Interpretation is a better fit for economics, business or biology degrees. Choosing on the intended degree rather than on marks avoids regret two years later.",
        "The tutor writes on a shared whiteboard and the student writes back, so every line of working is visible. Past-paper questions come at the right level, calculator technique is demonstrated, and the exploration is planned early so the ideas remain the student's own.",
        "For the sciences, tutors coach investigation design, data handling and evaluation. A school without well-equipped labs is not fatal; simulations and published data sets can support many investigations, subject to the school's approval.",
        "A workable DP load is one lesson a week per Higher Level subject, with a fortnightly check-in on the Extended Essay process.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how does an Adoni student decide?",
      paragraphs: [
        "The top grade available on Core papers is a C. Extended goes to A star. A student who might carry Maths, Physics or Chemistry into A Level, or into IB Higher Level, should generally sit Extended, since Core closes that door.",
        "Choosing subjects is a separate skill. A common set is Mathematics, one or two sciences, English, a language and a humanities or business subject. Additional Mathematics is a strong addition for future engineers, though it adds real workload.",
        "Cambridge and Edexcel word their questions differently, so tutors work from the code on the entry form. For a private candidate we also explain how to locate an exam centre, dates and fees.",
      ],
      table: {
        caption: "Choosing a tier for common IGCSE subjects",
        columns: ["Subject", "Pick Extended when", "Core is reasonable when"],
        rows: [
          ["Mathematics", "Engineering or A Level Maths is likely", "Confidence is fragile and a secure pass is the goal"],
          ["Sciences", "The subject continues after IGCSE", "It is a one-off subject"],
          ["English as a Second Language", "Foreign study is planned", "A pass suffices"],
          ["Business or Computer Science", "A related degree beckons", "Interest is casual"],
        ],
      },
    },
  ],

  process: [
    { title: "Send a short message", description: "WhatsApp or email us the class, board or school, and the subjects that need attention." },
    { title: "Try one lesson free", description: "A tutor who has taught your syllabus runs a trial class over video so you can judge the fit." },
    { title: "Receive a written plan", description: "You get topics, weekly frequency and the rate in writing before you agree to anything." },
    { title: "Learn every week", description: "Lessons run at a fixed time, and a short note after each class records what was covered." },
    { title: "Review and change", description: "Progress is reviewed every few weeks, and swapping tutors is easy if the match is off." },
  ],

  whyPoints: [
    { title: "Specific to your syllabus", description: "Tutors are chosen for the programme, subject and level your child actually sits, not for a general international label." },
    { title: "Scheduled for Adoni", description: "Slots avoid the fiercest afternoon heat, market-season rush and long festival weeks, and can pause when a family travels." },
    { title: "Straight about the format", description: "Home visits do not happen in Adoni; the lessons are live online from India, and we say so before you book." },
    { title: "Teaching, not ghost-writing", description: "Nobody writes your Internal Assessment, Extended Essay, TOK essay or coursework; tutors coach and give feedback." },
    { title: "Free first lesson", description: "You meet the tutor before paying, and the rate arrives in writing afterwards." },
    { title: "Unaffiliated advice", description: "With no tie to a school or exam board, guidance on tiers and routes serves the student alone." },
  ],

  faqs: [
    { question: "Can I get IB or IGCSE home tuition in Adoni?", answer: "Yes, as private online tuition from home. Your child sits at a laptop for a live one-to-one lesson with an India-based specialist. Tutors do not visit Adoni; in-person home tuition is offered only in Gurugram and parts of Delhi NCR. We teach IB PYP, MYP, DP and CP as well as Cambridge and Edexcel IGCSE." },
    { question: "Does Adoni have an IB or IGCSE school?", answer: "None that we could confirm. A school-directory search for IB and IGCSE schools in Adoni returned no results, and the town's schools follow the Andhra Pradesh state board or CBSE. Families who want an international programme usually look to Kurnool, Hyderabad or Bengaluru, or an online school. Please verify current lists with ibo.org and cambridgeinternational.org." },
    { question: "How does a student in Adoni take the IB or IGCSE at all?", answer: "There are three routes. One is boarding at a school in another city, another is an accredited online international school, and the third is private candidacy, where the student registers at an exam centre and studies with tutors. Each needs planning early, and a first conversation with us can help clarify which suits your family." },
    { question: "What does IB or IGCSE tuition cost in Adoni?", answer: "We publish no price list, because the rate depends on the tutor, the level, how many lessons you book each week and how near the exams are. A written quote arrives before you commit, and the first lesson is free. Higher Level sciences and Maths naturally cost more than early-years support." },
    { question: "Will summer heat or power cuts disrupt online lessons?", answer: "We plan for them. Lessons are usually early morning or early evening, away from peak afternoon heat, and every session ends with a written note so a dropped connection loses little. A phone hotspot or a laptop with a good battery is a sensible backup, and a missed segment is picked up next time." },
    { question: "Which IB subjects can your tutors cover?", answer: "Most of them: Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English, Telugu, Hindi, Psychology, Geography and coaching for Theory of Knowledge. Tell us the level, HL or SL, and the school's calendar, and we will match a tutor who has taught that course." },
    { question: "Is Telugu available as an IB or IGCSE subject?", answer: "Yes for IB, as a language A or B option at some schools, and tutors fluent in Telugu are available for that route. For IGCSE we support Telugu as an additional language where a student is entered for it. Always confirm with your school or exam centre which languages are offered before choosing." },
    { question: "Can a tutor write my Internal Assessment?", answer: "No. Tutors coach: they explain the criteria, ask questions, review drafts that you have written and help you plan time. The Internal Assessment, Extended Essay, TOK essay and IGCSE coursework must be the student's own work, and doing otherwise risks the student's qualification." },
    { question: "Core or Extended for IGCSE Maths?", answer: "Extended is the safer choice for anyone who may study A Level Maths, engineering or physics, because Core caps the grade at C. Core suits students who need a secure pass and will not continue the subject. A diagnostic lesson and school advice help decide, and the tier can often change early in the course." },
    { question: "Do you cover both Cambridge and Pearson Edexcel IGCSE?", answer: "Yes. Content overlaps, yet paper structure and mark-scheme language differ, so tutors work from the syllabus code on the entry form. Give us the exact code, and we will use past papers and examiner reports from that board." },
    { question: "What time are lessons held for students in Adoni?", answer: "Early evenings on weekdays and mornings on weekends are the most popular, always in Indian Standard Time. We avoid school hours, peak heat and Sankranti or Dasara weeks unless a student wants extra sessions during the break, and slots are easy to shift when exams approach." },
    { question: "Can my child prepare for EAPCET, NEET or JEE alongside the IB or IGCSE?", answer: "Partly. IB Maths, Physics, Chemistry and Biology overlap with entrance syllabi, but the entrance exams cover topics and question styles that differ, and their eligibility rules for IB and IGCSE students should be checked directly. Our tutors teach IB and IGCSE content and are not an entrance-test coaching centre." },
    { question: "Can you help a child get ready for an IB school entrance test?", answer: "We can strengthen the subject base. A tutor finds the gaps in English, Maths and Science, practises the explaining style IB schools favour and builds confidence. We do not promise admission and have no influence on any school's decisions." },
    { question: "Are lessons in English or Telugu?", answer: "Lessons are in English because the examinations are, though a tutor may briefly explain a tricky idea in Telugu, Hindi or Urdu when that helps a younger learner. Language subjects are taught by tutors comfortable in that language, using past papers in the correct script." },
    { question: "How do I start with a free trial lesson?", answer: "Send a WhatsApp message to +91 7439 368 115 or email ibgram24@gmail.com with your child's class, board and subject. We propose a tutor and a time in IST, and you receive a joining link. Afterwards we send a written plan and rate, and you are under no obligation to continue." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "All the cities we serve online, with Gurugram the one place for in-person visits." },
    { label: "Kurnool page", href: "/kurnool/", description: "The district headquarters, with a school landscape of its own." },
    { label: "Nandyal page", href: "/nandyal/", description: "A neighbouring district town in the same part of Andhra Pradesh." },
    { label: "Ballari page", href: "/ballari/", description: "The nearby Karnataka city across the state line." },
    { label: "Hyderabad page", href: "/hyderabad/", description: "The big IB and Cambridge hub for boarding options." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject specialists across every IB stage." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE tutors by subject." },
    { label: "IB Diploma support", href: "/programmes/dp/", description: "How Diploma tutoring works, from HL courses to core components." },
    { label: "IB Maths", href: "/courses/ib/mathematics/", description: "Analysis and Applications routes, explained topic by topic." },
    { label: "Tutor profiles", href: "/tutors/", description: "The teachers you may be matched with." },
    { label: "Contact us", href: "/contact-us/", description: "Book a free trial or ask a question." },
  ],

  closingHeading: "Start with a free lesson in Adoni",
  closingBody:
    "Send us the class, the board and the subject that worries you most. We will find a tutor who has taught it, set a trial lesson on IST and follow up with a written plan and a rate. Message +91 7439 368 115 on WhatsApp or write to ibgram24@gmail.com.",
};
