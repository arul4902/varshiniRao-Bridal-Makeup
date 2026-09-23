/**
 * Subtle Micro-Interactions & Scroll Reveals
 * Uses IntersectionObserver for performant, GPU-accelerated reveals
 */

export function initAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  // Immediately make all elements visible on mobile or reduced motion to prevent hidden content
  if (window.innerWidth <= 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px 50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // Failsafe: reveal any remaining elements after page settles
  setTimeout(() => {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }, 1200);
}
