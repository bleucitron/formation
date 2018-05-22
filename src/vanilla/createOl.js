import createLi from './createLi';

export default function(tweets) {
  const ol = document.createElement('ol');

  tweets.forEach(tweet => {
    ol.append(createLi(tweet));
  });
  return ol;
}
