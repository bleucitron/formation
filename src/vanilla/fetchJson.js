export default function (url) {
  return fetch(url).then(resp => resp.json());
}

// async function fetchJson(url) {
//   const resp = await fetch(url);
//   const data = await resp.json();

//   return data;
// }
