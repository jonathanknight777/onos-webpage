import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SUPERPOWERS } from './data/superpowers.mjs';
import { PRODUCTS } from './data/products.mjs';
import { INDUSTRIES } from './data/industries.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const DEMO = 'https://cal.com/onostech/web-intro';
// Bump on any assets/site.css|js change — busts browser caches on rebuild.
const ASSET_V = '9';

const sp = slug => SUPERPOWERS.find(s => s.slug === slug);
const prod = slug => PRODUCTS.find(p => p.slug === slug);

/* ---------------- layout ---------------- */
function nav(p, active) {
  const links = [
    ['Onos Q', `${p}q/index.html`, 'q'],
    ['Platform', `${p}platform.html`, 'platform'],
    ['Industries', `${p}industries.html`, 'industries'],
    ['Why Onos', `${p}why-onos.html`, 'why'],
    ['FAQ', `${p}faq.html`, 'faq'],
    ['Contact', `${p}contact.html`, 'contact'],
  ];
  return `<nav class="site-nav" id="nav">
  <a class="logo" href="${p}index.html"><span class="logo-dot"></span>onos</a>
  <div class="nav-links">
    ${links.map(([t, h, k]) => `<a href="${h}"${k === active ? ' class="active"' : ''}>${t}</a>`).join('\n    ')}
    <a href="${DEMO}" class="btn btn-primary">Book a Demo <span class="arrow">→</span></a>
  </div>
</nav>`;
}

function footer(p) {
  const col = (title, items) => `<div><h4>${title}</h4><ul>${items.map(([t, h]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>`;
  return `<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <a class="logo" href="${p}index.html" style="font-size:22px"><span class="logo-dot"></span>onos</a>
      <p>The EHSQ operating system that reads the warning signs — powered by Onos Q. Proudly built in Belfast, Northern Ireland.</p>
    </div>
    ${col('Onos Q', SUPERPOWERS.slice(0, 6).map(s => [s.short, `${p}q/${s.slug}.html`]).concat([['All 12 superpowers', `${p}q/index.html`]]))}
    ${col('Platform', PRODUCTS.slice(0, 6).map(x => [x.name, `${p}products/${x.slug}.html`]).concat([['All 18 modules', `${p}platform.html`]]))}
    ${col('Industries', INDUSTRIES.map(i => [i.name, `${p}industries/${i.slug}.html`]))}
    ${col('Company', [['Why Onos', `${p}why-onos.html`], ['Resources', `${p}resources.html`], ['Security & Compliance', `${p}security-compliance.html`], ['FAQ', `${p}faq.html`], ['Contact', `${p}contact.html`], ['LinkedIn', 'https://www.linkedin.com/company/onostech']])}
  </div>
  <div class="footer-bottom">
    <div>© 2026 Onos. Built so everyone goes home.</div>
    <div class="legal"><a href="${p}security-compliance.html">ISO 27001</a><a href="#">Privacy</a><a href="#">Cookies</a><a href="#">Terms</a></div>
  </div>
</footer>`;
}

