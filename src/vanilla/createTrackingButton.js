function track(e) {
  console.log('X', e.clientX, 'Y', e.clientY);
}

export default function () {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track';

  let isTracking = false;
  trackingButton.addEventListener('click', () => {
    isTracking = !isTracking;

    if (isTracking) {
      window.addEventListener('mousemove', track);
    } else {
      window.removeEventListener('mousemove', track);
    }
  });

  return trackingButton;
}
