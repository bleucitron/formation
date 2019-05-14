function track({ clientX, clientY }) {
  console.log('X:', clientX, '| Y:', clientY);
}

export default function () {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track !';

  let isTracking = false;

  trackingButton.addEventListener('click', () => {
    if (!isTracking) {
      console.log('Track !');
      window.addEventListener('mousemove', track);

      isTracking = !isTracking;
    }
    else {
      console.log('ARRET');
      window.removeEventListener('mousemove', track);

      isTracking = !isTracking;
    }
  });

  return trackingButton;
}
