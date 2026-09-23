/**
 * Portfolio Gallery & Lightbox Module
 * Filterable tabs + accessible keyboard/touch-friendly lightbox dialog supporting both Photos and Video Reels
 */

export function initGallery() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImgBox = document.querySelector('.lightbox-img-box');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!portfolioItems.length) return;

  // Filter tabs logic
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      portfolioItems.forEach(item => {
        const itemCategory = item.dataset.category;
        if (filter === 'all' || itemCategory === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox open logic
  const openLightbox = (mediaSrc, isVideo, title, caption) => {
    if (!lightbox || !lightboxImgBox) return;

    if (isVideo) {
      lightboxImgBox.innerHTML = `
        <video controls autoplay playsinline loop style="max-width: 100%; max-height: 70vh; border-radius: 4px;">
          <source src="${mediaSrc}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
    } else {
      lightboxImgBox.innerHTML = `
        <img id="lightbox-img" src="${mediaSrc}" alt="${title}" style="max-width: 100%; max-height: 70vh; object-fit: contain;">
      `;
    }

    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxCaption) lightboxCaption.textContent = caption;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    const video = lightboxImgBox.querySelector('video');
    if (video) video.pause();
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const isVideo = item.dataset.isVideo === 'true';
      const videoSrc = item.dataset.videoSrc;
      const img = item.querySelector('img');
      const title = item.querySelector('.portfolio-title')?.textContent || '';
      const caption = item.dataset.caption || '';

      if (isVideo && videoSrc) {
        openLightbox(videoSrc, true, title, caption);
      } else if (img) {
        openLightbox(img.src, false, title, caption);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }
}
