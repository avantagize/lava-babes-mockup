/* Lava Babes Coffee — small progressive enhancements.
   The page works without this file; it only adds the mobile nav toggle,
   the header's scrolled state and scroll reveals. */

const root = document.documentElement;
root.classList.add('js');

/* ── Header: clear over the hero, solid once the page scrolls ── */
const header = document.querySelector('.site-header');

if (header && header.classList.contains('site-header--overlay')) {
  const syncHeader = () => header.classList.toggle('is-top', window.scrollY < 24);
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });
}

/* ── Mobile nav toggle ── */
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (header && toggle && nav) {
  toggle.hidden = false;

  const setOpen = (open) => {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia('(min-width: 40em)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

/* ── Scroll reveals ── */
const revealItems = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (revealItems.length && 'IntersectionObserver' in window && !reduceMotion) {
  root.classList.add('reveal-ready');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}
