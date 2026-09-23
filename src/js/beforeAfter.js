/**
 * Draggable Before / After Slider Module
 * Supports high-precision mouse and touch dragging with responsive bounds
 */

export function initBeforeAfter() {
  const container = document.querySelector('.before-after-wrapper');
  if (!container) return;

  const afterImage = container.querySelector('.ba-image-after');
  const afterImgElement = afterImage.querySelector('img');
  const handle = container.querySelector('.ba-handle');

  let isDragging = false;

  const updateSlider = (clientX) => {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;

    // Constrain within 0% to 100%
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    afterImage.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;

    // Keep after-image matching wrapper container width to avoid distortion
    if (afterImgElement) {
      afterImgElement.style.width = `${rect.width}px`;
    }
  };

  const handlePointerDown = (e) => {
    isDragging = true;
    updateSlider(e.clientX);
    container.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  };

  const handlePointerUp = (e) => {
    if (isDragging) {
      isDragging = false;
      try {
        container.releasePointerCapture(e.pointerId);
      } catch (err) {
        // Ignored
      }
    }
  };

  container.addEventListener('pointerdown', handlePointerDown);
  container.addEventListener('pointermove', handlePointerMove);
  container.addEventListener('pointerup', handlePointerUp);
  container.addEventListener('pointercancel', handlePointerUp);

  // Sync width on window resize and orientation changes
  const syncWidth = () => {
    const rect = container.getBoundingClientRect();
    if (afterImgElement && rect.width > 0) {
      afterImgElement.style.width = `${rect.width}px`;
    }
  };

  window.addEventListener('resize', syncWidth, { passive: true });
  window.addEventListener('orientationchange', syncWidth, { passive: true });
  syncWidth();
  requestAnimationFrame(syncWidth);
  setTimeout(syncWidth, 100);
  setTimeout(syncWidth, 500);
}
