import type { CitySeoPage } from "../types";

/**
 * Taranagar, Churu district, Rajasthan (rank 854). The old name is Reni, renamed in 1948 after
 * Tara Singh. No IB or Cambridge/Edexcel school could be confirmed in Taranagar or anywhere in
 * Churu district, so stripSchools is empty and every cluster is labelled as another city.
 * homeTuition is false: online one-to-one only, no tutor visits.
 */
export const taranagar: CitySeoPage = {
  slug: "taranagar",
  countryName: "Taranagar",
  countryNameLong: "Taranagar, Rajasthan",
  demonym: "Taranagar",
  flagCode: "in",
  countryCode: "IN",
  region: "Rajasthan, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote:
    "Early-morning and post-sunset slots that dodge the May afternoon heat, the mandi rush and wedding-season weeks",
  lastUpdated: "2026-09-21",
  state: "Rajasthan",
  stateCode: "IN-RJ",
  geo: { latitude: 28.6689, longitude: 75.0406 },
  alternateNames: ["Reni", "Rini", "Taranagar Churu"],
  wikipedia: "https://en.wikipedia.org/wiki/Taranagar",
  stripSchools: [],

  title: "IB & IGCSE Tutors in Taranagar | Online Private Tuition",
  metaDescription:
    "Online one-to-one IB and IGCSE tuition for Taranagar families in Churu district: PYP to Diploma, Cambridge and Edexcel, taught in IST, free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Taranagar",
  heroEyebrow: "IB & IGCSE PRIVATE TUITION FOR TARANAGAR AND CHURU DISTRICT",
  heroSubtitle:
    "Want private home tuition for an IB or IGCSE student in Taranagar? The lesson happens at home, on your own laptop, one student and one subject specialist on a video call in IST. You tell us the programme, the subject and the level; we put forward a tutor who has already taught that exact syllabus, and the first lesson is free.",
  primaryKeyword: "IB and IGCSE tutors in Taranagar",
  imageAltText:
    "A Taranagar student in Churu district working through an IB Mathematics problem on a laptop at home",
  secondaryKeywords: [
    "IB tutor Taranagar",
    "IGCSE tutor Taranagar",
    "IB home tuition Taranagar",
    "IGCSE home tuition Taranagar",
    "IB private tuition Taranagar",
    "IB Maths tutor Taranagar",
    "IGCSE Maths tutor Taranagar",
    "IB Physics tutor Taranagar",
    "IB Chemistry tutor Taranagar",
    "IB Biology tutor Taranagar",
    "IB DP tutor Taranagar",
    "IB MYP tutor Taranagar",
    "IB PYP tutor Taranagar",
    "IGCSE online tuition Taranagar",
    "online IB tutor Churu district",
    "IB tutor Reni",
    "IGCSE tutor Churu",
    "IB Economics tutor Taranagar",
    "IGCSE Physics tutor Taranagar",
    "IB Hindi tutor Taranagar",
    "IB tutor Sadulpur Road Taranagar",
    "IGCSE tutor Sardarshahar Road Taranagar",
  ],

  heroTrustPoints: [
    "A tutor picked for the exact board, programme and level your child sits",
    "Live video lessons on Indian time, with a written note the same evening",
    "Free trial lesson, and a different tutor if the fit is wrong",
    "Independent of every school, board and examining organisation",
  ],
  heroStats: [
    { value: "PYP to DP", label: "Every IB programme covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards taught" },
    { value: "IST", label: "Timetable set on Indian time" },
    { value: "Free trial", label: "Before you commit to anything" },
  ],

  intro: {
    heading: "IB and IGCSE tutors in Taranagar, teaching online into Churu district",
    paragraphs: [
      "Taranagar sits in the north of Churu district, on the dry Bagar edge of the Thar, and until 1948 it answered to an older name: Reni, after the woman Rinkali who is said to have settled the place. It became Taranagar in memory of Tara Singh, who ruled here in the middle of the eighteenth century. Today it is a municipality of roughly thirty-two thousand people, headquarters of a tehsil in the Rajgarh subdivision, with a RIICO industrial estate, a plaster of Paris trade, wooden handicraft and jewellery workshops, and a mandi where bajra, guar, gram and mustard from a wide ring of villages change hands.",
      "What it does not have is an international-curriculum school. Nobody in Taranagar, or anywhere else in Churu district as far as we can verify, teaches the IB Diploma or a Cambridge or Edexcel IGCSE. So when a family here searches for IB and IGCSE tutors in Taranagar, the child in question is almost always studying somewhere else: in a Jaipur or Bikaner day school, boarding in Shekhawati, or living with relatives in Kolkata, Mumbai or Guwahati where generations of Churu-district trading households have had businesses for a century. The tuition has to reach the child wherever the school year has put them, and reach them again when they come back for Diwali or the summer break.",
      "Home tuition, in Taranagar, means online home tuition. No tutor of ours travels to this town or knocks on a door here; face-to-face lessons are confined to Gurugram and parts of Delhi NCR. The substitute is not a recorded course or a crowded batch. It is one tutor and one student on a video call, writing on a shared board, marking a photographed answer script while the student watches, and sending a short note afterwards so parents who never studied the Diploma can still follow what happened. The upside of distance is choice: we are not limited to whoever lives within driving range of Churu Road, so we can hunt for someone who has taught IB Physics HL for years.",
      "A word on what we are. IB Gram is an independent tutoring service. We are not part of the International Baccalaureate Organization, Cambridge University Press and Assessment, or Pearson Edexcel, and no school mentioned anywhere on this page has endorsed us or is connected to us in any way.",
    ],
    bullets: [
      "IB PYP, MYP, Diploma and CP subjects, matched by level rather than by year group",
      "Cambridge and Pearson Edexcel IGCSE, both the Core and the Extended tier",
      "Online one-to-one only in Taranagar, with no tutor visits to any house in the district",
      "Rates quoted in writing first, free trial lesson, and no published price list",
    ],
  },

  programmesIntro:
    "Few people in Taranagar grew up with the IB, so the four programmes are worth separating properly before you choose tuition. Each one is marked differently, and each one goes wrong in a different way for a child who has come out of a Rajasthan Board or CBSE classroom.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Nursery to Class 5, ages 3-12",
      description:
        "Young children work through transdisciplinary units of inquiry rather than separate textbook subjects, and the final year closes with a collaborative PYP Exhibition.",
      countryNote:
        "In Taranagar the first language at home is usually Bagri, with Hindi for school and the bazaar, so the earliest lessons concentrate on spoken English confidence, reading aloud and the habit of asking questions out loud, which inquiry teaching depends on.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Eight subject groups are assessed against published criteria instead of one annual paper, and the last year carries an independent Personal Project.",
      countryNote:
        "A Churu-district child who has learned to produce the right final answer often loses marks here for not writing down the reasoning, so MYP tuition spends a lot of time on process, drafts and the criteria wording itself.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three of them at Higher Level, sit beside Theory of Knowledge, a four-thousand-word Extended Essay and the CAS strand, with written exams in a May or a November session.",
      countryNote:
        "Diploma students from Taranagar are studying away from home almost without exception, which means our timetable has to fit a hostel schedule or a city school day that we do not control.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses are combined with a career-related qualification, a reflective project and a personal and professional skills course.",
      countryNote:
        "Very few Indian schools run the CP and none is near Churu district, but if a family finds one the Diploma courses inside it are tutored exactly as Diploma courses are.",
    },
  ],

  subjectsIntro:
    "A tutor is only useful if the course label matches. Mathematics Analysis and Approaches at Higher Level asks for proof and algebraic stamina; Applications and Interpretation at Standard Level asks for modelling and a calculator used fluently. These are the IB courses we teach into Taranagar.",
  subjects: [
    { name: "IB Mathematics Analysis & Approaches", levels: "HL / SL", description: "Algebra, functions, calculus and proof for Papers 1 and 2, then the long unfamiliar Paper 3 investigation that Higher Level candidates meet." },
    { name: "IB Mathematics Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling, finance and graph theory, with calculator routines rehearsed until they cost no thinking time, plus a sensible exploration topic." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, thermal physics, fields and the quantum topics, with practice on how Paper 2 wants an explanation phrased and on designing a workable investigation." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Stoichiometry, energetics, equilibrium, acids and bases, and organic mechanisms taught as arrow-pushing rather than memorised products." },
    { name: "IB Biology", levels: "HL / SL", description: "Cells, physiology, genetics and ecology, with heavy work on command terms, data-based questions and the statistics the course expects." },
    { name: "IB Economics", levels: "HL / SL", description: "Microeconomics, macroeconomics and the global economy, with diagrams drawn to the mark scheme and real commentary sources chosen carefully." },
    { name: "IB Business Management", levels: "HL / SL", description: "Marketing, operations, finance and human resources, plus the case-study paper and the internal assessment that trips up strong writers." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Programming in Java or Python, data structures, networks and the solution development the internal assessment demands." },
    { name: "IB English A: Language & Literature", levels: "HL / SL", description: "Non-literary text analysis, global issues, the individual oral and the comparative essay structure examiners reward." },
    { name: "IB English B", levels: "HL / SL", description: "Reading comprehension, text types and spoken fluency for students whose schooling in English began later than their Hindi or Bagri." },
    { name: "IB Hindi A & Hindi B", levels: "HL / SL", description: "Literature study, written tasks and oral assessment in Hindi, useful for Rajasthani families who want the home language carried into the Diploma." },
    { name: "IB Geography", levels: "HL / SL", description: "Population, resources and hazards, with the fieldwork write-up and the extended-response technique taught separately." },
    { name: "IB History", levels: "HL / SL", description: "Source evaluation for Paper 1, prescribed topics for Papers 2 and 3, and the historical investigation planned before it is written." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Systems thinking, ecology, pollution and resource management, a sensible pick for students interested in land, water and agriculture." },
    { name: "IB Theory of Knowledge", levels: "Core", description: "The exhibition and the prescribed-title essay, approached as a structured argument rather than a free-form opinion piece." },
    { name: "IB Extended Essay support", levels: "Core", description: "Research question narrowing, source discipline and referencing, with the writing left entirely to the student as the IB requires." },
  ],

  igcseSubjectsIntro:
    "IGCSE students from Churu district are usually in a Cambridge or Edexcel school elsewhere, often having transferred mid-stage from a CBSE or Rajasthan Board classroom. These are the IGCSE courses we cover, at Core or Extended tier as the school has entered the student.",
  igcseSubjects: [
    { name: "IGCSE Mathematics", levels: "Core / Extended", description: "Number, algebra, geometry and trigonometry, with Extended-only topics such as functions and vectors identified early so nothing is missed." },
    { name: "IGCSE Additional Mathematics", levels: "Extension", description: "Calculus, series and deeper trigonometry for students heading towards A Level Maths or an IB Higher Level course." },
    { name: "IGCSE Physics", levels: "Core / Extended", description: "Forces, energy, waves, electricity and the practical alternative paper, with graph work and unit discipline drilled." },
    { name: "IGCSE Chemistry", levels: "Core / Extended", description: "Bonding, moles, rates, electrolysis and organic families, with the ion tests and observation wording learned to the mark scheme." },
    { name: "IGCSE Biology", levels: "Core / Extended", description: "Human physiology, plants, genetics and ecosystems, with the longer six-mark answers planned before they are written." },
    { name: "IGCSE English as a Second Language", levels: "Core / Extended", description: "Reading, summary writing, directed writing and the speaking test, which rewards practice far more than vocabulary lists." },
    { name: "IGCSE First Language English", levels: "Extended", description: "Directed writing, descriptive and narrative pieces, and the reading paper where candidates lose marks for lifting whole phrases." },
    { name: "IGCSE Economics", levels: "Core / Extended", description: "Allocation of resources, markets, government policy and development, with structured-question technique taught explicitly." },
    { name: "IGCSE Business Studies", levels: "Core / Extended", description: "Enterprise, marketing, finance and people in business, with case-study application that goes beyond repeating definitions." },
    { name: "IGCSE Computer Science", levels: "Core / Extended", description: "Binary, logic, networks and algorithms, plus pseudocode and the programming practice the theory paper assumes." },
    { name: "IGCSE Hindi", levels: "As a Second Language / First Language", description: "Comprehension, composition and oral work in Hindi, taken by many students from Hindi-belt homes to balance the subject spread." },
    { name: "IGCSE Geography", levels: "Core / Extended", description: "Physical and human themes with the skills paper, where map reading and data interpretation carry the marks." },
  ],

  regionsTitle: "Parts of Taranagar and its tehsil our online tutors teach into",
  regionsIntro:
    "Teaching happens over video, so this list is not a service map. It is about study conditions: where the noise is, when the household is busy, which road a child travels for school or coaching, and what that means for fixing a weekly slot that actually survives the term.",
  regions: [
    { name: "Main bazaar and the old town core", note: "Shops here stay open into the evening and the lanes are tight, so families often shift a lesson to an inner room or to the hour just after sunrise." },
    { name: "Churu Road", note: "The southern corridor towards the district headquarters, used by anyone travelling to Churu for banking, hospital appointments or a train connection onwards." },
    { name: "Sadulpur Road", note: "The eastern approach towards Sadulpur, roughly thirty-six kilometres away, which is the nearest railway junction since Taranagar itself has no station." },
    { name: "Sardarshahar Road", note: "The south-western road out of town, a newer residential stretch where families with land and business interests on that side tend to build." },
    { name: "Sahwa and Sidhmukh side", note: "The northern and western villages of this part of the district, where a child may be the only IGCSE student for many kilometres and online teaching is the whole answer." },
    { name: "RIICO industrial estate", note: "The plaster of Paris and small-manufacturing belt; shift and loading hours decide when a parent is free to sit in on a lesson." },
    { name: "Krishi Upaj Mandi area", note: "The grain and guar market quarter, extremely busy at harvest arrivals, which is exactly when Diploma mock results tend to land." },
    { name: "Government hospital and veterinary hospital quarter", note: "Staff housing and nearby plots, home to doctors, veterinarians and teachers who are often the first families in a locality to look at an international curriculum." },
    { name: "Government Higher Secondary School neighbourhood", note: "The town's main state-school catchment, where most children study Rajasthan Board before any switch is considered." },
    { name: "Jain temple quarter", note: "Streets around the old Jain temple, long associated with trading households whose extended families live in Kolkata, Guwahati or Mumbai." },
    { name: "Shyam Pandia temple side", note: "A residential pocket around the temple; fair days and evening aarti are worth avoiding when a weekly slot is being fixed." },
    { name: "Bus stand and public library area", note: "The transport hub, since road is how everyone leaves Taranagar; the library nearby is a usable quiet option when the house is full of guests." },
  ],

  schoolDisclaimer:
    "We could not confirm a single school in Taranagar, or anywhere in Churu district, that offers the IB or a Cambridge or Edexcel IGCSE, which is why the school strip above is empty and every school named below belongs to another city. IB Gram is an independent service: no affiliation with, sponsorship by or endorsement from any of these schools, the International Baccalaureate Organization, Cambridge University Press and Assessment or Pearson Edexcel is claimed or implied.",
  schoolClusters: [
    {
      city: "Nearby: Jaipur",
      note: "The state capital holds the IB and Cambridge schools that Rajasthan families actually reach, and a Taranagar household moving for schooling almost always moves here first. It is a long road journey, so day schooling means relocating rather than commuting.",
      schools: ["Jayshree Periwal International School", "Sanskar School, Sirsi Road", "Mayoor School Jaipur"],
    },
    {
      city: "Nearby: Laxmangarh, Sikar district",
      note: "The closest confirmed international-curriculum option to Churu district, in the Shekhawati belt, and reachable as a boarding choice rather than a daily run.",
      schools: ["Mody School, Laxmangarh"],
    },
    {
      city: "Nearby: Delhi NCR",
      note: "Road and rail from Sadulpur put Delhi within a day, and NCR is where transferred government families and returning professionals most often end up looking.",
      schools: ["Genesis Global School, Noida", "American Embassy School, New Delhi"],
    },
    {
      city: "Nearby: Kolkata",
      note: "A great many Churu-district trading families have had houses and firms in Kolkata for generations, so its older international schools are a familiar name in Taranagar long before anyone visits one.",
      schools: ["Calcutta International School", "The Heritage School, Kolkata"],
    },
  ],

  modesIntro:
    "There is one delivery method in Taranagar, a live one-to-one video lesson, and three ways of using it. To say it plainly: no tutor comes to a house in Taranagar or anywhere in Churu district, because face-to-face teaching is offered only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "A standing weekly lesson",
      description:
        "One fixed slot a week with the same tutor, built around a shared whiteboard and a marked past paper. This is where nearly every family starts, and it suits any IB programme or IGCSE subject.",
      bullets: [
        "The same tutor every week, who learns how your child thinks",
        "Worked solutions written out live and kept for revision",
        "Works for PYP through Diploma and for both IGCSE tiers",
        "A short written note reaches you after each session",
      ],
    },
    {
      title: "Intensive blocks before a session",
      description:
        "A denser run of lessons in the weeks ahead of November or May papers, or ahead of school mocks, concentrating on timing, paper strategy and the handful of topics that keep costing marks.",
      bullets: [
        "Several lessons a week for a fixed stretch, then back to normal",
        "Full papers sat under time, then marked line by line",
        "Topic triage so the weakest areas get the most hours",
        "Useful for a child home in Taranagar during a school break",
      ],
    },
    {
      title: "Catch-up after a board switch",
      description:
        "For a student arriving into MYP or IGCSE from Rajasthan Board or CBSE, a focused run that maps what the old syllabus never covered and teaches the assessment habits the new one assumes.",
      bullets: [
        "A written gap list after a short diagnostic lesson",
        "Criteria and command terms taught as a skill in themselves",
        "Lab reports, drafts and referencing practised from scratch",
        "Pace set by the gap, not by the calendar",
      ],
    },
  ],

  tutorsIntro:
    "Every tutor teaches from India and works in IST, which matters in a town where the useful study hours are early morning and after dark for five months of the year. You see the subjects, levels and programmes each one has actually taught before the free trial, and if the pairing is wrong we change it rather than argue about it.",

  sections: [
    {
      heading: "Are there IB or IGCSE schools in Taranagar, and who looks for these tutors?",
      paragraphs: [
        "No. We could not verify any school offering the IB or a Cambridge or Edexcel IGCSE in Taranagar, and none anywhere in Churu district either. Schooling in the town runs on the Rajasthan Board, with CBSE in the private schools, and the state-run Government Higher Secondary School is the main local anchor. Anyone sitting an international curriculum from a Taranagar family is doing it from a school in another city.",
        "That makes the families who search for this quite specific. Some are trading households from the old quarters whose business is in Kolkata, Guwahati or Mumbai, with children already in schools there and grandparents still in Taranagar. Some are doctors, veterinarians, bank staff and teachers posted here, whose previous posting had an international school and who do not want their child to lose the thread. Some are families who have decided on an overseas degree and worked out that an IGCSE and then a Diploma is a cleaner route than a state-board certificate plus a long explanation.",
        "A fourth group is the quiet one: parents who have no plan to move at all, but whose child is bright, bored and reading well ahead of the class. For them tuition is not remedial. It is enrichment with a syllabus attached, and some of these students later sit IGCSE privately at a registered centre in a larger city rather than switching schools.",
        "Whichever group you belong to, the practical constraint is the same. Taranagar has no railway station, so every journey starts on a bus or in a car, and Sadulpur junction is about thirty-six kilometres east. Nothing about this town makes a daily commute to an international school possible. That is precisely why online one-to-one teaching does the work here rather than being a second-choice compromise.",
      ],
      bullets: [
        "Rajasthan Board and CBSE are the only local options we can confirm",
        "IB and IGCSE students from Taranagar study away: Jaipur, Shekhawati boarding, or a metro where family already lives",
        "Trading, government-service and professional households make up most enquiries",
        "No tutor visits homes here; teaching is online, with in-person lessons limited to Gurugram and parts of Delhi NCR",
      ],
    },
    {
      heading: "Rajasthan Board, CBSE, IB or IGCSE: what actually changes for a child from here",
      paragraphs: [
        "The four systems differ less in difficulty than in what they reward. A Rajasthan Board or CBSE classroom in Taranagar rewards accurate recall of a prescribed text and clean execution of a known method, which is exactly what the Sikar and Kota coaching machine is built to sharpen. IGCSE rewards a well-structured answer to a question the student has not seen phrased that way before. The Diploma rewards extended independent work, written over months, in a form nobody can supply on the student's behalf.",
        "Neither international course is a soft option. A Diploma student carries six subjects plus Theory of Knowledge, an Extended Essay and CAS at the same time, which is more simultaneous load than a Class 12 science stream with two or three board subjects to focus on. What the Diploma does not do is funnel a child towards one entrance examination, and for a family whose plan is a foreign university or a liberal-arts degree in India, that breadth is the point.",
        "Switching matters most in Mathematics and in written English. A child moving into IGCSE Extended Mathematics from Rajasthan Board usually knows more computation than the course needs and less about interpreting a worded multi-step question. In English, the gap is rarely vocabulary; it is the habit of planning a paragraph and answering with evidence rather than reciting what the textbook said. Both are teachable, but not in a fortnight.",
        "The honest warning we give Taranagar parents is about support, not ability. In a town with no IB school, there is no staff room to ask, no parent nearby who did this last year, and no local library of past papers. That is the real gap a tutor fills, alongside the teaching itself.",
      ],
      table: {
        caption: "How the four systems compare for a Taranagar student",
        columns: ["System", "Where you study it from here", "What it rewards", "Natural next step"],
        rows: [
          ["Rajasthan Board (RBSE)", "Locally, including the government higher secondary school", "Prescribed syllabus, accurate recall, March board papers", "State colleges, JEE or NEET through Sikar and Kota coaching"],
          ["CBSE", "Private schools in town and in Churu", "A national syllabus aligned to entrance-exam patterns", "Indian universities and CUET-UG, with JEE or NEET alongside"],
          ["Cambridge or Edexcel IGCSE", "Not available in the district; school elsewhere or a private entry at a city centre", "Structured answers to unfamiliar questions, practical skills", "A Level, IB Diploma, or back into CBSE Class 11 if needed"],
          ["IB Diploma", "Jaipur, Shekhawati boarding or a metro where family lives", "Breadth, long independent work, reasoning written down", "Overseas degrees, or Indian universities via AIU equivalence and CUET-UG"],
        ],
      },
    },
    {
      heading: "What drives the cost of IB or IGCSE tuition for a Taranagar family?",
      paragraphs: [
        "We do not publish a price, because the same subject can be two very different jobs. What we do is quote in writing before anything is booked, after a free trial lesson, so you are comparing a real figure against a real plan rather than an hourly rate on a listing page.",
        "Four things move the number. Level comes first: a Higher Level Diploma subject with an internal assessment running alongside it needs a tutor with a narrower and scarcer kind of experience than IGCSE Core Mathematics does. Then frequency, because a standing weekly lesson across a year is priced differently from a three-week block before November papers. Then how many subjects you take, since a second subject with the same organisation is simpler to schedule than two unrelated searches. Then urgency, because a tutor found for next Monday is a different proposition from one found in good time.",
        "Taranagar families should also weigh what the alternative costs. The locally familiar model is a coaching hostel in Sikar or Kota, which adds rent, mess fees, travel and a child living away from home for two years. Measured against that, a weekly online lesson for one subject is a small line item. Measured against a neighbour's doubt-clearing tuition for board subjects, it will look dear, and it is worth knowing why: an IB or IGCSE specialist is teaching a syllabus almost nobody in this district teaches.",
        "One thing we will not sell you is more hours than the child can absorb. Plenty of Diploma students need one subject fixed, not six. If the trial lesson shows that a fortnightly check-in and a disciplined past-paper routine will do the job, we will say that, and the quote will be smaller than you expected.",
      ],
      bullets: [
        "Programme and level, since Higher Level work needs a scarcer tutor",
        "How often lessons run, and for how many weeks",
        "Number of subjects, and whether they can share a schedule",
        "How soon you need to start, especially inside a session window",
      ],
    },
    {
      heading: "Online tuition, a Sikar coaching hostel, a local private tutor or self-study: which works?",
      paragraphs: [
        "For an IB or IGCSE subject, one-to-one online teaching is the only one of the four that reliably matches a specialist to the exact syllabus. The reason is supply. Churu district has no international-curriculum school, so it has almost no teachers who have marked an IGCSE paper or supervised an Extended Essay. Distance teaching removes that constraint entirely; everything else on the list runs straight into it.",
        "Coaching centres in Sikar, and the bigger machine in Kota, are genuinely good at what they were built for, which is JEE and NEET preparation on a CBSE spine. Sent an IB Mathematics Analysis and Approaches student, the same centre will teach competent mathematics that is aimed at the wrong paper, say nothing useful about the exploration, and have no view at all on Theory of Knowledge. Parents in Taranagar often discover this three months in.",
        "A local private tutor is still the right answer for some things. If the problem is that a child cannot sit still for ninety minutes, or needs spoken English practice, or needs someone to check that homework is actually done, somebody nearby and trusted beats any video call. We say so when we see it. What a local tutor cannot do here is tell you what the examiner wants on an IGCSE Chemistry alternative-to-practical paper.",
        "Self-study deserves more respect than it usually gets, with one condition: the student must have the real syllabus document, past papers with mark schemes, and someone to mark the long answers honestly. Diligent students in this district have done well on exactly that diet. The marking is where it breaks down, because nobody can reliably grade their own six-mark explanation, and that is often the single service a family here actually needs.",
      ],
      table: {
        caption: "Four routes to IB or IGCSE help from Churu district",
        columns: ["Route", "Syllabus match", "Cost shape", "Honest verdict"],
        rows: [
          ["Online one-to-one with a specialist", "Exact programme, subject and level", "Per lesson, no travel or hostel costs", "The only route with reliable IB and IGCSE expertise from here"],
          ["Coaching centre in Sikar or Kota", "Built for JEE and NEET on a CBSE spine", "Fees plus hostel, mess and travel", "Strong for entrance exams, wrong fit for Diploma or IGCSE papers"],
          ["Local private tutor in Taranagar", "State board or CBSE, rarely international", "Modest monthly fee", "Good for discipline, English practice and homework supervision"],
          ["Self-study with past papers", "As exact as the student's own reading", "Almost free", "Workable if someone marks the long answers properly"],
        ],
      },
    },
    {
      heading: "How the Taranagar year, its heat and its festivals shape revision",
      paragraphs: [
        "Churu district turns up in national weather bulletins twice a year for opposite reasons: among the hottest places in the country in May and June, and among the coldest plains stations on winter nights. Taranagar, at about 232 metres on the desert margin, gets both. Planning study around that is not fussiness. An afternoon in late May is unusable, dust storms knock out an evening without warning, and a January night needs a room that can be kept warm before anyone will concentrate in it.",
        "The school calendar adds its own shape. Local Rajasthan Board schools run an April to March session with board papers in March and a long summer closure from mid-May into the last week of June. An IB school in Jaipur or a boarding school in Shekhawati works to a different rhythm, often August to May, which means a Taranagar child in the Diploma is home at times when their cousins are mid-term, and away at Holi when the whole town is out on the street.",
        "Festivals are not an obstacle so much as a fixed set of immovable dates. In Shekhawati, Holi and the days around it genuinely stop everything, and Gangaur, Teej, Rakhi and Diwali each take out a working week in practice. Households connected to the old Jain temple keep Paryushan, which is a serious eight-day commitment. The wedding season between November and February fills houses with guests at exactly the moment November-session candidates need quiet, and a Diploma student with a cousin's wedding in the same fortnight as mock exams needs the timetable drawn before, not during.",
        "So we plan backwards from the session. May candidates get their heaviest weeks between December and March, when the weather cooperates. November candidates get theirs in the monsoon months and early autumn, before the wedding and festival run begins. Either way the lessons sit in the early morning or after sunset for most of the year, because those are the hours that work in this town.",
      ],
      table: {
        caption: "The Taranagar year against the IB and IGCSE calendar",
        columns: ["Window", "What it is like here", "What it means for study"],
        rows: [
          ["April to mid-May", "Heat building fast, RBSE results arriving, school year turning over", "Last clean revision weeks for May-session candidates; start early in the morning"],
          ["Mid-May to June", "Peak desert heat and dust storms, state-school summer closure", "Short early lessons only; good for a catch-up block for a child home from boarding"],
          ["July to September", "Monsoon reaching the district, cooler air, new school term settled", "The strongest sustained run for November-session candidates and IGCSE coursework"],
          ["October to November", "Pleasant weather, Diwali, November IB and IGCSE papers", "Protect the fortnight before papers; plan around Diwali rather than through it"],
          ["December to February", "Cold nights, wedding season, school mocks and RBSE practicals", "Heaviest work for May candidates, in a heated room, with guest weeks mapped in advance"],
          ["March", "RBSE board papers, warming up, Holi in Shekhawati", "Fine for steady lessons, but write off the Holi days entirely"],
        ],
      },
    },
    {
      heading: "Where do students from Taranagar go after the IB or an IGCSE?",
      paragraphs: [
        "Three directions, and all of them stay open. For Indian universities, the Association of Indian Universities issues an equivalence certificate for the IB Diploma that places it alongside a Class 12 board certificate, and admission then runs through CUET-UG or the individual university's process just as it would for a CBSE student. The paperwork is worth starting early, because it is one more thing nobody in Taranagar will have done before you.",
        "For professional entrance examinations, eligibility is a question of subjects, not of board. A Diploma student intending to sit NEET needs Biology, Chemistry and Physics carried to the right level, and a JEE candidate needs Physics, Chemistry and Mathematics, with Analysis and Approaches the sensible choice. What the Diploma will not do is rehearse the speed and multiple-choice pattern those papers demand, so students from this district who want both usually add dedicated entrance preparation on the side. Families here know that world well from Sikar, so the conversation is easier than it sounds.",
        "For study abroad, an IGCSE followed by a Diploma is the cleanest document a student from Churu district can hold. Universities in the United Kingdom, Canada, Australia, Europe and the United States read the Diploma without needing anything explained, which removes a real obstacle for an applicant from a town most admissions officers have never heard of. Predicted grades, subject combinations and Higher Level choices start mattering in Class 11, not in the final year.",
        "Closer to home, the pull from Taranagar has long been towards Bikaner and Jaipur for degrees, with Delhi for those who can manage it, and that has not changed. One local development is worth noting: a veterinary medical college is coming up in the town, in a tehsil where livestock and crops such as guar, bajra, gram and mustard are the economy. Students aiming at veterinary science, agriculture or environmental work will find that an Environmental Systems and Societies or Biology background sits very naturally with that ambition.",
      ],
      bullets: [
        "AIU equivalence for the Diploma, then CUET-UG or the university's own route",
        "NEET and JEE eligibility depend on the subjects carried, not the board",
        "Entrance-exam speed practice is a separate job from Diploma teaching",
        "Overseas applications read the Diploma directly, with no explanation needed",
      ],
    },
    {
      heading: "IB Mathematics and the sciences: what a Taranagar student should drill",
      paragraphs: [
        "The Mathematics choice is the one that most often gets made badly. Analysis and Approaches is for a student who enjoys algebraic manipulation and will meet proof, and at Higher Level it brings a third paper of long unfamiliar investigations. Applications and Interpretation is built on statistics, modelling and confident calculator use, and it is not the easy version; it is a different discipline. A student from a Rajasthan Board or CBSE background who likes mathematics will usually be happier in Analysis and Approaches, but we check that against actual work rather than a feeling.",
        "The sciences each have their own failure point. Physics loses marks in written explanation far more than in calculation, so we rehearse how to say why something happens in two precise sentences. Chemistry falls apart when organic reactions are memorised rather than understood as mechanisms, and it also demands real fluency with moles. Biology is the course students underestimate, because its command terms are unforgiving and its data-based questions expect statistical reasoning that nobody has taught them.",
        "Then there is the internal assessment, which is where a student with no local support is most exposed. Every science course needs an individual investigation designed, run and written up, and the Diploma Mathematics courses need an exploration. In a town with no IB school, there is nobody down the road to ask whether a research question is too broad. We work on that question, on method and on what the criteria actually ask for. We do not write any of it, and we will not, because that is the student's work and the IB treats it that way.",
        "Practical work needs saying plainly. A child in Taranagar has no school laboratory for an international curriculum, so a tutor cannot supply apparatus or supervise an experiment. What we can do is help plan an investigation that the school's laboratory can actually support, work through the data once it exists, and prepare thoroughly for the written practical papers that IGCSE sets.",
      ],
      bullets: [
        "Pick between Analysis and Approaches and Applications and Interpretation from evidence, not reputation",
        "Physics: explanation wording; Chemistry: mechanisms and moles; Biology: command terms and data",
        "Internal assessments are coached at the question and method stage, never written for the student",
        "Laboratory work stays with the school; we prepare the planning and the analysis",
      ],
    },
    {
      heading: "IGCSE Core or Extended: how should a student from Churu district choose?",
      paragraphs: [
        "Extended, in almost every case, if the student is aiming at an IB Diploma, at A Levels or at a competitive degree. Core caps the grade at C and leaves out content that the next stage assumes, particularly in Mathematics, where the functions and vectors work sits on the Extended side. The school enters the student, so this is a conversation to have with the school in good time rather than a decision a family makes alone.",
        "Core earns its place in two situations. One is a subject outside the student's direction of travel, where a solid Core grade protects time for the subjects that matter. The other is a student who has recently switched boards or languages and is still catching up; a confident Core pass this year beats a scraped Extended entry, and the tier can often be revisited.",
        "For students arriving from a Rajasthan Board or CBSE classroom, the first weeks of Extended teaching are mostly about assessment habits rather than content. Showing method, using the command terms, answering a worded question with the right amount of detail, and handling the practical and skills papers are all learnable, and all unfamiliar. We start with a diagnostic lesson and write down the gaps, because guessing wastes a term.",
        "Board choice between Cambridge and Pearson Edexcel is normally the school's, not yours, and both are widely accepted. The differences that matter in practice are the paper structures and the practical arrangements, so we teach to the exact specification and the exact past papers rather than to a general idea of what IGCSE is.",
      ],
      table: {
        caption: "Core and Extended tiers side by side",
        columns: ["Point", "Core tier", "Extended tier"],
        rows: [
          ["Grades available", "C down to G", "A* down to E"],
          ["Content", "The shared syllabus core", "Core plus the extended topics the next stage assumes"],
          ["Suits", "A supporting subject, or a student still catching up after a switch", "Anyone heading for A Level, the IB Diploma or a competitive degree"],
          ["Mathematics in particular", "Leaves out functions and vector work", "Required groundwork for Diploma Mathematics at either level"],
          ["Who decides", "The school, when it enters the candidate", "The school, so raise it early in the year"],
        ],
      },
    },
    {
      heading: "English, Hindi and Bagri: how language works in an IB or IGCSE file",
      paragraphs: [
        "Most households in Taranagar speak Bagri at home, use Hindi for school and the mandi, and treat English as a subject rather than a medium. The IB and IGCSE both ask for a lot of written English, and that gap is the quiet reason a capable child struggles after a switch. It is almost never a question of intelligence; it is a question of how many thousand words of formal English that child has written in their life.",
        "The systems leave useful room. At IGCSE a student can take English as a Second Language rather than First Language English, and both are recognised, while Hindi can be offered as a first or second language and counts properly. In the Diploma, English B exists alongside English A for exactly this situation, and Hindi A or Hindi B lets a Rajasthani family carry the home language into the final certificate instead of abandoning it.",
        "What we teach is writing as a mechanical skill before it is an expressive one: how a paragraph is built, how a point is supported with evidence from a text, how a summary strips a passage down, how a directed-writing task differs from a narrative. Spoken assessments get rehearsed rather than discussed, because students in this district frequently have strong ideas and little practice at saying them aloud to an examiner in English.",
        "Bagri itself is an asset in the one place the Diploma looks for it. Students writing an Extended Essay or a Theory of Knowledge exhibition from a linguistically rich, agriculturally grounded town have better material to hand than a student in a uniform metropolitan suburb. A local water-sharing practice, a mandi price mechanism or a bilingual household is a more interesting object of study than a borrowed example, and examiners notice genuine first-hand material.",
      ],
      bullets: [
        "English as a Second Language and English B exist precisely for this situation",
        "Hindi can be offered at first or second language level in both systems",
        "Formal writing is taught as structure first, style later",
        "Local material from Taranagar makes stronger Extended Essay and TOK work than borrowed examples",
      ],
    },
  ],

  process: [
    {
      title: "Tell us the exact course",
      description:
        "Send the programme, the subject, the level and the board, plus where the school is and when the session falls. Message support@ibgram.com or WhatsApp +91 7439 368 115. A photograph of the school's subject list saves a long exchange.",
    },
    {
      title: "We shortlist on syllabus experience",
      description:
        "We look for tutors who have taught that specification, not merely the subject, and we check that their free hours actually fit a Taranagar household's evening. You see what each one has taught before you decide.",
    },
    {
      title: "Take the free trial lesson",
      description:
        "A full lesson, not a sales call. Your child works on real material while the tutor watches how they approach it, and you can sit in. If it does not feel right, nothing is owed and we try someone else.",
    },
    {
      title: "Agree the plan and the rate in writing",
      description:
        "After the trial you get a short written plan, the gaps the tutor found, the frequency suggested and the rate confirmed in writing. Nothing is booked until you have read it.",
    },
    {
      title: "Keep the loop open",
      description:
        "Lessons run weekly, a note follows each one, and we revisit the plan around mocks and before a session. If pace or chemistry is off, say so and we change the tutor rather than persisting.",
    },
  ],

  whyPoints: [
    {
      title: "Specialists for a syllabus nobody teaches locally",
      description:
        "No school in Churu district offers the IB or an IGCSE, so there is no local pool of teachers who have marked these papers. Teaching online means we search all of India for someone who has taught your child's exact course, which is the whole advantage of not needing a tutor within driving distance.",
    },
    {
      title: "Timetables built for this town's usable hours",
      description:
        "In a district that records both extreme summer heat and near-freezing winter nights, the hours that work are early morning and after sunset for much of the year. Tutors work in IST and we fix slots around that, around harvest arrivals at the mandi and around wedding weeks.",
    },
    {
      title: "Honest about what we do not do",
      description:
        "Nobody visits a home in Taranagar; face-to-face teaching exists only in Gurugram and parts of Delhi NCR. We also do not write Extended Essays, internal assessments, Theory of Knowledge essays or coursework, and we do not promise grades or admissions to anybody.",
    },
    {
      title: "Written notes for parents outside the system",
      description:
        "Most parents here did not study an international curriculum and have no neighbour who did. After every lesson you get a short written note saying what was covered and what comes next, so you can follow progress without having to learn the Diploma yourself.",
    },
    {
      title: "A free trial and a tutor you can change",
      description:
        "The first lesson costs nothing and is a real lesson. If the pairing does not work after that, we move the student to a different tutor without a dispute. Rates are quoted in writing before any booking, and we publish no price list because the same subject is not the same job twice.",
    },
    {
      title: "Independent of every school and board",
      description:
        "We are not affiliated with the International Baccalaureate Organization, Cambridge University Press and Assessment, Pearson Edexcel or any school named on this page. That means our advice about tiers, subjects and whether tuition is even needed carries no institutional interest.",
    },
  ],

  faqs: [
    {
      question: "Do you have IB and IGCSE tutors in Taranagar itself?",
      answer:
        "We have tutors who teach students in Taranagar, but they do not live here and they do not come to the house. Every lesson is a live one-to-one video call in IST, and in-person teaching is offered only in Gurugram and parts of Delhi NCR. Because the tutor need not be local, we can match your child to someone who has taught the exact programme, subject and level, which would be impossible to find within Churu district.",
    },
    {
      question: "Can a tutor come to my home in Taranagar for private tuition?",
      answer:
        "No, and we would rather say that plainly than let you find out later. Our tutors do not travel to Taranagar or to any part of Churu district, and home visits run only in Gurugram and parts of Delhi NCR. What you can have is private one-to-one tuition at home over video: your child at their own desk, a specialist on screen, a shared whiteboard, work marked in real time and a written note afterwards.",
    },
    {
      question: "Is there any IB or IGCSE school in Taranagar or Churu district?",
      answer:
        "Not one that we can confirm. Schooling here runs on the Rajasthan Board with CBSE in the private schools, and we found no school in Taranagar or elsewhere in Churu district offering the IB or a Cambridge or Edexcel IGCSE. Families who want these curricula look to Jaipur, to boarding schools in the Shekhawati belt, to Delhi NCR, or to a metro where relatives already live. That is exactly why the school strip on this page is empty.",
    },
    {
      question: "What does IB or IGCSE tuition cost for a family here?",
      answer:
        "We quote in writing after the free trial and publish no price list, because the same subject label covers very different jobs. The rate moves with the level, how often lessons run, how many subjects you take and how urgently you need to start. Higher Level Diploma subjects with an internal assessment alongside them need scarcer tutors than IGCSE Core Mathematics does. Compared with a coaching hostel in Sikar or Kota, with rent and mess fees added, one weekly online lesson is a small cost.",
    },
    {
      question: "My child is in Class 9 on the Rajasthan Board and will switch to IGCSE. What is needed?",
      answer:
        "Start with a diagnostic lesson and a written gap list. The content gap is usually smaller than parents fear; the habit gap is larger. A student from an RBSE classroom typically computes well but has not practised showing method, reading command terms, answering a worded question to the right depth, or writing extended English answers. Mathematics and the practical or skills papers need the most attention. Give it a term rather than a fortnight and the transition is routine.",
    },
    {
      question: "Which IB Mathematics course should my child take?",
      answer:
        "Analysis and Approaches if they enjoy algebra and will cope with proof, Applications and Interpretation if statistics, modelling and calculator work suit them better. Applications is not the easier course, it is a different one. At Higher Level, Analysis and Approaches adds a third paper of long unfamiliar investigations. A student from an RBSE or CBSE background who likes mathematics usually fits Analysis and Approaches, but we decide from a sample of real work, not from the label.",
    },
    {
      question: "Will you help with the Extended Essay or an internal assessment?",
      answer:
        "We coach them and we never write them. That means narrowing a research question until it is answerable, checking that a method will actually produce data, teaching referencing properly, and reading drafts the student has written. We do not draft paragraphs, supply content or edit the work into shape. The IB treats these as the student's own work and so do we. In a town with no IB school, the question-and-method stage is where our help counts most.",
    },
    {
      question: "How do lessons run during the May and June heat?",
      answer:
        "Short and early. Churu district is among the hottest parts of the country in those weeks, afternoons are unusable and dust storms can take out an evening without notice, so we move slots to the early morning and keep sessions tight. A child home in Taranagar during the state-school summer closure is often an ideal candidate for a short intensive block scheduled before the day heats up, with a simple arrangement for picking up a lesson if the power or the connection drops.",
    },
    {
      question: "Do you teach Cambridge and Pearson Edexcel IGCSE both?",
      answer:
        "Yes, and we teach to the specification your school has entered the student for, not to a general notion of IGCSE. Both boards are widely accepted; what differs in practice is paper structure and the practical arrangements. Tell us the board, the syllabus code if you have it, and whether the entry is Core or Extended, and the tutor will work from those past papers and mark schemes. Your school decides the board and the tier, so raise the tier question with them early.",
    },
    {
      question: "Can my child sit IGCSE privately from Taranagar without changing schools?",
      answer:
        "Private candidacy is possible in principle, but entries must go through a registered examination centre, and the nearest ones are in larger cities rather than in Churu district. Travel, timing and the centre's own rules decide whether it is practical, and subjects requiring practical assessment are the hardest part. Check directly with a centre in Jaipur or Delhi before planning around it. Where it does work, we teach the full syllabus and the paper technique for it.",
    },
    {
      question: "Is online tuition really as good as a coaching centre in Sikar?",
      answer:
        "For an IB or IGCSE subject it is better, because the match is right. Centres in Sikar and Kota are built for JEE and NEET on a CBSE spine and they do that very well. Put a Diploma student in front of them and you get competent mathematics aimed at the wrong paper, no useful guidance on the exploration and nothing on Theory of Knowledge. For entrance-exam speed and pattern practice, those centres remain the right tool, and plenty of students use both.",
    },
    {
      question: "Which subjects can you teach into Taranagar?",
      answer:
        "On the IB side: both Mathematics courses, Physics, Chemistry, Biology, Environmental Systems and Societies, Economics, Business Management, Computer Science, Geography, History, English A and B, Hindi A and B, plus Theory of Knowledge and Extended Essay support. On the IGCSE side: Mathematics and Additional Mathematics, the three sciences, First Language English and English as a Second Language, Hindi, Economics, Business Studies, Computer Science and Geography. If a subject is not listed, ask, since availability changes.",
    },
    {
      question: "Will a Diploma from an international school keep Indian universities open?",
      answer:
        "Yes. The Association of Indian Universities issues an equivalence certificate placing the IB Diploma alongside a Class 12 board certificate, after which admission runs through CUET-UG or the university's own process. For NEET or JEE, eligibility depends on carrying the right subjects at the right level rather than on the board. The one thing the Diploma does not provide is practice at the speed and multiple-choice format of those papers, so students add that separately.",
    },
    {
      question: "What internet and equipment does a lesson actually need?",
      answer:
        "A laptop or desktop with a webcam, a reasonable broadband or mobile connection, headphones, and a quiet room with a table. A tablet with a stylus helps a mathematics student but is not required; photographing handwritten work with a phone works perfectly well. In the main bazaar lanes or near the bus stand, an inner or upper room makes a real difference to audio. If a connection drops, the tutor reschedules the remainder rather than counting it as taught.",
    },
    {
      question: "How do you handle festivals, weddings and school mocks?",
      answer:
        "By planning the term before it starts. In Shekhawati, Holi stops everything, Gangaur, Teej, Rakhi and Diwali each take out a working week in practice, Paryushan is a serious commitment for Jain households, and the November to February wedding season fills houses with guests just as November candidates need quiet. We map those dates against the session and the school mocks at the outset, then put the heavy weeks where they can survive.",
    },
    {
      question: "Can you teach a child who has moved away but spends holidays in Taranagar?",
      answer:
        "That is one of the most common arrangements we run. The lesson follows the student rather than the address, so term-time teaching fits a hostel or city school day and holiday weeks in Taranagar become intensive blocks. Many Churu-district families have houses in Kolkata, Guwahati, Mumbai or Delhi NCR alongside this one, and children move between them. All we need is the current timetable and the time zone, which stays IST in almost every case.",
    },
    {
      question: "How do I start, and how soon can lessons begin?",
      answer:
        "Email support@ibgram.com or send a WhatsApp message to +91 7439 368 115 with the programme, subject, level, board and your preferred lesson times. We come back with tutor options who have taught that specification, you take the free trial lesson, and you get a written plan and rate afterwards. Most families are in a first trial lesson within a few days. Inside a session window, tell us the deadline and we prioritise the search accordingly.",
    },
  ],

  internalLinks: [
    { label: "Tutoring across India", href: "/india/", description: "How this online one-to-one model works in cities and towns across the country." },
    { label: "IB tutors", href: "/ib-tutors/", description: "Programme and subject pages for IB students at every level." },
    { label: "IGCSE tutoring", href: "/igcse/", description: "Boards, tiers and subject choices set out in plain terms." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, Theory of Knowledge, the Extended Essay and CAS." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Criteria assessment, the eight subject groups and the Personal Project." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and how the PYP Exhibition is prepared." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Analysis and Approaches compared with Applications and Interpretation." },
    { label: "Browse our tutors", href: "/tutors/", description: "Tutor profiles listed by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Send your child's course details and book the free trial lesson." },
    { label: "IB and IGCSE tutoring in Sardarshahar", href: "/sardarshahar/", description: "The same online teaching for families in the south-west of Churu district." },
    { label: "IB and IGCSE tutoring in Rajgarh", href: "/rajgarh/", description: "Tutoring into the subdivision town and railway junction east of Taranagar." },
    { label: "IB and IGCSE tutoring in Ratangarh", href: "/ratangarh/", description: "Online lessons for students in Ratangarh and the villages around it." },
    { label: "IB and IGCSE tutoring in Bikaner", href: "/bikaner/", description: "The nearest large city for degrees, coaching and school options." },
  ],

  closingHeading: "Book a free trial lesson for your IB or IGCSE student in Taranagar",
  closingBody:
    "Send us the programme, the subject, the level and the board, and we will put forward tutors who have taught that exact course. The trial lesson is free and it is a real lesson, not a pitch. Afterwards you get a written plan, the gaps the tutor noticed and the rate confirmed in writing, and you decide from there. Reach us at support@ibgram.com or on WhatsApp at +91 7439 368 115. Lessons are online one-to-one in IST, because no tutor visits homes outside Gurugram and parts of Delhi NCR, and if the first pairing is not right we will find another.",
};
