/**
 * Pedro Barrante Vázquez - Portfolio
 * Shared JavaScript: Dark Mode, Scroll Animations, Navigation
 */

/* ─── Dark Mode ─── */
(function () {
  const THEME_KEY = 'pbv-theme';
  const stored = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (stored === 'dark' || (!stored && prefersDark)) {
    document.documentElement.classList.add('dark');
  }

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      document.documentElement.classList.toggle('dark', e.matches);
    }
  });

  // Expose toggle function globally
  window.toggleDarkMode = function () {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  };
})();

/* ─── Mobile Menu ─── */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
    });
  }
});

/* ─── Intersection Observer ─── */
(function () {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  });
})();

/* ─── Typed.js (if element present) ─── */
document.addEventListener('DOMContentLoaded', () => {
  const typedEl = document.getElementById('typed-text');
  if (typedEl && typeof Typed !== 'undefined') {
    new Typed('#typed-text', {
      strings: typedEl.dataset.strings
        ? JSON.parse(typedEl.dataset.strings)
        : ['Java', 'Desarrollo Móvil', 'Sistemas Operativos', 'Software Eficiente'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
  }
});

/* ─── Smooth scroll for anchor links ─── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});