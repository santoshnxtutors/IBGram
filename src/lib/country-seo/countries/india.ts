import type { CountrySeoPage } from "../types";

/**
 * India - https://www.ibgram.com/india/
 *
 * Hand-authored country landing page, and the one country where delivery is not
 * online-only: our tutors are based in India, so face-to-face home tuition is real
 * in Gurugram and parts of Delhi NCR, while every other city is served online on IST.
 * Named schools and universities appear as ecosystem context only - no affiliation
 * is implied, and nothing here should be read as an admission or equivalence ruling.
 */
export const india: CountrySeoPage = {
  slug: "india",
  countryName: "India",
  countryNameLong: "the Republic of India",
  demonym: "Indian",
  flagCode: "in",
  countryCode: "IN",
  region: "South Asia",
  timezoneLabel: "India Standard Time (UTC+5:30), a single clock from Kutch to Kohima",
  schedulingNote: "Weekday slots after school from 4pm, plus weekend mornings, on the same clock your tutor already keeps",
  lastUpdated: "2026-09-14",

  title: "IB Tutors in India | IB & IGCSE Tuition, Online or at Home",
  metaDescription: "IB and IGCSE tutors for families across India. Home tuition in Gurugram and Delhi NCR, online everywhere else, on IST, with CBSE and ICSE switch support.",
  h1: "IB and IGCSE tutors for students across India",
  heroEyebrow: "IB & IGCSE TUITION FOR FAMILIES ACROSS INDIA",
  heroSubtitle: "India now runs one of the largest IB and Cambridge school networks outside the English-speaking West, spread across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune and a widening list of tier-two cities. We match your child with a tutor who has actually taught that programme, that subject and that level, and we do it on IST, because our tutors live on the same clock you do. Home tuition is available in Gurugram and parts of Delhi NCR; everywhere else in the country, lessons run live over video.",
  primaryKeyword: "IB tutors in India",
  imageAltText: "IB Diploma student in India working through a Mathematics Analysis and Approaches problem with a tutor during a one-to-one lesson",
  secondaryKeywords: [
    "IGCSE tutors in India",
    "IB home tutor Delhi NCR",
    "online IB tutor Mumbai",
    "IB DP tutor Bengaluru",
    "IGCSE tuition Hyderabad",
    "IB Maths AA tutor India",
    "IB tutor Chennai online",
    "IB tuition Pune",
    "IGCSE tutor Kolkata",
    "CBSE to IB transition tutor",
    "ICSE to IGCSE switch help",
    "AIU equivalence IB Diploma",
    "IB Extended Essay guidance India",
    "IGCSE 0580 tutor online India",
    "IB tutor Ahmedabad",
  ],

  heroTrustPoints: [
    "Tutors who work daily with India's IB World Schools and its large Cambridge and Pearson Edexcel IGCSE network.",
    "Everything runs on India Standard Time, so no lesson is ever squeezed into someone else's working day.",
    "Full coverage of IB PYP, MYP, DP and CP alongside IGCSE, plus CBSE and ICSE switch preparation.",
    "Face-to-face home tuition in Gurugram and parts of Delhi NCR; live online lessons in every other city.",
  ],
  heroStats: [
    { value: "230+", label: "IB World Schools authorised across India" },
    { value: "UTC+5:30", label: "One national clock, no daylight saving" },
    { value: "May", label: "DP exam session used by Indian IB schools" },
    { value: "1:1", label: "Default format: one student, one tutor" },
  ],

  intro: {
    heading: "Who we tutor in India: IB, IGCSE and families moving across from CBSE or ICSE",
    paragraphs: [
      "India is unusual among the countries we serve because the international curricula sit side by side with two enormous national boards and more than two dozen state boards, and because families often move between them mid-school. A child can spend eight years on CBSE, switch to IGCSE in Grade 9 because a parent's job is likely to move, and then land in the IB Diploma two years later. We tutor at every point along that path, and we spend a surprising amount of our time on the joins rather than the straight stretches.",
      "The IB footprint here is now substantial. More than 230 schools across the country hold authorisation for at least one IB programme, with the densest clusters in Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune and Chennai, and newer authorisations appearing in Ahmedabad, Kochi, Indore, Jaipur, Chandigarh and Coimbatore. Cambridge and Pearson Edexcel IGCSE reach further still, taught in hundreds of schools that never take the Diploma route at all, feeding instead into A Levels, the IB, or back into an Indian Grade 11 through equivalence.",
      "Most enquiries arrive at one of four moments. A Grade 10 IGCSE student finds the Extended-tier Mathematics paper harder than the school's internal tests suggested. A DP1 student picks three HLs in September and discovers by November that one of them is going to eat the year. A family is planning the CBSE-to-IGCSE or ICSE-to-IB move and wants to know honestly what the gap looks like. Or a DP2 student has an Extended Essay that has not moved in six weeks and a first-draft deadline that has.",
      "We start from specifics: the exact school, the exact board, the exact subject and level, and, for IGCSE, the syllabus code printed on the course outline, because 0580 and 4MA1 do not reward the same habits. A tutor who has taught that combination is proposed by name, with their background shared before anything is scheduled, and a free trial lesson comes before any block is agreed.",
      "Sessions default to one student and one tutor, built around whatever is live that week — a marked script, an unfinished internal assessment, a mock coming after the Dussehra break. A short written note follows every lesson so parents can see what was covered without waiting for a school report. If a tutor is not clicking with your child, say so and someone else takes over; keeping a bad pairing going out of politeness costs a term nobody gets back.",
    ],
    bullets: [
      "Home tuition is available in Gurugram and parts of Delhi NCR; every other Indian city is served by live online lessons on IST.",
      "We cover IB PYP, MYP, DP and CP, Cambridge and Pearson Edexcel IGCSE, and the bridging work into and out of CBSE and ICSE.",
      "Work follows the school's real calendar: internal assessments, mocks, the May session and board dates, not a generic revision plan.",
      "A free trial lesson comes first, a written note follows each class, and a tutor change is always available without friction.",
    ],
  },

  programmesIntro: "India runs the full IB continuum, and unlike most countries we cover, the earlier programmes are not an afterthought here: a good number of schools in Mumbai, Bengaluru, Hyderabad and Delhi NCR are authorised for PYP and MYP as well as the Diploma, so a child can enter at Grade 1 and never touch a national board. The Career-related Programme is the rarest of the four in India but is slowly appearing at schools with strong design, business or hospitality pathways. Below is what each stage actually demands of a student here, and where tutoring tends to earn its place.",
  programmes: [
    {
      code: "PYP",
      name: "Primary Years Programme",
      ageRange: "Ages 3-12 · Grade 1-5",
      description: "Transdisciplinary units of inquiry replace a fixed subject timetable, and assessment is a portfolio rather than a mark out of a hundred. Our role at this age stays deliberately light: fluent reading in English, secure number sense, and help shaping the short pieces of writing a unit asks for, so nothing becomes a battle at home.",
      countryNote: "Several Indian PYP schools also prepare children for a possible later move into a CBSE or ICSE school, so parents often ask us to keep arithmetic drill and formal handwriting ticking alongside the inquiry work.",
    },
    {
      code: "MYP",
      name: "Middle Years Programme",
      ageRange: "Ages 11-16 · Grade 6-10",
      description: "Eight subject groups across five years, graded against criteria A to D rather than a single percentage, with the Personal Project closing the final year. Sessions target the criteria directly — investigation design for Sciences, argument construction for Individuals and Societies — and build the long written responses MYP wants before DP demands them.",
      countryNote: "MYP Year 5 is the pinch point in India: many schools run MYP eAssessment or a school-based conclusion, and parents comparing notes with IGCSE-taking cousins often want reassurance that the mathematics depth is genuinely there before DP.",
    },
    {
      code: "DP",
      name: "Diploma Programme",
      ageRange: "Ages 16-19 · Grade 11-12",
      description: "Six subjects with three or four at Higher Level, held together by Theory of Knowledge, the 4,000-word Extended Essay and CAS. Time splits between HL content depth, timed paper technique against the current mark schemes, and a standing slot for whichever piece of the core has stalled — usually the Extended Essay research question.",
      countryNote: "Indian IB schools sit the May session, which puts DP2 mocks in January and February, straight through the same window as CUET registration and JEE Main's first attempt for students hedging across both systems.",
    },
    {
      code: "CP",
      name: "Career-related Programme",
      ageRange: "Ages 16-19 · Grade 11-12",
      description: "Two or more DP subjects taught to full standard alongside a career-related study and the CP core: Personal and Professional Skills, Service Learning, language development and the Reflective Project. We teach the DP half exactly as we would for a Diploma student and coach the Reflective Project from ethical dilemma to finished submission.",
      countryNote: "CP remains uncommon in India and is usually attached to design, business or hospitality pathways; families comparing it against a straight Diploma should check how each target university treats it, since recognition is less uniform than for the DP.",
    },
  ],

  subjectsIntro: "Matching happens at subject and level, never at the label 'IB tutor'. A Physics HL student halfway through Theme D needs someone who knows how Paper 1A is currently set, not a general physics teacher. Below are the IB subjects we most often cover for students in India; sessions run on IST, so a 6pm slot in Pune or Guwahati is an ordinary working evening for the tutor too.",
  subjects: [
    { name: "Mathematics: Analysis & Approaches", levels: "HL · SL", description: "Proof, calculus and vectors at HL, with the Paper 3 extended investigation treated as its own skill rather than something to meet for the first time in the exam hall. SL work keeps algebraic fluency solid, and the exploration is planned early enough to leave room for the rewrite it always needs." },
    { name: "Mathematics: Applications & Interpretation", levels: "HL · SL", description: "Written for students who reason through data rather than proof: statistics, modelling and confident calculator technique carry SL, while HL adds matrices, graph theory and complex numbers. Exploration topics are chosen for data you can actually obtain in India, not a dataset that turns out to be paywalled." },
    { name: "Physics", levels: "HL · SL", description: "Themes A to E worked problem-first, with uncertainty treatment and graph work built into ordinary sessions instead of parked until the practical scheme. Paper 1A multiple-choice pacing and Paper 2 structured answers are drilled separately, since students lose marks in different ways on each." },
    { name: "Chemistry", levels: "HL · SL", description: "Structure and reactivity taught as one connected story, with mole calculations, energetics, equilibrium and organic mechanisms broken down to the exact step where working goes wrong. Data booklet fluency is practised until it stops costing time, and the Scientific Investigation is scoped for a real school lab." },
    { name: "Biology", levels: "HL · SL", description: "The syllabus is organised around unity and diversity and form and function, so sessions cross-reference themes deliberately rather than marching through a list. Command-term discipline and extended-response structure get as much attention as recall, and IA statistics are planned before data collection, not after." },
    { name: "Economics", levels: "HL · SL", description: "Microeconomics, macroeconomics and the global economy anchored to the nine key concepts, with diagram accuracy drilled hard because it carries marks that students assume are automatic. Commentaries are built from Indian and international news stories that genuinely contain the theory being claimed." },
    { name: "Business Management", levels: "HL · SL", description: "The five units applied to real organisations rather than textbook inventions, with HL quantitative tools worked until they are quick. The Business Research Project is scoped early around a company the student can actually get information on, and evaluation marks are coached explicitly." },
    { name: "English A: Language and Literature", levels: "HL · SL", description: "Paper 1 unseen analysis under time, Paper 2 comparative argument, the Individual Oral and the HL Essay. Particularly useful for strong Indian-school English students who write fluently but have never been asked to build a global-issue argument around a text before." },
    { name: "English B", levels: "HL · SL", description: "For students still consolidating academic English: the five prescribed themes, text-type conventions, the listening paper and the individual oral, with steady work on accuracy under exam conditions so fluency in conversation converts into marks on paper." },
    { name: "Hindi B and Hindi A: Literature", levels: "HL · SL", description: "Both routes are common in Indian IB schools. Hindi B covers text types, receptive skills and spontaneous speaking; Hindi A: Literature works through set texts, the individual oral and the comparative essay for students whose strongest literary language is Hindi." },
    { name: "French B and Spanish B", levels: "HL · SL", description: "The most widely chosen second foreign languages in Indian IB schools. Sessions build text-type conventions for Paper 1, reading and listening technique for Paper 2, and the unscripted conversation that decides the individual oral." },
    { name: "History", levels: "HL · SL", description: "Prescribed subjects and world history topics, with source evaluation, counter-argument and essay structure taught as separate skills. The historical investigation is narrowed to a question answerable from sources a student in India can actually reach." },
    { name: "Geography", levels: "HL · SL", description: "Case-study depth over breadth, with Indian examples used where they genuinely fit the syllabus option rather than forced in. Fieldwork methodology for the internal assessment is planned properly, because weak method caps the mark no matter how good the write-up is." },
    { name: "Psychology", levels: "HL · SL", description: "Biological, cognitive and sociocultural approaches, with study citation precision treated as a skill in itself and extended-response questions structured to the command term. The experimental study is designed to be ethical, replicable and small enough to finish." },
    { name: "Computer Science", levels: "HL · SL", description: "Programming in Java or Python alongside data structures, object orientation, networks and systems fundamentals. The internal assessment is guided from client brief through to testing and documentation, which is where most of the avoidable marks sit." },
    { name: "Environmental Systems and Societies", levels: "HL · SL", description: "A dual-award subject counting for both Group 3 and Group 4, which makes it a timetable saver for students carrying three HLs. Sessions cover systems diagrams, environmental value systems and the extra analytical lenses HL adds." },
    { name: "Theory of Knowledge", levels: "DP Core", description: "The exhibition commentary and the prescribed-title essay, taught as argument rather than opinion. Students are pushed to argue both sides of a knowledge question properly, which is usually the difference between a middling grade and a strong one." },
    { name: "Extended Essay", levels: "DP Core", description: "Subject choice, research question scope, the subject-specific criteria and the three reflection sessions. Guidance only, always: the tutor questions, challenges and responds to drafts the student has written, and never supplies text that goes into the submission." },
  ],

  igcseSubjectsIntro: "IGCSE is far more widespread in India than the Diploma, and the two boards behave differently enough that we always ask for the syllabus code before matching. Cambridge and Pearson Edexcel set the same content at noticeably different question styles, and a tutor who has taught one and assumes the other costs students marks in the final ten minutes of a paper.",
  igcseSubjects: [
    { name: "Cambridge Mathematics 0580", levels: "Core · Extended", description: "Extended-tier problem solving, non-calculator accuracy and the command words that quietly decide whether method marks are awarded. Past papers are worked to time from early in Grade 10, not saved for March." },
    { name: "Cambridge Additional Mathematics 0606", levels: "Grade 9-10", description: "Calculus, trigonometric identities, logarithms and vectors — the single best bridge into IB Mathematics AA HL or A Level Mathematics, and the subject Indian students most often underestimate in the first term." },
    { name: "Edexcel Mathematics A 4MA1", levels: "Foundation · Higher", description: "Higher-tier question styles, which reward slightly different working from Cambridge, along with the calculator discipline Edexcel papers assume throughout both written components." },
    { name: "Cambridge Physics 0625", levels: "Core · Extended", description: "Reliable equation rearrangement, electricity and waves taught with worked diagrams, and the alternative-to-practical paper prepared as its own paper rather than as leftover revision." },
    { name: "Cambridge Chemistry 0620", levels: "Core · Extended", description: "Mole calculations, bonding, electrochemistry and organic chemistry, with the practical-skills paper drilled on apparatus description and observation wording, where marks routinely go missing." },
    { name: "Cambridge Biology 0610", levels: "Core · Extended", description: "Genetics, transport and coordination taught with diagram labelling precision, plus extended-response structure and data interpretation under the time pressure the paper actually applies." },
    { name: "Combined and Coordinated Sciences", levels: "0653 · 0654", description: "Three sciences on one timetable, kept in balance so the weakest of the three does not quietly decide the grade. Common for students who intend to take humanities or commerce further." },
    { name: "Cambridge Economics 0455", levels: "Grade 9-10", description: "Diagram accuracy first, then the longer evaluation questions where judgement has to be argued rather than asserted. A natural feeder into IB Economics HL for students planning ahead." },
    { name: "Cambridge Business Studies 0450", levels: "Grade 9-10", description: "Applying theory to the specific case-study business in front of them instead of writing generic answers, which is the single most common reason strong students stall at a B." },
    { name: "Cambridge Accounting 0452", levels: "Grade 9-10", description: "Double entry, final accounts layout and ratio analysis, where presentation itself carries marks and neatness under time pressure is a genuine skill to practise." },
    { name: "Cambridge Computer Science 0478", levels: "Grade 9-10", description: "Trace tables, pseudocode conventions and Python for the problem-solving paper, with the theory paper's networking and data representation topics taught alongside rather than after." },
    { name: "Cambridge ICT 0417", levels: "Grade 9-10", description: "The practical papers, where marks are lost on formatting, file handling and following instructions exactly — all of which respond quickly to supervised practice." },
    { name: "English First Language 0500", levels: "Grade 9-10", description: "Directed writing, summary technique and composition, with close reading of unseen texts. Indian students often read well and summarise loosely; the summary paper punishes that precisely." },
    { name: "English as a Second Language 0510", levels: "Grade 9-10", description: "Reading, writing, listening and speaking drilled as four separate components, since a student is rarely equally strong across all four and the paper does not average them out." },
    { name: "Geography, History and Literature", levels: "0460 · 0470 · 0475", description: "Named case-study depth for Geography, source inference and essay argument for History, and close textual analysis for Literature, all under genuine exam timing." },
    { name: "Hindi as a Second Language 0549", levels: "Grade 9-10", description: "The reading, writing and speaking components, useful for students in Indian IGCSE schools who speak Hindi at home but have never written it to an exam standard." },
  ],

  regionsTitle: "Cities, metros and school belts we cover across India",
  tutorsIntro: "The tutors below are scheduled on India Standard Time, which is simply the clock you already keep — a 5pm slot in Chennai and a 5pm slot in Chandigarh are the same lesson, with no time-zone arithmetic on either side.",
  regionsIntro: "India runs on a single time zone, India Standard Time, with no daylight saving anywhere in the country, which makes scheduling markedly simpler here than in the multi-zone countries we serve. Most families book weekday slots from 4pm once school transport is done, or weekend mornings. DP2 and Grade 10 students usually add a second weekly hour from January onward. Home tuition is available in Gurugram and parts of Delhi NCR; every other city listed below is served online.",
  regions: [
    { name: "Delhi NCR (Gurugram, Noida, Delhi, Faridabad)", note: "The country's largest concentration of IB and IGCSE schools outside Mumbai, spread across the Golf Course corridor, South Delhi, Noida's Expressway sectors and Faridabad. This is the one region where face-to-face home tuition is available, with online covering anything travel makes impractical on a school night." },
    { name: "Mumbai and MMR (Bandra, Powai, Navi Mumbai, Thane)", note: "A dense IB and IGCSE belt running from the western suburbs through Powai out to Navi Mumbai and Thane. Commute times here push most families to online evening slots even when a tutor is nominally nearby." },
    { name: "Bengaluru", note: "Whitefield, Sarjapur Road, Hebbal and North Bengaluru carry a very large international-school population, with heavy demand for Mathematics AA HL, Physics and Computer Science from families in the technology sector." },
    { name: "Hyderabad", note: "Gachibowli, Kondapur, Jubilee Hills and the Financial District cluster, with a fast-growing IGCSE base and steady DP demand in the sciences and Business Management." },
    { name: "Chennai", note: "OMR, Adyar, Besant Nagar and Nungambakkam, where several long-established IB and Cambridge schools sit alongside a strong state-board tradition, producing frequent mid-school switch enquiries." },
    { name: "Pune", note: "Kalyani Nagar, Koregaon Park, Baner and Hinjewadi. A mature IB and IGCSE market with a large returning-NRI population, and consistent demand for Extended Essay and TOK guidance." },
    { name: "Kolkata", note: "Ballygunge, Salt Lake and New Town, where ICSE is historically dominant and much of our work involves students moving from ISC expectations into DP command terms and criteria." },
    { name: "Ahmedabad and Gandhinagar", note: "A growing IB and IGCSE cluster along SG Highway and in Gandhinagar, where families often run an IB or IGCSE course alongside plans for Indian university entry via CUET." },
    { name: "Chandigarh, Mohali and Panchkula", note: "A compact tricity market with a handful of international schools and a strong preference for fixed weekly evening slots during term." },
    { name: "Kochi, Thiruvananthapuram and Coimbatore", note: "South Indian cities with newer IB authorisations and established Cambridge schools, where local subject-specialist supply is thin and online matching genuinely widens the choice." },
    { name: "Jaipur, Indore and Bhopal", note: "Tier-two cities with expanding international-school provision, where families frequently ask for HL science and Mathematics tutors who simply are not available locally." },
    { name: "Dehradun, Mussoorie and the boarding belt", note: "Long-established residential schools running IB and IGCSE alongside Indian boards, where scheduling has to fit the school's own prep and lights-out timetable rather than a family's evening." },
  ],

  schoolDisclaimer: "IB Gram is an independent tutoring service. We are not affiliated with, endorsed by, authorised by or acting for any school, university or examination body named on this page, including the International Baccalaureate Organization, Cambridge International, Pearson Edexcel, CBSE, CISCE or the Association of Indian Universities. Institutions are named only to describe the landscape Indian families are choosing between, and nothing here should be read as an admission, equivalence or recognition ruling.",
  schoolClusters: [
    {
      city: "Delhi NCR",
      note: "The widest range of enquiries we handle anywhere in the country, from Grade 9 IGCSE foundations through to DP2 Extended Essay work. This is also the only region where a tutor may come to the home rather than teach online.",
      schools: [
        "The Shri Ram School (Aravali and Moulsari)",
        "Pathways World School, Aravali",
        "GD Goenka World School",
        "Heritage Xperiential Learning School",
        "The British School, New Delhi",
        "Step by Step School, Noida",
      ],
    },
    {
      city: "Mumbai and MMR",
      note: "A mature IB and IGCSE market where DP HL sciences, Mathematics AA and Economics account for most of what we are asked to cover, usually in online evening slots after long commutes.",
      schools: [
        "Dhirubhai Ambani International School",
        "Oberoi International School",
        "Ecole Mondiale World School",
        "Bombay International School",
        "Singapore International School, Mumbai",
      ],
    },
    {
      city: "Bengaluru",
      note: "Heavy demand for Mathematics AA HL, Physics HL and Computer Science, with a noticeable share of families who have moved back from abroad and want continuity with an international curriculum.",
      schools: [
        "Stonehill International School",
        "Canadian International School, Bangalore",
        "Indus International School, Bangalore",
        "Greenwood High International School",
        "TISB (The International School Bangalore)",
      ],
    },
    {
      city: "Hyderabad and Chennai",
      note: "A younger IB market than Mumbai or Delhi, with strong IGCSE volumes at Grade 9 and 10 and growing DP enquiries in the sciences, Business Management and Economics.",
      schools: [
        "Oakridge International School, Hyderabad",
        "Indus International School, Hyderabad",
        "Chirec International School",
        "The International School, Chennai",
        "American International School Chennai",
      ],
    },
    {
      city: "Pune and Western India",
      note: "Consistent Diploma core demand — Extended Essay, TOK and internal assessment coaching — alongside ordinary subject tutoring, with many families planning applications to both Indian and overseas universities at once.",
      schools: [
        "Mercedes-Benz International School",
        "Symbiosis International School",
        "The Orchid School",
        "Victorious Kidss Educares",
      ],
    },
  ],

  modesIntro: "India is the only country where we offer more than one delivery format, because our tutors live here. In Gurugram and parts of Delhi NCR a tutor can come to you; everywhere else in India lessons run live over video with a shared whiteboard and screen-shared past papers, which is how we reach families in cities where a specialist in one exact syllabus simply is not available locally. Whichever format you choose, the same tutor stays with your child week to week, and a written note follows every session.",
  modes: [
    {
      title: "Home tuition in Gurugram and Delhi NCR",
      description: "A tutor travels to your home for a fixed weekly slot, planned around school timings and realistic evening traffic rather than an optimistic map estimate. This is the format most Delhi NCR families start with for Grade 9 and 10 students, and for younger children who work better with someone physically at the table.",
      bullets: [
        "Available in Gurugram and the parts of Delhi, Noida and Faridabad a tutor can reliably reach on a school night.",
        "Sessions of 60 or 90 minutes at a fixed weekly time, agreed at the trial and held through the term.",
        "Best for younger students, for Grade 9 and 10 foundations, and for anyone who works better away from a screen.",
        "Slots on the Golf Course and Sohna Road corridors fill first, so book earlier in the term rather than in exam season.",
      ],
    },
    {
      title: "Online lessons anywhere in India",
      description: "Live video with a shared whiteboard, screen-shared past papers and marked scripts annotated in real time. This is how we serve Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata and every tier-two city, and it is what makes exact syllabus matching possible rather than settling for whoever teaches nearby.",
      bullets: [
        "Available in every Indian city, on IST, with no travel time lost at either end of the lesson.",
        "The tutor is chosen for the exact subject, level and syllabus code, not for proximity to your address.",
        "Recordings of worked solutions and the shared whiteboard stay available for revision afterwards.",
        "Practical for boarding-school students, for families who move cities, and for households where evenings are tight.",
      ],
    },
    {
      title: "Exam-block intensives before mocks and the May session",
      description: "Compressed runs of work timed to a fixed date: DP2 mocks in January, the May session itself, or the Cambridge and Edexcel IGCSE series. Instead of one weekly hour a student might take three or four sessions a week for a defined stretch, working timed papers with feedback returned within days, planned around Diwali, Dussehra and the school's own break calendar.",
      bullets: [
        "Timed past papers marked against the current IB, Cambridge or Edexcel criteria, with feedback back the same week.",
        "Built around the session that actually applies — May for DP, May/June or October/November for IGCSE.",
        "Scheduled around Diwali, Dussehra and regional holidays instead of pretending they will not happen.",
        "Reserve four to eight weeks ahead; evening slots closest to any exam series are the first to go.",
      ],
    },
  ],

  sections: [
    {
      heading: "How does the IB compare with CBSE, ICSE and IGCSE in India?",
      paragraphs: [
        "The short answer: CBSE and ICSE are content-heavy and examination-final, IGCSE is content-broad with more skills assessment, and the IB Diploma is narrower in subject count but far deeper in independent work. None of them is simply harder than the others; they are hard in different places, which is exactly why a mid-school switch needs planning rather than optimism.",
        "CBSE, run by the Central Board of Secondary Education, is the largest single board in the country and the default reference point for Indian competitive examinations. Its Class 11 and 12 syllabus in Physics, Chemistry and Mathematics maps closely onto JEE and NEET preparation, which is precisely why families aiming at Indian engineering and medical entrance examinations rarely leave it. CISCE's ICSE and ISC, historically strong in English and the humanities, sit alongside it with a broader subject spread and a heavier internal-assessment component.",
        "IGCSE, offered by Cambridge International and Pearson Edexcel, covers Grade 9 and 10 with a wider subject choice and a genuine practical and coursework element in several subjects. Students arriving from CBSE often find the content lighter but the question styles unfamiliar, particularly command words and the expectation that an answer be argued rather than recalled. The Association of Indian Universities recognises IGCSE as equivalent to Class 10 for the purpose of moving into an Indian Grade 11, though schools apply their own admission criteria on top.",
        "The IB Diploma narrows to six subjects but adds Theory of Knowledge, the Extended Essay and CAS, all of which consume real time across two years. Students who thrived on CBSE's volume sometimes struggle with the DP's demand for independent research and self-managed deadlines, while students who found CBSE's pace relentless often prefer the DP's depth. Neither reaction is a verdict on ability.",
        "Our practical advice to Indian families is to choose on destination and temperament rather than prestige. If Indian engineering or medical entrance examinations are the plan, CBSE remains the smoother road. If overseas universities or a genuinely international pathway is the plan, IB or IGCSE-then-A-Level is more natural. If the family may move countries, IGCSE and IB travel far better than a state board does.",
      ],
      table: {
        caption: "The four routes Indian families choose between at Grade 9",
        columns: ["Route", "Grades covered", "How it is assessed", "Usually chosen for"],
        rows: [
          ["CBSE", "Class 9-12", "Board examinations at Class 10 and 12, limited internal assessment", "JEE, NEET and CUET preparation; widest school availability nationwide"],
          ["ICSE / ISC (CISCE)", "Class 9-12", "Board examinations plus substantial internal assessment", "Strong English and humanities grounding; Indian university entry"],
          ["Cambridge / Edexcel IGCSE", "Grade 9-10", "External papers, practical and coursework components by subject", "Flexibility at 16, a bridge into IB DP or A Levels, families who may relocate"],
          ["IB Diploma Programme", "Grade 11-12", "External papers, internal assessment, TOK, Extended Essay, CAS", "Overseas university applications and students who prefer depth to volume"],
        ],
      },
      bullets: [
        "Switch decisions are easiest at the end of Grade 8 and hardest mid-Grade 11; the middle of DP1 is the worst moment to change anything.",
        "IGCSE Additional Mathematics 0606 is the most useful single subject for a student who may move into IB Mathematics AA HL.",
        "A CBSE student moving to IGCSE usually needs command-word and structured-answer work more than they need new content.",
        "An ICSE student moving to DP typically writes well already but has to learn to argue to criteria rather than to length.",
      ],
    },
    {
      heading: "Are IB and IGCSE results recognised for university admission in India?",
      paragraphs: [
        "Yes, broadly — the Association of Indian Universities issues equivalence certificates for the IB Diploma and for IGCSE, and Indian universities routinely admit IB students. The detail matters, though: equivalence is a formal process with its own document requirements, and individual universities layer their own eligibility conditions on top of it, so families should confirm current requirements directly with both AIU and the target institution rather than relying on what worked for someone two years ago.",
        "For the IB Diploma, AIU equivalence to the Indian Class 12 standard has historically required the full Diploma with a minimum point total and a specified spread of subjects, including English and a set number of subjects at Higher Level. Students who take IB Courses rather than the full Diploma are treated differently, which occasionally surprises families in DP2 who dropped to certificate status mid-course. If Indian university entry is a live option, check the subject spread in DP1, not in February of DP2.",
        "CUET-UG has changed the picture meaningfully for IB and IGCSE students. Central universities and a growing number of others now admit through CUET scores rather than board percentages, which removes the old problem of converting a 42-point Diploma into a percentage that competes with a 98 per cent CBSE aggregate. The examination is syllabus-referenced to NCERT content, however, so IB students sitting it need deliberate preparation against that content rather than assuming DP coverage will do.",
        "Engineering and medical routes are stricter. JEE and NEET eligibility rules are framed around recognised Class 12 qualifications and specified subject combinations, and IB students generally need their equivalence documentation in order well before counselling. Students carrying both a Diploma and Indian entrance ambitions effectively run two syllabuses at once, which is workable but has to be planned from Grade 11 rather than discovered in Grade 12.",
        "Private Indian universities — among them Ashoka, Krea, FLAME, O.P. Jindal, Symbiosis, Christ and Plaksha — have been the fastest to build admission processes that read IB and IGCSE grades natively, often through their own aptitude tests and interviews. For many IB families this is now the practical middle path between an overseas application and a CUET-driven public-university route.",
      ],
      table: {
        caption: "Indian university entry routes for IB and IGCSE students",
        columns: ["Entry route", "What it typically needs", "Where the planning has to start"],
        rows: [
          ["AIU equivalence certificate", "Full IB Diploma, required subject spread including English, minimum points, original documents", "DP1 subject choice, not DP2 results week"],
          ["CUET-UG", "Registration in the DP2 spring window, preparation against NCERT-referenced content", "Around the start of DP2, alongside mocks"],
          ["JEE / NEET", "Recognised Class 12 equivalence and the specified subject combination", "Grade 11, since the parallel syllabus load is significant"],
          ["Private university admission", "IB or IGCSE grades read directly, often plus an aptitude test and interview", "Mid-DP2, with predicted grades in hand"],
          ["Overseas applications", "Predicted grades, transcripts, references and DP core completion", "Early DP2 for UK and Europe; DP1 summer for US timelines"],
        ],
      },
      bullets: [
        "Confirm AIU requirements at the time you apply; the criteria and document list are periodically revised.",
        "Certificate-only IB Courses candidates are not treated the same as full Diploma candidates for equivalence.",
        "CUET preparation for an IB student is extra work, not a by-product of DP study — budget the hours honestly.",
        "Keep original IB and Cambridge statements of results safe; equivalence processes ask for originals, not photocopies.",
      ],
    },
    {
      heading: "What does the Indian IB and IGCSE academic year actually look like?",
      paragraphs: [
        "Indian schools open the academic year around April in most of the country and in June in parts of the south and west, which means an IB school in India runs DP1 from April to March rather than September to June. That single fact reshapes everything: mocks, internal assessment deadlines and the May session all fall in a different rhythm from the northern-hemisphere pattern most IB literature assumes.",
        "In practice, DP1 begins in April, the first internal assessment drafts land between August and October, and the Extended Essay research question should be settled before the winter break. DP2 opens the following April, mocks are usually held in January and February, and the May session follows immediately. The gap between mocks and finals is therefore short, which is why families who wait for mock results before arranging tutoring have already lost most of the useful runway.",
        "IGCSE students in India sit either the May/June or the October/November series, and schools differ on which one they enter for which subject. Grade 10 pressure builds from the Diwali break onward, and the Extended-tier Mathematics and the sciences are where most late requests for help arrive. Starting in Grade 9 rather than in Grade 10's second term is the difference between building a grade and defending one.",
        "The festival calendar is not a detail. Dussehra, Diwali, Christmas, Pongal, Onam and regional holidays cut real weeks out of a term, and schools in different states lose different weeks. We plan intensives around them rather than through them, because sessions scheduled during Diwali week get cancelled and then have to be rebuilt anyway.",
        "For families running both systems at once — a Diploma alongside CUET or JEE preparation — the collision points are predictable: January and February hold DP2 mocks, CUET registration and JEE Main's first attempt simultaneously. That stretch needs a written plan agreed in DP1, not improvised in the middle of it.",
      ],
      table: {
        caption: "Typical year for an Indian IB and IGCSE student",
        columns: ["Period", "IB Diploma", "IGCSE (Grade 9-10)"],
        rows: [
          ["April - June", "DP1 or DP2 begins; subject choices confirmed in DP1", "New grade begins; syllabus codes issued in the course outline"],
          ["August - October", "First IA drafts; Extended Essay question settled before winter", "First school assessments; Extended vs Core tier decisions firm up"],
          ["November - December", "DP1 exams; DP2 IA final drafts and EE full draft", "October/November series for schools entering it; Diwali break"],
          ["January - February", "DP2 mocks, CUET registration, JEE Main first attempt", "Final school mocks and past-paper intensives"],
          ["March - May", "The May session for DP2; DP1 end-of-year examinations", "May/June Cambridge and Edexcel series"],
        ],
      },
      bullets: [
        "Book intensives before the December break, not in February, because the useful evening slots are gone by then.",
        "Extended Essay work should be finished, not started, by the time DP2 mocks arrive.",
        "Grade 9 is the right time to start IGCSE support; Grade 10's second term is damage control.",
        "Plan explicitly around the festival weeks your state actually takes off, which differ across the country.",
      ],
    },
    {
      heading: "Moving from CBSE or ICSE to IB or IGCSE: what the gap really is",
      paragraphs: [
        "The gap is rarely content. A CBSE Class 9 student moving into IGCSE usually knows more Mathematics than the syllabus requires at that point; what they have not practised is being asked to explain, evaluate or design rather than solve and state. The first term after a switch is mostly about question style, command words and the expectation that written answers carry an argument.",
        "In the sciences the direction reverses at DP level. The Diploma's HL sciences go further into some topics than CBSE Class 12 does, and the internal assessment demands an independent investigation that no Indian board asks for. Students who have never designed their own experiment find this genuinely hard the first time, and it is worth starting the IA conversation months before the school's own deadline.",
        "In English the move usually flatters ICSE students, who tend to write fluently and at length. The DP, however, rewards precision to criteria rather than volume, and the Individual Oral asks for a global issue argued through two texts, which is unfamiliar to almost everyone arriving from an Indian board. Fluency helps; it does not substitute for structure.",
        "Mathematics is where the switch most often goes wrong without support. A student moving from CBSE into Mathematics AA HL meets proof, the calculator-active paper and the exploration, none of which resemble what came before. A student moving into AI SL sometimes finds it too easy for a term and then hits statistical modelling unprepared. Choosing the right course, honestly, matters more than choosing the more prestigious one.",
        "We handle this work constantly, and the pattern is consistent: a focused eight to twelve weeks around the switch does more than a full year of general tutoring afterwards. Sessions target command terms, mark-scheme reading, the internal-assessment format and the specific topic gaps that the two syllabuses genuinely leave — which is a much shorter list than most families fear.",
      ],
      bullets: [
        "Expect question style, not content, to be the main obstacle in the first term after a switch.",
        "Start internal assessment familiarisation early; no Indian board prepares a student for an independent investigation.",
        "Choose Mathematics AA or AI on how the student actually thinks, not on which one sounds stronger on an application.",
        "A concentrated block around the switch beats a year of general support afterwards.",
      ],
    },
    {
      heading: "Internal assessments, the Extended Essay and academic honesty",
      paragraphs: [
        "Every IB internal assessment, the Extended Essay, TOK work and IGCSE coursework must be the student's own. Indian schools submit to the same authentication and similarity checks as schools anywhere else, and a malpractice finding at DP level can cost the entire Diploma, not one grade. This is the line our tutors work up to and do not cross.",
        "What a tutor can legitimately do is considerable. They can help narrow a research question from something unanswerable to something a student can actually complete, unpack what each criterion genuinely rewards, pressure-test a method before data collection wastes a month, ask the questions a supervisor might ask, and respond to a draft the student wrote. That is coaching, and it is where most of the improvement lives.",
        "What a tutor will not do is write, rewrite or supply text, produce data, or hand over a structure that the student then fills in mechanically. If a tutor's contribution would need to be declared and is not, it should not have happened. We tell students this directly at the start of any internal assessment work, because the temptation is highest at 11pm two days before a deadline.",
        "The Extended Essay is where Indian students most often ask for help, and usually too late. The single highest-value intervention is an early conversation about scope — most stalled essays are stalled because the question is too broad to answer in 4,000 words or too narrow to sustain them. A half-hour on scope in DP1 saves weeks in DP2.",
        "For IGCSE, coursework and practical components vary by subject and board, and the alternative-to-practical papers are their own skill. We prepare those as papers in their own right, with attention to apparatus description, observation wording and the precision the mark scheme actually asks for, rather than treating them as revision left over from the theory paper.",
      ],
      bullets: [
        "Tutors question, challenge and respond to drafts; they never produce text or data for submission.",
        "Scope the Extended Essay research question in DP1 — it is the cheapest intervention available.",
        "Internal assessment method should be reviewed before data collection, not after the write-up.",
        "Alternative-to-practical papers need their own preparation, separate from theory revision.",
      ],
    },
    {
      heading: "What does IB or IGCSE tutoring cost in India, and how does matching work?",
      paragraphs: [
        "Rates depend on the programme, the subject, the level and the format, and we confirm them in writing before anything begins. HL sciences, Mathematics AA HL and Extended Essay supervision-style support sit at the higher end; IGCSE Grade 9 subject support and MYP work sit lower. Home tuition in Delhi NCR carries travel time and therefore prices differently from online delivery. We do not publish a rate card because a single number across all of that would be misleading.",
        "Matching starts with the details that actually determine fit: school, programme, subject, level, and for IGCSE the syllabus code. We then propose a named tutor who has taught that exact combination, and share their background before anything is scheduled. You are not handed a list of profiles to sift through — that is our job, and doing it properly is most of the value.",
        "A free trial lesson follows. Your child works through genuine material, not a sales conversation, and you get a short honest note afterwards on where the gaps are. Families should use the trial to check the things that matter: whether the explanations land, whether the tutor clearly knows the specific syllabus, and whether the slot really works on a school night.",
        "After that, a plan is agreed: topics, session rhythm, and how progress will be reported. Most families run one weekly hour per subject in term time, adding a second from January for DP2 and Grade 10 students. Payment is per session or per block, and there is no long contract to sign.",
        "If the fit is wrong, tell us. A tutor change is a normal request, not a complaint, and it is handled without awkwardness on either side. The alternative — a pairing that limps on because nobody wants to raise it — is the single most expensive thing that can happen in a tutoring arrangement.",
      ],
      bullets: [
        "Rates are quoted in writing before the first paid session, with the format and frequency stated.",
        "Send the IGCSE syllabus code from the course outline; it changes which tutor is the right match.",
        "The trial is free and exists so you decide on evidence rather than on a profile.",
        "Tutor changes are routine and carry no penalty or difficult conversation.",
      ],
    },
    {
      heading: "Why families across India choose an online tutor over a local one",
      paragraphs: [
        "In Mumbai, Delhi NCR and Bengaluru there is no shortage of tutors. What is short is tutors who have taught the exact syllabus your child is sitting — IB Physics HL under the current themes, or Edexcel 4MA1 Higher rather than Cambridge 0580 Extended. Online matching removes geography from the equation and lets us choose on syllabus fit, which is the variable that actually moves a grade.",
        "Outside the big metros the argument is stronger still. A family in Indore, Kochi, Bhubaneswar or Guwahati may have one or two international schools within reach and effectively no local specialist in a given HL subject. Online tutoring is not a compromise for those families; it is the only way to reach the right teacher at all.",
        "There is also the plain arithmetic of travel. An hour lost each way on a Bengaluru or Mumbai weeknight is an hour not spent on the subject, and it caps how often lessons can realistically happen. Online delivery converts that time back into study, which matters most in exactly the months when it is scarcest.",
        "Boarding-school families are a distinct case. Students at residential schools in Dehradun, Mussoorie, Panchgani and elsewhere can take an online session inside the school's own prep timetable in a way that no visiting tutor could ever fit, provided the school permits it — which is worth checking before booking rather than after.",
        "None of this means in-person teaching has no advantages. For younger children, and for Grade 9 and 10 students who drift on a screen, a tutor at the table is often better. That is exactly why we keep home tuition available in Gurugram and parts of Delhi NCR, and why hybrid arrangements — one session at home, one online — are common there.",
      ],
      bullets: [
        "Syllabus fit beats proximity: the right tutor for 0606 or Physics HL may not live in your city.",
        "Outside the metros, online is often the only route to a genuine subject specialist.",
        "Travel time saved is study time regained, which matters most in mock and exam season.",
        "Home tuition remains available in Gurugram and parts of Delhi NCR where face-to-face works better.",
      ],
    },
  ],

  process: [
    { title: "Tell us the school, board, subject and level", description: "Send the school name, the programme — IB PYP, MYP, DP or CP, or IGCSE — the subject, the level, and for IGCSE the syllabus code from the course outline. Add your city and the IST hours that work on a school night. A WhatsApp message or a short email is enough; there is no form to fill in first." },
    { title: "We propose a named tutor who has taught it", description: "Not a shortlist to sort through and not a general 'IB tutor' — a specific person who has taught that subject at that level on that board, with their qualifications and teaching history shared before anything is scheduled, and an explanation of why they are the right fit for this particular student." },
    { title: "Take a free trial lesson, at home or online", description: "In Gurugram and parts of Delhi NCR the trial can happen at your home; everywhere else in India it runs live over video with a shared whiteboard. Your child works through real material, and you receive a short honest note afterwards on where the gaps actually are." },
    { title: "Agree a plan built around your school's calendar", description: "Once the fit looks right we set out topics, session rhythm and reporting, planned around your school's internal assessment deadlines, mocks and the relevant exam series — the May session for DP, May/June or October/November for IGCSE. You choose frequency and pay per session or per block." },
    { title: "Review regularly, and change tutor if needed", description: "A short note follows each lesson and a fuller review comes every few weeks, ahead of mocks and major deadlines rather than after them. If the pairing is not working, say so and your child moves to a different tutor — it is a routine request, handled without any awkwardness." },
  ],

  whyPoints: [
    { title: "Tutors who live on your clock", description: "Our tutors are based in India, so an evening lesson in Chennai, Chandigarh or Kolkata is an ordinary working evening for them too. No lesson is squeezed into someone's early morning, and rescheduling takes one message rather than a time-zone calculation." },
    { title: "Matched on syllabus, not on the label", description: "Matching is done at subject, level and syllabus code — Mathematics AA HL, Physics SL, Cambridge 0580 Extended, Edexcel 4MA1 Higher — because those are the things that decide whether a tutor is genuinely useful in the last ten minutes of a paper." },
    { title: "The only country where we also come to you", description: "Because our tutors are here, face-to-face home tuition is real in Gurugram and parts of Delhi NCR, and hybrid arrangements are common. Everywhere else in India, online delivery gives access to specialists a local search would never surface." },
    { title: "We know the Indian board landscape properly", description: "CBSE, CISCE and state boards are not background noise to us. We handle CBSE-to-IGCSE and ICSE-to-DP transitions constantly, and we can tell a family honestly where the gap is and where it merely looks frightening." },
    { title: "Academic honesty is not negotiable", description: "Internal assessments, the Extended Essay, TOK and IGCSE coursework are coached on method, scope and criteria. Tutors never write or supply assessed work, because a malpractice finding at DP level costs the whole Diploma rather than a single grade." },
    { title: "Evidence before commitment", description: "Every tutor's subject depth and teaching history is checked before they join us, and the free trial exists so your child can judge the explaining style directly. Nothing is charged until you have seen a lesson and agreed a rate in writing." },
  ],

  faqs: [
    {
      question: "How do I find a good IB tutor in India?",
      answer: "Start with specifics rather than a general search. Tell us the school, the programme, the subject, the level, and for IGCSE the syllabus code on the course outline, plus where the difficulty currently sits — a topic, a paper, an internal assessment. We then propose a named tutor who has taught that exact combination and share their background before anything is booked. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp to start.",
    },
    {
      question: "Do you offer home tuition in India or only online lessons?",
      answer: "Both, and India is the only country where that is true, because our tutors are based here. Face-to-face home tuition is available in Gurugram and the parts of Delhi, Noida and Faridabad a tutor can reliably reach on a school night. Everywhere else in India — Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad and every tier-two city — lessons run live over video with a shared whiteboard and screen-shared papers.",
    },
    {
      question: "How much does IB or IGCSE tutoring cost in India?",
      answer: "It depends on the programme, subject, level, format and how many weekly hours you book. HL sciences and Mathematics AA HL sit at the higher end; IGCSE Grade 9 support and MYP work sit lower, and home tuition in Delhi NCR prices differently from online delivery because of travel time. We confirm the rate in writing before anything starts. Email ibgram24@gmail.com with your child's grade, board and subjects for a current quote.",
    },
    {
      question: "Is the IB Diploma recognised by Indian universities?",
      answer: "Yes. The Association of Indian Universities issues equivalence certificates for the IB Diploma, and Indian universities admit IB students routinely. The requirements cover subject spread, the inclusion of English, a minimum point total and original documentation, and individual universities add their own eligibility conditions. Because the criteria are revised periodically, confirm them with AIU and with your target university at the time you apply rather than relying on older guidance.",
    },
    {
      question: "Can an IB student sit CUET, JEE or NEET?",
      answer: "Yes, subject to the eligibility rules each examination sets around recognised Class 12 qualifications and subject combinations, which usually means having equivalence documentation in order in good time. The practical issue is workload: CUET is referenced to NCERT content and JEE and NEET assume the CBSE Class 11 and 12 syllabus, so an IB student preparing for them is effectively running a second syllabus. Plan that from Grade 11, not from DP2.",
    },
    {
      question: "My child is switching from CBSE to IGCSE. How big is the jump?",
      answer: "Smaller than most families fear, and in a different place than they expect. Content is rarely the problem — a CBSE student usually arrives with more than enough. The adjustment is to question style: command words, structured answers, and the expectation that a response is argued rather than stated. A focused block of eight to twelve weeks around the switch, aimed at exam technique and mark-scheme reading, does more than a year of general tutoring afterwards.",
    },
    {
      question: "Do you tutor IB MYP and PYP, or only the Diploma?",
      answer: "All four IB programmes. PYP support stays deliberately light and focuses on reading fluency, number sense and the short written pieces a unit of inquiry asks for. MYP work targets criteria A to D directly, with investigation design for the Sciences and the Personal Project process journal kept up through the year rather than rebuilt at the end. DP is the largest part of what we do, and CP support covers both the DP subjects and the Reflective Project.",
    },
    {
      question: "Which IGCSE boards and syllabus codes do you cover?",
      answer: "Cambridge International and Pearson Edexcel, across Mathematics, Additional Mathematics, the three sciences, Combined and Coordinated Sciences, Economics, Business Studies, Accounting, Computer Science, ICT, English First and Second Language, Geography, History, Literature and Hindi as a Second Language. Send the syllabus code from your child's course outline — 0580 and 4MA1 cover similar content but reward noticeably different habits in the exam.",
    },
    {
      question: "Can a tutor help with the Extended Essay or an internal assessment?",
      answer: "Within clear limits, yes, and this is some of the most valuable work we do. A tutor can help narrow a research question to something answerable, explain what each criterion genuinely rewards, pressure-test a method before data collection wastes weeks, and respond to a draft your child has written. A tutor will not write, rewrite or supply text or data for submission — that would breach the academic honesty rules and can cost the entire Diploma.",
    },
    {
      question: "When should we start tutoring for the May exam session?",
      answer: "Earlier than most families do. Because Indian IB schools run April to March, DP2 mocks land in January and February and the May session follows almost immediately, leaving a short runway. Waiting for mock results before arranging support means starting with roughly ten usable weeks left. Beginning in DP1, or at the latest by the winter break of DP2, gives a tutor room to fix causes rather than symptoms.",
    },
    {
      question: "Are your tutors available on weekends and after school hours?",
      answer: "Yes, and those are the most requested slots. Most families book weekday sessions from 4pm once school transport is done, or weekend mornings. Because everything runs on India Standard Time and the country keeps a single clock with no daylight saving, scheduling is simple: an agreed slot stays fixed through the term. Evening slots closest to mocks and the May session fill first, so book those well ahead.",
    },
    {
      question: "How are IB Gram tutors verified before they teach my child?",
      answer: "Each tutor is interviewed on subject depth and on the specific programme and board they would teach, with qualifications and prior teaching history checked beforehand. What we are testing for is current working knowledge of the syllabus and its assessment criteria, not general familiarity with a subject. If pace, communication style or level turns out wrong once lessons begin, tell us and a different tutor takes over.",
    },
    {
      question: "Is there a free trial lesson before we commit?",
      answer: "Yes. The proposed tutor and your child work through genuine material together before any block of lessons is agreed, at home in Gurugram and Delhi NCR or online elsewhere in India. Use it to check the things that matter: whether the explanations land, whether the tutor clearly knows your child's specific syllabus, and whether the slot really works on a school night. A different tutor is easy to arrange if the fit is wrong.",
    },
    {
      question: "Do you cover Hindi, French or Spanish for IB language requirements?",
      answer: "Yes. Hindi B and Hindi A: Literature are both commonly taken in Indian IB schools and we cover both, including set texts, the individual oral and the written tasks. French B and Spanish B are the most widely chosen foreign languages here, and sessions build text-type conventions for Paper 1, receptive skills for Paper 2, and the unscripted conversation that decides the individual oral.",
    },
    {
      question: "Can one tutor teach both IB and IGCSE subjects for my child?",
      answer: "Often, yes — many of our tutors teach a subject across both, which suits families with children in different grades or a student carrying IGCSE in Grade 10 and moving into DP. We still match on the specific combination rather than assuming transferability, because the assessment styles differ enough that teaching one well does not automatically mean teaching the other well.",
    },
    {
      question: "Is IB Gram affiliated with the IB, Cambridge or any Indian school?",
      answer: "No. We are an independent tutoring service with no affiliation to, endorsement from or authorisation by the International Baccalaureate Organization, Cambridge International, Pearson Edexcel, CBSE, CISCE, the Association of Indian Universities, or any school or university named on this page. Institutions are mentioned only to describe the landscape Indian families are choosing between.",
    },
    {
      question: "How do we get started?",
      answer: "Message ibgram24@gmail.com or +91 7439 368 115 on WhatsApp with your child's school, board and grade, the subjects and levels involved, your city, your available IST hours, and what you actually want to change — a grade, exam confidence, an Extended Essay that has stalled. We propose a named tutor, share their background, and set up the free trial. Nothing is charged until you have seen that lesson and agreed a rate in writing.",
    },
  ],

  internalLinks: [
    { label: "IB tutors by city", href: "/ib-tutors/", description: "A city-by-city index of our tutoring hubs across India and beyond, showing how matching works in each location." },
    { label: "IGCSE tuition hub", href: "/igcse/", description: "Cambridge and Pearson Edexcel IGCSE support subject by subject, with syllabus notes and past-paper guidance." },
    { label: "IB Diploma Programme", href: "/programmes/dp/", description: "A closer look at DP structure, the HL and SL split, the core, and where students most often need help." },
    { label: "IB Middle Years Programme", href: "/programmes/myp/", description: "MYP criteria A to D, investigation design and Personal Project coaching for Grade 6 to 10 students." },
    { label: "IB Mathematics", href: "/courses/ib/mathematics/", description: "A full walkthrough of Mathematics AA and AI at HL and SL, including Paper 3 and the exploration." },
    { label: "Verified tutor profiles", href: "/tutors/", description: "Check qualifications, subject coverage, teaching format and current availability before you book a trial." },
    { label: "Test preparation", href: "/admissions/test-prep/", description: "Focused exam-season coaching that runs alongside coursework and internal assessment deadlines." },
    { label: "Talk to the team", href: "/contact-us/", description: "Get scheduling, subject or tutor-fit questions answered directly before committing to anything." },
    { label: "IB and IGCSE guides", href: "/blog/", description: "Syllabus explainers, revision planning and subject guides written for IB and IGCSE students." },
    { label: "IB tutors in the USA", href: "/usa/", description: "How the same matching approach works for families based in the United States." },
    { label: "IB tutors in Nepal", href: "/nepal/", description: "Support for IB, Cambridge A Level and NEB students, on a clock fifteen minutes ahead of India." },
    { label: "IB tutors in Sri Lanka", href: "/sri-lanka/", description: "Tutoring for IB, Cambridge and Edexcel students in Colombo and beyond, on the same clock as India." },
  ],

  closingHeading: "Start with a free trial lesson, on your own clock",
  closingBody: "Tell us the school, the board, the subject and the level, and where you are in India. Back comes a named tutor, their teaching background, and trial slots already set to India Standard Time — free, with nothing to continue if the fit is not right. In Gurugram and parts of Delhi NCR that trial can happen at your home; everywhere else it runs live online. Email ibgram24@gmail.com or message +91 7439 368 115 on WhatsApp with your child's grade, school and subjects.",
};
