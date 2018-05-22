function track(event: MouseEvent) {
  console.log(`X: ${event.clientX} | Y: ${event.clientY}`);
}

export default function() {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track';

  let isTracking = false;

  trackingButton.addEventListener('click', () => {
    if (!isTracking) window.addEventListener('mousemove', track);
    else window.removeEventListener('mousemove', track);

    isTracking = !isTracking;
  });

  return trackingButton;
}
