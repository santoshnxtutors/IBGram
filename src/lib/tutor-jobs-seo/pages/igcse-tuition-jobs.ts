import type { TutorJobSeoPage } from "../types";

/**
 * Lane: the two IGCSE awarding bodies. Differentiator is Cambridge vs Pearson Edexcel and the
 * Core/Extended tier decision — the two things an IGCSE tutor must get right and that no
 * generic tuition page explains. Deliberately avoids IB programme detail.
 */
export const igcseTuitionJobs: TutorJobSeoPage = {
  slug: "igcse-tuition-jobs",
  jobFamily: "board",
  scopeLabel: "IGCSE",
  locationScope: "worldwide",
  lastUpdated: "2026-10-26",

  title: "IGCSE Tuition Jobs — Teach Cambridge and Edexcel Students | IB Gram",
  metaDescription:
    "Apply for IGCSE tuition jobs. Teach Cambridge and Edexcel students online or at home, set your own fee, and keep 100% of home-tuition fees from month two.",
  metaKeywords: [
    "igcse tuition jobs",
    "igcse tutor jobs",
    "igcse teacher jobs",
    "cambridge igcse tutor jobs",
    "edexcel igcse tutor jobs",
    "igcse home tutor jobs",
    "igcse online tutor jobs",
    "igcse tutor vacancy",
    "igcse tuition teacher required",
    "igcse maths tutor jobs",
    "igcse physics tutor jobs",
    "igcse chemistry tutor jobs",
    "igcse biology tutor jobs",
    "igcse english tutor jobs",
    "igcse economics tutor jobs",
    "igcse business studies tutor jobs",
    "igcse tutor jobs india",
    "igcse tutor jobs dubai",
    "cie tutor jobs",
    "o level tutor jobs",
    "igcse tutor part time",
    "become an igcse tutor",
    "freelance igcse tutor",
    "igcse tutor pay",
    "igcse tutor salary",
    "igcse grade 9 tutor",
    "igcse grade 10 tutor",
    "igcse extended tier tutor",
  ],
  h1: "IGCSE tuition jobs: teach Cambridge and Edexcel students",
  heroEyebrow: "Cambridge & Edexcel tutors",
  heroSubtitle:
    "Families come to us knowing their board, their tier and their exam series. Tell us which of those you can teach and we will send you students who match — online, at home, or both.",
  primaryKeyword: "IGCSE tuition jobs",
  secondaryKeywords: [
    "IGCSE tutor jobs",
    "Cambridge IGCSE tutor vacancy",
    "Edexcel IGCSE tuition jobs",
    "IGCSE teacher jobs",
    "online IGCSE tutor jobs",
    "IGCSE home tutor jobs",
  ],
  imageAltText: "IB Gram tutor teaching a Cambridge IGCSE student",

  heroTrustPoints: [
    "Matched by board, tier and exam series, not just by subject",
    "Home tuition: 100% of the fee is yours from the second month",
    "You set your own fee and the family sees it before booking",
    "Monthly payouts on the 1st with an itemised statement",
  ],
  heroStats: [
    { value: "2", label: "Boards covered" },
    { value: "100%", label: "Home fee from month 2" },
    { value: "70%", label: "Your share online" },
    { value: "1st", label: "Payout each month" },
  ],

  directAnswer:
    "IGCSE tuition jobs at IB Gram are freelance engagements teaching Cambridge (CAIE) or Pearson Edexcel IGCSE students in Years 9 and 10. You apply once, list your board, subjects and tier, pass an ID and credential check, then receive matched students. Home tuition is 50-50 for the first month and 100% yours after; online is 70% yours. Payouts land on the 1st of each month.",

  intro: {
    heading: "What an IGCSE tuition job with us involves",
    paragraphs: [
      "IGCSE is where most international-school students meet a public examination for the first time, and it is where a lot of confident students suddenly stop coping. The syllabus is broader than most national curricula at the same age, the papers reward precision in a way school tests often do not, and the two-year course ends in a terminal exam series that decides sixth-form and IB Diploma entry.",
      "That is the work. Families rarely want general help — they want someone who knows their board's papers, has seen their mark schemes, and can tell them whether their child should be entered for the Core or the Extended tier. We match on exactly those details.",
      "You are an independent professional here, not an employee. You decide which students you take, how many hours you teach, whether you teach online or travel to a home, and what you charge. We find the students, arrange the free demo class, collect the fees and pay you monthly.",
    ],
    bullets: [
      "Requests tell you the board, subject, tier and exam series before you accept",
      "No joining fee, no subscription and no charge to receive matches",
      "No exclusivity — keep your school job or your own students",
      "Decline any student, timing or location without penalty",
    ],
  },

  earnings: {
    heading: "What IGCSE tutors earn and what we take",
    paragraphs: [
      "You set your fee and we publish it; families see it before they book, so the demo class is about teaching rather than negotiating. IGCSE rates sit a little below DP Higher Level in most markets, but the volume is higher and the work is far less seasonal, so a full IGCSE timetable is usually easier to build and keep.",
      "Our share depends only on the mode. Home tuition is split 50-50 for the first month, and from month two you keep every rupee for as long as you teach that student. Online is a flat 70/30 in your favour, every month, with no first-month discount.",
      "The split in force when a student starts is locked for that student. Any change to these terms is announced at least 30 days in advance and applies only to students who start afterwards.",
    ],
    table: {
      caption: "How a month's fees are shared, by mode",
      columns: ["Mode", "Month 1", "Month 2 onwards", "Fee collection"],
      rows: [
        ["Home tuition", "50% you / 50% IB Gram", "100% you", "IB Gram invoices and chases"],
        ["Online classes", "70% you / 30% IB Gram", "70% you / 30% IB Gram", "IB Gram invoices and chases"],
        ["Hybrid", "Applied per class by mode", "Applied per class by mode", "IB Gram invoices and chases"],
      ],
    },
    bullets: [
      "A ₹14,000/month home student pays you ₹7,000 in month 1, then ₹14,000 every month",
      "Online at ₹1,000 a class × 12 classes = ₹12,000, of which ₹8,400 is yours",
      "Two IGCSE subjects for one student counts as one engagement, at your combined fee",
      "Classes you cancel are not billed to the family, so they are not paid",
    ],
  },

  requirementsIntro:
    "Every application is read by a person. For IGCSE the thing we probe hardest is whether you know your board's papers and mark schemes, because that is what actually moves a grade.",
  requirements: [
    {
      label: "Subject command at IGCSE level and above",
      detail:
        "A degree or teaching qualification in the subject, or a track record of IGCSE results. You should be comfortable a level above what you teach, so an A* student never outruns you.",
      required: true,
    },
    {
      label: "Knowledge of at least one board's assessment",
      detail:
        "You should be able to name the papers in your subject, say what each one tests, and explain how marks are awarded. Knowing both Cambridge and Edexcel is a real advantage; knowing one properly is the minimum.",
      required: true,
    },
    {
      label: "Government photo ID for verification",
      detail:
        "Uploaded and reviewed before your profile goes live. This is an identity check, not a police or criminal-records check, and your profile says exactly that rather than implying more.",
      required: true,
    },
    {
      label: "A working setup for your chosen mode",
      detail:
        "Online needs stable broadband, a camera, a microphone and a quiet professional space — plus a graphics tablet or document camera for anything with working out. Home tuition needs reliable travel to the areas you list.",
      required: true,
    },
    {
      label: "Experience in an international school",
      detail:
        "Weighted in review and valued by parents, but we accept strong subject specialists from national-curriculum backgrounds who have learned the board's assessment.",
      required: false,
    },
    {
      label: "Examiner or marking experience",
      detail:
        "Cambridge or Edexcel marking experience is the single strongest signal on an IGCSE profile. We display it once evidenced and it lets you charge more.",
      required: false,
    },
  ],

  processIntro:
    "The application takes about twenty minutes. A human reviews it, and most applicants hear back within a few working days.",
  process: [
    {
      title: "Send your profile",
      description:
        "Apply through the tutor form or sign up and build your own profile. List your board or boards, every subject, the tiers you can teach, your mode, your availability and your fee.",
    },
    {
      title: "Upload your ID and credentials",
      description:
        "A government photo ID plus your degree, teaching qualification or examiner evidence. Our academic team reviews all of it before anything is published.",
    },
    {
      title: "Academic review",
      description:
        "We check subject depth and board knowledge against what you have claimed. If we think you are a stronger fit for a different subject or tier we will tell you rather than reject the application.",
    },
    {
      title: "Your verified profile goes live",
      description:
        "Your profile shows your boards, subjects, tiers, mode, availability and fee, carrying the verification badge earned by the ID check.",
    },
    {
      title: "We send you matched students",
      description:
        "When a family needs your board, subject and tier you are shortlisted. You see the year group, board, tier, target series and mode before accepting, and you may decline.",
    },
    {
      title: "Free demo, then you start",
      description:
        "The first class is a free demo so the family can judge the teaching; they have already seen your fee. If it goes well the engagement starts and your first payout is on the 1st of the following month.",
    },
  ],

  sections: [
    {
      heading: "Cambridge or Edexcel: the differences that matter to a tutor",
      paragraphs: [
        "\"IGCSE\" is not one qualification. Cambridge International (CAIE) and Pearson Edexcel both award it, schools pick one board per subject, and a tutor who treats them as interchangeable will eventually teach a student content their paper does not assess, or drill a paper format they will never sit.",
        "The clearest practical difference is in mathematics. Cambridge runs a tiered model with Core and Extended routes sat as different papers. Pearson Edexcel runs Foundation and Higher tiers with its own paper structure, and its Higher tier Further Pure option goes further into pure mathematics than Cambridge Extended does. A student moving school mid-course between boards is one of the commonest reasons a family calls us.",
        "In the sciences, Cambridge and Edexcel split the practical element differently — Cambridge has long run an alternative-to-practical written paper, which has its own distinct technique that is easy to under-prepare. In English, the coursework-versus-exam routes differ by board and by what a school has chosen, so the first question to ask a new student is always which route their school entered them for.",
        "You do not need to know both boards to join. You do need to be honest in your profile about which one you know, because we match on it and a mismatch surfaces in the demo class.",
      ],
      table: {
        caption: "What differs between the two IGCSE boards, in practice",
        columns: ["Area", "Cambridge (CAIE)", "Pearson Edexcel"],
        rows: [
          ["Maths tiers", "Core and Extended, sat as separate papers", "Foundation and Higher, plus a Further Pure option"],
          ["Science practicals", "Alternative-to-practical written paper is common", "Practical skills assessed within the written papers"],
          ["Grading", "9–1 on international variants; A*–G still in use on some", "9–1 across the international suite"],
          ["Exam series", "May/June and October/November", "May/June and January in several subjects"],
          ["Common in", "South Asia, the Gulf, Africa, Southeast Asia", "UK-linked international schools, parts of the Gulf"],
        ],
      },
      bullets: [
        "Always confirm the board and the exact syllabus code with a new student",
        "A January series exists on some Edexcel subjects and changes your whole revision calendar",
        "Mid-course board transfers are a recurring, well-paid niche",
      ],
    },
    {
      heading: "Core or Extended: the tier conversation you will have constantly",
      paragraphs: [
        "The tier decision is the single most consequential thing an IGCSE family will ask you about, and it has real stakes. On Cambridge mathematics, the Core tier caps the attainable grade — typically at a C or grade 4 equivalent — which can close the door on IB Diploma Higher Level mathematics and on A-level maths entirely. Extended keeps the full grade range open but assumes more content and more pace.",
        "Schools make the formal entry decision, usually late in Year 10, but they make it partly on the evidence in front of them, and a tutor's assessment of whether a student can cope with Extended often carries weight with parents who are lobbying the school either way.",
        "Handle it carefully and honestly. Pushing a student into Extended who cannot cope produces a worse grade than a strong Core result, and talking a capable student down costs them options at sixth form. Our most valued IGCSE tutors are the ones who will say plainly in month one that a student is an Extended candidate who is simply behind, or that Core is genuinely the right call — and then teach accordingly.",
      ],
      bullets: [
        "Core caps the top grade available; Extended keeps the full range open",
        "Core maths can block IB Maths HL and A-level maths progression",
        "Entry decisions are usually finalised late in Year 10 — your assessment feeds in",
        "Be explicit with parents about which tier you are teaching towards and why",
      ],
    },
    {
      heading: "Which IGCSE subjects families ask for most",
      paragraphs: [
        "Mathematics is the largest single source of requests by a wide margin, followed by the three separate sciences. Physics generates disproportionate demand relative to how many students take it, because it combines unfamiliar mathematics with a style of question that rewards precision, and because fewer tutors teach it confidently than teach biology.",
        "Beyond those, Economics and Business Studies are a steady stream — often from students who picked them expecting an easy option and met a command-word-driven mark scheme instead. English Language and English Literature produce consistent work, frequently from strong speakers of English who have never been taught to write to a specific mark scheme.",
        "English as a Second Language is a distinct and underserved niche. So is Additional Mathematics, taken by stronger students as a bridge to A-level or IB, where the pool of available tutors is very small.",
      ],
      bullets: [
        "Mathematics, Core and Extended — the largest source of requests",
        "Physics, Chemistry and Biology, taken separately or as Combined Science",
        "Economics and Business Studies — heavily command-word driven",
        "English Language, English Literature and English as a Second Language",
        "Additional Mathematics — small pool of tutors, strong demand",
      ],
    },
    {
      heading: "The IGCSE year, and how busy you will be",
      paragraphs: [
        "IGCSE work is steadier across the year than IB Diploma work, which is one of the better reasons to teach it. Year 9 students arrive from September as families realise the two-year course has started in earnest, and that flow continues through the autumn.",
        "The peak runs from January to May, ahead of the May/June series, and it is sharper for Year 10 than Year 9. If you teach an Edexcel subject with a January series, you will also see a December push. The quiet window is June to August, and a good share of that is results-driven: regrade queries, retake planning and students preparing to step up into IB Diploma or A-level who want a head start.",
        "We will not promise you a student count. Honestly, the pattern we see is that tutors who list both boards, teach two or more subjects, and offer online as well as home get matched several times more often than single-subject home-only tutors. Breadth is what turns an approved profile into a full timetable.",
      ],
      table: {
        caption: "The IGCSE tutoring year",
        columns: ["Period", "What drives demand", "Who is busiest"],
        rows: [
          ["Sep–Dec", "Year 9 starts; Year 10 mock preparation", "All subjects; Edexcel January-series tutors"],
          ["Jan–May", "May/June series run-up — the annual peak", "Maths and science tutors, Year 10"],
          ["Jun–Aug", "Results, regrades, retakes, IB and A-level bridging", "Bridging and retake specialists"],
          ["Oct–Nov", "October/November Cambridge series", "Cambridge tutors, southern hemisphere"],
        ],
      },
    },
  ],

  policiesIntro:
    "These are summaries of clauses in our tutor policy. Read them before you apply rather than after your first payout.",
  policies: [
    {
      heading: "Home tuition: 50-50 for the first month, then 100% yours",
      summary:
        "Each new home student's first month is split evenly — our one-time fee for finding and setting up the match. From month two we take nothing for as long as you keep teaching them. The split is per student, so each new student has their own first month.",
      anchor: "home-tuition",
    },
    {
      heading: "Online classes: 70% to you, 30% platform fee",
      summary:
        "A flat 70/30 in your favour, every month. The platform fee covers matching, demo scheduling, fee collection, chasing late payers, scheduling support and finding a replacement if a student stops.",
      anchor: "online-classes",
    },
    {
      heading: "Paid monthly, on the 1st",
      summary:
        "Fees for a calendar month's classes are paid on the 1st of the next month — September's work on 1 October. Bank transfer or UPI, with a statement listing every student, class, fee and split.",
      anchor: "payouts",
    },
    {
      heading: "Your split is locked",
      summary:
        "The split in force when a student starts stays the split for that student. Policy changes are announced at least 30 days ahead and apply only to students who begin after the change.",
      anchor: "tutor-protection",
    },
    {
      heading: "Safeguarding for under-18 students",
      summary:
        "IGCSE students are almost all minors. Teach home students in a common area with an adult in the house, keep your camera on online, never record without parental consent, and keep communication with a parent or in a chat that includes them.",
      anchor: "safeguarding",
    },
    {
      heading: "Coursework honesty",
      summary:
        "Where your subject has coursework, you teach the skills and give feedback on the student's own drafts. You never write it. Board malpractice rules can void a candidate's entry across every subject, not just the one.",
      anchor: "professional-standards",
    },
    {
      heading: "Keep IB Gram students on IB Gram",
      summary:
        "Do not move a student we introduced to a private arrangement or take fees directly from the family. Home tuition is already 100% yours from month two, so there is nothing to gain; doing it leads to removal from the platform.",
      anchor: "professional-standards",
    },
    {
      heading: "You are independent, and taxed as such",
      summary:
        "Tutors are independent professionals, not employees. You are responsible for income tax on your earnings, your monthly statements are your filing record, and any tax we must deduct at source appears on the statement.",
      anchor: "tax",
    },
  ],

  whyPoints: [
    {
      title: "Matched on board and tier",
      description:
        "A request names the board, subject, tier and target series before you accept it. You are never sent a Cambridge Extended student when Edexcel Foundation is what you teach.",
    },
    {
      title: "You never chase a family for payment",
      description:
        "We invoice, collect and follow up on late payment. A late-paying family becomes an addition to your next payout once received, not an awkward conversation you have to start.",
    },
    {
      title: "Home tuition genuinely becomes 100% yours",
      description:
        "After month one we take nothing from home tuition. The only reason you would stay with us is that we keep sending you students — which is the incentive we want.",
    },
    {
      title: "Steadier than exam-season tutoring",
      description:
        "IGCSE demand runs across the year rather than collapsing after one session, and the two-year course means engagements tend to last terms rather than weeks.",
    },
    {
      title: "Your fee, published as you set it",
      description:
        "No bidding against other tutors and no pressure to discount. The family sees your rate before booking the demo, so price is settled before you teach.",
    },
    {
      title: "No exclusivity, no lock-in",
      description:
        "Tutor alongside a school job, your own private students or another platform. No joining fee, no subscription, no notice period.",
    },
  ],

  faqs: [
    {
      question: "Do I need to know both Cambridge and Edexcel to apply?",
      answer:
        "No. Knowing one board properly is the minimum and knowing both is an advantage we weight in review and in matching. What matters is that your profile is accurate, because we match families on board and a mismatch becomes obvious in the demo class.",
    },
    {
      question: "Are these salaried teaching jobs?",
      answer:
        "No. They are freelance tutoring engagements. You choose the students, hours, mode and fee, and you are paid per class taught. Salaried roles at IB Gram, when we have them, appear separately on our jobs page.",
    },
    {
      question: "How much do IGCSE tutors earn?",
      answer:
        "You set your own fee, so it depends on your rate and your hours. Our share is fixed by mode: home tuition is 50-50 in month one then 100% yours, and online is 70% yours every month. A ₹14,000-a-month home student pays you ₹7,000 in month one and ₹14,000 in each month after.",
    },
    {
      question: "Can I teach IGCSE without having taught in an international school?",
      answer:
        "Yes. We accept strong subject specialists from national-curriculum backgrounds, provided you can show you have learned your board's assessment — the papers in your subject, what each tests and how marks are awarded. Examiner or marking experience is the strongest signal of all.",
    },
    {
      question: "Should I advise a student to take Core or Extended?",
      answer:
        "Give your honest professional assessment and be explicit about the stakes. Core caps the attainable grade, which can close off IB Maths HL and A-level maths. The school makes the formal entry decision, but your view carries weight with parents, so say plainly whether a student is an Extended candidate who is behind or a genuine Core candidate.",
    },
    {
      question: "Which IGCSE subjects have the most demand?",
      answer:
        "Mathematics by a wide margin, then Physics, Chemistry and Biology — Physics especially, because fewer tutors teach it confidently. Economics and Business Studies are steady, as are English Language and Literature. Additional Mathematics and English as a Second Language are small but underserved.",
    },
    {
      question: "When do I get paid?",
      answer:
        "On the 1st of the month after the classes were taught. September's fees are deposited on 1 October. If the 1st falls on a Sunday or bank holiday the transfer goes out the next working day, by bank transfer or UPI, with an itemised statement.",
    },
    {
      question: "Can I teach two subjects to the same student?",
      answer:
        "Yes, and it is common — Maths and Physics together, or the three sciences. It counts as one engagement at your combined fee, and it is the quickest way to raise what you earn per student without adding travel or extra slots.",
    },
    {
      question: "What if a student switches school and board mid-course?",
      answer:
        "That is one of the commonest reasons families come to us, and it is well-paid work. You map what the new board assesses that the old one did not, and re-teach the paper technique. If the new board is one you do not know, tell us and we will rematch the family rather than let it go badly.",
    },
    {
      question: "Is there a fee to join or to get students?",
      answer:
        "No. No joining fee, no subscription, no charge to appear in matches and no charge to receive a request. We earn only from the commission split on fees for classes that actually took place.",
    },
    {
      question: "Can I decline a student or an area?",
      answer:
        "Yes, without a reason and without penalty. That includes subjects outside your comfort zone, timings that do not suit you, and home-tuition locations you would rather not travel to. The right to decline is written into the tutor policy.",
    },
    {
      question: "Is the verification badge a background check?",
      answer:
        "No. Every tutor uploads a government photo ID which our team reviews before the profile goes live, and the badge reflects that identity check only. It is not a police or criminal-records check, and we state that rather than imply more. Safeguarding rules carry the rest.",
    },
  ],

  internalLinks: [
    {
      label: "IB tutor jobs",
      href: "/ib-tutor-jobs/",
      description: "The IB programme ladder — what changes for a tutor between PYP, MYP and DP.",
    },
    {
      label: "IB DP tutor jobs",
      href: "/ib-dp-tutor-jobs/",
      description: "Where IGCSE students go next: HL and SL, internal assessment and exam sessions.",
    },
    {
      label: "IB and IGCSE maths tutor jobs",
      href: "/ib-igcse-maths-tutor-jobs/",
      description: "Core and Extended IGCSE maths plus Maths AA and AI — our largest subject demand.",
    },
    {
      label: "IB and IGCSE online tutor jobs",
      href: "/ib-igcse-online-tutor-jobs/",
      description: "Teach from anywhere on a flat 70/30 split, across Indian, Gulf and UK time zones.",
    },
    {
      label: "IB and IGCSE home tuition jobs",
      href: "/ib-igcse-home-tuition-jobs/",
      description: "In-person teaching, travel zones and safeguarding rules for a family home.",
    },
    {
      label: "Apply to teach",
      href: "/join-as-tutor/",
      description: "The application itself: boards, subjects, tiers, availability, ID upload and your fee.",
    },
  ],

  closingHeading: "Tell us your board and your subjects",
  closingBody:
    "List the boards, subjects and tiers you can teach, set your fee and your hours, and we will match you with IGCSE students who fit. Applying takes about twenty minutes and a person reads every application.",
};
