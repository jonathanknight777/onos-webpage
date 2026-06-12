// 18 platform modules. Copy source: ONOS_MASTER_COPY.md (operating-system positioning).
// blurb: one-liner used on the platform index and industry module cards.
// q: [superpower-slug, sectionHeading, paragraph]
export const PRODUCTS = [
  {
    slug: 'safety-observations', icon: '👁', name: 'Safety Observations',
    headline: 'Give every worker a voice that feeds the risk picture',
    blurb: 'Give every worker a voice that feeds the risk picture.',
    meta: 'QR-code safety observations that feed the full Onos EHSQ operating system. Capture hazards, near-misses and good practice in seconds, then let Q spot patterns across every site.',
    sub: 'Onos makes hazard, near-miss and good-practice reporting as simple as scanning a QR code — then connects every observation to actions, trends, risk scores, briefings and evidence.',
    pains: [
      ['Reporting takes too long', 'When raising a hazard means finding a form, a pen and a site office, most hazards go unraised.'],
      ['Observations become isolated records', 'A report in a spreadsheet cannot update a risk score, brief a project lead or connect to similar events elsewhere.'],
      ['Engagement is invisible', 'Without participation data, feedback loops and closure evidence, you cannot build a reporting culture that lasts.']
    ],
    features: [
      ['QR-code reporting', 'Scan, describe, photograph, submit — 60 seconds from hazard to logged report. No app install, no login, no friction.'],
      ['Supply chain included', 'Subcontractors, visitors and external workers report through the same simple route, including anonymous reporting where needed.'],
      ['Positive observations', 'Capture good practice alongside hazards so safety becomes a culture signal, not just a fault log.'],
      ['Connected closure', 'Each observation routes to an owner, creates actions where needed, updates dashboards and feeds Q’s pattern detection.']
    ],
    q: ['pattern-detection', 'Q reads every observation — and what it means with the rest of the system.', 'Q does not treat observations as isolated comments. It reads them against site, shift, contractor, actions, incident history and inspection findings — then flags the pattern before it becomes a statistic.'],
    stats: [['60', 's', 'average report time'], ['400', '%', 'more observations captured'], ['1', '', 'from report to action to evidence']],
    ctaSub: 'Bring a real paper form or reporting workflow. We will show how it becomes a live signal in the Onos operating system.',
    ctaNote: 'Start here. Expand anywhere. Q gets smarter with every report.'
  },
  {
    slug: 'incident-management', icon: '🚨', name: 'Incident Management',
    headline: 'From the worst moment to the full operating picture',
    blurb: 'From first report to investigation, action and lesson learned.',
    meta: 'Incident management connected to the full EHSQ operating system — fast capture, RIDDOR support, investigation workflows, actions, lessons learned and Q-powered triage.',
    sub: 'Capture incidents in seconds, run structured investigations, manage RIDDOR, assign actions and connect every lesson back into training, risk, inspections and future prevention.',
    pains: [
      ['Reporting under pressure', 'Critical details get lost when incident capture depends on paperwork in the middle of a crisis.'],
      ['Investigations lack context', 'The incident record often misses prior observations, overdue actions, contractor history and training gaps.'],
      ['Lessons do not travel', 'Findings sit in PDFs instead of changing controls, briefings, training and future risk scores.']
    ],
    features: [
      ['60-second capture', 'Log what happened from a phone at the scene — photos, people, conditions and initial details before memory fades.'],
      ['Structured investigation', 'Root cause, witness statements, evidence files, timelines, actions and approvals in one defensible record.'],
      ['RIDDOR built in', 'Reportability assessment and statutory timelines tracked from the moment of logging.'],
      ['Lessons that feed the system', 'Findings become actions, safety talks, risk updates, training requirements and Q signals across every site.']
    ],
    q: ['incident-triage', 'Q triages the incident — and reads the context around it.', 'Q assesses reportability, drafts the investigation scaffold, suggests evidence to capture and links the incident to prior observations, open actions, training records and relevant patterns.'],
    stats: [['60', 's', 'to capture from the scene'], ['100', '%', 'statutory deadlines tracked'], ['1', '', 'defensible record per event']],
    ctaSub: 'Bring a recent incident workflow. We will show how Onos turns it into a connected investigation, action loop and prevention record.'
  },
  {
    slug: 'audits-inspections', icon: '✅', name: 'Audits & Inspections',
    headline: 'Every check, on schedule, with evidence that works harder',
    blurb: 'Every check scheduled, completed, evidenced and actioned.',
    meta: 'Audits and inspections in the Onos EHSQ operating system — mobile, offline, scheduled, evidence-rich and connected to actions, ISO evidence and Q intelligence.',
    sub: 'Build, schedule and complete audits and inspections across sites and assets — online or offline — then turn findings into actions, trends, compliance evidence and Q-powered insight.',
    pains: [
      ['Paper checklists go nowhere', 'Completed inspections sit in folders, invisible to leadership and disconnected from risk.'],
      ['Schedules slip silently', 'Missed statutory and operational checks surface at audit time, not when they are recoverable.'],
      ['Findings die in reports', 'Issues found but never converted to owned actions are issues kept alive.']
    ],
    features: [
      ['Any form, digitised', 'Rebuild existing audit templates with scoring, logic, photos, comments, approvals and evidence.'],
      ['Scheduling and coverage', 'Recurring programmes by site, asset, team, standard or risk area — with overdue checks visible before they become findings.'],
      ['Offline mobile', 'Complete inspections in dead zones, basements, remote sites and factory floors; sync when connectivity returns.'],
      ['Findings to actions', 'Every non-conformance becomes an owned action with a due date, evidence requirement and escalation path.']
    ],
    q: ['compliance', 'Q keeps audit evidence alive.', 'Q reads completed audits against actions, risks, ISO clauses, repeat findings and site performance — so each check improves the operating picture instead of disappearing into a PDF.'],
    stats: [['100', '%', 'schedule visibility'], ['0', '', 'findings lost to PDF graveyards'], ['30', ' min', 'to digitise an existing form']],
    ctaSub: 'Bring your messiest checklist. We will show how it becomes a mobile workflow, action loop and compliance record.'
  },
  {
    slug: 'actions', icon: '📌', name: 'Actions Management',
    headline: 'The loop that actually closes across every workflow',
    blurb: 'The closure loop across every module.',
    meta: 'Actions management across the entire Onos EHSQ operating system — one live stream for every corrective and preventive action, with owners, evidence, escalation and Q follow-up.',
    sub: 'Every action from every source — observations, incidents, audits, RAMS, permits, quality issues, assets and environmental events — in one tracked stream with owners, deadlines, evidence and escalation.',
    pains: [
      ['Actions are scattered everywhere', 'Spreadsheets, emails, meeting minutes, audit reports and WhatsApp threads each hold a different part of the backlog.'],
      ['Ownership without follow-up', 'Assigned does not mean done. The system needs to chase, escalate and prove closure.'],
      ['No evidence of control', 'A closed action without evidence is just another future audit finding.']
    ],
    features: [
      ['One stream, every source', 'Every corrective and preventive action in one live view, whatever module raised it.'],
      ['Owners, deadlines, evidence', 'Each action has an accountable owner, due date, risk level and proof of closure.'],
      ['Risk-based escalation', 'Slipping high-risk actions escalate automatically; low-risk noise does not drown the team.'],
      ['Performance analytics', 'Closure rates, ageing curves, repeat issues and owner performance visible by site, division, contractor and risk area.']
    ],
    q: ['action-chasing', 'Q watches the backlog nobody wants to chase.', 'Q nudges owners before deadlines slip, escalates high-risk overdue actions and reads action patterns against incidents, audits, observations and project risk scores.'],
    stats: [['94', '%', 'weekly closure rates achieved'], ['48', 'h', 'advance nudges before due'], ['1', '', 'stream for every action source']],
    ctaSub: 'Bring a live action tracker. We will show how it becomes one accountable closure loop across the operating system.'
  },
  {
    slug: 'risk-management', icon: '⚠️', name: 'Risk Management',
    headline: 'A risk register that lives inside the work',
    blurb: 'A live risk picture connected to controls and evidence.',
    meta: 'Risk management connected to the full Onos operating system — live registers, RAMS, COSHH, controls, audits, actions and Q-powered project risk scoring.',
    sub: 'Dynamic risk registers, RAMS, COSHH and controls connected to incidents, observations, audits, actions, permits, assets and training — so risk reflects this week’s reality, not last year’s workshop.',
    pains: [
      ['Static registers', 'A risk register reviewed annually is a historical document, not an operating control.'],
      ['Controls unverified', 'Registers list controls; they rarely prove whether those controls are in place and working.'],
      ['No line of sight', 'Leadership cannot connect the register to what is happening on site today.']
    ],
    features: [
      ['Living registers', 'Risks linked to live data from incidents, observations, inspections, actions and permits.'],
      ['Control verification', 'Controls connect to inspections, documents, training records and evidence. Unverified controls are flagged.'],
      ['RAMS and COSHH connected', 'Risk assessments, method statements and chemical assessments sit in the same operating record as the work.'],
      ['Escalation thresholds', 'Risks breaching tolerance trigger review workflows and leadership visibility automatically.']
    ],
    q: ['risk-scoring', 'Q scores risk from the whole operating system.', 'Q combines registers with operational signals — overdue actions, incident velocity, inspection gaps, contractor compliance, permit status and observation patterns — so rising risk is visible before it lands.'],
    stats: [['24', '/7', 'register currency'], ['100', '%', 'controls traceable to evidence'], ['0', '', 'annual-workshop blind spots']],
    ctaSub: 'Bring a risk register, RAMS workflow or COSHH process. We will show how it becomes live inside Onos.'
  },
  {
    slug: 'permits', icon: '🔏', name: 'Permits to Work',
    headline: 'High-risk work, connected to the controls that make it safe',
    blurb: 'High-risk work linked to people, RAMS, training and site conditions.',
    meta: 'Digital permits connected to the Onos EHSQ operating system — request, approve, check competency, review RAMS, detect conflicts and evidence closure.',
    sub: 'Digital permits with competency checks, RAMS links, conflict visibility, approval workflows and live site-wide status — so work starts only when the controls are real.',
    pains: [
      ['Paper permits, real risks', 'A permit in a folder cannot check a ticket, spot a clash or alert anyone before it expires.'],
      ['Conflicting works', 'Hot works above, fuel storage below, excavation beside live services — paper systems find out afterwards.'],
      ['Expired and unsigned', 'Lapsed permits and missing authorisations surface in investigations, not in time.']
    ],
    features: [
      ['Smart request workflow', 'Permit requests check requester details, contractor status, attached RAMS and required controls before approval.'],
      ['Competency and access checks', 'Permit approval connects to induction, sign-in, training and role requirements.'],
      ['Conflict detection', 'Overlapping high-risk activities in the same zone are flagged before approval.'],
      ['Live permit board', 'Every active, requested, reviewed and closed permit visible across the site, with expiries counting down.']
    ],
    q: ['competency', 'Q checks the work against the system around it.', 'Q reads the permit alongside RAMS, competencies, sign-ins, contractor compliance, risk assessments and active work — catching gaps before people are exposed.'],
    stats: [['100', '%', 'permits competency-checked'], ['0', '', 'silent expiries'], ['1', '', 'live board across all sites']],
    ctaSub: 'Bring a permit template or high-risk workflow. We will show how Onos connects it to people, controls and evidence.'
  },
  {
    slug: 'digital-inductions', icon: '🎬', name: 'Digital Inductions',
    headline: 'Inducted before they arrive. Verified when they enter.',
    blurb: 'Site-ready before arrival, evidenced at access.',
    meta: 'Digital inductions in the Onos operating system — pre-arrival onboarding, comprehension checks, QR access, competency records and Q-powered workforce assurance.',
    sub: 'Workers complete site inductions on their own phone before day one — with records connected to sign-in, training, permits, competencies and access checks.',
    pains: [
      ['First mornings lost', 'Every new starter costs supervision time, cabin space and lost productivity.'],
      ['Inconsistent delivery', 'Induction quality depends on who delivers it and how rushed the morning is.'],
      ['Unprovable understanding', 'Sign-here sheets prove attendance, not comprehension.']
    ],
    features: [
      ['Self-serve, pre-arrival', 'Links sent before arrival; completed on any phone, in the worker’s language where needed.'],
      ['Comprehension checks', 'Assessments evidence understanding, not just presence.'],
      ['Site-specific content', 'Core company content plus site-specific hazards, rules, emergency arrangements and declarations.'],
      ['Linked to access', 'Sign-in checks induction status automatically, with exceptions visible to supervisors.']
    ],
    q: ['competency', 'Q turns induction records into workforce intelligence.', 'Induction records feed Q’s live competency picture, helping it check access, permits, training gaps and contractor readiness across the operation.'],
    stats: [['0', ' hrs', 'cabin time saved per starter'], ['100', '%', 'comprehension-assessed'], ['1', ' link', 'from booking to site-ready']],
    ctaSub: 'Bring an existing induction pack. We will show how it becomes a pre-arrival workflow connected to the full system.'
  },
  {
    slug: 'site-sign-in', icon: '📍', name: 'Site Sign-In',
    headline: 'Who’s on site. Verified. Connected. Live.',
    blurb: 'Who is on site, verified and connected to the record.',
    meta: 'Digital site sign-in connected to the Onos EHSQ operating system — QR entry, induction checks, competency verification, live fire register, working hours and Q briefings.',
    sub: 'QR-code sign-in that checks induction, competency and declarations at entry — while feeding the live fire register, working hours, site returns, AFR calculations and Q briefings.',
    pains: [
      ['The book lies', 'Paper sign-in books are incomplete the moment someone forgets — which is daily.'],
      ['Checks happen too late', 'A signature line cannot verify an induction, CSCS card, training requirement or contractor status.'],
      ['Muster chaos', 'In a real evacuation, the register is the difference between control and confusion.']
    ],
    features: [
      ['Scan and you are in', 'Personal QR codes sign workers, visitors and subcontractors in and out in seconds.'],
      ['Entry gating', 'Induction, competency, declarations and access requirements checked at the gate.'],
      ['Live fire register', 'Real-time on-site list on any supervisor’s phone, with muster support.'],
      ['Operating data created automatically', 'Attendance feeds hours, AFR, site returns, fatigue questions, security and performance reporting.']
    ],
    q: ['briefings', 'Q reads sign-in as an operating signal.', 'Unexpected absences, failed gate checks, unusual attendance, agency-worker patterns and access exceptions surface in Q’s briefings before they become management surprises.'],
    stats: [['90', '%+', 'field adoption — workers actually use it'], ['100', '%', 'accurate fire registers'], ['2', 's', 'to sign in at the gate']],
    ctaSub: 'Bring your current site access process. We will show how it becomes a live workforce and compliance record.'
  },
  {
    slug: 'site-returns', icon: '📤', name: 'Site Returns',
    headline: 'Site returns without the chase',
    blurb: 'Periodic returns without the chase, feeding reporting and KPIs.',
    meta: 'Monthly and weekly site returns in the Onos operating system — collect labour, plant, progress and environmental data, validate at source and feed reporting automatically.',
    sub: 'Labour, plant, progress, environmental consumption and operational data collected on schedule, validated at source and connected to dashboards, AFR, carbon and board reporting.',
    pains: [
      ['The Friday chase', 'Someone spends every week chasing numbers that arrive late, wrong or in the wrong format.'],
      ['Format anarchy', 'Each site returns its own spreadsheet dialect; aggregation becomes manual archaeology.'],
      ['Data too late to matter', 'By the time returns are compiled, the week they describe has already gone.']
    ],
    features: [
      ['Scheduled collection', 'Returns requested, reminded and escalated automatically.'],
      ['Validated at entry', 'Required fields, sane ranges and unit checks improve accuracy before submission.'],
      ['Instant aggregation', 'Portfolio rollups available as returns land — no compilation step.'],
      ['Connected reporting', 'Hours feed AFR. Environmental entries feed carbon. Site data feeds dashboards and scheduled reports.']
    ],
    q: ['environmental', 'Q turns returns into signals, not spreadsheets.', 'Q reads site returns against incidents, observations, hours, environmental data and project performance — flagging anomalies while there is still time to act.'],
    stats: [['0', '', 'Friday chasing hours'], ['100', '%', 'validated at source'], ['1', '', 'click to portfolio rollup']],
    ctaSub: 'Bring your weekly or monthly return. We will show how it becomes a connected performance and reporting workflow.'
  },
  {
    slug: 'assets', icon: '🏗', name: 'Asset Management',
    headline: 'Every asset, inspected and accountable',
    blurb: 'Plant, equipment and statutory checks in one live record.',
    meta: 'Asset management connected to Onos EHSQ — QR-tagged plant, equipment, inspection histories, statutory schedules, defects, actions and Q-powered compliance prompts.',
    sub: 'Plant, equipment and lifting gear with QR-tagged identities, inspection schedules, service records, defects, actions and full history — connected to the same EHSQ operating system.',
    pains: [
      ['Unknown inspection status', 'The grinder in the container — when was it last PAT tested? Nobody knows.'],
      ['Statutory schedules slip', 'LOLER, PUWER and other inspections tracked in spreadsheets miss quietly.'],
      ['Histories scattered', 'An asset’s story lives across suppliers, sites, folders and filing cabinets.']
    ],
    features: [
      ['QR-tagged identity', 'Scan any asset for status, history, image, location and next inspection due.'],
      ['Statutory scheduling', 'LOLER, PUWER, PAT and custom regimes tracked with advance warnings.'],
      ['Defect and quarantine workflows', 'Failed items create actions and visibility before anyone uses them again.'],
      ['Whole-life history', 'Inspections, defects, repairs, transfers, costs and evidence in one timeline.']
    ],
    q: ['briefings', 'Q reads asset status as part of operational risk.', 'Assets approaching statutory deadlines, repeated defects and failed checks surface in Q briefings, risk scores and action follow-up.'],
    stats: [['1', ' scan', 'to full asset history'], ['0', '', 'missed statutory inspections'], ['100', '%', 'quarantine visibility']],
    ctaSub: 'Bring an asset register or inspection schedule. We will show how it becomes a live compliance record.'
  },
  {
    slug: 'environmental', icon: '🌍', name: 'Environmental',
    headline: 'Environmental performance, managed live',
    blurb: 'Carbon, waste, water, fuel, electricity and incidents, traceable to source.',
    meta: 'Environmental and sustainability management in Onos — carbon, waste, water, fuel, electricity, transport, biodiversity and incidents connected to the full EHSQ record and Q intelligence.',
    sub: 'Capture waste, water, fuel, electricity, transport, carbon, biodiversity and environmental incidents in normal workflows — then report with figures traceable to source.',
    pains: [
      ['Year-end estimates', 'Carbon numbers built annually by hand from receipts, returns and assumptions.'],
      ['Untracked obligations', 'Permits, consent limits and environmental conditions monitored on goodwill.'],
      ['ESG without evidence', 'Sustainability claims that cannot trace to source records will not survive scrutiny.']
    ],
    features: [
      ['Capture in the workflow', 'Waste transfers, fuel, water, energy and transport data captured as part of normal site routines.'],
      ['Consent and permit tracking', 'Environmental permits, limits, monitoring and alerts connected to evidence.'],
      ['Environmental incidents', 'Spills, exceedances and observations managed with the same discipline as safety events.'],
      ['Disclosure-ready data', 'Carbon and sustainability reporting with each figure linked back to source records.']
    ],
    q: ['environmental', 'Q tracks the footprint across the operating system.', 'Q reads environmental data from site returns, incidents, consumption records, waste, fuel and energy — flagging anomalies in-month and drafting traceable summaries.'],
    stats: [['100', '%', 'figures traceable to source'], ['12', '%', 'anomalies caught in-month'], ['0', '', 'year-end scrambles']],
    ctaSub: 'Bring your current carbon, waste or site-return process. We will show how it becomes traceable and live.'
  },
  {
    slug: 'quality-management', icon: '💎', name: 'Quality Management',
    headline: 'Quality and safety, on the same operating system',
    blurb: 'NCRs, defects, ITPs, standards and evidence in the same system.',
    meta: 'Quality management in the Onos operating system — NCRs, defects, snags, ITPs, audits, standards, evidence and Q-powered ISO readiness.',
    sub: 'ITPs, quality inspections, non-conformances, snags, defects, standards and evidence connected to the same actions, audits, people, contractors and reporting as EHS.',
    pains: [
      ['NCRs in email threads', 'Non-conformances raised informally disappear without root cause or closure.'],
      ['Hold points on trust', 'Witness and hold points tracked in programmes nobody checks daily.'],
      ['Handover scramble', 'Quality records assembled retrospectively cost weeks at completion.']
    ],
    features: [
      ['Digital ITPs', 'Inspection and test plans with hold points, witness requirements and sign-off workflows.'],
      ['NCR lifecycle', 'Non-conformances from identification through root cause, action, verification and closure.'],
      ['Defect and snag management', 'Photos, locations, owners, floor plans, evidence and deadlines tracked to zero.'],
      ['Handover by default', 'Quality records accumulate as work proceeds; completion evidence is created as a by-product.']
    ],
    q: ['compliance', 'Q reads quality as part of the full performance picture.', 'Q maps quality records to ISO 9001, spots repeat issues, links supplier performance and helps turn NCR patterns into preventive actions.'],
    stats: [['0', ' wks', 'handover record assembly'], ['100', '%', 'NCRs tracked to closure'], ['9001', '', 'evidenced continuously']],
    ctaSub: 'Bring a defect, NCR or ITP workflow. We will show how it becomes connected to the full operating system.'
  },
  {
    slug: 'supply-chain', icon: '🔗', name: 'Supply Chain',
    headline: 'Your standards, their compliance, one live record',
    blurb: 'Contractor compliance, documents, credentials and performance.',
    meta: 'Supply chain compliance in Onos — contractor onboarding, documents, certificates, insurances, RAMS, training, performance and Q-powered chasing.',
    sub: 'Onboard, prequalify and continuously verify every contractor — insurances, accreditations, RAMS, competencies, performance and access status — with the chasing handled automatically.',
    pains: [
      ['Prequalification theatre', 'A PQQ snapshot from eighteen months ago says little about today’s work.'],
      ['Expiry roulette', 'Insurance, accreditations and tickets lapse quietly until someone finds out the hard way.'],
      ['Document chaos', 'RAMS, certificates, policies and evidence scattered across inboxes and shared drives.']
    ],
    features: [
      ['Self-serve onboarding', 'Contractors upload and maintain credentials through a controlled portal.'],
      ['Continuous verification', 'Live red-amber-green status per company, site and requirement — not annual snapshots.'],
      ['Automated chasing', 'Renewals and missing documents requested, reminded and escalated automatically.'],
      ['Linked to access and work', 'Procurement, site sign-in, permits and RAMS workflows all see live contractor status.']
    ],
    q: ['supply-chain', 'Q reads contractor risk before it reaches the work front.', 'Q watches expiries, contractor gaps, performance issues, RAMS status and training records — then flags non-compliance before award, access or permit issue.'],
    stats: [['86', '', 'subcontractors verified live'], ['30', ' days', 'advance expiry warning'], ['0', '', 'gate surprises']],
    ctaSub: 'Bring your contractor tracker. We will show how it becomes a live compliance and performance record.'
  },
  {
    slug: 'training', icon: '🎓', name: 'Training Management',
    headline: 'The competency matrix that the operating system actually uses',
    blurb: 'The competency matrix that stays current because the system uses it.',
    meta: 'Training and competency management in Onos — live matrix, tickets, certificates, online courses, subcontractor evidence, role requirements and Q-powered assurance.',
    sub: 'Track tickets, cards, certificates, courses and role requirements across direct employees and subcontractors — then connect them to sign-in, permits, RAMS, audits and access.',
    pains: [
      ['Spreadsheet decay', 'The training matrix is out of date the day it is saved.'],
      ['Expiry surprises', 'Lapsed tickets appear at the gate, the audit or the incident.'],
      ['Evidence hunts', 'Client asks for the matrix; someone loses a day building it.']
    ],
    features: [
      ['Live matrix', 'Direct workforce and subcontractor operatives in one current competency picture.'],
      ['Role requirements', 'Define what each role, site and permit type requires; gaps surface automatically.'],
      ['Online courses and evidence', 'Build courses, quizzes, requests and evidence-review workflows inside the same platform.'],
      ['Expiry horizon', 'Everything expiring soon, visible and chased before it becomes a site issue.']
    ],
    q: ['competency', 'Q checks competency against real work.', 'Q cross-references training against sign-ins, permits, RAMS, site access and role requirements — catching the gap before someone unqualified ends up on the tools.'],
    stats: [['1042', '', 'records under live watch'], ['90', ' days', 'expiry horizon always visible'], ['0', ' days', 'lost to evidence hunts']],
    ctaSub: 'Bring your training matrix. We will show how it becomes live, connected and usable by the rest of the system.'
  },
  {
    slug: 'dashboard-reporting', icon: '📊', name: 'Dashboards & Reporting',
    headline: 'One screen. The whole operating truth.',
    blurb: 'Live views, scheduled reports and board packs from one source of truth.',
    meta: 'Dashboards and reporting in the Onos operating system — live EHSQ views, scheduled reports, client portals, board packs and Q-powered answers from one source of truth.',
    sub: 'Live dashboards across every module, site and KPI — with scheduled reports, client views, board packs and Q answers all drawn from the same system of record.',
    pains: [
      ['Report lag', 'Decisions made on data that was true three weeks ago.'],
      ['Excel as middleware', 'Every report means exports, pivots, screenshots, copy-paste and avoidable errors.'],
      ['One-size-fits-nobody', 'The site manager, EHSQ lead, operations director and board need different views of the same truth.']
    ],
    features: [
      ['Live, role-based dashboards', 'Site, project, portfolio, client, board and module-specific views from the same records.'],
      ['Scheduled distribution', 'Recurring reports send themselves with current numbers and evidence.'],
      ['Client visibility', 'Share controlled slices with clients, contractors and stakeholders.'],
      ['Export and API', 'Everything exportable, reportable and available to your wider BI stack where needed.']
    ],
    q: ['ask-q', 'Dashboards show the picture. Q explains what matters.', 'Dashboards answer the questions you predicted. Q answers the ones you did not — across the full operating system, with sources linked.'],
    stats: [['0', ' days', 'reporting lag removed'], ['100', '%', 'live, role-based views'], ['50000', '+', 'reports filed on Onos']],
    ctaSub: 'Bring last month’s board pack. We will show how Onos turns the source data into live reporting and Q-ready answers.'
  },
  {
    slug: 'performance', icon: '📈', name: 'Performance',
    headline: 'Leading indicators, leading decisions',
    blurb: 'Leading indicators and live risk movement across sites and teams.',
    meta: 'EHSQ performance management in Onos — leading indicators, site scores, contractor performance, closure rates, inspection coverage and Q-powered risk movement.',
    sub: 'Track the metrics that predict outcomes — participation, closure rates, inspection coverage, training status, contractor performance and risk movement — alongside the lagging ones regulators require.',
    pains: [
      ['Lagging-only vision', 'LTIFR tells you about last year. It cannot protect next week.'],
      ['KPIs without context', 'Numbers with no benchmark, target, trend or driver are decoration.'],
      ['Site-vs-site opacity', 'Without comparable metrics, best practice stays trapped where it started.']
    ],
    features: [
      ['Leading indicator suite', 'Observation rates, action closure, inspection coverage, engagement, training status and contractor performance.'],
      ['Benchmarking', 'Compare sites, divisions, regions, contractors and periods on a consistent basis.'],
      ['Target and threshold alerts', 'Drifting metrics raise their hands before review meetings find them.'],
      ['Regulatory metrics included', 'AFR, LTIFR, RIDDOR rates and other required metrics calculated from source data.']
    ],
    q: ['risk-scoring', 'Q turns performance signals into risk movement.', 'Q synthesises leading indicators into live project risk scores and explains what changed — overdue actions, inspection gaps, incident velocity, contractor status or engagement drop-off.'],
    stats: [['10', '+', 'leading indicators trended'], ['100', '%', 'consistent cross-site comparison'], ['0', '', 'metrics compiled by hand']],
    ctaSub: 'Bring your current KPI pack. We will show how it becomes live, comparable and Q-readable.'
  },
  {
    slug: 'safety-talks', icon: '🗣', name: 'Safety Talks',
    headline: 'Toolbox talks that respond to what is actually happening',
    blurb: 'Briefings and toolbox talks targeted by what the data says crews need.',
    meta: 'Safety talks, alerts and briefings in Onos — targeted content, attendance evidence, read receipts, comprehension checks and Q-suggested topics from live trends.',
    sub: 'Deliver, record and evidence safety talks, alerts and briefings — with topics targeted by live observation, incident and inspection trends.',
    pains: [
      ['Sign-and-forget', 'A signature sheet proves a talk happened, not that anything landed.'],
      ['Generic content', 'The same laminated talk goes out regardless of what is happening on site this week.'],
      ['Evidence gaps', 'Proving briefing coverage across crews and subcontractors takes days of collation.']
    ],
    features: [
      ['Digital delivery and capture', 'Run talks from mobile or desktop; record attendance by QR scan or digital sign-off.'],
      ['Comprehension checks', 'Quick assessments evidence understanding and flag where the message missed.'],
      ['Data-driven topics', 'Content suggested from live observations, incidents, actions and Q pattern reports.'],
      ['Coverage tracking', 'Who has been briefed on what, across every site, crew and contractor.']
    ],
    q: ['pattern-detection', 'Q tells you what this week’s talk should be about.', 'Q reads live trends and patterns, then suggests topics based on the actual risks appearing across your operation — not a generic annual calendar.'],
    stats: [['100', '%', 'attendance evidenced digitally'], ['0', ' days', 'collation for coverage proof'], ['1', '', 'talk targeted per live trend']],
    ctaSub: 'Bring a recent incident trend or toolbox pack. We will show how Onos targets, delivers and evidences the briefing.'
  },
  {
    slug: 'document-manager', icon: '📁', name: 'Document Manager',
    headline: 'One source of truth, version-controlled and Q-readable',
    blurb: 'Controlled documents, versions, acknowledgements and RAMS intelligence.',
    meta: 'Document control in Onos — policies, procedures, RAMS, drawings, certificates, version control, read acknowledgement and Q-powered review.',
    sub: 'Policies, procedures, RAMS, drawings, certificates and controlled documents with version history, distribution, acknowledgement and intelligence built in.',
    pains: [
      ['Version chaos', 'Rev C on site, Rev E in the office, Rev D in someone’s inbox.'],
      ['Unacknowledged updates', 'The procedure changed; who actually read it is anybody’s guess.'],
      ['Findable by folklore', 'Documents located by asking the person who has been there longest.']
    ],
    features: [
      ['Version control', 'One current version, full history and superseded copies withdrawn automatically.'],
      ['Controlled distribution', 'Documents pushed to the roles, sites, teams and contractors that need them.'],
      ['Read and understood', 'Acknowledgement tracking turns "we issued it" into "they read it".'],
      ['Linked everywhere', 'Documents attach to permits, inductions, audits, assets, RAMS, training and actions.']
    ],
    q: ['rams-review', 'Q reads the documents, not just their filenames.', 'Q reviews RAMS, method statements and supporting documents, flags gaps, detects generic copy and links findings to actions, contractors, permits and risk records.'],
    stats: [['1', '', 'current version, always'], ['100', '%', 'read-acknowledgement visibility'], ['0', '', 'documents found by folklore']],
    ctaSub: 'Bring a RAMS, policy or document register. We will show how it becomes controlled, traceable and Q-readable.'
  }
];
