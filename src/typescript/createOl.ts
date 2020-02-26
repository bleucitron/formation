import createLi from './createLi';
import { Tweet } from './interfaces';

export default function(tweets: Tweet[]) {
  const ol = document.createElement('ol');
  tweets.forEach(tweet => {
    const monLi = createLi(tweet);
    ol.append(monLi);
  });

  return ol;
}
