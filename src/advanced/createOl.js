import createLi from './createLi';

export default function (tweets) {
  const monOl = document.createElement('ol');

  tweets.forEach(function (tweet) {
    const myLi = createLi(tweet);
    monOl.append(myLi);
  });

  return monOl;
}
