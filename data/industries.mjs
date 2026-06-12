// 6 industry verticals. Copy source: ONOS_MASTER_COPY.md (operating-system positioning).
export const INDUSTRIES = [
  {
    slug: 'construction', icon: '🏗', name: 'Construction',
    headline: 'The EHSQ operating system for contractors who cannot afford blind spots.',
    indexBlurb: 'Multiple sites, layered subcontractors, RAMS, CDM 2015, RIDDOR, permits and a workforce that changes weekly.',
    landingBlurb: 'Multiple sites, layered subcontractors, RAMS, CDM 2015, RIDDOR, permits, inductions and a workforce that changes weekly.',
    meta: 'Onos for construction EHSQ — one operating system for observations, RAMS, permits, inductions, sign-in, supply chain, incidents, audits, actions and Q intelligence.',
    sub: 'Multiple sites, layered subcontractors, CDM 2015, RIDDOR, RAMS, permits and a workforce that changes weekly. Onos connects the construction workflow — QR-first, offline-capable, supply-chain-deep and Q-readable.',
    pains: [
      ['Fragmented project data', 'Information scattered across emails, forms, spreadsheets and legacy platforms — no single picture of any project.'],
      ['Admin over risk', 'Site teams spend their hours chasing paperwork instead of controlling the work front.'],
      ['Supply chain opacity', 'Most of the workforce — and much of the risk — belongs to subcontractors you cannot see clearly enough.'],
      ['Reactive safety', 'Early warnings buried in observations, permits, RAMS and actions until the incident report explains them afterwards.']
    ],
    solHead: 'Purpose-built for the way construction actually works.',
    solutions: [
      'QR-code observations, sign-in and inductions that field teams and subcontractors can actually use',
      'RAMS, permits, risk assessments and competency checks connected before work starts',
      'Subcontractor compliance — insurances, accreditations, RAMS, tickets — verified continuously',
      'CDM 2015, RIDDOR, ISO and client evidence built as a by-product of normal work'
    ],
    q: 'Q reads every observation, RAMS, permit, contractor record, action and incident across your projects — then scores risk, spots weak signals and briefs leads before the work front moves.',
    modules: ['safety-observations', 'permits', 'supply-chain', 'site-sign-in', 'digital-inductions', 'incident-management'],
    cta: ['Construction EHSQ that works<br><span class="grad-text">like construction works.</span>', 'Bring one live project, one RAMS process or one contractor headache. We will show how Onos turns it into one operating system.']
  },
  {
    slug: 'manufacturing', icon: '🏭', name: 'Manufacturing',
    headline: 'Safety and quality, on the same operating line.',
    indexBlurb: 'Safety, quality, assets, training, COSHH, LOTO, audits and shift handovers on the same operating line.',
    landingBlurb: 'Shifts, machinery, LOTO, COSHH, quality issues, asset checks, training matrices and ISO evidence on the same operating line.',
    meta: 'Onos for manufacturing EHSQ — one operating system for safety, quality, assets, training, audits, COSHH, incidents, shift handovers and Q intelligence.',
    sub: 'Shift patterns, machinery, LOTO, COSHH, training, asset checks and quality systems that live or die by discipline. Onos unifies EHSQ so the factory runs one system, not five.',
    pains: [
      ['EHS and quality in silos', 'Two systems, two cultures, one production line — and findings that never meet.'],
      ['Shift handover gaps', 'What nights discovered, days never hears about.'],
      ['Machine-level blind spots', 'Inspection, maintenance and defect histories scattered per asset and era.'],
      ['Audit fatigue', 'ISO 45001, 14001 and 9001 each trigger their own evidence hunt.']
    ],
    solHead: 'Purpose-built for the way factories run.',
    solutions: [
      'One platform for incidents, near-misses, NCRs, audits, assets, training and actions',
      'Shift-aware capture, handover and performance visibility',
      'QR-tagged assets with statutory and preventive inspection schedules',
      'Continuous ISO evidence across safety, environmental and quality standards'
    ],
    q: 'Q spots patterns across shifts, machines, issues and actions; keeps your ISO evidence live; and briefs each lead on what the last shift left behind.',
    modules: ['quality-management', 'assets', 'audits-inspections', 'incident-management', 'training', 'environmental'],
    cta: ['Manufacturing EHSQ that sees<br><span class="grad-text">the whole line.</span>', 'Bring a shift handover, audit, asset check or quality issue workflow. We will show how Onos connects it.']
  },
  {
    slug: 'logistics-warehousing', icon: '🚛', name: 'Logistics & Warehousing',
    headline: 'Fast-moving sites need an EHSQ system that keeps up.',
    indexBlurb: 'MHE, agency labour, racking inspections, customer audits, site returns and fast-moving operational risk.',
    landingBlurb: 'MHE and pedestrians, agency labour, racking inspections, customer audits, site returns and rapid shift turnover.',
    meta: 'Onos for logistics and warehousing EHSQ — one operating system for sign-in, inductions, observations, MHE risk, racking inspections, assets, customer audits and Q intelligence.',
    sub: 'MHE and pedestrians in shared space, agency workers arriving daily, racking inspections, customer audits and site returns on tight timelines. Onos gives every depot one live operating picture.',
    pains: [
      ['Transient workforce', 'Agency staff start at 6am; induction and competency checks cannot wait until 9.'],
      ['MHE-pedestrian interface', 'The highest-consequence risk in the building often depends on paint, memory and luck.'],
      ['Inspection regimes drift', 'Racking, MHE, plant and equipment checks tracked across spreadsheets slip quietly.'],
      ['Customer audit pressure', 'Major customers can ask for evidence today. It cannot take a week to assemble.']
    ],
    solHead: 'Purpose-built for the pace of logistics.',
    solutions: [
      'Pre-arrival digital inductions and instant QR sign-in for agency and contractor workers',
      'Near-miss and observation capture fast enough for the warehouse floor',
      'Asset and racking inspection schedules with automatic escalation',
      'Customer-ready evidence generated from live records, not post-audit collation'
    ],
    q: 'Q watches leading indicators per shed, shift and risk area — flagging MHE near-miss clusters, overdue racking checks and recurring action failures before they turn into incidents.',
    modules: ['site-sign-in', 'digital-inductions', 'safety-observations', 'assets', 'audits-inspections', 'actions'],
    cta: ['EHSQ that keeps pace<br><span class="grad-text">with the dock.</span>', 'Bring a depot, shift pattern, audit pack or racking inspection regime. We will show how Onos connects it.']
  },
  {
    slug: 'oil-gas', icon: '🛢', name: 'Oil & Gas',
    headline: 'High-hazard discipline, connected by one operating system.',
    indexBlurb: 'Permit discipline, process and personal safety, remote work, asset evidence and regulatory pressure.',
    landingBlurb: 'Permit-to-work discipline, remote sites, safety-critical evidence, asset integrity and process-risk controls.',
    meta: 'Onos for oil and gas EHSQ — one operating system for permits, risk, assets, audits, incidents, documents, offline work and Q-powered high-hazard intelligence.',
    sub: 'Permit-to-work as a way of life, process safety alongside personal safety, remote sites with no signal and regulators who expect evidence. Onos keeps the record live and Q-readable.',
    pains: [
      ['Permit complexity', 'Concurrent high-energy permits with isolations, gas tests and handovers — often still paper-heavy.'],
      ['Process vs personal safety', 'Barrier health and process indicators tracked separately from the safety system.'],
      ['Remote, offline operations', 'Cloud-only software fails where the work actually happens.'],
      ['Regulatory weight', 'Every safety-critical record must be defensible, traceable and current.']
    ],
    solHead: 'Purpose-built for disciplined high-risk work.',
    solutions: [
      'Digital permit-to-work connected to RAMS, competency, isolation and handover records',
      'Offline capture and sync for remote and low-signal environments',
      'Barrier and critical-control verification linked to inspections and actions',
      'Timestamped evidence chains on every safety-critical workflow'
    ],
    q: 'Q monitors permit conflicts, control verification, action status and incident signals continuously — giving leadership a live risk picture across remote assets.',
    modules: ['permits', 'risk-management', 'audits-inspections', 'incident-management', 'assets', 'document-manager'],
    cta: ['EHSQ that holds the line<br><span class="grad-text">under pressure.</span>', 'Bring a permit, asset or critical-control workflow. We will show how Onos connects the evidence.']
  },
  {
    slug: 'pharmaceutical', icon: '💊', name: 'Pharmaceutical',
    headline: 'EHS rigour to match your quality discipline.',
    indexBlurb: 'EHS controls, COSHH, containment, environmental monitoring and audit trails that stand beside quality discipline.',
    landingBlurb: 'EHS rigour that can stand beside GxP discipline: COSHH, containment, environmental monitoring, audit trails and training.',
    meta: 'Onos for pharmaceutical EHSQ — one operating system for COSHH, containment, environmental monitoring, training, audits, quality evidence and Q-powered inspection readiness.',
    sub: 'You already run validated systems for product quality. Onos brings the same operating discipline to EHS — COSHH, containment, training, environmental monitoring and audit trails that stand up to scrutiny.',
    pains: [
      ['Quality-EHS divide', 'World-class GxP discipline beside spreadsheet-grade safety management.'],
      ['Containment and COSHH load', 'High-potency compounds demand exposure-control evidence at scale.'],
      ['Change control friction', 'EHS implications assessed informally and evidenced inconsistently.'],
      ['Inspection readiness', 'HSE and environmental regulators expect the same readiness your quality systems show.']
    ],
    solHead: 'Purpose-built for controlled environments.',
    solutions: [
      'COSHH assessments, exposure controls and containment verification in one system',
      'Audit trails, access controls and evidence that quality teams can trust',
      'Environmental monitoring with consent limits and exceedance alerts',
      'EHS review embedded into actions, documents, training and quality workflows'
    ],
    q: 'Q maps evidence continuously across 45001, 14001 and 9001, flags environmental or exposure anomalies and keeps EHS evidence as inspection-ready as your quality records.',
    modules: ['risk-management', 'environmental', 'audits-inspections', 'training', 'document-manager', 'quality-management'],
    cta: ['EHSQ that speaks<br><span class="grad-text">regulated operations.</span>', 'Bring a COSHH, audit or environmental evidence workflow. We will show how Onos connects it.']
  },
  {
    slug: 'events-facilities', icon: '🎪', name: 'Events & Facilities',
    headline: 'Many venues. Many contractors. One operating standard.',
    indexBlurb: 'Contractor-heavy operations, public interface, compressed timelines, changing venues and one required standard.',
    landingBlurb: 'Contractor-heavy operations, changing venues, compressed timelines, live sign-in, permits, inductions and consistent standards.',
    meta: 'Onos for events and facilities EHSQ — one operating system for contractors, inductions, sign-in, permits, inspections, incidents, multi-venue consistency and Q intelligence.',
    sub: 'Build-ups and break-downs on brutal timelines, contractor-heavy operations, public-facing risk and venues that change weekly. Onos keeps every site on one standard.',
    pains: [
      ['Compressed timelines', 'Three days to build what construction would programme over months.'],
      ['Contractor-dominated work', 'Almost everyone on site works for someone else.'],
      ['Public interface', 'The risk profile includes thousands of people who never signed anything.'],
      ['Multi-venue consistency', 'Every venue does it differently unless the system makes consistency easy.']
    ],
    solHead: 'Purpose-built for temporary, complex operations.',
    solutions: [
      'Rapid contractor onboarding, inductions and competency checks before arrival',
      'Live sign-in and accurate occupancy across build, show and break phases',
      'Standardised inspections and permits deployed consistently at every venue',
      'Incident and near-miss capture fast enough for show-day pace'
    ],
    q: 'Q verifies contractor readiness, watches observation patterns across venues and gives leadership a live risk picture from load-in to load-out.',
    modules: ['supply-chain', 'site-sign-in', 'digital-inductions', 'permits', 'safety-observations', 'incident-management'],
    cta: ['EHSQ that travels<br><span class="grad-text">with the operation.</span>', 'Bring a venue, contractor or event build workflow. We will show how Onos turns it into one operating standard.']
  }
];
