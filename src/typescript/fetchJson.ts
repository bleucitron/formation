export default function(url: string) {
  return fetch(url)
    .then(resp => resp.json())
    .catch(err => console.log(err));
}
