import createLi from './createLi';

export default function createOl(tweets) {
  const ol = document.createElement('ol');

  const lis = tweets.map(createLi);
  lis.forEach(li => ol.append(li));

  return ol;
}
