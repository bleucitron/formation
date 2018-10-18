export default function (url) {
  return fetch(url)
    .then(function (resp) {
      return resp.json();
    });
}
