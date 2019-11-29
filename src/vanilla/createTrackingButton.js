function track({ clientX: x, clientY: y }) {
  console.log(`X : $${x} | Y : ${y}`);
}

export default function() {
  const tracker = document.createElement('button');
  tracker.textContent = 'Track';

  let isTracking = false;

  tracker.addEventListener('click', () => {
    if (!isTracking) {
      console.log('Track !');
      window.addEventListener('mousemove', track);
    } else {
      console.log('Untrack !');
      window.removeEventListener('mousemove', track);
    }
    isTracking = !isTracking;
  });

  return tracker;
}
