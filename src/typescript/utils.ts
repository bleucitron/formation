import { Tweet } from './createLi';

export function isTweetFr(tweet: Tweet) {
  return tweet.lang ? tweet.lang.startsWith('fr') : false;
}
