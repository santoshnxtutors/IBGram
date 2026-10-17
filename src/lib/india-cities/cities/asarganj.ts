import type { CitySeoPage } from "../types";

/**
 * /asarganj/ - IB and IGCSE tutoring page for Asarganj, a Nagar Panchayat in Munger district, Bihar.
 * Online-only: tutors do not visit homes in Asarganj, since in-person tuition is offered only in Gurugram
 * and parts of Delhi NCR. No IB or Cambridge school was confirmed in Asarganj, Munger or Bhagalpur, so
 * stripSchools is empty and the clusters point honestly to Kolkata and Delhi NCR. Rendered with the shared
 * CountryLanding layout used by /gurgaon/.
 */
export const asarganj: CitySeoPage = {
  slug: "asarganj",
  countryName: "Asarganj",
  countryNameLong: "Asarganj, Munger district, Bihar",
  demonym: "Asarganj",
  state: "Bihar",
  stateCode: "IN-BR",
  flagCode: "in",
  countryCode: "IN",
  region: "Bihar, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Timings leave room for Saawan pilgrim traffic, Chhath, the Ganga flood weeks and the cold, foggy December mornings",
  lastUpdated: "2026-09-21",
  geo: { latitude: 25.15, longitude: 86.68 },
  wikipedia: "https://en.wikipedia.org/wiki/Asarganj",
  alternateNames: ["Asarganj Munger", "Asarganj Bazar"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Asarganj | Online Home Tuition Bihar",
  metaDescription:
    "IB and IGCSE tutors for Asarganj, Munger: live one-to-one online tuition in Maths, sciences, MYP and DP, Hindi-speaking families welcome, free trial.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Asarganj",
  heroEyebrow: "ASARGANJ, MUNGER IB AND IGCSE ONLINE TUITION",
  heroSubtitle:
    "A family in Asarganj that wants home tuition for an IB or IGCSE course gets it as a live video lesson at the kitchen table or study desk, taught privately by someone who has handled that exact syllabus. The tutor does not arrive by road from Munger or Patna; visits to a door are limited to Gurugram and parts of Delhi NCR. What opens up instead is the whole country's tutor pool, one-to-one, after a free first session.",
  primaryKeyword: "IB and IGCSE tutors in Asarganj",
  imageAltText: "A school student in Asarganj, Munger district, follows an online IB Physics lesson on a laptop with a tutor on screen",
  secondaryKeywords: [
    "IB tutor Asarganj",
    "IGCSE tutor Asarganj",
    "IB home tuition Asarganj",
    "IGCSE home tuition Asarganj",
    "IB private tuition Asarganj",
    "IB Maths tutor Asarganj",
    "IGCSE Maths tutor Asarganj",
    "IB Physics tutor Asarganj",
    "IB Chemistry tutor Asarganj",
    "IB Biology tutor Asarganj",
    "IB DP tutor Asarganj",
    "IB MYP tutor Asarganj",
    "IB PYP tutor Asarganj",
    "IGCSE online tuition Asarganj",
    "IB tutor Tarapur",
    "IGCSE tutor Munger",
    "online IB tutor Bhagalpur",
    "IB tuition Asarganj Bihar",
    "IB and IGCSE tutors in Asarganj",
  ],

  heroTrustPoints: [
    "Hindi at home is fine; lessons are in English with explanations repeated in Hindi where it helps",
    "No road trip involved: a doorstep tutor exists only in Gurugram and parts of Delhi NCR",
    "A complete first lesson to watch before spending anything",
    "A short summary after each class for parents who are out at work",
  ],
  heroStats: [
    { value: "Class 1 to 12", label: "PYP, MYP and Diploma years" },
    { value: "Two IGCSE boards", label: "Cambridge and Pearson Edexcel" },
    { value: "IST", label: "No clock difference" },
    { value: "Free trial", label: "Try before deciding" },
  ],

  intro: {
    heading: "What an IB or IGCSE tutor does for a family in Asarganj",
    paragraphs: [
      "Asarganj is a Nagar Panchayat in Munger district, home to around twenty thousand people by the 2011 count, and known in Bihar for rice milling, furniture workshops and a busy market. Hindi and Angika are heard in the lanes. Nobody here is surrounded by international schools, so a family curious about the IB or Cambridge IGCSE is really asking how to get serious subject teaching into a house that has a laptop and a decent connection.",
      "Our answer is a tutor on the screen. The student sits down in the evening, a specialist appears on video, and a shared page fills with working as it happens. For IB and IGCSE tutors in Asarganj the postcode matters not at all, since the person coaching IB Chemistry could be in Delhi and the one handling IGCSE Mathematics in Kolkata. Everything runs on Indian Standard Time.",
      "Please read the next point twice if you are searching for 'home tuition'. In Asarganj it means tuition from home over video. We do not send anyone to the door here; that service operates in Gurugram and parts of Delhi NCR alone. Anyone who tells you otherwise about IB teaching in the Munger area should be asked which course they last taught.",
      "Coaching is the line tutors keep. They explain, set questions, mark mock papers and rehearse orals. They never write an Internal Assessment, an Extended Essay, a TOK essay or coursework that carries a candidate's name. IB Gram is independent of the IB, Cambridge, Pearson and all schools mentioned on this page.",
    ],
    bullets: [
      "Help across PYP, MYP, Diploma and Career-related courses",
      "Cambridge and Pearson Edexcel IGCSE at both tiers",
      "Private, live lessons with a shared writing space",
      "A free opening class and a written plan after it",
      "Entirely online; no visits to Asarganj houses",
    ],
  },

  programmesIntro:
    "In Munger district an international programme is rarely something a child grows into inside a local classroom. It arrives by a school transfer, a boarding decision in another city or a family's plan to study abroad. Each stage below is described with that kind of route in mind.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class 1-5, ages 3-12",
      description:
        "Six themes, such as who we are or sharing the planet, are explored through questions that children help to frame, and the last year closes with a self-directed Exhibition. No board paper exists at this stage, so a tutor works on reading stamina, quick mental arithmetic and speaking in full English sentences.",
      countryNote:
        "A younger child in Asarganj who may later join a Kolkata school can start weekly English reading now, while Hindi remains the language of play and family talk.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6-10, ages 11-16",
      description:
        "Each subject is marked against four published criteria, and the programme ends with a Personal Project carried out over many months. Pupils arriving from a Bihar board classroom, where the textbook sets the boundary, have to learn that an examiner now wants a reasoned position.",
      countryNote:
        "A move at Class 8 is the usual case from Munger district, and the first term goes mostly on science vocabulary in English and on writing out reasons step by step.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level and three at Standard, run beside Theory of Knowledge, a 4,000-word Extended Essay and a service strand. Teachers grade the Internal Assessments, moderators check them, and most Indian schools sit the final papers in May.",
      countryNote:
        "No Diploma school exists in the district, so an Asarganj student is typically boarding in Kolkata or further away, and weeknight tutoring helps when the hostel has no subject specialist.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses are paired with a vocational study, a reflective project and skills units. Few Indian schools run it, which leaves most of our help concentrated on the Diploma-level courses inside the pathway.",
      countryNote:
        "It almost never comes up from Asarganj, but if a boarding school has already set the combination, we match to those exact subjects.",
    },
  ],

  subjectsIntro:
    "Subject names on a prospectus hide the real detail. Maths AA and AI, HL and SL, a May or November sitting: each changes what a tutor needs to know. We take the course, level and exam date first, and only afterwards ask when the family can connect in the evening.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof dominate, and HL candidates face a Paper 3 of unfamiliar investigations, which only improves by attempting problems that look new." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Data, probability and modelling run the course, with a calculator routine that must be second nature before the first paper." },
    { name: "IB Physics", levels: "HL / SL", description: "Mechanics, waves and fields feed a Paper 2 that rewards clear reasoning, while the investigation is judged on whether its method could be repeated." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Quantitative work and bonding open the course and organic mechanisms come later, so the data booklet should be familiar by the first term." },
    { name: "IB Biology", levels: "HL / SL", description: "Marks depend on obeying the verb in a question, and experimental data questions favour patient readers of graphs." },
    { name: "IB Economics", levels: "HL / SL", description: "Rice prices, flood-year supply and migration remittances give Bihar students handy real examples for diagrams and evaluation." },
    { name: "IB Business Management", levels: "HL / SL", description: "A rice mill, a furniture workshop or a retail shop makes an authentic study for the internal assessment, provided the owner agrees to share figures." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Cold reading of unseen texts, comparison across set works and an oral commentary are each trained separately." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Written theory about networks and data sits beside a working program, so sessions alternate between papers and debugging." },
    { name: "IB Psychology", levels: "HL / SL", description: "Studies must be named and explained, and a focused argument on two of them tends to beat a list of five." },
    { name: "IB Hindi B", levels: "SL / HL", description: "Native speakers still need the formal text types and interactive oral rehearsed, and Hindi often becomes a reliable scoring subject." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Ganga floodplain flooding, silt and sand mining and groundwater use give strong case studies close to home." },
    { name: "IB Geography", levels: "HL / SL", description: "Named examples and a defensible fieldwork design count most, and river processes in the Ganga basin are a ready example." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis in Paper 1 and a sustained argument in Paper 2 reward careful planning before writing." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "The pupil argues a title and drafts the exhibition commentary unaided, with the tutor asking sharper questions." },
  ],

  igcseSubjectsIntro:
    "Tier is the first IGCSE decision, because Core stops at a grade C and Extended opens the whole scale. After that, plans follow the board and sitting the school or centre has registered, Cambridge in May-June or October-November, Pearson Edexcel in January, May-June or October.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended moves briskly through algebra, trigonometry and graphs, and every written line protects method marks." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus and trigonometric identities arrive earlier than in the Bihar syllabus, building a ladder to IB Analysis and Approaches." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Fast equation rearrangement and the alternative-to-practical paper are the two skills that separate grades." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations and organic families carry most marks, and qualitative analysis tables improve through repetition." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, enzymes and ecosystems recur yearly, and long answers are scored against marking points." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "Directed writing and summary have methods that are learned best by timed reading of unseen passages." },
    { name: "IGCSE English as a Second Language 0510", levels: "Grade 9-10", description: "Aimed at pupils building fluency, with listening, reading and writing drilled in exam style." },
    { name: "IGCSE Hindi as a Second Language 0549", levels: "Grade 9-10", description: "Home speakers of Hindi often score well here with formal writing and comprehension practice." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Diagrams are marked from the first question, and evaluation answers later in the paper take separate practice." },
    { name: "IGCSE Business Studies 0450", levels: "Grade 9-10", description: "Answers that use the case study's own business details outscore general theory." },
  ],

  regionsTitle: "Asarganj and the Munger-Bhagalpur belt we serve online",
  regionsIntro:
    "A screen-based lesson makes place matter only as background: which schools a neighbourhood uses, how far the nearest big city is, and how roads and rivers shape the evening. These are genuine localities around Asarganj.",
  regions: [
    { name: "Asarganj town", note: "The Nagar Panchayat itself, with a market, rice mills and furniture workshops, served by Bihar board and a few private schools." },
    { name: "Tarapur", note: "The neighbouring town in Munger district, known for its history and a busy trading street." },
    { name: "Munger Fort area", note: "The old centre of Munger city, with long-established schools, colleges and bookshops." },
    { name: "Bari Pahari, Munger", note: "A residential and institutional quarter of Munger, popular with government employees and teachers." },
    { name: "Jamalpur", note: "A railway town with a famous locomotive workshop, home to families used to transfers and to English-medium schooling." },
    { name: "Kharagpur", note: "A lakeside block town in Munger district, with a mixed rural and trading population." },
    { name: "Dharhara", note: "A rural block known for its Ganga-side villages, where internet quality and power are the main practical questions for lessons." },
    { name: "Sultanganj", note: "The Ganga town in Bhagalpur district, starting point of the Shravani Mela route that passes near Asarganj." },
    { name: "Tilka Manjhi, Bhagalpur", note: "The university and college area of Bhagalpur, the bigger neighbouring city for coaching and admissions." },
    { name: "Lakhisarai", note: "The next district town west, with a railway junction used by families commuting towards Patna." },
  ],

  schoolDisclaimer:
    "Schools are named only to say what they teach and where. Nothing on the page signals a partnership, commission or endorsement, and IB Gram operates separately from the International Baccalaureate, Cambridge, Pearson and every named school.",
  schoolClusters: [
    {
      city: "Asarganj and Munger district",
      note: "We found no school in Asarganj, Tarapur or Munger that could be confirmed as teaching the IB or Cambridge or Edexcel IGCSE. Schools there follow the Bihar board and CBSE, so help with international courses comes through tutoring.",
      schools: [],
    },
    {
      city: "Nearby: Bhagalpur and Patna",
      note: "Bhagalpur is the closest big city and Patna the state capital; our own checks turned up no confirmed IB or IGCSE campus in either, although both have CBSE and ICSE choices and strong coaching.",
      schools: [],
    },
    {
      city: "Nearby: Kolkata (a boarding option)",
      note: "The nearest metropolis with confirmed IB and IGCSE campuses, long used by eastern Bihar families who board a child for the Diploma, reachable by train from Jamalpur or Bhagalpur.",
      schools: ["The Heritage School, Kolkata", "Calcutta International School"],
    },
    {
      city: "Nearby: Delhi NCR (a boarding option)",
      note: "A long way off, but with the widest choice of IB schools in India; in-person tutoring exists only here and in Gurugram, never delivered back into Asarganj.",
      schools: ["Pathways World School, Aravali"],
    },
  ],

  modesIntro:
    "Each option below is live, private and online with a tutor based in India, running on IST. They differ in tempo: a regular weekly slot, a term map with written updates, or a tight run before papers. No plan includes visits to Asarganj homes, as in-person tuition exists only in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Regular weekly one-to-one on video",
      description:
        "One fixed evening, one tutor, a shared page for working, and homework that gets marked before the next meeting.",
      bullets: [
        "Tutors from any Indian city",
        "Fits MYP, DP and IGCSE",
        "Every step visible as it is written",
        "A single tutor across the term",
      ],
    },
    {
      title: "Term map with written updates",
      description:
        "A plan for the term, a brief note after each class and a fuller review every month, ideal when parents are out at work through the evening.",
      bullets: [
        "A note after every class",
        "A review each month",
        "Comfortable for younger pupils",
        "A second weekly slot can be added",
      ],
    },
    {
      title: "Short intensive before papers",
      description:
        "Two to four classes a week for a limited stretch ahead of mocks and the May or October series, scheduled away from Chhath and the flood weeks.",
      bullets: [
        "Papers marked against current schemes",
        "Comments returned in two days",
        "Placed around the school calendar",
        "Usually booked two to three weeks ahead",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there any IB or IGCSE school near Asarganj?",
      paragraphs: [
        "Not that we could confirm. Asarganj, Tarapur and Munger have Bihar board schools, CBSE campuses and a few private English-medium ones, but none that we could verify teaches the IB or Cambridge or Edexcel IGCSE. We also looked at Bhagalpur and Patna and found none confirmed there either, which is worth knowing before anyone plans a move.",
        "The nearest confirmed campuses are in Kolkata, with Pathways World School in the Delhi NCR a much longer journey. Kolkata is reachable by train from Jamalpur or Bhagalpur, and many eastern Bihar families already have relatives or contacts there, so it is the realistic boarding choice. The expense and the distance from home make it a decision for the Diploma years, not for a young child.",
        "Who asks anyway? Railway and government employees at Jamalpur and Munger who have been posted across the country, families with a son or daughter working abroad, local business owners in milling, timber and trading who want options for the next generation, and parents unhappy with rote learning. None of them is choosing from a list of local campuses.",
        "For such households a tutor is not a supplement but the first contact with the syllabus. That changes what we ask: which board, which code, which sitting, and what the child finds hardest today.",
      ],
      table: {
        caption: "Confirmed international-curriculum campuses reachable from Asarganj",
        columns: ["School", "City", "What we could confirm"],
        rows: [
          ["The Heritage School", "Kolkata", "IB and IGCSE offered"],
          ["Calcutta International School", "Kolkata", "IB and IGCSE offered"],
          ["Pathways World School", "Aravali, Delhi NCR", "IB offered, boarding"],
          ["Munger, Bhagalpur and Patna", "Bihar", "No IB or IGCSE school confirmed"],
        ],
      },
      bullets: [
        "Nothing confirmed in Asarganj, Munger, Bhagalpur or Patna",
        "Kolkata is the nearest confirmed cluster",
        "Delhi NCR is a long-distance boarding option",
        "Tutoring is the first step for most local families",
      ],
    },
    {
      heading: "Bihar board or CBSE versus IB and IGCSE: what changes for an Asarganj child?",
      paragraphs: [
        "The Bihar School Examination Board runs the matriculation exam at Class 10 and the intermediate at Class 12, both in February and March. They reward a student who has absorbed the textbook and writes it out cleanly. IB and IGCSE examiners start from the same preparation but ask the pupil to apply it, to read a data table nobody has seen or to evaluate a claim.",
        "Language shifts as well. Instruction in many Bihar schools is in Hindi or mixed Hindi and English. IB and IGCSE assess every subject other than languages in English. A child who understands photosynthesis well in Hindi may take a few weeks to explain it in English with the right terms, and teachers can speed this up by building a one-page glossary per unit.",
        "Coursework is the third piece. Board projects are brief, whereas an IB Internal Assessment or IGCSE coursework piece involves planning, drafting and reflecting across weeks. Pupils joining at Class 9 or 11 need that process taught like a skill, which a weekly tutor can do without ever writing the work.",
        "A final word on fear. Parents sometimes assume the international route must be harder in every respect. It is different, and for children who dislike memorising blocks of text it can be kinder, because criteria show exactly where each mark went.",
      ],
      table: {
        caption: "Boards compared from an Asarganj classroom",
        columns: ["What students notice", "Bihar board", "CBSE", "IB and IGCSE"],
        rows: [
          ["Marks come from", "Accurate textbook answers", "Textbook plus application questions", "Reasoning applied to new material"],
          ["Language of study", "Hindi, English or mixed", "English or Hindi", "English, with a language option"],
          ["Project work", "Short and procedural", "Internal assessment marks", "Long coursework with criteria"],
          ["Usual joining point", "Class 1 onward", "Class 1 or Class 9", "Grade 9 for IGCSE, Class 11 for the Diploma"],
        ],
      },
      bullets: [
        "Bihar board rewards clean recall; IB and IGCSE reward application",
        "English terms for science take a few weeks to settle",
        "Coursework is a skill that can be taught",
        "Class 8 or 9 is the smoothest moment to switch",
      ],
    },
    {
      heading: "How are fees for IB or IGCSE tutors in Asarganj decided?",
      paragraphs: [
        "The quote reflects the level of the course, the subject, how long a class lasts and how many a week you want. A Diploma HL Physics specialist is harder to find than someone for Class 6 Maths, and the fee follows. You see the number in writing before the trial, and no table of prices appears on this site because it would mislead.",
        "Nothing is added for travel. Lessons are delivered over video, so an Asarganj family pays for teaching time only, and a tutor in Lucknow costs the same as one in Bengaluru. Parents who have paid a local tutor for fuel and waiting from Munger or Bhagalpur will notice what that removes.",
        "Look at what an hour contains. Time with a person who has just taught the current IB Chemistry guide, or who knows how Cambridge frames IGCSE 0620 practical questions, is usually worth more than extra hours of general revision. Ask who the tutor is, which papers they have marked and how you will hear about progress.",
        "Commitment is light. Families can pause during Chhath or mock season, cut back to fortnightly lessons or stop entirely, and a tutor who is not right gets replaced. Fees do not shift mid-term without notice.",
      ],
      bullets: [
        "Course level, subject and class length decide the fee",
        "No travel charge because lessons are online",
        "The figure arrives in writing before the trial",
        "Pause, change tutor or stop without penalty",
      ],
    },
    {
      heading: "Local coaching, private tutors, online home tuition or self-study: which works from Asarganj?",
      paragraphs: [
        "Bihar's coaching culture is famous, with Patna the centre for engineering and medical entrance preparation and Bhagalpur and Munger running smaller versions. These batches target JEE, NEET and board exams. We know of none built for IB Biology HL or IGCSE Additional Mathematics, and a pupil who travels each day for a batch loses hours the syllabus gives back only partly.",
        "Private tutors in town are often excellent with Bihar board content. Their limit is currency in international specifications, which are revised and re-marked. A teacher who has not handled the present IB guide may confidently prepare a child for an earlier version.",
        "Self-study works for disciplined students in subjects with plenty of past papers, but it gives no feedback on an Internal Assessment plan, an essay structure or a spoken commentary. Those skills stay where they began.",
        "An online one-to-one tutor sits between these. Syllabus knowledge is closer than a general batch, attention is individual, and the family is free to pick the person who has taught the course, not the person who lives nearest.",
      ],
      table: {
        caption: "Support routes for an Asarganj student",
        columns: ["Route", "Syllabus match", "Attention", "Limit for Asarganj"],
        rows: [
          ["Coaching batch in Munger, Bhagalpur or Patna", "Aimed at JEE, NEET and board papers", "Shared batch", "No IB or IGCSE batches known; daily travel"],
          ["Private tutor in town", "Varies with their experience", "Individual", "Few have taught the current international course"],
          ["Self-study", "Whatever the pupil picks", "None", "Coursework and essays go uncorrected"],
          ["Online specialist tutor", "Chosen for the exact code and level", "Individual", "Depends on steady power and internet"],
        ],
      },
      bullets: [
        "Bihar coaching is built for JEE, NEET and boards",
        "Specification currency is the weak spot of generalists",
        "Self-study gives no feedback on coursework",
        "Online tutors are chosen for the course, not the address",
      ],
    },
    {
      heading: "How do the Ganga floods, Saawan and Chhath shape an Asarganj study year?",
      paragraphs: [
        "The Ganga and its tributaries rise through the monsoon months, and low-lying parts of Munger district can flood from July to September. Roads close and power fails with little warning. An online lesson can survive a closed road but not a blackout, so we advise a charged laptop, a phone hotspot and a flexible approach to reschedule.",
        "Saawan, the month of the Shravani Mela, brings pilgrims along the Sultanganj to Deoghar route that passes close to Asarganj. Traffic and noise rise, and some families are busy with the pilgrimage economy. Chhath Puja in October or November is Bihar's great family festival and a firm pause for almost every household, with Durga Puja and Diwali also taking days.",
        "The cold arrives in December and January with dense fog and short days. Morning commutes are slower and evening study is a better bet. Summers in April to June are hot, with power strain, so early or late slots work best. Board exams for the Bihar syllabus fall in February and March, which may overlap with IB or IGCSE mocks for dual-enrolled students.",
        "Exam series sit on top: the IB in May, Cambridge in February-March in India, May-June and October-November, Edexcel in January, May-June and October. A tutor builds backwards from whichever one your school has chosen.",
      ],
      table: {
        caption: "An Asarganj study year",
        columns: ["Period", "Local rhythm", "Tutoring approach"],
        rows: [
          ["January to March", "Fog and cold; Bihar board exams; Edexcel January window", "Evening lessons and marked mock papers"],
          ["April to June", "Heat and power strain; IB May and Cambridge May-June", "Early or late slots; rest before papers"],
          ["July to September", "Ganga flood risk; Saawan; Durga Puja approaches", "Backup power and connection; flexible rescheduling"],
          ["October to December", "Chhath, Diwali; Cambridge and Edexcel autumn series; cold sets in", "Short blocks and retake support"],
        ],
      },
      bullets: [
        "Keep a charged laptop and hotspot in flood weeks",
        "Treat Chhath as a firm break",
        "Choose evening slots in the foggy winter months",
        "Plan from the series actually entered",
      ],
    },
    {
      heading: "Where can an Asarganj student go after the IB or IGCSE?",
      paragraphs: [
        "For Indian universities, the Association of Indian Universities issues equivalence for Diploma certificates, and CUET-UG is the entrance route to central universities. Every course sets its own subject conditions and updates them yearly, so check the live notice, not a neighbour's memory.",
        "Engineering and medicine need care. JEE Main and NEET-UG state eligibility rules for candidates from IB and IGCSE backgrounds, and Bihar's own counselling for state colleges has separate rules for non-state-board certificates. Deadlines are tight, so start the paperwork early.",
        "Many Bihar families aim for Delhi, Patna, Kolkata or Bengaluru for college, and a growing number look at universities abroad. The Diploma and A Levels are the usual route for UK, Canadian, Australian, Singapore and US applications. IGCSE is a platform for those, not an admissions ticket.",
        "We help with subject choice and honest predicted-grade planning. We do not promise offers, and we would not want to.",
      ],
      table: {
        caption: "Next steps from IB and IGCSE for Asarganj students",
        columns: ["Goal", "Usual route", "Check first"],
        rows: [
          ["Central universities", "AIU equivalence, then CUET-UG", "Subjects accepted for each course"],
          ["Engineering in India", "JEE Main or Bihar counselling", "Rules for non-state-board candidates"],
          ["Medicine in India", "NEET-UG", "Subject and equivalence criteria"],
          ["UK, Canada, Australia, Singapore", "Diploma or A Level with predicted grades", "Subject prerequisites and English tests"],
        ],
      },
      bullets: [
        "AIU equivalence is the first Indian check",
        "Bihar counselling has separate rules for other boards",
        "Delhi, Kolkata and Bengaluru are common college cities",
        "Tutors guide choices but promise no offers",
      ],
    },
    {
      heading: "How are IB Maths and the sciences taught online to an Asarganj student?",
      paragraphs: [
        "The first choice is between Analysis and Approaches and Applications and Interpretation. A child who loves algebra and plans engineering fits the first; one who prefers data, economics or psychology often finds the second more natural. A trial with a tutor who teaches both usually makes it plain.",
        "The sciences share a pattern. Content is learnable, but marks hinge on reading command terms, handling units and interpreting data. Tutors drill these weekly and coach the investigation by asking whether the method can be repeated and the uncertainty explained.",
        "A shared whiteboard makes online teaching workable. The tutor sees where an algebraic step slips and stops there. Students photograph handwritten pages, annotate PDF past papers and sometimes record a short explanation before the class.",
        "Higher Level asks for steady pace. A pupil who coasts through Class 11 often finds the final year crowded with Paper 3, practicals and the Extended Essay, and a regular weekly class spreads the load.",
      ],
      bullets: [
        "Choose AA or AI by strengths and target degree",
        "Command terms and data questions are practised weekly",
        "The shared board shows working as it forms",
        "HL needs a steady start in Class 11",
      ],
    },
    {
      heading: "Which IGCSE tier and subjects suit an Asarganj student?",
      paragraphs: [
        "Core papers cover the essentials and stop at grade C. Extended papers add the harder topics and open A* to G. Mathematics and the sciences offer both, so the tier should be agreed with the school by the end of Grade 9.",
        "Subjects should follow the next step. A pupil heading for IB Maths HL or A Level Maths benefits from Additional Mathematics. Future medics should hold separate sciences. Hindi as a second language is a sensible add-on for a home speaker, and commerce-minded families often add Economics or Business Studies.",
        "Boards differ in style. Cambridge papers carry numbered syllabus codes and an alternative-to-practical paper in the sciences, while Edexcel phrases questions differently and runs a January series. The tutor you meet should know the one your school has chosen.",
        "IGCSE results double as a checkpoint: they ease entry into the Diploma or A Level and tell a family honestly whether the international route is working.",
      ],
      table: {
        caption: "IGCSE Core and Extended",
        columns: ["Point", "Core", "Extended"],
        rows: [
          ["Highest grade", "C", "A*"],
          ["Content", "Essential topics", "Core plus harder extensions"],
          ["Suits", "Students needing steady confidence", "Students heading to IB Maths HL, A Level or sciences"],
          ["Decide by", "End of Grade 9", "End of Grade 9"],
        ],
      },
      bullets: [
        "Settle the tier with the school in Grade 9",
        "Additional Mathematics bridges to IB AA HL",
        "Hindi is a sensible second-language add-on",
        "Prepare for the board actually entered",
      ],
    },
  ],

  process: [
    { title: "Tell us the situation", description: "The class, the board or programme, the subject and level, how the last tests went and which evenings are quiet at home." },
    { title: "Look at a brief shortlist", description: "Two or three names with a note on what each has taught, picked for the specification and not for the postcode." },
    { title: "Take the free first class", description: "A real topic taught live over video; you watch the teaching before any money or promise changes hands." },
    { title: "Fix the opening month", description: "Topics, slot, the way news reaches you and the fee, written down before regular classes start." },
    { title: "Keep reviewing", description: "A note after each class, a longer chat every month and a swap of tutor if the match is poor." },
  ],

  whyPoints: [
    { title: "Course code first", description: "The search begins with IB Physics SL or IGCSE 0625 Extended, so the tutor has taught that very paper." },
    { title: "Built for a district with no campus", description: "Munger has no school we could verify for these courses, so the hunt spans the country." },
    { title: "Judge by teaching", description: "A free class lets you see how a tutor explains, which a profile cannot show." },
    { title: "Coaching with limits", description: "Explaining, marking and rehearsing are offered; writing an IA, Extended Essay, TOK essay or coursework is not." },
    { title: "Notes for busy parents", description: "A short summary after each class suits families where both adults are out until evening." },
    { title: "Walk away any time", description: "Pause, swap tutor or finish, with no tie to a school, board or contract." },
  ],

  faqs: [
    { question: "Are there IB and IGCSE tutors in Asarganj?", answer: "Yes, as video tutors who teach Asarganj students from other cities in India. It is rare to find anyone in Munger district who has taught the current IB or IGCSE course recently, so we choose by syllabus and subject, not address. Classes run on IST with a shared screen and a free first session." },
    { question: "Does a tutor visit homes in Asarganj?", answer: "No. Visits to a door run only in Gurugram and parts of Delhi NCR. In Asarganj you get private tuition at home delivered online, with your child at a laptop and the tutor on the screen, which actually widens the range of specialists available to you." },
    { question: "Is there an IB or IGCSE school in Asarganj or Munger?", answer: "None we could confirm. Schools in Asarganj, Tarapur and Munger follow the Bihar board or CBSE, and our checks of Bhagalpur and Patna found no confirmed IB or IGCSE campus either. Kolkata holds the nearest campuses we could confirm." },
    { question: "What is the cost of an IB or IGCSE tutor in Asarganj?", answer: "It depends on the course level, subject, class length and weekly frequency, and you get the figure in writing before the trial. Travel adds nothing since classes are online. We publish no price list because a Class 6 tutor and an IB Physics HL specialist cannot fairly share one." },
    { question: "My child studies in Hindi medium. Can they move to IGCSE?", answer: "Yes, and Class 8 or 9 is the gentlest time. Early classes build English science vocabulary and teach the command words examiners use. Tutors can explain a hard idea in Hindi first, then rebuild the answer in English." },
    { question: "How do we choose between IB Maths AA and AI?", answer: "Analysis and Approaches suits a child who enjoys algebra, calculus and proof and may head for engineering. Applications and Interpretation suits one more comfortable with data and modelling, perhaps bound for economics or social science. A trial class with a tutor who has taught both usually settles it." },
    { question: "Will you write the IA or Extended Essay?", answer: "No. Tutors explain criteria, question drafts and rehearse discussions, then leave the writing to the pupil. IAs, Extended Essays, TOK essays and coursework must be the student's own, and outside writing can cost a candidate the whole qualification." },
    { question: "Do you teach both Cambridge and Edexcel IGCSE?", answer: "Yes. The boards use different codes and paper layouts, so tell us which one your school has entered the child for. We then look for a tutor who has taught that exact course and tier." },
    { question: "When are the exams held?", answer: "The IB Diploma sits in May and November, and May is the norm in India. Cambridge IGCSE has February-March in India, May-June and October-November, while Edexcel runs January, May-June and October. Your school or centre confirms the one that applies." },
    { question: "What if the flood or a power cut interrupts a class?", answer: "Keep the laptop charged and a phone ready as a hotspot. If a flood or outage still stops the class, we move it to another evening in the same week without charge. Closed roads do not matter for an online lesson, but power does." },
    { question: "Can classes pause for Chhath or Durga Puja?", answer: "Yes. Most families rest during Chhath and Durga Puja, and tutors leave a small revision task to keep the thread. The harder limit is mock season, so extra classes are placed there instead of in festival weeks." },
    { question: "Does my child need good English before starting?", answer: "Not perfect English. Many Asarganj students begin with limited science vocabulary, and tutors build it unit by unit with a short glossary and practice answers. Fluency usually grows within a term or two of steady classes." },
    { question: "Is the trial really free?", answer: "Yes. The first class is a real lesson on a topic from your child's syllabus, with no fee and no obligation. Afterwards you get a short note, a suggested plan and the fee in writing, and you choose whether to continue." },
    { question: "What if my child does not like the tutor?", answer: "Tell us and we will find another, usually within days, after asking what was missing. No contract holds you to one person, and stopping altogether carries no penalty." },
    { question: "Can IB students from Bihar apply to Indian universities and NEET?", answer: "Yes, within each body's published rules. Universities ask for AIU equivalence, many central universities use CUET-UG, and NEET-UG, JEE Main and Bihar counselling each state their own conditions for other boards. Read the current notice early because details change." },
    { question: "How do I start with IB and IGCSE tutors in Asarganj?", answer: "Email support@ibgram.com or message +91 7439 368 115 on WhatsApp with the class, board or programme, subject, level and free evenings. A shortlist and trial times follow, and nothing is decided until you have seen a class." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Munger", href: "/munger/", description: "The district headquarters nearby and its school picture." },
    { label: "IB and IGCSE tutoring in Bhagalpur", href: "/bhagalpur/", description: "The larger neighbouring city across the district line." },
    { label: "IB and IGCSE tutoring in Patna", href: "/patna/", description: "Bihar's capital and its coaching culture." },
    { label: "IB and IGCSE tutoring in Kolkata", href: "/kolkata/", description: "The nearest city with confirmed IB and IGCSE campuses." },
    { label: "IB tutoring across India", href: "/india/", description: "See how the same online approach works elsewhere." },
    { label: "Home tuition in Gurgaon", href: "/gurgaon/", description: "The one area where a tutor does come to the door." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Groups, levels, the Core and how the final papers are built." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "Subject criteria and the Personal Project explained." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "Units of inquiry and the Exhibition for younger pupils." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subject mixes and sitting dates." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "Choosing between the two IB Maths courses." },
    { label: "Browse tutors", href: "/tutors/", description: "Profiles you can filter by subject, programme and experience." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write in with a brief and ask for a trial slot." },
  ],

  tutorsIntro:
    "These tutors teach over video from other parts of India, so an Asarganj family can choose by subject strength and style, not by who lives near Munger. None of them visits homes here.",

  closingHeading: "Request a free IB or IGCSE trial class for your Asarganj student",
  closingBody:
    "Write with the class and board or programme, the subject and level that worry you, and the evenings that are free at home in Asarganj. A tutor suggestion, a short account of their teaching and some trial slots come back by reply, whether you use support@ibgram.com or WhatsApp on +91 7439 368 115. The trial is online and costs nothing; the choice stays with you.",
};
