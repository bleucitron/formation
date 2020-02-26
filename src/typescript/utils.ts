import { Tweet } from './interfaces';

export function isTweetFr(tweet: Tweet) {
  return tweet.lang ? tweet.lang.startsWith('fr') : false;
}
