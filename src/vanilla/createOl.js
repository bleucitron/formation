import createLi from './createLi';

export default function(tweets) {
  const ol = document.createElement('ol');
  tweets.forEach(tweet => {
    const monLi = createLi(tweet);
    ol.append(monLi);
  });

  return ol;
}
