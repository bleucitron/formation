'use strict';

function track(e) {
  console.log('X', e.clientX, 'Y', e.clientY);
}

let isTracking = false;

function createTrackingButton() {
  const trackingBtn = document.createElement('button');
  trackingBtn.textContent = 'Track';
  document.body.append(trackingBtn);

  trackingBtn.addEventListener('click', function () {
    if (!isTracking)
      window.addEventListener('mousemove', track);
    else
      window.removeEventListener('mousemove', track);

    isTracking = !isTracking;
  });

  return trackingBtn;
}
