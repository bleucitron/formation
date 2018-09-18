"use strict";

const trackingButton = document.createElement('button');
trackingButton.textContent = 'Tracking';
document.body.append(trackingButton);

let isTracking = false;

function track(event) {
  console.log('X', event.clientX, 'Y', event.clientY);
}

trackingButton.addEventListener('click', () => {
  if (!isTracking)
    window.addEventListener('mousemove', track);
  else
    window.removeEventListener('mousemove', track);

  isTracking = !isTracking;
});
