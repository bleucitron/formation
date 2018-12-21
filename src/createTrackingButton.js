export default function createTrackingButton() {
  let isTracking = false;

  function track(event) {
    console.log('X:', event.clientX, 'Y:', event.clientY);
  }

  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track';
  document.body.append(trackingButton);

  trackingButton.addEventListener('click', () => {
    if (!isTracking)
      window.addEventListener('mousemove', track);
    else
      window.removeEventListener('mousemove', track);

    isTracking = !isTracking;
  });
}
