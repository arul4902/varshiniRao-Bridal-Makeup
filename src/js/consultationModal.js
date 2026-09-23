/**
 * Consultation Modal Module
 * Handles opening the 15-minute consultation experience modal
 */

import { buildWhatsAppUrl } from '../data/brandData.js';

export function initConsultationModal() {
  const consultModal = document.getElementById('consult-modal');
  const consultClose = document.getElementById('consult-close');
  const triggers = document.querySelectorAll('.js-open-consult');
  const confirmBtn = document.getElementById('consult-confirm-btn');

  if (!consultModal) return;

  const openModal = () => {
    consultModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    consultModal.classList.remove('open');
    document.body.style.overflow = '';
  };

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (consultClose) {
    consultClose.addEventListener('click', closeModal);
  }

  consultModal.addEventListener('click', (e) => {
    if (e.target === consultModal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && consultModal.classList.contains('open')) {
      closeModal();
    }
  });

  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      const occasion = document.getElementById('consult-occasion')?.value || 'Bridal Consultation';
      const timeframe = document.getElementById('consult-timeframe')?.value || 'Upcoming Wedding';

      const url = buildWhatsAppUrl({
        event: `15-Min Personalised Consultation (${occasion})`,
        customNote: `Preferred timeframe: ${timeframe}. I would love to schedule a quick 15-minute consult.`
      });

      closeModal();
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
      if (isMobile) {
        window.location.href = url;
      } else {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  }
}
