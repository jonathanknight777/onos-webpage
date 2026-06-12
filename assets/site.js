gsap.registerPlugin(ScrollTrigger);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- smooth scroll ---------- */
let lenis = null;
if (!reduceMotion && typeof Lenis !== 'undefined') {
  lenis = new Lenis({ lerp: 0.09 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------- nav + progress ---------- */
const nav = document.querySelector('nav.site-nav');
if (document.getElementById('scrollProgress')) {
  gsap.to('#scrollProgress', {
    scaleX: 1, ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: 0.3 }
  });
}
if (nav) {
  ScrollTrigger.create({
    start: 80,
    onUpdate: s => nav.classList.toggle('scrolled', s.scroll() > 80),
    onEnter: () => nav.classList.add('scrolled'),
    onLeaveBack: () => nav.classList.remove('scrolled')
  });
}

/* ---------- cursor glow ---------- */
const glow = document.getElementById('cursorGlow');
if (glow) {
  window.addEventListener('pointermove', e => {
    gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power3.out' });
  });
}

/* ---------- magnetic buttons ---------- */
document.querySelectorAll('[data-magnetic]').forEach(btn => {
  btn.addEventListener('pointermove', e => {
    const r = btn.getBoundingClientRect();
    gsap.to(btn, {
      x: (e.clientX - r.left - r.width / 2) * 0.25,
      y: (e.clientY - r.top - r.height / 2) * 0.25,
      duration: 0.4, ease: 'power3.out'
    });
  });
  btn.addEventListener('pointerleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  });
});

/* ---------- hero entrance (landing) ---------- */
if (document.querySelector('.hero h1 .line > span')) {
  gsap.timeline({ defaults: { ease: 'power4.out' } })
    .from('.hero h1 .line > span', { yPercent: 110, duration: 1.1, stagger: 0.12 }, 0.15)
    .to('.hero .reveal', { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.5);
}

/* ---------- page hero entrance (subpages) ---------- */
if (document.querySelector('.page-hero')) {
  gsap.timeline({ defaults: { ease: 'power4.out' } })
    .from('.page-hero .breadcrumbs', { y: 24, opacity: 0, duration: 0.7 }, 0.1)
    .from('.page-hero h1', { y: 50, opacity: 0, duration: 1 }, 0.2)
    .to('.page-hero .reveal', { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.4);
}

/* ---------- hero particle network ---------- */
(function () {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles, mouse = { x: -9999, y: -9999 };
  const COLORS = ['227,255,0', '0,189,170', '0,187,249', '139,154,238'];

  function resize() {
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    const count = Math.min(110, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 14000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.35 * devicePixelRatio,
      r: (Math.random() * 1.6 + 0.6) * devicePixelRatio,
      c: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }
  resize();
  window.addEventListener('resize', resize);
  canvas.parentElement.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - r.left) * devicePixelRatio;
    mouse.y = (e.clientY - r.top) * devicePixelRatio;
  });
  canvas.parentElement.addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999; });

  const LINK = 140 * devicePixelRatio;
  let heroVisible = true;
  new IntersectionObserver(([e]) => heroVisible = e.isIntersecting || e.intersectionRatio > 0).observe(canvas);

  // Sandboxed preview iframes (e.g. v0) can throttle or suspend rAF, freezing the
  // canvas after the first paint. Draw via rAF when available, but let a watchdog
  // interval keep the simulation moving whenever rAF stalls.
  let lastDraw = 0;
  function draw(now) {
    if (!heroVisible || reduceMotion) return;
    if (w === 0 || h === 0) resize();
    lastDraw = now;
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      const dx = mouse.x - p.x, dy = mouse.y - p.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < (260 * devicePixelRatio) ** 2 && d2 > 1) {
        p.vx += dx / d2 * 6; p.vy += dy / d2 * 6;
      }
      p.vx *= 0.995; p.vy *= 0.995;
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},0.7)`;
      ctx.fill();
    }
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < LINK) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(150,180,140,${(1 - dist / LINK) * 0.16})`;
          ctx.lineWidth = devicePixelRatio * 0.7;
          ctx.stroke();
        }
      }
    }
  }
  function frame() {
    requestAnimationFrame(frame);
    draw(performance.now());
  }
  frame();
  setInterval(() => {
    if (!reduceMotion && document.visibilityState !== 'hidden' && performance.now() - lastDraw > 250) {
      draw(performance.now());
    }
  }, 50);
})();

/* ---------- counters ---------- */
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const obj = { v: 0 };
  gsap.to(obj, {
    v: target, duration: 1.8, ease: 'power2.out',
    onUpdate: () => el.textContent = Math.round(obj.v).toLocaleString() + suffix
  });
}
document.querySelectorAll('[data-count]').forEach(el => {
  ScrollTrigger.create({
    trigger: el, start: 'top 88%', once: true,
    onEnter: () => animateCount(el)
  });
});

/* ---------- generic reveals ---------- */
document.querySelectorAll('.reveal').forEach(el => {
  if (el.closest('.hero') || el.closest('.page-hero')) return;
  gsap.to(el, {
    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 86%' }
  });
});
document.querySelectorAll('.reveal-l').forEach(el => {
  gsap.to(el, {
    opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 88%' }
  });
});

