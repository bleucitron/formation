export default url => fetch(url)
  .then(resp => resp.json())
  .catch(error => console.error('ERROR', error));
