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

  // Form submission handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = getFormData();
    if (!data.name || !data.event || !data.date) {
      alert('Please fill in your Name, Event Type, and Date.');
      return;
    }

    const whatsappUrl = buildWhatsAppUrl(data);

    // Show elegant feedback
    if (successBanner) {
      successBanner.style.display = 'block';
      successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Open WhatsApp in a new tab with structured inquiry
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  });
}
