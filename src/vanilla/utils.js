export function isTweetFr({ lang }) {
  return lang && lang.startsWith('fr');
}

export function isTweetBy(tweet, authorId) {
  return !authorId || tweet.user.id === authorId;
}
