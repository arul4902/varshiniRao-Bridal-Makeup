/**
 * Application Entry Point - GLAM BY VARSHARAO
 */

import { initNav } from './nav.js';
import { initLookFinder } from './lookFinder.js';
import { initBeforeAfter } from './beforeAfter.js';
import { initGallery } from './gallery.js';
import { initDateEnquiry } from './dateEnquiry.js';
import { initConsultationModal } from './consultationModal.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLookFinder();
  initBeforeAfter();
  initGallery();
  initDateEnquiry();
  initConsultationModal();
  initAnimations();

  console.log('Glam by Varsharao bridal experience initialized.');
});
