import type { CitySeoPage } from "../types";

/**
 * Only one Mohali school could be confirmed for the IB or Cambridge (Oakridge International School),
 * below the three needed for the sliding strip, so stripSchools is empty. Chandigarh and Ludhiana
 * names are reused from those cities' checked pages and labelled as nearby.
 */
export const mohali: CitySeoPage = {
  slug: "mohali",
  countryName: "Mohali",
  countryNameLong: "Mohali (SAS Nagar), Punjab",
  demonym: "Mohali",
  flagCode: "in",
  countryCode: "IN",
  region: "Punjab, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Late afternoon and evening lessons between school pick-up and dinner, with Sunday morning blocks for longer sessions",
  lastUpdated: "2026-09-21",
  state: "Punjab",
  stateCode: "IN-PB",
  geo: { latitude: 30.7046, longitude: 76.7179 },
  wikipedia: "https://en.wikipedia.org/wiki/Mohali",
  alternateNames: ["SAS Nagar", "Sahibzada Ajit Singh Nagar", "S.A.S. Nagar Mohali"],
  stripSchools: [],

  title: "IB and IGCSE Tutors in Mohali | Private Tuition Online",
  metaDescription:
    "Private IB and IGCSE tuition for Mohali (SAS Nagar) students, taught live online at home by tutors who know the syllabus. Book a free trial lesson today.",
  h1: "IB and IGCSE Tutors and Private Home Tuition in Mohali",
  heroEyebrow: "IB & IGCSE TUITION FOR MOHALI, SAS NAGAR",
  heroSubtitle:
    "Private tuition at home for IB and IGCSE students in Mohali, run as live one-to-one video lessons rather than home visits. Phase after phase, Mohali is full of families who moved from abroad or from Chandigarh's better-known sectors and expect an international syllabus to be taught properly. With one confirmed IB and Cambridge school in the whole city, the tutor becomes the subject specialist a student may not find in the classroom.",
  primaryKeyword: "IB and IGCSE tutors in Mohali",
  imageAltText: "Mohali student revising IGCSE Chemistry with a live online tutor at a study desk at home",
  secondaryKeywords: [
    "IB tutor in Mohali",
    "IGCSE tutor in Mohali",
    "IB home tuition Mohali",
    "IGCSE home tuition Mohali",
    "IB private tuition Mohali",
    "IB Maths tutor Mohali",
    "IGCSE Maths tutor Mohali",
    "IB Physics tutor Mohali",
    "IB Chemistry tutor Mohali",
    "IB Biology tutor Mohali",
    "IB DP tutor Mohali",
    "IB MYP tutor Mohali",
    "IB PYP tutor Mohali",
    "IGCSE online tuition Mohali",
    "IB tutor SAS Nagar",
    "IB tutor Phase 7 Mohali",
    "IGCSE tutor Sector 70 Mohali",
    "IB tuition Kharar",
  ],

  heroTrustPoints: [
    "Live private lessons for IB DP, MYP, PYP and Cambridge or Edexcel IGCSE",
    "Tutor picked for the exact paper, not for a general subject label",
    "Timings around Mohali school runs and Chandigarh commutes",
    "Free trial lesson, then a written rate before any booking",
    "A short written note after every session",
  ],
  heroStats: [
    { value: "IST", label: "Lessons on Indian time" },
    { value: "PYP to DP", label: "Every IB stage" },
    { value: "Free trial", label: "Try before you book" },
    { value: "May & Nov", label: "Exam windows planned for" },
  ],

  intro: {
    heading: "Private IB and IGCSE tutors for Mohali families",
    paragraphs: [
      "Mohali was laid out in the 1960s as Punjab's counterpart to Chandigarh and has since filled with numbered Phases, a growing run of sectors past Sector 70, business parks, the airport at its edge and the Knowledge City campuses of the Indian School of Business and IISER Mohali. The families living here are an unusual mix: faculty and researchers, IT and pharma professionals, returning NRIs from Canada, the UK and Australia, and Punjabi business households. A good number want an international curriculum for their children, and a few schools deliver it.",
      "Those few schools cannot be everyone's answer. Seats are limited, fees are high, a move mid-year is hard, and students who start late often discover that their Diploma or IGCSE classes run at a pace that assumes years of preparation. Private tuition fills that space. Our IB and IGCSE tutors in Mohali teach live, one child at a time, usually for an hour after school, and work from a written plan matched to the paper the student will sit.",
      "The rest of this page lays out the local facts a parent should have in hand: what exists in Mohali and what sits across the Chandigarh boundary, how Punjab's boards compare, what makes a rate rise or fall, how the exam calendar meets a Punjabi winter, what universities look at, and how subject teaching is organised. IB Gram is an independent service, unconnected with the IB, Cambridge, Pearson or any school, and tutors never write assessed work for a student.",
    ],
  },

  programmesIntro:
    "Mohali children reach the IB and IGCSE from several directions, so the tutor's brief varies enormously between a Class 3 newcomer and a Class 12 Higher Level candidate.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Class 1-5, ages 6-11",
      description:
        "Concept-driven primary teaching with units of inquiry and a culminating Exhibition. Support focuses on reading, number fluency and speaking confidently about what the child has learnt.",
      countryNote:
        "For children returning from schools abroad, PYP tutoring often smooths a change of country, including the switch to Indian-style term dates and homework habits.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Criterion-referenced work across eight subject groups and a Personal Project. Tutors show students how the criteria are marked and how a strong answer is put together.",
      countryNote:
        "Mohali students moving from CBSE into an MYP class often need help with reflective writing and open-ended tasks, which CBSE papers rarely test.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects plus TOK, the Extended Essay and CAS. Tutoring addresses examined papers and the method of internal assessments, never the writing of them.",
      countryNote:
        "With ISB and IISER faculty in the city, some Diploma families want deeper HL science or mathematics than a school timetable allows, and tutoring provides that extra depth.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "DP courses paired with a career-related study and a service-learning project. Tutors support the academic courses.",
      countryNote:
        "CP is rarely offered locally. We take requests and match a tutor to the specific DP courses involved.",
    },
  ],

  subjectsIntro:
    "Pick the course, the level and the exam session, and we look for a tutor who has taught that combination before, rather than a subject teacher who has only seen the syllabus on paper.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL / HL", description: "Calculus, vectors, complex numbers at HL and the reasoning habits that Paper 3 rewards." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL / HL", description: "Statistical modelling, financial maths and calculator technique for the technology paper." },
    { name: "Physics", levels: "SL / HL", description: "Kinematics through electromagnetism and nuclear topics, data-analysis questions and lab-method explanations." },
    { name: "Chemistry", levels: "SL / HL", description: "Bonding, equilibrium, thermochemistry and organic synthesis, with the arithmetic drilled until it is dependable." },
    { name: "Biology", levels: "SL / HL", description: "Molecular biology, genetics and ecology; precise language for long answers." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Systems thinking, case studies and the essay-style responses the paper expects." },
    { name: "Economics", levels: "SL / HL", description: "Diagrams, evaluation and Indian-economy examples for the extended responses." },
    { name: "Business Management", levels: "SL / HL", description: "Tools, formulas and unseen-case analysis under time pressure." },
    { name: "Computer Science", levels: "SL / HL", description: "Programming logic, databases and the HL extension topics." },
    { name: "Psychology", levels: "SL / HL", description: "Key studies, evaluation and structure for the extended essays." },
    { name: "English A: Language and Literature", levels: "SL / HL", description: "Textual analysis, commentary and comparative essay practice." },
    { name: "Hindi B and Punjabi support", levels: "SL / HL and school-based", description: "Language practice and, where a school allows, help with Punjabi as a home language." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion coaching around knowledge questions; the essay remains the student's own writing." },
  ],

  igcseSubjectsIntro:
    "IGCSE subjects are matched by exam board, because Cambridge and Pearson Edexcel papers are laid out differently and reward different habits.",
  igcseSubjects: [
    { name: "Mathematics", levels: "Core / Extended, Foundation / Higher", description: "Number, algebra, shape and statistics, with timed papers." },
    { name: "Physics", levels: "Core / Extended", description: "Mechanics, thermal physics, waves and electricity with practical-skills preparation." },
    { name: "Chemistry", levels: "Core / Extended", description: "Atomic structure, reactions and calculations, organic basics." },
    { name: "Biology", levels: "Core / Extended", description: "Cell structure, nutrition, inheritance and the environment." },
    { name: "Combined and Co-ordinated Sciences", levels: "Core / Extended", description: "For students on the double-award pathway." },
    { name: "English First and Second Language", levels: "Core / Extended", description: "Reading, writing and speaking for both language courses." },
    { name: "Computer Science and ICT", levels: "Single tier", description: "Programming, data and networks." },
    { name: "Business Studies and Economics", levels: "Single tier", description: "Concepts, calculations and case analysis." },
    { name: "Hindi and Punjabi as second languages", levels: "Core / Extended", description: "Reading, writing and oral preparation where the school offers them." },
    { name: "Accounting", levels: "Single tier", description: "Books of account and financial statements." },
  ],

  regionsTitle: "Phases, sectors and neighbouring towns around Mohali",
  regionsIntro:
    "Mohali's addresses run by Phase and Sector numbers, and the school run often crosses into Chandigarh. Notes below focus on what a family in each pocket usually experiences.",
  regions: [
    { name: "Phases 1 to 5", note: "The oldest Phases, close to the Chandigarh boundary, with established homes and easy access to schools on both sides of the border." },
    { name: "Phases 7 and 8", note: "Busy market and office areas, with the industrial and IT parks nearby. Parents here often work locally and can be home by early evening." },
    { name: "Phase 9 and Phase 10", note: "Home of the cricket stadium and a large residential population. Match days crowd nearby roads, which is worth remembering when planning school runs." },
    { name: "Phase 11 and Sector 65 to 71", note: "Newer sectors with apartment societies and many NRI and IT families who chose Mohali for its space and airport connection." },
    { name: "Sectors 74 to 80", note: "Growing residential belts on the far side, close to newer schools. Family evenings here are often planned around the drive back from Chandigarh offices." },
    { name: "Aerocity and airport road", note: "Newer apartment clusters near the airport, where families with frequent travel prefer lesson slots that can move easily." },
    { name: "Knowledge City, Sector 81", note: "The ISB and IISER campus area, home to faculty and researcher families with an eye on international schooling." },
    { name: "Kharar and Gharuan", note: "Growing townships west of Mohali with a big university campus at Gharuan. Students here often travel long distances to school." },
    { name: "Sohana and Landran", note: "Residential belts toward Kharar and Landran Road, where large gated communities have appeared over the last decade." },
  ],

  schoolClusters: [
    {
      city: "Mohali",
      note: "Oakridge International School is the one Mohali school we could confirm as an authorised IB World School, with Cambridge IGCSE for the middle years. Nothing else in the city could be confirmed, so the honest count for IB and Cambridge options here is one.",
      schools: ["Oakridge International School, Mohali"],
    },
    {
      city: "Nearby: Chandigarh, Sector 26",
      note: "Two IB schools sit just across the boundary in Chandigarh. Daily travel from Mohali phases is possible for some families, but planning around traffic is essential.",
      schools: ["Strawberry Fields High School, Sector 26", "Firststeps School, Sector 26"],
    },
    {
      city: "Nearby: Ludhiana",
      note: "Ludhiana, about ninety minutes down the highway, has confirmed Cambridge or IB options that some families consider for boarding or relocation.",
      schools: ["Britannica International School", "Harvest International School"],
    },
  ],
  schoolDisclaimer:
    "The schools above appear only to show where confirmed IB or Cambridge options are found. IB Gram is an independent service and is not affiliated with the IB, Cambridge, Pearson or any of these schools, and admissions are decided by each school alone.",

  modesIntro:
    "Tutors do not visit homes in Mohali, so every format here is delivered online, live and private, around a Mohali family's routine.",
  modes: [
    {
      title: "Online private lessons at home",
      description: "A live hour with one tutor on your child's syllabus, from the desk at home.",
      bullets: ["Shared whiteboard and past papers", "Same tutor week to week", "Notes after every lesson"],
    },
    {
      title: "Pre-exam sprint blocks",
      description: "A few concentrated weeks ahead of school exams or an IB or IGCSE session.",
      bullets: ["Past-paper cycles with feedback", "Mark-scheme literacy", "Flexible slots around travel"],
    },
    {
      title: "Ongoing weekly subject support",
      description: "One subject, one slot a week, all year, so the child never falls behind the school's pace.",
      bullets: ["Suits MYP and IGCSE years", "Break for winter holidays if needed", "Change subject mid-year"],
    },
  ],

  tutorsIntro:
    "Tutors teach from across India on Indian Standard Time, and most are free in exactly the late-afternoon and evening hours that Mohali students prefer.",

  sections: [
    {
      heading: "Which schools in Mohali offer the IB or Cambridge IGCSE?",
      paragraphs: [
        "One that we could confirm: Oakridge International School, which holds IB World School status and offers Cambridge IGCSE. Beyond it, several Mohali schools describe themselves as international or global in their branding, but describing yourself as international is not the same as being authorised for the IB or approved as a Cambridge centre, and we do not list schools we cannot verify.",
        "The tricity picture is similar. Across the Chandigarh boundary, two schools in Sector 26 offer the IB, and Panchkula on the Haryana side has no confirmed IB or Cambridge school. Add Ludhiana, Amritsar and Jalandhar to the map and the nearest alternatives are all a highway drive away.",
        "For the parent, this creates three kinds of household. Some have a child in Oakridge and want extra depth in one or two subjects. Some have a child in a local CBSE school who may move to an international programme at Class 9 or 11, and want to prepare in advance. Some have returned from abroad and want to keep an IGCSE or IB track open at a school elsewhere.",
        "None of that is helped by a Mohali tutoring centre that teaches CBSE and lists IB as an afterthought. That is the market gap online private tuition fills for our IB and IGCSE tutors in Mohali service.",
      ],
    },
    {
      heading: "Punjab board, CBSE, ICSE, IB and IGCSE: a plain comparison",
      paragraphs: [
        "Punjab School Education Board classes are common in government and many private schools around Mohali, CBSE dominates the private English-medium sector, and ICSE has a small presence. Together they prepare students for JEE, NEET, CUET-UG and state entrance exams. The IB and IGCSE are outliers by comparison, chosen for global recognition or for a family's travel plans.",
        "What changes when a student moves? The biggest shift is in writing. CBSE and PSEB papers reward accurate recall of standard answers, while the IB rewards analysis and IGCSE rewards precise expression to the mark scheme. A capable CBSE student can find their first IB paper unsettling for that reason alone.",
        "Below is a summary for parents comparing these routes.",
      ],
      table: {
        caption: "Board comparison from a Mohali family's point of view",
        columns: ["Board", "How students are assessed", "Typical next step", "Where support is easy to find in Mohali"],
        rows: [
          ["PSEB", "State papers in Punjabi or English", "State colleges, JEE or NEET via coaching", "Local tutors everywhere"],
          ["CBSE", "Board exams at Class 10 and 12", "JEE, NEET, CUET-UG", "Coaching centres on every main road"],
          ["ICSE and ISC", "Broader syllabus with more written English", "CUET-UG, Indian universities", "A few tutors"],
          ["Cambridge or Edexcel IGCSE", "Tiered subject papers; sessions in May and November", "IB, A Level or Indian Class 11", "Very few"],
          ["IB Diploma", "Exams, internal assessments, essay and CAS", "Universities in India and abroad", "Almost none"],
        ],
      },
    },
    {
      heading: "How much does IB and IGCSE tuition cost in Mohali?",
      paragraphs: [
        "There is no single answer, and we do not publish a price list. Instead, the rate is written down before any booking. What decides it is a short list of things a parent can weigh for themselves before asking for a quote.",
        "First is the level. A Higher Level Diploma tutor in Physics or Mathematics carries more experience and marking knowledge than someone helping with Class 7 science. Second is scarcity: a tutor who has taught Computer Science HL or Economics HL is harder to find than a general English teacher.",
        "Third is the length of the arrangement. A weekly slot held all year costs a family less per hour than an ad hoc block booked in a panic three weeks before the exams, because both sides can plan. Fourth is the time of the year: intensive blocks before a November session are in demand.",
        "Parents comparing costs in Mohali sometimes look at Chandigarh centres for cross-checking. A sensible comparison includes fuel, parking and the lost hour on the road, which can make an online lesson at home a cheaper option than it looks on paper.",
      ],
      bullets: [
        "Level: SL, HL, Core or Extended",
        "Rarity of the subject among qualified tutors",
        "Weekly rhythm versus one-off blocks",
        "Whether the lesson falls in a peak exam period",
      ],
    },
    {
      heading: "Home tutors, coaching centres, online lessons and self-study: which suits Mohali?",
      paragraphs: [
        "Mohali offers all four, and each has real strengths. A local home tutor is convenient, a coaching centre is competitive and structured, and self-study costs nothing but discipline. Online private tuition offers a subject specialist without a commute.",
        "Most Mohali coaching centres are built for JEE, NEET and CLAT, and their teaching is superb for that purpose. But international papers are different, and a student in an Indian-syllabus batch is often studying alongside classmates who do not share their exam.",
      ],
      table: {
        caption: "Support options for an IB or IGCSE student in Mohali",
        columns: ["Route", "Syllabus expertise", "Convenience", "Typical weakness"],
        rows: [
          ["Online private lessons at home", "Matched to the exact paper", "No travel; flexible timing", "Needs a steady internet connection"],
          ["Local home tutor", "Usually CBSE or state trained", "Comes to a fixed slot", "Few have taught IB or IGCSE"],
          ["JEE and NEET coaching centre", "Strong on Indian entrance exams", "Fixed batch times", "Not built for international papers"],
          ["Self-study", "Whatever the student can manage", "Any hour", "No feedback on weak answers"],
        ],
      },
    },
    {
      heading: "Punjab's winter fog, festivals and exam sessions: a Mohali calendar",
      paragraphs: [
        "A Punjabi school year has a texture that a national syllabus ignores. Lohri and Baisakhi, Diwali, Gurpurab and the winter fog all shape a family's study time, and the IB and IGCSE windows sit right in the middle of them.",
        "The IB Diploma is examined in May and November, with results in July and January. Cambridge IGCSE runs sessions in February or March, May or June, and October or November, and Pearson Edexcel International GCSE has January, May or June, and October or November. Your child's school registers the entry, and lessons are planned backwards from the paper dates.",
        "December and January bring dense fog, cold mornings and early school closures in Punjab. Online lessons help here, since a fog delay does not cancel a session. Summer heat from May to June pushes families toward evening slots.",
      ],
      table: {
        caption: "The Mohali study calendar in outline",
        columns: ["Time of year", "What is happening locally", "Study effect", "Tutoring response"],
        rows: [
          ["Jan to Feb", "Lohri, fog, winter closures; IGCSE series begins", "Interrupted mornings", "Evening online slots"],
          ["Mar to Apr", "Baisakhi in April; school year turns over", "New syllabus starts", "Bridging lessons before the term speeds up"],
          ["May to Jun", "IB May session and IGCSE papers; heat builds", "Exam stress", "Short focused sessions, timed papers"],
          ["Jul to Sep", "IB results in July; monsoon rain", "New session begins", "Foundation lessons, weekend blocks"],
          ["Oct to Dec", "Diwali, Gurpurab; November sessions; fog returns", "Festival gaps and cold starts", "Compressed revision, reschedule buffers"],
        ],
      },
    },
    {
      heading: "What do Mohali's IB and IGCSE students do after school?",
      paragraphs: [
        "Mohali students have an unusual number of options in their own back yard. The ISB, IISER Mohali and NIPER are all in the city, and Chandigarh's universities are twenty minutes away. Chandigarh University at Gharuan draws students from across the region.",
        "IB Diploma holders usually apply to Indian universities through an Association of Indian Universities equivalence certificate, and CUET-UG is the main door to central universities. Engineering and medicine depend on the subject combination taken in Class 11, and rules for JEE and NEET eligibility should be checked with the relevant authority each year.",
        "Many families with a Mohali address have relatives in Canada, the UK, Australia or the US. That link makes study abroad a frequent choice, and predicted grades, school reports and language proof all matter. Tutors help students reach the grades those applications ask for.",
        "For IGCSE students, the next decision is between IB, A Level or an Indian Class 11 stream. The decision is best made in Class 9 or early Class 10, so tuition in the final IGCSE year can be planned around the intended subject.",
      ],
    },
    {
      heading: "IB Maths AA and AI, plus Physics, Chemistry and Biology",
      paragraphs: [
        "Choosing between Analysis and Approaches and Applications and Interpretation is the decision that most affects a Diploma student's Mathematics experience. AA suits a student who is comfortable with algebra and likes to prove things; AI suits one who wants to model real data with a calculator and software. Mohali students with an ISB or IISER parent often lean AA, but that should be a decision based on the child, not the parent's field.",
        "Tutors in Mathematics teach in two layers. The first is content, taken topic by topic. The second is exam technique: how many marks a question is worth, how to show method, and how to avoid losing marks on notation. Paper 3 at HL rewards a different type of problem-solving from Paper 1 and 2, and needs separate practice.",
        "Physics rewards fluency with units and an instinct for whether an answer is sensible. Chemistry rewards patient stoichiometry. Biology rewards exact terms. We match tutors who have taught these papers, and each lesson works from questions the student got wrong last week.",
        "The internal assessment in each science is the student's own investigation. A tutor can explain the criteria and discuss method, but does not design, write or correct the report for them.",
      ],
    },
    {
      heading: "IGCSE tiers, boards and subject mix for Mohali students",
      paragraphs: [
        "IGCSE students first face a choice of board. Cambridge and Pearson Edexcel both award internationally recognised qualifications, but their papers, tiers and grading vary, so the tutor must know the right one. Ask your child's school which board and which papers are on the entry form before booking.",
        "Tier decisions follow. Cambridge Core and Extended, or Edexcel Foundation and Higher, decide the grades available. A student aiming for Diploma sciences or A Level should usually be entered at the higher tier, while a student who is struggling may score better at a tier that matches their level.",
        "Subject mix is the third piece. A balanced spread of languages, mathematics, two or three sciences and one humanities or business subject keeps options open. Tutors help a family see how choices at IGCSE affect Class 11.",
        "For Mohali students coming from Punjabi-medium or CBSE backgrounds, English writing at the extended level can be the biggest surprise, and a few weeks of directed-writing practice often makes a marked difference.",
      ],
    },
    {
      heading: "Returning from Canada, the UK or Australia: how does a Mohali student settle back in?",
      paragraphs: [
        "A student who returns to Mohali after some years abroad usually arrives with strong spoken English, comfortable habits with discussion-based classes and a very different set of gaps from a child who has studied here throughout. The gaps tend to be Indian-specific: Hindi or Punjabi reading, the Indian school calendar, and a syllabus that may be a year ahead or behind in Mathematics.",
        "Tutors can bridge those gaps without slowing the child down. A short diagnostic lesson shows where the student stands against the IB or IGCSE paper they will actually sit. From there, a plan covers only what is missing, and the rest of the school day is left alone.",
        "Timing matters. Families who land in Mohali in June or July are entering a new school year with the least warning, and mid-year arrivals in January face an even harder catch-up. Starting tuition in the first fortnight, rather than after the first report card, usually makes the difference between a comfortable term and a stressful one.",
        "Parents also ask about homesickness and routine. A regular evening lesson with the same tutor gives a returning child a fixed point in the week and a familiar face, which is worth more than it sounds during the first term in a new city.",
      ],
    },
    {
      heading: "Planning a week around Mohali school runs and Chandigarh traffic",
      paragraphs: [
        "Mohali's geography makes time management a real part of studying. The main roads that link the Phases to Chandigarh fill up at school drop-off and again from five o'clock, and a child at a school across the boundary can spend an hour each way in a vehicle.",
        "A sensible lesson plan therefore starts with the family's actual timetable. Some Mohali households prefer a lesson within an hour of arriving home while the child is still alert; others prefer a break, then a slot after dinner. Weekend mornings suit longer sessions, especially for HL revision.",
        "Because the lessons are online, a delayed bus or a wet-weather jam does not cancel anything. The tutor waits, or the slot shifts by half an hour, and the note after the lesson records what was covered.",
      ],
    },
  ],

  process: [
    { title: "Message us your details", description: "Send the programme, subject, level and exam session through WhatsApp or email." },
    { title: "Get a matched tutor", description: "We shortlist someone who has taught that exact paper and send a short profile." },
    { title: "Try a free lesson", description: "A live trial on a topic from your child's syllabus, with no obligation to continue." },
    { title: "Read the rate in writing", description: "If it feels right, we send the rate and lesson plan in writing before booking." },
    { title: "Learn week by week", description: "Regular lessons, short notes after each class, and a tutor swap if things do not click." },
  ],

  whyPoints: [
    { title: "Paper-specific teaching", description: "The tutor has taught the course your child will sit, not just a related one." },
    { title: "Built for tricity routines", description: "Slots avoid the school run and the Chandigarh-bound evening rush." },
    { title: "Clear on local choices", description: "We say plainly how few IB and Cambridge schools Mohali has, and plan around that." },
    { title: "Readable progress notes", description: "A short note after each lesson keeps parents in the loop." },
    { title: "Coaching that stays honest", description: "Tutors explain and coach; assessed work stays the student's own." },
    { title: "Easy to change", description: "Free trial first, written rate second, tutor change if the match is wrong." },
  ],

  faqs: [
    { question: "Which Mohali schools offer the IB or IGCSE?", answer: "Only Oakridge International School could be confirmed, as an IB World School with Cambridge IGCSE. Other Mohali schools may use the word international in their branding, but we list only those we can verify. Two IB schools in Chandigarh's Sector 26 sit nearby." },
    { question: "Can a tutor visit our home in Mohali?", answer: "No. Home visits run only in Gurugram and parts of Delhi NCR, and tutors do not travel to Mohali. What we offer is online home tuition, a live private lesson on video while your child sits at their own desk. Most families find the routine easier than driving across the Chandigarh boundary." },
    { question: "How do I find IB and IGCSE tutors in Mohali for one subject?", answer: "Write with the programme, subject, level and exam session. We choose a tutor who has taught that paper, share a short profile and book a free trial lesson. If the match is not right, we change the tutor without extra charge." },
    { question: "What does IB tuition cost in Mohali?", answer: "It depends on the level, the subject's scarcity, lessons per week and how long you commit. We do not publish prices, and every rate is written down and sent before you book, so you can compare it calmly." },
    { question: "My child studies at Oakridge. Can tutoring still help?", answer: "Yes. Students in any IB or IGCSE school use private tuition for extra depth in a hard subject, for exam technique or for catching up after illness. The tutor works from the same syllabus and coordinates with what the school is teaching that week." },
    { question: "Is online tuition effective for Higher Level subjects?", answer: "It works well. A shared whiteboard, scanned past papers and live problem solving cover what a classroom does, and one-to-one time means every minute is about your child's gaps. HL Mathematics and Physics tend to benefit especially." },
    { question: "Can you help a student switching from CBSE to IB or IGCSE?", answer: "Yes, and the earlier the better. Content is often familiar, but command terms, extended writing and internal assessments are new. We start with those and fill content gaps as they appear." },
    { question: "Which IB exam sessions do you cover?", answer: "May and November. The school registers the entry; we plan lessons backwards from that date. Results come out in July and January." },
    { question: "Will you write the IA, Extended Essay or coursework?", answer: "No. Tutors coach and explain, and never write internal assessments, Extended Essays, TOK essays or coursework. They can discuss method, criteria and ideas, and give feedback on the student's own drafts." },
    { question: "How does the free trial work?", answer: "You get a live lesson on a real topic with a matched tutor, at no charge and with no obligation. Afterwards you receive a written note and, if you want to continue, the rate in writing." },
    { question: "Do you teach both Cambridge and Edexcel IGCSE?", answer: "Yes, and we match tutors by board code as well as subject. Tell us the board and the papers your child will sit, and we find someone who knows those papers." },
    { question: "Can students from Kharar, Zirakpur or Sohana join?", answer: "Yes. Since lessons are online, any address in the region works with a steady connection. We plan around school bus times and suggest a mobile hotspot as backup during monsoon and fog-related outages." },
    { question: "When are lessons held?", answer: "Weekday late afternoons and evenings, and Sunday mornings, in Indian Standard Time. Exam blocks can add slots. Fog days and festival weeks are handled by rescheduling." },
    { question: "Does the IB Diploma count for Indian universities?", answer: "In most cases, with an Association of Indian Universities equivalence certificate, and CUET-UG is the usual route for central universities. Engineering and medicine depend on subject choices, so verify current rules before Class 11 subject selection." },
    { question: "How do I start?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with your child's board, subject and level. A tutor match and a trial time usually follow within a day or two." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The same service in cities nationwide." },
    { label: "IB tutors overview", href: "/ib-tutors/", description: "How IB tutoring at IB Gram is organised." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Cambridge and Edexcel IGCSE by board and subject." },
    { label: "Diploma Programme tutoring", href: "/programmes/dp/", description: "Classes 11 and 12 subject support." },
    { label: "PYP tutoring", href: "/programmes/pyp/", description: "Primary-years support for younger students." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "AA and AI at SL and HL." },
    { label: "Our tutors", href: "/tutors/", description: "Meet the people who teach the lessons." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Ask a question or book a free trial." },
    { label: "IB and IGCSE tutors in Chandigarh", href: "/chandigarh/", description: "The tricity's sector-grid neighbour, across the boundary." },
    { label: "IB and IGCSE tutors in Panchkula", href: "/panchkula/", description: "The Haryana side of the tricity." },
    { label: "IB and IGCSE tutors in Ludhiana", href: "/ludhiana/", description: "Punjab's largest industrial city." },
  ],

  closingHeading: "Book a free IB or IGCSE trial lesson from your Mohali home",
  closingBody:
    "Tell us the programme, subject and exam session, and we will match a tutor and set up a trial class. You will get the rate in writing before deciding anything. Write to support@ibgram.com or message +91 7439 368 115 on WhatsApp.",
};
