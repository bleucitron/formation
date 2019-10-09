function track(e) {
  console.log(`X ${e.clientX} Y ${e.clientY}`);
}

let isTracking = false;

export default () => {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track';

  trackingButton.addEventListener('click', () => {
    if (!isTracking) {
      window.addEventListener('mousemove', track);
    } else {
      window.removeEventListener('mousemove', track);
    }

    isTracking = !isTracking;
  });

  return trackingButton;
};
