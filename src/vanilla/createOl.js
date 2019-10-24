import createLi from './createLi';

export default function(tweets) {
  const monOl = document.createElement('ol');

  tweets.forEach(tweet => {
    const li = createLi(tweet);
    monOl.append(li);
  });

  return monOl;
}
