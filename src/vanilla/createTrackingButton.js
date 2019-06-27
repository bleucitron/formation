function track(e) {
  console.log('MOVE', e.clientX, e.clientY);
}

let isTracking = false;

export default function() {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Start tracking';

  trackingButton.addEventListener('click', () => {
    trackingButton.textContent = isTracking
      ? 'Start tracking'
      : 'Stop tracking';

    if (!isTracking) {
      window.addEventListener('mousemove', track);
    } else {
      window.removeEventListener('mousemove', track);
    }

    isTracking = !isTracking;
  });

  return trackingButton;
}
