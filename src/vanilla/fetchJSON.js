export default function(u) {
  return fetch(u)
    .then(resp => resp.json())
    .catch(err => {
      throw err;
    });
}
