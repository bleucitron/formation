export default function (url) {
  return fetch(url)
  .then(resp => resp.json())
  .catch(err => {
    console.error('ERR', err);
    return Promise.reject(err);
  });
}
