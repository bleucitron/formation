'use strict';

function fetchJson(url) {
  return fetch(url)
  .then(function (resp) { return resp.json(); })
  .catch(function (err) { return Promise.reject(err); });
}
