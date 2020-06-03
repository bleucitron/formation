'use strict';

function createLi(tweet) {
  const monLi = document.createElement('li');
  monLi.textContent = tweet.text;
  return monLi;
}

function createOl(tweets) {
  const monOl = document.createElement('ol');

  tweets.forEach(function (tweet) {
    const myLi = createLi(tweet);
    monOl.append(myLi);
  });

  return monOl;
}

function fetchJson(url) {
  const maPromesse = fetch(url).then(function (resp) {
    return resp.json();
  });

  return maPromesse;
}

const urls = [
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
];

const mesPromesses = urls.map(fetchJson);

document.addEventListener(
  'DOMContentLoaded',
  function (e) {
    Promise.all(mesPromesses)
      .then(function (data) {
        const tweets = data.flat();
        console.log('Le tableau de tweet', tweets);

        // ### Projet Touitter ###

        let monOl = createOl(tweets);
        document.body.append(monOl);

        const button = document.createElement('button');
        button.textContent = 'Filtrer';

        let isFr = false;

        button.addEventListener('click', () => {
          isFr = !isFr;

          const tweetsToDisplay = isFr
            ? tweets.filter(tweet => tweet.lang === 'fr')
            : tweets;

          const newOl = createOl(tweetsToDisplay);

          monOl.replaceWith(newOl);
          monOl = newOl;
        });

        document.body.prepend(button);

        const trackingButton = document.createElement('button');
        trackingButton.textContent = 'Track !';
        document.body.prepend(trackingButton);

        let isTracking = false;

        function track(event) {
          console.log('X', event.clientX, 'Y', event.clientY);
        }

        trackingButton.addEventListener('click', function () {
          isTracking = !isTracking;

          console.log('isTracking', isTracking);

          if (isTracking) {
            window.addEventListener('mousemove', track);
          } else {
            window.removeEventListener('mousemove', track);
          }
        });

        // PRÉSENTATION Asynchronicité

        // PRÉSENTATION Modules

        // ### BONUS 1: LOCALSTORAGE ###
        // [1] Rajouter un bouton "fav" à chaque li

        /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

        // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.

        // ### BONUS 2: TIMING EVENEMENTS ###

        /* Faites un bouton (un peu gros) qui écoute mousedown/click/dblclick et mesure le temps de click et de doubleclick
      et affiche tempsClic1, tempsClic2, tempsDoubleClic */
      })
      .catch(function (e) {
        console.error(e);
      });

    console.log('COUCOU');
  },
  { once: true },
);
