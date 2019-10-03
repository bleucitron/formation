export default url => {
  return fetch(url).then(resp => resp.json());
};
