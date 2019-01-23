'use strict';

function fetchJson(url) {
  return fetch(url)
  .then(function (resp) {
    return resp.json();
  })
  .catch(function(err) {
    console.error('ERR', err);
    return Promise.reject(err);
  });
}
