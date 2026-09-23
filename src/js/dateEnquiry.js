/**
 * Smart Date Enquiry & WhatsApp Formatter Module
 * Connects form inputs directly to Varshini's WhatsApp (+91 91876 54470)
 */

import { buildWhatsAppUrl } from '../data/brandData.js';

export function initDateEnquiry() {
  const form = document.getElementById('enquiry-form');
  const waDirectBtn = document.getElementById('whatsapp-direct-btn');
  const successBanner = document.getElementById('form-success-banner');

  if (!form) return;

  const getFormData = () => {
    return {
      name: document.getElementById('enquiry-name')?.value.trim() || '',
      phone: document.getElementById('enquiry-phone')?.value.trim() || '',
      event: document.getElementById('enquiry-event')?.value.trim() || '',
      date: document.getElementById('enquiry-date')?.value || '',
      location: document.getElementById('enquiry-location')?.value.trim() || '',
      lookPreference: document.getElementById('enquiry-style')?.value.trim() || '',
      customNote: document.getElementById('enquiry-notes')?.value.trim() || ''
    };
  };

  const updateWhatsAppLinks = () => {
    const data = getFormData();
    const url = buildWhatsAppUrl(data);

    if (waDirectBtn) {
      waDirectBtn.href = url;
    }

    // Also update any dynamic WhatsApp links in the page
    document.querySelectorAll('.js-dynamic-wa').forEach(link => {
      link.href = url;
    });
  };

  // Listen to input changes to keep WhatsApp message updated
  form.addEventListener('input', updateWhatsAppLinks);
  updateWhatsAppLinks();

  const errorBanner = document.getElementById('form-error-banner');

  // Form submission handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = getFormData();
    const nameInput = document.getElementById('enquiry-name');
    const phoneInput = document.getElementById('enquiry-phone');
    const dateInput = document.getElementById('enquiry-date');
    const eventInput = document.getElementById('enquiry-event');

    // Reset previous error states
    [nameInput, phoneInput, dateInput, eventInput].forEach(el => {
      if (el) el.classList.remove('input-error');
    });
    if (errorBanner) errorBanner.style.display = 'none';

    let errorMsg = '';
    if (!data.name) {
      errorMsg = 'Please enter your full name.';
      if (nameInput) nameInput.classList.add('input-error');
    } else if (!data.phone) {
      errorMsg = 'Please enter your phone or WhatsApp number.';
      if (phoneInput) phoneInput.classList.add('input-error');
    } else if (!data.date) {
      errorMsg = 'Please select your wedding or event date.';
      if (dateInput) dateInput.classList.add('input-error');
    }

    if (errorMsg) {
      if (errorBanner) {
        errorBanner.textContent = `⚠️ ${errorMsg}`;
        errorBanner.style.display = 'block';
        errorBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    const whatsappUrl = buildWhatsAppUrl(data);

    // Show instant success feedback
    if (successBanner) {
      successBanner.style.display = 'block';
      successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Direct WhatsApp navigation - works on all mobile & desktop browsers without popup blocking
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
    if (isMobile) {
      // Direct navigation launches the WhatsApp native mobile app without popup blocker intervention
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  });
}
