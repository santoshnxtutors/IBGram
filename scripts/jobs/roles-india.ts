import type { RoleRow } from "./roles-types";

/**
 * The thirty vacancies outside Gurgaon: eight home-tuition city roles, seven hybrid city
 * roles and fifteen nationwide online roles.
 *
 * Same rule as roles-gurgaon.ts - every row writes its own copy. Nothing here is
 * templated except the parts that are identical in fact across all fifty listings.
 */
export const INDIA_ROLES: RoleRow[] = [
  // ---------------------------------------------------------------- home, by city
  {
    slug: "ib-dp-maths-aa-hl-home-tutor-south-delhi",
    title: "IB DP Mathematics AA HL home tutor — South Delhi",
    level: "IB DP Mathematics AA (HL and SL)",
    mode: "home",
    where: "South Delhi",
    areas:
      "Vasant Vihar, Shanti Niketan, Anand Niketan, Westend, Hauz Khas, Panchsheel Park, Greater Kailash and Defence Colony",
    summary:
      "Higher Level Analysis and Approaches taught at home across South Delhi, for Diploma students at the international schools clustered between Vasant Vihar and Chanakyapuri.",
    overview:
      "South Delhi carries the oldest IB cohort in the country, and the students who book this role are usually aiming at engineering or economics courses abroad where a 6 or 7 in AA HL is the entry condition. The teaching is accordingly uncompromising: no skipping Paper 3, no leaving the IA until DP2.",
    notes: [
      "Expect students across several schools in the diplomatic belt, each with different mock calendars, so the teaching plan is built per student rather than per cohort.",
      "The hardest content for these students is usually the HL-only calculus, complex numbers and proof, sitting on top of algebra that was never fully secure before DP1.",
      "Traffic between Vasant Vihar and Greater Kailash at 5pm is the real constraint on this role. Tutors who take it should be honest about how many sessions an evening they can actually reach.",
    ],
    skills: [
      "The full AA HL course including Paper 3 and at least one option topic taught to exam standard.",
      "Mathematics IA supervision against the current criteria.",
      "A realistic plan for South Delhi travel, because three homes in one evening is rarely possible.",
    ],
    duties: [
      "Set an algebra diagnostic in the first session and share the result with the family in writing.",
      "Work to the student's own school's mock dates rather than a generic calendar.",
      "Keep the IA moving to a written timetable from the middle of DP1.",
    ],
    nice: ["Experience preparing students for university admissions tests alongside the Diploma."],
  },
  {
    slug: "igcse-maths-home-tutor-noida",
    title: "IGCSE Mathematics home tutor — Noida",
    level: "IGCSE Mathematics 0580 (Extended) and Additional Mathematics 0606",
    mode: "home",
    where: "Noida, Uttar Pradesh",
    areas: "Sectors 44 to 128, Jaypee Greens, Noida Expressway sectors and the Greater Noida West border",
    summary:
      "Extended-tier Cambridge Mathematics at home across Noida, including Additional Mathematics for the Year 11 students heading into the Diploma.",
    overview:
      "Noida's international schools sit along the Expressway, and most of the students on this route travel a long way to reach them. Sessions here are therefore later and longer, and the tutor who can hold a 7pm slot reliably is worth far more to these families than one who is cheaper.",
    notes: [
      "The core of the work is Extended 0580: algebra, trigonometry, functions and the problem-solving questions at the back of Paper 4 that students run out of time for.",
      "Additional Mathematics is a frequent add-on for students who want AA HL later, and it needs to run ahead of school rather than alongside it.",
      "Several schools here run the October/November series rather than May/June, so the revision calendar has to be set per student rather than assumed.",
    ],
    skills: [
      "0580 Extended to full paper standard, with 0606 where the student takes it.",
      "Timing technique for Paper 4, which is where most of the lost marks actually are.",
      "Reliable evening access across the Noida Expressway sectors.",
    ],
    duties: [
      "Confirm which exam series the student is sitting before planning any revision.",
      "Run timed Paper 2 and Paper 4 practice from the second month onwards.",
      "Teach the Additional Mathematics content ahead of the school timetable where it is taken.",
    ],
    nice: ["Experience with both the May/June and October/November Cambridge series."],
  },
  {
    slug: "ib-dp-chemistry-hl-home-tutor-mumbai",
    title: "IB DP Chemistry HL home tutor — Mumbai",
    level: "IB DP Chemistry (HL and SL)",
    mode: "home",
    where: "Mumbai, Maharashtra",
    areas: "Bandra, Khar, Juhu, Santacruz, Powai, Worli and the Lower Parel to Prabhadevi stretch",
    summary:
      "Higher Level IB Chemistry taught at home across the western suburbs and south Mumbai, with organic mechanisms and IA supervision at the centre of the work.",
    overview:
      "Mumbai has a dense IB cohort and a dense traffic problem, so this role is built around a tutor choosing one corridor and staying inside it. A tutor who covers Bandra to Juhu well is more useful here than one who promises the whole city and arrives late.",
    notes: [
      "The teaching weight sits in organic chemistry, energetics and equilibrium, plus the Paper 1 calculation speed students underestimate.",
      "IA supervision is a large part of the engagement, and the strongest grades come from investigations designed around equipment the student can realistically access.",
      "Pick your corridor honestly: Bandra to Juhu, Powai, or south Mumbai. Crossing between them in one evening does not work.",
    ],
    skills: [
      "Full HL Chemistry including the organic mechanisms and at least one option.",
      "Chemistry IA supervision against the current criteria, especially Evaluation.",
      "A single chosen Mumbai corridor you can cover reliably at peak hour.",
    ],
    duties: [
      "Agree a travel corridor at the start and decline matches outside it.",
      "Design IA support around apparatus the student can actually get hold of.",
      "Drill Paper 1 calculation under time, with the data booklet open.",
    ],
    nice: ["Experience with the IB Chemistry Extended Essay."],
  },
  {
    slug: "ib-myp-maths-science-home-tutor-bangalore",
    title: "IB MYP Maths and Science home tutor — Bangalore",
    level: "IB MYP Years 3 to 5 (Grades 8 to 10)",
    mode: "home",
    where: "Bangalore, Karnataka",
    areas: "Whitefield, Sarjapur Road, Indiranagar, Koramangala, HSR Layout and Hebbal",
    summary:
      "MYP mathematics and integrated science at home across Bangalore's east and south-east, where most of the city's IB continuum schools sit.",
    overview:
      "Bangalore's MYP families are often first-generation IB parents who moved from CBSE and cannot read the reports. They want someone who teaches the subject properly and also explains why a 6 out of 8 on Criterion C is not 75 percent. Both parts matter.",
    notes: [
      "Whitefield and Sarjapur Road hold the largest clusters, and a tutor who anchors in one of them can usually fill their week inside a 6km radius.",
      "The mathematics work concentrates on Criterion C and D tasks, where students must apply mathematics in context and justify in writing rather than compute.",
      "Integrated science means biology, chemistry and physics arrive in whatever order the school's unit plan dictates, so breadth matters more than specialism here.",
    ],
    skills: [
      "MYP criteria A to D in Mathematics and Sciences, with the command terms.",
      "Confidence teaching all three sciences at Years 3 to 5 level.",
      "The patience to re-explain criterion-based reporting to parents as often as it takes.",
    ],
    duties: [
      "Anchor in one cluster and decline cross-city matches that cannot be reached on time.",
      "Teach to the school's live unit plan and statement of inquiry.",
      "Explain the criterion scores to the family in writing at each review point.",
    ],
    nice: ["Experience with MYP eAssessment or with the MYP to IGCSE transition."],
  },
  {
    slug: "ib-dp-physics-hl-home-tutor-hyderabad",
    title: "IB DP Physics HL home tutor — Hyderabad",
    level: "IB DP Physics (HL and SL)",
    mode: "home",
    where: "Hyderabad, Telangana",
    areas: "Gachibowli, Jubilee Hills, Banjara Hills, Kondapur, Madhapur and the Financial District",
    summary:
      "IB Physics taught at home across west Hyderabad, for Diploma students at the international schools around Gachibowli and the Financial District.",
    overview:
      "Hyderabad's IB cohort is concentrated and growing, and Physics HL is consistently the subject where the local supply of tutors runs out. Most engagements here start because the family could not find anyone who had actually taught the IB course rather than a national-curriculum equivalent.",
    notes: [
      "The IB Physics course is not the Indian Class 11 and 12 syllabus with different numbering. Tutors who teach it as such are the reason these students need rescuing.",
      "Mechanics and fields take most of the teaching time, followed by the uncertainty treatment that Paper 3 and the IA both depend on.",
      "Gachibowli to Jubilee Hills is manageable in an evening. Anything crossing to the old city is not, and should be declined rather than promised.",
    ],
    skills: [
      "The IB Physics HL course specifically, including one option and Paper 3 technique.",
      "Uncertainty, error propagation and graph linearisation taught to IB conventions.",
      "Honest coverage of a defined west Hyderabad radius.",
    ],
    duties: [
      "Teach the IB course as the IB assesses it, not as a relabelled national syllabus.",
      "Support IA design and data treatment to the five criteria.",
      "Run timed Paper 1 and Paper 2 practice through DP2.",
    ],
    nice: ["Experience with both IB Physics and A Level Physics, for students switching systems."],
  },
  {
    slug: "igcse-physics-maths-home-tutor-pune",
    title: "IGCSE Physics and Maths home tutor — Pune",
    level: "IGCSE Physics 0625 and Mathematics 0580 (Extended)",
    mode: "home",
    where: "Pune, Maharashtra",
    areas: "Koregaon Park, Kalyani Nagar, Kharadi, Balewadi, Baner, Aundh and Viman Nagar",
    summary:
      "Cambridge Physics and Mathematics at Extended tier, taught at home across Pune's eastern and western international school belts.",
    overview:
      "Pune splits into two tuition markets that barely touch: the Koregaon Park and Kharadi side, and the Baner and Balewadi side. Tutors do well here by owning one side completely, and badly by trying to serve both from the middle.",
    notes: [
      "Physics and mathematics are frequently taken together by the same student, and teaching them in one session block makes the mathematics in physics land faster.",
      "Extended tier is assumed for both, including Paper 6 alternative to practical in physics.",
      "Several Pune schools sit the October/November series, so confirm the series before any revision plan is written.",
    ],
    skills: [
      "0625 and 0580 at Extended tier, including Paper 6 for physics.",
      "The ability to teach the mathematics a physics student needs, inside the physics session.",
      "A defined side of the city you can reach reliably at 6pm.",
    ],
    duties: [
      "Confirm the exam series in the first session and plan revision backwards from it.",
      "Use the physics content to reinforce the mathematics rather than teaching them as separate worlds.",
      "Practise alternative-to-practical questions from the start of the engagement.",
    ],
    nice: ["Experience preparing students for IGCSE to IB DP Group 4 transition."],
  },
  {
    slug: "ib-dp-biology-hl-home-tutor-chennai",
    title: "IB DP Biology HL home tutor — Chennai",
    level: "IB DP Biology (HL and SL)",
    mode: "home",
    where: "Chennai, Tamil Nadu",
    areas: "Adyar, Besant Nagar, Nungambakkam, Alwarpet, Thiruvanmiyur and the OMR up to Sholinganallur",
    summary:
      "Higher Level IB Biology taught at home across central Chennai and the OMR corridor, including the statistics work the IA depends on.",
    overview:
      "Chennai families often come to IB Biology from a strong NEET-style background, where recall is everything. The Diploma marks interpretation and experimental design instead, and the first job is usually convincing a very hard-working student that their revision method is the thing holding the grade down.",
    notes: [
      "Content volume has to be handled with recall structures rather than repeated re-reading, which is the habit most of these students bring with them.",
      "The IA needs statistics the student can justify, and a sampling design that works in Chennai's climate and with school lab access.",
      "The OMR corridor and central Chennai are separate travel problems. Pick one and keep the slots.",
    ],
    skills: [
      "Full HL Biology plus one option, taught to the IB assessment model rather than a national one.",
      "Statistics for the IA: standard deviation, t-test, chi-squared, and when each applies.",
      "Data-based question technique for Paper 2.",
    ],
    duties: [
      "Replace re-reading with active recall structures in the first month.",
      "Approve the IA sampling design before data collection starts.",
      "Set unfamiliar data-based questions regularly through DP2.",
    ],
    nice: ["Experience with students moving between NEET preparation and the IB Diploma."],
  },
  {
    slug: "ib-igcse-maths-science-home-tutor-kolkata",
    title: "IB and IGCSE Maths and Science home tutor — Kolkata",
    level: "IGCSE Years 9 to 11 and IB MYP Years 4 to 5",
    mode: "home",
    where: "Kolkata, West Bengal",
    areas: "Ballygunge, Alipore, New Town, Salt Lake, Rajarhat and the EM Bypass corridor",
    summary:
      "Mathematics and science at home across Kolkata for IGCSE and senior MYP students, covering both boards in a city where neither has many specialist tutors.",
    overview:
      "Kolkata has fewer international-board tutors than its cohort needs, so a single engagement here often spans two boards and three subjects. The role suits a generalist with genuine depth at Year 9 to 11 level rather than a single-subject specialist.",
    notes: [
      "A typical week might be IGCSE Extended mathematics for one student and MYP integrated science for another, so planning has to stay flexible.",
      "The Ballygunge and Alipore cluster and the New Town and Rajarhat cluster are 45 minutes apart in traffic, which realistically means choosing one.",
      "Several families here are also deciding whether to move the child to IGCSE for Years 10 and 11, and want an honest opinion rather than a sales pitch.",
    ],
    skills: [
      "IGCSE Extended mathematics and at least two sciences, plus MYP criteria A to D.",
      "The breadth to carry different boards for different students in the same week.",
      "A chosen Kolkata cluster you can reach on time.",
    ],
    duties: [
      "Keep separate, written plans per student rather than one shared scheme of work.",
      "Give families a straight answer on the MYP to IGCSE question when they ask.",
      "Hold evening slots reliably across the chosen cluster.",
    ],
    nice: ["Experience with both Cambridge and IB assessment in the same school year."],
  },

  // ---------------------------------------------------------------- hybrid, by city
  {
    slug: "ib-dp-economics-tutor-ahmedabad",
    title: "IB DP Economics tutor — Ahmedabad",
    level: "IB DP Economics (HL and SL)",
    mode: "hybrid",
    where: "Ahmedabad, Gujarat",
    areas: "Satellite, Bodakdev, Thaltej, Prahlad Nagar, SG Highway and the Shilaj to Sanand stretch",
    summary:
      "IB Economics in Ahmedabad, taught in person or online: diagram technique, HL Paper 3 and the three Internal Assessment commentaries.",
    overview:
      "Ahmedabad's IB cohort is small enough that few tutors specialise in a single Group 3 subject, which is precisely why these students struggle with Economics. The role is built as hybrid so one specialist can cover families on both sides of the SG Highway without spending the evening in a car.",
    notes: [
      "Most families start in person and move to online for revision and commentary feedback, which is the pattern this role is designed around.",
      "The three commentaries need scheduling across DP1 and DP2 rather than being written in one panicked month.",
      "HL students need Paper 3 taught deliberately, since it is rarely given enough timetable in a small cohort.",
    ],
    skills: [
      "The full Economics course across all four units, HL quantitative content included.",
      "Diagram accuracy to examiner standard.",
      "IA commentary marking against the current criteria and key concepts.",
    ],
    duties: [
      "Agree in advance which sessions are in person and which are online, and keep to it.",
      "Set the commentary calendar in the first month of the engagement.",
      "Teach evaluation as a distinct skill, separate from explanation.",
    ],
    nice: ["Economics examining or moderation experience."],
  },
  {
    slug: "igcse-english-literature-tutor-jaipur",
    title: "IGCSE English and Literature tutor — Jaipur",
    level: "IGCSE English First Language 0500 and Literature 0475",
    mode: "hybrid",
    where: "Jaipur, Rajasthan",
    areas: "C-Scheme, Malviya Nagar, Mansarovar, Vaishali Nagar, Jagatpura and the Tonk Road corridor",
    summary:
      "Cambridge English and Literature in Jaipur, taught at home or online, with the directed writing and summary technique that lifts 0500 grades fastest.",
    overview:
      "Jaipur families rarely find a tutor who has marked 0500 to Cambridge standards, and the usual substitute is a general English teacher who corrects grammar. Grammar is not where these marks are. Audience, form and purpose are, and they are trainable.",
    notes: [
      "The summary question is the quickest win on the paper and should be drilled until the technique is automatic.",
      "Literature 0475 texts are set by the school, so teaching works from their editions and essay titles rather than a standard list.",
      "Hybrid works well here because essay feedback is often better written than spoken, and students reread written comments.",
    ],
    skills: [
      "0500 reading and writing papers to Cambridge standard, including summary technique.",
      "Literature essay structure and close textual analysis for 0475.",
      "Detailed written marking that a student can act on alone.",
    ],
    duties: [
      "Return marked written work with specific, criterion-referenced comments.",
      "Drill the summary question weekly until it is reliable.",
      "Keep a running list of each student's recurring errors and revisit it monthly.",
    ],
    nice: ["Experience with the 0500 to IB English A transition."],
  },
  {
    slug: "ib-dp-maths-ai-tutor-chandigarh-mohali",
    title: "IB DP Mathematics AI tutor — Chandigarh and Mohali",
    level: "IB DP Mathematics AI (HL and SL)",
    mode: "hybrid",
    where: "Chandigarh and Mohali",
    areas: "Chandigarh Sectors 2 to 11 and 33 to 44, Panchkula and Mohali Phases 1 to 11 including Sector 82",
    summary:
      "Applications and Interpretation across the Chandigarh tricity, taught in person or online, with statistics and the modelling IA at the centre.",
    overview:
      "The tricity has a handful of IB schools and almost no AI specialists, so students end up taught by AA tutors who treat the statistics as an afterthought. That is backwards: statistics is the largest part of this course and the largest source of lost marks.",
    notes: [
      "Hypothesis testing, regression and distributions carry the course, and all three depend on calculator fluency that has to be taught explicitly.",
      "The modelling IA needs real data the student collects or sources honestly, with mathematics genuinely applied rather than decorative.",
      "Chandigarh to Mohali is an easy drive by Indian city standards, so in-person sessions across the tricity are realistic here in a way they are not in Mumbai or Bangalore.",
    ],
    skills: [
      "The full AI course at HL and SL, including matrices, graph theory and complex numbers.",
      "GDC fluency on the model the student's school uses.",
      "Experience supervising modelling IAs built on real datasets.",
    ],
    duties: [
      "Teach the calculator as examined content from the first month.",
      "Make statistics the spine of the plan rather than an end-of-course topic.",
      "Hold the IA to genuine mathematical use of real data.",
    ],
    nice: ["Experience advising on AA versus AI choice before DP1 begins."],
  },
  {
    slug: "ib-myp-tutor-indore",
    title: "IB MYP tutor — Indore",
    level: "IB MYP Years 1 to 5",
    mode: "hybrid",
    where: "Indore, Madhya Pradesh",
    areas: "Vijay Nagar, AB Road, Scheme 54 and 78, Bicholi Mardana and the Rau to Bypass stretch",
    summary:
      "Middle Years Programme teaching across Indore, in person or online, covering mathematics, sciences and the criterion-based assessment parents here rarely have explained to them.",
    overview:
      "Indore's international school cohort is young and growing, and most parents have come from a state or CBSE background. The commonest problem is not the content but the reporting: nobody has told them what the four criteria mean, so they cannot tell whether their child is doing well.",
    notes: [
      "Students span Years 1 to 5, so the role needs genuine range rather than a single year group's depth.",
      "Criterion-based tasks, including written reflection, are where marks are lost, not in computation or recall.",
      "Hybrid matters here because the IB schools are spread along AB Road and the Bypass, with long gaps between them.",
    ],
    skills: [
      "MYP criteria A to D across Mathematics and Sciences, with the command terms.",
      "The range to teach Years 1 to 5, adjusting session length and method by age.",
      "The ability to make criterion reporting understandable to a first-generation IB parent.",
    ],
    duties: [
      "Match session length to the student's year group rather than using one default.",
      "Teach to the school's live unit plan and statement of inquiry.",
      "Explain the criterion scores to the family in writing at each review point.",
    ],
    nice: ["Experience supporting the MYP Personal Project in Year 5."],
  },
  {
    slug: "igcse-business-studies-tutor-lucknow",
    title: "IGCSE Business Studies tutor — Lucknow",
    level: "IGCSE Business Studies 0450 and Economics 0455",
    mode: "hybrid",
    where: "Lucknow, Uttar Pradesh",
    areas: "Gomti Nagar, Hazratganj, Vibhuti Khand, Aliganj and the Sultanpur Road corridor",
    summary:
      "Cambridge Business Studies and Economics in Lucknow, taught at home or online, built around the case-study answer structure these papers are marked on.",
    overview:
      "Business Studies is treated as a reading subject by students who then write definitions in an applied paper. The marks live in applying theory to the specific business in the case study and reaching a justified recommendation, and that is a structure that has to be taught rather than absorbed.",
    notes: [
      "Paper 2 is an unseen case study, so the preparation is repeated unseen practice rather than content revision.",
      "Economics 0455 is often taken alongside, and students blur the two answer styles unless the distinction is taught explicitly.",
      "Lucknow's international schools are concentrated in Gomti Nagar and along Sultanpur Road, which makes a hybrid week realistic.",
    ],
    skills: [
      "0450 and 0455 to full paper standard, including the Paper 2 case study.",
      "Teaching applied and evaluative answer structures, not content alone.",
      "Command of Cambridge command terms and what each is marked for.",
    ],
    duties: [
      "Work unseen case studies under timed conditions from the second month.",
      "Teach the four-part answer structure until students use it without prompting.",
      "Keep the Business and Economics answer styles distinct.",
    ],
    nice: ["Commercial or management experience you can draw real examples from."],
  },
  {
    slug: "ib-dp-chemistry-tutor-kochi",
    title: "IB DP Chemistry tutor — Kochi",
    level: "IB DP Chemistry (HL and SL)",
    mode: "hybrid",
    where: "Kochi, Kerala",
    areas: "Kakkanad, Edappally, Panampilly Nagar, Kadavanthra, Vyttila and the Aluva corridor",
    summary:
      "IB Chemistry in Kochi, in person or online, with the organic mechanisms and IA supervision Diploma students here most often lack.",
    overview:
      "Kochi has a small but serious IB cohort, and almost no tutors who have taught the Diploma chemistry course specifically. Students arrive having been taught the Kerala or CBSE syllabus with IB labels attached, which does not survive contact with Paper 2.",
    notes: [
      "Organic mechanisms and energetics carry the most teaching time, followed by the calculation speed Paper 1 demands.",
      "IA supervision should start early and be designed around apparatus the school will actually allow the student to use.",
      "Hybrid suits the local geography, since Kakkanad and Panampilly Nagar are a long crossing at peak hour.",
    ],
    skills: [
      "Full HL Chemistry taught to the IB assessment model rather than a national syllabus.",
      "Chemistry IA supervision to the criteria, especially Evaluation.",
      "Confident Paper 1 calculation with the data booklet.",
    ],
    duties: [
      "Teach to the IB course and its command terms, not a relabelled national syllabus.",
      "Begin IA planning in DP1 and keep it to a written timeline.",
      "Drill mechanism reasoning rather than reaction memorisation.",
    ],
    nice: ["Experience teaching students moving from CBSE or state boards into the Diploma."],
  },
  {
    slug: "ib-igcse-maths-tutor-coimbatore",
    title: "IB and IGCSE Maths tutor — Coimbatore",
    level: "IGCSE Mathematics 0580 and IB MYP Years 4 to 5",
    mode: "hybrid",
    where: "Coimbatore, Tamil Nadu",
    areas: "RS Puram, Saibaba Colony, Peelamedu, Vadavalli, Race Course and the Avinashi Road corridor",
    summary:
      "Mathematics across both international boards in Coimbatore, taught at home or online, for students in Years 9 to 11 and senior MYP.",
    overview:
      "Coimbatore's international schools are scattered and its specialist tutor supply is thin, so one engagement commonly covers both boards. Hybrid keeps that workable: in-person where the student is close, online where they are not.",
    notes: [
      "IGCSE Extended work focuses on algebra, functions and the longer Paper 4 problems where timing fails.",
      "MYP work is criterion-based, with Criterion C and D carrying most of the lost marks.",
      "The two boards assess so differently that a student taking both needs them kept visibly separate.",
    ],
    skills: [
      "0580 Extended to full paper standard plus MYP criteria A to D in Mathematics.",
      "The flexibility to switch assessment models between students in the same week.",
      "Clear online teaching for families outside your travel radius.",
    ],
    duties: [
      "Keep board-specific plans and never merge the two assessment models.",
      "Use timed Paper 4 practice to fix the real problem, which is pacing.",
      "Agree per student at the start whether sessions are in person, online or mixed.",
    ],
    nice: ["Experience with the MYP to IGCSE transition in Year 10."],
  },

  // ---------------------------------------------------------------- online, nationwide
  {
    slug: "ib-dp-physics-online-tutor-india",
    title: "IB DP Physics online tutor — India (remote)",
    level: "IB DP Physics (HL and SL)",
    mode: "online",
    where: "India",
    summary:
      "Teach IB Physics online to Diploma students anywhere in India: mechanics and fields, the HL extensions, Paper 3 data analysis and IA supervision.",
    overview:
      "Online is where Physics teaching is strongest, because the work is diagram-heavy and benefits from a shared whiteboard the student can keep. This role suits a tutor with the full HL course and the discipline to teach uncertainty treatment properly rather than skipping it.",
    notes: [
      "The teaching weight is mechanics, fields and the HL extensions, with error propagation and graph linearisation running throughout.",
      "Paper 3 is a data-analysis paper and needs its own practice, not an afterthought in the final month.",
      "Students come from every Indian city and several time zones abroad, so you set the hours you will teach and we match inside them.",
    ],
    skills: [
      "Full HL Physics plus one option taught to exam standard.",
      "Uncertainty, error propagation and graph linearisation to IB conventions.",
      "A writing tablet or equivalent, because physics cannot be taught by talking alone.",
    ],
    duties: [
      "Produce written worked solutions the student keeps after each session.",
      "Set Paper 3 data-analysis practice from DP1 onwards.",
      "Support IA design and evaluation against the five criteria.",
    ],
    nice: ["Experience teaching the same student group across multiple time zones."],
  },
  {
    slug: "ib-dp-maths-aa-sl-online-tutor-india",
    title: "IB DP Mathematics AA SL online tutor — India (remote)",
    level: "IB DP Mathematics AA (SL)",
    mode: "online",
    where: "India",
    summary:
      "Standard Level Analysis and Approaches taught online across India, for students who need the course finished properly rather than survived.",
    overview:
      "AA SL is where a large share of Diploma students sit, and it is underserved because tutors prefer the HL work. The students here are often strong elsewhere and have decided they are bad at mathematics, which is almost never true and is usually an algebra gap from three years ago.",
    notes: [
      "Calculus and functions carry most of the course, sitting on algebra that frequently needs rebuilding before anything else can land.",
      "The IA is the most recoverable part of the grade and the most commonly neglected, because SL students assume it matters less than it does.",
      "Online suits this course well: worked solutions on a shared whiteboard, saved and sent after the session, are more useful than notes a student copies badly.",
    ],
    skills: [
      "The full AA SL course taught to exam standard, including Paper 1 non-calculator technique.",
      "Mathematics IA supervision to the current criteria.",
      "The patience to rebuild algebra with a student who has decided they cannot do mathematics.",
    ],
    duties: [
      "Diagnose and repair the underlying algebra before teaching new content.",
      "Send worked solutions after every session.",
      "Keep the IA on a written timeline from the middle of DP1.",
    ],
    nice: ["Experience moving students between AA SL and AI SL when the fit is wrong."],
  },
  {
    slug: "igcse-chemistry-0620-online-tutor-india",
    title: "IGCSE Chemistry 0620 online tutor — India (remote)",
    level: "IGCSE Chemistry 0620 (Extended)",
    mode: "online",
    where: "India",
    summary:
      "Extended-tier Cambridge Chemistry taught online to Year 10 and 11 students across India, including the alternative-to-practical paper.",
    overview:
      "0620 is a calculation paper wearing a content paper's clothes. Moles, stoichiometry, rates and electrolysis decide the grade, and the qualitative analysis tables that students try to memorise are better understood than learned. Online teaching with a shared whiteboard handles all of it well.",
    notes: [
      "Paper 6, the alternative to practical, is marked tightly and is rarely practised enough at school.",
      "Mole calculations need drilling to automaticity rather than being taught once and revisited before the mock.",
      "Students sit both the May/June and October/November series, so the revision calendar is set per student.",
    ],
    skills: [
      "0620 Extended across all papers, including Paper 6.",
      "Mole and stoichiometry teaching that gets to fluency rather than familiarity.",
      "A shared whiteboard setup that makes equations and working visible live.",
    ],
    duties: [
      "Confirm the exam series before planning revision.",
      "Practise alternative-to-practical questions from the first month.",
      "Set short calculation drills between sessions and review them.",
    ],
    nice: ["Experience bridging 0620 into IB Chemistry or A Level."],
  },
  {
    slug: "ib-dp-ess-online-tutor-india",
    title: "IB DP Environmental Systems and Societies online tutor — India (remote)",
    level: "IB DP Environmental Systems and Societies",
    mode: "online",
    where: "India",
    summary:
      "Online teaching for ESS, the interdisciplinary Diploma course that few tutors cover and many students take.",
    overview:
      "ESS is chosen by students who want a science without the laboratory load, and it is then assessed on systems thinking, environmental value systems and data interpretation. Specialist tutors are rare, so students who struggle usually have nobody to go to.",
    notes: [
      "Systems diagrams and the environmental value systems framework run through the whole course and are examined directly.",
      "The IA is an individual investigation with a genuine environmental context, which has to be feasible wherever the student actually lives.",
      "Paper 2 rewards data interpretation and structured evaluation rather than recall, and students who revise by memorising underperform.",
    ],
    skills: [
      "The full ESS course including systems diagrams and the value systems framework.",
      "IA supervision for investigations designed around what the student can genuinely access.",
      "Data interpretation and evaluation technique for Paper 2.",
    ],
    duties: [
      "Teach systems diagrams as an examined skill, not as illustration.",
      "Check that each IA investigation is actually feasible before approving the plan.",
      "Set data-interpretation practice from unfamiliar sources regularly.",
    ],
    nice: ["A background in environmental science, geography or sustainability work."],
  },
  {
    slug: "ib-dp-history-global-politics-online-tutor-india",
    title: "IB DP History and Global Politics online tutor — India (remote)",
    level: "IB DP History and Global Politics (HL and SL)",
    mode: "online",
    where: "India",
    summary:
      "Online teaching for IB History and Global Politics: source paper technique, essay argument, and the internal assessments both courses carry.",
    overview:
      "History is marked on argument, not on knowing more. Students who revise by learning more facts and keep getting 4s are the typical starting point here, and the fix is structural: a thesis, evidence selected to serve it, and counter-argument answered rather than mentioned.",
    notes: [
      "Paper 1 is a source paper with its own technique, including the origin, purpose, value and limitation analysis that students reduce to a formula.",
      "The History IA is a 2,200-word investigation with a section on method and sources that is marked separately and is frequently rushed.",
      "Global Politics carries the engagement activity and, at HL, the extension, both of which need planning in DP1.",
    ],
    skills: [
      "At least two History prescribed subjects or world history topics to exam standard.",
      "Source analysis and essay argument taught as technique rather than content.",
      "Global Politics assessment including the engagement activity, where you take that subject.",
    ],
    duties: [
      "Teach thesis-first essay construction and hold students to it in every piece.",
      "Supervise the IA's method section as carefully as its argument.",
      "Plan the Global Politics engagement activity in DP1, not DP2.",
    ],
    nice: ["History or Global Politics examining experience."],
  },
  {
    slug: "ib-dp-business-management-online-tutor-india",
    title: "IB DP Business Management online tutor — India (remote)",
    level: "IB DP Business Management (HL and SL)",
    mode: "online",
    where: "India",
    summary:
      "Online IB Business Management across India: the tools, the HL extensions, and the Internal Assessment built on a real organisation.",
    overview:
      "Business Management rewards applying a framework to a real organisation and penalises describing the framework. The IA is the clearest example: HL students write a research project on an actual business issue, and the mark depends on primary and secondary research that was actually done.",
    notes: [
      "The business tools, from Ansoff to break-even to investment appraisal, must be applied to the case rather than defined.",
      "HL adds further content and a longer research project, which needs an organisation agreed early and genuine access to information.",
      "Paper 1 works from a pre-released case study that has to be researched methodically rather than read once.",
    ],
    skills: [
      "The full Business Management course including HL content and the quantitative tools.",
      "IA supervision for both SL and HL formats against the current criteria.",
      "Experience working the pre-released case study as a structured research task.",
    ],
    duties: [
      "Fix the IA organisation and research question early enough for real research to happen.",
      "Teach every tool through application to a named organisation.",
      "Run the pre-released case study as a planned research programme.",
    ],
    nice: ["Business or management experience you can draw real examples from."],
  },
  {
    slug: "ib-dp-spanish-french-b-online-tutor-india",
    title: "IB DP Spanish and French B online tutor — India (remote)",
    level: "IB DP Language B (Spanish, French), HL and SL",
    mode: "online",
    where: "India",
    summary:
      "Online Group 2 teaching for Diploma students across India: Spanish or French B, the five themes, and the individual oral.",
    overview:
      "Indian schools often have one Group 2 teacher for an entire cohort, which means almost no individual speaking practice. That is exactly what the assessment measures. Regular online conversation with proper correction is the highest-value thing a Language B student can buy.",
    notes: [
      "Every session should run substantially in the target language from the first month, including the correction.",
      "The individual oral uses a visual stimulus tied to a theme and needs genuine unrehearsed practice with follow-up questions.",
      "Paper 1 is a written task in a specified text type, where register and conventions carry marks that grammar alone does not.",
    ],
    skills: [
      "Near-native or native Spanish or French, with the IB Language B assessment model.",
      "The five prescribed themes and the examined text types.",
      "The discipline to keep sessions in the target language rather than defaulting to English.",
    ],
    duties: [
      "Teach in the target language and correct in it.",
      "Run timed individual oral practice with unseen stimuli.",
      "Teach text-type conventions and register explicitly for Paper 1.",
    ],
    nice: ["DELE or DELF examining experience, or a second Group 2 language."],
  },
  {
    slug: "ib-dp-visual-arts-design-technology-online-tutor-india",
    title: "IB DP Visual Arts and Design Technology online tutor — India (remote)",
    level: "IB DP Visual Arts and Design Technology (HL and SL)",
    mode: "online",
    where: "India",
    summary:
      "Online mentoring for the IB's studio subjects: the Visual Arts comparative study and process portfolio, and the Design Technology design project.",
    overview:
      "These are the subjects where a talented student scores badly because the documentation was neglected. Visual Arts marks the comparative study and process portfolio as heavily as the exhibition, and Design Technology marks the design cycle, not the finished object. Both are mentoring problems more than teaching problems.",
    notes: [
      "The Visual Arts comparative study is an academic piece of art analysis, and students who are strong practically are often weakest here.",
      "The process portfolio has to show sustained experimentation over two years, which cannot be reconstructed at the end.",
      "Design Technology's project is marked on the cycle: analysis, specification, development, testing and evaluation, with evidence at every stage.",
    ],
    skills: [
      "The current Visual Arts or Design Technology assessment model, with the criteria.",
      "Art-historical and critical analysis for the comparative study, where you take Visual Arts.",
      "Design cycle documentation standards, where you take Design Technology.",
    ],
    duties: [
      "Set up portfolio documentation habits in DP1 rather than rescuing them in DP2.",
      "Mark written components against the criteria, not against taste.",
      "Keep students producing evidence at every stage of the design cycle.",
    ],
    nice: ["Practising artist, designer or architect alongside teaching."],
  },
  {
    slug: "igcse-additional-mathematics-0606-online-tutor-india",
    title: "IGCSE Additional Mathematics 0606 online tutor — India (remote)",
    level: "IGCSE Additional Mathematics 0606",
    mode: "online",
    where: "India",
    summary:
      "Online teaching for Cambridge Additional Mathematics, the Year 11 paper that decides whether a student can take Maths AA HL in the Diploma.",
    overview:
      "0606 is taught in a squeezed slot at most schools, often by a teacher covering it on top of a full timetable. It introduces calculus, logarithms, binomial expansion and kinematics that 0580 never touches, and students who fall behind in term one rarely catch up without help.",
    notes: [
      "The course must be taught ahead of the school timetable so that revision is genuinely revision.",
      "Calculus and kinematics are where students stall, usually because the algebra underneath is not fast enough yet.",
      "Students taking 0606 are overwhelmingly heading for AA HL, so the teaching should point at what the Diploma will assume.",
    ],
    skills: [
      "0606 to full paper standard, including calculus, logarithms and kinematics.",
      "Cambridge mark scheme conventions, especially method and accuracy marks.",
      "A clear view of the 0606 to AA HL transition.",
    ],
    duties: [
      "Run ahead of the school timetable from the start of the engagement.",
      "Drill algebraic fluency as a prerequisite rather than assuming it.",
      "Mark full past papers to the mark scheme and review the method marks lost.",
    ],
    nice: ["Experience teaching AA HL, so Year 11 teaching points forward correctly."],
  },
  {
    slug: "ib-myp-eassessment-online-tutor-india",
    title: "IB MYP eAssessment online tutor — India (remote)",
    level: "IB MYP Year 5 eAssessment",
    mode: "online",
    where: "India",
    summary:
      "Online preparation for MYP Year 5 eAssessment across India: the on-screen examinations, the ePortfolios and the Personal Project.",
    overview:
      "eAssessment is an on-screen examination with its own interface, timing and question style, and students who have only ever done criterion-based classroom tasks meet it cold. Familiarity with the format is worth as much as content revision here.",
    notes: [
      "On-screen examinations have their own navigation and timing constraints that have to be practised, not just read about.",
      "ePortfolio subjects are assessed on process evidence gathered through the year, which cannot be assembled at the end.",
      "The Personal Project runs alongside and needs its own supervision schedule rather than being squeezed in after the exams.",
    ],
    skills: [
      "Direct experience of MYP eAssessment, including the on-screen examination format.",
      "MYP criteria A to D across at least two subject groups.",
      "Personal Project supervision experience.",
    ],
    duties: [
      "Run practice under the real on-screen format and timing.",
      "Audit ePortfolio evidence months before submission, not weeks.",
      "Keep the Personal Project on its own timeline alongside exam preparation.",
    ],
    nice: ["Experience of the MYP to DP transition in a continuum school."],
  },
  {
    slug: "ib-pyp-early-years-online-tutor-india",
    title: "IB PYP and early years online tutor — India (remote)",
    level: "IB PYP (Grades 1 to 5)",
    mode: "online",
    where: "India",
    summary:
      "Online primary support for PYP students across India: reading, number sense and written expression in short, well-structured sessions.",
    overview:
      "Teaching a seven-year-old online is a genuine skill, and most tutors are not good at it. Sessions have to be short, visual and interactive, and a tutor who talks for forty minutes will lose the child in five. Families book this where there is no suitable in-person option nearby.",
    notes: [
      "Sessions run 30 to 45 minutes, three times a week, with the screen used actively rather than as a talking head.",
      "Reading fluency, number sense and written expression are the three areas that compound if left, and they take most of the time.",
      "PYP works through units of inquiry, so sessions connect to the school's current unit rather than running a parallel curriculum.",
    ],
    skills: [
      "Primary teaching experience with genuine early-years pedagogy.",
      "Online technique for young children: short tasks, visual tools, frequent interaction.",
      "Reading intervention method including phonics where it is still needed.",
    ],
    duties: [
      "Keep sessions to 30 to 45 minutes with frequent changes of activity.",
      "Build sessions around the school's current unit of inquiry.",
      "Tell parents honestly when tuition is not what the child needs.",
    ],
    nice: ["A primary teaching qualification or early-years specialist training."],
  },
  {
    slug: "igcse-accounting-economics-online-tutor-india",
    title: "IGCSE Accounting and Economics online tutor — India (remote)",
    level: "IGCSE Accounting 0452 and Economics 0455",
    mode: "online",
    where: "India",
    summary:
      "Online Cambridge Accounting and Economics for Years 10 and 11 across India, covering the ledger work and the applied economics answers.",
    overview:
      "Accounting 0452 is one of the few IGCSEs where a student can go from a 4 to an 8 inside a term, because the marks are procedural and the procedures are learnable. Economics alongside it is the opposite: application and evaluation, which take longer to build.",
    notes: [
      "Accounting is drilled: double entry, control accounts, adjustments and final accounts, practised until the layout is automatic.",
      "Economics requires applied answers with accurate diagrams and a real evaluation paragraph, which students substitute with description.",
      "Taken together, the two subjects need deliberately different session shapes rather than a shared approach.",
    ],
    skills: [
      "0452 to full paper standard including adjustments and final accounts.",
      "0455 with accurate diagrams and evaluative answer structure.",
      "The judgement to teach one subject as drill and the other as argument.",
    ],
    duties: [
      "Drill accounting layouts until they are automatic under time.",
      "Mark economics answers against the command term and the evaluation requirement.",
      "Keep the two subjects on separate session plans.",
    ],
    nice: ["A professional accounting background, or experience teaching A Level Accounting."],
  },
  {
    slug: "ib-igcse-geography-online-tutor-india",
    title: "IB and IGCSE Geography online tutor — India (remote)",
    level: "IB DP Geography and IGCSE Geography 0460",
    mode: "online",
    where: "India",
    summary:
      "Online Geography across both boards: the IGCSE 0460 papers with their coursework alternative, and the IB Diploma's fieldwork-based Internal Assessment.",
    overview:
      "Geography is a small-cohort subject at most Indian international schools, which means limited specialist teaching and almost no fieldwork support. The Internal Assessment at both levels depends on fieldwork, and helping a student design something feasible where they actually live is most of the value here.",
    notes: [
      "IGCSE 0460 includes a geographical skills paper and either coursework or the alternative paper, and the two routes need different preparation.",
      "The DP Geography IA is a fieldwork investigation with primary data, so the question has to suit the student's own location.",
      "Both courses reward case studies used precisely, with real places and real figures, rather than general description.",
    ],
    skills: [
      "IGCSE 0460 including the skills paper, and the DP Geography course with its options.",
      "Fieldwork methodology and data presentation for both IA routes.",
      "Case study teaching with specific places, figures and dates.",
    ],
    duties: [
      "Design IA fieldwork around what the student can genuinely access locally.",
      "Teach map and graph skills as examined techniques.",
      "Build a case study bank with precise detail rather than general examples.",
    ],
    nice: ["GIS experience, or Geography examining experience at either level."],
  },
  {
    slug: "ib-igcse-online-tutor-nri-families-india",
    title: "IB and IGCSE online tutor for NRI and returning families — India (remote)",
    level: "IB MYP, IB DP and IGCSE (Years 7 to 12)",
    mode: "online",
    where: "India",
    summary:
      "Online teaching for families moving between school systems or time zones: curriculum-gap diagnosis and teaching across IB and Cambridge, Years 7 to 12.",
    overview:
      "A student arriving mid-year from a different system usually has gaps that nobody has mapped, and schools rarely have time to find them. This role starts with a diagnostic rather than a syllabus, then teaches to whatever the gap turns out to be. It also requires flexibility about hours, because these families are often in other time zones.",
    notes: [
      "The first two sessions are diagnostic, and the written gap analysis that follows is part of what the family is paying for.",
      "Teaching may span two boards for the same student, especially where a mid-year move means finishing one syllabus and preparing for another.",
      "Time zones matter: you set the hours you will teach and we only match families inside them.",
    ],
    skills: [
      "Working knowledge of both IB and Cambridge assessment models at Years 7 to 12.",
      "Diagnostic ability: finding the gap rather than restarting from the beginning of a textbook.",
      "Willingness to teach outside Indian school hours where the family is abroad.",
    ],
    duties: [
      "Run a structured diagnostic before teaching anything and share it in writing.",
      "Teach to the gap rather than to a syllabus order.",
      "Set and keep your own time-zone window rather than taking whatever is offered.",
    ],
    nice: ["Experience in more than one school system, or with students relocating mid-year."],
  },
  {
    slug: "ib-igcse-exam-revision-online-tutor-india",
    title: "IB and IGCSE exam revision online tutor — India (remote)",
    level: "IB DP Year 2 and IGCSE Year 11 revision",
    mode: "online",
    where: "India",
    summary:
      "Short-cycle online revision teaching for final-year IB and IGCSE students across India: past papers, mark schemes and exam technique in the last two terms.",
    overview:
      "This is deliberately short-engagement work. Families come in January or March wanting six to twelve weeks of focused revision before final exams, and the job is triage: find the topics worth fixing in the time left, and stop teaching the ones that are not.",
    notes: [
      "The work is past papers, mark schemes and timing rather than first teaching of content, so it suits tutors who know the papers very well.",
      "Honest triage is the core skill: telling a student which topics to abandon is often worth more than another hour on the hardest one.",
      "Engagements are short and intense, usually three or four sessions a week across six to twelve weeks.",
    ],
    skills: [
      "Deep familiarity with past papers and mark schemes in at least two subjects.",
      "The judgement to triage a syllabus under time pressure and say what to drop.",
      "Composure with students and families who are anxious and short of time.",
    ],
    duties: [
      "Open with a past paper under exam conditions and plan from the result.",
      "Mark to the official mark scheme and go through the marks lost, not the answers.",
      "Say plainly which topics are not worth the remaining time.",
    ],
    nice: ["Examining experience, which makes the triage judgement far more reliable."],
  },
];
