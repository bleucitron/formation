'use strict';

function track(event) {
  const { clientX, clientY } = event;

  console.log('X', clientX, 'Y', clientY);
}

function createTrackingButton() {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track';

  let isTracking = false;

  trackingButton.addEventListener('click', () => {
    isTracking = !isTracking;

    if (isTracking) {
      console.log('Tracking !');
      window.addEventListener('mousemove', track);
    } else {
      console.log('Not tracking');
      window.removeEventListener('mousemove', track);
    }
  });

  return trackingButton;
}
