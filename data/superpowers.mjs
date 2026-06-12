// The 12 superpowers of Onos Q. Copy source: ONOS_MASTER_COPY.md (operating-system positioning).
// related: [slug, contextual one-liner shown on the referring page]
export const SUPERPOWERS = [
  {
    slug: 'briefings', n: '01', color: 'c-onos', icon: '☀️',
    short: 'Q briefs your team',
    title: 'Q briefs your team',
    headline: 'Start every day already ahead.',
    tagline: 'Daily operational briefings',
    meta: 'Q briefs your team by reading overnight records across the Onos operating system — observations, actions, incidents, sign-ins, permits and contractor changes.',
    card: 'Before the first shift starts, Q has read overnight observations, open actions, sign-ins, incidents, expiring permits and site activity — then delivered a prioritised briefing to every lead.',
    indexBlurb: 'Reads overnight observations, actions, incidents, sign-ins, permits and contractor changes, then tells each lead what needs attention.',
    heroSub: 'Every morning, Q reads the operating record across your sites — observations, incidents, actions, sign-ins, permits, contractor changes, training gaps and documents — then delivers each lead the few things that need attention today.',
    useCase: {
      title: 'The first hour of the day, given back',
      problem: 'Most leads start the day assembling the picture: dashboards, emails, spreadsheets, sign-in records, action trackers and gut feel. By the time they know where attention belongs, the work has already moved.',
      solution: 'Q assembles the picture before the day starts. It reads every relevant record, separates signal from noise and briefs the right person with what matters, why it matters and where the evidence sits.'
    },
    how: [
      ['Q reads overnight', 'Every observation, incident, action update, sign-in anomaly, permit expiry and document change across your sites.'],
      ['Q prioritises', 'Signals ranked by risk, urgency and relevance. Site managers and directors get different briefings from the same operating record.'],
      ['Q delivers', 'Email or in-app briefings readable in minutes, with one-tap links into source records.'],
      ['You act', 'The overdue scaffold inspection gets handled at 7am, not discovered at 4pm.']
    ],
    benefits: [
      ['⏱', 'An hour back, every morning', 'No more spreadsheet archaeology before the day starts.'],
      ['🎯', 'Nothing slips through', 'Q reads the records nobody has time to check manually.'],
      ['📨', 'Right detail, right person', 'Each lead sees what they can act on — not a data dump.']
    ],
    stats: [['2', ' min', 'to read your morning briefing'], ['100', '%', 'of overnight records reviewed'], ['6', 'am', 'delivered before the day begins']],
    feed: [
      ['info', '05:42', 'Reading 311 records across 14 sites…'],
      ['warn', '⚠', 'Scaffold inspection overdue — Site 7'],
      ['warn', '⚠', 'Permit PTW-118 expires 09:00 today'],
      ['ok', '✓', '23 briefings delivered, tailored per lead']
    ],
    related: [
      ['risk-scoring', 'Combines module signals to show rising project risk before it becomes an incident.'],
      ['pattern-detection', 'Connects weak signals across sites, shifts and contractors.'],
      ['board-reporting', 'Turns the month’s operating record into a board-ready story.']
    ],
    cta: ['See Q brief your team<br><span class="grad-text">from your own data.</span>', 'Bring real records to a live demo and watch this intelligence go to work.']
  },
  {
    slug: 'risk-scoring', n: '02', color: 'c-pink', icon: '🎯',
    short: 'Q scores your risk',
    title: 'Q scores your risk',
    headline: 'See risk rising before it arrives.',
    tagline: 'Live project risk scores',
    meta: 'Q scores live project risk using signals from across Onos — observations, actions, incidents, audits, permits, training, assets and supply chain records.',
    card: 'Q combines live signals from observations, incidents, audits, actions, permits, training and supply chain records to show which projects are getting riskier — and why.',
    indexBlurb: 'Combines signals across modules to show which sites, projects or operations are becoming riskier.',
    heroSub: 'Q maintains a live risk score for every project, site or operation — recalculated as observations, incidents, audits, actions, permits, training and contractor records change.',
    useCase: {
      title: 'From quarterly hindsight to live foresight',
      problem: 'Risk reviews happen quarterly; risk moves daily. A project can accumulate overdue actions, slipping inspections, near-miss clusters and contractor gaps long before the incident makes the trend obvious.',
      solution: 'Q connects those signals continuously. Because the data lives in one operating system, Q can explain what moved, why it moved and what evidence sits underneath the score.'
    },
    how: [
      ['Q watches the signals', 'Actions, incidents, observations, audits, permits, training, assets, environmental data and contractor status.'],
      ['Q recalculates continuously', 'Scores update as records change, not on a reporting cycle.'],
      ['Q explains itself', 'Every score decomposes into its drivers, source records and trend movement.'],
      ['Q escalates movement', 'Rising scores trigger alerts to accountable owners and leadership.']
    ],
    benefits: [
      ['📈', 'Leading, not lagging', 'Manage the conditions that precede incidents instead of counting incidents afterwards.'],
      ['🧭', 'Effort goes where risk is', 'Deploy EHSQ time against the sites that need it this week.'],
      ['🏛', 'Board-grade answers', 'When the board asks where exposure is rising, the answer is ready and evidenced.']
    ],
    stats: [['24', '/7', 'continuous recalculation'], ['100', '%', 'projects scored, always'], ['1', ' click', 'from score to evidence']],
    feed: [
      ['info', 'PRS', 'Recalculating 14 project scores…'],
      ['warn', '⚠', 'Riverside Depot: 64 → 78 (rising)'],
      ['info', '↳', 'Drivers: overdue actions +40%, near-misses ×2'],
      ['ok', '✓', 'Escalated to EHSQ Director']
    ],
    related: [
      ['briefings', 'Turns live risk movement into daily action.'],
      ['pattern-detection', 'Finds the weak signals behind score movement.'],
      ['action-chasing', 'Stops known risks sitting open.']
    ],
    cta: ['See Q score your risk<br><span class="grad-text">on your own data.</span>', 'Bring live project records to a demo and watch the score build from the evidence.']
  },
  {
    slug: 'pattern-detection', n: '03', color: 'c-cyan', icon: '🔍',
    short: 'Q spots the patterns',
    title: 'Q spots the patterns',
    headline: 'The weak signals, finally heard.',
    tagline: 'Pattern detection',
    eyebrowOverride: 'Observation and operating-pattern detection',
    meta: 'Q spots patterns across observations, incidents, audits, actions, shifts, sites and contractors by reading the full Onos operating record.',
    card: 'Q reads every observation, incident and inspection finding across sites, shifts, trades and contractors — surfacing clusters no single team could see alone.',
    indexBlurb: 'Connects observations, incidents and findings across sites, shifts, trades, contractors and time.',
    heroSub: 'Your workforce already reports the warning signs. Q reads them across the full operating system — observations, incidents, audits, actions, sites, shifts, contractors and time — and tells you what they mean together.',
    useCase: {
      title: 'More observations only help if someone reads them',
      problem: 'Capturing more reports is progress. Reading them all is the problem. No human can hold every observation, incident, audit finding and action across every site in their head.',
      solution: 'Q can. It groups related records across sites, shifts, trades, contractors and time — then routes the warning to the person who can act.'
    },
    how: [
      ['Q reads everything', 'Typed, dictated, photographed and submitted records across modules and sites.'],
      ['Q connects across silos', 'Patterns rarely respect site boundaries. Q correlates by hazard type, location, trade, contractor, shift and time.'],
      ['Q separates signal from noise', 'One report is an anecdote. Q tells you when it has become a trend.'],
      ['Q routes the warning', 'Pattern reports include the source records and the recommended owner.']
    ],
    benefits: [
      ['🛡', 'Prevent, do not investigate', 'Act on the precursors while they are still cheap and quiet to fix.'],
      ['🔁', 'Reporting becomes worth it', 'Workers see reports become action, so they report more.'],
      ['🌐', 'Whole-estate vision', 'Patterns across sites and contractors become visible.']
    ],
    stats: [['1284', '', 'observations read in a typical month'], ['100', '%', 'reports analysed — not sampled'], ['0', '', 'weak signals left unread']],
    feed: [
      ['info', 'scan', '1,284 observations analysed'],
      ['warn', '⚠', 'Cluster: manual handling, night shift, 3 sites'],
      ['info', '↳', 'Confidence: high — 11 reports, 19 days'],
      ['ok', '✓', 'Pattern report → Safety Manager']
    ],
    related: [
      ['risk-scoring', 'Turns patterns into risk movement.'],
      ['briefings', 'Routes the warning into the day.'],
      ['incident-triage', 'Links incidents back to the patterns that preceded them.']
    ],
    cta: ['See Q spot patterns<br><span class="grad-text">in your own data.</span>', 'Bring a month of observations and actions. Watch Q find what was hidden in plain sight.']
  },
  {
    slug: 'rams-review', n: '04', color: 'c-blue', icon: '📋',
    short: 'Q reviews your RAMS',
    title: 'Q reviews your RAMS',
    headline: 'Method statements, marked in minutes.',
    tagline: 'RAMS and document review',
    meta: 'Q reviews RAMS and method statements against site, task, contractor, hazards and controls using the wider Onos operating record.',
    card: 'Q reviews risk assessments, method statements and supporting documents against the actual task, site, contractor and controls — flagging missing detail before work starts.',
    indexBlurb: 'Checks documents against scope, site, hazards, controls, contractor status and operational context.',
    heroSub: 'Every RAMS that arrives gets a structured first review from Q — checked against the task, site, contractor, hazards, controls and related records before a human reviewer opens page one.',
    useCase: {
      title: 'The bottleneck that holds up every start date',
      problem: 'A subcontractor’s RAMS lands late. The work starts soon. Under pressure, reviews become skims and generic documents slip through.',
      solution: 'Q reviews every document on arrival. It checks whether controls are specific, adequate and aligned to the actual work. Your competent person still decides — but starts from a marked-up review, not a blank read.'
    },
    how: [
      ['Document arrives', 'A subcontractor uploads RAMS through the controlled workflow.'],
      ['Q reviews against scope', 'Q checks the method against the task, site, contractor and hazards.'],
      ['Q flags the gaps', 'Missing rescue plans, wrong substances, generic controls, contradictions and missing evidence.'],
      ['Your expert decides', 'The reviewer approves, rejects or requests changes with Q’s findings attached.']
    ],
    benefits: [
      ['⚡', 'Days become minutes', 'First-pass review no longer blocks the start date.'],
      ['🔬', 'Every page, every time', 'Q does not skim page 37.'],
      ['📐', 'A consistent bar', 'Generic RAMS get caught consistently.']
    ],
    stats: [['4', ' min', 'typical first-pass review'], ['100', '%', 'pages actually read'], ['0', '', 'rescue plans missed']],
    feed: [
      ['info', 'doc', 'RAMS-0412 received from subcontractor'],
      ['warn', '⚠', 'No rescue plan for work at height (p.12)'],
      ['warn', '⚠', 'COSHH section generic — wrong substances'],
      ['ok', '✓', 'Structured review returned in 4 minutes']
    ],
    related: [
      ['supply-chain', 'Checks contractor status before work proceeds.'],
      ['compliance', 'Turns reviewed documents into traceable evidence.'],
      ['risk-scoring', 'RAMS gaps feed the wider project risk picture.']
    ],
    cta: ['See Q review your RAMS<br><span class="grad-text">on a real document.</span>', 'Bring a real RAMS to the demo. No slideware — Q will mark it live.']
  },
  {
    slug: 'supply-chain', n: '05', color: 'c-teal', icon: '🔗',
    short: 'Q guards your supply chain',
    title: 'Q guards your supply chain',
    headline: 'Every contractor, always current.',
    tagline: 'Supply chain compliance',
    eyebrowOverride: 'Supply chain compliance',
    meta: 'Q monitors contractor compliance across insurances, accreditations, competencies, RAMS, training and site access in the Onos operating system.',
    card: 'Q watches contractor compliance, insurances, accreditations, RAMS status and competencies — chasing gaps automatically before they become site access problems.',
    indexBlurb: 'Watches contractor documents, insurances, accreditations, RAMS and competencies.',
    heroSub: 'Q maintains a live compliance picture of every contractor — documents, insurances, accreditations, competencies, RAMS, performance and site access — then chases gaps before they reach the gate.',
    useCase: {
      title: 'Your risk profile is only as strong as your weakest contractor record',
      problem: 'Keeping contractor evidence current is a full-time chase. It slips until procurement, the gate, the permit desk or the incident exposes the gap.',
      solution: 'Q owns the chase. It watches expiry dates, requests renewals, checks what returns and updates contractor status across procurement, RAMS, sign-in and permits.'
    },
    how: [
      ['Q tracks every credential', 'Insurance, accreditations, licences, tickets, RAMS and required policies.'],
      ['Q chases ahead of expiry', 'Requests and reminders go out automatically.'],
      ['Q verifies what returns', 'Dates, cover levels, scope and missing information checked before status changes.'],
      ['Q gates access', 'Live status informs procurement, sign-in and permit issue.']
    ],
    benefits: [
      ['🚫', 'No more gate surprises', 'Non-compliance is caught before access or work.'],
      ['🗂', 'The chasing does itself', 'Admin turns into audited follow-up.'],
      ['🤝', 'Stronger tender story', 'Real-time supply chain governance becomes a client-ready answer.']
    ],
    stats: [['86', '', 'subcontractors verified continuously'], ['30', ' days', 'advance warning on every expiry'], ['0', '', 'non-compliant contractors at the gate']],
    feed: [
      ['info', 'check', '86 subcontractors verified'],
      ['warn', '⚠', '3 insurance certificates expire in 14d'],
      ['ok', '✓', 'Renewal requests sent + diarised'],
      ['ok', '✓', 'Gate status updated for Site 3']
    ],
    related: [
      ['rams-review', 'Checks contractor documents before work starts.'],
      ['competency', 'Links contractor people to the tickets required.'],
      ['compliance', 'Turns live contractor records into evidence.']
    ],
    cta: ['See Q guard your supply chain<br><span class="grad-text">on your contractor data.</span>', 'Bring a contractor tracker and we will show the live compliance loop.']
  },
  {
    slug: 'incident-triage', n: '06', color: 'c-onos', icon: '⚡',
    short: 'Q triages incidents',
    title: 'Q triages incidents',
    headline: 'The first hour, handled right.',
    tagline: 'Incident triage',
    eyebrowOverride: 'Incident triage and investigation support',
    meta: 'Q triages incidents by reading report details alongside prior observations, actions, training, contractors and site records.',
    card: 'When an incident is logged, Q structures the response: RIDDOR reportability, evidence checklist, investigation prompts, notifications and actions — ready for human review.',
    indexBlurb: 'Assesses reportability, drafts the evidence checklist and scaffolds the investigation.',
    heroSub: 'The minutes after an incident are when the process matters most and capacity is lowest. Q handles structure — reportability, evidence checklist, investigation scaffold, related records and actions — so your people can handle the people.',
    useCase: {
      title: 'Nobody does their best paperwork in the worst hour',
      problem: 'In the first hour, someone must remember reportability, notifications, evidence, witness details, scene preservation and actions. Under pressure, checklists live in heads — and heads are busy.',
      solution: 'Q goes to work when the incident is logged. It structures the response, reads related records and gives the investigation a defensible starting point.'
    },
    how: [
      ['Incident logged', 'A fast mobile report from site with people, place, photos and details.'],
      ['Q assesses reportability', 'Specified injuries, over-7-day criteria and dangerous occurrences checked with reasoning shown.'],
      ['Q drafts the response', 'Deadlines, evidence checklist, witness list and scene prompts generated.'],
      ['Q adds context', 'Similar incidents, prior observations, open actions, training gaps and contractor history surfaced.']
    ],
    benefits: [
      ['🧯', 'Calm process under pressure', 'The statutory clock does not rely on memory.'],
      ['⚖️', 'Defensible from minute one', 'Evidence is captured early and systematically.'],
      ['🔎', 'Deeper root causes', 'Investigations start with context, not a blank page.']
    ],
    stats: [['60', 's', 'to log an incident from site'], ['10', ' days', 'RIDDOR deadline never missed'], ['100', '%', 'incidents get a structured pack']],
    feed: [
      ['info', 'new', 'Incident INC-2291 logged 14:32'],
      ['warn', '⚠', 'Potential RIDDOR — specified injury'],
      ['info', '↳', 'F2508 deadline: 10 days. Clock started.'],
      ['ok', '✓', 'Investigation pack drafted + assigned']
    ],
    related: [
      ['pattern-detection', 'Links the incident to earlier weak signals.'],
      ['risk-scoring', 'Updates the live risk picture.'],
      ['briefings', 'Routes next steps into tomorrow’s priorities.']
    ],
    cta: ['See Q triage incidents<br><span class="grad-text">with your workflow.</span>', 'Bring a real incident form or anonymised event and we will show the investigation scaffold.']
  },
  {
    slug: 'compliance', n: '07', color: 'c-cyan', icon: '🛡️',
    short: 'Q keeps you audit-ready',
    title: 'Q keeps you audit-ready',
    headline: 'Permanently ready. Never scrambling.',
    tagline: 'Compliance mapping',
    eyebrowOverride: 'ISO compliance mapping',
    meta: 'Q maps live Onos records against ISO 45001, 14001 and 9001 to keep audit evidence current across the EHSQ operating system.',
    card: 'Q maps live operational evidence against ISO 45001, 14001 and 9001 — so audit-readiness stops being a project and becomes a property of the system.',
    indexBlurb: 'Maps live records against ISO 45001, 14001 and 9001 clause by clause.',
    heroSub: 'Q maps live operational records against ISO 45001, 14001 and 9001 clause by clause — so audit-readiness becomes a state of the system, not a seasonal panic.',
    useCase: {
      title: 'The two worst weeks of the year, deleted',
      problem: 'Audit prep should not mean hunting through folders for evidence that may or may not exist. Every inspection, training record, action, document, risk review and incident already says something about your management system.',
      solution: 'Q maps those records continuously. Gaps surface early, evidence packs stay current and leadership sees the real posture before the auditor does.'
    },
    how: [
      ['Q knows your standards', 'ISO 45001, 14001 and 9001 clause structures and evidence expectations.'],
      ['Q maps continuously', 'Records created in Onos are indexed against the clauses they evidence.'],
      ['Q flags gaps early', 'Missing evidence becomes a manageable action, not a finding.'],
      ['Q assembles the pack', 'Evidence packs generate current and traceable to source records.']
    ],
    benefits: [
      ['📅', 'Audit prep approaches zero', 'The pack exists because the work was done in the system.'],
      ['🩺', 'True posture, always known', 'Leadership sees coverage every day.'],
      ['🏅', 'Findings before the auditor finds them', 'Gaps surface internally while they are cheap to fix.']
    ],
    stats: [['96', '%', 'live clause coverage, visible daily'], ['3', '', 'standards mapped: 45001 · 14001 · 9001'], ['0', ' wks', 'audit-prep scramble removed']],
    feed: [
      ['info', 'audit', 'ISO 45001 clause coverage: 96%'],
      ['warn', '⚠', 'Clause 7.2: 4 training records missing'],
      ['ok', '✓', 'Gap actions raised + assigned'],
      ['ok', '✓', 'Evidence pack regenerated']
    ],
    related: [
      ['competency', 'Training records feed clause evidence.'],
      ['supply-chain', 'Contractor records stay evidence-ready.'],
      ['board-reporting', 'Compliance posture becomes board-ready.']
    ],
    cta: ['See Q keep you audit-ready<br><span class="grad-text">with your standards.</span>', 'Bring an audit checklist or clause map. We will show how Onos turns live work into evidence.']
  },
  {
    slug: 'ask-q', n: '08', color: 'c-blue', icon: '💬',
    short: 'Q answers anything',
    title: 'Q answers anything',
    headline: 'Ask in English. Answered with evidence.',
    tagline: 'Conversational answers',
    eyebrowOverride: 'Conversational answers from your data',
    meta: 'Ask Q plain-English questions across the Onos operating system and get answers from live EHSQ data with source evidence linked.',
    card: 'Ask plain-English questions across your EHSQ operating system — from open risks to contractor status to incident trends — and get answers linked to the evidence.',
    indexBlurb: 'Answers questions from your own live data, with source records linked.',
    heroSub: 'No query builder, no report request, no waiting for the data team. Ask Q across your live EHSQ operating system and get answers from source records you can stand behind.',
    useCase: {
      title: 'The answer exists. Getting it should not take a week.',
      problem: 'A client asks for a trend. The MD asks which site drove last month’s spike. A project lead asks what actions are blocking permit approval. The data exists — but extracting it usually becomes work.',
      solution: 'Q removes the extraction layer. Ask naturally, drill down and follow up. The answer is drawn from live records, with the evidence attached.'
    },
    how: [
      ['You ask naturally', '"Top three open risks on Riverside?" "Which contractors have expiring insurance?" "Show overdue actions by owner."'],
      ['Q queries live data', 'Not a cached dashboard. The answer reflects current records.'],
      ['Q shows its evidence', 'Every answer links underlying records.'],
      ['You go deeper', 'Follow-up questions keep context from portfolio to project to record.']
    ],
    benefits: [
      ['🚀', 'Seconds, not cycles', 'The answer that took a week now takes one sentence.'],
      ['🔓', 'Everyone gets data superpowers', 'Insights stop being gated by Excel or BI skills.'],
      ['🧾', 'Evidence built in', 'Source-linked answers create trust internally and externally.']
    ],
    stats: [['5', 's', 'typical time to an evidenced answer'], ['0', '', 'query languages to learn'], ['100', '%', 'answers cite their sources']],
    feed: [
      ['info', 'you', 'Top 3 open risks on Riverside?'],
      ['info', 'Q', '1. Work at height (4 actions open)…'],
      ['info', 'Q', '2. LOLER cert expiry · 3. Access control'],
      ['ok', '✓', 'Sources: 7 records linked']
    ],
    related: [
      ['board-reporting', 'Turns answers into repeatable reporting.'],
      ['briefings', 'Pushes critical answers before anyone asks.'],
      ['risk-scoring', 'Explains risk movement with source records.']
    ],
    cta: ['See Q answer anything<br><span class="grad-text">from your own data.</span>', 'Bring the questions your team asks every month. Watch Q answer them live.']
  },
  {
    slug: 'action-chasing', n: '09', color: 'c-teal', icon: '📌',
    short: 'Q chases the actions',
    title: 'Q chases the actions',
    headline: 'The loop closes itself now.',
    tagline: 'Action follow-up',
    eyebrowOverride: 'Automated action follow-up',
    meta: 'Q chases actions across the full Onos operating system — audits, observations, incidents, RAMS, permits, assets, quality and environmental records.',
    card: 'Q monitors every corrective and preventive action across every module, nudging owners before deadlines slip and escalating high-risk gaps.',
    indexBlurb: 'Nudges owners, escalates high-risk gaps and reports closure trends.',
    heroSub: 'Every open action is a known risk left live. Q watches the whole backlog across every module, nudges before deadlines slip and escalates what matters.',
    useCase: {
      title: 'An open action is a risk you already know about',
      problem: 'The system says action assigned and everyone moves on. Months later, the same issue appears in an audit or incident. Chasing actions is nobody’s favourite job, so it becomes nobody’s job.',
      solution: 'It is Q’s job now. Q monitors deadlines, evidence, risk level, source module and owner performance — then follows up proportionately.'
    },
    how: [
      ['Q watches the whole backlog', 'Actions from audits, observations, incidents, RAMS, permits, assets, environmental and quality.'],
      ['Q nudges before, not after', 'Owners hear before the deadline with context attached.'],
      ['Q escalates by risk', 'High-severity slippage escalates. Low-risk admin does not create noise.'],
      ['Q reports the trend', 'Closure rates, ageing profiles and repeat blockers visible without compilation.']
    ],
    benefits: [
      ['✅', 'Closure becomes the default', 'The system that never forgets beats the spreadsheet that always does.'],
      ['🔕', 'Nudge fatigue solved', 'People hear about what matters.'],
      ['📉', 'A shrinking backlog you can prove', 'The ageing curve bends and the evidence is there.']
    ],
    stats: [['312', '', 'open actions monitored at once'], ['48', 'h', 'advance nudge before every deadline'], ['0', '', 'high-risk actions forgotten']],
    feed: [
      ['info', 'scan', '312 open actions monitored'],
      ['warn', '⚠', '9 due within 48h — owners nudged'],
      ['warn', '⚠', '2 high-risk overdue — escalated'],
      ['ok', '✓', 'Weekly closure rate: 94% (+6)']
    ],
    related: [
      ['risk-scoring', 'Open actions become live risk drivers.'],
      ['compliance', 'Actions close evidence gaps.'],
      ['briefings', 'Today’s overdue actions become today’s priorities.']
    ],
    cta: ['See Q chase your actions<br><span class="grad-text">from your own backlog.</span>', 'Bring an action tracker. We will show how Q turns it into a live closure system.']
  },
  {
    slug: 'competency', n: '10', color: 'c-onos', icon: '🎓',
    short: 'Q watches competency',
    title: 'Q watches competency',
    headline: 'Right ticket. Right person. Right job.',
    tagline: 'Competency assurance',
    eyebrowOverride: 'Training and competency assurance',
    meta: 'Q watches competency across workers, subcontractors, tickets, certificates, inductions, training, permits and sign-ins.',
    card: 'Q tracks tickets, cards, certificates, inductions and training records — cross-checking them against permits, sign-ins and live work before someone unqualified ends up on the tools.',
    indexBlurb: 'Cross-checks training, tickets and certificates against live work, permits and access.',
    heroSub: 'Q tracks tickets, cards, certificates, inductions and training across your workforce and supply chain — then checks them against the work actually being done.',
    useCase: {
      title: 'Competency expires quietly. Consequences do not.',
      problem: 'A training matrix can look fine until a lapsed ticket appears at the gate, on a permit, in an audit or after an incident. The problem is not the record; it is whether the system uses the record.',
      solution: 'Q uses it. It cross-checks competencies against sign-ins, permits, roles, contractor records and tasks — catching gaps before work starts.'
    },
    how: [
      ['Q holds the matrix live', 'Every worker, credential and expiry across direct employees and subcontractors.'],
      ['Q looks ahead', 'Expiries flagged early, refresher requests triggered and bookings tracked.'],
      ['Q cross-checks reality', 'Sign-in and permit requirements checked against live competencies.'],
      ['Q evidences it all', 'Coverage by role, site, client requirement and ISO clause.']
    ],
    benefits: [
      ['🪪', 'No expired tickets on the tools', 'The gap is caught before access or permit issue.'],
      ['📚', 'Renewals run themselves', 'Refresher chasing happens automatically.'],
      ['🧾', 'Instant evidence', 'The current matrix is always ready.']
    ],
    stats: [['1042', '', 'training records under live watch'], ['30', ' days', 'minimum advance expiry warning'], ['100', '%', 'permits checked against tickets']],
    feed: [
      ['info', 'check', '1,042 training records scanned'],
      ['warn', '⚠', '6 CPCS cards expire this month'],
      ['warn', '⚠', 'PTW-204 requires confined-space — 1 gap'],
      ['ok', '✓', 'Refresher bookings requested']
    ],
    related: [
      ['supply-chain', 'Contractor records connect to worker competency.'],
      ['compliance', 'Training evidence stays mapped.'],
      ['incident-triage', 'Competency context joins the investigation.']
    ],
    cta: ['See Q watch competency<br><span class="grad-text">on your matrix.</span>', 'Bring your training matrix and permit requirements. We will show the live cross-check.']
  },
  {
    slug: 'environmental', n: '11', color: 'c-cyan', icon: '🌍',
    short: 'Q tracks your footprint',
    title: 'Q tracks your footprint',
    headline: 'Sustainability you can stand behind.',
    tagline: 'Environmental intelligence',
    eyebrowOverride: 'Environmental and carbon intelligence',
    meta: 'Q tracks environmental performance across waste, water, fuel, electricity, transport, carbon, site returns and incidents in the Onos operating system.',
    card: 'Q reads site returns, fuel, waste, water, energy and carbon data continuously — turning environmental records into traceable sustainability reporting.',
    indexBlurb: 'Aggregates environmental data continuously and flags anomalies in-month.',
    heroSub: 'Q reads the environmental data your operation already produces — waste, water, fuel, electricity, transport, site returns and incidents — and turns it into traceable sustainability reporting.',
    useCase: {
      title: 'ESG reporting that is not an annual estimate',
      problem: 'The sustainability report should not be built once a year from receipts, assumptions and inconsistent returns. Environmental performance should be managed while it is happening.',
      solution: 'Q builds the picture continuously from source records. Anomalies surface in-month, and every figure in the report traces back to evidence.'
    },
    how: [
      ['Q aggregates from source', 'Waste, water, fuel, electricity, transport and materials data captured through normal workflows.'],
      ['Q normalises and converts', 'Units, emission factors and intensity metrics handled consistently.'],
      ['Q flags anomalies live', 'Consumption spikes and waste-stream changes surface when they can still be managed.'],
      ['Q drafts the disclosure', 'Period reports with full traceability from headline number to source record.']
    ],
    benefits: [
      ['🌱', 'In-month, not year-end', 'Environmental performance becomes something you manage, not confess.'],
      ['🔗', 'Traceable to source', 'Every tonne and kilowatt links to records.'],
      ['🏆', 'Tender-ready credentials', 'Live sustainability data becomes a stronger PQQ answer.']
    ],
    stats: [['12', '%', 'anomalies caught in-month'], ['100', '%', 'figures traceable to source'], ['1', '', 'continuous model — no annual scramble']],
    feed: [
      ['info', 'env', 'Aggregating Q2 site returns…'],
      ['warn', '⚠', 'Diesel use up 12% on Site 3'],
      ['info', '↳', 'Likely driver: generator runtime +40h'],
      ['ok', '✓', 'Carbon summary ready for review']
    ],
    related: [
      ['board-reporting', 'Environmental movement joins the performance story.'],
      ['compliance', 'Environmental records map to standards.'],
      ['ask-q', 'Ask environmental questions in plain English.']
    ],
    cta: ['See Q track your footprint<br><span class="grad-text">on your data.</span>', 'Bring a site return, fuel report or waste dataset. Watch Q turn it into traceable insight.']
  },
  {
    slug: 'board-reporting', n: '12', color: 'c-pink', icon: '📊',
    short: 'Q writes the board pack',
    title: 'Q writes the board pack',
    headline: 'The month’s story, told in minutes.',
    tagline: 'Board-ready reporting',
    eyebrowOverride: 'Automated performance reporting',
    meta: 'Q drafts board packs and performance reports from the full Onos EHSQ operating record — incidents, observations, actions, audits, training, environmental and quality data.',
    card: 'Q turns live module data into the monthly performance story — trends, leading indicators, exceptions and risks — ready for review.',
    indexBlurb: 'Drafts the month’s performance story from live EHSQ records.',
    heroSub: 'The monthly EHSQ report — trends, leading indicators, narrative, exceptions and evidence — drafted by Q from live operating data, ready for human review.',
    useCase: {
      title: 'Two days a month, returned to actual safety work',
      problem: 'Month-end reporting pulls senior EHSQ people into exports, charts, screenshots and narrative drafting. The report is often out of date before it reaches the meeting.',
      solution: 'Q drafts it from live data. Incidents, observations, actions, audits, training, environmental, quality and site returns become one performance story. Your experts add judgement, not formatting.'
    },
    how: [
      ['Q compiles the month', 'Every relevant module aggregated and trended.'],
      ['Q writes the first draft', 'Performance narrative, movements, leading indicators and exceptions.'],
      ['You add judgement', 'Humans decide the meaning and recommendations.'],
      ['The board gets better answers', 'Source-linked appendices and Q follow-up reduce "we will come back to you" moments.']
    ],
    benefits: [
      ['⏳', 'Days become an hour', 'Month-end reporting becomes review and approval.'],
      ['📊', 'Consistent and current', 'Same structure, live numbers, comparable month to month.'],
      ['🧠', 'Experts do expert work', 'Senior time moves from slide alignment to prevention strategy.']
    ],
    stats: [['14', '', 'charts generated automatically'], ['1', ' hr', 'human time per board pack'], ['12', '×', 'a year, every year, on time']],
    feed: [
      ['info', 'report', 'May EHSQ report drafted'],
      ['info', '↳', '14 charts, 6 insights, 3 alerts'],
      ['warn', '⚠', 'Flag: action closure dipped wk 3'],
      ['ok', '✓', 'Sent to Director for sign-off']
    ],
    related: [
      ['ask-q', 'The board’s follow-up questions can be answered from source records.'],
      ['briefings', 'The monthly story starts with daily operating signals.'],
      ['environmental', 'Environmental data joins the board story.']
    ],
    cta: ['See Q write the board pack<br><span class="grad-text">from your own data.</span>', 'Bring last month’s report. Watch Q draft the next one.']
  }
];
