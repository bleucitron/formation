export default function () {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Activer le track';
  document.body.append(trackingButton);

  let isTracking = false;

  function track(event) {
    console.log('X:', event.clientX, 'Y:', event.clientY);
  }

  trackingButton.addEventListener('click', function () {
    if (!isTracking)
      window.addEventListener('mousemove', track);
    else
      window.removeEventListener('mousemove', track);

    isTracking = !isTracking;
  });
}
