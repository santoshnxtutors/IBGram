import type { CitySeoPage } from "../types";

/**
 * /panagudi/ - IB and IGCSE tutoring page for Panagudi, Tirunelveli district, Tamil Nadu. No IB or
 * Cambridge/Edexcel IGCSE school in Panagudi could be confirmed, so stripSchools is empty and the
 * clusters point honestly to Madurai, Thiruvananthapuram and Chennai.
 */
export const panagudi: CitySeoPage = {
  slug: "panagudi",
  countryName: "Panagudi",
  countryNameLong: "Panagudi, Tamil Nadu",
  demonym: "Panagudi",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  flagCode: "in",
  countryCode: "IN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Class times respect the two monsoons of the deep south, the Pongal and Deepavali breaks, and the long commute many parents make to Kudankulam and Nagercoil",
  lastUpdated: "2026-09-21",
  geo: { latitude: 8.35, longitude: 77.57 },
  wikipedia: "https://en.wikipedia.org/wiki/Panagudi",
  alternateNames: ["Panaikudi", "Panagudy", "Panagudi Tirunelveli"],
  stripSchools: [],

  title: "Panagudi IB & IGCSE Tutors | Private Online Tuition",
  metaDescription:
    "Online IB and IGCSE tutors for Panagudi in Tirunelveli district: private tuition from home for DP, MYP, PYP, Cambridge and Edexcel, with a free trial class.",
  h1: "IB and IGCSE Tutors and Private Tuition at Home in Panagudi",
  heroEyebrow: "PRIVATE IB & IGCSE TUITION AT HOME IN PANAGUDI, TIRUNELVELI DISTRICT",
  heroSubtitle:
    "For private home tuition in Panagudi on an IB or IGCSE course, the closest school that teaches either is two cities away, so the teacher has to come through a screen. IB Gram links your child with a tutor who has already taught the precise syllabus: live, one to one, at the family's own table, whether you live in the town, at Pushpavanam or out near the wind farms.",
  primaryKeyword: "IB and IGCSE tutors in Panagudi",
  imageAltText: "A Panagudi student following an online IGCSE Physics lesson on a laptop at home",
  secondaryKeywords: [
    "IB tutor Panagudi",
    "IGCSE tutor Panagudi",
    "IB home tuition Panagudi",
    "IGCSE home tuition Panagudi",
    "IB private tuition Panagudi",
    "IB Maths tutor Panagudi",
    "IGCSE Maths tutor Panagudi",
    "IB Physics tutor Panagudi",
    "IB Chemistry tutor Panagudi",
    "IB Biology tutor Panagudi",
    "IB DP tutor Panagudi",
    "IB MYP tutor Panagudi",
    "IB PYP tutor Panagudi",
    "IGCSE online tuition Panagudi",
    "IB tutor Tirunelveli district",
    "IB tutor Kudankulam",
    "IGCSE tutor Panaikudi",
    "online IB tutor Radhapuram Nanguneri",
  ],

  heroTrustPoints: [
    "A teacher chosen because they have taught your child's exact IB or IGCSE course",
    "All lessons are live and online; no tutor visits a Panagudi house",
    "One complete trial lesson before any commitment",
    "No affiliation with the IB, Cambridge, Pearson or any school named",
  ],
  heroStats: [
    { value: "PYP, MYP, DP", label: "Each IB stage" },
    { value: "Cambridge + Edexcel", label: "IGCSE boards" },
    { value: "IST", label: "Same time zone" },
    { value: "Free trial", label: "To begin" },
  ],

  intro: {
    heading: "IB and IGCSE tuition in a town of wind farms and nuclear engineers",
    paragraphs: [
      "Panagudi is a town panchayat of nearly thirty thousand people in Tirunelveli district, tucked against the Western Ghats near Kanyakumari's northern edge. Wind turbines turn on the ridges above the tile and brick works, and the Kudankulam nuclear power plant and the ISRO propulsion complex at Mahendragiri are both within easy reach. We could not find a school in Panagudi that teaches the IB or a Cambridge or Edexcel IGCSE syllabus, and we will not pretend otherwise.",
      "That mix of local industries matters for who calls us. The scientists, engineers, technicians and administrators posted to Kudankulam and Mahendragiri arrive from every state and often have children who studied the CBSE, IB or Cambridge in other cities. A transfer to the deep south should not interrupt a Class 10 or Class 12 course. Local families with a daughter or son aiming at a university overseas, or at a private Indian one that values international qualifications, make up the second group.",
      "The sensible meaning of home tuition here is a live lesson on a laptop. A tutor teaches from another Indian city, your child sits at home, and the two work together, privately. Tutors do not visit homes in Panagudi: teaching face to face at home is offered only in Gurugram and parts of Delhi NCR. What you gain is the ability to choose a teacher by syllabus and level, not by who lives within reach.",
      "IB Gram is independent. We have no official link with the International Baccalaureate, Cambridge, Pearson or any school, and our tutors never write internal assessments, Extended Essays, TOK essays or coursework. They explain, question and coach, and the student produces the work.",
    ],
    bullets: [
      "Private live tuition for IB PYP, MYP and DP and for both IGCSE boards",
      "Online only in Panagudi; in-home lessons exist solely in Gurugram and parts of Delhi NCR",
      "A written summary after every class",
      "A swap of tutor on request",
      "Fees in writing before you commit",
    ],
  },

  programmesIntro:
    "Most Panagudi children study under the Tamil Nadu State Board, in matriculation or government schools, or follow CBSE. The IB stages below describe how a tutor handles each one when it is studied at home.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Pre-school to Class 5, ages 3-11",
      description:
        "Children explore themes across subjects through inquiry, then present a self-chosen Exhibition at the end. Language and number confidence are the groundwork.",
      countryNote:
        "A PYP enquiry from Panagudi typically involves a child of a transferred scientist or a returnee, and tutoring protects English reading and curiosity during the move.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to Class 10, ages 11-16",
      description:
        "Eight subject groups are marked on criteria, and every student completes a Personal Project. The emphasis is on explaining and applying, not on recall alone.",
      countryNote:
        "Without a local MYP classroom, the tutor reads the criteria with the student and builds a bank of model answers at every achievement level.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Students take three subjects at Higher Level and three at Standard Level, with the Extended Essay, TOK and CAS, scoring up to 45 plus core points.",
      countryNote:
        "In this part of Tamil Nadu the Diploma enquiries are heavily scientific: physics, chemistry, mathematics and computer science, often from technical families.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11 and 12, ages 16-19",
      description:
        "Selected Diploma courses sit beside a career-related study and a reflective project for students with practical goals.",
      countryNote:
        "We know of no CP school in the Panagudi region, so tutoring means support for the academic courses it contains.",
    },
  ],

  subjectsIntro:
    "Give us the subject, the level and the board. Two students may both say they need Mathematics help, and one of them is sitting Analysis HL while the other is sitting IGCSE Foundation.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof for students who see themselves in engineering or pure science, with exploration topics chosen early." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, financial maths and modelling, using a graphing calculator, for business, biology and social science routes." },
    { name: "IB Physics", levels: "HL / SL", description: "A core subject for the Kudankulam and Mahendragiri families: mechanics, thermodynamics, fields and nuclear physics, practised as timed problems." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative chemistry, energetics and organic mechanisms, repeated with short daily problem sets." },
    { name: "IB Biology", levels: "HL / SL", description: "Cell biology, genetics and ecology, with the exact definitions and command terms the paper demands." },
    { name: "IB Design Technology", levels: "HL / SL", description: "Product design and engineering thinking, a natural fit for technical households and the design project." },
    { name: "IB Environmental Systems & Societies", levels: "HL / SL", description: "Energy systems, wind power and coastal ecosystems as case material in a district that has both." },
    { name: "IB Economics", levels: "HL / SL", description: "Diagrams with crisp explanations, using palmyra products, wind energy pricing and remittance flows as examples." },
    { name: "IB Business Management", levels: "HL / SL", description: "Case study reading and decision tools applied to small manufacturing and trading firms." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Close reading and essay planning for students moving from Tamil-medium or matriculation backgrounds." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Algorithms, programming and system design practised in the exam's pseudocode form." },
    { name: "IB Tamil B", levels: "HL / SL", description: "Formal letters, articles and oral work for students who want their mother tongue counted in the Diploma." },
    { name: "IB Hindi B", levels: "HL / SL", description: "Grammar, text types and conversation for the many families transferred from the north." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The tutor opens up questions about knowing; the essay and the exhibition are the student's own work." },
  ],

  igcseSubjectsIntro:
    "For Panagudi families IGCSE usually runs privately at home or prepares a child for a later school move. Choose the board first, Cambridge or Pearson Edexcel, then the tier.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Number, algebra and geometry built through short daily practice and clear worked solutions." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Introduces calculus and functions early, preparing students for the Diploma or A Level." },
    { name: "Edexcel IGCSE Mathematics B 4MB1", levels: "Foundation / Higher", description: "Edexcel's structured, calculation-heavy questions, rehearsed on timed papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Energy, circuits and waves, plus handling of the alternative-to-practical paper." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Atoms, reactions and the periodic table, with mole calculations repeated until secure." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Human systems, plants and heredity, with diagrams the student draws unaided." },
    { name: "IGCSE Combined Science 0653", levels: "Core / Extended", description: "A balanced single route through the three sciences." },
    { name: "IGCSE Environmental Management 0680", levels: "Grade 9-10", description: "Energy resources, coastlines and pollution, with wind and nuclear power as live examples." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Demand, supply and government policy explained through Tamil Nadu industry." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Business structures, finance and marketing with short scenarios." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "Data representation, logic and algorithm tracing before programming." },
    { name: "IGCSE Tamil as a Second Language 0511", levels: "Grade 9-10", description: "Comprehension and composition for students who want recognition for Tamil." },
  ],

  regionsTitle: "Panagudi and the nearby places our online tutors serve",
  regionsIntro:
    "Since lessons are online, this list is not about tutor travel. It shows how each place's schooling and daily routines can influence when a lesson works best.",
  regions: [
    { name: "Panagudi town centre", note: "The bus-stand and market area, where most families are in trade or small manufacturing and favour evening lessons." },
    { name: "Pushpavanam", note: "A neighbouring settlement within the town panchayat, with school-going children who travel by bus and attend tuition in the evening." },
    { name: "Thalavaipuram", note: "Another locality of the panchayat, close to the farm lands where seasonal work affects family time." },
    { name: "Sivakamipuram on NH 44", note: "A village on the old national highway to Kanyakumari, convenient for families who work in different towns along the road." },
    { name: "Mahendragiri side", note: "The area towards the ISRO facility, home to technical staff whose children often come from CBSE or international backgrounds." },
    { name: "Kudankulam and Radhapuram", note: "Housing for the nuclear power complex and nearby villages, with highly mobile professional families." },
    { name: "Nanguneri", note: "A taluk town with an industrial park and growing school options, though without confirmed IB or IGCSE teaching." },
    { name: "Valliyur", note: "A railway and trading town to the north-east with coaching centres focused on state-board and entrance exams." },
    { name: "Nagercoil", note: "The nearest large town in Kanyakumari district, roughly forty minutes to an hour away, often used for shopping and health care." },
    { name: "Tirunelveli", note: "The district headquarters about an hour and a half away, where the biggest coaching and college markets are found." },
  ],

  schoolDisclaimer:
    "No school in Panagudi is described as an IB or Cambridge/Edexcel IGCSE school because we could not confirm one. Schools in other cities listed below are shown only as options some families consider and have no link to IB Gram.",
  schoolClusters: [
    {
      city: "Panagudi and Tirunelveli district",
      note: "Schooling here follows the Tamil Nadu State Board, with matriculation and CBSE options. We found no IB or IGCSE campus in Panagudi, so students on an international course learn at home with an online tutor.",
      schools: [],
    },
    {
      city: "Nearby: Madurai",
      note: "Madurai is the closest big Tamil Nadu city with international-curriculum schools, about three to four hours by road, and a possible destination for a boarding or relocation decision.",
      schools: ["Velammal Global School", "Vikaasa World School", "TIPS Globeducate Madurai"],
    },
    {
      city: "Nearby: Thiruvananthapuram",
      note: "Kerala's capital is roughly two hours from Panagudi and has an IB and Cambridge school, popular with families linked to space and nuclear establishments.",
      schools: ["Trivandrum International School"],
    },
    {
      city: "Nearby: Chennai",
      note: "Chennai is a long train journey away but has the state's largest group of IB and IGCSE campuses.",
      schools: ["APL Global School", "Gateway International School", "CPS Global School"],
    },
  ],

  modesIntro:
    "Three patterns fit most Panagudi households. The class is always a live private video call; the pace and purpose differ.",
  modes: [
    {
      title: "Standing weekly tutor",
      description:
        "One teacher, one regular hour, following the syllabus in sequence and marking photographed homework between classes.",
      bullets: [
        "Suitable for IB, MYP and IGCSE",
        "Whiteboard open throughout the class",
        "Comments returned on every worksheet",
        "A tutor who learns how your child thinks",
      ],
    },
    {
      title: "International course beside a state-board school",
      description:
        "For students in a Tamil Nadu board, matriculation or CBSE school who study an IB or IGCSE syllabus in the evenings.",
      bullets: [
        "Content follows the international course only",
        "Avoids quarterly and half-yearly exam weeks",
        "A short monthly progress note",
        "Prepares for a possible later move to an international school",
      ],
    },
    {
      title: "Pre-exam concentrated block",
      description:
        "A compact run of classes built around timed papers, correction and retesting in the weeks before the papers.",
      bullets: [
        "Marked against the official mark schemes",
        "Recurring errors tracked each week",
        "Starts about five weeks before papers",
        "Planned around monsoon showers and festival weeks",
      ],
    },
  ],

  sections: [
    {
      heading: "Does Panagudi have an IB or IGCSE school?",
      paragraphs: [
        "No school in Panagudi, nor in Nanguneri, Valliyur or Radhapuram, could be confirmed as teaching the IB or Cambridge or Edexcel IGCSE. The picture here is of State Board schools in Tamil or English medium, a number of long-established matriculation schools run by religious and community trusts, and some CBSE schools linked to the nuclear and space establishments.",
        "Because of those establishments, the district has a strikingly mobile professional population. A scientist from Kolkata, an engineer from Gujarat and an administrator from Hyderabad may live on the same campus road in the Kudankulam township, and each has a child who started school somewhere else. Such families are well aware of the IB and Cambridge and ask why nothing is offered nearby.",
        "The honest reply is that the closest places are Madurai, Thiruvananthapuram and Chennai. For a child already deep into a course, shifting city is rarely simple, so an online one-to-one tutor becomes the practical choice.",
        "If you hear that a school nearby has recently been authorised, please check the IB's school finder and the Cambridge directory yourself. They are updated more reliably than any tutoring page.",
      ],
      bullets: [
        "No IB or IGCSE school confirmed in Panagudi or neighbouring taluks",
        "Local schooling: Tamil Nadu State Board, matriculation and CBSE",
        "Many families are transferred scientists, engineers and administrators",
        "Check official IB and Cambridge directories for new schools",
      ],
    },
    {
      heading: "Tamil Nadu State Board, CBSE, IB and IGCSE: how do the four compare?",
      paragraphs: [
        "None of these is above the rest. Each prepares a child for a different future, and in Tamil Nadu the first thing to grasp is how closely the state system is linked to state-run counselling for engineering and medical seats.",
        "State Board students prepare for the Class 12 public exam and, for most professional courses, NEET or counselling-based admission. CBSE offers national exams and a smoother path to institutions outside the state. IGCSE builds applied skills over two years in tiered papers. IB asks for six subjects, a long essay and community work, and rewards an all-round student with strong writing.",
        "For a child certain to study in Tamil Nadu, the state board with good coaching is often the direct route. International programmes begin to pay off when a family expects a transfer, aims at a foreign university or finds that the child learns best by explaining.",
      ],
      table: {
        caption: "Four routes compared for a Panagudi family",
        columns: ["Point", "Tamil Nadu State Board", "CBSE", "IB", "IGCSE"],
        rows: [
          ["Available around Panagudi", "Yes, everywhere", "A few schools", "No school found", "No school found"],
          ["Assessment style", "Public exams in Class 10 and 12", "Board exams with application", "Exams, coursework, essay", "Tiered external papers"],
          ["Entrance route", "State counselling, NEET, JEE", "National exams, CUET", "AIU equivalence, then CUET or direct entry", "Class 11 at any board, or A Level"],
          ["Studying from Panagudi", "School plus coaching", "School plus coaching", "Online tutor or relocation", "Online tutor, private entry"],
        ],
      },
    },
    {
      heading: "How much does IB or IGCSE home tuition cost in Panagudi?",
      paragraphs: [
        "We do not post prices because one number would mislead. A short conversation about the child, the course and the exam month comes first, then a written quote, and you decide once you have it.",
        "The biggest factors are subject and level, since Higher Level Physics needs a more specialised teacher than primary reading. Next is a tutor's record with the exact syllabus. Then frequency: a single hour a week costs a different amount from four sessions in the last month. Finally, the shape of the plan, steady across a year or concentrated before papers.",
        "What Panagudi families do not pay for is equally relevant: no bus fare to Nagercoil, no petrol on the highway to Tirunelveli, no hostel for a child sent to study in Madurai and no premium for a tutor willing to leave a city.",
        "The first lesson is a complete class at no charge, so the family sees the teaching style and the child's comfort with video before spending anything.",
      ],
      bullets: [
        "Rate follows level, subject, experience and frequency",
        "A written quote arrives before you book",
        "No travel or hostel cost",
        "Free first class",
      ],
    },
    {
      heading: "Online tutor, coaching centre, local teacher or self-study: which works in Panagudi?",
      paragraphs: [
        "Coaching in Nagercoil, Valliyur and Tirunelveli is strong on NEET, JEE and board marks. Ask about IGCSE Biology and you will hear that the centre does not take the syllabus, or be offered a state-board class that differs in content.",
        "A local teacher can be superb at general Science and Mathematics, but may never have worked from an IB subject guide or a Cambridge examiner report. Self-study with past papers works for disciplined students, though errors can persist when nobody marks the work.",
        "An online tutor who has taught your child's exact course is the nearest thing to a school class. The table compares the four options.",
      ],
      table: {
        caption: "Ways to study an international course from Panagudi",
        columns: ["Option", "Knows the syllabus?", "Marks to official schemes?", "Practical points"],
        rows: [
          ["Online one-to-one tutor", "Yes, matched on board and level", "Yes", "Needs a laptop and steady internet"],
          ["Coaching centre", "Rarely teaches IB or IGCSE", "Not applicable", "Fixed batches, travel to a larger town"],
          ["Local private teacher", "Depends on background", "Seldom", "Flexible, small pool"],
          ["Self-study", "From the specification and past papers", "No", "No cost, slow correction"],
        ],
      },
    },
    {
      heading: "When are the exams, and how do two monsoons and festivals fit in?",
      paragraphs: [
        "The IB Diploma is sat in May and November, and Cambridge and Edexcel IGCSE series fall in spring, summer and autumn. Most Indian candidates sit in May, so the last revision weeks land in April and May, which are warm and humid in the deep south though less extreme than the Deccan.",
        "Panagudi receives both monsoons. The southwest monsoon from June brings strong winds off the Ghats, the reason for the nearby wind farms, and the northeast monsoon between October and December brings the heavier rain. Roads flood, power can fail and schools close for a day or two at a time. Deepavali, Pongal in January and Tamil New Year in April are the major festival breaks, with local temple festivals through the year.",
        "We plan heavy content teaching for the calmer months, treat the northeast monsoon as a period for lighter consolidation and keep a few spare weeks in the schedule for the unforeseen.",
      ],
      table: {
        caption: "Year plan for a Panagudi student aiming at the May session",
        columns: ["Period", "Study priority", "Local factor"],
        rows: [
          ["June to August", "Begin the course, set routines", "Strong southwest winds; steady power in most weeks"],
          ["September to October", "Core topics, first assessments", "Northeast monsoon begins; Deepavali"],
          ["November to January", "Practice papers, internal drafts", "Heaviest rain, then Pongal"],
          ["February to March", "Mock exams and correction", "Dry weeks, school half-yearly tests"],
          ["April to May", "Timed papers and final revision", "Warm and humid; Tamil New Year"],
        ],
      },
    },
    {
      heading: "What can a Panagudi student do after IB or IGCSE?",
      paragraphs: [
        "The route depends on the certificate, the subjects and the destination. Understanding the paperwork in Class 11 is much easier than doing so in Class 12.",
        "Indian public universities expect IB Diploma holders to present an equivalence certificate from the Association of Indian Universities, and a growing number of private universities consider IB scores directly. CUET-UG sets its policy for international boards annually. IGCSE students normally enter Class 11 at a CBSE, ICSE or IB school, or move to A Level.",
        "Tamil Nadu runs its own engineering counselling and medical admission process, and the treatment of international-board students has differed from that of state-board students, so confirm the current rules each year. For NEET-UG and JEE Main, the subject mix matters: Biology for medicine, Mathematics for engineering, with Physics and Chemistry in both.",
        "Overseas, UCAS serves the UK, direct applications serve Canada and Australia and the Common Application serves the United States. Families linked to the space and nuclear sectors often look at universities with strong physics and engineering departments. Tutors build the subject strength on which these applications rely.",
      ],
      bullets: [
        "AIU equivalence for Indian public universities",
        "Check CUET-UG, JEE Main, NEET-UG and Tamil Nadu counselling rules yearly",
        "UCAS, direct applications and the Common Application abroad",
        "Select Diploma subjects with the target degree in mind",
      ],
    },
    {
      heading: "What does a Physics or Mathematics lesson look like on video?",
      paragraphs: [
        "A shared digital whiteboard replaces the classroom board. The tutor writes, the student works on paper beside the laptop, and a photograph of the finished page goes back to the tutor so that handwriting and layout can be corrected, not just the answer.",
        "The Diploma offers two Mathematics courses. Analysis and Approaches suits students who like calculus and algebra and may study engineering or physics. Applications and Interpretation focuses on data and modelling and suits business, biology and social science plans. Families from technical backgrounds sometimes assume the first is automatic, so we discuss the degree the student wants before the choice is locked.",
        "Physics gets particular attention in this district. Tutors work through mechanics, fields and nuclear topics as timed numerical problems, teach graph skills and error analysis for the internal investigation and make sure the student can explain a derivation, not only quote it. The investigation itself is written by the student.",
        "Power can fail during the northeast monsoon. A charged laptop and a phone hotspot are sensible back-ups during timed papers.",
      ],
    },
    {
      heading: "Is IGCSE Core or Extended the right tier for a Panagudi student?",
      paragraphs: [
        "Core and Extended are separate question papers, not two ways of marking one paper. Core stops at grade C and Extended reaches A star, so the tier sets the ceiling.",
        "A student planning for the IB Diploma, A Level sciences or a demanding engineering stream should usually take Extended in Mathematics and the sciences. Core suits a subject that is a real difficulty or one taken for breadth. After a few months of lessons, a tutor can review the tier and suggest a change while entries are still open.",
        "Subject choice completes the plan. English and Mathematics are close to universal, and most students add two or three sciences and one subject from business or environmental management. Tamil as a second language is a dependable scoring option for local students.",
        "Cambridge calls its tiers Core and Extended while Edexcel uses Foundation and Higher. Tell us which board your child is entered with and the tutor will be matched to it.",
      ],
    },
  ],

  process: [
    { title: "Send the details", description: "Class, board, subject, level and sitting, sent by message." },
    { title: "See a match", description: "A tutor with experience of that syllabus is proposed." },
    { title: "Try a free class", description: "One whole lesson, free, with no pressure." },
    { title: "Agree in writing", description: "One short note carries the rate, timings and a month-one plan." },
    { title: "Study and adjust", description: "Classes run weekly, summaries follow, and a tutor swap is available." },
  ],

  whyPoints: [
    { title: "Chosen for the course", description: "The tutor has already taught your child's subject, level and board." },
    { title: "Suited to mobile families", description: "A posting change between Kudankulam, Mahendragiri or elsewhere never interrupts the lessons." },
    { title: "Plain about local schools", description: "No Panagudi school is called IB or IGCSE, because none was found." },
    { title: "Notes parents can read", description: "Each class closes with a short written record." },
    { title: "A free first lesson", description: "See the teaching first." },
    { title: "Honest coaching", description: "Assessed work always stays with the student." },
  ],

  tutorsIntro:
    "Every tutor works from within India on its clock, so Panagudi families need no conversions. A profile reaches you before the trial, and pairing weighs course, level and manner of teaching.",

  faqs: [
    { question: "Does anyone come to the house for tuition in Panagudi?", answer: "No teacher from IB Gram makes house calls in Panagudi. Face-to-face lessons at home are limited to Gurugram and parts of Delhi NCR. Here, the lesson reaches the house through the laptop screen: your child keeps to the usual study corner while a private tutor teaches live. That also frees you to pick the strongest subject specialist in the country." },
    { question: "Which school near Panagudi teaches the IB?", answer: "We found none in Panagudi, Nanguneri, Valliyur or Radhapuram; schools there follow the state board, matriculation or CBSE. Since new authorisations appear from time to time, the IB's public school finder is the place to verify any rumour. Meanwhile an IB student from here studies with an online tutor, or relocates to Madurai, Thiruvananthapuram or Chennai." },
    { question: "Is private IGCSE tuition from home possible for my child?", answer: "Yes, over video. We pair your child with a teacher experienced in the relevant Cambridge or Edexcel subject, and the two meet at times you agree. Because nobody has to drive to Panagudi, you can ask for someone who has taught a particular tier or exam series, which a general local tutor usually cannot offer." },
    { question: "Where can a private candidate from here write IGCSE papers?", answer: "Papers are written at an approved centre that accepts outside candidates. For this district that probably means Madurai, Thiruvananthapuram or Chennai. Both boards put out centre lists and deadlines long before each series, so contact a centre early about practical components and fees. Our tutors handle preparation, and the family handles entry." },
    { question: "How are fees set and what does the free class include?", answer: "The opening class is a proper lesson with a working tutor at no charge. Fees afterwards depend on how experienced the tutor is, which subject and level is being taught, and how many hours a week are planned. You get the figure in writing before agreeing. Travel is not a cost, which counts for a lot when Nagercoil and Tirunelveli are far." },
    { question: "What do students in Panagudi study most?", answer: "Physics tops the list, with Mathematics, Chemistry, Biology and Computer Science after it, a pattern shaped by technical households around Kudankulam and Mahendragiri. Economics and Business Management come next. A small number of parents ask about Theory of Knowledge, where tutors can talk through ideas but the essay stays the student's own work." },
    { question: "Can an IB Diploma student still enter NEET or JEE?", answer: "Frequently, subject to the combination taken and to rules the exam agencies update each year. Physics, Chemistry and either Biology or Mathematics are normally expected, and many institutions ask for an equivalence certificate. Tamil Nadu counselling may treat non-state-board candidates differently, so read the current notice carefully before Class 12 begins." },
    { question: "Do the monsoon rains interfere with the lessons?", answer: "Now and then. October to December rainfall can flood lanes or knock out power. Video lessons survive that better than travel would, yet a blackout still ends a call. An inverter or hotspot helps. Any class lost to weather is rebooked free, and the summary note records exactly where the session stopped." },
    { question: "Will a tutor draft my son's Extended Essay?", answer: "No, and no honest tutor should. What a tutor can do is explain the assessment criteria, challenge a vague research question and give general comments on structure. Every sentence and data point must come from the student. Doing it this way keeps the submission authentic and spares the Diploma from a misconduct ruling." },
    { question: "When should a child begin preparing for IGCSE?", answer: "Class 8 or 9 is a sensible start, because it leaves time to shift from learning answers by heart to explaining reasoning. The first term stays gentle, covering command words and core skills, and timed past papers arrive later. One trial class will tell you how your child copes and how many weekly hours make sense." },
    { question: "How strong a connection do we need at home?", answer: "Roughly 5 Mbps that stays stable. Fibre or good Wi-Fi is better than a mobile signal, and a second phone hotspot is a good safety net. If the line fails, minutes lost are given back in a later slot, and the written note logs what had been covered up to the break." },
    { question: "We speak Tamil at home. Will English-only lessons be a problem?", answer: "Not for most children, though it takes a few weeks to settle. Teaching is in English because exams are, and many of our tutors can also explain a hard idea in Tamil or Hindi. We match with sensitivity to the transition, and a language course such as IB Tamil B or IGCSE English as a Second Language can run in parallel." },
    { question: "What weekly schedule works best?", answer: "For an ordinary term, one hour a week plus homework is a sound base. Closer to the papers, two to four lessons weekly for a month is usual. Your tutor looks at past-paper marks, proposes adjustments, and you may alter the plan by sending written notice at any time." },
    { question: "Which IGCSE boards are covered?", answer: "Cambridge International and Pearson Edexcel, plus AS and A Level as context. Because syllabus codes, tier names and question styles are different, we ask which board your child has entered. The tutor is picked for that board, and a change of board simply means a fresh match." },
    { question: "How can I get started today?", answer: "WhatsApp +91 7439 368 115 or email support@ibgram.com with your child's class, board, subject and a time that suits. We usually reply with a tutor suggestion in a few days and schedule the trial. You are not bound to anything, and a different tutor can be requested before any payment." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "The full list of cities we teach in online." },
    { label: "IB tutors", href: "/ib-tutors/", description: "How our IB tutoring is organised." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Help with Cambridge and Edexcel IGCSE." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups and the DP core explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria, ATL skills and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Inquiry-led help for younger children." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "Both Mathematics courses at both levels." },
    { label: "Meet the tutors", href: "/tutors/", description: "Browse specialist IB and IGCSE profiles." },
    { label: "Contact us", href: "/contact-us/", description: "Book a trial through WhatsApp or email." },
    { label: "IB and IGCSE tutors in Tirunelveli", href: "/tirunelveli/", description: "Our page for the district headquarters." },
    { label: "IB and IGCSE tutors in Nagercoil", href: "/nagercoil/", description: "Our page for the nearby Kanyakumari district town." },
    { label: "IB and IGCSE tutors in Madurai", href: "/madurai/", description: "Our page for the closest big Tamil Nadu city." },
  ],

  closingHeading: "Begin with a free class from Panagudi",
  closingBody:
    "Name the programme, subject and exam sitting and we will put forward a tutor with experience of the course. Reach support@ibgram.com or WhatsApp +91 7439 368 115; nothing is charged for the opening lesson.",
};
