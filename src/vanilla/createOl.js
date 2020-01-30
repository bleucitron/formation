import createLi from './createLi.js';

export default function createOl(tweets) {
  const newOl = document.createElement('ol');
  tweets.forEach(tweet => {
    const monLi = createLi(tweet);
    newOl.append(monLi);
  });
  return newOl;
}
