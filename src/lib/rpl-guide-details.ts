// Trade-specific content verified against the reference website's
// /rpl-evidence-guides/* pages (September 2026).
// Sections marked STANDARD below were verified identical on the reference;
// FAQ answers sit inside accordions on the reference and could not be
// verified verbatim — they are low-risk advisory answers consistent with
// each guide's visible content. See verification matrix in project docs.

export type EvidenceOption = {
  name: string;
  mandatory: boolean;
  tasks: string[];
};

export type GuideDetails = {
  slug: string;
  lastUpdated: string;
  whoFor: string[];
  evidenceHeading: string;
  photoLine: string;
  videoLine: string;
  visualNote?: string;
  options: EvidenceOption[];
  optionDisclaimer?: string;
  acceptable: string[];
  unacceptable: string[];
  docs: string[];
  steps: { title: string; body: string }[];
  sendBack: string[];
  faqs: { q: string; a: string }[];
};

export const STD_ORGANISE = [
  {
    title: "Collect over several weeks",
    body: "Take photos and clips as the jobs come up. Trying to capture everything in one day almost always produces evidence that looks staged.",
  },
  {
    title: "Name every file clearly",
    body: "Use a pattern like OptionA_Task_Site_01.jpg so the assessor can match each file to a task without guessing.",
  },
  {
    title: "Sort into folders by option",
    body: "One folder per option, with the photos and videos for that option inside it.",
  },
  {
    title: "Add a one-line description per task",
    body: "A simple list: task name, site or job, what the requirement was and what you did. This is what turns images into assessable evidence.",
  },
  {
    title: "Attach your documents",
    body: "Keep identification, references and pay records in a separate folder so nothing gets missed.",
  },
  {
    title: "Submit and stay available",
    body: "The assessor may call for a competency conversation. Be ready to talk through any task in your portfolio in detail.",
  },
];

export const STD_SENDBACK = [
  "Tasks from the mandatory option missing — the single most common reason a portfolio is returned",
  "The candidate is not identifiable in the images",
  "Evidence shows assisting or labouring rather than performing the trade task",
  "No supporting employment evidence to confirm the work was paid and supervised",
  "Videos too short, or with no explanation of what is happening",
  "Files duplicated across options to make up the numbers",
];

export const STD_ACCEPTABLE = [
  "Your face and hands are clearly visible while you perform the work.",
  "The whole task is shown: the work area, your tools, the material and the finished result.",
  "Well-lit, in focus, taken on a real job site or in your workplace.",
  "Video narrated by you, explaining what you are doing, why, and to what standard.",
  "Correct PPE worn and safe work practices followed throughout.",
  "Original files straight from your phone or camera, with the date intact.",
];

export const STD_UNACCEPTABLE = [
  "Anonymous shots showing only hands, or the back of someone's head.",
  "Extreme close-ups where the assessor cannot tell what the task was.",
  "Dark, blurred or heavily filtered images, or images that could have been taken anywhere.",
  "Silent clips, or clips where someone else does the work while you film.",
  "Missing PPE, unsafe access or unsafe handling — this fails a portfolio on its own.",
  "Screenshots, stock images, or photos taken from the internet or a supplier's brochure.",
];

const STD_FAQS = [
  {
    q: "What if I cannot take photos on site?",
    a: "Talk to your supervisor about short, compliant records of your own work. Where photography is restricted, employer references, job cards and supervisor statements carry extra weight — but most portfolios still need some visual proof.",
  },
  {
    q: "Can I use work from a previous employer?",
    a: "Yes, provided you can evidence it: references on company letterhead, payslips or tax records, and any photos or records from that period.",
  },
  {
    q: "How much experience do I need?",
    a: "Most RPL pathways expect several years of relevant, paid work. A free skills audit compares your work history against the qualification units so you know where you stand.",
  },
  {
    q: "Who makes the final decision?",
    a: "Skills Connect prepares and reviews your evidence portfolio. Formal assessment and qualification issuance are carried out strictly by an accredited independent RTO.",
  },
];

const STD_PHOTO = "20 clear workplace photos";
const STD_VIDEO = "20 video clips (about 30 seconds each)";
const STD_VISUAL_NOTE =
  "Capture the work as you do it during a normal working week. Spread the tasks across several days and several jobs so the portfolio reads like real output, not a staged photo session.";
const STD_DISCLAIMER =
  "These task counts are our standard preparation guidance. Your assessing RTO may set different requirements — we confirm them before you start collecting.";

const STD_DOCS = [
  "Photo identification (passport or Australian driver licence)",
  "Résumé setting out every relevant role, with dates and employer details",
  "Employment references on company letterhead listing the tasks you performed",
  "Payslips, PAYG summaries or tax records covering the claimed period",
  "Any overseas qualifications, transcripts or trade certificates, with certified translations",
  "Copies of job cards, invoices, quotes or work orders with your name on them",
];

