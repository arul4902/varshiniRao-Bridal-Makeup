/**
 * Look Finder Quiz Module
 * Interactive 3-step visual preference selector that bridges into Enquiry & WhatsApp
 */

import { brandData, buildWhatsAppUrl } from '../data/brandData.js';

export function initLookFinder() {
  const container = document.getElementById('look-finder');
  if (!container) return;

  const steps = container.querySelectorAll('.quiz-step-pane');
  const indicators = container.querySelectorAll('.quiz-step-indicator');
  const nextBtn = document.getElementById('quiz-next-btn');
  const prevBtn = document.getElementById('quiz-prev-btn');
  const discussBtn = document.getElementById('quiz-discuss-btn');

  let currentStep = 0;
  const selections = {
    occasion: "Traditional Muhurtham",
    finish: "Soft Natural Glow",
    focus: "Flawless Natural Skin"
  };

  const updateUI = () => {
    // Show/hide steps
    steps.forEach((step, idx) => {
      step.classList.toggle('active', idx === currentStep);
    });

    // Update indicators
    indicators.forEach((ind, idx) => {
      ind.classList.toggle('active', idx <= currentStep);
    });

    // Navigation button visibility
    if (prevBtn) {
      prevBtn.style.visibility = currentStep === 0 ? 'hidden' : 'visible';
    }

    if (nextBtn) {
      if (currentStep === steps.length - 1) {
        nextBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'inline-flex';
        nextBtn.textContent = currentStep === steps.length - 2 ? 'See My Direction ✨' : 'Next Step →';
      }
    }

    // If final step, populate summary
    if (currentStep === steps.length - 1) {
      const summaryOccasion = document.getElementById('quiz-summary-occasion');
      const summaryFinish = document.getElementById('quiz-summary-finish');
      const summaryFocus = document.getElementById('quiz-summary-focus');

      if (summaryOccasion) summaryOccasion.textContent = selections.occasion;
      if (summaryFinish) summaryFinish.textContent = selections.finish;
      if (summaryFocus) summaryFocus.textContent = selections.focus;
    }
  };

  // Option selection
  container.querySelectorAll('.quiz-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      const value = btn.dataset.value;

      // Deselect siblings in the same category
      container.querySelectorAll(`.quiz-option-btn[data-category="${category}"]`).forEach(b => {
        b.classList.remove('selected');
      });

      btn.classList.add('selected');
      selections[category] = value;
    });
  });

  // Next / Prev button handling
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateUI();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        updateUI();
      }
    });
  }

  // "Discuss My Look With Varshini" button:
  // Transfers selections into the Date Enquiry form & prepares WhatsApp
  if (discussBtn) {
    discussBtn.addEventListener('click', () => {
      const combinedPreference = `${selections.occasion} | ${selections.finish} | Focus: ${selections.focus}`;
      
      // Auto-fill enquiry form look preference field
      const preferenceInput = document.getElementById('enquiry-style');
      if (preferenceInput) {
        preferenceInput.value = combinedPreference;
      }

      const eventInput = document.getElementById('enquiry-event');
      if (eventInput) {
        eventInput.value = selections.occasion;
      }

      // Smooth scroll to enquiry section
      const enquirySection = document.getElementById('enquire');
      if (enquirySection) {
        enquirySection.scrollIntoView({ behavior: 'smooth' });
        
        // Highlight the field briefly (avoid abrupt keyboard popup on mobile)
        if (preferenceInput) {
          if (window.innerWidth > 768) {
            preferenceInput.focus();
          }
          preferenceInput.style.borderColor = 'var(--color-champagne-gold)';
          setTimeout(() => {
            preferenceInput.style.borderColor = '';
          }, 2500);
        }
      }
    });
  }

  updateUI();
}
