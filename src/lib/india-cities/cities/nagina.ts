import type { CitySeoPage } from "../types";

/**
 * /nagina/ - IB and IGCSE tutoring page for Nagina, Bijnor district, Uttar Pradesh. No school in
 * Nagina is confirmed to run the IB or a Cambridge/Edexcel IGCSE, so delivery is online
 * one-to-one and the clusters point honestly to Dehradun and Delhi NCR. Rendered with the shared
 * CountryLanding layout used by /gurgaon/.
 */
export const nagina: CitySeoPage = {
  slug: "nagina",
  countryName: "Nagina",
  countryNameLong: "Nagina, Bijnor, Uttar Pradesh",
  demonym: "Nagina",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Lesson times bend around Ramadan, the Kanwar Yatra weeks, winter fog and whatever your child's school already demands",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.4444, longitude: 78.4367 },
  wikipedia: "https://en.wikipedia.org/wiki/Nagina,_Uttar_Pradesh",
  alternateNames: ["Nagina Bijnor", "Nagina UP"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nagina | Private Tuition at Home Online",
  metaDescription:
    "IB and IGCSE tutors for Nagina, Bijnor: private tuition at home over live video, one child per tutor, planned around Ramadan and Kanwar season, free trial.",
  h1: "IB and IGCSE Tutors and Home Tuition in Nagina",
  heroEyebrow: "NAGINA, BIJNOR: IB & IGCSE TUITION FOR HOME, ONLINE",
  heroSubtitle:
    "Searching for home tuition in Nagina that covers the IB or IGCSE? A tutor cannot walk over from the next lane, since in-person visits run only in Gurugram and parts of Delhi NCR. What we offer is a live private class at your own table, with an India-based specialist who teaches your child alone and sends a note after each lesson.",
  primaryKeyword: "IB and IGCSE tutors in Nagina",
  imageAltText: "A Nagina schoolboy at his study table at home following an online IB Economics lesson on a laptop",
  secondaryKeywords: [
    "IB tutor Nagina",
    "IGCSE tutor Nagina",
    "IB home tuition Nagina",
    "IGCSE home tuition Nagina",
    "IB private tuition Nagina",
    "IB Maths tutor Nagina",
    "IGCSE Maths tutor Nagina",
    "IB Physics tutor Nagina",
    "IB Chemistry tutor Nagina",
    "IB Biology tutor Nagina",
    "IB DP tutor Nagina",
    "IB MYP tutor Nagina",
    "IB PYP tutor Nagina",
    "IGCSE online tuition Nagina",
    "IB tutor Bijnor",
    "IGCSE tutor Bijnor district",
    "IB tutor Najibabad",
    "online IB classes Nagina Bijnor",
    "international curriculum tutor western Uttar Pradesh",
  ],

  heroTrustPoints: [
    "Teachers based in India who work in IST, so a Nagina evening is an ordinary lesson hour",
    "Try a full trial lesson before any commitment, then read the rates in writing",
    "Parents get a brief written report after each class",
    "Ask for a different tutor at any time if the pairing is not working",
    "Help with the student's own IAs and essays, never the writing of them",
  ],
  heroStats: [
    { value: "IST", label: "Same clock as school" },
    { value: "PYP to DP", label: "IB stages, plus IGCSE" },
    { value: "Free trial", label: "A real lesson first" },
    { value: "May & Nov", label: "Exam windows we work back from" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Nagina, a craft town with a habit of looking outward",
    paragraphs: [
      "Nagina is best known for its ebony woodwork, carved boxes, fittings and furniture that have travelled from this small Bijnor town to buyers across India and beyond. A trade like that trains a family to think about distant customers, and some Nagina households now apply the same outward look to their children's schooling. When a parent wonders whether a son or daughter might study in the UK, Canada or the Gulf someday, the search often lands on IB and IGCSE tutors in Nagina.",
      "The local reality is plain. Schools here follow the Uttar Pradesh Board, CBSE or a madrasa board, and we could not confirm any school in or around Nagina that teaches the IB or a Cambridge or Edexcel IGCSE course. Moradabad, Dehradun and Delhi have more options, but they are a long road away. For families who still want the international route, the teaching has to arrive through a screen.",
      "That is what IB Gram provides. Our tutors live in India and teach in Indian Standard Time, seeing one student at a time on video with a shared whiteboard and genuine past papers. Since home visits happen only in Gurugram and parts of Delhi NCR, Nagina lessons are private tuition at home, delivered online. A free trial opens the relationship and written rates come after it.",
    ],
  },

  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Young children learn through units built around a big question, and reading, writing and arithmetic are practised inside those investigations rather than in isolation.",
      countryNote:
        "In Nagina, PYP interest is mostly forward-looking: a parent preparing a young child for a later move to Dehradun or Delhi wants English confidence early.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Between ages eleven and sixteen, students study eight subject groups joined by key concepts, and finish with a self-directed personal project.",
      countryNote:
        "A student from a Hindi or Urdu-medium school entering MYP has to learn to explain reasoning in English paragraphs, and that is the first thing a tutor here builds.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A demanding two-year sixth-form course: six subjects, a research essay, a philosophy-style knowledge course and a service and creativity strand.",
      countryNote:
        "DP students linked to Nagina generally study at a school in another city, and home lessons cover weak subjects during long winter and summer breaks.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A compact alternative that combines a few academic courses with vocational study and a reflective project.",
      countryNote:
        "Questions about it are rare here, but craft and business families sometimes wonder if its practical slant suits a child who prefers applied work.",
    },
  ],
  programmesIntro:
    "Every first lesson starts by explaining how the chosen programme awards marks. After that, parent and child can both see what a productive study week looks like.",

  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "The algebra-and-calculus route, right for future engineers and scientists, where each answer must show its reasoning." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "A data and modelling route that sits well with medicine, commerce and social science plans." },
    { name: "Physics", levels: "SL / HL", description: "Motion, fields, waves and modern topics, with graph interpretation and a self-designed investigation." },
    { name: "Chemistry", levels: "SL / HL", description: "Bonding, energy changes and carbon chemistry, with steady practice on multi-mark explanations." },
    { name: "Biology", levels: "SL / HL", description: "Cells to ecosystems, judged heavily on interpreting experimental results." },
    { name: "Economics", levels: "SL / HL", description: "Trade, markets and development, with real examples such as export crafts and the sugarcane economy." },
    { name: "Business Management", levels: "SL / HL", description: "A good match for children of workshop owners and traders, since case studies reward practical instinct." },
    { name: "Computer Science", levels: "SL / HL", description: "Coding logic and computer systems, learned through tracing and timed papers." },
    { name: "Visual Arts", levels: "SL / HL", description: "A studio and portfolio course that can suit a child raised around woodcarving and design." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Close reading and comparison of texts for students who think in Hindi or Urdu first." },
    { name: "Urdu A / Urdu B", levels: "SL / HL", description: "Literature or language study where Nagina students often start with an edge." },
    { name: "Hindi A / Hindi B", levels: "SL / HL", description: "Literary analysis or language acquisition in the language of everyday life in Bijnor." },
    { name: "Theory of Knowledge", levels: "Core", description: "Guidance on questioning how we know things; the exhibition and essay are always the student's own." },
  ],
  subjectsIntro:
    "A tutor plans subjects around your child's actual school and the degree in view, and will say so plainly when a combination looks too heavy.",

  igcseSubjects: [
    { name: "Mathematics (Core and Extended)", levels: "Cambridge 0580 / Edexcel", description: "Number, algebra, shape and statistics on two tiers, with attention to laying working out clearly." },
    { name: "Additional Mathematics", levels: "Cambridge 0606", description: "Extra calculus and functions for students who want a running start on A Level." },
    { name: "Physics", levels: "Cambridge 0625 / Edexcel", description: "Forces, circuits, waves and heat, tested through scenarios that are new to the candidate." },
    { name: "Chemistry", levels: "Cambridge 0620 / Edexcel", description: "Atoms, reactions and the mole, plus written questions on lab technique." },
    { name: "Biology", levels: "Cambridge 0610 / Edexcel", description: "Living systems, genetics and ecology, with graph and table work." },
    { name: "English as a Second Language", levels: "Cambridge 0510", description: "Reading, writing, listening and speaking for students coming from Hindi or Urdu-medium teaching." },
    { name: "Computer Science", levels: "Cambridge 0478", description: "Pseudocode, networks and data storage." },
    { name: "Art and Design", levels: "Cambridge 0400", description: "Portfolio and externally set task, a possible fit for creative craft-town students." },
    { name: "Economics", levels: "Cambridge 0455", description: "Scarcity, markets, trade and government policy with data questions." },
    { name: "Urdu as a Second Language", levels: "Cambridge 0539", description: "Reading, writing and speaking for an extra language on the certificate." },
  ],
  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel courses carry the same subject names but not the same papers, so the specification is confirmed before a single lesson is planned.",

  regionsTitle: "Nagina and the Bijnor towns our online students study from",
  regionsIntro:
    "Lessons happen at home wherever you live. These notes show how daily life in each place tends to affect the best lesson hour.",
  regions: [
    { name: "Nagina town centre", note: "The old market and craft district, where many families run workshops from the ground floor; early evening is often busy, so later slots suit." },
    { name: "Bijnor Road side", note: "Homes on the road towards the district headquarters, where some children commute for coaching classes." },
    { name: "Najibabad Road side", note: "The northern approach, linked to Najibabad and the railway line towards Dehradun and Haridwar." },
    { name: "Dhampur Road side", note: "The southern approach towards the sugar belt, with families tied to cane and mill work." },
    { name: "Najibabad", note: "A larger town nearby with a railway junction; families here can reach Haridwar, Dehradun and Delhi more easily." },
    { name: "Dhampur", note: "A sugar-mill town close by, whose families often mix farming, trade and salaried jobs." },
    { name: "Nehtaur and Afzalgarh", note: "Smaller towns in the district where a strong mobile signal is the first practical requirement." },
    { name: "Chandpur and Sahanpur", note: "Towns to the north and west of the district, within reach of Moradabad and Haridwar for coaching." },
  ],

  schoolClusters: [
    {
      city: "Nagina and Bijnor district",
      note: "No school in Nagina or the wider district could be confirmed as teaching the IB or a Cambridge or Edexcel IGCSE course. UP Board, CBSE and madrasa-board schools lead, so international-curriculum study happens through tutoring alongside them.",
      schools: [],
    },
    {
      city: "Nearby: Dehradun",
      note: "About three hours by road, Dehradun has established Cambridge and international-curriculum schools and is a common boarding destination for western Uttar Pradesh families.",
      schools: ["SelaQui International School", "Unison World School", "Ecole Globale International Girls' School"],
    },
    {
      city: "Nearby: Moradabad",
      note: "The nearest large city for coaching and shopping, though no IB or IGCSE school there could be confirmed, so it serves as a travel hub rather than a solution.",
      schools: [],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Around 200 kilometres away, Delhi NCR offers the widest choice of IB and IGCSE schools, and some families consider boarding or a move there.",
      schools: ["Vasant Valley School, Delhi", "The British School, New Delhi"],
    },
  ],
  schoolDisclaimer:
    "The schools named sit in other cities and appear only because families from the Nagina area sometimes weigh them up. IB Gram is an independent service with no link to the IB, Cambridge, Pearson or any of these schools, and naming a school is not an endorsement.",

  modesIntro:
    "Nobody from IB Gram will arrive at a Nagina doorstep, because home visits exist only in Gurugram and parts of Delhi NCR. Here is how families use the online lessons.",
  modes: [
    {
      title: "A regular private slot at home",
      description: "One tutor, one subject and one fixed hour each week, with the student's own written work marked as it happens.",
      bullets: ["Same hour weekly", "Marking on a shared screen", "Brief note to parents"],
    },
    {
      title: "Focused block before mocks",
      description: "A few weeks of timed papers and error review before mock exams and the May or November sessions.",
      bullets: ["Timed practice", "A record of repeat mistakes", "Marks-first topic ranking"],
    },
    {
      title: "Bridge before a boarding move",
      description: "For a child about to join a school in Dehradun, Delhi or elsewhere, a term or two to prepare English, mathematics and science.",
      bullets: ["Starting diagnostic", "Subject vocabulary in English", "Note-taking habits"],
    },
  ],

  sections: [
    {
      heading: "Who in Nagina asks about international boards, and what are they hoping for?",
      paragraphs: [
        "Three kinds of household tend to ask. The first is craft and trading families, whose customers stretch from Delhi to Dubai and who have watched relatives settle abroad. They do not necessarily want their children to leave, but they want them to be able to. The second is professionals such as doctors, teachers, engineers and officials posted around Bijnor, who have seen international qualifications open doors for their peers. The third is families with a child already headed for a boarding school in another city.",
        "What they hope for differs. Some want a route to a UK or Canadian university. Some want a stronger foundation in English and reasoning, whatever board the child finally sits. Others simply want a plan B in case entrance exams such as JEE or NEET do not go as hoped.",
        "None of these hopes needs a sales pitch. It needs someone who will explain the options, say which ones suit a particular child, and let a family watch a real lesson before spending anything.",
        "We also try to be candid about who should not switch. If a child is thriving on UP Board or CBSE and the goal is an Indian entrance exam, staying put may be wiser, with IB-style mathematics or English tuition as a supplement.",
      ],
    },
    {
      heading: "How do UP Board, CBSE and madrasa-board study differ from IGCSE and the IB?",
      paragraphs: [
        "In Nagina the everyday choice is between the UP Board, CBSE and a madrasa-board course. All three centre on textbooks and a public exam at the end of Class 10 and again at Class 12. IGCSE and the IB are built differently, and the gap shows most in reasoning under unfamiliar conditions.",
        "A typical UP Board science paper rewards definitions and standard derivations. An IGCSE or IB paper might give a graph from an experiment nobody has seen and ask what it implies and how the method could be improved. The knowledge required is similar, but the way of using it is not.",
        "Madrasa-board students often bring excellent memory, disciplined study habits and strong Urdu and Arabic. What needs building is written English in the subjects, and confidence with open-ended questions.",
        "The table below lays out the main differences in general terms. It is a guide, not a ranking of boards.",
      ],
      table: {
        caption: "Boards a Nagina family may weigh against each other",
        columns: ["Feature", "UP Board", "CBSE", "Madrasa board", "IGCSE", "IB Diploma"],
        rows: [
          ["Usual language", "Hindi or English", "English or Hindi", "Urdu, Arabic, English", "English", "English plus second language"],
          ["Assessment", "Public exams", "Board exams", "Board exams", "Series exams at Class 10", "Exams plus internal work and essay"],
          ["Question flavour", "Textbook recall", "Recall with application", "Recall with language depth", "Structured and applied", "Extended reasoning"],
          ["In or near Nagina", "Everywhere", "A few schools", "Present", "None confirmed", "None confirmed"],
          ["Common next step", "Class 11-12, JEE or NEET coaching", "CUET, JEE, NEET", "Higher study, AMU", "A Level or IB", "University in India or abroad"],
        ],
      },
    },
    {
      heading: "What decides the price of IB and IGCSE tuition for a Nagina household?",
      paragraphs: [
        "The site avoids quoting a fixed figure, and the reason is honest rather than clever. A Class 7 MYP English learner meeting a tutor once a week and an IB Physics HL candidate working three evenings a week are not buying the same thing. A written quote follows the free trial, once the plan is real.",
        "The most important variable is the tutor. Years spent teaching one specification, knowledge of its mark schemes and experience with internal assessments all push a rate up, and so does a subject that is scarce. Higher Level mathematics and sciences are usually costlier than middle-school subjects.",
        "How often you meet matters next. Two lessons a week, one long lesson or a short exam-season burst are all priced differently. Ask the tutor for a lighter plan if the budget is tight.",
        "There are things a Nagina family does not pay for. No car to Moradabad or Dehradun, no boarding fees just to attend tuition, no time lost on the road. That time becomes study.",
        "A short written note after each lesson makes value easy to judge without guesswork, and the option to change tutor keeps a bad match from becoming an expensive one.",
      ],
    },
    {
      heading: "Should a Nagina student use online lessons, a Moradabad centre or self-study?",
      paragraphs: [
        "Moradabad and Bijnor have coaching centres, and Dehradun and Delhi have far more. Most are built for board exams, JEE and NEET, and they do that work well. For IB and IGCSE they typically teach the wrong syllabus, and the trip takes hours.",
        "A local private teacher is a fair choice for younger children, particularly in mathematics and English basics. Where they fall short is specific knowledge of the international mark schemes, which a child then has to learn alone.",
        "Studying independently from past papers is realistic for a highly motivated student. The risk is that mistakes repeat unseen, because nobody is reading the work closely.",
        "A specialist tutor online offers a middle way: syllabus-specific teaching, one-to-one attention and no travel. The table compares the options on the points families raise most.",
      ],
      table: {
        caption: "Study routes for an international syllabus from Nagina",
        columns: ["Route", "Knows the IB or IGCSE mark scheme", "Individual attention", "Practical cost"],
        rows: [
          ["Online specialist tutor", "Yes", "Full", "Laptop and stable connection"],
          ["Coaching centre in Moradabad", "Rarely", "Batch", "Hours of travel each visit"],
          ["Coaching in Dehradun or Delhi", "Sometimes", "Small group", "Overnight stay or relocation"],
          ["Local private teacher", "Seldom", "Individual", "Good for basics, narrower syllabus knowledge"],
          ["Independent study", "Through past papers", "None", "Demands discipline and honest self-marking"],
        ],
      },
    },
    {
      heading: "How do Ramadan, Kanwar Yatra and winter fog shape a study year in Nagina?",
      paragraphs: [
        "Western Uttar Pradesh has a distinct calendar. Ramadan matters in a town with a large Muslim population, and lessons in that month are moved to late evening or early morning so a fasting student is not asked for hard thinking at the weakest hour. Eid is treated as a proper break, with catch-up planned afterwards.",
        "The Kanwar Yatra in July brings heavy pilgrim traffic to roads across Bijnor and towards Haridwar, and schools and roads can shut for days. It is a poor week for planning a big new topic, and online tuition has the advantage that the road closure does not stop the lesson.",
        "Winter is the other constraint. Dense fog from December to January slows travel and can delay school buses, and cold mornings shorten the useful study day. Lessons after school on video are easier than any journey.",
        "Summers are hot and power cuts can interrupt classes, so a mobile hotspot is a sensible backup. The table shows how the year might be organised.",
      ],
      table: {
        caption: "A Nagina study year against local events and exam windows",
        columns: ["Months", "Local rhythm", "Exam or school context", "Tutor approach"],
        rows: [
          ["April to June", "Heat and some power cuts", "May IB and IGCSE sessions", "Early or late lessons, brief revision"],
          ["July to August", "Kanwar Yatra traffic, monsoon", "New school year", "Foundation work, flexible slots"],
          ["September to November", "Dussehra, Diwali, cooler days", "November sessions, term exams", "Timed papers and error review"],
          ["December to January", "Dense fog and cold", "Mocks, IA drafts", "After-school video lessons, full papers"],
          ["February to March", "Spring, Holi", "Final preparation", "Weak-topic triage"],
          ["Ramadan and Eid (dates shift yearly)", "Fasting and family gatherings", "May meet exams or term tests", "Late-evening or early lessons, lighter load"],
        ],
      },
    },
    {
      heading: "What is IB Mathematics like for a student from western Uttar Pradesh?",
      paragraphs: [
        "Students from this belt often arrive with fast, accurate calculation, thanks to years of board and coaching practice. The IB rewards different habits: explaining each step, choosing a method, and interpreting the answer in context. Speed helps but does not earn marks alone.",
        "Analysis and Approaches follows an algebra, calculus and proof path, with vectors and complex numbers at Higher Level. It suits future engineers and physicists. Applications and Interpretation is built around data, modelling and technology and suits students heading towards medicine, economics or the social sciences.",
        "Command words come first in tutoring. 'Hence', 'show that' and 'justify' each ask for something exact, and a student who ignores them loses marks even with the right result.",
        "Calculator use is the next skill. IB papers expect graphing and statistical functions, and a student who has only used a basic scientific calculator needs practice early to avoid losing time.",
        "For IGCSE Mathematics, Core and Extended repeat these ideas gently. Extended students meet proof-like reasoning, function transformations and harder trigonometry, and benefit from careful working habits.",
      ],
    },
    {
      heading: "Which IB and IGCSE science and humanities subjects suit Nagina students?",
      paragraphs: [
        "Physics, Chemistry and Biology are the usual first requests, tied to plans for engineering and medicine. Students often know the theory well but have rarely designed an experiment, so tutors train that skill explicitly.",
        "Economics and Business Management suit children from trading and manufacturing families. Case questions reward the kind of commercial common sense a workshop or shop teaches, once the vocabulary is in place.",
        "Visual Arts, at IB or IGCSE level, may appeal to students from woodcarving families. The course values a process portfolio and an ability to explain choices, and a tutor can help a student articulate a craft heritage in the language examiners want.",
        "Language subjects matter too. Urdu or Hindi can be a reliable high-scoring option, while English needs steady practice with essay structure and textual analysis.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and how should a Nagina student choose subjects?",
      paragraphs: [
        "Core papers cap the highest grade available, while Extended papers open every grade but demand more depth. A student who is secure in Class 8 and 9 mathematics is normally ready for Extended, and the first two lessons usually make that clear.",
        "Subject choice at IGCSE is wide. A typical set includes English, Mathematics, a language, sciences and one or two extras. A future doctor should keep Biology and Chemistry, an engineer Physics and Mathematics, and a commerce-minded student Economics or Business.",
        "Cambridge and Pearson Edexcel differ in layout and command wording, so a tutor confirms which one applies. Private candidates should also ask an exam centre about registration deadlines and practical papers well ahead of time.",
        "Because no school in Nagina offers IGCSE, most students here would be private candidates or students of a school elsewhere, and a tutor helps sort out which applies.",
      ],
    },
    {
      heading: "Which universities and careers follow from the IB or IGCSE for students from Nagina?",
      paragraphs: [
        "Aligarh Muslim University, roughly 150 kilometres away, matters to many families in this region, as do Jamia Millia Islamia and the University of Delhi. An IB student should check how each institution treats IB Diploma applicants and whether the course requires an entrance test.",
        "More broadly, the Association of Indian Universities recognises the IB Diploma as equivalent to Class 12, and CUET-UG is the route into central universities. For engineering and medicine, JEE Main and NEET-UG publish eligibility rules naming the qualifying subjects and marks, and IB students should read them before choosing Higher Level courses.",
        "IIT Roorkee and the institutions of Dehradun and Haridwar sit within a few hours' reach, and some families consider them for engineering and technology courses.",
        "Overseas, IB scores are read directly by universities in the UK, Canada, Australia and Europe. Tutors do not manage applications, but they will discuss subject combinations honestly, such as Mathematics with Physics for engineering.",
      ],
    },
  ],

  process: [
    { title: "Drop us a line", description: "Write on WhatsApp or by email with your child's class, current board and the subject that troubles them." },
    { title: "Pin down the specification", description: "We ask about the exam board, tier and sitting, and whether your child attends a school or studies privately." },
    { title: "Sit a trial class", description: "A tutor with matching experience gives a genuine lesson at an hour that fits your household." },
    { title: "Read the quote", description: "Once the trial is done, a written quote and a suggested weekly pattern arrive, with nothing booked in advance." },
    { title: "Carry on with reports", description: "Lessons begin, a short note follows each one, and a swap of tutor is possible whenever you ask." },
  ],

  whyPoints: [
    { title: "Chosen for the actual syllabus", description: "Tutors work from IB subject guides and Cambridge or Edexcel specifications and mark against published criteria." },
    { title: "Plain about what online means", description: "Nobody comes to Nagina in person. A lesson is live, private and delivered over video." },
    { title: "Fits the local calendar", description: "Ramadan, Kanwar season and winter fog are planned for, not fought." },
    { title: "Quote after the trial", description: "You see a written rate once you have seen a lesson." },
    { title: "Coaching, never ghost-writing", description: "Tutors guide a student's own IA, essay and coursework; they do not write them." },
    { title: "Saves the road", description: "No journeys to Moradabad or Dehradun; the hours go to study." },
  ],

  tutorsIntro:
    "Each tutor teaches live from India and is chosen for the syllabus they know best. A trial lesson lets you judge the fit before deciding anything.",

  faqs: [
    { question: "Will a tutor come to my house in Nagina?", answer: "No tutor will come to your house in Nagina. Physical home visits are restricted to Gurugram and parts of Delhi NCR. In Nagina the class is online: your child sits at home with a laptop, the tutor teaches on video and writes on a shared screen, and the lesson remains entirely private, one adult and one learner." },
    { question: "Is there an IB or IGCSE school in Nagina or Bijnor?", answer: "We could not confirm any school in Nagina or Bijnor district that runs the IB or a Cambridge or Edexcel IGCSE course. Local schools follow the UP Board, CBSE or a madrasa board. Families wanting an international classroom usually look at Dehradun or Delhi NCR, and tutoring at home supports that move." },
    { question: "How much will tuition cost in Nagina?", answer: "There is no universal rate. It depends on subject, level, the tutor's experience and how often you meet. After a free trial, a written quote is sent before you book anything. If the budget is tight, tell us early and the tutor can focus on the highest-value topics first." },
    { question: "My son studies in an Urdu-medium madrasa. Can he take IB or IGCSE?", answer: "Yes, though preparation matters. Madrasa students often have strong discipline, memory and languages. The tutor builds subject writing in English and practice with unseen-data questions, beginning with a diagnostic lesson. Many students improve steadily across a term or two, and Urdu can become a useful scoring subject." },
    { question: "Which subjects do Nagina families ask about most?", answer: "Mathematics, Physics, Chemistry and Biology lead the list, followed by English, Economics and Business. Some families also ask about Visual Arts because of the local woodcarving tradition, and about Urdu or Hindi as languages that can support the overall result." },
    { question: "How do Kanwar Yatra closures affect lessons?", answer: "They matter less online, since a closed road does not stop a video lesson. If a school shuts or traffic is severe, the lesson simply carries on at home. We avoid planning a big new topic in that week, and reschedule if power or internet is disrupted." },
    { question: "Does Ramadan change the timetable?", answer: "Yes. Lessons shift to late evening or early morning, or the workload is reduced, so a fasting student is not pushed hard just before iftar. Eid remains a break, and any catch-up work is planned afterwards. Please mention your household routine when we first talk." },
    { question: "Can the tutor write my child's IA or essay?", answer: "No. IAs, Extended Essays, TOK essays and coursework must be the student's own work. A tutor explains criteria, tests whether a question is workable, reacts to an outline and gives notes on a draft. That protects your child, and it is exactly what the IB expects." },
    { question: "Is the IB Diploma recognised by Indian universities?", answer: "Broadly yes. The AIU treats it as equivalent to Class 12, and CUET-UG is the main route to central universities. Some courses ask for particular subjects, so read each admission brochure closely, including those of Aligarh Muslim University and Jamia if either interests you." },
    { question: "Can an IB or IGCSE student still sit JEE or NEET?", answer: "Possibly, depending on subjects and marks. NEET asks for Physics, Chemistry, Biology and English at the senior stage, and JEE sets its own qualifying conditions. IGCSE alone is a Class 10 level qualification, so a senior course must follow. Check current official notices before fixing subjects." },
    { question: "At what age should tuition begin?", answer: "There is no fixed age. Young children can begin with reading and number confidence. MYP and IGCSE help usually starts between Class 7 and 9, and DP help in Class 11. If a boarding move is planned, starting a term before it gives a much gentler landing." },
    { question: "What happens in the free trial?", answer: "You tell us the class, board and subject. We suggest a tutor and fix a genuine lesson at a convenient hour, with no strings attached. Afterwards you receive a short summary of what happened and, should you wish to continue, the rates in writing." },
    { question: "Can we swap the tutor if it is not working?", answer: "Yes, at any point. A teacher who suits one child may not suit another, and nobody needs to feel awkward. Explain what felt wrong and another tutor is proposed. The second pairing generally works better because the brief is sharper." },
    { question: "Which IGCSE boards can tutors handle?", answer: "Both Cambridge International and Pearson Edexcel, with AS and A Level as background. The tutor asks for the subject code and tier before teaching, because papers and command words differ, and revising from the wrong past papers wastes weeks." },
    { question: "How do we start?", answer: "Message +91 7439 368 115 on WhatsApp or write to support@ibgram.com with the class, the board and the subject that worries you. A tutor and a trial hour are suggested, and nothing is confirmed until the lesson and the written rates satisfy you." },
  ],

  internalLinks: [
    { label: "IB Gram home", href: "/", description: "All tutors, subjects and programmes in one place." },
    { label: "India city pages", href: "/india/", description: "The Indian cities we teach in online." },
    { label: "Gurugram", href: "/gurgaon/", description: "The one area with in-person home visits." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Find a tutor by IB subject and level." },
    { label: "IGCSE", href: "/igcse/", description: "Cambridge and Edexcel subjects at IGCSE." },
    { label: "IB PYP", href: "/programmes/pyp/", description: "How the primary years are structured." },
    { label: "IB DP", href: "/programmes/dp/", description: "What the Diploma asks of a student across two years." },
    { label: "Contact us", href: "/contact-us/", description: "Reach us with a question or to book the trial." },
    { label: "Moradabad", href: "/moradabad/", description: "The nearest large city to the south." },
    { label: "Dehradun", href: "/dehradun/", description: "The boarding-school city in the hills to the north." },
    { label: "Haridwar", href: "/haridwar/", description: "The pilgrimage city on the Ganga to the north-west." },
    { label: "Rampur", href: "/rampur/", description: "A neighbouring city of western Uttar Pradesh." },
  ],

  closingHeading: "A single trial lesson is enough to begin from Nagina",
  closingBody:
    "Families searching for IB and IGCSE tutors in Nagina can start with a few lines: the class, the board, the subject. A tutor and a trial hour come back to you, and written rates follow the lesson. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115.",
};
