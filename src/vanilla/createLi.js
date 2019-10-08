export default function(tweet) {
  const li = document.createElement('li');
  li.textContent = tweet.text;
  return li;
}
