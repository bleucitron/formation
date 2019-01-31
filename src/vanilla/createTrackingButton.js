function track ({ clientX: x, clientY: y }) {
  console.log(`X: ${x} | Y: ${y}`);
}

let isTracking = false;

export default function () {
  const trackingBtn = document.createElement('button');
  trackingBtn.textContent = 'Track';

  trackingBtn.addEventListener('click', () => {
    if (!isTracking)
      window.addEventListener('mousemove', track);
    else
      window.removeEventListener('mousemove', track);

    isTracking = !isTracking;
  });

  return trackingBtn;
}
