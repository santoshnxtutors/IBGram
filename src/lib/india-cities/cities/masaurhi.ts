import type { CitySeoPage } from "../types";

/**
 * Masaurhi (Patna district, Bihar). No IB or Cambridge/Edexcel school could be confirmed in the town,
 * so stripSchools is empty. School clusters use names already verified on the Jehanabad page, labelled as
 * nearby. Online only; no home visits.
 */
export const masaurhi: CitySeoPage = {
  slug: "masaurhi",
  countryName: "Masaurhi",
  countryNameLong: "Masaurhi, Bihar",
  demonym: "Masaurhi",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late-evening and Sunday slots that keep clear of Chhath, Durga Puja week and the January fog mornings",
  lastUpdated: "2026-09-21",

  title: "IB & IGCSE Tutors in Masaurhi | One-to-One Online Tuition",
  metaDescription:
    "Private IB and IGCSE tuition for Masaurhi students, taught live one to one online from home, with Patna a train ride away but not needed. Free trial lesson.",
  h1: "IB and IGCSE Tutors and Private Tuition at Home in Masaurhi",
  heroEyebrow: "IB & IGCSE ONE-TO-ONE TUITION FOR MASAURHI, ONLINE",
  heroSubtitle:
    "Masaurhi is a subdivision town in Patna district, about an hour from the capital's classrooms and coaching lanes. Private tuition at home here is a live video lesson with one specialist tutor, so a student preparing for the IB or IGCSE never has to ride the Gaya line to Patna after school. The first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Masaurhi",
  imageAltText: "A Masaurhi Class 11 student checking IB Mathematics working with an online tutor on a laptop in a family home",
  secondaryKeywords: [
    "IB tutor Masaurhi",
    "IGCSE tutor Masaurhi",
    "IB home tuition Masaurhi",
    "IGCSE home tuition Masaurhi",
    "IB private tuition Masaurhi",
    "IB Maths tutor Masaurhi",
    "IGCSE Maths tutor Masaurhi",
    "IB Physics tutor Masaurhi",
    "IB Chemistry tutor Masaurhi",
    "IB Biology tutor Masaurhi",
    "IB DP tutor Masaurhi",
    "IB MYP tutor Masaurhi",
    "IB PYP tutor Masaurhi",
    "IGCSE online tuition Masaurhi",
    "online IB tutor Masaurhi Patna district",
    "IB tutor Masaurhi Sharif",
    "IB tutor Dhanarua",
    "IGCSE tutor Paliganj",
    "IB tutor Punpun",
    "Cambridge IGCSE tutor Masaurhi Bihar",
  ],

  heroTrustPoints: [
    "Tutors chosen for the exact IB course and level or the Cambridge and Edexcel IGCSE code your child sits",
    "Live one-to-one video lessons from your own home in Masaurhi, with no tutor arriving at the door",
    "Free trial, a written note after every class and a change of tutor if the fit is wrong",
    "An independent service with no link to any school, board or exam body",
  ],
  heroStats: [
    { value: "IST", label: "Lessons in Indian time" },
    { value: "PYP to DP", label: "IB stages covered" },
    { value: "Core to Extended", label: "IGCSE tiers" },
    { value: "Free trial", label: "Before any plan" },
  ],

  intro: {
    heading: "Private IB and IGCSE tuition for a Masaurhi student, without the trip to Patna",
    paragraphs: [
      "Parents in Masaurhi who search for IB or IGCSE home tuition usually want a tutor who has actually taught the international syllabus, and lessons that do not depend on a bus, a train or a rented room in the city. Online one-to-one teaching meets both needs. The student sits at a desk at home, the tutor joins on video, and the hour runs like a private class with a shared whiteboard, worked questions and marked homework. The tutor may be in Pune or Chennai; what counts is their experience of your child's exact course.",
      "The need is real because the syllabus and the town are far apart. Masaurhi sits on the Patna to Gaya corridor, close to Dhanarua, Punpun and Paliganj, and its schooling is built around the Bihar Board and CBSE. We could not confirm an IB or Cambridge school inside the town. Any child who follows those courses has to study through a school in another city or at a distance, which is exactly when a specialist tutor carries the most weight.",
      "To be plain about format, IB Gram tutors do not come to homes in Masaurhi. Home-visit tuition runs only in Gurugram and parts of Delhi NCR. In Masaurhi every class is online and live, and for examination work that is as effective as a tutor on the next chair, with a far wider choice of people.",
      "IB Gram is independent. We are not connected to the International Baccalaureate, Cambridge, Pearson Edexcel or any school mentioned on this page. Tutors explain, question and correct. They never write Internal Assessments, Extended Essays, TOK essays or coursework for a student.",
    ],
    bullets: [
      "IB PYP, MYP and DP tutors across the subject groups",
      "Cambridge and Pearson Edexcel IGCSE at Core and Extended tiers",
      "Online only in Masaurhi; in-person visits exist just in Gurugram and parts of Delhi NCR",
      "A free trial, then the rate in writing before you commit",
    ],
  },

  programmesIntro:
    "For a family in Masaurhi, reaching an IB programme is seldom a straight line. It may mean a Patna school, a boarding place far away, a parent's transfer or a return from the Gulf. Each programme puts different demands on a tutor, and we set them out below with the local context in view.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Learning is organised into units of inquiry, and in the final year every child prepares an Exhibition. A tutor supports reading, number sense and the habit of asking a question and following it through.",
      countryNote:
        "Many Masaurhi children speak Hindi or Magahi at home, so a steady weekly English reading session tends to help more than extra sums in the early PYP years.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Work is judged against published criteria in each subject, and MYP 5 students complete a Personal Project. The hardest step is moving from stating facts to justifying and evaluating them.",
      countryNote:
        "A student coming from a Bihar Board textbook routine usually needs practice in writing a short method and giving reasons for each step before criteria-based marking makes sense.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Three Higher Level and three Standard Level subjects sit alongside TOK, the Extended Essay and CAS. Internal assessments count towards most subject grades, and the exam sessions fall in May and November.",
      countryNote:
        "Diploma enquiries from this part of Bihar lean towards Mathematics, Physics and Chemistry for engineering, and Biology and Chemistry for students who have medicine or biomedical science in mind.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Students combine DP courses with a career-related study, a reflective project and personal skills work. It is uncommon in Bihar, so tutoring is usually about the DP courses inside the programme.",
      countryNote:
        "Where a Masaurhi student joins a CP through a school in another state, tutors help with the DP subjects and with shaping the reflective project around a real local question.",
    },
  ],

  subjectsIntro:
    "Tutors in Masaurhi are matched by course and level, not by a general IB label. A teacher who is excellent at Chemistry SL may not suit Chemistry HL, and Maths AA HL asks for a different toolkit from Maths AI SL. We start with syllabus fit, then look for an evening hour that survives the student's school day and any coaching already in the week.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Algebra, calculus, vectors and proof, with extended problem-solving at HL for students heading to engineering." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology-led work that suits commerce, social science and biology routes." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, waves and fields, plus uncertainty handling in the investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, energetics, kinetics and organic chemistry, used with the data booklet at speed." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics, ecology and human physiology, with practice in reading experimental data." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagram-led micro and macro, trade and development, and commentaries on current events." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case-based answers and the numerical tools behind finance and operations questions." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Textual analysis, comparison and the oral, for students who think first in Hindi or Magahi." },
    { name: "IB Hindi", levels: "HL / SL", description: "Language A literature or Language B acquisition in a language the student already speaks daily." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and the documented solution needed for the internal assessment." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies, evaluation and the experimental design that the internal assessment expects." },
    { name: "IB Global Politics", levels: "HL / SL", description: "Power, rights and development, tied to cases that students can argue with evidence." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation, essay planning and a contained internal investigation." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Breaking down claims about knowledge and keeping the exhibition's argument tight." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Question choice, source handling and supervisor meetings. Guidance only, never authorship." },
    { name: "IB MYP Maths & Sciences", levels: "MYP 1-5", description: "Criteria-based investigation and the algebra that later feeds DP Mathematics." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Edexcel IGCSE papers are prepared by syllabus code and tier. Mathematics 0580 Extended needs a different plan from Additional Mathematics 0606, and Chemistry 0620 differs from Co-ordinated Sciences 0654. We also ask whether the student is heading to the IB Diploma or A Levels afterwards, because that decides how hard to push Mathematics and the sciences.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Algebra, geometry and number skills, with calculator-free accuracy and timing." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, functions and trigonometry that prepare a student for IB Maths AA." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Forces, circuits, waves and the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Stoichiometry, rates, electrolysis and planning for qualitative analysis." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Human biology, plant transport and inheritance, with data-response questions." },
    { name: "IGCSE Co-ordinated Sciences", levels: "0654", description: "One award covering all three sciences for students not taking them separately." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing, narrative and summary, with attention to tone and structure." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, listening and speaking for Hindi-first learners." },
    { name: "IGCSE Hindi as a Second Language", levels: "Grade 9-10", description: "Reading and writing tasks in a language most Masaurhi households use daily." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Definitions, graphs and short evaluative answers." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Case studies, simple accounts and structured writing." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Pseudocode, networks and logic, with programming practice." },
  ],

  regionsTitle: "Masaurhi and nearby areas our online IB and IGCSE tutors serve",
  regionsIntro:
    "Tutors are selected for syllabus fit, so a student in Dhanarua draws on the same pool as one near Masaurhi railway station. What differs is the day. Some children leave home early for schools in Patna or use coaching in the evenings, and lessons must be fixed around the real timetable. Power cuts and monsoon waterlogging are checked with the family before the first class.",
  regions: [
    { name: "Masaurhi town centre", note: "The market and bus stand area, where many families also keep a child in a local school and look for a separate subject specialist." },
    { name: "Masaurhi railway station area", note: "Close to the Patna to Gaya line, used by students who go into Patna for school or coaching and return in the evening." },
    { name: "Dhanarua", note: "A neighbouring block town a short distance away, with a steady stream of students heading to Patna for senior classes." },
    { name: "Punpun", note: "On the river of the same name, with families that watch monsoon water levels and plan study time around them." },
    { name: "Paliganj", note: "To the west along the Sone canal belt, a farming and trading area where online study opens choices that the town lacks." },
    { name: "Naubatpur", note: "A rural-edge block where broadband strength varies, so a hotspot backup is worth testing early." },
    { name: "Bikram", note: "An area on the Patna side with commuter families who work in the capital and want international options." },
    { name: "Fatuha", note: "East of Masaurhi on the Patna side, with families linked to Patna's offices and colleges." },
    { name: "Khusrupur", note: "On the road to Bakhtiyarpur, with parents who have relatives abroad and a growing interest in overseas study." },
    { name: "Bihta and Danapur side", note: "Better connected to Patna's institutions, including the IIT campus at Bihta, and home to academic and defence-linked families." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring service. The schools listed are there only to show where IB and IGCSE classrooms can be found within reach of Masaurhi. We have no affiliation with, and no endorsement from or for, any school, the International Baccalaureate, Cambridge or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "Masaurhi and Patna district",
      note: "We could not confirm an IB or Cambridge IGCSE school in Masaurhi or elsewhere in the district, so no local school is named. Local options are limited, and Masaurhi families looking at these courses generally plan for a school in another city.",
      schools: [],
    },
    {
      city: "Nearby: Danapur, Patna",
      note: "The closest listed school we have confirmed for international-style study sits on the Danapur side of Patna. Daily travel from Masaurhi would be long, so most families ask about hostels or transport first.",
      schools: ["Vidya Sanskar School"],
    },
    {
      city: "Nearby: Kolkata",
      note: "A few Bihar families consider Kolkata for residential schooling, which has a wide choice of international curricula and a direct rail link from Patna.",
      schools: ["Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR boarding options",
      note: "Delhi and Gurugram offer the widest spread of IB and Cambridge campuses within reach of Bihar, and some families with relatives there use them for Class 11 and 12.",
      schools: ["The British School, New Delhi", "Pathways World School, Gurugram"],
    },
  ],

  modesIntro:
    "No tutor comes to Masaurhi homes; in-person home tuition at IB Gram exists in Gurugram and parts of Delhi NCR only. Each lesson here is a live, one-to-one video class from your own desk. Families pick from three formats depending on the subject and how busy the school term is.",
  modes: [
    {
      title: "A fixed weekly hour with one tutor",
      description:
        "One live hour at the same time each week with the same person, closed with a written note. Suits subjects that need patient building through the term.",
      bullets: [
        "The same tutor throughout",
        "Worked solutions on a shared screen",
        "A short recap after every lesson",
        "No journey for student or teacher",
      ],
    },
    {
      title: "Mock-exam and deadline bursts",
      description:
        "Extra sessions in the weeks before school mocks, internal assessment submission dates and the main exam series, centred on timed questions and examiner-style feedback.",
      bullets: [
        "Past papers sorted by topic",
        "More hours only where marks are lost",
        "Useful ahead of predicted-grade dates",
        "Reduced again once exams finish",
      ],
    },
    {
      title: "One live lesson with marked practice",
      description:
        "A shorter live class each week plus practice sets the tutor marks in between. Helps the student who has a school journey, coaching and limited free evenings.",
      bullets: [
        "One live session weekly",
        "Written comments on independent work",
        "Carries on through breaks",
        "Can become two lessons a week",
      ],
    },
  ],

  sections: [
    {
      heading: "Who studies IB and IGCSE around Masaurhi, and where do the classrooms sit?",
      paragraphs: [
        "Masaurhi is a subdivision headquarters in Patna district, a town of markets, government offices, schools and a railway station on the line to Gaya. Education here has leaned on the Bihar School Examination Board and CBSE, and we could not verify an IB or Cambridge IGCSE school within the town. That is why the school list on this page is labelled as nearby and not local.",
        "Families who look at international syllabuses from this area come from several directions. Some have one parent working in Patna's administration, banks or hospitals and want a curriculum that travels if a posting moves. Others have a relative in the Gulf, the UK or North America and plan a degree abroad. Some have lived in a metro city and returned home, and their children are already halfway through an IB or Cambridge programme.",
        "The practical question for each of them is how a child studies a syllabus that the town does not teach. A few arrange a school in Patna, where commuting by rail or road is hard over a full year, and some look at a hostel in another city. Many choose a school in the Bihar system for day-to-day schooling and add an online specialist to keep an international route open.",
        "A tutor also helps the child who has recently moved between systems and finds the English-medium technical vocabulary, or the habit of writing to a mark scheme, unfamiliar. A term or two of focused one-to-one lessons often does more than broad classroom support, because the gaps are specific and personal.",
      ],
      bullets: [
        "No IB or Cambridge school in Masaurhi could be confirmed",
        "The nearest verified schools are in Patna's Danapur area and in other cities",
        "Transfers, returnees and overseas plans drive most enquiries",
        "Online tutors fill the subject gap without a move",
      ],
    },
    {
      heading: "Bihar Board, CBSE, IB or IGCSE: what actually changes for a Masaurhi student?",
      paragraphs: [
        "The Bihar Board conducts the Matric exam in Class 10 and the Intermediate exam in Class 12, and its papers follow the state textbooks closely. Patna's coaching streets, famous across eastern India, reinforce a culture of practising familiar problem types until they become automatic. That builds stamina and speed, and it is a real strength in an examination hall.",
        "IB and IGCSE papers reward a different habit. A question might describe a situation the student has not met, then ask them to explain, evaluate or justify using the ideas they know. Each command word has its own expected answer. Students who learn to read the verb first and plan the structure second make gains quickly.",
        "CBSE sits between the two. NCERT books explain concepts well, and recent papers include more application and case-based items, so a CBSE child often settles into IGCSE sciences a little faster than a Bihar Board student. Language is the other variable: moving from Hindi-medium teaching to English-medium assessment needs deliberate vocabulary work in science and economics.",
        "The table sets out the contrasts that Masaurhi parents ask about most often, from the exam style to the route onward.",
      ],
      table: {
        caption: "Bihar Board, CBSE and IB / IGCSE compared for Masaurhi families",
        columns: ["Point", "Bihar Board", "CBSE", "IB / IGCSE"],
        rows: [
          ["Usual medium", "Hindi or English", "English mainly, some Hindi", "English, with Hindi as a language subject"],
          ["Style of question", "Textbook-led recall and standard problems", "Recall with growing application items", "Unfamiliar contexts that need analysis and justification"],
          ["School-set work", "Modest practical and project marks", "Internal assessment and projects", "Central in IB, limited in IGCSE"],
          ["Route after Class 12", "Bihar and national entrance exams, coaching in Patna", "JEE, NEET and CUET-UG", "CUET-UG, overseas applications, and JEE or NEET after eligibility checks"],
          ["Where it is taught", "In and around Masaurhi", "Masaurhi and Patna", "Other cities; none confirmed locally"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Masaurhi, and what sets the rate?",
      paragraphs: [
        "The rate depends on four things: the tutor's depth in your child's exact course, the level being taught, how many hours you book each week and how long each session runs. A teacher who has prepared students for IB Physics HL will usually charge more than one supporting MYP English, and a two-hour weekly plan costs more than a single hour. The figure is sent in writing before the free trial, and no public price list exists.",
        "Online delivery removes a few costs that a Patna arrangement would carry. There is no petrol, no auto fare, no paying a city premium for a tutor's address and no hours lost to a crowded Patna to Gaya train. For a student who already has a school journey, the recovered evening is often worth more than the saved money.",
        "Where the money goes matters as much as how much there is. Two hours spent on the structure of a long IB Chemistry answer tend to earn more than four hours re-reading notes. A tutor should be able to tell you what the first month will cover, what will be measured and when the plan will be reviewed.",
        "Plans stay flexible. A family can pause for Chhath or a wedding fortnight, resume afterwards, and change tutor without starting the process again.",
      ],
      bullets: [
        "Rate follows tutor experience, subject, level and weekly hours",
        "No transport spend and no travel time",
        "A written rate before the trial lesson",
        "Pause, restart or switch tutor without penalty",
      ],
    },
    {
      heading: "Online tutor, Patna coaching, a private home teacher or self-study: how do they compare?",
      paragraphs: [
        "Patna's coaching institutes are widely known across the region, but they are built around JEE, NEET, board exams and government recruitment. An IB or IGCSE student who joins a batch sits among others on a different syllabus, at a fixed hour, after a rail or road journey. It can help for a shared subject like calculus, and it was not designed for this qualification.",
        "A private teacher in Masaurhi itself can offer close attention, yet very few local teachers have taught IB Diploma or Cambridge Extended papers. Self-study with past papers works for a disciplined senior student, but nobody tells them whether a written answer would actually earn marks.",
        "Online one-to-one tuition combines attention with subject knowledge. The requirements are a dependable connection, a device with a working camera and microphone, and a student who brings a specific question to each class. A phone hotspot and a charged laptop handle most local power cuts.",
        "The table lines the four options up on what matters for these courses.",
      ],
      table: {
        caption: "Support options for an IB or IGCSE student in Masaurhi",
        columns: ["Option", "Knows IB and IGCSE papers", "Attention", "Practical points"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched on course and level", "Undivided", "Needs steady internet; no journey"],
          ["Patna coaching institute", "Seldom, focus is JEE and NEET", "Shared across a batch", "Rail or road journey, fixed timings"],
          ["Local private teacher", "Varies, few have taught these boards", "High", "Limited supply in Masaurhi"],
          ["Self-study", "Only what the student finds", "None without review", "Cheap, weak on feedback"],
        ],
      },
    },
    {
      heading: "The Masaurhi year: Chhath, Durga Puja, monsoon and fog against exam series",
      paragraphs: [
        "Festivals in Bihar are not small interruptions. Chhath, four days of fasting and river-side worship in October or November, reshapes household routines across the region, and Durga Puja and Diwali arrive close to it. Holi and Saraswati Puja punctuate the second half of the school year. The IB November session and Cambridge's October-November series fall right inside this stretch, so festivals must be treated as fixed dates in a revision plan.",
        "Weather matters as well. April to June is fiercely hot, with load-shedding and afternoon study becoming uncomfortable. The monsoon from July brings heavy rain and, in low-lying areas near the Punpun and canals, waterlogging that can cut power. December and January bring dense fog and cold mornings, and rail timings slip, which affects children who commute to Patna.",
        "The Bihar Board holds its annual exams in February and March, and many Masaurhi households are focused on these. A child balancing Bihar Board subjects with an IB or IGCSE course needs a plan that respects both, and that is easier to set out in advance than to repair in February.",
        "The table is a planning guide only. Real dates for mocks and exams come from your school or exam centre.",
      ],
      table: {
        caption: "A Masaurhi year for an IB or IGCSE student",
        columns: ["Months", "What is going on", "Study focus"],
        rows: [
          ["March to June", "Board exams end, new session begins, peak heat, May series exams", "Finish exams, then a light summer plan"],
          ["July to September", "Monsoon, long teaching terms, first internal assessment drafts", "New content and early coursework planning"],
          ["October to November", "Durga Puja, Chhath, Diwali, November exam series", "Targeted past papers before festivals, buffer for power cuts"],
          ["December to February", "Fog, cold, mocks, predicted grades, Bihar Board season", "Mock exams and university applications"],
        ],
      },
    },
    {
      heading: "After school: where can a Masaurhi IB or IGCSE student study next?",
      paragraphs: [
        "IB Diploma results are recognised by universities in the UK, US, Canada, Australia, Europe and Singapore, and the Association of Indian Universities treats the Diploma as equal to Class 12. A student from Masaurhi can therefore apply within India and abroad with the same set of grades, subject to the prerequisites each course sets.",
        "Patna is the natural home base. NIT Patna, IIT Patna at Bihta, AIIMS Patna at Phulwari Sharif, Patna University and Chanakya National Law University are all within the city region. Nalanda University at Rajgir draws students interested in the humanities and environment. CUET-UG opens central university admissions to IB and IGCSE-route students, and JEE or NEET eligibility for IB applicants depends on subject combinations and each year's rules, so check the current bulletin before choosing subjects.",
        "Those who look abroad usually work from Class 11, because overseas offers ask for predicted grades, a personal statement and, for some courses, tests and interviews. An online tutor can help with the subject portion while the family arranges the rest with their school or an adviser.",
        "IGCSE students move on to A Levels, the IB Diploma or an Indian board's senior classes at a school that admits transfers. A Level results are valued much like IB grades by overseas universities.",
      ],
      bullets: [
        "IB Diploma equals Class 12 for admission in India via AIU recognition",
        "NIT Patna, IIT Patna, AIIMS Patna and Patna University lie in the region",
        "CUET-UG is open to IB-route applicants",
        "Check JEE and NEET eligibility rules every year",
      ],
    },
    {
      heading: "IB Maths AA or AI, Physics, Chemistry and Biology: what a Bihar student should expect",
      paragraphs: [
        "IB Mathematics offers Analysis and Approaches for students who like algebra, calculus and proof, the usual route for engineering, physics and computing. Applications and Interpretation leans on data, modelling and calculators and suits economics, psychology and biology degrees. Students from Patna-style coaching backgrounds often choose AA because it feels familiar, and then discover that the exploration and the long Paper 3 problems need a different kind of thinking.",
        "Physics HL uses calculus from Maths AA, so combining it with AI is difficult. Chemistry HL adds organic synthesis, kinetics and equilibrium calculations. Biology HL rewards careful reading of data and clear experimental design. Students who have trained on Bihar Board and entrance-style problems are often quick at numerical work and need practice in explaining reasoning in words.",
        "Each science has an internal investigation that the student plans, carries out and evaluates. Tutors explain the criteria, challenge a weak plan and check understanding, while the question, data and writing stay with the student. Where school lab access is limited, simulations or shared data approved by the school can be used.",
        "Timing decides a lot. The first term of Class 11 sets habits for the next two years, and a tutor who starts then avoids the rescue mission that comes when predicted grades are due.",
      ],
      bullets: [
        "AA suits calculus and proof; AI suits data and modelling",
        "Physics HL pairs most naturally with Maths AA",
        "Coursework is coached but never written by the tutor",
        "Begin in early Class 11 for the cumulative subjects",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Masaurhi student choose?",
      paragraphs: [
        "Most IGCSE subjects are sat at Core or Extended tier. Core grades stop at C, while Extended can reach A*, so a student aiming at A Levels or IB sciences should plan for Extended. Core can be sensible where confidence has been knocked and a secure pass matters more, but moving up later is hard once entries are made.",
        "The subject mix is equally important. For engineering or medicine, three separate sciences give a stronger base than a combined award. Additional Mathematics 0606 prepares a student for IB Maths AA or A Level Mathematics. Hindi as a second language is often a high-scoring paper, because the student already speaks it at home.",
        "Practical skills are assessed through a written paper or a practical exam depending on the syllabus. Students without a well-equipped lab still need practice at planning, tabulating and evaluating, and tutors use video demonstrations and data sets to build the same skills.",
        "Private candidates from Masaurhi would need a Cambridge-registered centre, probably in Patna or another city, and must register well before the series. A tutor can plan revision around those dates, but booking a centre remains the family's responsibility.",
      ],
      bullets: [
        "Extended tier suits students aiming for A Levels or IB sciences",
        "Keep separate sciences for engineering and medicine goals",
        "Hindi second-language papers often reward native fluency",
        "Private entry needs a centre and early registration",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and DP subjects and Cambridge and Edexcel IGCSE to Masaurhi students. We begin with the exact syllabus, level and exam series, then look for a time that fits your child's school day, because every lesson is online.",

  process: [
    { title: "Share the basics", description: "Tell us the programme or board, subject, level, latest grades and which hours are free in Masaurhi." },
    { title: "Review the suggested tutors", description: "You receive tutors who have taught that course, each with a line on why they were chosen." },
    { title: "Take a free lesson", description: "Your child works through a real topic on video, with no fee and no promise to continue." },
    { title: "Agree the first month", description: "The tutor explains topics, weekly rhythm and how progress will be reported to you." },
    { title: "Settle into a regular slot", description: "A set hour each week, shifted around exams, festivals and monsoon days where needed." },
  ],

  whyPoints: [
    { title: "Matched on the exact course", description: "We look for tutors who have taught your child's precise syllabus and level." },
    { title: "Open about online delivery", description: "Families in Masaurhi hear at the start that lessons are live video and no tutor comes to the house." },
    { title: "A trial before any plan", description: "A free lesson on a real topic tells you more than a profile ever could." },
    { title: "Coaching that stays honest", description: "Tutors guide internal assessments, the Extended Essay and TOK, and never write them." },
    { title: "Notes after every class", description: "A short written recap follows each lesson, with a wider review every few weeks." },
    { title: "Free to change course", description: "Pause, switch tutor or stop whenever you need to, with no lock-in." },
  ],

  faqs: [
    {
      question: "Is IB or IGCSE home tuition available in Masaurhi?",
      answer:
        "We provide online home tuition, not home visits. Tutors do not travel to Masaurhi, and in-person tuition runs only in Gurugram and parts of Delhi NCR. Your child has a live one-to-one lesson from home on a laptop, with the tutor on video and a shared whiteboard, which is what most families mean by private tuition at home.",
    },
    {
      question: "How can I find an IB tutor near Masaurhi?",
      answer:
        "Send us the programme, subject, level and school, and we suggest tutors who have taught that exact course. As few IB specialists live in this part of Patna district, the tutor joins by video from elsewhere in India. You meet them in a free trial, then agree a weekly slot and a written rate.",
    },
    {
      question: "Is there an IB or Cambridge school in Masaurhi?",
      answer:
        "We could not confirm one, so we name no school in the town. The closest we have verified is Vidya Sanskar School on the Danapur side of Patna, and there are more options in Kolkata and Delhi NCR. Families here usually attend a school elsewhere or follow a local board and add an online tutor for subject depth.",
    },
    {
      question: "What does IB or IGCSE tuition cost in Masaurhi?",
      answer:
        "The rate depends on the subject, level, weekly hours and the tutor's experience, and you receive it in writing before the trial. We do not publish a fixed list, since IB Physics HL and MYP Hindi are not priced alike. Because lessons are online, nothing goes on travel, so the fee pays for teaching time.",
    },
    {
      question: "Can a Bihar Board student switch to IGCSE?",
      answer:
        "Yes, and Class 8 or 9 is the smoothest time. The content overlaps more than parents expect. The real adjustments are writing in English to a mark scheme, reading command words and showing the reasoning behind an answer. Regular one-to-one lessons usually narrow those gaps within a few months.",
    },
    {
      question: "Which IB subjects do families from this area ask for most?",
      answer:
        "Mathematics, Physics and Chemistry lead because of engineering plans, followed by Biology, Economics and Business Management. Students from Hindi-medium schools often ask for English support too. Our tutors also cover Hindi as a language subject, where fluency at home can lift a grade.",
    },
    {
      question: "Will a tutor write the Internal Assessment or Extended Essay?",
      answer:
        "No, and tutors are not allowed to. They explain the criteria, help select a workable question, comment on drafts for structure and clarity and teach method. The data, reasoning and words must be your child's own, because authenticity checks exist and a breach can put the whole qualification at risk.",
    },
    {
      question: "What happens during the free trial lesson?",
      answer:
        "Your child works through a topic of their choice with the proposed tutor, live on video, at no cost and with no obligation. Afterwards you receive a short note on what was covered and what we suggest next. If the tutor is a poor fit, we offer another before anything is agreed.",
    },
    {
      question: "What device and connection do we need?",
      answer:
        "A laptop or tablet with a working camera and microphone, and a connection that holds video. Keep a phone hotspot and a charged battery for power cuts and monsoon days. A stylus tablet helps in maths and science, but a sheet of paper held to the camera works too, and the tutor can use the shared whiteboard.",
    },
    {
      question: "Can my child sit IGCSE privately from Masaurhi?",
      answer:
        "Yes, through a Cambridge-registered centre that accepts private candidates, most likely in Patna or another city. Registration closes months ahead, and practical papers are swapped for written alternatives. We can plan revision to the centre's dates, but finding and booking the centre is the family's task.",
    },
    {
      question: "Is the IB accepted for admission in India?",
      answer:
        "Yes. The Association of Indian Universities treats the IB Diploma as equal to Class 12, and IB students apply through CUET-UG like others. Some courses ask for particular subjects, and eligibility for JEE or NEET depends on the subjects studied and the current rules, so read each year's bulletin.",
    },
    {
      question: "My child travels to Patna for school. Can lessons still work?",
      answer:
        "Usually, because online tuition removes a second journey. We choose a slot once your child is home and has eaten, often late evening or Sunday morning, and keep it the same each week. On heavy days, a shorter session plus marked practice is easier to manage.",
    },
    {
      question: "When should IB Diploma tuition begin?",
      answer:
        "Start in the first term of Class 11, particularly for Mathematics, Physics and Chemistry. The content builds across two years, and internal assessments begin early. Starting in Class 12 leaves little time for timed papers before predicted grades go to universities.",
    },
    {
      question: "What if Chhath, a power cut or flooding disturbs a lesson?",
      answer:
        "We reschedule it. Festival weeks and monsoon outages are known in Bihar, so we agree a plan in advance: a hotspot, a charged laptop and a make-up slot. A lesson lost for these reasons is not charged twice, and we build extra buffer weeks before the November exam series.",
    },
    {
      question: "How do I start from Masaurhi?",
      answer:
        "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with your board, subject, level, current grade and free evenings. We reply with a shortlisted tutor, a trial time and the written rate. Nothing is payable until you have seen the first lesson and chosen to continue.",
    },
  ],

  internalLinks: [
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring organised by programme and subject." },
    { label: "IGCSE overview", href: "/igcse/", description: "Cambridge and Edexcel subjects, tiers and exam series." },
    { label: "Find a tutor", href: "/tutors/", description: "Tutor profiles sorted by subject, board and experience." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, the core and internal assessment." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria and the Personal Project explained for parents." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry units and the Exhibition for younger learners." },
    { label: "IB Maths guide", href: "/courses/ib/mathematics/", description: "How AA and AI differ and how to prepare for each." },
    { label: "Admissions and test prep", href: "/admissions/test-prep/", description: "Help around CUET, JEE, NEET and overseas applications." },
    { label: "IB and IGCSE tutoring in Patna", href: "/patna/", description: "The state capital, whose schools and colleges many Masaurhi families look to." },
    { label: "IB and IGCSE tutoring in Gaya", href: "/gaya/", description: "Online matching for students down the line in Magadh." },
    { label: "IB and IGCSE tutoring in Jehanabad", href: "/jehanabad/", description: "Tutor matching for families in the neighbouring district." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your brief and arrange a free trial lesson." },
  ],

  closingHeading: "Arrange a free IB or IGCSE trial lesson from home in Masaurhi",
  closingBody:
    "Tell us the programme or board, the subject and level, your child's school journey and the hours that are genuinely free. We come back with a tutor who has taught the course, a video trial slot and a written rate, and nothing is due until you have watched the first lesson. Email support@ibgram.com or message +91 7439 368 115 on WhatsApp.",

  geo: { latitude: 25.3533, longitude: 85.0303 },
  alternateNames: ["Masaurhi Patna", "Masaurhi Sharif", "Masaurhi Bihar"],
  wikipedia: "https://en.wikipedia.org/wiki/Masaurhi",
  stripSchools: [],
};
