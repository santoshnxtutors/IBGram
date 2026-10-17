import type { CitySeoPage } from "../types";

/**
 * Sopore (Baramulla district, Jammu and Kashmir). Strictly non-political: geography, boards, climate and
 * education only. No IB or Cambridge / Edexcel school could be confirmed in the town, so stripSchools is empty
 * and the clusters point honestly to the Chandigarh region, Delhi NCR and Amritsar, whose schools are already
 * verified on neighbouring pages. Online only; no in-person tuition outside Gurugram and parts of Delhi NCR.
 */
export const sopore: CitySeoPage = {
  slug: "sopore",
  countryName: "Sopore",
  countryNameLong: "Sopore, Jammu and Kashmir",
  demonym: "Sopore",
  state: "Jammu and Kashmir",
  stateCode: "IN-JK",
  flagCode: "in",
  countryCode: "IN",
  region: "Jammu and Kashmir, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lessons set after school hours and moved for the apple harvest, the winter break, Ramadan timings and the snowiest weeks",
  lastUpdated: "2026-09-21",
  geo: { latitude: 34.3, longitude: 74.4667 },
  wikipedia: "https://en.wikipedia.org/wiki/Sopore",
  alternateNames: ["Sopur", "Sopore Baramulla", "Sopore Kashmir", "Apple Town of Kashmir"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Sopore | Private Online Tuition",
  metaDescription:
    "Private online tuition for IB and IGCSE students in Sopore, Baramulla: DP, MYP, PYP, Cambridge and Edexcel, taught live and one-to-one, first lesson free.",
  h1: "IB and IGCSE Tutors and Private Home Tuition Online in Sopore",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION ONLINE FOR SOPORE",
  heroSubtitle:
    "Private tuition from home in Sopore, for a course that almost nobody around the Jhelum valley teaches, is what this page is about. If your child follows the IB or a Cambridge or Edexcel IGCSE syllabus, a specialist can join a live video lesson from another part of India, see the written work on camera and plan the week with you, while the student stays in their own room in Sopore.",
  primaryKeyword: "IB and IGCSE tutors in Sopore",
  imageAltText: "Sopore student using a laptop for a live IB Mathematics lesson with a tutor",
  secondaryKeywords: [
    "IB tutor Sopore",
    "IGCSE tutor Sopore",
    "IB home tuition Sopore",
    "IGCSE home tuition Sopore",
    "IB private tuition Sopore",
    "IB Maths tutor Sopore",
    "IGCSE Maths tutor Sopore",
    "IB Physics tutor Sopore",
    "IB Chemistry tutor Sopore",
    "IB Biology tutor Sopore",
    "IB DP tutor Sopore",
    "IB MYP tutor Sopore",
    "IB PYP tutor Sopore",
    "IGCSE online tuition Sopore",
    "IB tutor Baramulla district",
    "IB tutor Kashmir",
    "IGCSE tutor Kashmir Valley",
    "online IB tutor Jammu and Kashmir",
    "IB tutor Sopur",
  ],

  heroTrustPoints: [
    "Private tuition from home, taught online and one-to-one",
    "Tutors chosen for your child's exact stage, subject and board",
    "The first lesson is free and carries no obligation",
    "Independent of schools, examiners and awarding bodies",
    "Parents receive a short report after every session",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages taught" },
    { value: "Two boards", label: "Cambridge and Edexcel IGCSE" },
    { value: "IST", label: "Lessons on Indian time" },
    { value: "Free first lesson", label: "Try before you decide" },
  ],

  intro: {
    heading: "Sopore, the apple town, and the search for IB and IGCSE teachers",
    paragraphs: [
      "Sopore sits on the Jhelum at the edge of Wular Lake, about forty-five kilometres from Srinagar and a short drive from Baramulla. The town is best known for its fruit market at Nowpora Kalan, one of the biggest in Asia, which is why people call it the apple town of Kashmir. Orchards, trade, government service and education keep most households busy, and families here take schooling seriously.",
      "What the valley offers in tutoring is shaped by the boards its schools follow, chiefly the Jammu and Kashmir Board and CBSE, plus intensive coaching for NEET, JEE and other entrance tests. A family that has chosen the IB or an IGCSE course for a child, perhaps after living abroad or because a relative overseas is paying for a foreign-degree route, meets a wall of silence when asking locally for a subject specialist.",
      "Online teaching removes that wall. A tutor based elsewhere in India joins a live video lesson at the agreed hour, works problems on a shared screen, and watches the student's handwriting through the camera. No one travels to Sopore: in-person home tuition exists only in Gurugram and parts of Delhi NCR, so lessons here are always online. The benefit is expertise that is otherwise out of reach.",
      "The pages that follow set out where the nearest international schools are, how local boards differ from the IB and IGCSE, what pushes fees up or down, how snow, orchards and Ramadan interact with the exam year, and where graduates go next. They describe IB and IGCSE tutors in Sopore as a service, not a guarantee of any result.",
    ],
  },

  programmesIntro:
    "The four IB programmes and both leading IGCSE boards are available. Here is what each usually means for a student living in Sopore.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Learning through themed units of inquiry instead of a textbook for every subject. Tutoring at this age stays gentle, with read-aloud time, number games and plenty of conversation.",
      countryNote:
        "PYP is almost unheard of in the valley, so a child on it has usually come from abroad or another city. Short morning or early-evening calls help, because winter daylight fades early.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups judged against criteria, linked by global contexts, closing with a personal project. Tutors help a student decode what each criterion wants and show full reasoning.",
      countryNote:
        "Sopore students moving from an Urdu or Kashmiri-medium classroom into MYP meet a wall of English vocabulary. A tutor can build it step by step alongside the content.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus the Extended Essay, Theory of Knowledge and CAS across two years. Tutors teach content and exam method, while essays, internal assessments and reflections remain entirely the student's own.",
      countryNote:
        "DP candidates linked to Sopore are typically boarders in Chandigarh, Mohali or Delhi NCR. Holiday and winter-break lessons from home let them catch up without travelling.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pairing of DP courses with a career-related study and a reflective project, for students wanting an applied path. Tutors concentrate on the academic courses in the mix.",
      countryNote:
        "CP is very uncommon in Kashmir. Families usually bring it up when weighing it against the full Diploma, and a tutor can lay out what each route keeps open.",
    },
  ],

  subjectsIntro:
    "IB subjects at Higher and Standard Level. Each Sopore student is paired with someone who has recently taught that particular course.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, functions and rigorous argument, favoured by future engineers, architects and scientists." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Data, probability and modelling with a graphic calculator, suited to commerce, agriculture-linked degrees and the social sciences." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics to quantum ideas, with drill on graph questions and short written explanations." },
    { name: "Chemistry", levels: "SL and HL", description: "Mole calculations, energy changes, equilibrium and organic routes, practised in exam-style structure." },
    { name: "Biology", levels: "SL and HL", description: "Cell biology, genetics, physiology and ecology, with careful vocabulary for future medical applicants." },
    { name: "Economics", levels: "SL and HL", description: "Diagram-led micro and macro, using cases such as fruit markets and seasonal trade." },
    { name: "Business Management", levels: "SL and HL", description: "Case-based analysis of firms, finance and operations, good for orchard and trading families." },
    { name: "Computer Science", levels: "SL and HL", description: "Algorithms, data structures and networks, rehearsed against the paper format." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Reading unseen texts closely and building a clear written argument." },
    { name: "English A: Literature", levels: "SL and HL", description: "Prose, poetry and drama, with help on the individual oral." },
    { name: "Urdu and Hindi", levels: "SL and HL", description: "Language support for students who speak Urdu, Kashmiri or Hindi at home, where their school offers it." },
    { name: "Environmental Systems and Societies", levels: "SL and HL", description: "Ecosystems, water and land use, a natural fit for a student near Wular Lake and the orchards." },
    { name: "Geography", levels: "SL and HL", description: "Physical and human geography, including mountain hazards, with data-response practice." },
    { name: "Theory of Knowledge", levels: "DP core", description: "Guidance on how knowledge questions work. The essay and exhibition remain the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE subjects. Paper codes and tiers are fixed at the opening lesson, because each board lays out its papers differently.",
  igcseSubjects: [
    { name: "Mathematics (0580 and 4MA1)", levels: "Core and Extended", description: "Algebra, geometry, trigonometry and statistics, with more stretch at Extended tier." },
    { name: "Additional Mathematics (0606)", levels: "Extended", description: "A brisk calculus-and-algebra course that eases the jump to IB Mathematics HL." },
    { name: "Physics", levels: "Core and Extended", description: "Thermal physics, electricity, waves and radioactivity, with practical-skills questions." },
    { name: "Chemistry", levels: "Core and Extended", description: "Atoms, bonding, rates and organic chemistry, including planning questions." },
    { name: "Biology", levels: "Core and Extended", description: "Organisms, enzymes, inheritance and ecology with exact definitions." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core and Extended", description: "Double-award science for students who prefer one balanced course." },
    { name: "Computer Science", levels: "Extended", description: "Pseudocode, logic and databases in the board's own style." },
    { name: "English First Language and Second Language", levels: "Extended", description: "Directed writing, summary and comprehension shaped around the mark scheme." },
    { name: "Urdu and Hindi as second languages", levels: "Core and Extended", description: "Reading and writing tasks for students whose home language is Urdu, Kashmiri or Hindi." },
    { name: "Geography and Environmental Management", levels: "Extended", description: "Case studies and data skills, useful for students from a mountain region." },
  ],

  regionsTitle: "Where in and around Sopore our online students are based",
  regionsIntro:
    "No lesson happens at these places, since everything runs online. They simply show where families live, with a line on how local life affects a sensible lesson time.",
  regions: [
    { name: "Old Sopore on the Jhelum", note: "The historic riverside quarter. Narrow lanes and old houses, with evening study often done after the market quietens." },
    { name: "Sopore town centre", note: "The busy commercial core. Shops stay open late, so mid-evening sessions avoid the loudest hours." },
    { name: "Nowpora Kalan fruit market area", note: "Families here live by the apple season. From September to November, lessons move to early mornings or Sundays around loading and sorting." },
    { name: "Zaloora", note: "A residential neighbourhood on the town's edge. Quiet streets make it a practical spot for focused online study." },
    { name: "Wadoora", note: "Home to the agricultural university campus. Faculty and staff families sometimes choose international courses for their children." },
    { name: "Wular Lake shore", note: "Villages along the water depend on fishing, water chestnuts and orchards. Winter fog and cold can shorten the usable evening." },
    { name: "Baramulla town", note: "About sixteen kilometres away, with its own cluster of schools and a medical college. Students there often add online tuition for specialist subjects." },
    { name: "Rafiabad", note: "A town north of Sopore. Distance from large cities makes online teaching especially useful here." },
    { name: "Pattan", note: "On the Srinagar road, with commuting families. Lessons are best placed after the drive home." },
  ],

  schoolClusters: [
    {
      city: "Sopore and Baramulla district",
      note: "Nothing in the district could be confirmed as an IB or Cambridge or Edexcel IGCSE school. Local schools follow the J&K Board or CBSE, so an international learner normally studies elsewhere, or on their own.",
      schools: [],
    },
    {
      city: "Nearby: Chandigarh region",
      note: "The Chandigarh-Mohali belt is the nearest area with confirmed IB provision, and some Kashmiri families board children there. Named only as pointers, with no link to us.",
      schools: ["Strawberry Fields High School, Chandigarh (IB)", "Oakridge International School, Mohali (IB and Cambridge IGCSE)"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Delhi NCR has the widest choice of boarding schools teaching the IB.",
      schools: ["Pathways World School, Aravali (IB)"],
    },
    {
      city: "Nearby: Amritsar",
      note: "Amritsar has a pair of schools with international curricula, reachable by road or rail from the Jammu side.",
      schools: ["Invictus International School", "International Fateh Academy"],
    },
  ],
  schoolDisclaimer:
    "IB Gram is an independent tutoring business. It is not connected to the IB, Cambridge, Pearson or any school on this page, and each school is named purely as a pointer to where international courses exist within reach of Sopore. A mention here is not an endorsement.",

  modesIntro:
    "Because teaching here is online only, the decision is about how often to meet and how intense to make it.",
  modes: [
    {
      title: "Standing weekly lesson",
      description: "The same tutor, the same subject and the same hour each week, delivered live to a laptop on your child's own desk.",
      bullets: [
        "One tutor carried through the term",
        "Shared screen, digital whiteboard and past papers",
        "A compact report for parents after each session",
        "Tutor swap whenever the pairing feels wrong",
      ],
    },
    {
      title: "Winter-break and summer intensive",
      description: "Longer, denser blocks during the long school holidays, when a Kashmiri student has time to cover a topic thoroughly.",
      bullets: [
        "Daily or alternate-day sessions in the break",
        "A full unit revisited from first principles",
        "Timed questions marked immediately",
        "Ideal for boarders home for the vacation",
      ],
    },
    {
      title: "Stage-switch support",
      description: "Help for a student moving between a J&K Board or CBSE classroom and an IB or IGCSE course, in either direction.",
      bullets: [
        "A first lesson that maps what is solid",
        "Practice with English command words",
        "An unhurried pace for younger children",
        "Parents kept in the loop throughout",
      ],
    },
  ],

  sections: [
    {
      heading: "Which international schools are within reach of a family in Sopore?",
      paragraphs: [
        "Within Sopore and the wider Baramulla district, no school could be confirmed as teaching the IB or an IGCSE syllabus, and we would rather state that than fill space with guesses. Private schools here follow the J&K Board or CBSE, and a few are linked with other national boards. International curricula are found in larger cities.",
        "The nearest confirmed IB schools are in the Chandigarh and Mohali area, with more options across Delhi NCR and a couple in Amritsar. For a Kashmiri family, that means boarding. The decision involves the child's age, the cost and the distance, and is one for the family to weigh with each school directly.",
        "Because of this, the learners we meet through Sopore tend to be in a few situations. Some board outside the valley and return for long holidays. Some have lived overseas and come back with a syllabus half finished. Some study IGCSE subjects privately as a stepping stone to study abroad. A few families simply prefer the international style of learning and want it from home.",
        "Across all four, the practical need is a teacher who understands the syllabus and can reach the student. That is what online tuition provides, and it is the heart of offering IB and IGCSE tutors in Sopore in the first place.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Sopore or Baramulla district",
        "Chandigarh-Mohali, Delhi NCR and Amritsar hold the nearest confirmed options",
        "Typical learners: boarders, returnees, private candidates",
        "Online tuition reaches them wherever they sit",
      ],
    },
    {
      heading: "J&K Board, CBSE, IB and IGCSE: what actually differs for a Sopore student?",
      paragraphs: [
        "The Jammu and Kashmir Board of School Education sets the syllabus for most government and many private schools in the valley. CBSE, with its NCERT books, is the choice for families aiming at national entrance tests. Both reward clear recall, tidy working and familiarity with a fixed textbook.",
        "IB and IGCSE examiners ask for something wider. A science paper can show a dataset the student has never seen. A Mathematics paper can set a practical problem and leave the method open. Humanities and English tasks reward an argument backed by evidence. Students raised on board-style papers generally know the content and need practice in presenting it the way these examiners credit.",
        "Language is the other big change. Many Sopore households speak Kashmiri at home and study Urdu at school, while IB and IGCSE papers are written in English and expect precise academic vocabulary. A patient one-to-one tutor can build that vocabulary along with the subject, without waiting for a term of remedial classes.",
        "The table below compares the four systems on the points families in Sopore ask about most.",
      ],
      table: {
        caption: "J&K Board, CBSE, IB and IGCSE as they affect Sopore families",
        columns: ["Feature", "J&K Board", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["Teaching language", "Urdu, English and regional languages", "English or Hindi", "English, plus a second language", "English, plus optional languages"],
          ["How marks are earned", "Board papers on a set syllabus", "Board papers with internal marks", "Exams, internal assessments and an essay", "Mainly written papers"],
          ["Tutors available in town", "Many, plus entrance coaching", "Many, including NEET and JEE centres", "None confirmed locally", "None confirmed locally"],
          ["Indian university route", "Direct for regional admissions", "Direct, with CUET-UG, JEE and NEET", "Equivalence certificate needed", "Often a stage before A Level or IB"],
        ],
      },
    },
    {
      heading: "How is the price of IB and IGCSE tuition in Sopore worked out?",
      paragraphs: [
        "No fixed price is published here. The figure depends on several things that differ from family to family, so a quote follows the free first lesson, written down for you to consider calmly.",
        "Higher Level Diploma subjects and Additional Mathematics call for deeper specialists than a Core IGCSE topic, and the rate reflects that. A tutor with years of exam-board experience in a scarce subject such as Physics costs more than one supporting a Class 6 MYP learner with reading. The rate also shifts with lesson length, weekly frequency, and how near the exam is.",
        "Local comparisons are worth making. Coaching centres in Sopore and Baramulla are built for board and entrance exams and charge per seat in a large class. A neighbourhood tutor can be very good at school maths, yet typically lacks IB command-word training. The fee for a matched online tutor buys undivided time and a specific syllabus match.",
        "Families planning a winter-break intensive or a full-year arrangement can ask for that to be written out separately. Replacing a tutor who does not suit your child is always free.",
      ],
      bullets: [
        "Level and subject: HL and Additional Mathematics sit above Core topics",
        "The tutor's experience with that exact syllabus",
        "Lesson length and weekly count",
        "Distance from the exam session",
        "A written quote before any commitment",
      ],
    },
    {
      heading: "Online tuition, coaching centres, nearby tutors or self-study: what suits a Sopore student?",
      paragraphs: [
        "Sopore and Baramulla have coaching institutes for NEET, JEE and board exams, and many capable private tutors. For J&K Board and CBSE students they are a real help. They were not built for the IB or IGCSE, which have their own papers, command words and marking style.",
        "A local tutor can explain a topic well and still miss what an IB or Cambridge examiner wants to see. The same working that earns full marks in a board paper can lose two or three in an international one because a step is unstated or a definition is worded differently.",
        "Self-study is a sound start for a disciplined student, given how freely the boards publish past papers and examiner reports. Its main weakness is feedback, because nobody marks the student's written answers against the real scheme and habits stay uncorrected.",
        "Online tuition keeps the student at home through the long winter and adds a specialist's time. The table compares the options on what parents raise most.",
      ],
      table: {
        caption: "Comparing study routes for IB and IGCSE from Sopore",
        columns: ["Route", "Syllabus fit", "Individual time", "Getting there", "Weak point"],
        rows: [
          ["Online private tuition", "Tutor selected for the exact course", "The whole hour for one student", "Nothing to travel", "Needs a dependable connection and a quiet corner"],
          ["Coaching institute", "Built for board and entrance exams", "Shared across a batch", "A daily trip in town", "Question style differs; few IB-trained teachers"],
          ["Nearby private tutor", "Varies with the tutor", "Good for subjects they know", "Tutor or student must travel", "Hard to check IB or IGCSE experience"],
          ["Self-study", "Good with the correct past papers", "None unless an adult reviews work", "Nothing to travel", "No expert marking of written answers"],
        ],
      },
    },
    {
      heading: "How do apple season, winter snow and Ramadan shape the IB and IGCSE year in Sopore?",
      paragraphs: [
        "IB and IGCSE each hold a May series and an autumn series, and most Indian schools enter their classes in May. Mock papers usually come in January or February. In the valley the school calendar can differ from the national one, so a student's own school dates matter more than a general timetable.",
        "Sopore's year has its own beat. Apple blossom arrives in spring and the harvest runs roughly from September to November, when many households are fully occupied with picking, grading and trade. Winter brings snow, cold mornings and a long break for many schools. Eid and Ramadan move about ten days earlier each year, and during the fast families often prefer lessons after the evening meal.",
        "Weather and connections deserve a plan. Heavy snow can disturb power and broadband for a day or two, so a mobile data backup and a charged laptop are sensible. Summers are pleasant, which makes May and June exams easier than in the plains, but the harvest period can crowd the November series.",
        "At the start of each term we map these dates with parents and arrange lessons around them. The table sketches a typical year.",
      ],
      table: {
        caption: "A Sopore year set against the exam calendar",
        columns: ["Months", "What is happening locally", "What it means for lessons"],
        rows: [
          ["December to February", "Snow, winter break, mock papers", "Intensive blocks at home; backup connection advised"],
          ["March to April", "New session, apple blossom, final revision", "Main revision window before the May series"],
          ["May to June", "Pleasant weather, May exams", "Regular weekly slots, with rest days before papers"],
          ["July to August", "Summer break in many schools", "Good time to build foundations for a new year"],
          ["September to November", "Apple harvest, autumn exam series", "Early-morning or Sunday sessions around orchard work"],
        ],
      },
    },
    {
      heading: "Where do IB and IGCSE students from Sopore go after school?",
      paragraphs: [
        "Close to home are NIT Srinagar, the University of Kashmir, the Central University of Kashmir, the Islamic University of Science and Technology at Awantipora, SKUAST-Kashmir at Wadoora, and AIIMS Awantipora for medicine. Further afield are IIT Jammu, IIM Jammu and universities in Delhi, Chandigarh and beyond. Indian institutions generally ask IB Diploma holders for an equivalence certificate from the Association of Indian Universities.",
        "Some routes carry extra conditions. The national tests for engineering and medicine publish notes on international-board candidates, usually insisting on named subjects. The J&K common entrance has its own eligibility language. Because these notes shift between years, families should read the latest version during Class 11.",
        "Study abroad attracts many Kashmiri families, especially those with relatives in the Gulf, the UK, Canada or the United States. An IB Diploma score is understood directly by foreign admissions offices, and IGCSE results give the base for A Levels or IB. Predicted grades carry weight, so steady preparation in the first Diploma year pays off.",
        "A tutor can explain how subject combinations affect options, for instance why IB Mathematics AA HL suits engineering, or why Biology with Chemistry keeps medical doors open. No tutor can promise a seat anywhere.",
      ],
      bullets: [
        "Local options: NIT Srinagar, Kashmir University, SKUAST-K, IUST, AIIMS Awantipora",
        "Equivalence certificate from the Association of Indian Universities for most Indian applications",
        "National entrance tests publish separate notes for IB and IGCSE students",
        "Overseas study relies on IB points, or IGCSE followed by A Level",
      ],
    },
    {
      heading: "What does IB Mathematics AA and AI teaching look like online for a Sopore student?",
      paragraphs: [
        "Analysis and Approaches spends its time on algebra, calculus and proof, which suits students heading towards engineering, mathematics or physics. Applications and Interpretation spends more on data, probability and modelling with a graphic calculator, which suits economics, business and life-science paths. Choosing correctly in the first term saves a painful switch later.",
        "In a live session the tutor poses a problem on a shared screen and the student writes the solution on paper, with a camera or a tablet showing each line. Mistakes are fixed on the spot, then a similar question follows. After some weeks, timed past papers add the stamina and judgement that examiners reward.",
        "Sciences call for a different skill. Board-trained students often calculate well but write thin explanations. Tutors teach a repeatable shape for longer answers: state the principle, tie it to the numbers in the question, explain the consequence, and close with a conclusion.",
        "Practical skills are built by reasoning about experiments on paper, using school laboratory data or simulations. Internal assessments belong to the student. A tutor may discuss the criteria, but does not draft or edit the submission.",
      ],
    },
    {
      heading: "Should a Sopore student sit IGCSE Core or Extended, and which subjects?",
      paragraphs: [
        "Two tiers exist in many IGCSE subjects. Core is shorter and caps the best grade available, while Extended covers more ground and opens the top grades. Students looking towards IB Diploma Mathematics or sciences, A Levels or an engineering degree should enter Extended in those subjects.",
        "What to take depends on the destination. A future engineer keeps Mathematics, Physics and Chemistry, adding Additional Mathematics if offered. A future doctor keeps Biology with Chemistry and Physics. A student from an orchard or trading family might add Economics or Business Studies, and English plus a language rounds out the profile.",
        "The boards are not identical. Cambridge and Pearson Edexcel International GCSE arrange topics differently and assess practical skills in their own ways, so moving between them can leave a gap. A tutor who has taught both can find it quickly and close it in a few lessons.",
        "A private candidate should start with the published specification and book an exam centre early. Past papers and examiner reports provide practice. Our tutors follow the specification in order and log what has been covered.",
      ],
      table: {
        caption: "Core or Extended: a quick guide for Sopore students",
        columns: ["Question", "Core tier", "Extended tier"],
        rows: [
          ["Highest grade possible", "Limited", "Full range"],
          ["Who it suits", "Students wanting firm basics", "Students aiming at IB HL, A Level or engineering"],
          ["Style of questions", "Shorter and more guided", "Longer, with harder stretch items"],
          ["What tutoring adds", "Accuracy and confidence", "Problem solving and timing"],
        ],
      },
    },
  ],

  process: [
    { title: "Drop us a line", description: "Tell us the class, the IB stage or IGCSE board, the subject and the exam month through WhatsApp or email." },
    { title: "Review a proposed tutor", description: "We suggest a teacher who has recently handled that course and explain why they fit." },
    { title: "Take the free lesson", description: "Your child spends a full first session with the tutor, at no cost and with no strings attached." },
    { title: "Read the terms", description: "If you want to go on, the fee and the weekly timetable are sent in writing before anything starts." },
    { title: "Keep learning and reviewing", description: "Weekly sessions begin, each followed by a brief report. A mismatch is solved by changing tutor, not by persevering." },
  ],

  whyPoints: [
    { title: "Right teacher, right course", description: "The match rests on recent experience with your child's precise stage, subject and board." },
    { title: "Made for places the market forgot", description: "Sopore has no IB specialists, so the service is designed from the start for live video from home." },
    { title: "Clear reports", description: "Each session ends with a note on topics covered, errors seen and the next target." },
    { title: "Fair boundaries", description: "Advice on criteria and structure is given. Writing or rewriting assessed work never is." },
    { title: "Simple to change", description: "A tutor who does not suit your child is replaced without fuss or extra fees." },
    { title: "Seasons in the timetable", description: "Harvest weeks, snow days, Ramadan hours and the winter break are planned for before lessons begin." },
  ],

  faqs: [
    {
      question: "Are there IB and IGCSE tutors I can use from Sopore?",
      answer: "Yes, online. Nobody in the town specialises in these syllabuses, but our tutors across India teach over video on Indian time. Each is picked for one course, for instance DP Chemistry HL or IGCSE Mathematics Extended. Your child joins from home on a laptop, and the tutor works through problems on a shared screen.",
    },
    {
      question: "Will a teacher visit our house in Sopore?",
      answer: "No. Home visits are offered only in Gurugram and parts of Delhi NCR, so no tutor travels to Sopore. What we provide is online home tuition: a private lesson that your child attends from their own room, with the tutor seeing handwritten working through the camera and marking it line by line.",
    },
    {
      question: "Is there any IB school in Sopore or Baramulla?",
      answer: "None could be confirmed. Schools in the district follow the J&K Board or CBSE. The nearest confirmed IB schools are in the Chandigarh-Mohali area and Delhi NCR, with Amritsar also listed on this page. Please check each school's current curriculum and admissions rules yourself, because we have no tie to any of them.",
    },
    {
      question: "What will lessons cost?",
      answer: "That depends on the tutor and course, and you will see the figure in writing after the free first lesson. Level, subject, the tutor's experience with that exact syllabus, how long and how often you meet, and the distance to the exam all feed into it. We avoid a public price list because it would hide those differences.",
    },
    {
      question: "My child studies under the J&K Board. Could they move to IGCSE?",
      answer: "It is possible with planning. Options include a school that offers IGCSE, or private study with an approved exam centre. A tutor can run a diagnostic and describe the gap honestly. For many students the largest adjustment is writing longer English answers and explaining reasoning, not the subject content itself.",
    },
    {
      question: "Can my child take Urdu or Kashmiri as a subject?",
      answer: "Urdu and Hindi tutors can be arranged at IB and IGCSE levels. Kashmiri depends on whether the specific syllabus includes it, so we check the course first. Lessons cover set texts, exam-style writing in the right register and speaking practice, beginning with whether the language is the student's first or one they are learning.",
    },
    {
      question: "Do you help write Extended Essays or internal assessments?",
      answer: "No. Help stops at coaching: discussing the marking criteria, testing whether a research question is workable and pointing out structural weaknesses in a draft. Tutors do not write or edit the work. The same holds for TOK essays and coursework, which must remain the candidate's own for the school and the IB to accept them.",
    },
    {
      question: "What if heavy snow cuts power or the internet?",
      answer: "Keep a charged laptop and a second connection, such as a phone hotspot, in reserve. If an outage ends a session early, we move the lost time to another day at no charge. Audio-only calls with photographs of written work are a last resort that still lets a tutor guide a student through problems.",
    },
    {
      question: "How early should we start for the May series?",
      answer: "Seven to nine months ahead is comfortable, which means August or September. That leaves time to finish the content, practise whole papers and use feedback from a January mock. Late starters can still improve, though the weekly load is heavier. The first lesson tests what is solid so nothing is taught twice.",
    },
    {
      question: "Are younger children taught too?",
      answer: "Yes, from PYP age. Sessions for small children last around half an hour and lean on reading aloud, counting games and talk. MYP students get subject lessons tied to the assessment criteria. An adult near the screen for the first weeks helps the routine settle, then the child usually manages alone.",
    },
    {
      question: "Will Indian universities accept IB or IGCSE results?",
      answer: "Generally yes, with paperwork. Many institutions ask for an equivalence certificate from the Association of Indian Universities, and the national entrance tests for engineering and medicine set their own conditions for international boards. Check the current notes during Class 11. Tutors explain what subject choices imply, but cannot process any certificate or promise a seat.",
    },
    {
      question: "What equipment is needed?",
      answer: "A laptop or tablet that handles video, headphones if the house is noisy, dependable broadband or a strong mobile plan, and a desk with good light. A phone propped above the page acts as a second camera for handwriting. A graphic calculator is needed only where the school's course requires one.",
    },
    {
      question: "Can students in Baramulla, Rafiabad or Pattan join too?",
      answer: "Yes. Nobody travels, so distance from Sopore does not matter. Students in Baramulla, Rafiabad, Pattan and villages around Wular Lake can all attend. Try a test call at the hour you intend to use, since speeds can change in the evening. If the line is weak, pick another slot or share photos of written work.",
    },
    {
      question: "Cambridge or Edexcel: how do we decide?",
      answer: "Most students follow whichever board their school uses, so there is no decision. Private candidates do decide, and should compare syllabus content, paper layouts and exam-centre availability in their subjects. Cambridge leans towards structured multi-part questions, while Edexcel International GCSE weights topics a little differently. A tutor who has taught both can explain the contrast.",
    },
    {
      question: "How do we begin?",
      answer: "Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp with the class, the IB stage or IGCSE board, the subject and the target exam month. You will get a tutor suggestion, then a free trial session. Fees apply only if you choose to continue, and they are set out in writing first.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring across India", href: "/india/", description: "The national page, covering every town we teach online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "IB tutoring sorted by programme and subject." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Edexcel IGCSE, one subject at a time." },
    { label: "IB Diploma tutoring", href: "/programmes/dp/", description: "How the two-year Diploma is planned and taught." },
    { label: "IB MYP tutoring", href: "/programmes/myp/", description: "Criterion-focused help for Classes 6 to 10." },
    { label: "IB PYP tutoring", href: "/programmes/pyp/", description: "Gentle sessions for young primary learners." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "What CP mixes together and who it suits." },
    { label: "IB Mathematics tutors", href: "/courses/ib/mathematics/", description: "AA and AI, at Standard and Higher Level." },
    { label: "Our tutors", href: "/tutors/", description: "Meet the tutors, with subjects and teaching background." },
    { label: "Contact us", href: "/contact-us/", description: "Ask anything or book a first lesson." },
    { label: "Baramulla", href: "/baramulla/", description: "The district headquarters, a short drive from Sopore." },
    { label: "Srinagar", href: "/srinagar/", description: "The Valley's largest city, also served by online tutors." },
    { label: "Anantnag", href: "/anantnag/", description: "Another Kashmir Valley town with the same online service." },
  ],

  closingHeading: "Book a free first lesson from home in Sopore",
  closingBody:
    "Whatever the stage, from PYP reading to DP Physics HL, a single trial session shows what a matched tutor can add. Send the course details to support@ibgram.com or to +91 7439 368 115 on WhatsApp. If you decide to continue, the fee comes in writing before any lesson is booked.",
  tutorsIntro:
    "Our tutors work from several Indian cities on Indian Standard Time. For a Sopore family, the first task is to find the one who has recently taught that specific course, because none of them sits in the valley.",
};
