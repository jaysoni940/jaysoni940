'use strict';

/* =========================================================
   CONFIG — flip AVAILABLE to false when not job-hunting
========================================================= */
const AVAILABLE = true;

/* =========================================================
   ELEMENT REFS (top-level to avoid TDZ issues)
========================================================= */
const backToTopBtn = document.getElementById('backToTop');
let barsTriggered = false;

/* =========================================================
   AVAILABLE BADGE — driven by CONFIG above
========================================================= */
const heroBadge = document.querySelector('.hero-badge');
if (heroBadge) heroBadge.style.display = AVAILABLE ? '' : 'none';

/* =========================================================
   NAVBAR — scroll state + active section highlight
========================================================= */
const navbar  = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const bnItems  = document.querySelectorAll('.bn-item');
const sections = document.querySelectorAll('section[id]');

function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  highlightNav();
  showBackToTop();
  triggerSkillBars();
}

function highlightNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
  bnItems.forEach(item => {
    item.classList.toggle('active', item.dataset.section === current);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* =========================================================
   MOBILE NAV TOGGLE
========================================================= */
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', e => { if (!navbar.contains(e.target)) closeMenu(); });

function closeMenu() {
  navMenu.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

/* =========================================================
   DARK / LIGHT THEME
========================================================= */
const themeBtn  = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

applyTheme(localStorage.getItem('theme') || 'dark');

themeBtn.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

/* =========================================================
   TYPING ANIMATION
========================================================= */
const WORDS = ['Full Stack Developer', 'Software Engineer', '.NET Developer', 'Azure Specialist', 'Problem Solver'];
let wIdx = 0, cIdx = 0, deleting = false;
const typedEl = document.getElementById('typedText');

function type() {
  const word = WORDS[wIdx];
  typedEl.textContent = deleting ? word.slice(0, --cIdx) : word.slice(0, ++cIdx);

  let delay = deleting ? 40 : 85;

  if (!deleting && cIdx === word.length) {
    delay = 2000;
    deleting = true;
  } else if (deleting && cIdx === 0) {
    deleting = false;
    wIdx = (wIdx + 1) % WORDS.length;
    delay = 300;
  }

  setTimeout(type, delay);
}

type();

/* =========================================================
   INTERSECTION OBSERVER — SCROLL REVEAL
========================================================= */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('revealed'), i * 80);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* =========================================================
   SKILL BAR ANIMATIONS (fires once on scroll into view)
========================================================= */
function triggerSkillBars() {
  if (barsTriggered) return;
  const skillsSec = document.getElementById('skills');
  if (!skillsSec) return;
  if (skillsSec.getBoundingClientRect().top < window.innerHeight * 0.85) {
    barsTriggered = true;
    document.querySelectorAll('.progress-fill').forEach(bar => {
      const w = bar.getAttribute('data-width');
      setTimeout(() => { bar.style.width = `${w}%`; }, 200);
    });
  }
}

/* =========================================================
   PROJECT FILTER
========================================================= */
const filterBtns   = document.querySelectorAll('.filter-btn');
const projCards    = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    projCards.forEach(card => {
      const show = filter === 'all' || card.getAttribute('data-category') === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

/* =========================================================
   BACK TO TOP
========================================================= */
function showBackToTop() {
  backToTopBtn.classList.toggle('visible', window.scrollY > 400);
}

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================================================
   CONTACT FORM — Formspree with mailto fallback
   Sign up at formspree.io, create a form, copy the ID into
   the data-formspree-id attribute on the <form> element.
========================================================= */
const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');
const FORMSPREE_ID = contactForm ? contactForm.getAttribute('data-formspree-id') : null;

if (FORMSPREE_ID === 'YOUR_FORM_ID') {
  console.warn('[Contact] Replace YOUR_FORM_ID in index.html with your real Formspree form ID from formspree.io');
}

contactForm.addEventListener('submit', async e => {
  e.preventDefault();

  const name    = document.getElementById('contactName').value.trim();
  const email   = document.getElementById('contactEmail').value.trim();
  const subject = document.getElementById('contactSubject').value.trim() || 'Portfolio Contact';
  const message = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !message) {
    showStatus('Please fill in all required fields.', 'error');
    return;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    showStatus('Please enter a valid email address.', 'error');
    return;
  }

  const submitBtn = contactForm.querySelector('[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

  if (FORMSPREE_ID && FORMSPREE_ID !== 'YOUR_FORM_ID') {
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });
      if (res.ok) {
        showStatus('Message sent! I\'ll get back to you soon.', 'success');
        contactForm.reset();
      } else {
        throw new Error('Formspree error');
      }
    } catch {
      showStatus('Could not send. Try emailing me directly.', 'error');
    }
  } else {
    /* Fallback: open user's mail client */
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href =
      `mailto:jvsoni94090@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showStatus('Opening your email client…', 'success');
    contactForm.reset();
  }

  submitBtn.disabled = false;
  submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
});

function showStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.style.color = type === 'error' ? '#f87171' : '#4ade80';
  setTimeout(() => { formStatus.textContent = ''; }, 4000);
}

/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
