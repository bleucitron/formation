export function isFrenchTweet(tweet) {
  return ['fr', 'fr_ca'].includes(tweet.lang);
}
