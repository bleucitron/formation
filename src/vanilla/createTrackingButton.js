export default () => {
  const buttonTracking = document.createElement('button');
  buttonTracking.textContent = 'Track';

  let isTracking = false;

  function track({ clientX, clientY }) {
    console.log(`X ${clientX} | Y ${clientY}`);
  }
  buttonTracking.addEventListener('click', () => {
    if (!isTracking) {
      console.log('Track');
      window.addEventListener('mousemove', track);
    } else {
      console.log('Untrack');
      window.removeEventListener('mousemove', track);
    }

    isTracking = !isTracking;
  });

  return buttonTracking;
};
