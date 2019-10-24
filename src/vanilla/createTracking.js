function track(e) {
  const { clientX, clientY } = e;
  console.log(`X: ${clientX} | Y: ${clientY}`);
}

let isTracking = false;

export default function() {
  const monTracking = document.createElement('button');
  monTracking.textContent = 'Track';

  monTracking.addEventListener('click', () => {
    console.log('Track', isTracking);
    if (!isTracking) window.addEventListener('mousemove', track);
    else window.removeEventListener('mousemove', track);

    isTracking = !isTracking;
  });

  return monTracking;
}
