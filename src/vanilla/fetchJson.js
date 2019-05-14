export default function (url) {
  return fetch(url)
  .then(resp => resp.json())
  .catch(error => console.error('La recuperation des donnees a planté:', error));
}
