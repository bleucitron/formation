import createLi, { Tweet } from './createLi';

export default function(tweets: Tweet[]) {
  const ol = document.createElement('ol');

  tweets.forEach(function(tweet) {
    const li = createLi(tweet);
    ol.append(li);
  });

  // tweets.map(createLi).forEach(function(li) {
  //   ol.append(li);
  // });

  return ol;
}
