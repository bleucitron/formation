export default function fefefefefefefe(url) {
  const maPromesse = fetch(url).then(function (resp) {
    return resp.json();
  });

  return maPromesse;
}
