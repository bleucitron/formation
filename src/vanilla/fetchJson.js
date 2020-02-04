'use strict';

function fetchJson(url) {
  return fetch(url)
    .then(function(resp) {
      return resp.json();
    })
    .catch(function(e) {
      throw e;
    });
}
