import type { CitySeoPage } from "../types";

/**
 * Marhaura (Saran district, Bihar) has no school we could confirm against the IB directory or the
 * Cambridge and Edexcel lists, so stripSchools is empty. The clusters point to cities where confirmed
 * schools sit and say plainly that local choice is limited. Names were reused from checked city pages.
 */
export const marhaura: CitySeoPage = {
  slug: "marhaura",
  countryName: "Marhaura",
  countryNameLong: "Marhaura, Bihar",
  demonym: "Marhaura",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Evenings after the day's coaching or school run, and quiet Sunday mornings before the heat builds",
  lastUpdated: "2026-09-21",
  state: "Bihar",
  stateCode: "IN-BR",
  geo: { latitude: 25.9733, longitude: 84.8667 },
  wikipedia: "https://en.wikipedia.org/wiki/Marhaura",
  alternateNames: ["Marhowrah", "Marhaura Saran", "Marhaura Bihar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Marhaura | Online Private Tuition",
  metaDescription:
    "One-to-one IB and IGCSE tutoring for Marhaura students in Saran, Bihar. Live online lessons from home, weekly written notes, and a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Marhaura",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR MARHAURA STUDENTS",
  heroSubtitle:
    "Private tuition from home for IB and IGCSE students in Marhaura, taught as live one-to-one online lessons on an ordinary laptop. This is a Saran district town where the board exam culture is strong and international curricula are almost unheard of, so a family that has chosen the IB or Cambridge route needs a tutor who teaches exactly that syllabus. Tell us the programme, the subject and the exam session, and we arrange a free trial lesson.",
  primaryKeyword: "IB and IGCSE tutors in Marhaura",
  imageAltText: "Marhaura student working through an IB Chemistry problem set in a live online lesson at home",
  secondaryKeywords: [
    "IB tutor in Marhaura",
    "IGCSE tutor in Marhaura",
    "IB home tuition Marhaura",
    "IGCSE home tuition Marhaura",
    "IB private tuition Marhaura",
    "IB Maths tutor Marhaura",
    "IGCSE Maths tutor Marhaura",
    "IB Physics tutor Marhaura",
    "IB Chemistry tutor Marhaura",
    "IB Biology tutor Marhaura",
    "IB DP tutor Marhaura",
    "IB MYP tutor Marhaura",
    "IB PYP tutor Marhaura",
    "IGCSE online tuition Marhaura",
    "IB tutor Saran district",
    "IB tuition Chhapra",
    "IGCSE tutor Mashrakh",
    "IB online classes Marhowrah",
  ],

  heroTrustPoints: [
    "Live lessons with one tutor and one student, never a recorded course",
    "Tutors who know IB DP, MYP, PYP and Cambridge or Edexcel IGCSE papers",
    "Slots that respect Bihar's school hours and power-cut reality",
    "Free trial lesson and a written note after every session",
    "Change the tutor at no cost if the fit feels wrong",
  ],
  heroStats: [
    { value: "IST", label: "Lessons run on Indian time" },
    { value: "PYP to DP", label: "Programmes covered" },
    { value: "Free trial", label: "Before any commitment" },
    { value: "May & Nov", label: "IB exam sessions supported" },
  ],

  intro: {
    heading: "Why Marhaura parents look for IB and IGCSE tutors online",
    paragraphs: [
      "Marhaura is known across Saran for its railway connection and the diesel locomotive works built nearby, which brought engineers, technicians and project managers to a block that earlier knew mostly farming, trade and the old sugar mill. Most children here prepare for the Bihar School Examination Board papers or for CBSE, and the ambition that follows is usually the engineering and medical entrance route. A small and growing number of households are looking at something different: the IB Diploma, the Middle Years Programme, or Cambridge and Pearson Edexcel IGCSE. When that choice is made, there is rarely a teacher within a hundred kilometres who has coached Paper 2 of Mathematics AA.",
      "Our IB and IGCSE tutors in Marhaura arrangement is built for that gap. A tutor teaches live from elsewhere in India on Indian time, the student sits at home with a laptop and a notebook, and nobody has to travel to Patna on a crowded road for a Saturday class. Tutors are matched by programme, subject and level, and a student who moves from a Bihar board school into an IB classroom can keep the same tutor across several years.",
      "The sections below explain how it works from a Marhaura address: which schools are realistically reachable, how the boards compare, what drives the rate, how the exam calendar fits a Bihar school year with Chhath and flood season in it, and where students go afterwards. IB Gram is an independent tutoring service with no tie to the IB, Cambridge, Pearson or any school named here. Tutors coach and explain; they do not write internal assessments, Extended Essays or coursework for a student.",
    ],
  },

  programmesIntro:
    "The IB has four programmes and Cambridge and Pearson offer IGCSE, but a Marhaura family tends to meet them at an unusual moment, often after a job transfer, a boarding decision or a plan to study abroad. Tutoring changes shape at each stage.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Unit-based primary learning that ends with a student-led Exhibition. Tutoring is gentle: reading aloud, number fluency, journal writing and the habit of asking why.",
      countryNote:
        "PYP is almost never met inside Saran district. Parents who encounter it usually have a child entering an international primary elsewhere, and a short weekly lesson at home eases the change from rote-style teaching.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups marked against published criteria, finishing with the Personal Project. A tutor teaches how to unpack a task and structure an answer as much as the content itself.",
      countryNote:
        "Students leaving a Bihar Board or CBSE school for MYP often find the criterion-based marking strange at first. Slow, patient online sessions with worked examples settle that quickly.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus Theory of Knowledge, the Extended Essay and CAS. Tutoring covers the examined papers and the method behind the internal assessments, never the writing of them.",
      countryNote:
        "A Diploma student from the Marhaura side has no Higher Level teacher nearby, so the online tutor often becomes the only person who teaches the full course at the pace the exam needs.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or three Diploma courses paired with a career-related study and a reflective project. Tutors support the academic courses and the language side.",
      countryNote:
        "CP is uncommon anywhere in this part of Bihar. We take it on request and pair the student with a tutor for the exact Diploma courses selected.",
    },
  ],

  subjectsIntro:
    "Tutors are chosen for the exact course and level, Standard or Higher, and for patience with a student who may be meeting IB command terms for the first time.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, functions, proof and the rhythm of Papers 1 and 2, with Higher Level extensions taken at a steady pace." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistics, modelling and graphing-calculator fluency, which students from a board-exam background often underrate." },
    { name: "Physics", levels: "SL / HL", description: "Mechanics through to fields and quantum ideas, plus data-based questions and the practical write-up method." },
    { name: "Chemistry", levels: "SL / HL", description: "Bonding, energetics, kinetics, organic pathways and the arithmetic that trips up stoichiometry answers." },
    { name: "Biology", levels: "SL / HL", description: "From cell biology to ecology, with precise definitions that mark schemes reward." },
    { name: "Economics", levels: "SL / HL", description: "Micro, macro and the global economy, using Indian and world examples in extended responses." },
    { name: "Business Management", levels: "SL / HL", description: "Case-study application, formulae and Paper 2 reasoning about unseen organisations." },
    { name: "Computer Science", levels: "SL / HL", description: "Algorithms, data structures and the pseudocode conventions examiners expect." },
    { name: "Psychology", levels: "SL / HL", description: "Key studies, evaluation and the essay structure the criteria reward." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Paper 1 commentary and the comparative essay of Paper 2." },
    { name: "Hindi B", levels: "SL / HL", description: "Reading, writing and speaking for students taking Hindi as an additional language." },
    { name: "Bhojpuri and Maithili home-language support", levels: "School-based", description: "General support for language-literacy work where a school accepts a home-language component; Hindi remains the usual route." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching on knowledge questions and the exhibition; the essay remains the student's own." },
  ],

  igcseSubjectsIntro:
    "Cambridge and Pearson Edexcel IGCSE papers differ in structure and tiering even when the subject name matches, so a tutor is paired by board code first and subject second.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Algebra, geometry, trigonometry and statistics with timed past-paper work." },
    { name: "Physics", levels: "Core / Extended", description: "Forces, waves, electricity and nuclear physics, including practical-skills questions." },
    { name: "Chemistry", levels: "Core / Extended", description: "The mole, bonding, electrolysis and an introduction to organic chemistry." },
    { name: "Biology", levels: "Core / Extended", description: "Cells, human systems, inheritance and ecology with data interpretation." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For schools running the double-award science route." },
    { name: "English as a First or Second Language", levels: "Core / Extended", description: "Comprehension, directed writing and speaking preparation." },
    { name: "Computer Science", levels: "Single tier", description: "Programming logic, data representation and networks." },
    { name: "Economics and Business Studies", levels: "Single tier", description: "Core ideas, calculations and short case questions." },
    { name: "Hindi as a Second Language", levels: "Core / Extended", description: "Reading, composition and oral practice." },
    { name: "Accounting", levels: "Single tier", description: "Ledgers, financial statements and presentation marks." },
  ],

  regionsTitle: "Marhaura town and the surrounding Saran blocks",
  regionsIntro:
    "Students are spread across villages and small bazaars rather than a tight city grid. The notes below reflect how a school day and an evening actually run in this part of Saran.",
  regions: [
    { name: "Marhaura bazaar", note: "The commercial heart of the town. Shops and houses sit close together, school vans leave early, and evening study works best once the market crowd has thinned." },
    { name: "Marhaura railway station area", note: "Households connected with the railway and the locomotive works often live in this belt. Shift patterns mean parents' schedules, not the school bell, set the lesson time." },
    { name: "The locomotive works neighbourhood", note: "Newer housing and a floating population of engineers and contractors. These families are the likeliest in the block to have moved from another city and asked about international syllabuses." },
    { name: "Mashrakh", note: "A neighbouring block town with a long-standing bazaar and sugarcane belt. Students here often take a share bus or a shared auto to schools in Marhaura or Chhapra." },
    { name: "Amnour", note: "On the river side toward the Ganga and Gandak. Monsoon floods can interrupt travel, which makes an online lesson at home a steadier option than a centre far away." },
    { name: "Chhapra town", note: "The district headquarters, about an hour away on a normal day. Many coaching centres and the larger private schools sit here, and some Marhaura families rent rooms for Class 11 and 12." },
    { name: "Dighwara", note: "A trade and rail town along the Saran-Patna side, popular with families who split time between Saran and Patna." },
    { name: "Sonepur", note: "Across the river from Patna, known for its cattle fair every November. Families here sometimes treat Patna as their city for school and medical needs." },
    { name: "Revelganj", note: "A river town on the Ghaghra with an old market. Evenings are quiet once the ghat traffic settles, which suits focused study." },
    { name: "Siwan border belt", note: "Villages toward Siwan district, where Bhojpuri is the everyday speech and a child's English often stays thin until Class 9 or later." },
  ],

  schoolClusters: [
    {
      city: "Marhaura and Saran district",
      note: "We could not confirm any school in Marhaura or elsewhere in Saran that is an authorised IB World School or a listed Cambridge or Edexcel centre. Local private schools teach CBSE, ICSE or the Bihar Board syllabus, so for IB and IGCSE the honest answer is that local choice is very limited.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata",
      note: "Eastern India's main cluster of confirmed IB and Cambridge schools. A few Bihar families consider boarding or relocating here; the distance is long, so travel time deserves a hard look.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School", "The Cambridge School, Calcutta", "Modern High School for Girls, Kolkata"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "A second destination for families with a relocation plan or a boarding plan. Distances from Saran are considerable.",
      schools: ["Vasant Valley School, Delhi", "Sanskriti School, Delhi", "The British School, New Delhi", "Step by Step School, Noida"],
    },
    {
      city: "Nearby: Mussoorie boarding belt",
      note: "A hill-station option that suits families who want a residential international school rather than a daily commute.",
      schools: ["Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "School names appear only to show where the IB and Cambridge options for Marhaura families truly lie. IB Gram is independent of every school mentioned, of the IB, of Cambridge and of Pearson, and admission decisions belong solely to each school.",

  modesIntro:
    "Our tutors do not visit homes in Marhaura; in-person home visits run only in Gurugram and parts of Delhi NCR. Everything below is live and online, scheduled around a Bihar school day.",
  modes: [
    {
      title: "Online one-to-one at home",
      description: "A private live lesson on your own laptop, with a tutor who teaches your board and level.",
      bullets: ["Shared whiteboard and past-paper walkthroughs", "One student per lesson", "A short note to parents each week"],
    },
    {
      title: "Exam-season intensives",
      description: "Concentrated blocks before mock exams and before the May and November sessions.",
      bullets: ["Timed paper practice with review", "Mark-scheme and command-term drilling", "Spare slots planned for load-shedding and flood days"],
    },
    {
      title: "Steady weekly support",
      description: "One lesson a week in a single subject, enough to keep a student level with school.",
      bullets: ["Suits MYP and IGCSE years", "Gaps for Chhath and wedding season", "Swap the subject mid-year when needed"],
    },
  ],

  tutorsIntro:
    "Tutors teach from across India on Indian Standard Time. A Marhaura student's lessons usually fall in the late afternoon or evening, hours that most tutors on the rota already work.",

  sections: [
    {
      heading: "Which IB and IGCSE schools can a Marhaura family actually reach?",
      paragraphs: [
        "Very few, and it is better to say that at the start. Inside Saran district we could not confirm a school that is an authorised IB World School or an approved Cambridge or Edexcel centre. The private schools of Marhaura, Chhapra and the neighbouring block towns are CBSE, ICSE or Bihar Board institutions, and some are well respected. For anyone seeking an international curriculum, the practical options lie in Patna's wider region, Kolkata, Delhi NCR or a hill-station boarding school.",
        "Families who go this way usually do it in one of three ways. Some send a child to a boarding school from Class 6 or Class 9. Others relocate a parent to a larger city for the school years. A third group joins an international school late, typically at Class 11, and needs help in the first year with what Diploma courses assume a student already knows. The last group is where private tutoring matters most.",
        "Who are the households? Railway and locomotive-works engineers and their families, doctors and teachers posted to the district, traders with a business that now reaches Patna and Kolkata, and returning professionals who worked in the Gulf or elsewhere and prefer a familiar syllabus. None of them is a large group in any one classroom, which is why a tutor who knows your child's exact board is worth more than a group class pitched at someone else's syllabus.",
        "We have chosen not to pad this page with school names we cannot verify. If a school near Marhaura announces IB candidacy or a Cambridge licence, local parents will hear first, and tutoring against that syllabus can start within a week of you sharing the subject list.",
      ],
    },
    {
      heading: "Bihar Board, CBSE, ICSE, IB and IGCSE: how do they compare?",
      paragraphs: [
        "The Bihar School Examination Board runs the matriculation papers in Class 10 and the intermediate papers in Class 12, usually in February, and a great deal of local life bends around those weeks. CBSE and ICSE sit beside it in private schools. All three lean on written recall, with entrance tests such as JEE, NEET and CUET-UG as the main exit gates.",
        "The IB asks for a different kind of answer. Command terms, applied reasoning and extended writing are rewarded, and the Diploma wraps in an essay, a knowledge course and service. IGCSE lies nearer the middle: subject papers at Core or Extended level with a clear syllabus and decades of past papers.",
        "For a student coming from the Bihar Board, content is rarely the problem. The paper style is. The table gives a quick view of how the five systems differ from a Marhaura kitchen table.",
      ],
      table: {
        caption: "The five boards as seen from a Marhaura household",
        columns: ["Board", "How it is assessed", "Language of teaching", "Common next step", "Local tutor availability"],
        rows: [
          ["Bihar School Examination Board", "State papers in Class 10 and 12, usually February", "Hindi or English", "State and national entrance tests", "Plentiful"],
          ["CBSE", "Board papers in Class 10 and 12", "English or Hindi", "JEE, NEET, CUET-UG", "Good in Chhapra, thinner in town"],
          ["ICSE and ISC", "Broader syllabus with essay emphasis", "English", "CUET-UG and Indian colleges", "Limited"],
          ["Cambridge or Edexcel IGCSE", "Tiered papers in May and November sessions", "English", "Class 11 IB or A Level, or Indian boards", "Almost none"],
          ["IB Diploma", "Exams plus internal assessments, essay and CAS", "English", "AIU-recognised degrees, CUET-UG, abroad", "None nearby"],
        ],
      },
    },
    {
      heading: "What does IB and IGCSE tuition cost in Marhaura, and what drives the rate?",
      paragraphs: [
        "There is no flat price for IB and IGCSE tuition in Marhaura, and we do not publish one. The rate is quoted in writing before a trial lesson is booked, so a family can read it at leisure rather than agree to something on a phone call and forget the details.",
        "Programme and level carry the most weight. A Higher Level Diploma Physics tutor with years of paper marking behind them costs more than someone teaching Class 8 MYP science. Scarcity matters too: a tutor who can teach Computer Science HL is harder to find than one for IGCSE English, and the rate reflects that.",
        "Rhythm matters as well. Two lessons a week through a school year is a different commitment from three intensive weeks before the November session, so we describe the shape of a plan instead of reciting a generic hourly number that hides the terms.",
        "Parents here often compare against sending a child to a coaching centre in Chhapra or Patna. That comparison is fair if it includes rent or daily fares, lost hours on the road and the cost of a second household for a Class 11 student. An online lesson at home removes most of that and keeps the child in the family during the board-exam months.",
      ],
      bullets: [
        "Programme and level (SL, HL, Core, Extended)",
        "How scarce the subject is among qualified tutors",
        "Lessons per week and how long the plan runs",
        "Exam-season blocks compared with steady support",
      ],
    },
    {
      heading: "Online home tuition, Chhapra coaching, local tutors or self-study: which fits?",
      paragraphs: [
        "A Marhaura student has four realistic routes, and each has a place. The sensible question is not which is superior but which suits a given subject, year and family routine.",
        "Coaching centres in Chhapra and Patna offer crowded, exam-focused batches, mostly built around JEE, NEET and the board syllabus. A local private tutor is convenient and affordable but may never have seen an IB paper. Self-study with past papers suits a disciplined student in a subject they already enjoy. Live private tutoring from home sits in between: specialist teaching without a road journey.",
      ],
      table: {
        caption: "Four ways to get IB or IGCSE help from Marhaura",
        columns: ["Option", "Knowledge of IB and IGCSE", "Travel", "Flexibility", "Works best for"],
        rows: [
          ["Live one-to-one online at home", "High, matched by subject and board", "None", "Evenings and weekends, easily moved", "Any programme, any subject"],
          ["Coaching centre in Chhapra or Patna", "Low to moderate, built around Indian entrance tests", "Daily or a rented room", "Fixed batch timings", "Students already preparing for JEE or NEET"],
          ["Private tutor in Marhaura", "Usually Bihar Board or CBSE trained", "Little", "Reasonable", "Revision on familiar syllabuses"],
          ["Self-study with past papers", "Depends on the student", "None", "Total", "Disciplined learners in a favourite subject"],
        ],
      },
    },
    {
      heading: "How do exam dates meet the Saran school year, Chhath and the monsoon?",
      paragraphs: [
        "IB Diploma exams run in two sessions, May and November, and the Cambridge and Edexcel IGCSE sessions fall in much the same months. A Bihar school year starts in April, so a student at an international school elsewhere and a Bihar Board neighbour are working to different calendars even when they live on the same lane.",
        "Local life adds its own pattern. Chhath in October or November takes a full week out of many households and, for IB students, falls close to the November session. The monsoon from June to September brings flooding along the river blocks and power cuts that can wipe out a Saturday. Summer heat in May makes midday study unrealistic, so lessons are booked early morning or after sunset.",
        "Planning around these facts is simply good teaching. We front-load heavy topics before Chhath, keep spare slots in the monsoon, and keep an eye on wedding season in winter, when entire families travel and a student's routine breaks for days.",
        "The table lays out a typical year. School calendars vary, so treat it as a guide and confirm exact dates with the school and the exam board.",
      ],
      table: {
        caption: "A typical year for an IB or IGCSE student in Marhaura",
        columns: ["Period", "What is happening", "Study effect", "Tutoring approach"],
        rows: [
          ["April to June", "New academic year and the May exam sessions", "Heat limits daytime work", "Early or late slots, paper practice for May candidates"],
          ["July to September", "Monsoon, river rise and Class 11 settling in", "Power cuts and travel breaks", "Spare slots, steady weekly support"],
          ["October to November", "Dussehra, Chhath and the November exam session", "A week lost to festivals", "Front-load topics, intensive pre-exam blocks"],
          ["December to February", "Winter, weddings and mock exams", "Family travel interrupts routine", "Mock-paper review, flexible scheduling"],
          ["March", "Results season and new subject choices", "Decisions about HL and SL", "Subject-choice conversations with the tutor"],
        ],
      },
    },
    {
      heading: "Where can a Marhaura IB or IGCSE student go after school?",
      paragraphs: [
        "A student who finishes the IB Diploma or an IGCSE route from Marhaura has more doors than many assume, though some need paperwork. The Association of Indian Universities recognises the Diploma as equivalent to the Class 12 qualification, so a certificate holder can apply to Indian universities, including through CUET-UG for central university seats.",
        "Engineering and medical choices need more care. JEE Main and NEET have their own eligibility rules about subjects and board equivalence, and students must check the current notices for IB and Cambridge candidates well before Class 11. A tutor can plan the subject choices with that in mind, though the final decision belongs to the family.",
        "Abroad, IB scores are read directly by universities in the UK, Canada, Australia and the United States, and many Indian families in Bihar ask about Singapore and Germany as well. Application tests and supporting documents are outside our tutoring scope, but a tutor can help you understand what grades the courses typically expect.",
        "Closer to home, Patna remains the natural college city for many Saran students, with Jai Prakash University at Chhapra serving the district. An IB or IGCSE student does not have to leave India for good, and many return after a degree elsewhere to join family business, medicine or public service.",
      ],
      bullets: [
        "AIU equivalence for Indian university admission",
        "CUET-UG for central universities",
        "JEE and NEET eligibility to be confirmed each year",
        "Direct IB score entry abroad",
      ],
    },
    {
      heading: "How are IB Maths AA, Maths AI and the sciences taught online?",
      paragraphs: [
        "Mathematics comes first in most Marhaura enquiries because Bihar students arrive with strong arithmetic and algebra and discover that the IB expects explanations as well as answers. Analysis and Approaches suits students aiming at engineering, physics or economics, with calculus, proof and long Paper 2 questions. Applications and Interpretation suits those heading to business, social sciences or design, with statistics, modelling and technology.",
        "Online teaching works well here because a tutor writes on a shared board while talking, then hands the pen to the student. We use past paper questions early and mark them against the official scheme, so a student learns what a full-mark answer looks like. Calculator technique is taught explicitly, since a Paper 2 student who cannot use the statistics menu loses easy marks.",
        "In the sciences, the tutor works through each topic with a mix of recall, calculation and data questions, and helps with the practical side by explaining how a lab report is judged. Where a student has little laboratory access at school, the tutor can show how to describe a method and justify uncertainty without inventing results.",
        "Physics at Higher Level, Chemistry at Higher Level and Biology at Higher Level all demand steady revision. We build a revision map for each, tick off topics against the guide, and loop back to weak areas on a calendar rather than leaving it to panic in October.",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a Marhaura student choose?",
      paragraphs: [
        "Cambridge IGCSE gives most subjects in two tiers, Core and Extended, while Pearson Edexcel uses Foundation and Higher in Mathematics. Core caps the top grade, so a student aiming at Class 11 science or Mathematics in an IB or A Level school usually needs Extended. The choice is made with the school, but a tutor can test readiness honestly in a trial lesson.",
        "Subject choice is the second decision. A family weighing engineering later will keep Mathematics, Physics and Chemistry, with Computer Science as a good fit. Medicine points to Biology and Chemistry. For a business family from the Saran trading belt, Economics, Business Studies and Accounting give a useful base.",
        "English deserves attention, too. Students from Hindi-medium backgrounds may be strong thinkers who stumble on extended writing, and a tutor can build sentence variety and a reading routine over several months. That pays across every other subject on the list.",
        "Finally, there is exam technique. IGCSE papers are time-limited and predictable, and the best preparation is repeated practice with review. A tutor sets papers, marks them against the examiner report and watches for recurring mistakes in units, command words and working shown.",
      ],
    },
  ],

  process: [
    { title: "Share the details", description: "Send the programme, subject, level and exam session on WhatsApp or by email." },
    { title: "We match a tutor", description: "A tutor who teaches that exact board and subject is shortlisted for your child." },
    { title: "Free trial lesson", description: "A live session to test the fit, with no payment due beforehand." },
    { title: "Rate in writing", description: "You receive the rate and the lesson plan in writing before anything is booked." },
    { title: "Lessons and notes", description: "Regular live lessons begin, with a short written note after each one." },
  ],

  whyPoints: [
    { title: "Syllabus-specific teaching", description: "Tutors are matched to the exact IB or IGCSE course rather than a general school subject." },
    { title: "Fits Bihar's rhythm", description: "Slots are planned around board weeks, Chhath, floods and power cuts." },
    { title: "No road travel", description: "Lessons run at home, which saves hours that a Patna or Chhapra centre would take." },
    { title: "Written notes", description: "Parents see what was covered and what comes next after every session." },
    { title: "Honest scope", description: "Tutors coach; they never write assessments or coursework for a student." },
    { title: "Free trial and swap", description: "Try a lesson first and change the tutor if the fit is wrong." },
  ],

  faqs: [
    { question: "Do you offer IB and IGCSE tutors in Marhaura?", answer: "Yes, as live online one-to-one lessons taught to Marhaura students at home. A tutor is matched by programme, subject and level, and a free trial lesson comes first. Lessons run on Indian time, usually late afternoon or evening, and a short written note follows each session so parents can see what was covered." },
    { question: "Is home tuition available in Marhaura?", answer: "Online home tuition is available; in-person visits are not. Our tutors do not visit homes in Marhaura, because home visits run only in Gurugram and parts of Delhi NCR. The student learns at home on a laptop, one-to-one with a live tutor, which gives the focus of private tuition without a road journey." },
    { question: "Are there IB schools in Marhaura?", answer: "We could not confirm any IB World School or Cambridge centre in Marhaura or Saran district. Local private schools follow CBSE, ICSE or the Bihar Board. Families seeking an international curriculum usually look to Kolkata, Delhi NCR or a boarding school, and some choose to self-study with a private tutor alongside." },
    { question: "What does IB tuition cost in Marhaura?", answer: "There is no fixed price list. The rate depends on programme, level, subject scarcity and lesson frequency, and it is quoted in writing before you book a trial lesson. Higher Level Diploma tutors cost more than MYP or IGCSE tutors, and a long weekly plan is priced differently from a short exam-season block." },
    { question: "Can a Bihar Board student switch to IB or IGCSE?", answer: "Yes, though the move is easier at the right moment. Class 9 or Class 11 are the usual entry points. Content is often familiar, but the paper style, command terms and extended writing are new, and a tutor can bridge that in a few months of steady weekly lessons." },
    { question: "Which IB subjects can you teach?", answer: "Mathematics AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, Psychology, English A, Hindi B and Theory of Knowledge coaching, at Standard and Higher Level. If a subject is not listed, send a message and we will tell you honestly whether a qualified tutor is available." },
    { question: "Do you cover Cambridge and Pearson Edexcel IGCSE?", answer: "Yes, both boards, matched by syllabus code. Mathematics, the three sciences, Combined Science, English, Computer Science, Economics, Business Studies, Hindi and Accounting are all available. Tiers differ between the boards, so tell us which one the school uses and whether the paper is Core, Extended, Foundation or Higher." },
    { question: "Will the tutor write my IA or Extended Essay?", answer: "No. Tutors explain the criteria, discuss ideas and review a draft for clarity, but the work must be the student's own. Writing an internal assessment, Extended Essay, TOK essay or coursework would breach the programme's academic honesty rules, so we do not offer it under any arrangement." },
    { question: "How do power cuts and floods affect lessons?", answer: "We plan for them. A lesson lost to a cut or a flooded road is rescheduled without a fuss, and tutors keep spare slots near exam dates. Families who face frequent outages often keep a charged phone for a hotspot, so a lesson can continue even if the broadband drops." },
    { question: "What internet speed is needed?", answer: "A steady broadband or 4G connection is enough. Video lessons need a modest speed rather than a fast one, and a laptop or tablet with a working camera and microphone is ideal. A phone alone is not ideal for shared whiteboard work, so a larger screen helps." },
    { question: "How do I start with a free trial lesson?", answer: "Message us on WhatsApp at +91 7439 368 115 or email support@ibgram.com with the programme, subject, level and exam session. We shortlist a tutor, agree a slot, and run a live trial lesson. You decide afterwards whether to continue, with the rate already shared in writing." },
    { question: "What if my child does not get along with the tutor?", answer: "You can ask for a change at no cost. Fit matters more than loyalty to a first choice, and we would rather you speak early than carry on with a lesson that is not working. A replacement tutor is matched on the same subject and board, and the previous notes are shared to avoid repeating work." },
    { question: "Can my child study IB while staying in Marhaura?", answer: "Only if a school enrols them. The IB Diploma is taught through authorised schools, so a family staying in Saran would need a school elsewhere or an approved arrangement. Private tutoring supports a student already enrolled, and for IGCSE a private candidate route may exist through a registered centre." },
    { question: "How do IB or IGCSE grades help for NEET or JEE?", answer: "Eligibility depends on subjects studied and the board's equivalence under current rules. Students should read the latest notices from the testing agency and confirm with the school well before Class 11. A tutor can plan the subject list so that Physics, Chemistry and Mathematics or Biology are not left out." },
    { question: "Do you teach in Hindi or English?", answer: "Lessons are in English because the examinations are in English, but tutors can explain a hard idea in Hindi when a student is stuck. Many Marhaura students are more comfortable thinking in Hindi or Bhojpuri, and mixing a little of that in often helps a concept land the first time." },
    { question: "Are your tutors affiliated with the IB or a school?", answer: "No. IB Gram is an independent tutoring service. We are not affiliated with the IB, Cambridge, Pearson or any school, and school names on this page only indicate where international options are found. Admission decisions and exam registration remain with schools and the boards." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors in Chhapra", href: "/chhapra/", description: "Our page for the district headquarters, closest large town to Marhaura." },
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "The state capital, where many Bihar families look for schools and colleges." },
    { label: "IB and IGCSE tutors in Buxar", href: "/buxar/", description: "Another Bihar town page, with its own board and school notes." },
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The national page covering online tuition from any Indian city." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Subject and programme detail for every IB tutoring request." },
    { label: "IGCSE tutors", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE support by subject." },
    { label: "IB Diploma Programme tutoring", href: "/programmes/dp/", description: "Higher Level and Standard Level support for Class 11 and 12." },
    { label: "IB Middle Years tutoring", href: "/programmes/myp/", description: "Support for Class 6 to 10 students on criterion-based tasks." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "How Mathematics AA and AI lessons are structured." },
    { label: "Meet the tutors", href: "/tutors/", description: "Profiles of the teachers on the IB Gram rota." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Reach us to book a free trial lesson." },
  ],

  closingHeading: "Start with a free trial lesson from home in Marhaura",
  closingBody:
    "Tell us the programme, subject, level and next exam session, and we will match a tutor who teaches that syllabus. The first lesson is live, private and free, the rate follows in writing, and you decide after seeing how your child responds. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
