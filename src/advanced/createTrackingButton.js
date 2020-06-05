let isTracking = false;

function track(event) {
  console.log('X', event.clientX, 'Y', event.clientY);
}

export default function () {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track !';

  trackingButton.addEventListener('click', function () {
    isTracking = !isTracking;

    console.log('isTracking', isTracking);

    if (isTracking) {
      window.addEventListener('mousemove', track);
    } else {
      window.removeEventListener('mousemove', track);
    }
  });

  return trackingButton;
}
