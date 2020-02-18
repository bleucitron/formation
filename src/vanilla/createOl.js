import createLi from './createLi';

export default function(tweets) {
  const newOl = document.createElement('ol');

  tweets.map(createLi).forEach(li => newOl.append(li));

  return newOl;
}
