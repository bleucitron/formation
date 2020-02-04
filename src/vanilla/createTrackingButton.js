'use strict';

let isTracking = false;

function track(e) {
  console.log('X', e.clientX, 'Y', e.clientY);
}

function createTrackingButton() {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track';

  trackingButton.addEventListener('click', function() {
    if (!isTracking) {
      window.addEventListener('mousemove', track);
    } else {
      window.removeEventListener('mousemove', track);
    }

    isTracking = !isTracking;
  });

  return trackingButton;
}
