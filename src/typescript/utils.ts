import { Tweet } from './interfaces';

export function isFrenchTweet(tweet: Tweet) {
  return ['fr', 'fr_ca'].includes(tweet.lang);
}
