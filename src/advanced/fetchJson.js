'use strict';

function fetchJson(url) {
  const promesseDeLaReponse = fetch(url);

  const promesseDesTweets = promesseDeLaReponse.then(resp => resp.json());

  return promesseDesTweets;
}
