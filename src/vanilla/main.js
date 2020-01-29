'use strict';

function fetchJson(url) {
  return fetch(url).then(function(response) {
    return response.json();
  });
}

const tweetsUrl =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';

document.addEventListener(
  'DOMContentLoaded',
  function(e) {
    fetchJson(tweetsUrl)
      .then(function(tweets) {
        console.log('Le tableau de tweet', tweets);

        // ### 2/ Twitter ###

        function createLi(tweet) {
          const monLi = document.createElement('li');
          monLi.textContent = tweet.text;
          return monLi;
        }

        function createOl(tweets) {
          const newOl = document.createElement('ol');

          tweets.forEach(function(tweet) {
            const monLi = createLi(tweet);
            newOl.append(monLi);
          });

          // tweets.map(createLi).forEach(function(li) {
          //   newOl.append(li);
          // });

          return newOl;
        }

        let monOl = createOl(tweets);
        document.body.append(monOl);

        const button = document.createElement('button');
        button.textContent = 'Filtrer';
        document.body.prepend(button);

        let isFr = false;

        button.addEventListener('click', function() {
          let tweetsToDisplay = tweets;

          if (!isFr) {
            tweetsToDisplay = tweets.filter(function(tweet) {
              return tweet.lang === 'fr';
            });
          }

          // const tweetsToDisplay = !isFr
          //   ? (tweetsToDisplay = tweets.filter(function(tweet) {
          //       return tweet.lang === 'fr';
          //     }))
          //   : tweets;

          const newOl = createOl(tweetsToDisplay);
          monOl.replaceWith(newOl);
          monOl = newOl;
          isFr = !isFr;
        });

        // [6] Créer un bouton qui active le tracking de la position de la souris (event.clientX, event.clientY), et le désactive quand on reclique dessus
        const trackingButton = document.createElement('button');

        function track(e) {
          console.log(e.clientX, e.clientY);
        }

        trackingButton.textContent = 'Track';
        document.body.prepend(trackingButton);

        let isTracking = false;

        trackingButton.addEventListener('click', function() {
          if (!isTracking) {
            console.log('Tracking');

            window.addEventListener('mousemove', track);
          } else {
            console.log('Stop Tracking');

            window.removeEventListener('mousemove', track);
          }
          isTracking = !isTracking;
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
      .catch(function(e) {
        console.error(e);
      });
  },
  { once: true },
);
