import type { CitySeoPage } from "../types";

/**
 * Dumraon (Buxar district, Bihar). No IB or Cambridge/Edexcel school confirmed; a school with "Cambridge" in
 * its name surfaced in search but is not treated as evidence. stripSchools empty; clusters use Varanasi,
 * Delhi and Mussoorie names recorded on neighbouring pages. Online-only delivery.
 */
export const dumraon: CitySeoPage = {
  slug: "dumraon",
  countryName: "Dumraon",
  countryNameLong: "Dumraon, Bihar",
  demonym: "Dumraon",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Early evenings and Sunday mornings, lightened around Chhath, the wedding months and Ganga or Sone flood weeks",
  lastUpdated: "2026-09-21",
  state: "Bihar",
  stateCode: "IN-BR",
  geo: { latitude: 25.5530, longitude: 84.1490 },
  alternateNames: ["Dumraon Buxar", "Dumraon Bihar", "Dumraon Raj"],
  wikipedia: "https://en.wikipedia.org/wiki/Dumraon",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Dumraon | Private Online Tuition",
  metaDescription:
    "Private online IB and IGCSE tutors for Dumraon, Buxar district: DP, MYP, PYP, Cambridge and Edexcel taught one to one, with a free trial lesson first.",
  h1: "IB and IGCSE Tutors and Private Online Tuition in Dumraon",
  heroEyebrow: "IB & IGCSE HOME TUITION FOR DUMRAON, DELIVERED ONLINE",
  heroSubtitle:
    "Dumraon, the birthplace of shehnai maestro Bismillah Khan, is a small Buxar-district town where no IB or Cambridge school came up in our checks. Parents who want private tuition at home for an international course therefore get one-to-one lessons by video, because IB Gram tutors teach from other Indian cities and never turn up at Dumraon doors.",
  primaryKeyword: "IB and IGCSE tutors in Dumraon",
  imageAltText: "Dumraon student practising IB Economics diagrams on a laptop with a tutor during a live online lesson",
  secondaryKeywords: [
    "IB tutor Dumraon",
    "IGCSE tutor Dumraon",
    "IB home tuition Dumraon",
    "IGCSE home tuition Dumraon",
    "IB private tuition Dumraon",
    "IB Maths tutor Dumraon",
    "IGCSE Maths tutor Dumraon",
    "IB Physics tutor Dumraon",
    "IB Chemistry tutor Dumraon",
    "IB Biology tutor Dumraon",
    "IB DP tutor Dumraon",
    "IB MYP tutor Dumraon",
    "IB PYP tutor Dumraon",
    "IGCSE online tuition Dumraon",
    "online IB tutor Buxar district",
    "IB tutor Bihar online",
    "IGCSE tutor Dumraon Bihar",
    "Cambridge IGCSE tutor Dumraon",
    "Edexcel IGCSE tutor Dumraon",
    "IB Economics tutor Dumraon",
    "online IGCSE tutor Bihar",
  ],

  heroTrustPoints: [
    "A tutor picked for the exact IB course or IGCSE code your child is working on",
    "Dumraon lessons are online only; in-person visits run just in Gurugram and parts of Delhi NCR",
    "Try one lesson free, then read the rate in writing",
    "No ties to any school, exam board or the IB organisation",
  ],
  heroStats: [
    { value: "PYP to DP", label: "IB stages taught" },
    { value: "Two boards", label: "Cambridge and Edexcel IGCSE" },
    { value: "One to one", label: "Live, from your own home" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "Dumraon today: where international syllabi fit in",
    paragraphs: [
      "Dumraon lies on the old Grand Trunk corridor in western Bihar, with a railway station on the Patna to Mughalsarai line, a palace that recalls the Dumraon Raj, and the Bihariji temple at the heart of town. Its schools follow the Bihar School Examination Board or CBSE. A search turned up a school with Cambridge in its name, but a name alone is no proof of a Cambridge curriculum, so we have not counted it.",
      "Demand for international tutoring here is small but real. A few families have a parent in a city job in Delhi, Pune or overseas, and are enrolling children in online IGCSE or IB courses. Some plan to send a teenager to a boarding school elsewhere. Others simply want the stronger English and analytical writing these syllabi demand, and look for a tutor to build it from home.",
      "It helps to be exact about the words home tuition. No IB Gram tutor comes to a house in Dumraon. Visits in person happen only in Gurugram and some parts of Delhi NCR. For Dumraon the service is live online lessons, your child at their own desk, the tutor on screen, sharing a digital board and a written summary afterwards.",
      "We stand apart from the IB organisation, Cambridge, Pearson and every school mentioned here. Our tutors never draft an Internal Assessment, Extended Essay, Theory of Knowledge essay or piece of coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP, and Cambridge or Pearson Edexcel IGCSE",
      "Lessons on Indian Standard Time, without a trip to Buxar or Patna",
      "Free first lesson and a rate confirmed in writing",
      "A brief summary after every lesson",
      "No visits to houses in Dumraon, only live online teaching",
    ],
  },

  programmesIntro:
    "An IB student near Dumraon may be at any stage of the continuum. Each card describes the programme and the sort of tutoring that helps a child at that point.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-11",
      description:
        "Young learners explore big ideas through questions and small projects instead of memorising chapters. The Exhibition at the close of the stage pulls their skills together in a joint inquiry.",
      countryNote:
        "Children here usually speak Bhojpuri or Hindi at home, so a brief weekly session of English stories and number talk gives them a relaxed second-language footing.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are judged against published criteria, and classroom units tie subjects together. A self-chosen Personal Project rounds off the final year.",
      countryNote:
        "Students from a BSEB background tend to know their facts but find open tasks strange, so early lessons rehearse decoding a task and planning a response.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Over two years a student takes six subjects, three at Higher Level, together with Theory of Knowledge, an Extended Essay and CAS, before external exams in May or November.",
      countryNote:
        "A Dumraon candidate registers through a school or centre in another city, leaving the weekly online tutor as the nearest specialist for Higher Level Mathematics or Physics.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A pair of Diploma courses runs beside a career-linked qualification, a reflective project and language study, aimed at practical routes into work or university.",
      countryNote:
        "No school near Dumraon runs it that we know of. We coach the academic courses where a student is registered and suggest a better route if one fits.",
    },
  ],

  subjectsIntro:
    "These Diploma courses come up most in enquiries from Bihar. The registering school or centre confirms the syllabus version and level, and lessons are built to match.",
  subjects: [
    { name: "Mathematics: Analysis and Approaches", levels: "SL and HL", description: "Calculus, sequences and proof-style reasoning, the natural course for students eyeing engineering or statistics." },
    { name: "Mathematics: Applications and Interpretation", levels: "SL and HL", description: "Modelling with data and technology, a fit for economics, geography and social science." },
    { name: "Physics", levels: "SL and HL", description: "Mechanics through fields, with data-booklet fluency and careful planning of the investigation." },
    { name: "Chemistry", levels: "SL and HL", description: "Structure, energetics and organic mechanisms, with neat working for calculation marks." },
    { name: "Biology", levels: "SL and HL", description: "Genetics, ecology and physiology, written in examiner-friendly command-term language." },
    { name: "Economics", levels: "SL and HL", description: "Market failure, growth and development, drawing on Bihar's own agriculture and migration story." },
    { name: "Business Management", levels: "SL and HL", description: "Small-business and trading case studies, with marketing and finance units." },
    { name: "Geography", levels: "SL and HL", description: "Rivers, floods and population, using the Ganga plain as a live example." },
    { name: "History", levels: "SL and HL", description: "Source evaluation and essay plans across twentieth-century topics." },
    { name: "Environmental Systems and Societies", levels: "SL", description: "Water, soil and crop systems, relevant to the flood-prone Gangetic plain." },
    { name: "Computer Science", levels: "SL and HL", description: "Logic, algorithms and basic programming." },
    { name: "English A: Language and Literature", levels: "SL and HL", description: "Reading, comparing and discussing texts of many kinds." },
    { name: "Hindi B", levels: "SL and HL", description: "A steady route for second-language practice in all four skills." },
    { name: "Theory of Knowledge", levels: "Core", description: "Discussion of how knowledge is built; every essay stays the student's own." },
  ],
  igcseSubjectsIntro:
    "IGCSE papers sit in the May or June and October or November windows, with Edexcel adding January for certain subjects. Below are the courses Bihar families enquire about on both boards.",
  igcseSubjects: [
    { name: "Mathematics (0580 / 4MA1)", levels: "Core and Extended", description: "Ratio, equations, shapes and probability, practised paper by paper." },
    { name: "Additional Mathematics", levels: "Extended route", description: "Extra calculus and function work for students who plan to take IB Mathematics AA." },
    { name: "Physics", levels: "Core and Extended", description: "Energy, waves, electricity and the nucleus, including practical-style questions." },
    { name: "Chemistry", levels: "Core and Extended", description: "Periodicity, quantities, rates of reaction and carbon compounds." },
    { name: "Biology", levels: "Core and Extended", description: "Cells, nutrition, genetics and the environment." },
    { name: "Agriculture", levels: "Single tier", description: "Where a board offers it, crops and soils in a region built on farming." },
    { name: "Geography", levels: "Single tier", description: "Rivers, settlement and development with map and data skills." },
    { name: "Economics", levels: "Single tier", description: "Everyday economics: prices, jobs, trade and taxes." },
    { name: "Business Studies", levels: "Single tier", description: "Running a business, from marketing to cash flow." },
    { name: "English as a First Language", levels: "Single tier", description: "Composition, comprehension and summary writing." },
    { name: "English as a Second Language", levels: "Core and Extended", description: "Listening, speaking, reading and writing in balance." },
    { name: "Hindi as a Second Language", levels: "Single tier", description: "Offered by some boards and series, with the code checked before we begin." },
  ],

  regionsTitle: "Dumraon neighbourhoods and nearby places we teach online",
  tutorsIntro:
    "Dumraon students meet tutors on live video, each based in India and listed with the programme or specification they have taught. A free first lesson lets you judge the fit.",
  regionsIntro:
    "Any Dumraon home with a dependable connection can take part. The places below are ones families mention, with notes on local habits that affect timing.",
  regions: [
    { name: "Dumraon railway station area", note: "Home to rail staff and small traders. Train timings shape evenings, so lessons avoid the main passenger hours." },
    { name: "Dumraon Raj palace neighbourhood", note: "The old royal quarter, with older households who often care about English and degree prospects for grandchildren." },
    { name: "Bihariji temple side", note: "The religious centre of town, busy on festival days, when lessons are moved rather than squeezed in." },
    { name: "Main bazaar and Thana Road", note: "Crowded with shops and traffic, so a quiet online lesson at home beats trying to study in town." },
    { name: "Buxar Road side", note: "The approach to Buxar, about 25 kilometres away, used by families who shop or seek medical care there." },
    { name: "Arrah Road side", note: "The route east towards Arrah and on to Patna, taken by parents who work in the state capital." },
    { name: "Bikramganj side", note: "Across the district boundary to the east, where the Sone canal network shapes farm life." },
    { name: "Rajpur and Nawanagar side", note: "Neighbouring blocks where farming families are often first-generation English learners." },
    { name: "Villages along the railway line", note: "Places where mobile data is uneven; a second network or hotspot is agreed before term starts." },
  ],
  schoolClusters: [
    {
      city: "Dumraon itself",
      note: "No school in the town could be confirmed as an authorised IB World School or an approved Cambridge or Edexcel centre. A school carrying Cambridge in its name was not counted, as the name proves nothing about the syllabus.",
      schools: [],
    },
    {
      city: "Nearby: Buxar",
      note: "The district headquarters has its own page on this site, and its schools follow Bihar Board or CBSE, so it does not solve the problem either.",
      schools: [],
    },
    {
      city: "Nearby: Varanasi",
      note: "Some 140 kilometres away by road, Varanasi has a school that other pages on this site record as running an international curriculum, and is a familiar destination for day or boarding study.",
      schools: ["Sunbeam International School, Varuna"],
    },
    {
      city: "Nearby: Delhi and the Mussoorie hills",
      note: "Bihar families who relocate or board a child often look to Delhi's established IB schools or to the hill boarding belt above Dehradun.",
      schools: ["Vasant Valley School, Delhi", "Sanskriti School, Delhi", "Woodstock School, Mussoorie"],
    },
  ],
  schoolDisclaimer:
    "Schools are named only to show where confirmed international curricula exist outside Dumraon, using public information. IB Gram is independent and has no affiliation with any of them, the IB, Cambridge or Pearson.",

  modesIntro:
    "Since nobody travels to Dumraon, these modes describe the forms an online lesson can take.",
  modes: [
    {
      title: "Steady weekly lessons online",
      description: "One regular live session with a single tutor, joined from a laptop at your own desk.",
      bullets: [
        "Digital whiteboard with worked solutions",
        "A fixed day and hour agreed with the family",
        "Short summary sent when the class ends",
      ],
    },
    {
      title: "Pre-exam push",
      description: "A run of closely spaced lessons in the weeks leading to the IB or IGCSE papers.",
      bullets: [
        "Past papers sat under time, then dissected",
        "Error log updated every week",
        "Dates kept clear of Chhath and flood weeks",
      ],
    },
    {
      title: "Two-student sessions",
      description: "Two learners on an identical course split one slot and its cost.",
      bullets: [
        "Same board, level and subject only",
        "Well suited to revision together",
        "Either can go back to a private slot",
      ],
    },
  ],

  sections: [
    {
      heading: "Who in Dumraon actually needs this, and what do they lack?",
      paragraphs: [
        "Think of three households. In the first, a father works in a Delhi or Bengaluru office and the family has chosen an online international school for a daughter who will study abroad. She has recorded lessons and a portal but nobody to ask when a Physics idea does not click. A tutor who has taught that very course fills that gap.",
        "In the second, a teenager boards at a school in Dehradun or Mussoorie, and comes home to Dumraon for the long winter and summer breaks. Two months away from the teaching staff can erode progress, and a weekly online tutor keeps the IB Diploma or IGCSE course moving.",
        "In the third, a family has no plan to leave Bihar but wants their child to write and reason in English more confidently before applying to universities in Delhi or Patna. They choose IGCSE or MYP-style tutoring to build those habits.",
        "Nobody nearby can teach an IB Internal Assessment rubric or explain an Edexcel mark scheme. General tutors here are skilled at BSEB and CBSE preparation, and they should be respected for it, but this is a different craft, which is why we pair by course code.",
      ],
      bullets: [
        "Online international school students with no local teacher",
        "Boarders home for long breaks",
        "Families building English and analytical writing skills",
        "Children of migrant professionals in other cities",
      ],
    },
    {
      heading: "BSEB, CBSE, IB or IGCSE: what changes for a Dumraon student?",
      paragraphs: [
        "Bihar School Examination Board papers reward knowledge of the prescribed text, and CBSE adds more application questions under a national scheme. The IB and IGCSE reward explaining, evaluating and applying knowledge to unfamiliar situations, and expect students to write at length in English.",
        "That shift can feel harsh. A student who scores well on BSEB recall may lose marks on an IGCSE data question because they describe instead of analyse. The IB Diploma adds independent research and internal assessments, which need sustained effort over months, not just revision before exams.",
        "Yet the change is manageable with practice. We start with the student's current strengths and build the new habits gradually, using past questions that resemble what the examiner will set.",
        "The table lines up the main points so families can see where tutoring help matters most.",
      ],
      table: {
        caption: "Four syllabi as a Dumraon family meets them",
        columns: ["Feature", "BSEB", "CBSE", "IB Diploma", "IGCSE"],
        rows: [
          ["What earns marks", "Recall of the set text", "Recall plus application", "Analysis, evaluation and independent work", "Application and clear explanation in tiered papers"],
          ["Main exam window", "February to March", "February to March", "May, sometimes November", "May or June, October or November"],
          ["Language", "Hindi or English", "English or Hindi", "English plus a second language", "English plus language choices"],
          ["Present in Dumraon", "Yes", "In some schools", "Via online tutor only", "Via online tutor only"],
          ["Typical tutoring gap", "More practice papers", "Application skill", "IA planning and HL depth", "Tier choice and paper technique"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Dumraon, and why is there no price list?",
      paragraphs: [
        "A printed price would be wrong for most families, because the rate moves with the student. We send a rate in writing after the free lesson, and nobody is asked to pay or commit before reading it.",
        "Four things set the figure. The course matters, since Higher Level Chemistry needs a rarer tutor than a Standard Level language. The weekly hours matter, because three lessons cost more than one. Tutor experience matters, from a recent graduate of the syllabus to a teacher with years behind them. And sharing matters, since a paired slot lowers each family's bill.",
        "Online delivery also saves money that families in a small town will recognise. There is no train fare to Patna or Varanasi, no rented room in a bigger city and no school day lost to a journey. A lesson that must be cancelled simply moves to another slot.",
        "We suggest beginning with one lesson a week and reviewing after a month, then adding hours ahead of examinations if needed.",
      ],
    },
    {
      heading: "How does Dumraon's year, from Chhath to the floods, affect exam preparation?",
      paragraphs: [
        "Chhath Puja is the great event of the Bihari year, in October or November, when families travel home, observe fasts and gather at river or pond banks. Many students are away or busy for a week, and the IB November session and IGCSE autumn series fall close by, so revision must be finished early.",
        "The monsoon brings the Ganga and Sone rivers up between July and September. Low fields flood, roads become difficult and power supply can fail. Summer from April to June is very hot, with temperatures that can touch 45 degrees and power cuts during the day. Winter fog from December to January slows trains and buses.",
        "The wedding months from November to February crowd the calendar with family duties, and Holi, Diwali and Eid add their own pauses. We sit down with each family at the start and mark the dates when a student simply cannot study.",
        "The table below joins the local calendar to exam windows.",
      ],
      table: {
        caption: "Dumraon calendar beside IB and IGCSE milestones",
        columns: ["Months", "Local conditions", "Academic milestone", "Planning note"],
        rows: [
          ["December to February", "Fog, cold, wedding season", "Mock papers for May candidates", "Fix mock dates early and work in daylight hours"],
          ["March to April", "Holi, rising heat", "IB internal assessment deadlines", "Finish drafts before the hot weeks"],
          ["May to June", "Extreme heat, power cuts", "IB May session and IGCSE summer series", "Charged devices and a hotspot on hand"],
          ["July to September", "Monsoon, river floods", "New course content begins", "Build the weekly rhythm; keep offline notes"],
          ["October to November", "Chhath, Diwali, travel", "IGCSE autumn series, IB November session", "Complete revision before Chhath"],
        ],
      },
    },
    {
      heading: "Online tutor, local coaching, private teacher or self-study: how do they compare in Dumraon?",
      paragraphs: [
        "Dumraon and Buxar have coaching classes for board subjects and for competitive exams, and many students go to Patna for JEE, NEET or civil-service foundation courses. They are built for those goals and do them well. None of them follows an IB rubric or an IGCSE mark scheme.",
        "Private teachers in town are often school staff who tutor after hours. They can explain a BSEB chapter clearly, yet very few have taught IB Physics HL or Cambridge Additional Mathematics. Self-study works for a disciplined older student, but fails at the moment when a doubt needs a person.",
        "An online specialist brings syllabus-level knowledge into the house. The risk is connectivity, so we agree a fallback before lessons begin, and we send notes that can be read without a connection.",
        "The table shows the options side by side.",
      ],
      table: {
        caption: "Study options compared in Dumraon",
        columns: ["Option", "IB or IGCSE knowledge", "Journey", "Weak point"],
        rows: [
          ["Online specialist tutor", "High, matched on course code", "None", "Depends on internet and power"],
          ["Coaching class in town or Patna", "Low", "Daily or weekly travel", "Designed for board and entrance exams"],
          ["Private school-teacher tutor", "Low to medium", "Tutor or student travels", "Syllabus often unfamiliar"],
          ["Self-study with past papers", "Varies with the student", "None", "No feedback when stuck"],
        ],
      },
    },
    {
      heading: "Where can an IB or IGCSE student from Dumraon go next?",
      paragraphs: [
        "Patna is the nearest university city, with Patna University, IIT Patna, NIT Patna and AIIMS Patna among its institutions. Varanasi adds Banaras Hindu University, and Delhi draws many Bihari students to Delhi University and other campuses. Admission to each depends on its own rules, and an IB Diploma student must check how it treats IB scores.",
        "The Association of Indian Universities recognises the IB Diploma as equal to Class 12. CUET-UG serves many central universities, JEE Main and Advanced open the door to engineering colleges, and NEET-UG to medicine. Their rules about subjects and equivalence change, so always read the current notice.",
        "A number of families look overseas, and UK, Canadian, US and Australian universities read the IB Diploma and A Levels without difficulty. We can explain prerequisites and help plan revision, but tutors do not write personal statements or application essays.",
        "IGCSE students normally continue to A Levels, to the IB Diploma or into Class 11 of an Indian board. Talking through that choice in Class 9 prevents expensive surprises later.",
      ],
      bullets: [
        "AIU treats the IB Diploma as a Class 12 equivalent",
        "JEE, NEET-UG and CUET-UG notices change each year",
        "Keep Physics, Chemistry and Mathematics together for engineering",
        "Ask each university directly how it reads IB points",
      ],
    },
    {
      heading: "How do tutors teach IB Economics, Mathematics and the sciences without being in the room?",
      paragraphs: [
        "The lesson takes place on a shared tablet screen. The tutor writes, draws and solves live, and the student does the same, photographing written work for review. It feels closer to a small tutorial than to a video lecture, since every step is visible and can be questioned.",
        "For Economics, the tutor trains the student to draw a clean diagram, label it fully and then explain and evaluate in paragraphs. Bihar's migration patterns, flood economics and farm-price debates supply fresh examples beyond the usual textbook cases.",
        "Mathematics begins with a diagnostic, which decides whether Analysis and Approaches or Applications and Interpretation suits the student, and regular timed questions build speed. The sciences lean on data: graphs, tables and method questions from past papers are taken apart line by line.",
        "At IGCSE the pivotal decision is Core or Extended. Extended allows the top grades but demands stronger algebra, so we assess the student before advising.",
      ],
    },
    {
      heading: "How does a Dumraon family begin?",
      paragraphs: [
        "Write a few lines on WhatsApp to +91 7439 368 115 or by email to support@ibgram.com. Give the programme, subject, level, exam session and school or online centre. English or Hindi is fine.",
        "You will hear back with a named tutor and trial times, usually within a day. The first lesson is genuine teaching, costs nothing and ends with time for the parent to ask about background and method.",
        "Only if you wish to go on does the written rate arrive, together with a proposed weekly slot. Each class then ends with a short summary, which helps parents who cannot sit beside the student.",
        "If the pairing is not right, say so and a different tutor is arranged.",
      ],
    },
  ],

  process: [
    { title: "Write to us", description: "Send the programme, subject, level, session and school or centre, in English or Hindi." },
    { title: "Hear back with a name", description: "You receive a tutor who has taught that exact course, plus a few trial times in IST." },
    { title: "Sit the free lesson", description: "Your child works live on a real topic while you watch and ask questions." },
    { title: "Read the terms", description: "A written rate and weekly slot follow, and nothing is booked until you agree." },
    { title: "Follow the summaries", description: "A brief note after each class lists what was covered and what to revise." },
  ],
  whyPoints: [
    { title: "Course-specific pairing", description: "Tutors are chosen by the code and level your child studies, not by a vague subject tag." },
    { title: "Plain about visits", description: "Nobody comes to Dumraon homes, and we say so before you ask." },
    { title: "Rate after the trial", description: "You read the price only after a free lesson, never before." },
    { title: "Explaining, not writing", description: "IAs, Extended Essays, TOK essays and coursework stay in the student's own hands." },
    { title: "Shaped by the Bihar calendar", description: "Chhath, floods, heat and wedding months are all planned around." },
    { title: "Free to switch", description: "A different tutor can be arranged quickly if the first does not suit." },
  ],

  faqs: [
    {
      question: "Is there an IB or IGCSE tutor for Dumraon students?",
      answer:
        "Yes, online. A Dumraon student is paired with a tutor who has taught the exact IB or IGCSE course, and they meet live on video, one to one, on Indian time. Nothing local turned up in our checks for an IB or Cambridge school in the town, so a specialist joining by screen is usually the practical option.",
    },
    {
      question: "Will a tutor visit my house in Dumraon?",
      answer:
        "No, not in Dumraon. House visits exist only in Gurugram and parts of Delhi NCR. For your town we run online home tuition: your child studies at home while the tutor teaches live on video. That saves the journey to Buxar or Patna for both sides, and every lesson ends with a short written summary for parents.",
    },
    {
      question: "Is there a Cambridge or IB school in Dumraon?",
      answer:
        "We could not confirm one. A school with Cambridge in its name appears in search results, but a name does not show that it teaches a Cambridge syllabus, and we did not count it. Please ask any school for proof of IB authorisation or Cambridge or Edexcel centre status before enrolling, because we play no part in admissions.",
    },
    {
      question: "What are the fees for IGCSE or IB lessons from Dumraon?",
      answer:
        "Fees are given in writing after the free first lesson, because they depend on the course, the weekly hours and the tutor's experience. We publish no price list. Two students on the same course can share a slot to cut the cost, and online teaching removes the train and lodging costs a city class would add.",
    },
    {
      question: "My son boards in Dehradun. Can the tutor keep him on track at home?",
      answer:
        "Yes. During breaks a tutor who knows his board and subject can continue from the topic his school reached, using live lessons at home. Send the syllabus code and recent test results and the tutor will plan revision around the next exam. A summary after each lesson also lets his school teachers see what was covered.",
    },
    {
      question: "Can a BSEB or CBSE student switch to an international syllabus?",
      answer:
        "Yes, but it needs a school or online centre willing to register the student, and we do not arrange admissions. Class 9 for IGCSE and Class 11 for the IB Diploma are the smoothest entry points. Before the move, bridge lessons in written English and in criteria-based answers make the first term much less stressful.",
    },
    {
      question: "Which IB Mathematics should a Dumraon student pick?",
      answer:
        "Analysis and Approaches if the student enjoys algebra and calculus and may study engineering or pure science, and Applications and Interpretation for economics, social science or design. The school or centre submits the choice, so decide early. We include a short sample of each in the free lesson to help the family see the difference.",
    },
    {
      question: "Do you help write the Extended Essay or Internal Assessment?",
      answer:
        "No. We explain the criteria, help a student choose a workable question and comment on plans and drafts. The research, writing and submission belong to the student. The same applies to Theory of Knowledge essays and coursework. This keeps the student safe under the IB's academic honesty rules and keeps the work genuine.",
    },
    {
      question: "What about power cuts and flood-season internet problems?",
      answer:
        "We plan for them. Dumraon's summer heat and monsoon storms can disrupt both power and mobile data, so we advise a charged laptop, a phone hotspot on a second network and notes stored offline. Lessons lost to an outage are rescheduled without extra charge, and the tutor adjusts the plan if several days are missed.",
    },
    {
      question: "Cambridge or Edexcel IGCSE: who decides?",
      answer:
        "The school or online centre decides, since a student sits the board where they are registered. Codes differ, for example 0580 for Cambridge Mathematics and 4MA1 for Edexcel, and the papers have different layouts. Share the code and we pair your child with a tutor who has taught that specification so practice matches the real mark scheme.",
    },
    {
      question: "When are the IB and IGCSE examinations?",
      answer:
        "IB Diploma papers are sat mostly in May, with some schools using November. IGCSE runs in May or June and October or November, and Edexcel adds January for a few subjects. Your school or centre confirms the actual dates. For Dumraon students we work backwards from them, making sure revision ends before Chhath and the wedding months.",
    },
    {
      question: "Do Indian universities accept the IB Diploma?",
      answer:
        "Generally yes. The Association of Indian Universities treats it as equal to Class 12, and many universities accept IB scores. Central university seats often use CUET-UG, while JEE and NEET-UG have their own eligibility rules that change every year. Read the current notice for each exam or university before choosing subjects.",
    },
    {
      question: "Can two children in Dumraon share a class?",
      answer:
        "If they study the same board, subject and level, yes. A shared online slot lowers the cost for each family and suits revision and past-paper work. Lessons are not combined across different syllabi because that would shortchange both. Cousins and classmates often pair up, and either can return to a private slot whenever they like.",
    },
    {
      question: "Can you promise a grade?",
      answer:
        "No, and be cautious of anyone who does. Results depend on the student, the school and the examiner. What we promise is a tutor matched to the syllabus, a free first lesson, written summaries and the right to change tutors, so a family can judge progress from evidence rather than assurances.",
    },
    {
      question: "Is PYP or MYP help available for younger children?",
      answer:
        "Yes, in shorter sessions that suit their age. For PYP we work on spoken English, early reading and number sense, and for MYP on criteria-based writing, research and planning. The Personal Project is the student's own, so tutors guide planning and reflection but add no content. Many children enjoy a weekly online session as a steady routine.",
    },
    {
      question: "How can I get a free trial from Dumraon?",
      answer:
        "Send a message to +91 7439 368 115 on WhatsApp or email support@ibgram.com with the course, level, exam session and school. A tutor and trial times usually come back within a day. The lesson is real, free and has no strings, and a rate appears in writing only if you want to carry on.",
    },
    {
      question: "Does IB Gram belong to any school or board?",
      answer:
        "No. IB Gram is an independent tutoring service with no link to any school, the IB organisation, Cambridge or Pearson. School names on this page are public context only. Please confirm any school's authorisation with the body concerned before making decisions about enrolment or a move.",
    },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutors across India", href: "/india/", description: "Browse every city page and learn how the online model works." },
    { label: "Gurugram home tuition", href: "/gurgaon/", description: "The only city with tutors who visit homes in person." },
    { label: "IB tutors", href: "/ib-tutors/", description: "A closer look at the IB subjects and levels we cover." },
    { label: "IGCSE guide", href: "/igcse/", description: "Picking a board, a tier and a subject set." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "What the two-year Diploma asks of a student." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria and the Personal Project explained." },
    { label: "IB Career-related Programme", href: "/programmes/cp/", description: "How CP joins DP courses to career study." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Which of the two Diploma maths courses fits which student." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor cards sorted by subject and level." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send a few lines and ask for a trial slot." },
    { label: "IB and IGCSE tutors in Buxar", href: "/buxar/", description: "The district headquarters, about 25 kilometres away." },
    { label: "IB and IGCSE tutors in Arrah", href: "/arrah/", description: "The next town east along the same railway." },
    { label: "IB and IGCSE tutors in Patna", href: "/patna/", description: "The state capital and its university belt." },
    { label: "IB and IGCSE tutors in Varanasi", href: "/varanasi/", description: "The nearest big city across the border in Uttar Pradesh." },
  ],

  closingHeading: "Begin with a free IB or IGCSE lesson in your Dumraon home",
  closingBody:
    "Your child stays in Dumraon and the specialist arrives by screen. Name the course and the exam sitting, and we will propose a tutor and some trial times. The first lesson costs nothing, and the terms come in writing. WhatsApp +91 7439 368 115 or email support@ibgram.com.",
};
