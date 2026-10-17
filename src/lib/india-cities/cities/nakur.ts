import type { CitySeoPage } from "../types";

/**
 * /nakur/ - IB and IGCSE tutoring page for Nakur, Saharanpur district, Uttar Pradesh. No school in the
 * town could be confirmed as teaching the IB or Cambridge/Edexcel IGCSE, so stripSchools is empty and
 * clusters point honestly to Dehradun/Mussoorie and Noida. Online-only delivery: home visits run only
 * in Gurugram and parts of Delhi NCR. Rendered with the shared CountryLanding layout.
 */
export const nakur: CitySeoPage = {
  slug: "nakur",
  countryName: "Nakur",
  countryNameLong: "Nakur, Uttar Pradesh",
  demonym: "Nakur",
  state: "Uttar Pradesh",
  stateCode: "IN-UP",
  flagCode: "in",
  countryCode: "IN",
  region: "Uttar Pradesh, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Classes avoid the Kanwar Yatra road closures, Holi and Diwali weeks, Eid, winter fog evenings and the UP Board exam stretch",
  lastUpdated: "2026-09-21",
  geo: { latitude: 29.9167, longitude: 77.3000 },
  wikipedia: "https://en.wikipedia.org/wiki/Nakur",
  alternateNames: ["Nakur Saharanpur", "Nakud", "Nakur Tehsil"],
  stripSchools: [],

  title: "IB & IGCSE Tutors in Nakur | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Nakur, Saharanpur district: PYP to Diploma and Cambridge or Edexcel IGCSE, live one-to-one classes at home, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Online Home Tuition in Nakur",
  heroEyebrow: "NAKUR, SAHARANPUR: PRIVATE ONLINE IB AND IGCSE CLASSES",
  heroSubtitle:
    "Families in Nakur who search for home tuition for an IB or IGCSE child should expect a private class on a laptop at their own table, run by a tutor who has taught the exact paper. No tutor from IB Gram visits Nakur houses; in-person visits are confined to Gurugram and parts of Delhi NCR. The tehsil town twenty-four kilometres from Saharanpur has UP Board and CBSE schools but no IB or Cambridge classroom we can confirm, so the teaching reaches your child through a screen.",
  primaryKeyword: "IB and IGCSE tutors in Nakur",
  imageAltText: "A Nakur student in western Uttar Pradesh working through an IGCSE Physics paper while her online tutor follows along on a laptop",
  secondaryKeywords: [
    "IB tutor Nakur",
    "IGCSE tutor Nakur",
    "IB home tuition Nakur",
    "IGCSE home tuition Nakur",
    "IB private tuition Nakur",
    "IB Maths tutor Nakur",
    "IGCSE Maths tutor Nakur",
    "IB Physics tutor Nakur",
    "IB Chemistry tutor Nakur",
    "IB Biology tutor Nakur",
    "IB DP tutor Nakur",
    "IB MYP tutor Nakur",
    "IB PYP tutor Nakur",
    "IGCSE online tuition Nakur",
    "Cambridge IGCSE tutor Nakur",
    "IB tutor Nakur Saharanpur",
    "online IB tutor Gangoh",
    "IGCSE tutor Saharanpur district",
    "IB tutor Nakud",
  ],

  heroTrustPoints: [
    "Every shortlist starts with the paper code, level and board your child sits, never a loose IB or IGCSE tag",
    "Classes happen over live video; the only place a tutor comes to the door is Gurugram and parts of Delhi NCR",
    "You watch a complete trial lesson before agreeing to anything, and it costs nothing",
    "IB Gram is independent of every school, exam board and university named here",
  ],
  heroStats: [
    { value: "PYP to DP", label: "All IB stages" },
    { value: "CAIE & Edexcel", label: "Both IGCSE boards" },
    { value: "IST", label: "No time gap" },
    { value: "Free trial", label: "Try it first" },
  ],

  intro: {
    heading: "What studying an international syllabus involves in Nakur",
    paragraphs: [
      "Nakur carries its history lightly. Legend says Nakul, the Pandava twin, founded it, and a tree in the Mahadev temple is said to mark his stay. Pashtun families who traced their line to the Sur dynasty settled here, and the Ain-i-Akbari already listed Nakur as a pargana of Saharanpur. Today it is a tehsil town of about twenty-three thousand people in the sugarcane belt of western Uttar Pradesh.",
      "Its schools teach the UP Board in Hindi and English medium, with a few CBSE options. Whether any teaches the IB or a Cambridge or Edexcel IGCSE is a question we answered carefully: we could not confirm one in Nakur or elsewhere in the tehsil. Saharanpur, the nearest city, is the same, so a Nakur family wanting either qualification must arrange the teaching directly.",
      "Those who ask are not a single type. There are professionals from Delhi, Noida or Dehradun who returned to family land and brought a child mid-course. Gulf and UK diaspora households with ties to western UP appear too. And some are ambitious local families, often in trade or education, who see an international qualification as a route to universities abroad or to the better Indian ones.",
      "IB Gram has no connection to any school, exam board or university named on this page. Tutors explain, set practice and mark honestly. They never draft Internal Assessments, Extended Essays or any assessed work that carries a student's name.",
    ],
    bullets: [
      "IB lessons from PYP through the Diploma, in a town that has no IB school",
      "Cambridge and Pearson Edexcel IGCSE, organised by paper code and tier",
      "Private video classes in Indian Standard Time",
      "A short note after each class and a written plan after the trial",
      "No tutor visits in Nakur; in-person tuition runs only in Gurugram and parts of Delhi NCR",
    ],
  },

  programmesIntro:
    "As far as we can confirm, none of the four IB programmes is taught in Nakur or Saharanpur. They reach a family through a sideways route: a relocation, a boarding place in the hills or a decision to start IGCSE in Grade 9. This is how each stage tends to look from a Nakur home.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Ages 3-12",
      description:
        "Young pupils study through shared themes and units of inquiry, not separate subject periods, and they close the programme with an Exhibition on a topic they choose. No outside examiner marks it, so help is simple and steady: reading aloud, easy number work and learning to ask a question worth following.",
      countryNote:
        "A PYP enquiry in Nakur usually comes from a family back from a metro or abroad who want a younger child's habits of inquiry to survive the move.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Ages 11-16",
      description:
        "Four published criteria judge each MYP subject, and a Personal Project in Year 5 rounds it off. Pupils who clearly know a topic often score low because they answered a neighbouring question to the one the criterion asked.",
      countryNote:
        "With no MYP school nearby, Nakur pupils take it through a school elsewhere, or treat it as a warm-up for Grade 9 IGCSE.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three of them at Higher Level, come with Theory of Knowledge, the Extended Essay and a service strand. Internal assessments feed most subject grades, and the written papers fall in May.",
      countryNote:
        "A Diploma student with Nakur roots normally boards in Dehradun, Mussoorie or the Delhi region, so classes follow that school's calendar and not the sugarcane belt's.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Two or more Diploma courses combine with a career-related study and a reflective project. Few Indian schools run it, although the Diploma courses inside get full depth.",
      countryNote:
        "Nobody in Nakur has asked us about CP so far; if someone does, tutoring will centre on the Diploma subjects in the chosen pathway.",
    },
  ],

  subjectsIntro:
    "UP Board and CBSE students tend to be diligent and good at recall. IB and IGCSE questions ask for something different, because they open with verbs such as assess, compare and justify, and a page of correct facts will not answer them. Classes are therefore written against a named subject, level and paper, starting with the grammar of the question.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Functions, calculus and proof carry the course. Higher Level adds a third paper of problems no worksheet has previewed, so we practise getting started." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and technology dominate. A sugarcane yield or mandi price series makes a good, real dataset for the exploration." },
    { name: "IB Physics", levels: "HL / SL", description: "Class 12 mechanics gives a firm base. Uncertainty, reading graphs and designing an experiment are the new skills that decide the Investigation mark." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Moles seldom cause trouble for UP Board students. Marks vanish in organic mechanisms and in answers that stop one step before the reason." },
    { name: "IB Biology", levels: "HL / SL", description: "Terminology is familiar territory. Fitting an answer to its command word, and supporting a conclusion with statistics, are not." },
    { name: "IB Economics", levels: "HL / SL", description: "A neat labelled diagram tied to a recent event beats a long paragraph of theory; HL adds a data-based policy paper." },
    { name: "IB Business Management", levels: "HL / SL", description: "Credit goes to answers that deal with the firm in the case. The internal project suits a willing local business such as a sugar mill supplier or a furniture workshop." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Hindi and Urdu speakers often read with great delicacy, but writing a timed English commentary on an unseen passage takes rehearsal." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Paper algorithms and the working program for the internal assessment are different skills, so each gets separate drills." },
    { name: "IB Psychology", levels: "HL / SL", description: "Name each study correctly, apply it accurately and weave it into an argument that sustains a full essay." },
    { name: "IB Environmental Systems & Societies", levels: "SL / HL", description: "Groundwater use, stubble burning and Yamuna basin pressures give western UP strong case material for judging how systems cope." },
    { name: "IB Geography", levels: "HL / SL", description: "Named places and measured data lift an answer above generalities, and fieldwork needs a method others could repeat." },
    { name: "IB History", levels: "HL / SL", description: "Source analysis in Paper 1 and sustained argument in Paper 2 are separate muscles, trained one at a time." },
    { name: "IB Hindi A / Hindi B", levels: "HL / SL", description: "Hindi as a first language is a real asset on the literature course, while Hindi B comes down to unseen reading and spoken ease." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Discussion teaches this better than notes: choose a prescribed title, argue the side you disagree with, then write." },
  ],

  igcseSubjectsIntro:
    "Every IGCSE subject sits in tiers, which cap the grade; Cambridge calls them Core and Extended, Edexcel calls them Foundation and Higher. So the first jobs are the board, the paper code and the sitting, Cambridge in May to June or October to November, Edexcel in January or summer.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Extended papers punish skipped steps; a tidy layout still collects method marks when arithmetic slips." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus, vectors and trigonometric identities appear a year ahead of schedule, which cushions the later move into IB Analysis and Approaches." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Much of the material mirrors Cambridge, but the wording of the questions is different, so real Edexcel past papers provide the practice." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Handling formulae at speed and tackling the alternative-to-practical paper each deserve regular drills of their own." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, rates and organic families run alongside the practical-skills paper throughout the year." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics and body systems recur in extended answers, where how a response is built matters nearly as much as memory." },
    { name: "IGCSE Economics 0455", levels: "Grade 9-10", description: "Accurate diagrams are the quick gain; the long evaluation questions are where grades separate." },
    { name: "IGCSE Computer Science 0478", levels: "Grade 9-10", description: "A trace table makes sense once a student has typed and run real Python, so coding runs through every topic." },
    { name: "IGCSE English First Language 0500", levels: "Grade 9-10", description: "A stopwatch and unseen passages build summary and directed writing faster than memorised phrases." },
    { name: "IGCSE Urdu and Hindi as a second language", levels: "Grade 9-10", description: "One-to-one reading and conversation each week is what the language papers reward." },
  ],

  regionsTitle: "Nakur and the places around it that our online classes reach",
  regionsIntro:
    "Teaching needs a laptop and a steady line, so this list is background and not a map of where we operate: where families live, what history stands nearby and which towns they look to. Several names belong to neighbouring places and not to Nakur itself.",
  regions: [
    { name: "Nakur town centre and bazaar", note: "The market lanes where trading families have lived for generations, close to the town's older schools." },
    { name: "Mahadev Mandir area", note: "The temple linked to the legend of Nakul, whose festival days shape evening plans for nearby households." },
    { name: "Pashtun mohallas", note: "Old residential quarters descended from the Sur-era settlers, with a strong tradition of schooling in Urdu, Hindi and English." },
    { name: "Alipura and Saroorpur Gada", note: "Villages in the tehsil whose children travel in for secondary school and increasingly study on a shared family laptop." },
    { name: "Ahmedpur Brahman and Khairpura", note: "Farming villages in the sugarcane belt where school calendars bend around harvest and crushing seasons." },
    { name: "Beedpur", note: "Another tehsil village, typical of the households that look to Nakur and Saharanpur for colleges and hospitals." },
    { name: "Saharanpur city", note: "About twenty-four kilometres away, the district headquarters with the larger coaching market, colleges and rail links." },
    { name: "Gangoh and Deoband", note: "Neighbouring towns known for their seminaries and markets, which share relatives and trade with Nakur." },
  ],

  schoolDisclaimer:
    "We could not confirm any school in Nakur or Saharanpur that teaches the IB or a Cambridge or Edexcel IGCSE, so none is named as local. The Dehradun and Noida schools below describe where some families look. IB Gram is independent of all of them and holds no agreement, referral fee or endorsement relating to any school, the International Baccalaureate, Cambridge or Pearson.",
  schoolClusters: [
    {
      city: "Nakur and Saharanpur district",
      note: "Local schools follow the UP Board or CBSE. We found no confirmed IB or IGCSE teaching, so online tutoring supplies the specialist syllabus.",
      schools: [],
    },
    {
      city: "Nearby: Dehradun and Mussoorie",
      note: "The hill-school belt, a few hours away by road, is where many western UP families look for boarding. Always confirm which programme a school runs for which classes.",
      schools: ["SelaQui International School", "Ecole Globale International Girls' School", "Unison World School", "Woodstock School, Mussoorie"],
    },
    {
      city: "Nearby: Noida",
      note: "A longer journey east and south, but the nearest large IB cluster in the Delhi region, used by families weighing a move or a boarding place.",
      schools: ["Pathways School Noida", "Genesis Global School", "Shiv Nadar School, Noida"],
    },
  ],

  modesIntro:
    "Each format is live and one to one on Indian Standard Time, taught by a tutor chosen for the paper code, and they differ only in speed. No tutor visits Nakur, since home tuition in person exists solely in Gurugram and parts of Delhi NCR.",
  modes: [
    {
      title: "Standing weekly video class",
      description:
        "One fixed hour a week on a shared digital board, with the pupil's notes and a pile of past papers. This is the usual choice and the surest base for a school year.",
      bullets: [
        "Tutors from across India, matched by course",
        "Covers DP, MYP, Cambridge and Edexcel",
        "Working shown live on screen",
        "One tutor throughout the term",
      ],
    },
    {
      title: "Gentle plan with a written report",
      description:
        "A shorter weekly class, a written summary afterwards and a thorough review every month. Younger pupils, and parents wanting clear updates without a crowded timetable, tend to prefer it.",
      bullets: [
        "A short note after every class",
        "Goals reviewed on a regular basis",
        "Popular for PYP and early MYP",
        "Extra classes added before tests",
      ],
    },
    {
      title: "Short intensive before mocks and papers",
      description:
        "Several classes a week across a few weeks ahead of mocks or written papers, built on timed questions and fast marking.",
      bullets: [
        "Papers marked against current schemes",
        "Feedback inside two days",
        "Best begun a month early",
        "Planned around Holi, Diwali and Eid",
      ],
    },
  ],

  sections: [
    {
      heading: "Is there an IB or IGCSE school in Nakur, and who looks for a tutor?",
      paragraphs: [
        "None that we could confirm. Nakur's classrooms use the UP Board syllabus in Hindi or English, with some CBSE, and neither the directories we consulted nor Saharanpur's listings show an IB World School or a Cambridge or Edexcel centre. We name no school as local, since pointing to one we cannot vouch for would mislead you.",
        "Demand still exists. Western UP sends many professionals to Delhi, Noida, Dehradun and abroad, and when they come home to family land the child may be mid-way through an IGCSE or IB course. A sudden board change in Class 10 or Class 11 can cost a year, so a tutor keeps the original course alive.",
        "Another group simply plans ahead. A thirteen-year-old may be bound for a boarding school in the hills in Class 11, and the family wants mathematics and English at the right level beforehand. A good tutor can lift the child to that standard long before any admission test.",
        "Since no Nakur school offers a reference point, tutors are chosen by syllabus. A student on IB Physics HL has no specialist next door, but an online tutor in Pune or Bengaluru who taught it last year can start inside a week.",
      ],
      table: {
        caption: "Choices Nakur families weigh for international schooling",
        columns: ["Option", "Where", "What to know"],
        rows: [
          ["UP Board and CBSE schools", "Nakur and Saharanpur district", "No IB or IGCSE teaching confirmed"],
          ["Hill boarding schools", "Dehradun and Mussoorie", "Some IB and Cambridge programmes; admission usually a year ahead"],
          ["Relocation to the Delhi region", "Noida and beyond", "Larger choice of IB schools but a big family decision"],
          ["Online tutor beside a local school", "At home in Nakur", "Suits IGCSE subjects, and IB students enrolled elsewhere"],
        ],
      },
      bullets: [
        "No IB or IGCSE school confirmed in Nakur or Saharanpur",
        "Returning professionals and diaspora ties create most demand",
        "Dehradun and Mussoorie are the nearest boarding belt",
        "Tutors are matched by syllabus, not by postcode",
      ],
    },
    {
      heading: "UP Board versus IB and IGCSE: what changes for a Nakur student?",
      paragraphs: [
        "The UP Board's High School and Intermediate papers value full, orderly answers drawn from a set textbook, and Nakur's teachers drill students well for them. IB and IGCSE examiners prefer to present an unfamiliar scenario and ask which method fits and why. The shift is from repeating an answer to choosing one.",
        "What happens before the exam also differs. A board practical file lists experiments completed, whereas an IB Internal Assessment or IGCSE coursework task is a self-run investigation graded against published descriptors, worth up to a third of a grade. Planning and redrafting at that scale is a skill that can be taught.",
        "Depth varies with level. IB Higher Level mathematics and sciences extend past Class 12 in places, IGCSE Extended sits a step above Class 10 and Core is gentler. A child switching in Grade 9 or Class 11 gains more from a list of what is truly new than from revising everything.",
        "Language needs its own time. A student fluent in Hindi or Urdu may grasp an idea fully yet write it slowly in exam English, so sentence frames, vocabulary lists and timed answers become part of the class.",
      ],
      table: {
        caption: "UP Board compared with IB and IGCSE",
        columns: ["Feature", "UP Board / CBSE", "IB / IGCSE"],
        rows: [
          ["Typical question", "Set out a tidy textbook answer", "Choose a method and justify it in new territory"],
          ["Coursework", "Practical files and internal marks", "Investigations and portfolios marked to criteria"],
          ["Language of study", "Hindi or English", "English, with Hindi and Urdu as language courses"],
          ["Recognition", "Strong in Uttar Pradesh and across India", "Recognised by universities in many countries"],
        ],
      },
      bullets: [
        "Selecting a method beats reciting one",
        "Coursework unfolds over months",
        "List what is new first, revise old ground second",
        "Treat exam English as its own skill",
      ],
    },
    {
      heading: "What decides the price of an IB or IGCSE tutor in Nakur?",
      paragraphs: [
        "A handful of things settle the fee: how advanced the programme is, which subject it is, the length and frequency of classes, and how lately the tutor taught this exact course. HL Diploma science sits above Grade 7 maths, and the figure comes to you in writing before the trial.",
        "Travel never enters the sum. Every class is online, so a tutor in Pune and one in Chennai charge a Nakur family the same, and nobody pays for a bus to Saharanpur or a taxi to Dehradun.",
        "Think about what the hour holds. A tutor who has seen how Cambridge examiners phrase a practical question, or how an IB moderator marks an exploration, saves a student a term of guesswork. Ask about the plan for each class and how results will be shared.",
        "No long contract applies. Classes can pause for Holi, a Kanwar Yatra week, Eid or a wedding, and a tutor can be replaced if the fit is poor.",
      ],
      bullets: [
        "Programme level, subject, class length and tutor experience set the price",
        "No travel cost for Nakur students",
        "You receive the fee in writing first",
        "Pause or change tutor whenever needed",
      ],
    },
    {
      heading: "Coaching in Saharanpur, a home tutor, self-study or online: what works for IB and IGCSE?",
      paragraphs: [
        "Saharanpur's coaching trade revolves around UP Board subjects and entrance tests such as JEE, NEET and CUET, with centres in the city and a few in Nakur. No batch teaches IGCSE Chemistry or IB Economics, leaving an IB or IGCSE child inside somebody else's syllabus.",
        "Tutors in Nakur handle regular school subjects well. Few have taught a live IB or IGCSE specification, and the pupil numbers are too low for anyone to specialise. Encouragement is easy to find; the examiner's mark scheme is not.",
        "Studying alone can take a motivated child a long way on a subject with plenty of published material, and IGCSE Mathematics papers are easy to find. It stumbles wherever a second reader is vital, such as a lab plan, an essay outline or a six-mark explanation, because errors nobody notices become habits.",
        "One-to-one online tuition brings specialist knowledge and individual attention to a fixed weekly slot, with no trip down the Saharanpur road. The family only needs a laptop, headphones and a connection that survives an hour.",
      ],
      table: {
        caption: "Support routes compared for Nakur",
        columns: ["Route", "Knows the syllabus?", "Personal attention", "Limit for Nakur"],
        rows: [
          ["Coaching centre in Saharanpur", "For board and entrance exams only", "Shared with a batch", "No IB or IGCSE batches; daily travel"],
          ["Home tutor in town", "Varies", "Full", "Current papers rarely taught"],
          ["Studying alone", "Books and past papers alone", "None", "No reader for coursework or essay drafts"],
          ["Online specialist", "Chosen for the course", "Full", "Needs a steady connection"],
        ],
      },
      bullets: [
        "Local coaching targets the UP Board, JEE, NEET and CUET",
        "Recent IB or IGCSE teaching is scarce around Nakur",
        "Writing goes unchecked when studying alone",
        "Online specialists close both gaps",
      ],
    },
    {
      heading: "How do Kanwar Yatra, winter fog and the sugarcane season shape a study plan?",
      paragraphs: [
        "Western UP has a calendar all its own. In July and August the Kanwar Yatra turns the roads through Saharanpur district into pilgrim routes, with traffic diverted and sometimes schools shut for days. Holi in March, Diwali and Eid take family time, and wedding seasons fill whole weeks. A good plan marks each in advance, with light revision before and a catch-up class after.",
        "The weather needs planning too. May and June pass 44 degrees, so afternoons are unsuitable for study. December and January bring thick fog that delays trains and can disrupt connections, and power cuts are common in both extremes. A charged laptop and a mobile hotspot are sensible backups.",
        "Diploma students take main exams in May, receive results in July and can retake in November. Cambridge IGCSE sittings fall in May to June and October to November, with Edexcel adding January. UP Board papers in February and March can collide with mocks, so anyone doing both needs an early calendar.",
        "A boarder in Dehradun or Mussoorie follows the school's dates. A private IGCSE student at home does best with one class weekly in Grade 9, more sessions through autumn of Grade 10 and a firm two-month block before the papers.",
      ],
      table: {
        caption: "The year for an IB or IGCSE student in Nakur",
        columns: ["Period", "What happens", "Tutoring focus"],
        rows: [
          ["July to September", "Kanwar Yatra, new school year, monsoon", "Foundations, with flexible timing"],
          ["October to November", "Diwali; Cambridge November series; cane crushing begins", "Light revision, then a sprint for sitters"],
          ["December to March", "Fog, mocks, Edexcel January series, Holi, UP Board exams", "Timed papers and feedback"],
          ["April to June", "Heat; Diploma and IGCSE written papers", "Short early sessions and past papers"],
        ],
      },
      bullets: [
        "Plan for Kanwar Yatra road closures in July",
        "Keep a hotspot for foggy winter evenings",
        "May brings Diploma papers, with retakes in November",
        "UP Board exam weeks may squeeze mock revision",
      ],
    },
    {
      heading: "Where can IB or IGCSE lead after school in Nakur?",
      paragraphs: [
        "Within reach of Nakur, IIT Roorkee, the universities of Dehradun and Delhi, Jamia and Aligarh draw students from western UP, alongside private universities in Noida and Dehradun. Saharanpur itself has colleges and an agricultural university campus. Each institution sets its own rules for IB and IGCSE applicants, so ask directly.",
        "For Indian admissions, an overseas-board qualification usually needs an Association of Indian Universities equivalence certificate. CUET-UG accepts several boards yet checks subject combinations, and JEE and NEET publish their own conditions. They change between years, so confirm before choosing subjects.",
        "Overseas, admissions officers in Britain, Canada, Australia and the United States read IB points and IGCSE results as evidence a student is ready. A UK offer typically states a points total and Higher Level minimums, and it leans on the grades your school predicts in the final year, which is why Class 11 matters so much.",
        "People far from the big cities tend to raise these questions late. Abandoning Higher Level Mathematics at fourteen can end an engineering route at seventeen. We support the academics only; for applications, consult the university or exam authority.",
      ],
      bullets: [
        "IIT Roorkee, Delhi and Dehradun are the main nearby destinations",
        "AIU equivalence is often needed for Indian universities",
        "Confirm JEE, NEET and CUET conditions with the authority",
        "Predicted grades shape overseas offers",
      ],
    },
    {
      heading: "Which IB Maths route and which sciences should a Nakur student expect?",
      paragraphs: [
        "IB Mathematics is offered in two forms. One, Analysis and Approaches, is built around algebra, functions, calculus and proof; it suits future engineers and physicists, and its Higher Level third paper offers unseen problems. The other, Applications and Interpretation, is built around statistics, modelling and calculator technique, and suits students heading to economics, biology or business.",
        "Class 12 physicists use formulae confidently yet are rarely asked about uncertainty, graph analysis or designing an experiment, exactly what the Investigation rewards. Someone who knows the mark scheme can steer the plan before a draft drifts.",
        "Chemistry students tend to fly through moles and equilibrium before slowing at reaction mechanisms and energy cycles. Biology students know their terms; shaping an answer to the command word is the missing step.",
        "Since no school in the tehsil teaches these papers, the online tutor is the main teacher. For that reason we ask for the textbook, any notes and one marked script before the trial, so the first class starts with real evidence.",
      ],
      bullets: [
        "AA for calculus, proof and engineering",
        "AI for data, statistics and modelling",
        "Experimental design tends to be the physics gap",
        "Bring a recently marked paper to the first class",
      ],
    },
    {
      heading: "Core or Extended: which IGCSE tier fits a Nakur student?",
      paragraphs: [
        "Core papers cannot reach the top grades that Extended papers can. At fourteen that seems minor, but it travels with the student, since Diploma teachers assume Extended-level groundwork before they begin Higher Level Mathematics and the sciences.",
        "Try a quick experiment at home. Print five Extended-tier questions from a past paper, give them to your child and say nothing. If the method is sound and only a sign goes astray, Extended is within reach. If the first line is blank for ten minutes, a secure Core grade in that subject may serve better, leaving time for the subjects where the child is strong.",
        "After the tier comes the question of what to pair together. English, Mathematics, two sciences and a language or humanities subject is the classic spread, with Additional Mathematics for the engineers. A child without a school timetable to organise the week can find a long list overwhelming.",
        "No one in the tehsil has worked in a Cambridge school, which makes one diagnostic class with a tutor experienced in both tiers the quickest route to an answer. A child reasoning aloud tells you more than a mark.",
      ],
      bullets: [
        "Core has a ceiling, Extended has none",
        "Try some Extended questions before deciding",
        "Take Additional Mathematics if engineering is the aim",
        "A single diagnostic class often decides",
      ],
    },
    {
      heading: "How does IB Gram choose a tutor for a Nakur family?",
      paragraphs: [
        "Our first move is to listen. We ask about the board, the subject and level, the latest marks, the date of the next paper and the thing that concerns you most, whether that is one chapter, an IA, the mocks or a change of board.",
        "Then we examine qualifications, how recently the tutor taught the exact course and how they deal with coursework drafts. With no Nakur school to refer to, shortlists follow the syllabus and who is free in IST.",
        "Treat the first class as a test of fit. Within the opening quarter hour you can usually tell whether the tutor explains simply, whether your child dares to interrupt, and whether a wrong answer is met with curiosity or a sigh. A good first class ends with a one-page plan for the next month; a poor one ends with a polite goodbye.",
        "If child and tutor fail to get along, another tutor is arranged at no cost and without awkward explanations.",
      ],
      bullets: [
        "A first chat about your board, subject, level and worries",
        "Shortlist by syllabus experience",
        "An introductory class comes before any promise",
        "A new tutor if the fit is poor",
      ],
    },
  ],

  tutorsIntro:
    "Here is a sample of the tutors we introduce to families in Nakur, covering PYP, MYP, the Diploma and the two IGCSE boards, each picked for the course on the child's own timetable. Teaching is on video, the sole format available in Nakur.",

  process: [
    { title: "Write to us", description: "Board or programme, subject and level, present marks and the evening hours when your child in Nakur can open a laptop." },
    { title: "Look at a few profiles", description: "No IB school nearby, so profiles are drawn from across India, picked for recent teaching of your child's paper." },
    { title: "Sit in on a trial", description: "One real topic taught live, free, with nothing to sign." },
    { title: "Fix the first month", description: "Which topics come first, which weekday suits and how reports will reach you, all in writing." },
    { title: "Continue and review", description: "Classes continue weekly, the plan is revisited every few weeks and a different tutor can step in if that suits the child." },
  ],

  whyPoints: [
    { title: "Course first, tutor second", description: "Nobody is suggested before we know the HL or SL subject, or the Cambridge or Edexcel syllabus code and tier." },
    { title: "Made for towns the schools skip", description: "Nakur has no confirmed international classroom, so we search for specialists across the country." },
    { title: "Watch before you pay", description: "You see the tutor teach before fees are ever discussed." },
    { title: "Honest limits on help", description: "Tutors comment on drafts, but the assessed words always remain the student's own." },
    { title: "Progress on paper", description: "A few written lines close every class, and a fuller report follows every few weeks." },
    { title: "Free to leave", description: "Pause, end or swap tutors whenever you like. No school, exam board or university stands behind us." },
  ],

  faqs: [
    { question: "How can I find an IB tutor in Nakur?", answer: "Start with the subject, the level and the sitting your child is working towards. We shortlist tutors who recently taught that course and arrange a free trial class. As Nakur has no confirmed IB school, the search spans India and teaching is by video." },
    { question: "Do you cover IGCSE for both Cambridge and Edexcel in Nakur?", answer: "Both exam boards are covered, always through online classes. Board, paper code and tier are settled first, for example Cambridge 0580 Extended or Edexcel 4MA1 Higher, so your child practises on papers matching the sitting they are entered for." },
    { question: "Will a tutor come to our house in Nakur?", answer: "No tutor calls at a house in Nakur, as IB Gram runs home visits only in Gurugram and parts of Delhi NCR. Tuition at home means a private live class on your child's laptop, with tutor and pupil writing on one digital board." },
    { question: "What does IB or IGCSE tuition cost in Nakur?", answer: "We do not publish a rate card. Fees follow the level of the programme, the subject, the length of each class and how recently the tutor taught this course, and you are told the figure in writing before the trial. Carrying on afterwards involves no long commitment." },
    { question: "Which schools in Nakur or Saharanpur teach IB or IGCSE?", answer: "We could confirm none. Local schools teach to the UP Board or CBSE. Families wanting an IB or Cambridge classroom look to the hill-school belt around Dehradun and Mussoorie, or to Noida, and use online tutoring for preparation, to bridge distance or to support a boarder at home." },
    { question: "Is the trial lesson really free?", answer: "Yes. A tutor teaches a real topic from your child's syllabus and the choice is yours afterwards. Saying yes brings a month-one plan; saying no brings nothing more." },
    { question: "What help can a tutor give with an IB Internal Assessment?", answer: "A tutor can rephrase a marking criterion in plain language, help your child choose a research question narrow enough to test, review an experimental method and respond to a draft the student wrote alone. Writing or tidying the assessed text is out of bounds, and the IB treats it as malpractice." },
    { question: "Which Diploma subjects can you cover for Nakur students?", answer: "On the Diploma side we have tutors for both Maths courses at either level, Physics, Chemistry, Biology, Economics, Business Management, English A, Computer Science, Psychology, Geography, History and Hindi, plus Theory of Knowledge and Extended Essay coaching. For a rare subject the pool is smaller, but we search." },
    { question: "Can younger children on MYP and PYP join?", answer: "Certainly. Teenagers on MYP mostly need practice in answering to published criteria and in choosing a Personal Project they can finish. PYP children attend short, frequent classes on reading aloud, number patterns and asking good questions." },
    { question: "Can a screen really stand in for a tutor at the table?", answer: "In a tehsil town a laptop class often wins. The best specialist for a paper may live in another state, and a local tutor would face a long drive. A shared digital board plus a recording of each class recreates much of what sitting together offers, so long as the connection is steady." },
    { question: "How are tutors checked before they are introduced?", answer: "Degrees and certificates are verified first. After that we ask the sharper questions: when did this person last teach the paper your child is sitting, and what do they do when a coursework draft is weak? Current classroom experience outweighs an older, longer career, and the trial lets you decide for yourself." },
    { question: "When should lessons begin?", answer: "The best time is the first week of the course, which means Grade 9 for IGCSE and Class 11 for the Diploma. Starting late still pays when classes concentrate on topics carrying the most marks; the final two months before a paper can reshape technique." },
    { question: "My child is in a Hindi-medium school. Is a switch to IGCSE or IB realistic?", answer: "Numbers are seldom the problem when a Hindi-medium child moves to IGCSE or IB. The snags are in the English of the paper, the particular job of verbs like justify and assess, and the discipline of carrying a long coursework task across several months. A holiday bridge course before Grade 9 or Class 11 removes most of the shock." },
    { question: "Which class times suit families in Nakur?", answer: "Weekday evenings and weekend mornings work for most. Holi, Diwali, Eid and Kanwar Yatra weeks are protected, board exam dates are respected where they apply, and a class moves when fog or a power cut threatens the line." },
    { question: "What if the tutor is not a good match?", answer: "When it is not working, let us know and a new tutor is lined up. Reviews are there to show up a mismatch early, nothing binds you, and ending lessons altogether is free." },
    { question: "Is IB Gram connected to any school or exam board?", answer: "There is no connection at all. IB Gram works independently of any Nakur, Saharanpur, Dehradun or Noida school and of the IB, Cambridge and Pearson. Schools are named here simply to describe what they teach, and the tutor follows the syllabus your child's school or exam centre has set." },
  ],

  internalLinks: [
    { label: "IB and IGCSE tutoring in Saharanpur", href: "/saharanpur/", description: "The district city about twenty-four kilometres from Nakur." },
    { label: "IB and IGCSE tutoring in Dehradun", href: "/dehradun/", description: "The hill-school belt that many western UP families look to." },
    { label: "IB and IGCSE tutoring in Roorkee", href: "/roorkee/", description: "A nearby university town served in the same way." },
    { label: "IB and IGCSE tutoring in Noida", href: "/noida/", description: "The nearest large IB cluster in the Delhi region." },
    { label: "IB tutoring across India", href: "/india/", description: "How tutors are matched in towns across the country." },
    { label: "Home tuition for IB and IGCSE in Gurgaon", href: "/gurgaon/", description: "The single area where tutors do visit homes." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "Subject groups, HL and SL, TOK, IAs and the Extended Essay explained." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "The MYP criteria, the Personal Project and eAssessment in plain terms." },
    { label: "IB Primary Years Programme", href: "/programmes/pyp/", description: "From units of inquiry to the final Exhibition." },
    { label: "IGCSE guide", href: "/igcse/", description: "Boards, tiers, subjects and sittings, step by step." },
    { label: "IB Mathematics courses", href: "/courses/ib/mathematics/", description: "How to pick between AA and AI." },
    { label: "Browse tutors", href: "/tutors/", description: "Browse profiles by subject and programme." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Write in, and book a trial class." },
  ],

  closingHeading: "Arrange a free IB or IGCSE trial class for your Nakur child",
  closingBody:
    "Tell us who you are teaching: your child's board, subject and level, the last few marks, and the hours after school that are free in Nakur. We reply with one tutor, a few lines about the papers they have recently taught and some free slots for a first class. It is private, by video, and nothing has to be signed. Reach us at support@ibgram.com or on WhatsApp, +91 7439 368 115.",
};
