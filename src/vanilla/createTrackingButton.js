export default function () {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Tracking';
  document.body.append(trackingButton);

  let isTracking = false;

  function trackMe (event) {
    console.log('X:', event.clientX, '//', 'Y:', event.clientY);
  }

  trackingButton.addEventListener('click', () => {
    if (!isTracking)
      window.addEventListener('mousemove', trackMe);
    else
      window.removeEventListener('mousemove', trackMe);
    isTracking = !isTracking;
  });
};
