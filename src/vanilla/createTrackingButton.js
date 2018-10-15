function track (event) {
  console.log(`X: ${event.clientX} Y: ${event.clientY}`);
}

let isTracking = false;

export default function () {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Activer le tracking';
  document.body.append(trackingButton);

  trackingButton.addEventListener('click', () => {
    if (!isTracking) {
      window.addEventListener('mousemove', track);
      trackingButton.textContent = 'Désactiver le tracking';
    }
    else {
      window.removeEventListener('mousemove', track);
      trackingButton.textContent = 'Activer le tracking';
    }

    isTracking = !isTracking;
  });
}
