export default function (url) {
  return fetch(url)
  .then(resp => resp.json())
  .catch(err => Promise.reject(err));
}
