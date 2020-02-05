export default function(url: string): Promise<any> {
  return fetch(url)
    .then(function(resp) {
      return resp.json();
    })
    .catch(function(e) {
      throw e;
    });
}
