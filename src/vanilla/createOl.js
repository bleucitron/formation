import createLi from './createLi';

export default tweets => {
  const ol = document.createElement('ol');

  tweets.map(createLi)
  .forEach(li => ol.append(li));

  return ol;
}
