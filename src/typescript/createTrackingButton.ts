function track(e: MouseEvent) {
  const { clientX: x, clientY: y } = e;

  console.log(`X ${x} Y ${y}`);
}

let isTracking = false;

export default function() {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track';

  trackingButton.addEventListener('click', () => {
    if (!isTracking) {
      window.addEventListener('mousemove', track);
    } else {
      window.removeEventListener('mousemove', track);
    }

    isTracking = !isTracking;
    console.log('Track !', isTracking);
  });

  return trackingButton;
}
