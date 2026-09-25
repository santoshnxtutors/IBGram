import type { CitySeoPage } from "../types";

/**
 * Chennai schools shown in the sliding strip. Only schools confirmed to run the IB and/or
 * Cambridge or Pearson Edexcel IGCSE, drawn from the OMR corridor, Mylapore/Adyar belt and
 * west Chennai. Add a name only once it can be verified.
 */
export const chennaiIbIgcseSchools = [
  "APL Global School",
  "Gateway International School",
  "CPS Global School",
  "MCTM Chidambaram Chettyar International School",
  "Akshar Arbol International School",
  "KC High International School",
  "HLC International",
  "The Indian Public School",
] as const;

export const chennai: CitySeoPage = {
  slug: "chennai",
  countryName: "Chennai",
  countryNameLong: "Chennai, Tamil Nadu",
  demonym: "Chennai",
  flagCode: "in",
  countryCode: "IN",
  state: "Tamil Nadu",
  stateCode: "IN-TN",
  region: "Tamil Nadu, India",
  timezoneLabel: "Indian Standard Time (IST)",
  schedulingNote: "Weekday evening slots after school and weekend mornings, planned around IST and your child's school timetable",
  lastUpdated: "2026-09-21",
  geo: { latitude: 13.0827, longitude: 80.2707 },
  wikipedia: "https://en.wikipedia.org/wiki/Chennai",
  alternateNames: ["Madras"],
  stripSchools: [
    "APL Global School",
    "Gateway International School",
    "CPS Global School",
    "MCTM Chidambaram Chettyar International School",
    "Akshar Arbol International School",
    "KC High International School",
  ],

  title: "IB and IGCSE Tutors in Chennai | Online Home Tuition",
  metaDescription:
    "IB and IGCSE tutors for Chennai students: DP, MYP, PYP and Cambridge or Edexcel IGCSE subjects, taught one-to-one online from home, with a free trial lesson.",
  h1: "IB and IGCSE Tutors and Home Tuition in Chennai",
  heroEyebrow: "IB & IGCSE TUTORS FOR CHENNAI FAMILIES",
  heroSubtitle:
    "If your child is enrolled in the IB continuum or a Cambridge or Edexcel IGCSE at a Chennai school, we find them a subject specialist who has actually taught that syllabus. Sessions run as online home tuition: live one-to-one lessons your child takes on a laptop at home, timed around OMR traffic, school hours and exam season, with a free trial before you decide.",
  primaryKeyword: "IB and IGCSE tutors in Chennai",
  imageAltText: "IB tutor guiding a Chennai student through an IB Diploma Chemistry problem over a video call",
  secondaryKeywords: [
    "IB tutor Chennai",
    "IGCSE tutor Chennai",
    "IB home tuition Chennai",
    "IGCSE home tuition Chennai",
    "IB private tuition Chennai",
    "IB Maths tutor Chennai",
    "IGCSE Maths tutor Chennai",
    "IB Physics tutor Chennai",
    "IB Chemistry tutor Chennai",
    "IB Biology tutor Chennai",
    "IB DP tutor Chennai",
    "IB MYP tutor Chennai",
    "IB PYP tutor Chennai",
    "IGCSE online tuition Chennai",
    "IB tutor OMR Chennai",
    "IGCSE tutor Adyar",
    "IB tutor Anna Nagar",
    "online IB tutor Chennai",
    "Madras IB tutor",
    "IGCSE Chemistry tutor Chennai",
    "IB Economics tutor Chennai",
    "Cambridge IGCSE tutor Chennai",
  ],

  heroTrustPoints: [
    "Tutors matched to the exact IB level or IGCSE board and tier",
    "Online home tuition, live and one-to-one, no travel needed",
    "Free trial lesson before you commit to anything",
    "Independent platform, not tied to any Chennai school or board",
  ],
  heroStats: [
    { value: "PYP · MYP · DP", label: "IB programmes covered" },
    { value: "Cambridge & Edexcel", label: "IGCSE boards covered" },
    { value: "Online, one-to-one", label: "How lessons run in Chennai" },
    { value: "Free trial", label: "Before any commitment" },
  ],

  intro: {
    heading: "IB and IGCSE tuition for Chennai students, explained plainly",
    paragraphs: [
      "IB and IGCSE tutors in Chennai work with your child's actual syllabus, one to one, over a live video call, rather than a generic worksheet pulled off the internet. For a Diploma Programme student that means a named subject at Higher or Standard Level; for an IGCSE student it means the exact Cambridge or Pearson Edexcel code and tier their school has entered them for. The tutor plans around the school's internal deadlines and the external exam session, not a fixed syllabus of their own.",
      "Chennai's international-curriculum schools sit in three fairly distinct belts: the OMR IT corridor from Sholinganallur through Navalur and Siruseri to Kelambakkam, the older central pocket around Mylapore and Adyar, and a smaller cluster to the west near Ramapuram and Porur. Families move here for IT and auto-sector jobs, return from postings abroad, or simply prefer a curriculum that assesses coursework and inquiry rather than a single board exam.",
      "We do not send tutors to your door in Chennai. Every lesson is online home tuition: a live one-to-one class your child attends on a laptop or tablet at home, with a shared screen for working through problems, IGCSE past papers and IB Internal Assessment planning. In-person home visits currently run only in Gurugram and parts of Delhi NCR, not in Chennai, and we say that plainly rather than let a booking assume otherwise.",
      "IB Gram is an independent tutoring service, not affiliated with the International Baccalaureate Organization, Cambridge Assessment International Education, Pearson Edexcel or any school named on this page. Tutors coach, explain and review work; they never write a student's Internal Assessment, Extended Essay, TOK essay or IGCSE coursework.",
    ],
    bullets: [
      "IB PYP, MYP, DP and CP tutors for the major subject groups",
      "Cambridge and Pearson Edexcel IGCSE, Core and Extended tiers",
      "Online home tuition, timed around OMR and city traffic",
      "Free trial lesson and a written note after every session",
    ],
  },

  programmesIntro:
    "Chennai families cross between boards more than most Tamil Nadu cities: State Board or CBSE into Cambridge IGCSE around Grade 9, or IGCSE straight into the IB Diploma at Grade 11. Here is what each stage of the IB continuum actually needs from a tutor working with Chennai students.",
  programmes: [
    {
      code: "PYP",
      name: "IB Primary Years Programme",
      ageRange: "Class Nursery to 6, ages 3-12",
      description:
        "The PYP runs on units of inquiry and a final-year Exhibition rather than exams, so early support is about reading stamina, number sense and the research skills the Exhibition demands.",
      countryNote:
        "Chennai PYP parents most often ask for help with English writing fluency and maths foundations, since many families switched from a Tamil-medium or State Board nursery before joining an IB school.",
    },
    {
      code: "MYP",
      name: "IB Middle Years Programme",
      ageRange: "Class 6 to 10, ages 11-16",
      description:
        "Every subject is marked against criteria A to D, the Personal Project lands in MYP 5, and some Chennai schools add MYP eAssessment on top of internal grading.",
      countryNote:
        "Students here tend to stall on criterion-based science write-ups and on turning the Personal Project process journal into a finished piece rather than a last-minute rebuild.",
    },
    {
      code: "DP",
      name: "IB Diploma Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "Six subjects, three at Higher Level, alongside Theory of Knowledge, the Extended Essay and Internal Assessments worth roughly a fifth to a third of most subject grades. Finals sit in May, with a smaller November retake session.",
      countryNote:
        "Requests from Chennai families cluster around Maths AA or AI at HL, Physics, Chemistry, Economics and English A, often alongside NEET or JEE preparation running in parallel, which changes how the weekly schedule has to be built.",
    },
    {
      code: "CP",
      name: "IB Career-related Programme",
      ageRange: "Class 11-12, ages 16-19",
      description:
        "A smaller number of DP courses paired with a career-related study, the reflective project and personal and professional skills, offered in only a handful of Chennai schools.",
      countryNote:
        "Where a Chennai school does run CP, tutoring focuses on the embedded DP subjects and on structuring the reflective project rather than the vocational component itself.",
    },
  ],

  subjectsIntro:
    "IB tutoring for a Chennai student is only useful if it is specific: Maths Analysis and Approaches HL asks for a different tutor than Applications and Interpretation SL, and an English A specialist is not automatically the right person for the Individual Oral. We match on the exact course and level first, then confirm evening slots that fit school hours and OMR commute patterns for the family.",
  subjects: [
    { name: "IB Maths Analysis & Approaches", levels: "HL / SL", description: "Calculus, functions and the Paper 3 investigative questions HL students find hardest, worked through alongside the exploration." },
    { name: "IB Maths Applications & Interpretation", levels: "HL / SL", description: "Statistics, modelling and GDC technique, with structured support for the data-driven exploration many students leave too late." },
    { name: "IB Physics", levels: "HL / SL", description: "The full theme structure, Paper 1 and Paper 2 exam technique, and a scientific investigation built around a testable variable." },
    { name: "IB Chemistry", levels: "HL / SL", description: "Structure, bonding and organic reaction mechanisms, data-booklet fluency and a defensible investigation write-up." },
    { name: "IB Biology", levels: "HL / SL", description: "Continuity and change across the syllabus, command-term precision in long-answer questions and IA statistical treatment." },
    { name: "IB Economics", levels: "HL / SL", description: "Micro and macro diagrams drawn accurately, Paper 3 quantitative questions for HL, and all three internal commentaries." },
    { name: "IB Business Management", levels: "HL / SL", description: "Applying theory to an unfamiliar case study and building a Business Research Project around a real organisation." },
    { name: "IB English A Language & Literature", levels: "HL / SL", description: "Unseen textual analysis for Paper 1, comparative essays for Paper 2, and rehearsal for the Individual Oral." },
    { name: "IB Computer Science", levels: "HL / SL", description: "Pseudocode, object orientation and abstract data structures, plus the IA product and its supporting documentation." },
    { name: "IB Psychology", levels: "HL / SL", description: "The three approaches to behaviour, correctly cited studies, and extended-response question structure." },
    { name: "IB Environmental Systems & Societies", levels: "SL", description: "Systems diagrams and evaluative writing that goes past textbook description into genuine judgement." },
    { name: "IB Geography", levels: "HL / SL", description: "Named case-study depth, fieldwork methodology for the internal assessment, and the evaluative comparisons Paper 2 rewards." },
    { name: "IB History", levels: "HL / SL", description: "Source-based analysis for Paper 1 and sustained argument for the Paper 2 and Paper 3 essays." },
    { name: "IB Hindi B and Tamil A/B", levels: "HL / SL", description: "Text-type conventions, receptive-skills practice and spontaneous conversation drilled for the individual oral." },
    { name: "Theory of Knowledge (TOK)", levels: "DP Core", description: "Building the exhibition commentary and a prescribed-title essay the student can defend from more than one angle." },
    { name: "Extended Essay (EE)", levels: "DP Core", description: "Narrowing a research question early and keeping reflection sessions on schedule. Guidance only, the writing stays the student's own." },
    { name: "IB MYP Sciences & Maths", levels: "MYP 1-5", description: "Criteria B and C investigation design, building toward the depth DP HL sciences later assume." },
    { name: "IB MYP Language & Individuals and Societies", levels: "MYP 1-5", description: "Criterion A source analysis and a Personal Project process journal kept current through the year." },
  ],

  igcseSubjectsIntro:
    "IGCSE tuition in Chennai has to start from the syllabus code and tier, because Cambridge 0580 Extended, 0620 Chemistry and Edexcel 4MA1 Higher are three separate preparations with different mark schemes. We match on board, code, tier and exam series, Cambridge in May-June or October-November, Edexcel in January or May-June, and factor in whether the student plans to move into the IB Diploma afterwards.",
  igcseSubjects: [
    { name: "IGCSE Mathematics 0580", levels: "Core / Extended", description: "Paper technique for Extended tier and the non-calculator accuracy that costs marks under time pressure." },
    { name: "IGCSE Additional Mathematics 0606", levels: "Grade 10", description: "Calculus basics, trigonometric identities and the bridge subject most Chennai DP maths tutors ask about first." },
    { name: "Edexcel IGCSE Mathematics A 4MA1", levels: "Foundation / Higher", description: "Higher-tier problem solving and where Edexcel question phrasing differs from Cambridge papers." },
    { name: "IGCSE Physics 0625", levels: "Core / Extended", description: "Electricity, waves and equation rearrangement, with alternative-to-practical technique for schools without lab access." },
    { name: "IGCSE Chemistry 0620", levels: "Core / Extended", description: "Mole calculations, electrochemistry and organic chemistry, plus the written alternative-to-practical paper." },
    { name: "IGCSE Biology 0610", levels: "Core / Extended", description: "Genetics, inheritance and the extended-response structure examiners reward at the top grades." },
    { name: "IGCSE Combined & Coordinated Sciences", levels: "0653 / 0654", description: "Keeping three sciences moving together on one timetable without one of them slipping." },
    { name: "IGCSE Economics 0455", levels: "Class 9-10", description: "Diagram accuracy and the longer evaluative answers that separate a good script from a strong one." },
    { name: "IGCSE Business Studies 0450", levels: "Class 9-10", description: "Applying theory to the given case study rather than reproducing a memorised definition." },
    { name: "IGCSE Computer Science 0478", levels: "Class 9-10", description: "Trace tables and Python programming for the problem-solving component of the paper." },
    { name: "IGCSE English First Language 0500", levels: "Class 9-10", description: "Directed writing, summary skills and close reading of unseen passages." },
    { name: "IGCSE English as a Second Language 0510", levels: "Class 9-10", description: "Reading, writing and the separately assessed speaking component, practised on their own." },
  ],

  regionsTitle: "Chennai neighbourhoods our online IB and IGCSE tutors work with",
  regionsIntro:
    "Even though lessons run online, where a family lives in Chennai still shapes the schedule: school pickup times, OMR traffic and evening tuition or sport commitments all decide which slot actually works. For each area below we look at the local school mix and the practical timing families ask for most.",
  regions: [
    { name: "Sholinganallur and Perungudi", note: "IT-park end of OMR with a dense IB and IGCSE school cluster; evening slots often start later because of office traffic." },
    { name: "Navalur and Siruseri", note: "SIPCOT IT corridor with several Cambridge and IB schools; families here favour early-evening or weekend sessions." },
    { name: "Padur and Kelambakkam", note: "Southern end of OMR, home to some of Chennai's newer IB campuses and growing IGCSE demand." },
    { name: "Adyar and Besant Nagar", note: "Established residential belt near several central-Chennai schools, with a mix of CBSE-to-IGCSE switchers." },
    { name: "Mylapore and Alwarpet", note: "Older cultural core of the city with a long-running IB and IGCSE school presence." },
    { name: "T Nagar and Nungambakkam", note: "Central Chennai families juggling school, music or dance classes and tuition in a tight evening window." },
    { name: "Anna Nagar", note: "North Chennai residential hub where families often ask about the switch from State Board or CBSE." },
    { name: "Velachery and Medavakkam", note: "South Chennai suburb with growing school options and a large tutoring-seeking population." },
    { name: "Ramapuram and Porur", note: "West Chennai belt near a smaller cluster of IB and IGCSE schools, close to the IT corridor on GST Road." },
    { name: "Tambaram and Chromepet", note: "Southwestern suburbs with a longer commute to OMR schools, where online tuition removes the extra travel time." },
    { name: "ECR (East Coast Road)", note: "Coastal stretch with newer residential developments and families who often prefer weekend or hybrid-timed sessions." },
    { name: "Porur to Guindy corridor", note: "Central-west Chennai families balancing school, extracurriculars and after-school academic support in the same evening." },
  ],

  schoolDisclaimer:
    "IB Gram is an independent tutoring platform. Schools are named only to describe the school landscape Chennai families study in. We are not affiliated with, endorsed by, partnered with or representing any school named here, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel.",
  schoolClusters: [
    {
      city: "OMR IT corridor (Sholinganallur to Kelambakkam)",
      note: "Chennai's densest belt of IB and IGCSE schools follows the IT parks along OMR, and tutoring demand here tracks the Diploma and IGCSE exam calendar closely.",
      schools: ["Gateway International School", "KC High International School", "Akshar Arbol International School"],
    },
    {
      city: "Mylapore and central Chennai",
      note: "The older cultural core of the city has a long-standing IB and IGCSE presence, with many families mixing curriculum choices across siblings.",
      schools: ["MCTM Chidambaram Chettyar International School", "APL Global School"],
    },
    {
      city: "West Chennai (Ramapuram, Porur belt)",
      note: "A smaller west-side cluster serves families near the GST Road IT corridor, with a mix of IB and Cambridge IGCSE offerings.",
      schools: ["CPS Global School", "HLC International"],
    },
  ],

  modesIntro:
    "Chennai families choose between two practical formats rather than three, since tutors do not visit homes in the city. Online one-to-one is the default for every subject, and hybrid scheduling around exam season simply means adding a second weekly online slot rather than a change of format. We set out both below, along with how each actually plays out for OMR and central-Chennai households.",
  modes: [
    {
      title: "Online IB and IGCSE tuition",
      description:
        "Live one-to-one lessons over video with a shared whiteboard, saved notes and screen-shared past papers. This is how every Chennai lesson runs, whatever the subject.",
      bullets: [
        "Access to HL and niche-subject specialists beyond Chennai's local tutor pool",
        "No OMR traffic or school-pickup delay affecting either side",
        "Screen-shared GDC work and IGCSE past-paper walkthroughs",
        "Easy to add a second weekly slot before mocks or exam series",
      ],
    },
    {
      title: "Exam-season double sessions",
      description:
        "The same online format, but with two weekly slots for a subject once mocks, Internal Assessment deadlines or the exam series draw close.",
      bullets: [
        "Keeps momentum through the Grade 11 and Grade 12 assessment run",
        "Second slot often used purely for past-paper practice and feedback",
        "Same tutor throughout, so context is not lost between sessions",
        "Scaled back once the pressure point has passed",
      ],
    },
    {
      title: "Short-term topic support",
      description:
        "A focused run of sessions on one weak topic or one Internal Assessment stage, rather than an ongoing weekly commitment.",
      bullets: [
        "Useful before a specific school test or mock exam",
        "Works well for a single IGCSE subject needing a push",
        "No long booking required to start",
        "Can convert to a regular weekly slot afterwards if it helps",
      ],
    },
  ],

  sections: [
    {
      heading: "IB and IGCSE families and schools in Chennai",
      paragraphs: [
        "Chennai's IB and IGCSE schools cluster where the city's IT and auto industries created steady demand for an internationally recognised curriculum: the OMR corridor from Sholinganallur to Kelambakkam, an older pocket around Mylapore, and a smaller cluster to the west near Ramapuram. Families choosing these schools tend to be IT and engineering professionals posted to Chennai from elsewhere in India or abroad, returning NRIs who want continuity with an overseas system, and business families who prefer coursework-based assessment to a single board exam.",
        "A second, less discussed group is families who move a child out of Tamil Nadu State Board or CBSE mid-school, usually at the Grade 9 or Grade 11 transition point. The reasons vary: a planned relocation abroad, a child who does better with continuous assessment than a single high-stakes paper, or simply wanting the IB's broader subject mix alongside Tamil or Hindi as a language option.",
        "Whatever the route in, the tutoring need is usually the same at first: understanding what the new curriculum actually rewards. IB and IGCSE mark schemes reward explanation and evaluation far more than a State Board or CBSE answer key does, and that shift catches capable students off guard in their first term.",
        "IB Gram works with Chennai families across this whole spread, from a Grade 3 PYP student building reading stamina to a Grade 12 Diploma candidate finishing a Physics Internal Assessment before the May session, matching each one to a tutor who has actually taught that exact course.",
      ],
    },
    {
      heading: "Tamil Nadu State Board, CBSE and ICSE compared with IB and IGCSE: what actually differs?",
      paragraphs: [
        "The short answer is assessment style and flexibility, not difficulty. Tamil Nadu State Board and CBSE run on a fixed syllabus with a heavily weighted final exam; ICSE sits closer to IB and IGCSE in its emphasis on structured written answers; IB and IGCSE weight coursework, internal assessment and evaluative writing far more heavily, and let a student specialise earlier through subject and level choice.",
        "For a Chennai family choosing between boards, the practical question is usually what comes after school. State Board and CBSE map cleanly onto Tamil Nadu engineering and medical entrance routes through TNEA and NEET. IB and IGCSE keep options open for both Indian entrance exams, through CUET-UG and AIU equivalence certificates, and for university applications abroad, which matters for the many OMR families with an eventual move overseas in mind.",
        "Neither system is inherently harder to tutor for. What changes is the kind of help that is useful: a State Board tutor drills past-paper recall, while an IB or IGCSE tutor spends more time on how to structure an evaluative answer or plan a piece of coursework, because that is where the marks actually sit.",
      ],
      table: {
        caption: "How the boards compare for a Chennai family",
        columns: ["Aspect", "TN State Board / CBSE", "IB (PYP-DP)", "Cambridge / Edexcel IGCSE"],
        rows: [
          ["Assessment weight", "Mostly final exam", "Exams plus 20-30% internal assessment", "Exams plus some coursework subjects"],
          ["Subject flexibility", "Fixed syllabus by class", "Choose 6 DP subjects, HL/SL split", "Choose subjects and Core/Extended tier"],
          ["Entrance-exam fit", "Direct fit for TNEA, NEET, JEE", "Needs CUET-UG or AIU equivalence route", "Straightforward IGCSE-to-DP or A Level route"],
          ["Study-abroad fit", "Possible, needs extra documentation", "Widely recognised by overseas universities", "Widely recognised, often paired with the DP"],
        ],
      },
    },
    {
      heading: "What does IB or IGCSE tuition cost in Chennai, and what actually drives the fee?",
      paragraphs: [
        "The fee for an IB or IGCSE tutor in Chennai depends mainly on the programme level, the specific subject, session length and how experienced the tutor is with that exact syllabus. A Diploma HL Maths or Physics specialist typically costs more per hour than MYP or IGCSE Core-tier support, simply because fewer tutors teach that level well. We confirm the fee for your child's specific match before the trial lesson, with no hidden charges added later.",
        "Because every Chennai lesson runs online, there is no travel premium to factor in, which keeps online tuition generally more economical here than an equivalent in-person arrangement elsewhere. What should influence your decision more than the hourly figure is what a session actually covers: a tutor who knows the IGCSE 0620 alternative-to-practical paper or the Maths AA HL Paper 3 style saves far more time than a generalist re-teaching the textbook.",
        "We do not lock families into long contracts. Arrangements are reviewed every few weeks, sessions can be paused around exams or holidays, and you are free to stop without penalty if the schedule no longer suits.",
        "Ask any tutor, ours or otherwise, what a typical session covers, how they track progress and how often you will get an update. Those answers tell you more about value than the price alone.",
      ],
    },
    {
      heading: "Online tuition, coaching centres, private tutors or self-study: what works for Chennai IB and IGCSE students?",
      paragraphs: [
        "Chennai has no shortage of coaching centres built around NEET and JEE preparation, but very few are set up for IB or IGCSE's coursework-heavy, evaluative style of assessment. A batch-taught coaching class that drills problem sets is a poor fit for a Diploma student who needs individual feedback on an Extended Essay draft or a Personal Project journal.",
        "A private, subject-matched tutor solves that mismatch directly, whether the lessons happen online or, less commonly in Chennai, through an occasional in-person arrangement a family sets up independently. Self-study works for a genuinely independent student revising familiar material, but rarely for a new topic, an unfamiliar command word, or the specific structure an Internal Assessment rubric expects.",
        "Online one-to-one tuition, the format every IB Gram lesson in Chennai uses, sits between these options: it keeps the individual attention a coaching batch cannot offer, without assuming a family can find a subject specialist willing to travel across the city on a weekday evening.",
        "The right mix usually depends on the subject and the stage. A student six months from Diploma finals benefits most from a dedicated weekly tutor plus independent past-paper practice; a Grade 9 student adjusting to IGCSE for the first term may need only a light fortnightly check-in.",
      ],
      table: {
        caption: "Comparing tutoring options for Chennai IB and IGCSE students",
        columns: ["Option", "Best for", "Main limitation in Chennai"],
        rows: [
          ["Online one-to-one tutor", "Subject-specific, syllabus-matched help", "Needs a genuinely qualified specialist, not any tutor"],
          ["NEET/JEE coaching centre", "Parallel entrance-exam preparation", "Not built for IB/IGCSE coursework or evaluation style"],
          ["Local private tutor visiting home", "Occasional, informally arranged support", "Few specialists cover IB HL or IGCSE Extended tier locally"],
          ["Self-study with past papers", "Revision of already-understood material", "Weak for new topics or IA and coursework structure"],
        ],
      },
    },
    {
      heading: "The Chennai school year: exams, the northeast monsoon and festivals",
      paragraphs: [
        "Most Chennai international-curriculum schools run an academic year from roughly June to April, but external exams follow the boards' own calendars. IB Diploma finals sit in May, with a smaller November retake session; Cambridge IGCSE sits in May-June and October-November; Edexcel IGCSE sits in January and May-June. Tutoring plans work best when built backwards from those fixed dates.",
        "Chennai's weather calendar cuts across school terms in a way much of India does not: the northeast monsoon arrives in October and November, well after the rest of the country's rains have finished, and has caused real disruption to the school term in past years, including missed weeks around flooding events. Families planning an autumn revision schedule need some slack built in for that.",
        "Pongal in mid-January brings a school break that sits close to the Edexcel January session and Cambridge's October-November results period, so it is a natural point to review progress before the next push. Deepavali in October and the summer heat running into the March-April exam stretch for younger classes are the other calendar markers that shape when families ask for extra sessions.",
        "Grade 11 in June and Grade 9 at the same point are the two natural start dates for new tutoring, giving a full run at internal assessments and tier decisions before the pressure builds.",
      ],
      table: {
        caption: "Chennai's exam and calendar year at a glance",
        columns: ["Period", "What happens", "Effect on tutoring"],
        rows: [
          ["June", "New academic year begins", "Best time to start Grade 9 or Grade 11 tutoring"],
          ["October-November", "Northeast monsoon; Cambridge IGCSE series; Deepavali", "Build in slack for possible school disruption"],
          ["January", "Pongal break; Edexcel IGCSE session", "Good checkpoint to review the term's progress"],
          ["May", "IB Diploma finals; Cambridge/Edexcel May-June series", "Final run of past papers and mock feedback"],
        ],
      },
    },
    {
      heading: "University pathways from Chennai after IB or IGCSE",
      paragraphs: [
        "Chennai IB Diploma students head in several directions: engineering and technology courses in India through JEE, medicine through NEET, direct entry to Indian universities via CUET-UG, or applications abroad to the UK, US, Canada, Singapore or Europe. Each route reads the Diploma differently, and subject choice at Grade 11 needs to anticipate that rather than adjust after the fact.",
        "NEET and JEE eligibility for IB and IGCSE students in Tamil Nadu depends on having covered the required Physics, Chemistry, Maths or Biology content at the right depth, which is one reason so many Chennai Diploma students run entrance-exam coaching alongside their DP sciences rather than instead of them. A tutor who understands both syllabuses can flag the gaps early rather than in Grade 12.",
        "For students applying to Indian universities directly, an Association of Indian Universities equivalence certificate translates IB and IGCSE results into a recognised Indian qualification, and CUET-UG is increasingly the route into central and many state universities. Applications abroad instead weigh predicted grades heavily, which puts real pressure on Grade 11 and early Grade 12 assessments, not just the final May exams.",
        "IB Gram tutors stay focused on the academic side of this: subject depth, predicted-grade improvement and exam technique, while being upfront with families about which subject and level combinations their target courses usually expect.",
      ],
    },
    {
      heading: "IB Maths AA and AI, and the sciences, for Chennai students",
      paragraphs: [
        "Maths Analysis and Approaches suits a Chennai student heading toward engineering or a NEET-adjacent Diploma science combination, since it builds the calculus and proof technique those routes assume. Applications and Interpretation suits a student more interested in statistics, modelling and applied problem-solving, and its exploration is usually easier to build around real data a student can genuinely collect.",
        "Physics, Chemistry and Biology at HL all carry a Paper 3 or extended-response component that rewards depth over breadth, and all three need a scientific investigation with a method that actually holds up to questioning. Chennai students juggling NEET preparation alongside DP sciences often already know the content; what tutoring adds is IB-specific exam technique and the write-up standard the internal assessment rubric expects.",
        "A common Chennai pattern is a student strong on content but weak on command-term precision: writing 'explain' answers as if they were 'state' answers, or describing a graph instead of evaluating what it shows. That gap costs marks consistently and is one of the fastest things a good tutor can fix.",
        "For HL maths and science students specifically, starting tutoring in the first term of Grade 11 rather than waiting for Grade 12 mocks gives real room to build these habits before they show up in a predicted grade.",
      ],
    },
    {
      heading: "IGCSE Core or Extended, and which subjects should a Chennai student choose?",
      paragraphs: [
        "Core tier suits a student who needs a solid pass and is not planning IB Diploma HL sciences or maths afterwards; Extended tier opens the full grade range and is the tier almost every Chennai family planning a Diploma continuation should be choosing, since Core caps the achievable grade well below what HL entry usually expects.",
        "Cambridge is by far the more common board among Chennai IGCSE schools, with Mathematics 0580, Physics 0625, Chemistry 0620 and Biology 0610 the subjects tutoring requests centre on. Edexcel appears in a smaller number of schools and needs a tutor who actually knows Edexcel's own question style, which differs from Cambridge in ways that catch students out in the exam hall.",
        "Additional Mathematics 0606 is worth a specific mention: it is the single subject choice that best predicts how comfortable a Chennai student will be in Maths AA HL two years later, and families planning that route should factor it into the Grade 10 subject list even where it is optional.",
        "Combined or Coordinated Sciences suits a student who wants breadth across three sciences without the depth of separate subjects, but families should check what a target DP science HL choice actually assumes before choosing it, since Combined Science alone can leave a gap for HL entry.",
      ],
    },
  ],

  tutorsIntro:
    "Meet tutors who teach IB PYP, MYP and Diploma subjects and Cambridge or Edexcel IGCSE for Chennai students. Every match weighs the exact syllabus, level and exam session, and confirms an evening or weekend slot that fits your child's school week.",

  process: [
    { title: "Tell us the syllabus", description: "Share the programme or board, subject, level, current grade and the times that work for your Chennai household." },
    { title: "Receive a shortlist", description: "We match tutors on syllabus fit first, explaining why each one suits your child's exact course." },
    { title: "Take a free trial lesson", description: "Your child works through a real topic online with the tutor, at no charge and no obligation." },
    { title: "Agree a first-month plan", description: "The tutor sets out topics and session rhythm; you approve it or ask for changes." },
    { title: "Review regularly", description: "We check progress every few weeks and re-match if the fit is not right." },
  ],

  whyPoints: [
    { title: "Syllabus-specific matching", description: "Tutors are matched on the exact IB subject and level, or IGCSE board, code and tier, not a general label." },
    { title: "Honest about format", description: "We tell Chennai families plainly that lessons are online, not a home visit, before anything is booked." },
    { title: "Free trial before commitment", description: "Your child meets the tutor on a real topic first, so the decision is based on evidence." },
    { title: "Academic integrity built in", description: "Tutors guide IAs, coursework and the EE but never write assessed work, protecting the qualification." },
    { title: "Clear progress updates", description: "A short note after each session, and a review every few weeks." },
    { title: "No long contracts", description: "Pause or stop anytime, and we re-match if a tutor is not the right fit." },
  ],

  faqs: [
    {
      question: "Do you offer home tutors who visit in Chennai?",
      answer:
        "No. Tutors do not visit homes in Chennai; in-person home visits currently run only in Gurugram and parts of Delhi NCR. What we offer instead is online home tuition: a live, one-to-one lesson your child takes at home on a laptop, with the same subject-matched tutor every week, a shared screen for working through problems, and a free trial before you commit to anything.",
    },
    {
      question: "How do I find an IB tutor in Chennai?",
      answer:
        "Share your child's IB programme, subject, level and school with us, and we shortlist tutors who have taught that exact course. Matching is based on the specific subject and HL or SL level first, not a general IB label, and every match starts with a free trial lesson online so you can judge the fit before deciding anything.",
    },
    {
      question: "Do you cover both Cambridge and Edexcel IGCSE in Chennai?",
      answer:
        "Yes, both boards are covered. Cambridge students are matched by syllabus code and tier, such as Mathematics 0580 Extended or Chemistry 0620, and Edexcel students by specification and Foundation or Higher tier. Since Cambridge is far more common in Chennai schools, most requests are Cambridge, but Edexcel specialists are available too.",
    },
    {
      question: "What does IB or IGCSE tuition cost for a Chennai student?",
      answer:
        "The fee depends on the programme, level, subject and the tutor's experience with that exact syllabus, and we confirm it for your child's match before the trial lesson. Since every lesson is online, there is no travel cost added, which generally keeps fees lower than an in-person arrangement elsewhere. There are no long contracts, and you can pause anytime.",
    },
    {
      question: "Which Chennai areas do your online tutors cover?",
      answer:
        "Because every lesson is online, we work with families across Chennai, from the OMR IT corridor through Sholinganallur, Navalur and Kelambakkam to central areas like Mylapore, Adyar and T Nagar, and west-side neighbourhoods such as Ramapuram and Porur. Location mainly affects which evening slot suits a household, not which tutor is available.",
    },
    {
      question: "Is there a free trial lesson before I commit?",
      answer:
        "Yes, every match starts with a free trial lesson online at no charge. Your child works through a real topic from their actual syllabus with the tutor, and afterwards the tutor shares a short first-month plan. You then decide whether to continue, ask for a different focus, or try another tutor.",
    },
    {
      question: "Can a tutor help with IB Internal Assessments or IGCSE coursework?",
      answer:
        "Yes, but only by guiding, never writing. A tutor can help choose a workable research question, explain what the assessment criteria reward, and give critical feedback on drafts. Writing or rewriting an Internal Assessment, Extended Essay or IGCSE coursework component breaches academic integrity rules and can put a qualification at risk, so our tutors decline that request every time.",
    },
    {
      question: "Which IB Diploma subjects do you cover for Chennai students?",
      answer:
        "We match tutors across all major DP subject groups, most requested being Maths Analysis and Approaches or Applications and Interpretation at HL and SL, Physics, Chemistry, Biology, Economics, Business Management, English A and Computer Science. We also cover Psychology, Environmental Systems and Societies, Geography, History, Hindi B, Tamil, Theory of Knowledge and the Extended Essay.",
    },
    {
      question: "Do you tutor MYP and PYP students in Chennai, not just the Diploma?",
      answer:
        "Yes, we tutor right across the IB continuum. PYP support covers reading, writing and number-sense foundations for units of inquiry and the final Exhibition. MYP support focuses on criteria A to D in sciences, maths and language subjects, and on keeping the Personal Project journal current rather than rebuilt at the last minute.",
    },
    {
      question: "Is online tuition as effective as in-person tutoring for IB and IGCSE students?",
      answer:
        "For most IB and IGCSE subjects, yes, particularly for Diploma HL content, exam revision and Internal Assessment guidance, where screen-shared working and past papers cover most of what a session needs. It suits Chennai families especially well, since it removes OMR traffic and school-pickup timing from the equation entirely, and it is the only format IB Gram currently offers in the city.",
    },
    {
      question: "How are IB Gram tutors verified before I book them?",
      answer:
        "Tutors are checked on qualifications, teaching background and depth in the specific subject and level before they are ever introduced to a family. We confirm which IB subjects and levels, or IGCSE boards and tiers, they have taught recently, and the free trial lesson then lets you judge explanation style directly.",
    },
    {
      question: "When should my child start IB or IGCSE tutoring in Chennai?",
      answer:
        "The best time is the start of the course: Grade 11 for the Diploma and Grade 9 for IGCSE, since that gives a full run at internal assessments and tier or subject decisions before pressure builds. Families starting closer to exams can still make real progress, but the focus shifts to the highest-value topics and past-paper technique.",
    },
    {
      question: "My child is switching from CBSE or State Board to IB or IGCSE. Can a tutor help?",
      answer:
        "Yes, this is a common request in Chennai. The content gap is usually smaller than families expect; the real adjustment is in how answers are marked, since IB and IGCSE reward explanation and evaluation over recall. A tutor who knows both systems can teach command-word expectations and coursework planning quickly, ideally starting the term the switch happens.",
    },
    {
      question: "Can sessions run around NEET or JEE coaching schedules?",
      answer:
        "Yes, many Chennai DP science students run entrance-exam coaching alongside their IB subjects, and we plan tutoring slots around that rather than competing with it. A tutor familiar with both syllabuses can also flag where DP science content maps onto NEET or JEE requirements, so preparation for one supports the other instead of doubling the workload.",
    },
    {
      question: "Can sessions happen on weekends or after school hours?",
      answer:
        "Yes, most Chennai families book weekday evening slots after school and weekend mornings. Because sessions are online, there is no travel time to plan around, which makes it easier to fit a second weekly slot in before mocks, an Internal Assessment deadline or the exam series itself.",
    },
    {
      question: "What if we are not happy with the tutor?",
      answer:
        "Tell us and we will find another one. We check in on progress every few weeks and re-match whenever the fit is not right, rather than expecting a child to persist with a tutor who is not working for them. There are no long contracts, so you can also pause or stop sessions at any point.",
    },
    {
      question: "Is IB Gram affiliated with any Chennai school or exam board?",
      answer:
        "No, IB Gram is an independent tutoring platform, not affiliated with, endorsed by or representing any Chennai school, the International Baccalaureate Organization, Cambridge Assessment International Education or Pearson Edexcel. School names on this page describe the school landscape Chennai students study in, and tutors work to each school's own calendar and published syllabus.",
    },
  ],

  internalLinks: [
    { label: "IB tutors in Chennai", href: "/ib-tutors/chennai/", description: "Programme and subject pages for IB tutoring in Chennai." },
    { label: "IGCSE tutors in Chennai", href: "/igcse-tutors/chennai/", description: "Cambridge and Edexcel IGCSE tutor matching for Chennai families." },
    { label: "IGCSE in Chennai", href: "/igcse-pages/chennai/", description: "How IGCSE tuition works for Chennai students." },
    { label: "Browse tutors", href: "/tutors/", description: "Tutor profiles by subject, programme and experience." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "How the DP works: HL and SL, IAs, TOK and the Extended Essay." },
    { label: "IGCSE guide", href: "/igcse/", description: "IGCSE boards, tiers, subjects and exam series explained." },
    { label: "IB and IGCSE tutors home", href: "/ib-tutors/", description: "IB Gram's national tutor-matching service." },
    { label: "Tutors in Coimbatore", href: "/coimbatore/", description: "IB and IGCSE tuition for families in Coimbatore." },
    { label: "Tutors in Salem", href: "/salem/", description: "IB and IGCSE tuition for families in Salem." },
    { label: "Test prep and admissions support", href: "/admissions/test-prep/", description: "Support alongside IB and IGCSE for entrance exams." },
    { label: "Contact IB Gram", href: "/contact-us/", description: "Share your brief and book a free trial lesson." },
    { label: "IB and IGCSE blog", href: "/blog/", description: "Study guides and advice for IB and IGCSE families." },
  ],

  closingHeading: "Book a free trial lesson with an IB or IGCSE tutor in Chennai",
  closingBody:
    "Tell us the programme or board, the subject and level, your child's current grade and the times that suit your household. You will get a shortlisted tutor, their teaching background and trial slots that fit around school and OMR traffic, entirely online, with no charge and no commitment. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp.",
};
