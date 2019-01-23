'use strict';

function track(e) {
  console.log(`X: ${e.clientX} | Y: ${e.clientY}`);
}

function makeTrackingButton() {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track';
  document.body.append(trackingButton);

  let isTracking = false;
  trackingButton.addEventListener('click', function () {
    if (!isTracking)
      window.addEventListener('mousemove', track);
    else
      window.removeEventListener('mousemove', track);

    isTracking = !isTracking;
  });

  return trackingButton;
}