export const GUIDE_DETAILS: Record<string, GuideDetails> = {
  "vetassess-acwa-skills-assessment": {
    slug: "vetassess-acwa-skills-assessment",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Community, welfare and social workers applying for a skilled visa or state nomination",
      "Disability, aged care and home care workers moving into a recognised occupation",
      "Overseas-qualified health and community professionals needing a qualification comparison",
      "Candidates whose CHC qualification is complete but whose employment evidence is not organised",
    ],
    evidenceHeading: "What the assessor expects to see",
    photoLine: "Document-based file — no site photos required",
    videoLine: "No video clips required",
    visualNote:
      "Every claimed employment period needs at least two independent documents. Paid work of at least 20 hours per week is the minimum the assessors recognise.",
    options: [
      {
        name: "Bundle A — Identity and name history",
        mandatory: true,
        tasks: [
          "Passport bio page",
          "Birth certificate plus certified translation where needed",
          "Marriage certificate or deed poll for name changes",
          "Outcomes of any previous skills assessments",
        ],
      },
      {
        name: "Bundle B — Qualifications",
        mandatory: true,
        tasks: [
          "Award certificate or testamur plus translation",
          "Full academic transcript",
          "Subject or unit outlines for the qualification",
          "CHC statements of attainment showing the RTO code",
        ],
      },
      {
        name: "Bundle C — Employment evidence (core)",
        mandatory: true,
        tasks: [
          "Reference on letterhead with dates, hours, title and duties",
          "Referee signature, name, position and contact details",
          "Payslips, bank statements or PAYG covering the same period",
          "Contract, position description or roster for the role",
        ],
      },
      {
        name: "Bundle D — Registration, screening and licences",
        mandatory: false,
        tasks: [
          "NDIS Worker Screening clearance",
          "Working With Children Check",
          "AHPRA or overseas equivalent registration",
          "First aid, CPR, medication or manual handling certificates",
        ],
      },
      {
        name: "Bundle E — Self-employment",
        mandatory: false,
        tasks: [
          "Business registration plus tax returns",
          "Client contracts",
          "Invoices matched to bank deposits",
          "Statutory declaration describing your duties",
        ],
      },
    ],
    acceptable: [
      "Reference on letterhead, signed, with a contactable referee",
      "Duties described in plain sentences in your own words",
      "Payment evidence that lines up with the claimed period",
      "Certified colour scans plus NAATI translations",
      "Hours of at least 20 per week clearly stated",
      "Consistent names, dates and job titles across every document",
    ],
    unacceptable: [
      "Reference from a friend or someone at your own level",
      "Duties copied word-for-word from the ANZSCO description",
      "No payslips, or unpaid placements counted as employment",
      "Phone photos of documents or self-made translations",
      "Vague or missing hours of work",
      "Mismatched names, dates or titles between documents",
    ],
    docs: [
      "Passport plus certified translations",
      "All award certificates plus full transcripts",
      "Subject or unit outlines",
      "References on letterhead for every claimed period",
      "Payslips, bank statements and tax records for the same periods",
      "Contracts and position descriptions",
      "NDIS Worker Screening and Working With Children Check",
      "Professional registration certificates",
      "CV in reverse-chronological order with no unexplained gaps",
      "Application form plus fee receipt",
    ],
    steps: [
      {
        title: "Confirm the right authority",
        body: "Check whether your occupation sits with ACWA or VETASSESS, and confirm the ANZSCO code before you collect anything.",
      },
      {
        title: "Map your career to the occupation",
        body: "Line up each role against the nominated occupation's skill level and duties.",
      },
      {
        title: "Close employment gaps",
        body: "Fill any undocumented periods with references and payment evidence — gaps stall assessments.",
      },
      {
        title: "Certify, translate and scan",
        body: "Certify documents, arrange NAATI translations, and scan in colour — one PDF per document.",
      },
      {
        title: "Run a consistency pass",
        body: "Check names, dates, titles and hours match across every file before lodgement.",
      },
      {
        title: "Lodge and stay reachable",
        body: "Lodge the application and stay contactable — assessors commonly ring referees to verify claims.",
      },
    ],
    sendBack: [
      "Work assessed at a lower skill level than the nominated occupation",
      "References describe the workplace rather than your personal duties",
      "No payment evidence for claimed employment",
      "Qualification assessed below the level the occupation requires",
      "Duties copied word-for-word from the ANZSCO description",
      "Uncertified or non-recognised translations",
      "Referee cannot be reached to verify your claims",
    ],
    faqs: [
      {
        q: "VETASSESS or ACWA — which one applies to me?",
        a: "It depends on the occupation you nominate, not on where you studied. ACWA assesses welfare, community and social welfare worker occupations. VETASSESS assesses the wider set of community, health and support occupations. We check the current occupation lists with you before you lodge.",
      },
      {
        q: "Does my CHC qualification count?",
        a: "An Australian CHC qualification is strong evidence of the training component, and for several occupations it is the expected qualification. It does not on its own satisfy the employment requirement — you still need paid, documented work at the right level.",
      },
      {
        q: "Is unpaid placement or volunteering counted?",
        a: "No. Both authorities count paid employment only, generally at least 20 hours per week. Placement hours support your qualification, not your employment claim.",
      },
      {
        q: "How long does an assessment take?",
        a: "Plan for several months from lodgement, longer if the authority asks for further information. Getting the file right the first time is the only reliable way to shorten it.",
      },
      {
        q: "What does Skills Connect actually do?",
        a: "We prepare and review your evidence, identify the gaps and organise the file to the authority's format. VETASSESS and ACWA make the decision — we are not an assessing authority and we do not provide migration advice, which must come from a registered migration agent or lawyer.",
      }
    ],
  },

  "ageing-support": {
    slug: "ageing-support",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Aged care workers moving into senior carer, team leader or coordinator roles",
      "CHC33021 holders with residential or home care experience",
      "Home care package workers coordinating services and liaising with families",
      "Candidates preparing a VETASSESS skills assessment in an aged care occupation",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: "8 de-identified workplace photos",
    videoLine: "4 video clips (about 60 seconds each)",
    visualNote:
      "Privacy comes first: nothing that identifies a resident or client — use simulated or training-room demonstrations with de-identified notes and written employer consent.",
    options: [
      {
        name: "Option A — Assessment and care planning",
        mandatory: true,
        tasks: [
          "Initial and review assessments",
          "Contributing to or revising a care plan",
          "Goal-setting with the client and family",
          "Documenting a change and the resulting plan change",
        ],
      },
      {
        name: "Option B — Complex care and clinical awareness",
        mandatory: true,
        tasks: [
          "Dementia support and behaviour support",
          "Palliative and end-of-life care within scope",
          "Recognising deterioration and escalating",
          "Falls, wound and pressure-area risk management",
        ],
      },
      {
        name: "Option C — Leading and supporting a team",
        mandatory: false,
        tasks: [
          "Allocating tasks and running handover",
          "Coaching or orienting a new worker",
          "Rostering and resolving staffing issues",
          "Leading a team discussion",
        ],
      },
      {
        name: "Option D — Rights, quality and compliance",
        mandatory: false,
        tasks: [
          "Applying the Aged Care Quality Standards",
          "Handling a complaint or feedback",
          "Reportable incident scheme awareness",
          "Advocating choice and dignity of risk",
        ],
      },
      {
        name: "Option E — Coordination and community",
        mandatory: false,
        tasks: [
          "Arranging allied health or external services",
          "Liaising with families, guardians or case managers",
          "Supporting community participation",
          "Managing a home care package budget",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Supervisor report describing decisions you made, not just dates worked",
      "De-identified care plans plus written employer consent",
      "Escalation examples showing your reasoning, not just following instructions",
      "Evidence of leading others, not only doing the tasks yourself",
      "Payslips plus position description for any senior or acting role",
      "Current screening checks and training records in your name",
    ],
    unacceptable: [
      "Any resident name, room number or date of birth left visible",
      "Reference confirming dates only, with no judgement or decisions",
      "Support-worker-level tasks presented as coordination",
      "Acting-up claims with no record to support them",
      "No example linked to the Aged Care Quality Standards",
      "Expired checks or training records in someone else's name",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé showing your level of responsibility, not just job titles",
      "Position descriptions for any senior roles",
      "Third-party report from a qualified supervisor or clinical manager",
      "Payslips, rosters and PAYG covering the claimed period",
      "NDIS Worker Screening and police check",
      "Current first aid and CPR certificates",
      "Dementia, palliative, medication and manual handling training records",
      "Existing CHC33021 qualification if held",
    ],
    steps: [
      {
        title: "Confirm consent and privacy rules",
        body: "Get written employer consent and confirm what may be shown — expect simulated demonstrations only.",
      },
      {
        title: "Choose examples that show decisions",
        body: "Pick cases where you assessed, planned, coordinated or escalated — not routine tasks alone.",
      },
      {
        title: "Write a short scenario per example",
        body: "Two to three de-identified sentences per example: the situation, what you decided, and the outcome.",
      },
      {
        title: "Organise by option with an index",
        body: "One folder per option plus an index page mapping each file to its task.",
      },
      {
        title: "Keep documents in their own folder",
        body: "Identification, references, pay records and training certificates sit separately from visual evidence.",
      },
      {
        title: "Prepare for a competency conversation",
        body: "Be ready to talk through judgement calls, escalation decisions and quality standards in detail.",
      },
    ],
    sendBack: [
      "Support-worker-level tasks only, with no planning or coordination",
      "Client identity left visible in any file",
      "No third-party report from a qualified supervisor",
      "Leadership claimed with no record to support it",
      "No example linked to the Aged Care Quality Standards",
      "Claimed period unsupported by pay records",
    ],
    faqs: [
      {
        q: "I do the senior work but my title is still support worker. Does it count?",
        a: "Yes, if your supervisor confirms it in a third-party report describing the actual responsibilities. Title matters less than documented practice — though for a migration assessment the title and pay level matter a great deal, so tell us if that is your goal.",
      },
      {
        q: "Can I use a care plan I wrote?",
        a: "Only fully de-identified and only with your employer's written consent. Never remove documents from a workplace system without permission.",
      },
      {
        q: "How much experience do assessors expect?",
        a: "As a guide, around three years in aged care with at least twelve months carrying senior responsibility. Less than that and we will usually recommend a gap-training plan first.",
      },
      {
        q: "Who makes the final decision?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not assess or issue the qualification.",
      }
    ],
  },

  "community-services": {
    slug: "community-services",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Case workers and case managers without the diploma",
      "Housing, family, youth and AOD workers with years of practice",
      "CHC42021 holders moving into case management",
      "Candidates preparing an ACWA or VETASSESS skills assessment file",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: "6 de-identified workplace photos",
    videoLine: "4 role-played interview clips (about 90 seconds each)",
    visualNote:
      "Almost nothing here is visual — the portfolio is built from de-identified case work and supervision records. Any demonstration is role-played, never with a real client, and needs written consent.",
    options: [
      {
        name: "Option A — Intake, assessment and case planning",
        mandatory: true,
        tasks: [
          "Intake and needs assessment",
          "Case plan with measurable goals",
          "Reviewing and closing a case",
          "Risk and safety planning",
        ],
      },
      {
        name: "Option B — Coordination, referral and advocacy",
        mandatory: true,
        tasks: [
          "Coordinating multiple providers",
          "Warm referral with follow-up",
          "Advocating with an agency or landlord",
          "Participating in a case conference",
        ],
      },
      {
        name: "Option C — Complex and specialist practice",
        mandatory: false,
        tasks: [
          "Trauma-informed crisis response",
          "Domestic and family violence work",
          "Mental health or AOD work within scope",
          "Culturally safe practice with First Nations or CALD clients",
        ],
      },
      {
        name: "Option D — Legal, ethical and professional practice",
        mandatory: false,
        tasks: [
          "Mandatory reporting",
          "Boundary and conflict management",
          "Confidentiality and consent",
          "Formal supervision and reflective practice",
        ],
      },
      {
        name: "Option E — Program, team and quality work",
        mandatory: false,
        tasks: [
          "Supervising or mentoring a junior worker or student",
          "Program design, funding applications or data reporting",
          "Community development or group work",
          "Continuous improvement and feedback processes",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Role-played intake with written consent — never a real client recording",
      "De-identified case notes plus consent documentation",
      "Supervisor report describing your professional judgement",
      "Supervision records and reflective log",
      "Duties described in your own words",
      "Payment evidence for the claimed case management work",
    ],
    unacceptable: [
      "Any real client names, addresses or details left visible",
      "Support-worker-level tasks presented as case management",
      "Duties-only reference with no judgement described",
      "Claimed supervision with no records",
      "Position description submitted as your own words",
      "Volunteer or placement hours counted as paid case management",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé in reverse-chronological order including caseload",
      "Position descriptions for each role",
      "Third-party report from a supervisor or program manager",
      "Supervision records and reflective practice log",
      "Payslips, contracts and PAYG covering the claimed period",
      "Working With Children Check plus police check",
      "NDIS Worker Screening where relevant",
      "Existing CHC qualifications, or overseas social work degree with translation",
      "Professional development records (trauma, mandatory reporting, cultural safety)",
    ],
    steps: [
      {
        title: "Decide whether migration is a goal",
        body: "If an ACWA or VETASSESS assessment is likely, build the portfolio to that standard from the start — this diploma pairs closely with ACWA.",
      },
      {
        title: "Get written consent",
        body: "Confirm in writing what may be demonstrated and recorded — role-play only, never real clients.",
      },
      {
        title: "Build role-played demonstrations",
        body: "Record intake and interview demonstrations with a consenting colleague.",
      },
      {
        title: "Write one de-identified case study per option",
        body: "Short scenarios showing assessment, planning, coordination and review — with all identifiers removed.",
      },
      {
        title: "Organise with an index",
        body: "Sort by option with an index mapping each file to its task; keep documents separate.",
      },
      {
        title: "Prepare for a competency conversation",
        body: "Expect questions on mandatory reporting, professional boundaries and risk management.",
      },
    ],
    sendBack: [
      "Client identity left visible in any file",
      "Support-worker-level work with no case management",
      "No supervisor report describing professional judgement",
      "No mandatory reporting example",
      "Pay records missing for the claimed period",
      "Placement or volunteer hours presented as paid experience",
    ],
    faqs: [
      {
        q: "Is this the qualification ACWA wants to see?",
        a: "For several welfare and community worker occupations, a diploma or higher in a community services field is the expected qualification. ACWA assesses the qualification and your paid employment together — we check your specific occupation before you lodge.",
      },
      {
        q: "Can I use my own case notes?",
        a: "Only with employer consent and only fully de-identified. A written case study you author yourself is usually safer and just as strong.",
      },
      {
        q: "How much experience is expected?",
        a: "As a guide, around three years of paid community services work, with at least twelve months carrying case responsibility.",
      },
      {
        q: "Who makes the final decision?",
        a: "An independent registered training organisation issues the qualification, and VETASSESS or ACWA decides a migration skills assessment. Skills Connect prepares and reviews your evidence only.",
      }
    ],
  },

  "disability-support": {
    slug: "disability-support",
    lastUpdated: "7 September 2026",
    whoFor: [
      "NDIS support workers without the Certificate IV",
      "Workers moving into key worker, team leader or coordinator roles",
      "SIL, community access and supported employment workers",
      "Overseas-trained care workers now in Australian disability roles",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: "8 de-identified workplace photos",
    videoLine: "4 video clips (about 60 seconds each)",
    visualNote:
      "No participant faces, homes, names or plans anywhere — use simulated demonstrations with de-identified notes and written provider consent.",
    options: [
      {
        name: "Option A — Person-centred practice and NDIS plans",
        mandatory: true,
        tasks: [
          "Translating NDIS goals into daily support",
          "Supporting choice and control in a decision",
          "Reviewing progress against a goal",
          "Adjusting support when a preference changes",
        ],
      },
      {
        name: "Option B — Positive behaviour support",
        mandatory: true,
        tasks: [
          "Following a behaviour support plan",
          "De-escalating and documenting an incident",
          "Identifying triggers and adjusting the environment",
          "Applying restrictive practices correctly",
        ],
      },
      {
        name: "Option C — Skill development and community",
        mandatory: false,
        tasks: [
          "Teaching daily living skills step by step",
          "Supporting employment, education or volunteering",
          "Community access and transport support",
          "Assistive technology and communication aids",
        ],
      },
      {
        name: "Option D — Personal care, health and safety",
        mandatory: false,
        tasks: [
          "Personal care with dignity (simulated)",
          "Manual handling and equipment use",
          "Mealtime and dysphagia support within scope",
          "Recognising a health change and escalating",
        ],
      },
      {
        name: "Option E — Rights and safeguarding",
        mandatory: false,
        tasks: [
          "Applying the NDIS Code of Conduct",
          "Recognising and reporting abuse or neglect",
          "Incident and reportable-incident awareness",
          "Supporting work with an advocate or guardian",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Supervisor report describing your person-centred practice",
      "Simulated demonstrations with no participant identifiable",
      "De-identified notes plus written consent",
      "An example where you supported a difficult choice with risk managed — not decided for the person",
      "Current NDIS Screening plus Orientation Module",
      "Payslips and rosters matching the claimed period",
    ],
    unacceptable: [
      "Any participant identity visible in any file",
      "Footage from a participant's home",
      "Behaviour support plan details left readable",
      "The worker deciding instead of the participant",
      "Expired screening or no Orientation Module",
      "Cash or informal work presented as employment",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé showing your work setting and hours",
      "Third-party report from a supervisor, key worker or manager",
      "Payslips, rosters and PAYG covering the claimed period",
      "NDIS Worker Screening clearance",
      "NDIS Orientation Module certificate",
      "Working With Children Check where relevant",
      "Current first aid and CPR certificates",
      "Manual handling, medication, epilepsy and dysphagia training records",
    ],
    steps: [
      {
        title: "Confirm provider consent",
        body: "Get written consent for simulated demonstrations — expect no real-participant footage at all.",
      },
      {
        title: "Choose choice-and-control examples",
        body: "Pick cases showing you supporting decisions, following plans and managing risk.",
      },
      {
        title: "De-identify everything",
        body: "Note what you removed from each file so the assessor can see the process was followed.",
      },
      {
        title: "Sort by option with an index",
        body: "One folder per option plus an index mapping files to tasks.",
      },
      {
        title: "Keep documents separate",
        body: "Screening, training, references and pay records sit in their own folder.",
      },
      {
        title: "Prepare for a competency conversation",
        body: "Expect questions on restrictive practices, reportable incidents and balancing risk with choice.",
      },
    ],
    sendBack: [
      "Participant identity visible anywhere in the file",
      "No NDIS or behaviour support plan evidence",
      "Managing the person rather than supporting them",
      "No NDIS Worker Screening clearance",
      "Missing supervisor report",
      "No pay records for the claimed period",
    ],
    faqs: [
      {
        q: "What if my provider will not allow any recording?",
        a: "That is common and it is not a barrier. A supervisor's third-party report plus simulated demonstrations away from participants is the standard route — tell us and we will structure the portfolio that way.",
      },
      {
        q: "Do I need the NDIS Worker Screening Check before I apply?",
        a: "You need it to work in the role, so assessors expect to see it. If it has lapsed, renew it before you lodge.",
      },
      {
        q: "I support family members. Does that count?",
        a: "Unpaid family care does not count as employment evidence. Paid work through a registered or self-managed arrangement can count if you have invoices and payment records.",
      },
      {
        q: "Who makes the final decision?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not assess or issue the qualification.",
      }
    ],
  },

  "individual-support": {
    slug: "individual-support",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Aged, home and disability care workers without an Australian certificate",
      "Overseas carers and nurses now in Australian support roles",
      "Workers whose employer requires CHC33021",
      "Candidates needing the qualification component for a VETASSESS or ACWA assessment",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: "8 de-identified workplace photos",
    videoLine: "4 video clips (about 60 seconds each)",
    visualNote:
      "Never photograph or film a client, their home or their records. Use simulated demonstrations only, with written consent.",
    options: [
      {
        name: "Option A — Personal care",
        mandatory: true,
        tasks: [
          "Showering, dressing and grooming",
          "Transfers using hoist, slide sheet or belt",
          "Repositioning and pressure care",
          "Continence support following the plan",
        ],
      },
      {
        name: "Option B — Following the individualised plan",
        mandatory: true,
        tasks: [
          "Reading and applying the support plan",
          "Reporting a change through the proper channel",
          "Progress notes and incident writing",
          "Handover to the next worker",
        ],
      },
      {
        name: "Option C — Empowerment and daily living",
        mandatory: false,
        tasks: [
          "Meal support to dietary requirements",
          "Community access and transport",
          "Supporting independence in daily tasks",
          "Medication assistance supervised and within scope",
        ],
      },
      {
        name: "Option D — Safety, infection control and manual handling",
        mandatory: false,
        tasks: [
          "Hand hygiene and PPE use",
          "Manual handling and mobility support",
          "Cleaning and waste management",
          "Hazard and falls response",
        ],
      },
      {
        name: "Option E — Legal and ethical practice",
        mandatory: false,
        tasks: [
          "Duty of care and dignity of risk",
          "Confidentiality",
          "Abuse and neglect reporting",
          "Working within scope and escalating",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Report from a qualified supervisor who watched the specific tasks",
      "Simulated demonstrations with no client identifiable",
      "De-identified notes with consent — never live system screenshots",
      "Narrated clips explaining your reasoning, not silent equipment footage",
      "Payslips and rosters matching the claimed hours",
      "Current screening and certificates in your own name",
    ],
    unacceptable: [
      "Any client face, name or room visible — this ends an assessment",
      "Generic good-worker letter with no specific tasks",
      "Live client record or system screenshots",
      "Silent clips or equipment-only footage",
      "Volunteer or family caring presented as paid employment",
      "Expired certificates or records in another name",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé showing your hours and settings",
      "Third-party or supervisor reference on company letterhead",
      "Payslips, rosters and PAYG covering the claimed period",
      "NDIS Worker Screening and Working With Children Check",
      "Police check",
      "Current first aid and CPR certificates",
      "Manual handling, infection control and medication training records",
      "Overseas nursing or care qualifications with translation",
    ],
    steps: [
      {
        title: "Get written permission",
        body: "Confirm with your employer that simulated demonstrations are acceptable — no client footage.",
      },
      {
        title: "Arrange the supervisor report early",
        body: "A qualified supervisor needs to observe and report on your specific tasks — book this first.",
      },
      {
        title: "De-identify everything",
        body: "Remove all client details from notes and records before filing.",
      },
      {
        title: "Name and sort by option",
        body: "One folder per option (for example OptionA_Transfer_Hoist_01.jpg) with a one-line description per task.",
      },
      {
        title: "Bundle paperwork separately",
        body: "Keep screening, references, pay records and training certificates in their own folder.",
      },
      {
        title: "Prepare for a competency conversation",
        body: "Expect questions on escalation, duty of care and dignity of risk.",
      },
    ],
    sendBack: [
      "Client identity visible in any file",
      "No supervisor report, or a report with no specific tasks",
      "Domestic or family caring presented as paid work",
      "Missing or expired screening, first aid or training",
      "No written plan evidence",
      "Hours that do not match payslips and rosters",
    ],
    faqs: [
      {
        q: "How can I show my skills if I cannot film clients?",
        a: "You do not need to. Assessors expect simulated demonstrations plus a supervisor's third-party report. Protecting client privacy is itself evidence that you understand the job.",
      },
      {
        q: "Do placement hours count?",
        a: "For the qualification, supervised placement hours can count and are often required. For a migration skills assessment they do not — only paid employment counts there.",
      },
      {
        q: "I trained as a nurse overseas. Does that help?",
        a: "It supports your application and may credit some units, but it does not replace evidence of current Australian workplace practice, which is what the assessor is judging.",
      },
      {
        q: "Who issues the qualification?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not assess or issue qualifications.",
      }
    ],
  },

  "health-services-assistance": {
    slug: "health-services-assistance",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Assistants in nursing and patient care assistants without the certificate",
      "Overseas nurses now in Australian assistant roles",
      "Ward, theatre and clinical support staff",
      "Aged care workers moving into acute or subacute settings",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: "8 de-identified simulation photos",
    videoLine: "4 video clips (about 60 seconds each)",
    visualNote:
      "Privacy is strictest here: no patients, clinical areas or charts. Use simulation rooms and manikins with written facility approval.",
    options: [
      {
        name: "Option A — Infection prevention and control",
        mandatory: true,
        tasks: [
          "Hand hygiene at the five moments",
          "Donning and doffing PPE in order",
          "Standard and transmission-based precautions",
          "Waste, linen and sharps management",
        ],
      },
      {
        name: "Option B — Assisting with nursing care",
        mandatory: true,
        tasks: [
          "Hygiene, mobility and comfort support (simulated)",
          "Vital signs within scope",
          "Feeding and fluid balance monitoring",
          "Pressure care and repositioning",
        ],
      },
      {
        name: "Option C — Manual handling and equipment",
        mandatory: false,
        tasks: [
          "Hoist, slide sheet and belt transfers",
          "Bed, wheelchair and trolley use",
          "Checking and reporting faulty equipment",
          "Falls prevention measures",
        ],
      },
      {
        name: "Option D — Communication and documentation",
        mandatory: false,
        tasks: [
          "Structured handover",
          "De-identified progress notes",
          "Reporting a change to the RN",
          "Incident and near-miss reporting",
        ],
      },
      {
        name: "Option E — Scope, safety and legal practice",
        mandatory: false,
        tasks: [
          "Recognising limits and escalating",
          "Confidentiality and privacy",
          "Emergency response within scope",
          "Work health and safety in clinical areas",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Third-party report signed by an RN who directly supervised you",
      "Simulation-room or manikin demonstrations with you identifiable",
      "De-identified charts plus written consent",
      "Narrated clips stating the standard and why you follow it",
      "Escalation examples where you recognised an out-of-scope task",
      "Current immunisation, CPR and manual handling records",
    ],
    unacceptable: [
      "Any patient, ward, bed board or live record visible",
      "Report signed by someone at your own level or in admin",
      "Live clinical record or screen photographs",
      "Silent clips or steps performed out of order",
      "Performing an RN-reserved task instead of escalating",
      "Missing immunisation, CPR or manual handling records",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé showing your setting and hours",
      "Third-party report signed by an RN supervisor (including registration number)",
      "Payslips, rosters and PAYG covering the claimed period",
      "Police check and Working With Children Check",
      "Immunisation and vaccination record",
      "Current first aid and CPR certificates",
      "Manual handling, infection control and basic life support records",
      "Overseas nursing qualifications with translation",
    ],
    steps: [
      {
        title: "Clear it with the facility",
        body: "Expect simulation-only evidence — get written approval for sim-room use first.",
      },
      {
        title: "Book the simulation room",
        body: "Plan demonstrations across infection control, nursing assistance and handling.",
      },
      {
        title: "Have the RN complete the report",
        body: "The supervising RN documents observed tasks with their registration number.",
      },
      {
        title: "De-identify everything",
        body: "Remove UR numbers, dates of birth, ward names and any patient details.",
      },
      {
        title: "Sort by option with an index",
        body: "One folder per option plus an index mapping files to tasks.",
      },
      {
        title: "Prepare for a competency conversation",
        body: "Expect questions on scope boundaries, escalation and recognising deterioration.",
      },
    ],
    sendBack: [
      "Patient identity visible in any file",
      "Report not signed by a registered nurse",
      "Out-of-scope clinical tasks performed instead of escalated",
      "Infection control steps wrong or out of order",
      "No immunisation or CPR records",
      "Pay records missing for the claimed period",
    ],
    faqs: [
      {
        q: "My hospital will not let me record anything. Can I still apply?",
        a: "Yes. Simulation demonstrations plus a registered nurse's third-party report are the standard evidence route in health settings.",
      },
      {
        q: "I am a nurse overseas. Does this qualification help me register here?",
        a: "No. Nursing registration is handled by AHPRA and the Nursing and Midwifery Board through their own process. HLT33115 recognises assistant-level work and is a different pathway — we can explain which applies to you.",
      },
      {
        q: "Do agency shifts count?",
        a: "Yes, if you have payslips and can obtain a supervisor report from a facility where you worked regularly.",
      },
      {
        q: "Who makes the final decision?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not assess or issue the qualification.",
      }
    ],
  },

  "mechanical-diagnosis": {
    slug: "mechanical-diagnosis",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Qualified technicians moving into senior diagnostic or workshop lead roles",
      "Holders of AUR30620 or an equivalent trade certificate",
      "Diagnosticians preparing licence or migration evidence",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote: `${STD_VISUAL_NOTE} AUR40216 is a post-trade qualification, so the bar is higher than a Certificate III: the assessor is looking for diagnostic reasoning — how you isolated the fault, what data you used, and proof the repair worked.`,
    options: [
      {
        name: "Option E — Complex diagnostic reasoning",
        mandatory: true,
        tasks: [
          "Intermittent fault diagnosis with scope or data logging",
          "Network or CAN-bus tracing",
          "A fault another technician could not solve",
          "Written diagnostic report with results",
        ],
      },
      {
        name: "Option A — Engine performance",
        mandatory: false,
        tasks: [
          "Compression and leak-down testing",
          "Fuel trim and sensor analysis",
          "Emission system fault diagnosis",
        ],
      },
      {
        name: "Option B — Electrical and electronic systems",
        mandatory: false,
        tasks: [
          "Voltage drop testing",
          "Module programming and configuration",
          "Wiring diagram work on a live fault",
        ],
      },
      {
        name: "Option C — Driveline and chassis",
        mandatory: false,
        tasks: [
          "Transmission diagnosis",
          "ABS and stability control faults",
          "Noise, vibration and harshness investigation",
        ],
      },
      {
        name: "Option D — Workshop leadership",
        mandatory: false,
        tasks: [
          "Supervising or mentoring an apprentice",
          "Writing a customer diagnostic report",
          "Quality-checking another technician's repair",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: STD_ACCEPTABLE,
    unacceptable: STD_UNACCEPTABLE,
    docs: [
      ...STD_DOCS,
      "Existing trade qualification or certificate",
      "Diagnostic reports with customer details removed",
    ],
    steps: STD_ORGANISE,
    sendBack: STD_SENDBACK,
    faqs: STD_FAQS,
  },

  "heavy-diesel-mechanic": {
    slug: "heavy-diesel-mechanic",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Diesel technicians on trucks, buses, trailers and plant without an Australian certificate",
      "Overseas-trained mechanics preparing for a skills assessment or licence",
      "Fleet and workshop staff working under supervision",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote: STD_VISUAL_NOTE,
    options: [
      {
        name: "Option E — Diagnostics and electronic systems",
        mandatory: true,
        tasks: [
          "Engine and ECU diagnosis with a scan tool",
          "Electrical and charging system faults",
          "Air brake system diagnosis",
          "Emission, DPF and SCR system work",
        ],
      },
      {
        name: "Option A — Diesel engine repair",
        mandatory: false,
        tasks: [
          "Cylinder head removal and refit",
          "Injector and fuel pump service",
          "Turbo removal and replacement",
          "Engine overhaul work",
        ],
      },
      {
        name: "Option B — Driveline and transmission",
        mandatory: false,
        tasks: [
          "Clutch replacement",
          "Gearbox and differential work",
          "Tail shafts and universal joints",
        ],
      },
      {
        name: "Option C — Braking, steering and suspension",
        mandatory: false,
        tasks: [
          "Air brake service and adjustment",
          "Steering box and linkage work",
          "Air-bag and leaf spring suspension",
        ],
      },
      {
        name: "Option D — Hydraulics, cooling and fabrication",
        mandatory: false,
        tasks: [
          "Hydraulic system diagnosis and repair",
          "Cooling system repair",
          "Welding and fabricating brackets",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: STD_ACCEPTABLE,
    unacceptable: STD_UNACCEPTABLE,
    docs: [
      ...STD_DOCS,
      "Heavy vehicle licence if held",
      "Plant, forklift or high-risk work licences if held",
    ],
    steps: STD_ORGANISE,
    sendBack: STD_SENDBACK,
    faqs: STD_FAQS,
  },

  "light-vehicle-mechanic": {
    slug: "light-vehicle-mechanic",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Mechanics with hands-on light vehicle experience but no Australian trade certificate",
      "Overseas-trained technicians preparing for a skills assessment or licence application",
      "Workshop staff who have been doing the work for years under someone else's licence",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote: STD_VISUAL_NOTE,
    options: [
      {
        name: "Option E — Advanced electronic diagnostics",
        mandatory: true,
        tasks: [
          "Electronic steering diagnostics",
          "Manual transmission repair",
          "Battery and charging system testing",
          "Scan tool diagnostics and fault code interpretation",
        ],
      },
      {
        name: "Option A — Core mechanical repair",
        mandatory: false,
        tasks: [
          "Engine repair or overhaul",
          "Brake system service and repair",
          "Fuel system work",
          "Steering and wheel alignment",
        ],
      },
      {
        name: "Option B — Electrical and climate systems",
        mandatory: false,
        tasks: [
          "Wiring harness repair",
          "Engine management diagnostics",
          "HVAC servicing and leak testing",
        ],
      },
      {
        name: "Option C — Driveline, batteries and inspections",
        mandatory: false,
        tasks: [
          "Suspension repair or replacement",
          "Clutch replacement",
          "Battery replacement and testing",
          "Safety inspection operations",
        ],
      },
      {
        name: "Option D — Hydraulics, cooling and fabrication",
        mandatory: false,
        tasks: [
          "Hydraulic brake system repair",
          "Cooling system diagnosis and repair",
          "Forced-induction (turbo or supercharger) repairs",
          "Welding and fabrication tasks",
        ],
      },
    ],
    acceptable: [
      "The vehicle, your tools, the component and the finished result in frame",
      "Workshop-based evidence when claiming workshop employment — not driveway photos",
      "Narrated clips explaining the diagnosis and the readings",
      "Safety glasses, correctly supported vehicles and safe practices throughout",
      "Original files with the date intact",
    ],
    unacceptable: [
      "Driveway photos presented as workshop employment",
      "Close-ups where the task cannot be identified",
      "Silent clips with no diagnosis or readings explained",
      "Unsupported vehicles or missing eye protection",
      "Stock images, manual screenshots or supplier photos",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé with every automotive role, dates and employer details",
      "Employment references on company letterhead listing the tasks performed",
      "Payslips, PAYG summaries or tax records covering the claimed period",
      "Overseas qualifications, transcripts or trade certificates, with certified translations",
      "Licences and tickets you hold (driver licence, AC refrigerant handling, white card)",
      "Job cards, invoices or work orders with your name on them",
    ],
    steps: STD_ORGANISE,
    sendBack: [
      "Option E tasks missing — the single most common reason this portfolio is returned",
      "The candidate is not identifiable in the images",
      "Evidence covers servicing only, with no diagnostic or repair depth",
      "No supporting employment evidence to confirm the work was paid and supervised",
      "Videos too short, or with no explanation of what is happening",
      "Files duplicated across options to make up the numbers",
    ],
    faqs: [
      {
        q: "What if I cannot take photos on site?",
        a: "Ask your supervisor or site manager for written permission first — most agree once they know it is for a qualification. If they refuse, talk to us: there are alternative evidence routes, including supervised practical assessment.",
      },
      {
        q: "Can I use work from a previous employer?",
        a: "Yes, if you can support it with references and pay records, but you will still need current visual evidence of your hands-on skill.",
      },
      {
        q: "How much experience do I need?",
        a: "As a rule of thumb, assessors look for at least three years of relevant paid experience for a Certificate III pathway. Less than that and we will usually recommend a gap-training plan first.",
      },
      {
        q: "Who makes the final decision?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not assess or issue the qualification.",
      }
    ],
  },

  bricklaying: {
    slug: "bricklaying",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Bricklayers with site experience and no Australian trade certificate",
      "Overseas-trained bricklayers preparing for a licence or skills assessment",
      "Blocklayers working under a licensed builder or contractor",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote: STD_VISUAL_NOTE,
    options: [
      {
        name: "Option E — Structural masonry",
        mandatory: true,
        tasks: [
          "Laying load-bearing block or brick walls",
          "Cavity wall construction with ties and flashing",
          "Reinforced blockwork with core filling",
          "Setting out from plans to a string line",
        ],
      },
      {
        name: "Option A — Footings and set-out",
        mandatory: false,
        tasks: [
          "Setting out a building footprint",
          "Laying the first course to level",
          "Damp-proof course installation",
        ],
      },
      {
        name: "Option B — Feature and finish work",
        mandatory: false,
        tasks: [
          "Arches, piers or feature bonds",
          "Face brickwork and joint finishing",
          "Cleaning down completed brickwork",
        ],
      },
      {
        name: "Option C — Mortar and materials",
        mandatory: false,
        tasks: [
          "Mixing mortar to specification",
          "Selecting and handling masonry materials",
          "Managing material stacking and site logistics",
        ],
      },
      {
        name: "Option D — Access, safety and repair",
        mandatory: false,
        tasks: [
          "Erecting and working from trestles or scaffold",
          "Repointing or repairing existing masonry",
          "Safe manual handling on site",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: STD_ACCEPTABLE,
    unacceptable: STD_UNACCEPTABLE,
    docs: [...STD_DOCS, "White card (construction induction) certificate", "Any scaffolding or working-at-heights ticket"],
    steps: STD_ORGANISE,
    sendBack: STD_SENDBACK,
    faqs: STD_FAQS,
  },

  carpentry: {
    slug: "carpentry",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Carpenters with years of site experience and no Australian trade certificate",
      "Overseas-trained carpenters preparing for a builder licence or skills assessment",
      "Formwork, framing or fit-out carpenters working under a licensed builder",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote: STD_VISUAL_NOTE,
    options: [
      {
        name: "Option E — Structural framing",
        mandatory: true,
        tasks: [
          "Wall frame construction and erection",
          "Roof framing and truss installation",
          "Floor framing and bearer/joist layout",
          "Setting out from plans",
        ],
      },
      {
        name: "Option A — Formwork and footings",
        mandatory: false,
        tasks: [
          "Setting formwork for slabs or footings",
          "Stripping and reusing formwork",
          "Levelling and setting out to a datum",
        ],
      },
      {
        name: "Option B — External cladding and decks",
        mandatory: false,
        tasks: [
          "Cladding installation",
          "Deck and pergola construction",
          "External stair construction",
        ],
      },
      {
        name: "Option C — Internal fit-out",
        mandatory: false,
        tasks: [
          "Door and window installation",
          "Skirting, architrave and trim",
          "Built-in cabinetry or lining",
        ],
      },
      {
        name: "Option D — Plans, safety and tooling",
        mandatory: false,
        tasks: [
          "Reading and applying construction plans",
          "Safe use of power and pneumatic tools",
          "Site set-out and measurement checks",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: STD_ACCEPTABLE,
    unacceptable: STD_UNACCEPTABLE,
    docs: [
      ...STD_DOCS,
      "White card (construction induction) certificate",
      "Any high-risk work licence (working at heights, scaffolding, EWP)",
    ],
    steps: STD_ORGANISE,
    sendBack: STD_SENDBACK,
    faqs: STD_FAQS,
  },

  concreting: {
    slug: "concreting",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Concreters with site experience and no Australian trade certificate",
      "Overseas-trained concreters preparing for a licence or skills assessment",
      "Kerb, slab or decorative concreters working under a contractor",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote: STD_VISUAL_NOTE,
    options: [
      {
        name: "Option E — Placing and finishing structural concrete",
        mandatory: true,
        tasks: [
          "Placing and screeding a slab",
          "Power float and trowel finishing",
          "Placing reinforcement to specification",
          "Curing and joint cutting",
        ],
      },
      {
        name: "Option A — Formwork and set-out",
        mandatory: false,
        tasks: [
          "Setting and stripping formwork",
          "Setting levels and falls",
          "Edge form and box-out installation",
        ],
      },
      {
        name: "Option B — Site preparation",
        mandatory: false,
        tasks: [
          "Excavation and compaction of base material",
          "Membrane and vapour barrier installation",
          "Setting out from plans",
        ],
      },
      {
        name: "Option C — Decorative and specialised finishes",
        mandatory: false,
        tasks: [
          "Exposed aggregate finishing",
          "Stencil, colour or stamped concrete",
          "Kerb and channel work",
        ],
      },
      {
        name: "Option D — Plant, safety and repair",
        mandatory: false,
        tasks: [
          "Operating concrete pump, mixer or saw",
          "Concrete repair and remediation",
          "Safe handling of wet concrete and silica dust control",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: STD_ACCEPTABLE,
    unacceptable: STD_UNACCEPTABLE,
    docs: [...STD_DOCS, "White card (construction induction) certificate", "Any plant operation or high-risk work licence"],
    steps: STD_ORGANISE,
    sendBack: STD_SENDBACK,
    faqs: STD_FAQS,
  },

  waterproofing: {
    slug: "waterproofing",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Waterproofers with site experience and no Australian trade certificate",
      "Overseas-trained applicators preparing for a licence or skills assessment",
      "Tilers and builders who do the waterproofing but hold no separate licence",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote: STD_VISUAL_NOTE,
    options: [
      {
        name: "Option E — Internal wet area membranes",
        mandatory: true,
        tasks: [
          "Applying membrane to bathroom floor and walls to AS 3740",
          "Bond breakers and corner detailing",
          "Floor waste and penetration sealing",
          "Flood testing and recording the result",
        ],
      },
      {
        name: "Option A — Surface preparation",
        mandatory: false,
        tasks: [
          "Grinding, patching and priming substrates",
          "Moisture testing before application",
          "Screed and fall correction",
        ],
      },
      {
        name: "Option B — External waterproofing",
        mandatory: false,
        tasks: [
          "Balcony or roof deck membrane installation",
          "Planter box or retaining wall tanking",
          "Below-ground tanking",
        ],
      },
      {
        name: "Option C — Remedial waterproofing",
        mandatory: false,
        tasks: [
          "Leak investigation and rectification",
          "Removing failed membrane and reinstating",
          "Injection or crack sealing",
        ],
      },
      {
        name: "Option D — Compliance and materials",
        mandatory: false,
        tasks: [
          "Selecting the correct membrane class",
          "Reading and applying the product data sheet",
          "Completing a compliance certificate or handover record",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: STD_ACCEPTABLE,
    unacceptable: STD_UNACCEPTABLE,
    docs: [
      ...STD_DOCS,
      "White card (construction induction) certificate",
      "Manufacturer product training or applicator accreditation certificates",
    ],
    steps: STD_ORGANISE,
    sendBack: STD_SENDBACK,
    faqs: STD_FAQS,
  },

  "painting-decorating": {
    slug: "painting-decorating",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Painters with years of experience and no Australian trade certificate",
      "Overseas-trained painters preparing for a licence or skills assessment",
      "Painters working under another contractor's licence",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote: STD_VISUAL_NOTE,
    options: [
      {
        name: "Option E — Surface preparation and coating systems",
        mandatory: true,
        tasks: [
          "Preparing and priming a new or previously coated surface",
          "Applying a full coating system to specification",
          "Spray application with set-up and masking",
          "Selecting a coating system for the substrate and exposure",
        ],
      },
      {
        name: "Option A — Interior finishing",
        mandatory: false,
        tasks: [
          "Cutting in and rolling walls and ceilings",
          "Enamel work on trim and doors",
          "Patching, filling and sanding",
        ],
      },
      {
        name: "Option B — Exterior work",
        mandatory: false,
        tasks: [
          "Exterior repaint including preparation and washing",
          "Rendered, masonry and timber substrate coating",
          "Roof or fence coating",
        ],
      },
      {
        name: "Option C — Special finishes and wall coverings",
        mandatory: false,
        tasks: [
          "Wallpaper and wall covering installation",
          "Decorative or texture finishes",
          "Protective or industrial coatings",
        ],
      },
      {
        name: "Option D — Safety, access and compliance",
        mandatory: false,
        tasks: [
          "Working safely from ladders, trestles and scaffold",
          "Lead paint and hazardous substance handling",
          "Waste, solvent and site clean-down",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: STD_ACCEPTABLE,
    unacceptable: STD_UNACCEPTABLE,
    docs: [...STD_DOCS, "White card (construction induction) certificate", "Any working-at-heights or EWP ticket"],
    steps: STD_ORGANISE,
    sendBack: STD_SENDBACK,
    faqs: STD_FAQS,
  },

  roofing: {
    slug: "roofing",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Roofers with site experience and no Australian trade certificate",
      "Overseas-trained roof tilers preparing for a licence or skills assessment",
      "Roofers working under a licensed contractor",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote: STD_VISUAL_NOTE,
    options: [
      {
        name: "Option E — Roof covering installation",
        mandatory: true,
        tasks: [
          "Installing roof tiles or sheeting to a new roof",
          "Setting battens and gauge",
          "Ridge, hip and valley installation",
          "Flashing and penetration weatherproofing",
        ],
      },
      {
        name: "Option A — Roof set-out and measurement",
        mandatory: false,
        tasks: [
          "Measuring and setting out a roof from plans",
          "Calculating material quantities",
          "Checking roof pitch and squareness",
        ],
      },
      {
        name: "Option B — Safety and access",
        mandatory: false,
        tasks: [
          "Installing edge protection or roof anchors",
          "Safe use of ladders, scaffold and harness",
          "Roof access planning and exclusion zones",
        ],
      },
      {
        name: "Option C — Repair and restoration",
        mandatory: false,
        tasks: [
          "Leak diagnosis and repair",
          "Repointing and bedding ridge capping",
          "Replacing damaged tiles or sheets",
        ],
      },
      {
        name: "Option D — Drainage and accessories",
        mandatory: false,
        tasks: [
          "Gutter and downpipe installation",
          "Sarking and insulation installation",
          "Ventilation and skylight installation",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: STD_ACCEPTABLE,
    unacceptable: STD_UNACCEPTABLE,
    docs: [...STD_DOCS, "White card (construction induction) certificate", "Working at heights and harness training records"],
    steps: STD_ORGANISE,
    sendBack: STD_SENDBACK,
    faqs: STD_FAQS,
  },

  "wall-floor-tiling": {
    slug: "wall-floor-tiling",
    lastUpdated: "7 September 2026",
    whoFor: [
      "Tilers with years of experience and no Australian trade certificate",
      "Overseas-trained tilers preparing for a licence or skills assessment",
      "Tilers working under another contractor's licence",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote: STD_VISUAL_NOTE,
    options: [
      {
        name: "Option E — Wet area tiling",
        mandatory: true,
        tasks: [
          "Tiling over waterproof membrane in a bathroom or laundry",
          "Setting falls to the floor waste",
          "Screed bed preparation",
          "Sealing and finishing internal corners and junctions",
        ],
      },
      {
        name: "Option A — Substrate preparation",
        mandatory: false,
        tasks: [
          "Levelling and patching floors",
          "Sheeting and priming walls",
          "Checking substrate moisture and flatness",
        ],
      },
      {
        name: "Option B — Floor tiling",
        mandatory: false,
        tasks: [
          "Setting out a floor from centre lines",
          "Large-format tile installation",
          "Movement joint installation",
        ],
      },
      {
        name: "Option C — Wall tiling and finishes",
        mandatory: false,
        tasks: [
          "Wall set-out and cutting around fixtures",
          "Mosaic or feature tile work",
          "Grouting, silicone and clean-down",
        ],
      },
      {
        name: "Option D — Tools, materials and safety",
        mandatory: false,
        tasks: [
          "Wet saw and tile cutter operation",
          "Selecting adhesive for the substrate and tile",
          "Dust control and safe manual handling",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: STD_ACCEPTABLE,
    unacceptable: STD_UNACCEPTABLE,
    docs: [...STD_DOCS, "White card (construction induction) certificate", "Any waterproofing training records or product certifications"],
    steps: STD_ORGANISE,
    sendBack: STD_SENDBACK,
    faqs: STD_FAQS,
  },

  "fabrication-trade": {
    slug: "fabrication-trade",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Boilermakers, welders and metal fabricators without an Australian trade certificate",
      "Overseas-trained fabricators preparing for a TRA skills assessment or workplace registration",
      "Workshop staff performing fabrication, cutting and welding under supervision",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote: STD_VISUAL_NOTE,
    options: [
      {
        name: "Category A — Structural and sheet metal fabrication",
        mandatory: true,
        tasks: [
          "Marking out structural steel sections, plates or sheet metal from drawings",
          "Thermal cutting (oxy-acetylene, plasma) or mechanical cutting (guillotine, cropper)",
          "Operating shaping equipment (press brakes, rolls, section benders, notchers)",
          "Assembling, tack-welding and squaring structural assemblies, tanks or hoppers",
        ],
      },
      {
        name: "Category B — Welding operations (MMAW, GMAW, GTAW)",
        mandatory: true,
        tasks: [
          "Setting up welding machines (gas, wire and electrodes, voltage and wire speed)",
          "GMAW (MIG), MMAW (stick) or GTAW (TIG) welding in flat, vertical or overhead positions",
          "Pre-heating, interpass temperature checks and joint preparation",
          "Inspecting weld quality and preparing surfaces for finishing",
        ],
      },
      {
        name: "Category C — Workplace safety, quality and measurement",
        mandatory: true,
        tasks: [
          "Full protective gear (welding helmet, leather spats, respirator, ear protection)",
          "Interpreting engineering drawings, weld symbols and bills of materials",
          "Measuring with verniers, height gauges, squares and angle finders",
          "Visual weld defect inspection and non-destructive checks",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Your face and hands visible while fabricating or welding",
      "You actively using the plasma cutter, MIG welder, press brake or grinder",
      "Full PPE: leather jacket, auto-darkening helmet, steel caps, glasses, ear protection",
      "Clear lighting and narrated clips explaining the task and standard",
      "Original files with the date intact",
    ],
    unacceptable: [
      "Posing beside a finished structure with no proof you built it",
      "Anonymous hands-only, dark arc shots or back-of-head footage",
      "No PPE or no fume extraction visible",
      "Dark or unidentifiable photos",
      "Silent clips with no explanation",
      "Screenshots, stock images or supplier brochure photos",
    ],
    docs: [
      ...STD_DOCS,
      "High-risk work licence for welding or other applicable licences, if held",
    ],
    steps: STD_ORGANISE,
    sendBack: STD_SENDBACK,
    faqs: STD_FAQS,
  },

  "cabinet-making": {
    slug: "cabinet-making",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Cabinet makers and joinery tradespeople without an Australian qualification",
      "Overseas-trained wood machinists and furniture makers",
      "Workshop staff building kitchens, bathrooms, built-in robes and commercial fit-outs",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote:
      "Capture evidence during real jobs and spread it across projects — one kitchen must not dominate the portfolio.",
    options: [
      {
        name: "Category A — Machining and material preparation",
        mandatory: true,
        tasks: [
          "Reading cutting lists, drawings and specifications",
          "Setting up and using table saws, panel saws, edge banders and CNC routers",
          "Selecting timber, board and hardware for a job",
          "Calculating quantities and minimising waste",
        ],
      },
      {
        name: "Category B — Assembly and construction",
        mandatory: true,
        tasks: [
          "Cutting and edging cabinet components to size",
          "Drilling, dowelling, screwing and gluing cabinet boxes",
          "Fitting drawers, hinges, handles, runners and adjustable shelves",
          "Installing kitchens, vanities, wardrobes or commercial joinery on site",
        ],
      },
      {
        name: "Category C — Finishing, safety and quality",
        mandatory: true,
        tasks: [
          "Sanding, sealing, painting or applying laminate and veneer finishes",
          "Using dust extraction, PPE and safe lifting",
          "Checking square, level and tolerances against drawings",
          "Repairing defects and completing quality sign-off",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Your face and hands visible operating machinery or assembling joinery",
      "Narrated clips showing machine set-up, cutting and assembly",
      "Correct safety glasses, hearing protection, dust mask and steel caps",
      "Original files with metadata matching your employment period",
    ],
    unacceptable: [
      "Completed kitchens with no person or proof you built them",
      "Silent clips or still photos only",
      "Missing machine guards, dust extraction or PPE",
      "Supplier brochures, showroom or internet images",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé with every cabinet-making role, employer and dates",
      "Employment reference on company letterhead confirming duties and supervision",
      "Payslips, tax records or PAYG summaries",
      "Overseas trade certificates or transcripts with translations if needed",
      "Sample cutting lists, job cards or invoices showing your work",
      "Forklift or other relevant licences, if held",
    ],
    steps: [
      {
        title: "Capture evidence during real jobs",
        body: "Spread demonstrations across projects — one kitchen must not dominate the portfolio.",
      },
      {
        title: "Name files clearly",
        body: "Use a pattern like CategoryA_PanelSaw_JobName_01.jpg so each file maps to its task.",
      },
      {
        title: "Group by category",
        body: "One folder per category, with documents kept in a separate folder.",
      },
      {
        title: "Add a task log spreadsheet",
        body: "Record the job, task, date and file names — this turns images into assessable evidence.",
      },
      {
        title: "Submit and remain contactable",
        body: "The assessor may request a video interview or practical demonstration.",
      },
    ],
    sendBack: [
      "Missing evidence from one of the three mandatory categories",
      "Finished-product photos only, with no proof you did the work",
      "References lacking cabinet-making duty detail",
      "Videos too short or without explanation",
      "Safety breaches visible in the footage",
      "The same photos counted more than once",
    ],
    faqs: [
      {
        q: "What if I cannot take photos on site?",
        a: "Ask your supervisor or site manager for written permission first — most agree once they know it is for a qualification. If they refuse, talk to us: there are alternative evidence routes, including supervised practical assessment.",
      },
      {
        q: "Can I use work from a previous employer?",
        a: "Yes, if you can support it with references and pay records, but you will still need current visual evidence of your hands-on skill.",
      },
      {
        q: "How much experience do I need?",
        a: "As a rule of thumb, assessors look for at least three years of relevant paid experience for a Certificate III pathway. Less than that and we will usually recommend a gap-training plan first.",
      },
      {
        q: "Who makes the final decision?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not assess or issue the qualification.",
      }
    ],
  },

  "glass-and-glazing": {
    slug: "glass-and-glazing",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Glaziers and glass installers without an Australian qualification",
      "Overseas-trained glass tradespeople seeking recognition",
      "Workshop staff cutting, processing and fabricating glass and aluminium frames",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote:
      "Capture evidence across several jobs — residential, commercial and shopfront work. One shower screen must not dominate the portfolio. Show safe handling clearly in every clip.",
    options: [
      {
        name: "Category A — Measuring, cutting and glass processing",
        mandatory: true,
        tasks: [
          "Site measuring and recording dimensions for glass and frames",
          "Cutting, breaking out and edge-working float, laminated or toughened glass",
          "Selecting glass type and thickness against AS 1288 requirements",
          "Fabricating or assembling aluminium and timber frames",
        ],
      },
      {
        name: "Category B — Installation and glazing",
        mandatory: true,
        tasks: [
          "Removing broken or damaged glass safely",
          "Installing windows, doors, shopfronts, mirrors and shower screens",
          "Fitting beads, gaskets, setting blocks and hardware",
          "Applying silicone, sealants and weatherproofing",
        ],
      },
      {
        name: "Category C — Safety, handling and quality",
        mandatory: true,
        tasks: [
          "Manual handling: lifters, trolleys and team lifts for large panels",
          "Cut-resistant gloves, eye protection and safety footwear",
          "Working at heights, on ladders or from scaffolds safely",
          "Checking plumb, level and tolerances and completing quality sign-off",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Your face and hands visible cutting, carrying or installing glass",
      "Narrated clips showing measuring, cutting, handling and installation",
      "Cut-resistant gloves, eye protection and correct lifting in every clip",
      "Original files with metadata matching your employment period",
    ],
    unacceptable: [
      "Finished shopfronts with no person or proof you installed them",
      "Silent clips or still photos only",
      "Bare-handed carrying, unsupported panels or no fall protection",
      "Supplier catalogue or internet images",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé listing every glazing role, employer and dates",
      "Employment reference on company letterhead confirming duties and supervision",
      "Payslips, tax records or PAYG summaries",
      "Overseas trade certificates or transcripts with translations if needed",
      "Job cards, dockets or invoices showing glazing work completed",
      "White card, working-at-heights, EWP or forklift tickets, if held",
    ],
    steps: [
      {
        title: "Capture across several jobs",
        body: "Cover residential, commercial and shopfront work — one job type must not dominate.",
      },
      {
        title: "Show safe handling clearly",
        body: "Lifting, carrying, cutting and PPE must be visible in your footage.",
      },
      {
        title: "Name files clearly",
        body: "Use a pattern like CategoryB_ShopfrontInstall_JobName_01.jpg so each file maps to its task.",
      },
      {
        title: "Add a task log spreadsheet",
        body: "Record the job, task, date and file names to turn images into assessable evidence.",
      },
      {
        title: "Submit and stay contactable",
        body: "The assessor may request a video interview or practical demonstration.",
      },
    ],
    sendBack: [
      "Missing evidence from one of the three mandatory categories",
      "Finished-product photos only, with no proof of your work",
      "Unsafe handling, missing gloves or no fall protection visible",
      "References lacking glazing duty detail",
      "Videos too short or without explanation",
      "The same photos counted more than once",
    ],
    faqs: [
      {
        q: "Do I need to show toughened and laminated glass?",
        a: "Show the glass types you work with regularly. Evidence covering more than one type strengthens the portfolio, especially safety glass to AS 1288.",
      },
      {
        q: "I mostly do auto glass — does that count?",
        a: "Automotive glazing is a different qualification pathway. Speak with us first so we can point you to the right qualification before you build a portfolio.",
      },
      {
        q: "Can factory processing work count?",
        a: "Yes. Cutting, edge-working, toughening and assembly are valid. Try to add some installation evidence for breadth.",
      },
      {
        q: "Who assesses the portfolio?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },

  "property-agency-management": {
    slug: "property-agency-management",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Senior sales agents and property managers stepping up to licensee in charge",
      "Agency principals and business owners without a current Australian diploma",
      "Team leaders responsible for trust accounts, compliance and staff supervision",
    ],
    evidenceHeading: "1. What the assessor expects to see",
    photoLine: "10 redacted workplace photos",
    videoLine: "5 screen-recording clips (about 60 seconds each)",
    visualNote:
      "This is mostly a document portfolio: redacted screen recordings of trust, CRM and reporting systems, plus a few clips of team meetings or training sessions with staff consent.",
    options: [
      {
        name: "Category A — Agency leadership and business management",
        mandatory: true,
        tasks: [
          "Preparing business plans, budgets and revenue forecasts",
          "Recruiting, inducting and supervising sales or property management staff",
          "Setting performance targets and conducting team reviews",
          "Managing marketing strategy and agency brand positioning",
        ],
      },
      {
        name: "Category B — Trust accounting and risk management",
        mandatory: true,
        tasks: [
          "Overseeing trust account receipts, disbursements and monthly reconciliations",
          "Preparing for or responding to a trust account audit",
          "Maintaining risk registers, insurances and complaint handling records",
          "Implementing anti-money-laundering and privacy procedures",
        ],
      },
      {
        name: "Category C — Compliance, legislation and reporting",
        mandatory: true,
        tasks: [
          "Applying state property legislation, codes of conduct and licensing conditions",
          "Developing agency policies, procedures and staff training material",
          "Managing tribunal matters, disputes and disciplinary processes",
          "Reporting agency performance to owners, directors or franchisors",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Redacted reconciliations, audit responses and reports you prepared and signed",
      "Self-authored policies with version numbers, dates and your name",
      "Director or franchisor references confirming your authority",
      "Redacted meeting minutes, reviews and rosters",
    ],
    unacceptable: [
      "Blank templates or another manager's reports presented as yours",
      "Generic industry-association downloads with no link to your work",
      "References confirming dates only",
      "Screenshots with live client, bank or staff information still visible",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé with management responsibilities highlighted",
      "Employment references from directors, franchisors or licensed principals",
      "Payslips, tax records or PAYG summaries",
      "Current or expired agent registration, licence or licensee-in-charge certificates",
      "Redacted trust account reports, audit correspondence and agency policies",
      "Evidence of continuing professional development in property legislation",
    ],
    steps: [
      {
        title: "Lead with management evidence",
        body: "Show yourself as the decision-maker — listings and transactions alone are not enough at diploma level.",
      },
      {
        title: "Cover money and people",
        body: "Include trust oversight and team supervision, not just sales results.",
      },
      {
        title: "Redact before submitting",
        body: "Remove names, addresses, prices, bank details and staff personal information from every file.",
      },
      {
        title: "Map each document to a unit",
        body: "Organise by leadership, trust and risk, and compliance folders with an index.",
      },
      {
        title: "Prepare for questioning",
        body: "Expect detailed questions on audits, complaints and shortfalls in your records.",
      },
    ],
    sendBack: [
      "Transaction work only, with no management or supervision",
      "No trust accounting oversight evidence",
      "Documents still containing personal information",
      "No reference confirming your authority",
      "Policies clearly written by someone else",
      "Evidence outside the claimed employment period",
    ],
    faqs: [
      {
        q: "Do I need to have been a licensee in charge already?",
        a: "Not necessarily, but you must show you performed management-level tasks such as supervising staff, overseeing trust accounts or handling compliance under delegation.",
      },
      {
        q: "What if my agency uses an external bookkeeper for trust?",
        a: "Show your oversight role — reviewing reconciliations, approving disbursements, responding to audits or liaising with the auditor.",
      },
      {
        q: "Is Certificate IV a prerequisite?",
        a: "Requirements vary by state and RTO. Many candidates hold or are granted CPP41419 first; discuss your pathway before lodging.",
      },
      {
        q: "Who makes the final decision?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },

  "real-estate-practice": {
    slug: "real-estate-practice",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Real estate sales agents and property managers without a current Australian qualification",
      "Overseas property professionals seeking recognition",
      "Assistant agents and administrators performing licensed work under supervision",
    ],
    evidenceHeading: "1. What the assessor expects to see",
    photoLine: "10 redacted workplace photos",
    videoLine: "5 screen-recording clips (about 60 seconds each)",
    visualNote:
      "This is largely a document-based portfolio — a small number of photos and screen recordings support the paperwork, with all client details redacted.",
    options: [
      {
        name: "Category A — Sales and leasing transactions",
        mandatory: true,
        tasks: [
          "Listing properties, preparing agency agreements and marketing plans",
          "Conducting inspections, negotiating offers and exchanging contracts",
          "Completing tenancy applications, lease agreements and condition reports",
          "Managing bonds, rent arrears and tenancy renewals",
        ],
      },
      {
        name: "Category B — Property management and compliance",
        mandatory: true,
        tasks: [
          "Maintaining landlord and tenant records in the trust accounting system",
          "Arranging maintenance, quotes and contractor payments",
          "Issuing breach notices, termination notices and tribunal documentation",
          "Applying legislation, codes of conduct and agency policies",
        ],
      },
      {
        name: "Category C — Client communication and administration",
        mandatory: true,
        tasks: [
          "Preparing comparative market analyses and appraisal reports",
          "Communicating with vendors, landlords, tenants and buyers in writing",
          "Using real estate CRM software and trust accounting platforms",
          "Attending training and team meetings on compliance updates",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Redacted agency agreements, leases and condition reports with your name or signature",
      "Redacted CRM, trust and maintenance screenshots from your own work",
      "Licensed principal references describing your duties",
      "Originals dated inside your employment period",
    ],
    unacceptable: [
      "Blank templates or sample documents with no link to your work",
      "Unredacted client, bank or address details in screenshots",
      "Title-and-dates-only references",
      "Post-hoc documents or training exercises presented as workplace evidence",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé listing every real estate role, agency and dates",
      "Employment references from licensed principals or managers",
      "Payslips, tax records or PAYG summaries",
      "Agent registration or licence certificates, current or expired",
      "Redacted listing agreements, lease documents, condition reports and correspondence",
      "Evidence of professional development or compliance training",
    ],
    steps: [
      {
        title: "Gather redacted workplace documents",
        body: "Cover sales, leasing and management work you personally handled.",
      },
      {
        title: "Match each document to a unit",
        body: "Map every file to the competency it evidences, with an index.",
      },
      {
        title: "Include supervisory confirmation",
        body: "A licensed principal confirms the work was yours and supervised.",
      },
      {
        title: "Organise by category",
        body: "Separate folders for sales and leasing, management, and client administration.",
      },
      {
        title: "Submit and respond promptly",
        body: "Expect follow-up questions on legislation and trust handling.",
      },
    ],
    sendBack: [
      "Too few redacted documents showing actual transactions or management",
      "Documents still containing client personal or financial information",
      "No supervisory reference from a licensed principal or manager",
      "Evidence limited to one function, such as sales only",
      "Outdated documents outside the claimed period",
      "Templates or training exercises submitted as workplace evidence",
    ],
    faqs: [
      {
        q: "Can I use documents from my current agency?",
        a: "Yes, but you must redact client names, addresses, sale prices, bank details and any other identifying information. Your agency principal should also give permission.",
      },
      {
        q: "What if I only do property management, not sales?",
        a: "That is fine. Your portfolio should focus on property management tasks, but try to include some evidence of leasing, renewals and tribunal processes to show breadth.",
      },
      {
        q: "Do I need to be currently registered?",
        a: "Not necessarily, but you will need evidence that you performed the work under a licensed agency and supervision during the claimed period.",
      },
      {
        q: "Who makes the final decision?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },

  "beauty-therapy": {
    slug: "beauty-therapy",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Beauty therapists working in salons, day spas or clinics",
      "Overseas-trained therapists seeking Australian recognition",
      "Therapists performing facials, body treatments, waxing and specialised services",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: "15 photos of demonstrations on consenting models",
    videoLine: "15 video clips (about 45 seconds each)",
    visualNote:
      "Use consenting models or colleagues — never paying clients without written consent. Blur faces and remove names and phone numbers from every file.",
    options: [
      {
        name: "Category A — Facial and skin treatments",
        mandatory: true,
        tasks: [
          "Skin analysis, consultation and contraindication checks",
          "Cleansing, exfoliation, extraction, mask and massage routines",
          "Electrical facial equipment (galvanic, high frequency, microdermabrasion)",
          "Treatment plans and home-care programs",
        ],
      },
      {
        name: "Category B — Body, hair removal and specialised services",
        mandatory: true,
        tasks: [
          "Body massage, wraps, scrubs or spa treatments",
          "Waxing, tinting, lash and brow services",
          "Day, evening and occasion makeup",
          "Manicure, pedicure and nail treatments where offered",
        ],
      },
      {
        name: "Category C — Clinic operations, safety and client care",
        mandatory: true,
        tasks: [
          "Client records, consent forms and treatment histories",
          "Equipment sterilisation and infection control",
          "Stock management, retail recommendations and product knowledge",
          "Bookings, payments and client follow-up",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Demonstrations on consenting models with identifiers obscured",
      "Narrated consultation, technique and aftercare in every clip",
      "Supervisor-signed treatment logs and de-identified records",
      "Gloves, fresh linen, sanitised tools and correct posture throughout",
    ],
    unacceptable: [
      "Paying-client photos without documented consent",
      "Filtered social-media clips showing no technique",
      "Self-written treatment lists with no verification",
      "Missing hygiene steps or contraindication checks",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé listing every beauty role, salon or clinic, and dates",
      "Employment reference from a salon owner or clinic manager confirming services",
      "Payslips, tax records or PAYG summaries",
      "Overseas beauty qualifications or transcripts with translations if needed",
      "Redacted treatment records or service logs",
      "Infection control, product or equipment training certificates",
    ],
    steps: [
      {
        title: "Plan demonstrations across categories",
        body: "Cover facials, body treatments and clinic operations over several sessions.",
      },
      {
        title: "Protect client privacy",
        body: "Blur faces and remove names and phone numbers from every file.",
      },
      {
        title: "Add a signed treatment log",
        body: "A supervisor-signed monthly record verifies the services you performed.",
      },
      {
        title: "Name files by task",
        body: "Use a pattern like CategoryA_Facial_Microdermabrasion_01.mp4 for each file.",
      },
      {
        title: "Submit and attend follow-up",
        body: "Expect a live demonstration or interview on contraindications and skin science.",
      },
    ],
    sendBack: [
      "Missing demonstrations from the facial, body or clinic operations categories",
      "Client images without documented consent",
      "No supervisor reference confirming your treatments",
      "Videos not showing technique, or omitting consultation and aftercare",
      "Hygiene or contraindication failures visible",
      "Documents that cannot be linked to the claimed employment period",
    ],
    faqs: [
      {
        q: "Can I use models instead of clients?",
        a: "Yes. Consenting models, colleagues or yourself are preferred. The guide is designed to avoid paying-client photography entirely.",
      },
      {
        q: "What if my salon does not have electrical equipment?",
        a: "Show the equipment you do use and discuss gaps with us early — a short gap-training or supervised demonstration may be arranged.",
      },
      {
        q: "Is Certificate III required first?",
        a: "Not always. Many candidates are recognised at diploma level directly where their experience covers the full scope.",
      },
      {
        q: "Who assesses the portfolio?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },

  hairdressing: {
    slug: "hairdressing",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Hairdressers and stylists without an Australian trade certificate",
      "Overseas-trained hairdressers preparing for skills assessment or salon employment",
      "Salon staff performing cuts, colours, chemical services and styling under supervision",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: "15 photos of demonstrations on mannequins or consenting models",
    videoLine: "15 video clips (about 45 seconds each)",
    visualNote:
      "Use mannequin heads or consenting colleagues — never paying clients without consent. Blur or crop faces and remove names and phone numbers.",
    options: [
      {
        name: "Category A — Cutting and styling",
        mandatory: true,
        tasks: [
          "Consulting and analysing hair condition and face shape",
          "Precision cuts, layering, texturising and clipper work",
          "Blow-drying, setting, curling and finishing with hot tools",
          "Up-styles, braids and formal finishes",
        ],
      },
      {
        name: "Category B — Colour and chemical services",
        mandatory: true,
        tasks: [
          "Skin and strand tests before colour and chemical services",
          "Semi, demi and permanent colour, foils and balayage",
          "Regrowth touch-ups, toning and colour correction",
          "Straightening, perming and relaxing hair safely",
        ],
      },
      {
        name: "Category C — Salon operations, safety and client service",
        mandatory: true,
        tasks: [
          "Greeting clients, maintaining appointment records and processing payments",
          "Cleaning and sterilising tools, colour stock control and mixing ratios",
          "PPE and infection control procedures",
          "Retail product and home-care recommendations",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Mannequin or consenting-model demonstrations with before-and-after shots",
      "Narrated clips showing sectioning, angles, colour work and results",
      "Supervisor-signed logbooks and service records",
      "Gloves, gowns and clean, organised workstations",
    ],
    unacceptable: [
      "Anonymous or child client photos without consent",
      "Silent or heavily filtered social-media clips",
      "Self-declared service lists with no verification",
      "Colour or chemical work without skin tests or PPE",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé listing every hairdressing role, salon and dates",
      "Employment reference from a salon owner or senior stylist confirming services",
      "Payslips, tax records or PAYG summaries",
      "Overseas hairdressing certificates or transcripts with translations if needed",
      "Redacted salon appointment records or service logs",
      "Infection-control or product training records",
    ],
    steps: [
      {
        title: "Plan demonstrations across all categories",
        body: "Cover cutting, colouring and salon operations on mannequins or models over several sessions.",
      },
      {
        title: "Keep client details private",
        body: "Blur or crop faces; no names or phone numbers in any file.",
      },
      {
        title: "Add a supervisor-signed service log",
        body: "A typical month of services, signed by your salon owner or senior stylist.",
      },
      {
        title: "Name files by task",
        body: "Use a pattern like CategoryB_ColourApplication_Balayage_01.mp4 for each file.",
      },
      {
        title: "Submit and attend follow-up",
        body: "Expect a live demonstration or interview on colour theory and safety.",
      },
    ],
    sendBack: [
      "Missing demonstrations from the cutting, colouring or salon operations categories",
      "Client photos without documented consent",
      "No supervisor or salon owner reference",
      "Videos that do not show technique clearly, or are heavily edited",
      "Unsafe chemical practices or missing skin tests",
      "Documents that cannot be linked to the claimed period",
    ],
    faqs: [
      {
        q: "Can I use social media videos?",
        a: "Only if they clearly show your technique, are unfiltered and include a voice-over explaining what you are doing. Most social clips are too short or stylised for assessment.",
      },
      {
        q: "What if I do not have paying client consent?",
        a: "Use mannequin heads, yourself or consenting friends/family. The guide is designed to work without paying-client photography.",
      },
      {
        q: "How much salon experience do I need?",
        a: "Most RTOs expect at least two to three years of paid salon experience for a Certificate III RPL pathway.",
      },
      {
        q: "Who assesses the portfolio?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },

  "salon-management": {
    slug: "salon-management",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Salon managers and assistant managers in hair or beauty salons",
      "Salon and clinic owners running the business day to day",
      "Senior stylists or therapists responsible for staff, stock and performance",
    ],
    evidenceHeading: "1. What the assessor expects to see",
    photoLine: "10 redacted workplace photos",
    videoLine: "5 clips of team meetings or training sessions (about 60 seconds each)",
    visualNote:
      "This is mostly a document portfolio. A few clips of team meetings or training sessions, with staff consent, support the paperwork.",
    options: [
      {
        name: "Category A — Business planning and marketing",
        mandatory: true,
        tasks: [
          "Preparing salon business, marketing or promotional plans",
          "Running campaigns, loyalty programs or social media promotions",
          "Setting service pricing and retail strategy",
          "Analysing client retention, rebooking and average spend",
        ],
      },
      {
        name: "Category B — Financial and stock management",
        mandatory: true,
        tasks: [
          "Preparing budgets, monitoring takings and managing wage costs",
          "Ordering stock, managing suppliers and completing stocktakes",
          "Setting and reviewing individual and team sales targets",
          "Reconciling daily takings and reporting on performance",
        ],
      },
      {
        name: "Category C — People, safety and compliance",
        mandatory: true,
        tasks: [
          "Recruiting, inducting, rostering and appraising staff",
          "Running team training on technique, product or service standards",
          "Maintaining WHS, infection-control and incident records",
          "Handling client complaints and resolving disputes",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Rosters, budgets, stocktakes and marketing plans you prepared, with your name and dates",
      "Redacted training, appraisal and complaint records you completed",
      "Owner or director reference confirming your authority",
      "Performance reports showing a change you made and its result",
    ],
    unacceptable: [
      "Blank or franchisor templates never adapted to your salon",
      "Documents with staff surnames, pay rates or client details still visible",
      "References confirming dates only",
      "Takings screenshots with no context or explanation",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé listing every salon role and dates, highlighting management duties",
      "Employment reference from a salon owner, director or area manager",
      "Payslips, tax records, PAYG summaries or business ownership records",
      "Trade qualifications in hairdressing or beauty, if held, with translations if needed",
      "Redacted rosters, budgets, stocktakes, marketing plans and training records",
      "WHS and infection-control documentation for the salon",
    ],
    steps: [
      {
        title: "Lead with management evidence",
        body: "Show decisions, budgets and team outcomes — service work alone is not enough at diploma level.",
      },
      {
        title: "Cover money and people",
        body: "Include financial management and staff supervision, not just rosters.",
      },
      {
        title: "Redact before submitting",
        body: "Remove staff surnames, pay rates and client details from every file.",
      },
      {
        title: "Organise by category",
        body: "Separate folders for planning and marketing, financial and stock, and people and compliance.",
      },
      {
        title: "Prepare for a competency conversation",
        body: "Expect questions on budgets, staffing decisions and complaint handling.",
      },
    ],
    sendBack: [
      "Service work only, with no management evidence",
      "No financial or stock management evidence",
      "Personal information left unredacted",
      "No reference confirming your authority",
      "Franchisor templates presented as your own work",
      "Evidence limited to a short period with no sustained management",
    ],
    faqs: [
      {
        q: "Do I need a trade qualification first?",
        a: "Not always. Salon Management focuses on business skills, so experienced managers without a trade certificate can still be assessed.",
      },
      {
        q: "I own a small one-chair salon. Is that enough?",
        a: "Usually yes. Owners perform planning, finance and compliance tasks — the key is documentary proof of those decisions.",
      },
      {
        q: "Can I apply for this and a trade qualification together?",
        a: "Yes. Many candidates pursue Certificate III in Hairdressing or Diploma of Beauty Therapy alongside Salon Management.",
      },
      {
        q: "Who assesses the portfolio?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },

  baking: {
    slug: "baking",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Bakers and bakers' assistants without an Australian qualification",
      "Overseas-trained bakers seeking recognition or migration assessment support",
      "Production staff running mixers, provers, dividers and deck or rack ovens",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote:
      "Capture a full production shift across different products. Show yourself at the bench and the oven — not just trays of finished bread.",
    options: [
      {
        name: "Category A — Dough production and processing",
        mandatory: true,
        tasks: [
          "Scaling ingredients and following or adjusting a formula",
          "Mixing straight, sponge-and-dough or sourdough",
          "Dividing, moulding, panning and proving",
          "Monitoring dough temperature, hydration and fermentation",
        ],
      },
      {
        name: "Category B — Baking and finishing",
        mandatory: true,
        tasks: [
          "Operating deck, rack or travelling ovens and bake profiles",
          "Scoring, steaming, glazing and finishing loaves and rolls",
          "Producing cakes, buns, morning goods or specialty breads",
          "Cooling, slicing, packing and labelling",
        ],
      },
      {
        name: "Category C — Food safety, quality and equipment",
        mandatory: true,
        tasks: [
          "Completing temperature, allergen and cleaning records",
          "Cleaning and maintaining mixers, dividers, provers and ovens",
          "Assessing crumb, crust, volume and shelf life",
          "Managing stock rotation, waste and production planning",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Videos of you mixing, moulding, loading and finishing, with narration",
      "Production sheets, recipe cards and logs with your name and dates",
      "Clean uniform, hairnet and gloves plus safe machine operation",
      "Original files with metadata inside your employment period",
    ],
    unacceptable: [
      "Shelves of finished bread with nobody in frame",
      "Blank templates or copied recipes with no workplace link",
      "Reaching into running machinery or missing hygiene steps",
      "Stock imagery or company website photos",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé listing every baking role, bakery and dates",
      "Employment reference on company letterhead confirming duties and shifts",
      "Payslips, tax records or PAYG summaries covering the claimed period",
      "Overseas baking qualifications and transcripts, with certified translations if needed",
      "Production schedules, recipe cards or order sheets you worked from",
      "Food safety or allergen training certificates, if held",
    ],
    steps: [
      {
        title: "Film a full shift",
        body: "Cover mixing through to packing across a normal production run.",
      },
      {
        title: "Show your product range",
        body: "Include bread, rolls and cake or morning goods — not a single product.",
      },
      {
        title: "Include the paperwork",
        body: "Production sheets, temperature logs and cleaning records with your name and dates.",
      },
      {
        title: "Name files by category",
        body: "Use a pattern like CategoryA_Mixing_Sourdough_01.mp4 for each file.",
      },
      {
        title: "Submit and stay contactable",
        body: "The assessor may request a practical demonstration or interview.",
      },
    ],
    sendBack: [
      "A mandatory category missing from the file",
      "Finished-product shots only, with no proof you made them",
      "No food safety or quality records",
      "References lacking detail on your duties",
      "Hygiene or machine-safety breaches visible",
      "The same images used more than once",
    ],
    faqs: [
      {
        q: "I only do bake-off in a supermarket. Does that count?",
        a: "Partly. Bake-off shows oven and finishing skills but usually not dough production. Add mixing and processing evidence from other work or a supervised demonstration.",
      },
      {
        q: "Is baking different from patisserie?",
        a: "Yes. Baking focuses on bread and morning goods; patisserie covers cakes, desserts and decoration. They are separate qualifications and can be applied for separately.",
      },
      {
        q: "How much experience do I need?",
        a: "Most RTOs expect at least two to three years of paid production experience for a Certificate III RPL pathway.",
      },
      {
        q: "Who assesses the portfolio?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },

  "kitchen-management": {
    slug: "kitchen-management",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Chefs de partie and sous chefs supervising a section or a shift",
      "Overseas-trained chefs seeking Australian recognition at supervisor level",
      "Cooks responsible for menus, costing, ordering and kitchen compliance",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: "15 video clips (about 45 seconds each)",
    visualNote:
      "Film normal service across several shifts and menu types. Supervisory evidence is mostly documents — rosters, costings, orders and food safety records with names removed.",
    options: [
      {
        name: "Category A — Advanced cookery and service",
        mandatory: true,
        tasks: [
          "Preparing stocks, sauces, proteins, seafood and vegetables to standard",
          "Running a section during busy service",
          "Plating and presenting consistently against specification",
          "Catering for dietary and allergen substitutions",
        ],
      },
      {
        name: "Category B — Kitchen leadership and operations",
        mandatory: true,
        tasks: [
          "Writing rosters and briefing or supervising staff",
          "Costing dishes, portions and yields",
          "Ordering stock, receiving goods and managing suppliers",
          "Planning menus, specials and function menus",
        ],
      },
      {
        name: "Category C — Food safety and compliance",
        mandatory: true,
        tasks: [
          "Completing temperature, cleaning and cooling records",
          "Implementing the food safety program and HACCP",
          "Managing waste, storage rotation and stock control",
          "Conducting WHS checks and inductions",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Videos of you cooking and supervising during real service, with narration",
      "Rosters, orders, costings and logs with your name and dates",
      "Head chef or venue manager reference describing your supervision",
      "Clean uniform, safe knife handling, gloves and hygienic food handling",
    ],
    unacceptable: [
      "Plated dishes only, with no proof you cooked them",
      "Blank templates or course documents",
      "Title-and-dates-only references",
      "Cross-contamination, unsafe knife work or missing hygiene steps",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé listing every kitchen role, venue and dates",
      "Employment reference from a head or executive chef or venue manager",
      "Payslips, tax records or PAYG summaries",
      "Overseas cookery qualifications and transcripts, with translations if needed",
      "Food safety supervisor certificate, if held",
      "Sample menus, costings, rosters and food safety records you produced",
    ],
    steps: [
      {
        title: "Show both cooking and leading",
        body: "Cover section work during service plus rosters, costings and briefings.",
      },
      {
        title: "Spread across menus",
        body: "Include à la carte, functions and different cuisines you have worked.",
      },
      {
        title: "Remove personal details",
        body: "Redact staff and customer details from rosters and records.",
      },
      {
        title: "Name files by category",
        body: "Use a pattern like CategoryB_Roster_Week12.pdf for each file.",
      },
      {
        title: "Submit and stay available",
        body: "A practical demonstration or interview may follow submission.",
      },
    ],
    sendBack: [
      "No supervisory evidence — cookery tasks only",
      "Food safety records missing or recreated after the fact",
      "Dish photos with no proof you cooked them",
      "Reference lacking any leadership detail",
      "Hygiene breaches visible in footage",
      "Evidence from a single short period only",
    ],
    faqs: [
      {
        q: "Do I need Certificate III first?",
        a: "Most RTOs expect Certificate III in Commercial Cookery or equivalent experience. We can seek recognition for both in the same application where appropriate.",
      },
      {
        q: "Can I film during service?",
        a: "Yes, with venue permission. Keep customers out of frame and film short clips between orders rather than disrupting service.",
      },
      {
        q: "What if I do not write rosters?",
        a: "Show whatever supervisory tasks you do — briefings, ordering, section allocation, training juniors — and ask your head chef to confirm them in writing.",
      },
      {
        q: "Who assesses the portfolio?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },

  "commercial-cookery": {
    slug: "commercial-cookery",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Cooks and chefs without an Australian trade qualification",
      "Overseas-trained cooks preparing for skills assessment or kitchen registration",
      "Kitchen staff working under a head chef or executive chef",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote:
      "Film during normal service and prep. Spread evidence across mise en place, cooking methods, special diets and safety.",
    options: [
      {
        name: "Category A — Preparation and cookery methods",
        mandatory: true,
        tasks: [
          "Knife skills: julienne, brunoise, chiffonade and butchery basics",
          "Preparing stocks, sauces, soups and emulsions",
          "Cooking meat, seafood and poultry: grilling, roasting, braising, frying",
          "Preparing appetisers, salads, sandwiches and mains to standard",
        ],
      },
      {
        name: "Category B — Menu items and special dietary needs",
        mandatory: true,
        tasks: [
          "Following standard recipes and adjusting for yield",
          "Preparing vegetarian, vegan, gluten-free and allergen-aware dishes",
          "Plating and presenting to restaurant standards",
          "Receiving, storing and rotating stock to minimise waste",
        ],
      },
      {
        name: "Category C — Kitchen safety, hygiene and teamwork",
        mandatory: true,
        tasks: [
          "Following food safety plans, temperature logs and cleaning schedules",
          "Using PPE and safe lifting and manual handling",
          "Working a busy line and communicating with front of house",
          "Cleaning and sanitising equipment, benches and floors",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Your face and hands visible prepping, cooking and plating in a commercial kitchen",
      "Recipe execution shown raw to finished, with narration",
      "Clean uniform, apron, hair covering and closed-toe non-slip shoes",
      "Original phone or kitchen-camera files with matching dates",
    ],
    unacceptable: [
      "Plated dishes with no person or process shown",
      "Silent, dark or shaky clips",
      "Jewellery, loose hair, bare hands on ready-to-eat food or poor hygiene",
      "Menu, social media or stock images",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé listing every kitchen role, venue and dates",
      "Employment reference from a head chef or venue manager confirming duties",
      "Payslips, tax records or PAYG summaries",
      "Overseas cookery certificates and transcripts, with translations if needed",
      "Food safety supervisor certificate or other short courses",
      "Redacted roster or timesheets showing commercial kitchen hours",
    ],
    steps: [
      {
        title: "Film across several shifts",
        body: "Cover prep, service and clean-down — not a single quiet shift.",
      },
      {
        title: "Name files by category and dish",
        body: "Use a pattern like CategoryA_Braise_BeefCheek_01.mp4 for each file.",
      },
      {
        title: "Include your chef's reference",
        body: "A supervising-chef reference describing your actual duties carries the file.",
      },
      {
        title: "Keep hygiene visible",
        body: "Gloves, hair covering, clean uniform and safe handling in every clip.",
      },
      {
        title: "Submit and stay available",
        body: "A cook-off or interview may follow submission.",
      },
    ],
    sendBack: [
      "A preparation, cookery or safety category missing",
      "Finished-dish shots only, with no proof you cooked them",
      "No detailed supervising-chef reference",
      "Poor lighting or angles hiding the technique",
      "Hygiene breaches visible",
      "Files duplicated across categories",
    ],
    faqs: [
      {
        q: "Can I film during a busy dinner service?",
        a: "Yes, but keep clips short and focused. A 30-second clip of you grilling, plating and calling the order is ideal.",
      },
      {
        q: "What if my employer will not let me film?",
        a: "Ask permission for a quiet prep period or after-service demonstration. Some venues allow filming with no audio or with faces cropped.",
      },
      {
        q: "Do I need to show every cuisine?",
        a: "No. Show the cooking methods you use daily — grilling, roasting, frying, braising, sauce work and plating — across different dishes.",
      },
      {
        q: "Who makes the final decision?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },

  "advanced-hospitality-management": {
    slug: "advanced-hospitality-management",
    lastUpdated: "8 September 2026",
    whoFor: [
      "General managers, operations managers and multi-site hospitality leaders",
      "Owners running a hospitality business end to end",
      "Senior managers responsible for strategy, budgets and business performance",
    ],
    evidenceHeading: "1. What the assessor expects to see",
    photoLine: "10 redacted workplace photos",
    videoLine: "5 clips of meetings or launches (about 60 seconds each)",
    visualNote:
      "This is almost entirely a document portfolio. A few photos or clips of you leading meetings or launches can support the written evidence.",
    options: [
      {
        name: "Category A — Strategy and business planning",
        mandatory: true,
        tasks: [
          "Preparing business, marketing or growth plans",
          "Analysing market position, competitors and segments",
          "Launching new venues, concepts, menus or revenue streams",
          "Setting organisational goals and reporting against them",
        ],
      },
      {
        name: "Category B — Financial and commercial management",
        mandatory: true,
        tasks: [
          "Building annual budgets, cash-flow and capital plans",
          "Analysing profit and loss and driving corrective action",
          "Negotiating supplier, lease or contractor agreements",
          "Managing pricing, yield and revenue management",
        ],
      },
      {
        name: "Category C — Organisational leadership and governance",
        mandatory: true,
        tasks: [
          "Leading management teams, succession and workforce strategy",
          "Managing risk, insurance, licensing and regulatory obligations",
          "Implementing sustainability, diversity or quality initiatives",
          "Handling serious incidents, disputes or industrial matters",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Business plans, budgets and board reports you authored, with dates and your name",
      "Redacted profit-and-loss analysis with your commentary and actions",
      "Owner, director or franchisor references describing your scope",
      "Minutes, strategy and project plans with sensitive figures masked",
    ],
    unacceptable: [
      "Group or head-office templates you only implemented",
      "Raw financials with no analysis or decisions shown",
      "Supervisory-only references",
      "Documents with staff personal or confidential third-party information",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé listing senior roles, venues or groups, and scope",
      "References from owners, directors, franchisors or boards",
      "Payslips, tax records, PAYG summaries or business ownership records",
      "Prior hospitality qualifications and transcripts, translated if needed",
      "Redacted business plans, budgets, profit-and-loss analysis, contracts and strategy papers",
      "Licences held, such as liquor or gaming approvals",
    ],
    steps: [
      {
        title: "Choose strategic evidence",
        body: "Plans, budgets and decisions — not shift-level paperwork.",
      },
      {
        title: "Show the decision and the result",
        body: "Pair each document with the action you took and what changed.",
      },
      {
        title: "Mask sensitive figures",
        body: "Redact personal and commercially confidential detail before submitting.",
      },
      {
        title: "Organise by category",
        body: "Separate folders for strategy, financial and commercial, and leadership and governance.",
      },
      {
        title: "Prepare for professional discussion",
        body: "Expect a senior-level conversation on strategy, financials and governance.",
      },
    ],
    sendBack: [
      "Supervisor or duty-manager level work, not whole-of-business leadership",
      "No financial planning or analysis",
      "Head-office-authored documents presented as your own",
      "No senior-authority reference",
      "Unredacted personal information",
      "A short period with no sustained leadership",
    ],
    faqs: [
      {
        q: "Do I need the Diploma first?",
        a: "Not always, but RTOs expect substantial management experience. Where appropriate we can seek recognition for both levels in one application.",
      },
      {
        q: "I own a small venue — is that senior enough?",
        a: "Often yes. Owners typically perform strategy, finance and governance tasks. The key is documentary proof of those decisions.",
      },
      {
        q: "Can I use overseas senior experience?",
        a: "Yes, with references, financial documents and translations. Adding Australian compliance evidence strengthens the case.",
      },
      {
        q: "Who assesses the portfolio?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },

  "hospitality-management": {
    slug: "hospitality-management",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Duty managers, restaurant managers and front office supervisors",
      "Overseas-trained hospitality managers seeking Australian recognition",
      "Team leaders responsible for rosters, budgets, compliance and staff performance",
    ],
    evidenceHeading: "1. What the assessor expects to see",
    photoLine: "12 redacted workplace photos",
    videoLine: "8 clips of briefings, service or events (about 60 seconds each)",
    visualNote:
      "This is mainly a document portfolio. A modest set of photos and clips of you leading briefings, service or events supports the paperwork.",
    options: [
      {
        name: "Category A — Operations and service delivery",
        mandatory: true,
        tasks: [
          "Running a shift, briefing staff and allocating sections or duties",
          "Managing bookings, functions and event operations",
          "Handling complaints and service recovery",
          "Maintaining service standards and quality checks",
        ],
      },
      {
        name: "Category B — People and financial management",
        mandatory: true,
        tasks: [
          "Preparing rosters within labour budget",
          "Recruiting, inducting, training and appraising staff",
          "Monitoring revenue, wage costs, cost of goods and variance reports",
          "Preparing or contributing to operating budgets and forecasts",
        ],
      },
      {
        name: "Category C — Compliance and business systems",
        mandatory: true,
        tasks: [
          "Applying responsible service of alcohol and gaming obligations",
          "Maintaining food safety programs and WHS records",
          "Using point-of-sale, booking and inventory systems and reports",
          "Managing suppliers, stocktakes and purchasing controls",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Rosters, wage-cost reports, budgets and stocktakes you prepared, with your name and dates",
      "Redacted training, appraisal and incident reports you completed",
      "Owner, general manager or area-manager reference confirming your authority",
      "Photos or clips of you leading a briefing or function, with permission",
    ],
    unacceptable: [
      "Blank templates or another manager's reports",
      "Documents with staff surnames, pay rates or contacts still visible",
      "Dates-only references",
      "Customer-facing photos taken without consent",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé listing every hospitality role, venue and dates, highlighting management duties",
      "Employment references from owners, general managers or area managers",
      "Payslips, tax records or PAYG summaries",
      "RSA, RSG, food safety supervisor or first aid certificates, if held",
      "Redacted rosters, budgets, reports, training records and compliance documents",
      "Overseas hospitality qualifications with translations if needed",
    ],
    steps: [
      {
        title: "Lead with management evidence",
        body: "Rosters, budgets and team outcomes — not service tasks alone.",
      },
      {
        title: "Cover people and money",
        body: "Include staffing and financial evidence alongside operations.",
      },
      {
        title: "Redact before submitting",
        body: "Remove staff surnames, pay rates, contacts and customer details.",
      },
      {
        title: "Organise by category",
        body: "Separate folders for operations, people and finance, and compliance.",
      },
      {
        title: "Prepare for a competency conversation",
        body: "Expect questions on rosters, budgets, compliance and team decisions.",
      },
    ],
    sendBack: [
      "Service work only, with no management evidence",
      "No financial evidence",
      "Personal information left unredacted",
      "No reference confirming your authority",
      "A single week of evidence with no sustained management",
      "Templates or course exercises presented as workplace evidence",
    ],
    faqs: [
      {
        q: "Do I need to be a manager by title?",
        a: "No, but you must be performing management tasks — supervising staff, controlling costs and taking responsibility for compliance.",
      },
      {
        q: "I manage a café, not a hotel. Is that enough?",
        a: "Yes. Small-venue management counts as long as you can show people management, financial control and compliance responsibility.",
      },
      {
        q: "Can I use overseas management experience?",
        a: "Yes, with references, payslips and translated documents. Some Australian compliance evidence strengthens the application.",
      },
      {
        q: "Who assesses the portfolio?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },

  patisserie: {
    slug: "patisserie",
    lastUpdated: "8 September 2026",
    whoFor: [
      "Pastry chefs and pâtissiers without an Australian qualification",
      "Overseas-trained pastry cooks seeking recognition or migration assessment support",
      "Cake decorators and dessert-section cooks in hotels and restaurants",
    ],
    evidenceHeading: "1. Visual evidence guidelines (photos & videos)",
    photoLine: STD_PHOTO,
    videoLine: STD_VIDEO,
    visualNote:
      "Film production from raw to finished. Finished cakes alone are not accepted — the process and your hands must be visible.",
    options: [
      {
        name: "Category A — Pastry, doughs and sponges",
        mandatory: true,
        tasks: [
          "Producing short, sweet, choux, puff and laminated pastries",
          "Making sponges, genoise, cakes and yeast-based goods",
          "Preparing fillings, creams, custards, ganache and curds",
          "Portioning, baking and controlling oven temperatures",
        ],
      },
      {
        name: "Category B — Desserts, decoration and presentation",
        mandatory: true,
        tasks: [
          "Assembling gateaux, entremets, tarts and plated desserts",
          "Tempering chocolate and preparing garnishes and showpieces",
          "Working sugar, fondant, marzipan and piping",
          "Decorating celebration and wedding cakes to brief",
        ],
      },
      {
        name: "Category C — Food safety, storage and production planning",
        mandatory: true,
        tasks: [
          "Completing temperature, allergen and cleaning records",
          "Storing, freezing and thawing safely",
          "Planning production for service, orders and functions",
          "Costing recipes, portions and waste reduction",
        ],
      },
    ],
    optionDisclaimer: STD_DISCLAIMER,
    acceptable: [
      "Videos of lamination, piping, tempering and assembly with your hands and face visible",
      "Production sheets, dockets and logs with your name and dates",
      "Clean uniform, hairnet, hygienic handling and safe equipment use",
      "Original files with metadata inside your employment period",
    ],
    unacceptable: [
      "Styled finished-cake photos with no proof you made them",
      "Book or social-media recipes with no workplace link",
      "Cross-contamination, bare hands on ready-to-eat product or unsafe machine use",
      "Venue social-media or internet downloads",
    ],
    docs: [
      "Photo identification (passport or Australian driver licence)",
      "Résumé listing every pastry role, venue and dates",
      "Employment reference from a head chef, pastry chef or owner",
      "Payslips, tax records or PAYG summaries covering the claimed period",
      "Overseas patisserie qualifications and transcripts, with translations if needed",
      "Production sheets, order dockets or costings you worked from",
      "Food safety or allergen training certificates, if held",
    ],
    steps: [
      {
        title: "Cover the full technique range",
        body: "Include doughs, desserts, decoration and planning — not celebration cakes alone.",
      },
      {
        title: "Film process, not plates",
        body: "Narrate each stage from raw ingredients to finished product.",
      },
      {
        title: "Include production paperwork",
        body: "Sheets, dockets and temperature logs with your name and dates.",
      },
      {
        title: "Name files by category",
        body: "Use a pattern like CategoryB_ChocolateTempering_01.mp4 for each file.",
      },
      {
        title: "Submit and stay available",
        body: "The assessor may request a practical demonstration or interview.",
      },
    ],
    sendBack: [
      "A mandatory category missing from the file",
      "Finished-product shots only, with no process shown",
      "A narrow range with no variety across the categories",
      "No reference confirming pastry duties",
      "Hygiene breaches visible",
      "The same images or clips used more than once",
    ],
    faqs: [
      {
        q: "Can home baking count?",
        a: "No. Evidence must come from paid commercial work. Home or hobby baking cannot be assessed for RPL.",
      },
      {
        q: "Should I apply for baking or patisserie?",
        a: "Choose the one matching your daily work. Bread and morning goods point to baking; cakes, desserts and decoration point to patisserie.",
      },
      {
        q: "Do I need chocolate showpiece work?",
        a: "Not necessarily, but some chocolate or sugar work strengthens the portfolio. Show what your venue actually produces.",
      },
      {
        q: "Who assesses the portfolio?",
        a: "An independent registered training organisation. Skills Connect prepares and reviews your evidence; we do not issue the qualification.",
      }
    ],
  },
};

export function getGuideDetails(slug: string): GuideDetails | undefined {
  return GUIDE_DETAILS[slug];
}
