export function isTweetFr({ lang }) {
  return lang ? lang.startsWith('fr') : false;
}

export function isSelectedAuthor(tweet, name) {
  return tweet.user.name === name;
}
