/**
 * Navigation Module
 * Handles scroll effects, mobile drawer, active section highlighting
 */

export function initNav() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-links a');

  // Scroll effect for header
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  const toggleDrawer = (open) => {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.add('open');
      overlay.classList.add('open');
      toggleBtn.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => toggleDrawer());
  }

  if (overlay) {
    overlay.addEventListener('click', () => toggleDrawer(false));
  }

  const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

  // Smooth scroll and close drawer on internal link click
  allAnchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.length > 1 && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          toggleDrawer(false);
          const headerHeight = header ? header.offsetHeight : 70;
          const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 10);
          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Active section tracking with IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else if (link.getAttribute('href')?.startsWith('#')) {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(s => observer.observe(s));
  }
}