/* ---------- statement word reveal (scrub) ---------- */
document.querySelectorAll('.statement p').forEach(el => {
  el.innerHTML = el.textContent.trim().split(/\s+/)
    .map(wd => `<span class="word">${wd}</span>`).join(' ');
  gsap.to(el.querySelectorAll('.word'), {
    opacity: 1, stagger: 0.06, ease: 'none',
    scrollTrigger: { trigger: el, start: 'top 78%', end: 'bottom 45%', scrub: 0.5 }
  });
});

/* ---------- Onos Q horizontal scroll (pinned, landing) ---------- */
(function () {
  const track = document.getElementById('qTrack');
  const outer = document.getElementById('qTrackOuter');
  if (!track || !outer) return;
  function dist() { return track.scrollWidth - outer.offsetWidth; }
  gsap.to(track, {
    x: () => -dist(), ease: 'none',
    scrollTrigger: {
      trigger: outer,
      start: 'top 18%',
      end: () => '+=' + dist(),
      pin: true, scrub: 0.6,
      invalidateOnRefresh: true,
      onUpdate: s => gsap.set('#trackFill', { scaleX: s.progress })
    }
  });
  document.querySelectorAll('.q-card').forEach((card, i) => {
    gsap.from(card, {
      y: 60, opacity: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: outer, start: 'top 60%' },
      delay: Math.min(i, 3) * 0.1
    });
  });
})();

/* ---------- q-grid stagger (subpages) ---------- */
document.querySelectorAll('.q-grid, .ind-grid, .stagger-grid').forEach(grid => {
  gsap.from(grid.children, {
    y: 50, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
    scrollTrigger: { trigger: grid, start: 'top 80%' }
  });
});

/* ---------- timeline spine scrub ---------- */
if (document.getElementById('spineFill')) {
  gsap.to('#spineFill', {
    scaleY: 1, ease: 'none',
    scrollTrigger: { trigger: '#timeline', start: 'top 70%', end: 'bottom 55%', scrub: 0.4 }
  });
}
document.querySelectorAll('.t-dot').forEach(dot => {
  gsap.from(dot, {
    scale: 0, duration: 0.5, ease: 'back.out(2.5)',
    scrollTrigger: { trigger: dot, start: 'top 72%' }
  });
});

/* ---------- module rows drift on scroll ---------- */
document.querySelectorAll('.module-row').forEach(row => {
  const dir = parseFloat(row.dataset.speed) || 1;
  gsap.fromTo(row,
    { x: dir * 120 },
    {
      x: dir * -120, ease: 'none',
      scrollTrigger: { trigger: row.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 }
    });
});

/* ---------- mission zoom ---------- */
if (document.querySelector('.mission-inner')) {
  gsap.fromTo('.mission-inner',
    { scale: 0.85, opacity: 0.4 },
    {
      scale: 1, opacity: 1, ease: 'none',
      scrollTrigger: { trigger: '.mission', start: 'top 85%', end: 'center center', scrub: 0.5 }
    });
}

/* ---------- steps stagger ---------- */
document.querySelectorAll('.steps').forEach(steps => {
  gsap.from(steps.children, {
    x: -40, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
    scrollTrigger: { trigger: steps, start: 'top 80%' }
  });
});

/* ---------- accordion ---------- */
document.querySelectorAll('.acc-item').forEach(item => {
  const q = item.querySelector('.acc-q');
  const a = item.querySelector('.acc-a');
  q.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    a.style.maxHeight = open ? a.scrollHeight + 'px' : '0px';
  });
});

/* ---------- anchor links via lenis ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      if (lenis) lenis.scrollTo(id, { offset: -70 });
      else document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---------- pillar entrance + accent lines ---------- */
document.querySelectorAll('.pillar-grid').forEach(grid => {
  gsap.from(grid.querySelectorAll('.pillar'), {
    y: 80, opacity: 0, scale: 0.96, duration: 0.9, ease: 'power3.out', stagger: 0.15,
    scrollTrigger: { trigger: grid, start: 'top 80%' }
  });
  gsap.to(grid.querySelectorAll('.p-line'), {
    scaleX: 1, duration: 0.9, ease: 'power2.out', stagger: 0.15, delay: 0.35,
    scrollTrigger: { trigger: grid, start: 'top 80%' }
  });
});

/* ---------- role checklist stagger ---------- */
document.querySelectorAll('.role-card').forEach(card => {
  gsap.from(card.querySelectorAll('.check-list li'), {
    x: -26, opacity: 0, duration: 0.5, ease: 'power2.out', stagger: 0.09,
    scrollTrigger: { trigger: card, start: 'top 80%' }
  });
});

/* ---------- parallax photo bands ---------- */
document.querySelectorAll('.img-band img, .mission.has-photo > img').forEach(img => {
  gsap.fromTo(img, { yPercent: -8 }, {
    yPercent: 8, ease: 'none',
    scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
  });
});

/* ---------- hero photo entrance ---------- */
if (document.querySelector('.page-hero .hero-photo')) {
  gsap.from('.page-hero .hero-photo', { x: 60, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.35 });
}

/* ---------- app screenshot reveal ---------- */
document.querySelectorAll('.app-shot').forEach(el => {
  gsap.from(el, {
    y: 90, opacity: 0, scale: 0.96, duration: 1.1, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 82%' }
  });
});
