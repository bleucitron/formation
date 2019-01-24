import makeLi from './makeLi';

export default function (tweets) {
  const ol = document.createElement('ol');

  tweets.forEach(tweet => {
    const li = makeLi(tweet);
    ol.append(li);
  });
  return ol;
}
