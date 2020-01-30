export default function fetchJson(url) {
  return fetch(url).then(response => response.json());
}
