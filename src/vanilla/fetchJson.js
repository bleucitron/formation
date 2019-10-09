export default url =>
  fetch(url)
    .then(resp => resp.json())
    .catch(err => {
      throw err;
    });