function layout({ depth = 0, title, desc, active = '', body, landing = false }) {
  const p = depth ? '../' : '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${p}assets/site.css?v=${ASSET_V}">
</head>
<body>
<div class="cursor-glow" id="cursorGlow"></div>
<div class="scroll-progress" id="scrollProgress"></div>
${nav(p, active)}
${body}
${landing ? '' : trustStrip(p)}
${footer(p)}
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js"></script>
<script src="${p}assets/site.js?v=${ASSET_V}"></script>
</body>
</html>`;
}

/* ---------------- shared fragments ---------------- */
const feedHtml = (lines, lg = false) => `<div class="q-feed${lg ? ' lg' : ''}">${lines.map(([cls, pre, txt]) => `<span class="ln"><span class="${cls}">${pre}</span> ${txt}</span>`).join('')}</div>`;

function qCard(s, p, { feed = true, text = null } = {}) {
  return `<div class="q-card ${s.color}">
  <div class="q-icon">${s.icon}</div>
  <div class="q-tag">Superpower ${s.n} — ${s.tagline}</div>
  <h3><span class="q-name">Q</span>${s.short.slice(1)}</h3>
  <p>${text || s.card}</p>
  ${feed ? feedHtml(s.feed.slice(0, 3)) : ''}
  <a class="more" href="${p}q/${s.slug}.html">Explore this superpower <span class="arrow">→</span></a>
</div>`;
}

const LOGO_FILES = ['graham', 'mcavoy', 'almac', 'kilwaughter', 'crown', 'neilcott', 'bretland', 'irwin', 'floorform', 'msm', 'suir', 'mowlem', 'martin'];
function trustStrip(p) {
  const half = LOGO_FILES.map(l => `<span class="tl"><img src="${p}assets/img/logos/${l}.png" alt="${l}" loading="lazy"></span>`).join('');
  return `<section class="trust-strip">
  <div class="label">Trusted by Graham · McAvoy · Almac · Kilwaughter · Crown · Neilcott · Bretland — the teams that build, make and move the UK &amp; Ireland</div>
  <div class="marquee" style="--marq-speed:38s">
    <div class="marquee-inner"><div class="m-half trust-logos">${half}</div><div class="m-half trust-logos">${half}</div></div>
  </div>
</section>`;
}

const ctaBox = (h, sub, note) => `<section class="cta">
  <div class="cta-box reveal">
    <h2>${h}</h2>
    <p>${sub}</p>
    <div class="cta-ctas">
      <a href="${DEMO}" class="btn btn-primary" data-magnetic>Book a Demo <span class="arrow">→</span></a>
      <a href="mailto:hi@onos.app" class="btn btn-ghost" data-magnetic>Talk to our team</a>
    </div>
    <div class="cta-note">${note}</div>
  </div>
</section>`;

const pageHero = (p, crumbs, h1, sub, ctas = true, img = null) => `<section class="page-hero${img ? ' has-photo' : ''}">
  <div class="container">
    <div>
      <div class="breadcrumbs">${crumbs.map(([t, h]) => h ? `<a href="${h}">${t}</a>` : `<span class="here">${t}</span>`).join('<span class="sep">/</span>')}</div>
      <h1>${h1}</h1>
      <p class="hero-sub" style="margin-top:26px">${sub}</p>
      ${ctas ? `<div class="hero-ctas"><a href="${DEMO}" class="btn btn-primary" data-magnetic>Book a Demo <span class="arrow">→</span></a></div>` : ''}
    </div>
    ${img ? `<div class="hero-photo"><img src="${p}assets/img/${img.src}" alt="${img.alt}" loading="lazy"><span class="ph-tag">${img.tag}</span></div>` : ''}
  </div>
</section>`;

const imgBand = (p, src, quote, cap) => `<section class="img-band">
  <img src="${p}assets/img/${src}" alt="" loading="lazy">
  <div class="band-inner">
    <div class="band-quote">${quote}</div>
    <div class="band-cap">${cap}</div>
  </div>
</section>`;

const appShot = (p) => `<div class="app-shot">
  <div class="as-bar"><span></span><span></span><span></span></div>
  <img src="${p}assets/img/app-dashboard.png" alt="The Onos dashboard" loading="lazy">
</div>`;

// Rotating site-photography pool for page heroes.
const PHOTOS = ['safety-worker-tablet.jpg', 'compliance-audit.jpg', 'worker-onboarding.jpg', 'industrial-site-overview.jpg', 'safety-team-meeting.jpg', 'ehsq-director-construction-site.jpg'];
const INDUSTRY_IMG = {
  construction: 'hero-bg-construction.jpg',
  manufacturing: 'industrial-site-overview.jpg',
  'logistics-warehousing': 'safety-worker-tablet.jpg',
  'oil-gas': 'industrial-site-overview.jpg',
  pharmaceutical: 'compliance-audit.jpg',
  'events-facilities': 'safety-team-meeting.jpg'
};

/* ---------------- landing page ---------------- */
function landingPage() {
  const p = '';
  // Grouped workflow cards from the master copy; grouped entries link to the most representative module.
  const featured = [
    ['safety-observations', 'Safety Observations', 'The best safety insight comes from people on the tools, not people in the office. QR-code reporting gives every worker a voice — and gives Q the weak signals.'],
    ['incident-management', 'Incident Management', 'Fast capture, structured investigations, RIDDOR workflows, root-cause analysis and lessons that travel across the business.'],
    ['audits-inspections', 'Audits & Inspections', 'Scheduled, mobile and offline-capable audits that convert findings into tracked actions and compliance evidence.'],
    ['actions', 'Actions Management', 'One live stream for every corrective and preventive action, with owners, deadlines, evidence, reminders and escalation.'],
    ['risk-management', 'Risk, RAMS & Permits', 'Risk assessments, method statements, COSHH and permits connected to people, contractors, competencies and live work.'],
    ['supply-chain', 'People, Supply Chain & Competency', 'Inductions, sign-in, training, contractor compliance, supplier records and access checks in one operational picture.'],
    ['quality-management', 'Quality & Environmental', 'NCRs, defects, standards, ITPs, carbon, waste, water, fuel, electricity and sustainability evidence connected to the same platform.'],
    ['dashboard-reporting', 'Dashboards, Site Returns & Reporting', 'Live dashboards, scheduled reports, site returns, board packs and client-ready evidence powered by the same source records.']
  ];
  const body = `
<section class="hero">
  <canvas id="neural-canvas"></canvas>
  <div class="hero-inner">
    <div class="hero-eyebrow reveal"><span class="live-dot"></span> Onos Q inside — twelve superpowers</div>
    <h1>
      <span class="line"><span>The EHSQ operating system</span></span>
      <span class="line"><span>that <span class="grad-text">reads the warning signs.</span></span></span>
    </h1>
    <p class="hero-sub reveal">Safety, quality, environmental and compliance in one connected system — with <strong>Onos Q</strong> reading every record, spotting rising risk and briefing your team before the day starts. Built so everyone goes home.</p>
    <div class="hero-ctas reveal">
      <a href="${DEMO}" class="btn btn-primary" data-magnetic>See Q in action <span class="arrow">→</span></a>
      <a href="q/index.html" class="btn btn-ghost" data-magnetic>Meet Onos Q</a>
    </div>
    <div class="hero-ticker reveal">
      <div class="tick"><div class="num"><em data-count="4" data-suffix=" wks">1</em></div><div class="lbl">Live in 1–4 weeks</div></div>
      <div class="tick"><div class="num"><em data-count="90" data-suffix="%+">0</em></div><div class="lbl">Field adoption</div></div>
      <div class="tick"><div class="num"><em data-count="12" data-suffix="">0</em></div><div class="lbl">Superpowers — Q built in</div></div>
      <div class="tick"><div class="num"><em data-count="24" data-suffix="/7">0</em></div><div class="lbl">On watch, UK &amp; Ireland</div></div>
    </div>
  </div>
  <div class="scroll-hint"><div class="wheel"></div>Scroll</div>
</section>

${trustStrip(p)}

<section class="problem section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">The status quo is broken</div>
    <h2 class="reveal">Your EHSQ data is not missing.<br>It is scattered.</h2>
    <p class="section-sub reveal">Incidents in one place. Training in another. RAMS in email. Actions in spreadsheets. Permits on paper. Environmental returns arriving late. Quality issues buried in photos and inboxes. Risk hides between systems.</p>
    <div class="problem-grid">
      <div class="problem-card reveal"><h3>Point tools create blind spots</h3><p>One app captures observations. Another stores training. Another holds documents. None of them sees the whole operation.</p></div>
      <div class="problem-card reveal"><h3>Admin becomes the system</h3><p>Teams spend the week chasing actions, compiling reports, rekeying data and proving work that already happened.</p></div>
      <div class="problem-card reveal"><h3>Warning signs go unread</h3><p>The signals that predict the next incident sit across observations, audits, permits, actions and contractor records — but nobody has time to connect them.</p></div>
    </div>
  </div>
</section>

<section class="statement">
  <p>What if your EHSQ platform did not just store the workflow — what if it connected every record, read every signal and told your team what needed attention before the day got away from them?</p>
</section>

<section class="q-wrap" id="onos-q">
  <div class="q-head">
    <div class="container">
      <div class="q-badge reveal-l"><div class="q-mark">Q</div><div class="eyebrow" style="margin:0">Onos Intelligence</div></div>
      <h2 class="reveal">Meet <span class="grad-text">Onos Q.</span><br>One intelligence. Twelve superpowers.</h2>
      <p class="section-sub reveal">Q is not a chatbot bolted onto a safety form. It is one intelligence woven through every Onos module — reading the whole operating system, connecting the work and turning scattered records into daily judgement. Here's what Q does for your team, around the clock.</p>
    </div>
  </div>
  <div class="q-track-outer" id="qTrackOuter">
    <div class="q-track" id="qTrack">
      ${SUPERPOWERS.map(s => qCard(s, p)).join('\n      ')}
    </div>
  </div>
  <div class="track-progress-wrap">
    <div class="track-progress"><div class="fill" id="trackFill"></div></div>
  </div>
</section>

<section class="pillars section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">Why intelligence changes everything</div>
    <h2 class="reveal">Capture the workflow.<br>Connect the record.<br>Let Q read it.</h2>
    <p class="section-sub reveal">Onos is powerful because breadth and intelligence work together. The modules create one system of record. The workflows create one system of work. Q reads across both.</p>
    <div class="loop-flow reveal">
      <span class="lf">Field capture</span><span class="lf-arrow">→</span>
      <span class="lf">Connected workflows</span><span class="lf-arrow">→</span>
      <span class="lf">System of record</span><span class="lf-arrow">→</span>
      <span class="lf hl">Q intelligence</span><span class="lf-arrow loop">↺</span>
    </div>
    <div class="card-grid pillar-grid">
      <div class="pillar c-onos">
        <div class="p-line"></div><div class="ghost">01</div>
        <div class="p-icon">📲</div>
        <div class="ph">01 — Capture</div>
        <h3>Every EHSQ workflow in one place</h3>
        <p>Observations, incidents, audits, inspections, permits, inductions, sign-ins, RAMS, actions, training, supply chain, assets, quality, environmental, site returns and reporting — captured where the work happens, on mobile, QR-first and offline where needed.</p>
        <div class="p-stat"><span data-count="400" data-suffix="%">0</span></div>
        <div class="p-stat-cap">more observations captured vs. paper — including from the workforce employed by subcontractors</div>
      </div>
      <div class="pillar c-teal">
        <div class="p-line"></div><div class="ghost">02</div>
        <div class="p-icon">🔗</div>
        <div class="ph">02 — Connect</div>
        <h3>Records that know about each other</h3>
        <p>The permit knows the competency gap. The action links to the audit finding. The RAMS links to the contractor. The site return feeds the AFR report. The quality issue becomes evidence. Onos connects the work instead of trapping it in silos.</p>
        <div class="p-stat"><span data-count="1">0</span></div>
        <div class="p-stat-cap">one system of record for people, sites, contractors, assets and evidence</div>
      </div>
      <div class="pillar c-cyan">
        <div class="p-line"></div><div class="ghost">03</div>
        <div class="p-icon">🧠</div>
        <div class="ph">03 — Understand</div>
        <h3>Q reads what nobody has time to</h3>
        <p>Because every module feeds the same intelligence, Q can see risk moving across the operation — from a pattern in observations to overdue actions, contractor gaps, training expiries, permit conflicts and board-level exposure.</p>
        <div class="p-stat"><span data-count="100" data-suffix="%">0</span></div>
        <div class="p-stat-cap">every record read by Q daily — not sampled, not skimmed, not left for month-end</div>
      </div>
    </div>
  </div>
</section>

${imgBand(p, 'hero-bg-construction.jpg', 'Modular to buy.<br>Unified by design.<br><span class="grad-text">Intelligent by default.</span>', 'Start with one workflow. Build the operating system. Q gets smarter as you expand.')}

<section class="day section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">A day with Q</div>
    <h2 class="reveal">Your team's day,<br>transformed by one system.</h2>
    <div class="timeline" id="timeline">
      <div class="spine-fill" id="spineFill"></div>
      <div class="t-item"><div class="t-content reveal"><h3>Q's briefing is waiting</h3><p>Every project lead opens a prioritised digest built from overnight observations, open actions, sign-ins, incidents, permits and contractor changes.</p></div><div class="t-dot"></div><div class="t-time">06:00</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Workers sign in with a QR code</h3><p>Inductions, competency, declarations and access status are checked at the gate — without creating another spreadsheet.</p></div><div class="t-dot"></div><div class="t-time">07:30</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>A hazard becomes a live record</h3><p>A worker scans a QR code, logs an observation and triggers the right workflow. Q reads it alongside every other signal.</p></div><div class="t-dot"></div><div class="t-time">09:10</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>A permit checks the real controls</h3><p>Training, RAMS, isolations, contractor status and work conflicts are checked before high-risk work starts.</p></div><div class="t-dot"></div><div class="t-time">11:00</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Q connects the dots</h3><p>Three unrelated reports become one warning: same hazard, same shift, multiple sites. The right manager gets the pattern.</p></div><div class="t-dot"></div><div class="t-time">13:20</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Leadership sees the whole picture</h3><p>Dashboards show live performance. Q explains movement. Board packs and client reports assemble from the same source of truth.</p></div><div class="t-dot"></div><div class="t-time">16:00</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Everyone goes home</h3><p>And Q keeps watch overnight, ready to brief tomorrow's shift.</p></div><div class="t-dot"></div><div class="t-time">18:00</div></div>
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
  <div class="container">
    <div class="eyebrow reveal-l">Value for the whole organisation</div>
    <h2 class="reveal">Everyone gets something back.</h2>
    <p class="section-sub reveal">A complete platform only works if each layer of the business wins from using it. Onos gives the field less friction, EHSQ teams less admin and leaders a clearer operating picture.</p>
    <div class="card-grid stagger-grid">
      <div class="role-card c-onos">
        <div class="r-icon">🦺</div>
        <div class="who">For field teams</div>
        <h3>Safety without the friction</h3>
        <ul class="check-list">
          <li><strong>QR-code reporting</strong>, sign-in and inductions in seconds</li>
          <li><strong>No app install</strong> for external workers and subcontractors</li>
          <li><strong>Offline capture</strong> for basements, tunnels and low-signal environments</li>
          <li><strong>Closed loops</strong> so people see what happened to what they reported</li>
        </ul>
        <div class="r-foot"><span class="v" data-count="90" data-suffix="%+">0</span><span class="k">field adoption — because it respects their time</span></div>
      </div>
      <div class="role-card c-cyan">
        <div class="r-icon">📋</div>
        <div class="who">For EHSQ professionals</div>
        <h3>One system instead of the weekly chase</h3>
        <ul class="check-list">
          <li><strong>Incidents, audits, actions, training, RAMS, permits</strong> and evidence in one place</li>
          <li><strong>Q reads the backlog</strong>, spots patterns and chases actions</li>
          <li><strong>Reports, audits and compliance packs</strong> assemble from live records</li>
          <li>Expertise moves from <strong>administration to prevention</strong></li>
        </ul>
        <div class="r-foot"><span class="v" data-count="20" data-suffix="+hrs">0</span><span class="k">handed back every week, per professional</span></div>
      </div>
      <div class="role-card c-teal">
        <div class="r-icon">📈</div>
        <div class="who">For executives &amp; boards</div>
        <h3>Operating certainty you can stand behind</h3>
        <ul class="check-list">
          <li><strong>Live project risk scores</strong> across sites, regions and contractors</li>
          <li><strong>One system of record</strong> for EHSQ performance and compliance</li>
          <li><strong>Board packs drafted from live data</strong>, with source evidence attached</li>
          <li>Stronger <strong>client confidence, tender answers and governance</strong></li>
        </ul>
        <div class="r-foot"><span class="v">24/7</span><span class="k">live risk picture, board packs drafted by Q</span></div>
      </div>
    </div>
  </div>
</section>

<section class="numbers section-pad" id="impact">
  <div class="container">
    <div class="eyebrow reveal-l">The impact</div>
    <h2 class="reveal">Measured in hours saved.<br>Felt in lives protected.</h2>
    <div class="numbers-grid">
      <div class="number-cell reveal"><div class="big"><span data-count="4">0</span> wks</div><div class="cap">From contract to live — not a year-long enterprise rollout. Start with the workflow that hurts most and expand.</div></div>
      <div class="number-cell reveal"><div class="big"><span data-count="90">0</span>%+</div><div class="cap">Field adoption. QR-code simplicity means the people doing the work actually feed the system.</div></div>
      <div class="number-cell reveal"><div class="big"><span data-count="20">0</span> hrs</div><div class="cap">Admin returned to EHSQ professionals every week — reporting, chasing, rekeying and evidence-hunting reduced.</div></div>
      <div class="number-cell reveal"><div class="big"><span data-count="1000">0</span>s</div><div class="cap">Records read by Q every day — not sampled, not skimmed, not left for month-end.</div></div>
    </div>
  </div>
</section>

<section class="modules section-pad" id="platform">
  <div class="container">
    <div class="eyebrow reveal-l">One platform</div>
    <h2 class="reveal">18+ modules. One operating system.<br>Q across all of it.</h2>
    <p class="section-sub reveal">Every part of EHSQ work — from the QR code at the gate to the report in the boardroom — on one connected platform. Start with one module or take the full system. Everything feeds the same record. Everything makes Q sharper.</p>
    ${appShot(p)}
  </div>
  <div class="container">
    <div class="orbit-wrap reveal">
      <div class="orbit-pulse"></div>
      <div class="orbit-center"><div class="q-mark">Q</div><div class="oc-cap">One system of record</div></div>
      <div class="ring" style="--dur:90s;--r:200px">
        ${PRODUCTS.slice(0, 8).map((m, i) => `<a class="orbit-chip" href="products/${m.slug}.html" style="--a:${Math.round(i * 45)}deg;--r:200px"><span class="oc"><span>${m.icon}</span>${m.name}</span></a>`).join('\n        ')}
      </div>
      <div class="ring" style="--dur:140s;--r:345px">
        ${PRODUCTS.slice(8, 18).map((m, i) => `<a class="orbit-chip" href="products/${m.slug}.html" style="--a:${Math.round(i * 36 + 18)}deg;--r:345px"><span class="oc"><span>${m.icon}</span>${m.name}</span></a>`).join('\n        ')}
      </div>
    </div>
    <div class="orbit-fallback">
      ${PRODUCTS.map(m => `<a class="module-pill" href="products/${m.slug}.html"><span class="dot"></span>${m.name}</a>`).join('\n      ')}
    </div>
  </div>
  <div class="container">
    <div class="card-grid cols-2" style="margin-top:80px">
      ${featured.map(([slug, name, text]) => `<a class="feat-mod reveal" href="products/${slug}.html">
        <div class="top"><div class="icon">${prod(slug).icon}</div><h3>${name}</h3></div>
        <p>${text}</p>
      </a>`).join('\n      ')}
    </div>
    <div class="hero-ctas" style="margin:56px 0 0">
      <a href="platform.html" class="btn btn-ghost" data-magnetic>Explore all modules <span class="arrow">→</span></a>
    </div>
  </div>
</section>

<section class="ind-band section-pad" id="industries">
  <div class="container">
    <div class="eyebrow reveal-l">Where Onos works</div>
    <h2 class="reveal">Built where the<br>risk is real.</h2>
    <p class="section-sub reveal">Onos is not generic software with a hard-hat sticker. It is built for companies whose risk lives across sites, shifts, contractors, assets, documents, permits and deadlines — with Q reading across all of it.</p>
    <div class="ind-grid">
      ${INDUSTRIES.map(i => `<a class="ind-card" href="industries/${i.slug}.html">
        <span class="ind-icon">${i.icon}</span>
        <h3>${i.name}</h3>
        <p>${i.landingBlurb}</p>
        <span class="more">Explore ${i.name} <span class="arrow">→</span></span>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="mission has-photo">
  <img src="assets/img/ehsq-director-construction-site.jpg" alt="" loading="lazy">
  <div class="mission-inner">
    <h2 class="reveal">Built so <span class="grad-text">everyone</span><br>goes home.</h2>
    <p class="reveal">A complete system of record. A complete system of work. Intelligence in service of the only metric that truly matters.</p>
  </div>
</section>

${ctaBox('Bring us your messiest workflow.<br><span class="grad-text">We will show you the operating system behind it.</span>', 'See Onos configured around your real EHSQ work — and watch Q read the records, connect the risk and brief the people who need to act.', 'Live in 1–4 weeks. Modular pricing. Q included.')}`;
  return layout({ title: 'Onos — The EHSQ Operating System That Reads the Warning Signs', desc: 'Onos is the EHSQ operating system that reads the warning signs. Safety, quality, environmental and compliance in one connected system — with Onos Q reading every record, spotting rising risk and briefing your team before the day starts. Built so everyone goes home.', body, landing: true });
}

/* ---------------- Q index ---------------- */
function qIndexPage() {
  const p = '../';
  const body = `
${pageHero(p, [['Home', p + 'index.html'], ['Onos Q', null]],
  `One intelligence.<br>Twelve superpowers.<br><span class="grad-text">Reading the whole operating system.</span>`,
  `Onos Q is powerful because Onos sees the whole EHSQ workflow. Every module feeds Q. Every record gives it context. Every output links back to evidence your team can trust.`, true,
  { src: 'safety-worker-tablet.jpg', alt: 'Onos Q working alongside a site team', tag: 'Q across the operating system' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="q-grid">
      ${SUPERPOWERS.map(s => qCard(s, p, { feed: false, text: s.indexBlurb })).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">Why one intelligence beats twelve tools</div>
    <h2 class="reveal">Q sees what point solutions cannot:<br>the whole operating picture.</h2>
    <div class="card-grid">
      <div class="info-card reveal"><div class="icon">🧠</div><h3>One brain, all the workflows</h3><p>The RAMS review knows about the contractor. The permit knows about the training gap. The risk score knows about overdue actions. The board pack knows about the site return. Q is powerful because the records are connected.</p></div>
      <div class="info-card reveal"><div class="icon">🔐</div><h3>Your system of record stays yours</h3><p>Q works inside your Onos environment, on your data, for your organisation. Your records produce your insights.</p></div>
      <div class="info-card reveal"><div class="icon">🧑‍✈️</div><h3>Humans hold authority</h3><p>Q drafts, flags, scores, explains and chases. Your competent people approve, decide and own. Every output is evidenced and traceable.</p></div>
    </div>
  </div>
</section>

${ctaBox('Put Q to work<br><span class="grad-text">on your operating data.</span>', 'Bring a month of observations, actions, incidents, permits or contractor records to a live demo — and watch Q find what nobody had time to see.', 'Live in 1–4 weeks. ISO 27001 secure. Humans in charge.')}`;
  return layout({ depth: 1, title: 'Onos Q — One Intelligence, Twelve Superpowers | Onos', desc: 'Meet Onos Q: one intelligence woven through the Onos EHSQ operating system, reading every workflow and turning records into briefings, risk scores, reviews, actions and reports.', active: 'q', body });
}

/* ---------------- superpower pages ---------------- */
function qPage(s) {
  const p = '../';
  const rel = s.related.map(([slug, line]) => [sp(slug), line]).filter(([r]) => Boolean(r));
  return layout({
    depth: 1, active: 'q',
    title: `${s.title} — Onos Q | Onos`,
    desc: s.meta || s.card,
    body: `
<section class="page-hero">
  <div class="container">
    <div class="breadcrumbs"><a href="${p}index.html">Home</a><span class="sep">/</span><a href="index.html">Onos Q</a><span class="sep">/</span><span class="here">Superpower ${s.n}</span></div>
    <div class="q-badge"><div class="q-mark sm">Q</div><div class="eyebrow" style="margin:0">${s.eyebrowOverride || s.tagline}</div></div>
    <h1 class="${s.color}" style="--grad:none">${s.title.replace('Q ', '<span class="grad-text">Q</span> ')}.</h1>
    <p class="hero-sub" style="margin-top:26px">${s.heroSub}</p>
    <div class="hero-ctas">
      <a href="${DEMO}" class="btn btn-primary" data-magnetic>See it on your data <span class="arrow">→</span></a>
      <a href="index.html" class="btn btn-ghost" data-magnetic>All 12 superpowers</a>
    </div>
  </div>
</section>

<section class="section-pad-sm ${s.color}">
  <div class="container" style="max-width:880px">
    ${feedHtml(s.feed, true)}
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">The use case</div>
    <h2 class="reveal">${s.useCase.title}</h2>
    <div class="split-row">
      <div class="reveal"><div class="pane-label bad">Without Q</div><p>${s.useCase.problem}</p></div>
      <div class="reveal"><div class="pane-label good">With Q</div><p>${s.useCase.solution}</p></div>
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
  <div class="container">
    <div class="eyebrow reveal-l">How it works</div>
    <h2 class="reveal">${s.headline}</h2>
    <div class="steps">
      ${s.how.map((st, i) => `<div class="step"><div class="n">0${i + 1}</div><div><h3>${st[0]}</h3><p>${st[1]}</p></div></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">The value</div>
    <h2 class="reveal">What your team gets back.</h2>
    <div class="card-grid">
      ${s.benefits.map(b => `<div class="info-card reveal"><div class="icon">${b[0]}</div><h3>${b[1]}</h3><p>${b[2]}</p></div>`).join('\n      ')}
    </div>
    <div class="numbers-grid" style="margin-top:80px">
      ${s.stats.map(st => `<div class="number-cell reveal"><div class="big"><span data-count="${st[0]}">0</span>${st[1]}</div><div class="cap">${st[2]}</div></div>`).join('\n      ')}
    </div>
  </div>
</section>

${imgBand(p, PHOTOS[SUPERPOWERS.indexOf(s) % PHOTOS.length], s.headline.replace(/\.$/, '') + '.', `Intelligence ${s.n} — ${s.eyebrowOverride || s.tagline}`)}

<section class="section-pad-sm">
  <div class="container">
    <div class="eyebrow reveal-l">Related superpowers</div>
    <div class="q-grid" style="margin-top:40px">
      ${rel.map(([r, line]) => qCard(r, p, { feed: false, text: line })).join('\n      ')}
    </div>
  </div>
</section>

${ctaBox(s.cta[0], s.cta[1], 'Live in 1–4 weeks. ISO 27001 secure. Humans in charge.')}`
  });
}

/* ---------------- platform index + product pages ---------------- */
function platformPage() {
  const body = `
${pageHero('', [['Home', 'index.html'], ['Platform', null]],
  `18+ modules.<br><span class="grad-text">One EHSQ operating system.</span>`,
  `Onos covers the full EHSQ workflow — field capture, risk control, people, supply chain, quality, environmental, reporting and compliance evidence — all feeding one system of record and one intelligence layer.`, true,
  { src: 'industrial-site-overview.jpg', alt: 'One operating system across every site', tag: 'Modular to buy · Unified by design · Intelligent by default' })}

<section class="section-pad-sm">
  <div class="container">
    ${appShot('')}
    <div class="card-grid" style="margin-top:70px">
      ${PRODUCTS.map(m => `<a class="card-link" href="products/${m.slug}.html"><div class="info-card" style="height:100%"><div class="icon">${m.icon}</div><h3>${m.name}</h3><p>${m.blurb}</p><span class="more">Explore <span class="arrow">→</span></span></div></a>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line)">
  <div class="container center">
    <div class="q-badge" style="justify-content:center;display:flex"><div class="q-mark sm">Q</div></div>
    <h2 class="center reveal">Every module creates the record.<br>Q turns the record into intelligence.</h2>
    <p class="section-sub reveal">Point tools keep their data to themselves. Onos connects the whole workflow: the observation feeds the action, the action feeds the risk score, the permit checks the competency, the contractor status gates the work, the site return feeds the report, and Q reads across all of it.</p>
  </div>
</section>

${ctaBox('Start with one workflow.<br><span class="grad-text">Build the operating system.</span>', 'Choose the modules you need now. Add the rest when you are ready. Your data stays connected, your workflows stay aligned and Q gets sharper with every record.', 'Modular pricing. 1–4 week implementation. Q included.')}`;
  return layout({ title: 'Platform — 18+ Modules, One EHSQ Operating System | Onos', desc: 'Explore the connected modules of the Onos EHSQ operating system — safety, quality, environmental and compliance workflows unified under Onos Q.', active: 'platform', body });
}

function productPage(m) {
  const p = '../';
  return layout({
    depth: 1, active: 'platform',
    title: `${m.name} | Onos`,
    desc: m.meta || m.sub,
    body: `
${pageHero(p, [['Home', p + 'index.html'], ['Platform', p + 'platform.html'], [m.name, null]],
  m.headline,
  m.sub, true,
  { src: PHOTOS[PRODUCTS.indexOf(m) % PHOTOS.length], alt: `${m.name} in the field with Onos`, tag: m.name })}

<section class="section-pad-sm">
  <div class="container">
    <div class="eyebrow reveal-l">The problems this kills</div>
    <div class="problem-grid" style="margin-top:40px">
      ${m.pains.map(x => `<div class="problem-card reveal"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
  <div class="container">
    <div class="eyebrow reveal-l">What you get</div>
    <h2 class="reveal">How ${m.name} works on Onos.</h2>
    <div class="card-grid cols-2">
      ${m.features.map(f => `<div class="info-card reveal"><h3>${f[0]}</h3><p>${f[1]}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="q-badge reveal-l"><div class="q-mark sm">Q</div><div class="eyebrow" style="margin:0">Where Q comes in</div></div>
    <h2 class="reveal">${m.q[1]}</h2>
    <p class="section-sub reveal">${m.q[2]}</p>
    <div class="hero-ctas" style="justify-content:flex-start;margin-top:36px">
      <a href="${p}q/${m.q[0]}.html" class="btn btn-ghost" data-magnetic>Explore this superpower <span class="arrow">→</span></a>
    </div>
    <div class="numbers-grid" style="margin-top:90px">
      ${m.stats.map(st => `<div class="number-cell reveal"><div class="big"><span data-count="${st[0]}">0</span>${st[1]}</div><div class="cap">${st[2]}</div></div>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaBox(`See <span class="grad-text">${m.name}</span><br>in action.`, m.ctaSub, m.ctaNote || 'Modular pricing — pay only for what you use.')}`
  });
}

/* ---------------- industries ---------------- */
function industriesPage() {
  const body = `
${pageHero('', [['Home', 'index.html'], ['Industries', null]],
  `Built where the<br><span class="grad-text">workflow is real.</span>`,
  `Onos is built for companies whose EHSQ work happens across people, sites, shifts, contractors, assets, permits, documents and deadlines — with Q reading across the whole operating system.`, true,
  { src: 'hero-bg-construction.jpg', alt: 'Onos on site', tag: 'Built where the risk is real' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="card-grid cols-2">
      ${INDUSTRIES.map(i => `<a class="card-link" href="industries/${i.slug}.html"><div class="info-card" style="height:100%"><div class="icon">${i.icon}</div><h3>${i.name}</h3><p>${i.indexBlurb}</p><span class="more">Explore ${i.name} <span class="arrow">→</span></span></div></a>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaBox('Your industry.<br><span class="grad-text">Your operating system.</span>', 'Book a walkthrough with someone who knows your sector — and see Onos configured for the way your work actually runs.', 'Trusted by Graham, McAvoy, Almac, Kilwaughter, Crown and more.')}`;
  return layout({ title: 'Industries | Onos', desc: 'Onos EHSQ operating system for construction, manufacturing, logistics, oil and gas, pharmaceutical, events and facilities — complete workflows with Onos Q intelligence.', active: 'industries', body });
}

function industryPage(i) {
  const p = '../';
  return layout({
    depth: 1, active: 'industries',
    title: `${i.name} | Onos`,
    desc: i.meta || i.sub,
    body: `
${pageHero(p, [['Home', p + 'index.html'], ['Industries', p + 'industries.html'], [i.name, null]], i.headline, i.sub, true,
  { src: INDUSTRY_IMG[i.slug], alt: `Onos in ${i.name}`, tag: `${i.name} · EHSQ` })}

<section class="section-pad-sm">
  <div class="container">
    <div class="eyebrow reveal-l">What ${i.name.toLowerCase()} is up against</div>
    <div class="problem-grid" style="margin-top:40px">
      ${i.pains.map(x => `<div class="problem-card reveal"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
  <div class="container">
    <div class="split-row" style="margin-top:0">
      <div class="reveal">
        <div class="eyebrow">How Onos answers</div>
        <h2 style="font-size:clamp(28px,3.4vw,44px)">${i.solHead}</h2>
        <ul>${i.solutions.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="reveal">
        <div class="q-badge"><div class="q-mark sm">Q</div><div class="eyebrow" style="margin:0">Q in ${i.name.toLowerCase()}</div></div>
        <p style="font-size:17px;line-height:1.75;color:var(--muted)">${i.q}</p>
        <div class="hero-ctas" style="justify-content:flex-start;margin-top:28px">
          <a href="${p}q/index.html" class="btn btn-ghost" data-magnetic>Meet Onos Q <span class="arrow">→</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">Most-used modules in ${i.name.toLowerCase()}</div>
    <div class="card-grid" style="margin-top:44px">
      ${i.modules.map(slug => { const m = prod(slug); return `<a class="card-link" href="${p}products/${m.slug}.html"><div class="info-card" style="height:100%"><div class="icon">${m.icon}</div><h3>${m.name}</h3><p>${m.blurb}</p><span class="more">Explore <span class="arrow">→</span></span></div></a>`; }).join('\n      ')}
    </div>
  </div>
</section>

${ctaBox(i.cta[0], i.cta[1], 'Live in 1–4 weeks. 90%+ field adoption.')}`
  });
}

/* ---------------- why onos ---------------- */
function whyPage() {
  const rows = [
    ['Implementation time', '1–4 weeks', '9–24 months', 'N/A — and forever to compile', 'Weeks per change'],
    ['Field worker training', '30 minutes', 'Days of classroom time', 'None — and no data either', 'Hours per module'],
    ['One platform for EHSQ', '<span class="yes">✓</span> 18 unified modules', '<span class="no">✗</span> One job each', '<span class="no">✗</span>', '<span class="yes">✓</span> at enterprise cost'],
    ['Built-in AI intelligence', '<span class="yes">✓</span> Onos Q, 12 superpowers', '<span class="no">✗</span>', '<span class="no">✗</span>', 'Bolt-on, extra licence'],
    ['Mobile-first, offline-capable', '<span class="yes">✓</span>', 'Sometimes', '<span class="no">✗</span>', 'Desktop-era UX'],
    ['Real-time dashboards', '<span class="yes">✓</span> Live, role-based', 'Per-tool only', '<span class="no">✗</span>', '<span class="yes">✓</span> with configuration projects'],
    ['ISO 27001 / Cyber Essentials / GDPR', '<span class="yes">✓ ✓ ✓</span>', 'Varies', '<span class="no">✗</span>', '<span class="yes">✓</span>'],
    ['Update cadence', 'Continuous', 'Quarterly at best', 'Never', 'Annual major versions'],
  ];
  const body = `
${pageHero('', [['Home', 'index.html'], ['Why Onos', null]],
  `Why leading companies<br><span class="grad-text">choose Onos.</span>`,
  `Because the old choice was broken: point tools that solve one workflow, or enterprise suites that take too long to land. Onos gives you the full EHSQ operating system — modular to adopt, unified by design, with Q reading across all of it.`, true,
  { src: 'ehsq-director-construction-site.jpg', alt: 'EHSQ leadership on site', tag: 'One operating system · One intelligence' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="hero-ticker" style="justify-content:flex-start;gap:clamp(36px,6vw,90px)">
      <div class="tick"><div class="num"><em data-count="18" data-suffix="+">0</em></div><div class="lbl">Connected modules</div></div>
      <div class="tick"><div class="num"><em data-count="1" data-suffix="">0</em></div><div class="lbl">System of record</div></div>
      <div class="tick"><div class="num"><em data-count="24" data-suffix="h">0</em></div><div class="lbl">Fastest go-live</div></div>
      <div class="tick"><div class="num"><em data-count="12" data-suffix="">0</em></div><div class="lbl">Q superpowers, every workflow</div></div>
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">The traps we built Onos to escape</div>
    <h2 class="reveal">Three ways EHSQ systems fail.</h2>
    <div class="card-grid">
      <div class="problem-card reveal"><h3>Point tools create new silos</h3><p>A reporting app here, a training matrix there, RAMS in email, actions in Excel, permits on paper. The work is digitised, but the risk still lives between systems.</p></div>
      <div class="problem-card reveal"><h3>Enterprise suites move too slowly</h3><p>Large platforms promise everything, then take months or years to configure. By the time they land, field adoption has already been lost.</p></div>
      <div class="problem-card reveal"><h3>Dashboards arrive without judgement</h3><p>Charts show what happened. They do not read the RAMS, chase the action, spot the pattern or tell the project lead what needs attention today.</p></div>
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
  <div class="container">
    <div class="eyebrow reveal-l">Stop compromising</div>
    <h2 class="reveal">Onos vs. the alternatives.</h2>
    <div class="cmp-wrap reveal">
      <table class="cmp">
        <thead><tr><th></th><th class="hl">Onos</th><th>Point solutions</th><th>Paper &amp; spreadsheets</th><th>Legacy EHSQ suites</th></tr></thead>
        <tbody>
          ${rows.map(r => `<tr><td>${r[0]}</td><td class="hl">${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('\n          ')}
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section-pad">
  <div class="container">
    <div class="eyebrow reveal-l">Go live at your speed</div>
    <h2 class="reveal">Four weeks, start to handover.</h2>
    <div class="timeline" id="timeline" style="margin-top:70px">
      <div class="spine-fill" id="spineFill"></div>
      <div class="t-item"><div class="t-content reveal"><h3>Configure</h3><p>Your sites, divisions, users, forms, workflows, modules and reporting structure configured around how your operation actually works.</p></div><div class="t-dot"></div><div class="t-time">WEEK 1</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Migrate &amp; connect</h3><p>Historic records, templates, training data, contractor registers, actions and reports brought into one system of record.</p></div><div class="t-dot"></div><div class="t-time">WEEK 2</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Train &amp; launch</h3><p>Admins trained in depth. Field teams trained fast. Subcontractors onboarded without making adoption harder.</p></div><div class="t-dot"></div><div class="t-time">WEEK 3</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Activate Q</h3><p>Q starts reading live records, briefing teams, spotting gaps and surfacing the first patterns from your own data.</p></div><div class="t-dot"></div><div class="t-time">WEEK 4</div></div>
      <div class="t-item"><div class="t-content reveal"><h3>Expand the operating system</h3><p>Start with the workflow that hurts most, then add modules. Every expansion strengthens the record and makes Q sharper.</p></div><div class="t-dot"></div><div class="t-time">ONGOING</div></div>
    </div>
  </div>
</section>

${imgBand('', 'safety-team-meeting.jpg', 'Not a vendor on the phone.<br><span class="grad-text">A partner in the operating rhythm.</span>', 'Dedicated success · Fast rollout · Continuous improvement · Q built in')}

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line)">
  <div class="container center">
    <div class="eyebrow reveal-l" style="justify-content:center">Trusted by</div>
    <h2 class="center reveal">Graham. McAvoy. Almac. Kilwaughter.<br>Crown. Neilcott. Bretland. And more.</h2>
    <p class="section-sub reveal">Principal contractors, manufacturers and operators across the UK and Ireland use Onos to run EHSQ work in one connected system — proudly built in Belfast, Northern Ireland.</p>
  </div>
</section>

${ctaBox('Ready to see the whole system?<br><span class="grad-text">Bring one real workflow.</span>', 'Show us the process that causes the most pain — observations, RAMS, permits, training, supply chain, reporting or audits — and we will show how Onos turns it into part of one operating system.', 'hi@onos.app · +44 (0)28 9600 5106')}`;
  return layout({ title: 'Why Onos | Onos', desc: 'Why leading companies choose Onos: the complete EHSQ operating system, 18+ connected modules, fast implementation and Onos Q intelligence across every workflow.', active: 'why', body });
}

/* ---------------- FAQ ---------------- */
function faqPage() {
  const groups = [
    ['Platform scope', [
      ['What is Onos?', 'Onos is the EHSQ operating system with intelligence built in. It gives you one connected platform for safety, quality, environmental and compliance workflows — and one system of record for the people, sites, contractors, assets, documents, actions and evidence behind them.'],
      ['How many modules does Onos include?', 'Onos includes 18+ connected modules covering observations, incidents, audits, inspections, actions, risk, RAMS, permits, inductions, sign-in, site returns, assets, environmental, quality, supply chain, training, dashboards, performance, safety talks and document management.'],
      ['Is Onos modular or all-or-nothing?', 'Modular. Most teams start with the workflow that hurts most, then expand. The important difference is that every module connects to the same record, so you are building one operating system rather than adding disconnected tools.']
    ]],
    ['Implementation', [
      ['How long does implementation take?', 'One to four weeks depending on modules, configuration and data migration. The goal is not a drawn-out enterprise rollout; it is a practical launch around real workflows.'],
      ['What data migration support do you provide?', 'We help migrate historic incidents, actions, training records, registers, contractor data, templates and reports from spreadsheets or outgoing systems, then validate them with your team.'],
      ['How much training do our people need?', 'Field workers need minimal training: scan, submit, sign in, complete. Administrators and EHSQ leads get structured module and workflow training.']
    ]],
    ['Onos Q', [
      ['What exactly is Onos Q?', 'Q is the intelligence layer woven through the Onos operating system. It reads across modules, spots patterns, scores risk, reviews RAMS, chases actions, maps compliance, answers questions and drafts reports from your live records.'],
      ['Why is Q different from a generic AI assistant?', 'Q is powerful because it has context. It is not reading one document or one dashboard. It reads observations, incidents, actions, permits, RAMS, training, supply chain, environmental and quality records together.'],
      ['Does Q make safety decisions on its own?', 'No. Q drafts, flags, scores, explains and chases. Your competent people approve, decide and own. Every output is traceable to source records.']
    ]],
    ['Integration', [
      ['Does Onos integrate with ERP, HRIS, CMMS, BI or construction systems?', 'Yes. Onos supports API-based integrations and common workflows such as workforce sync, asset registers, project structures, BI reporting and construction-system data exchange.'],
      ['Can we use Onos alongside existing systems?', 'Yes. Many customers start with Onos as the EHSQ system of record while keeping ERP, HR, finance, CMMS or project platforms in place.']
    ]],
    ['Security & Compliance', [
      ['Where is our data stored?', 'Onos uses secure cloud infrastructure, encryption in transit and at rest, controlled permissions, backups and role-based access. Security documentation is available during procurement.'],
      ['Is Onos GDPR compliant?', 'Yes. Onos supports role-based access, data processing controls, retention policies and subject-access requirements.'],
      ['What happens on remote sites with no signal?', 'Onos supports offline workflows for key field activities such as audits and inspections, with sync when connectivity returns.']
    ]],
    ['Pricing', [
      ['How is Onos priced?', 'Modular subscription pricing based on the modules and organisation scale. You pay for what you use, without forcing every workflow into scope on day one.'],
      ['Are there hidden costs?', 'Implementation, training, support, updates and Q should be clearly scoped in your proposal. We avoid pricing models that punish safety participation.'],
      ['What is the typical ROI timeline?', 'Most customers see value quickly through reduced admin, fewer manual reports, better action closure, faster audits, stronger field adoption and improved visibility.']
    ]],
    ['Features', [
      ['Can we customise forms, workflows and dashboards?', 'Yes. Forms, templates, approval chains, dashboards, notifications, permissions and reporting structures are configurable.'],
      ['Does Onos support multiple languages?', 'Yes. Onos is designed for mixed workforces where reporting, induction and communication need to be accessible.'],
      ['How often is Onos updated?', 'Continuously. New capability ships regularly and is included in the platform roadmap.']
    ]]
  ];
  const body = `
${pageHero('', [['Home', 'index.html'], ['FAQ', null]],
  `Straight answers to<br><span class="grad-text">fair questions.</span>`,
  `Everything teams usually ask before choosing Onos — platform scope, implementation, Q, integration, security and pricing. If your question is not here, ask a human: hi@onos.app.`, false,
  { src: 'worker-onboarding.jpg', alt: 'Onboarding a worker with Onos', tag: 'Straight answers' })}

<section class="section-pad-sm">
  <div class="container" style="max-width:880px">
    ${groups.map(([g, items]) => `
    <h2 class="acc-group-title">${g}</h2>
    <div class="accordion">
      ${items.map(([q, a]) => `<div class="acc-item"><button class="acc-q">${q}<span class="chev">+</span></button><div class="acc-a"><p>${a}</p></div></div>`).join('\n      ')}
    </div>`).join('\n')}
  </div>
</section>

${ctaBox('Still curious?<br><span class="grad-text">Ask us anything.</span>', 'A 30-minute call answers more than any FAQ page — and you will be talking to someone who understands EHSQ workflows, not a script.', 'hi@onos.app · +44 (0)28 9600 5106')}`;
  return layout({ title: 'FAQ | Onos', desc: 'Frequently asked questions about Onos: the EHSQ operating system, 18+ modules, Onos Q, implementation, integrations, security, pricing and features.', active: 'faq', body });
}

/* ---------------- resources ---------------- */
function resourcesPage() {
  const items = [
    ['📕', 'Guide', 'The EHSQ Leader’s Guide to AI', 'What AI genuinely changes in safety management, what it does not, and why context matters more than chatbot features.'],
    ['📗', 'Guide', 'From Paper to 90% Adoption', 'The field-tested playbook for digitising site safety without losing the workforce on the way.'],
    ['📊', 'Benchmark', 'Observation Culture Benchmarks', 'What good looks like: reporting rates, closure times and engagement metrics across real field programmes.'],
    ['🛠', 'Template', 'RIDDOR Decision Flowchart', 'A clear, printable walk-through of reportability — the one your site managers will actually use.'],
    ['🎥', 'Webinar', 'Meet Onos Q: Live Demo Series', 'Monthly live sessions showing Q reading real workflows: observations, RAMS, actions, permits and reports.'],
    ['📘', 'Case Study', 'How Principal Contractors Run Onos', 'Implementation stories: timelines, adoption curves, module expansion and lessons learned.']
  ];
  const body = `
${pageHero('', [['Home', 'index.html'], ['Resources', null]],
  `Sharper thinking for<br><span class="grad-text">EHSQ operators.</span>`,
  `Guides, benchmarks, templates and live sessions for teams moving from scattered records to one connected EHSQ operating system. Practical material from the field, not content-marketing filler.`, false,
  { src: 'safety-team-meeting.jpg', alt: 'Safety leaders working together', tag: 'From the field' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="card-grid cols-2">
      ${items.map(i => `<div class="info-card reveal"><div class="icon">${i[0]}</div><div class="eyebrow" style="margin-bottom:10px">${i[1]}</div><h3>${i[2]}</h3><p>${i[3]}</p><a class="more" href="contact.html">Request a copy <span class="arrow">→</span></a></div>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaBox('Want the live version?<br><span class="grad-text">Book a demo.</span>', 'The best resource is thirty minutes with the platform itself — configured for your industry, your workflow and your questions.', 'No slideware. Real platform, real data.')}`;
  return layout({ title: 'Resources | Onos', desc: 'Guides, benchmarks, templates and webinars for EHSQ leaders building connected systems of record and practical AI-enabled safety operations.', body });
}

/* ---------------- security ---------------- */
function securityPage() {
  const body = `
${pageHero('', [['Home', 'index.html'], ['Security & Compliance', null]],
  `Your operating record,<br><span class="grad-text">guarded like your people.</span>`,
  `EHSQ data is sensitive: incidents, health information, training records, contractor documents, audit evidence and operational risk. Onos treats security as part of the platform, not a procurement appendix.`, false,
  { src: 'compliance-audit.jpg', alt: 'Compliance and audit rigour', tag: 'Security · GDPR · Permissions · AI governance' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="card-grid">
      <div class="info-card reveal"><div class="icon">🪪</div><h3>Granular permissions</h3><p>Role-based access controls across companies, regions, projects, modules, features and records.</p></div>
      <div class="info-card reveal"><div class="icon">☁️</div><h3>Secure cloud infrastructure</h3><p>Cloud-hosted architecture with protected environments, access controls, backup and recovery disciplines.</p></div>
      <div class="info-card reveal"><div class="icon">🇪🇺</div><h3>GDPR by design</h3><p>Data processing controls, permissions, retention and subject-access support built into the platform.</p></div>
      <div class="info-card reveal"><div class="icon">🔐</div><h3>Encryption everywhere</h3><p>Data protected in transit and at rest, with controlled access and logging.</p></div>
      <div class="info-card reveal"><div class="icon">🛡</div><h3>Enterprise access control</h3><p>Single sign-on, MFA options, granular roles and audit trails on operational records.</p></div>
      <div class="info-card reveal"><div class="icon">♻️</div><h3>Resilience and recovery</h3><p>Backups, tested recovery and operational continuity disciplines.</p></div>
    </div>
  </div>
</section>

<section class="section-pad" style="background:var(--bg-2);border-top:1px solid var(--line)">
  <div class="container">
    <div class="q-badge reveal-l"><div class="q-mark sm">Q</div><div class="eyebrow" style="margin:0">AI, governed</div></div>
    <h2 class="reveal">Q is powerful because it is constrained.</h2>
    <p class="section-sub reveal">Q works inside your Onos environment, on your organisation's records. It drafts, flags, scores, explains and chases — but authority stays with your competent people. Every Q output links back to source evidence by design.</p>
  </div>
</section>

${ctaBox('Your security team<br><span class="grad-text">will have questions.</span>', 'Good. Send them our way — we will provide security documentation, architecture answers and a technical conversation, not a marketing PDF.', 'hi@onos.app · Security documentation available under NDA')}`;
  return layout({ title: 'Security & Compliance | Onos', desc: 'How Onos protects EHSQ data and governs Onos Q — permissions, encryption, cloud infrastructure, GDPR, audit trails and human authority.', body });
}

/* ---------------- contact ---------------- */
function contactPage() {
  const body = `
${pageHero('', [['Home', 'index.html'], ['Contact', null]],
  `Bring us your messiest workflow.<br><span class="grad-text">We are quick.</span>`,
  `Demos, pricing, security questionnaires or a straight answer on whether Onos fits your EHSQ operation — we respond the same day, usually faster.`, false,
  { src: 'safety-team-meeting.jpg', alt: 'The Onos team at work', tag: 'Talk to a human' })}

<section class="section-pad-sm">
  <div class="container">
    <div class="contact-grid">
      <form class="contact-form" action="mailto:hi@onos.app" method="post" enctype="text/plain">
        <div class="field-row">
          <div class="field"><label for="fn">First name</label><input id="fn" name="first_name" type="text" required></div>
          <div class="field"><label for="ln">Last name</label><input id="ln" name="last_name" type="text" required></div>
        </div>
        <div class="field-row">
          <div class="field"><label for="em">Work email</label><input id="em" name="email" type="email" required></div>
          <div class="field"><label for="ph">Phone (optional)</label><input id="ph" name="phone" type="tel"></div>
        </div>
        <div class="field-row">
          <div class="field"><label for="co">Company</label><input id="co" name="company" type="text" required></div>
          <div class="field"><label for="ind">Industry</label>
            <select id="ind" name="industry">
              <option>Construction</option><option>Manufacturing</option><option>Logistics &amp; Warehousing</option>
              <option>Oil &amp; Gas</option><option>Pharmaceutical</option><option>Events &amp; Facilities</option><option>Other</option>
            </select>
          </div>
        </div>
        <div class="field"><label for="msg">What can we help with?</label><textarea id="msg" name="message" rows="5" placeholder="Tell us about your team, your sites, and what's not working today…"></textarea></div>
        <button class="btn btn-primary" type="submit" data-magnetic>Send message <span class="arrow">→</span></button>
      </form>
      <div class="contact-aside">
        <div class="way"><div class="icon">📅</div><div><h3>Book straight into the diary</h3><p>Skip the back-and-forth — <a href="${DEMO}">grab a demo slot</a> that suits you.</p></div></div>
        <div class="way"><div class="icon">✉️</div><div><h3>Email</h3><p><a href="mailto:hi@onos.app">hi@onos.app</a> — answered same working day.</p></div></div>
        <div class="way"><div class="icon">📞</div><div><h3>Phone</h3><p><a href="tel:+442896005106">+44 (0)28 9600 5106</a></p></div></div>
        <div class="way"><div class="icon">📍</div><div><h3>Where we are</h3><p>Headquartered in London. Proudly built in Belfast, Northern Ireland. Serving teams worldwide.</p></div></div>
        <div class="way"><div class="icon">💼</div><div><h3>LinkedIn</h3><p><a href="https://www.linkedin.com/company/onostech">@onostech</a></p></div></div>
      </div>
    </div>
  </div>
</section>`;
  return layout({ title: 'Contact | Onos', desc: 'Contact Onos for demos, pricing, security reviews and workflow scoping. hi@onos.app · +44 (0)28 9600 5106.', active: 'contact', body });
}

/* ---------------- emit ---------------- */
const out = (rel, html) => {
  const f = join(ROOT, rel);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, html);
  console.log('wrote', rel);
};

out('index.html', landingPage());
out('platform.html', platformPage());
out('industries.html', industriesPage());
out('why-onos.html', whyPage());
out('faq.html', faqPage());
out('resources.html', resourcesPage());
out('security-compliance.html', securityPage());
out('contact.html', contactPage());
out('q/index.html', qIndexPage());
for (const s of SUPERPOWERS) out(`q/${s.slug}.html`, qPage(s));
for (const m of PRODUCTS) out(`products/${m.slug}.html`, productPage(m));
for (const i of INDUSTRIES) out(`industries/${i.slug}.html`, industryPage(i));
console.log(`\nDone: ${8 + 1 + SUPERPOWERS.length + PRODUCTS.length + INDUSTRIES.length} pages.`);
