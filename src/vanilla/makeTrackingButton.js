function track ({ clientX, clientY }) {
  console.log(`X: ${clientX} | Y: ${clientY}`);
}

export default function () {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track';
  document.body.append(trackingButton);

  let isTracking = false;
  trackingButton.addEventListener('click', () => {
    if (!isTracking)
      window.addEventListener('mousemove', track);
    else
      window.removeEventListener('mousemove', track);

    isTracking = !isTracking;
  });

  return trackingButton;
}
