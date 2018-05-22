import createLi from './createLi';

import { Tweet } from './interfaces';

export default function(tweets: Tweet[]) {
  const ol = document.createElement('ol');

  tweets.forEach(tweet => {
    ol.append(createLi(tweet));
  });
  return ol;
}
