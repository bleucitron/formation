'use strict';

function createOl(tweets) {
  const ol = document.createElement('ol');
  tweets.forEach(function(tweet) {
    const monLi = createLi(tweet);
    ol.append(monLi);
  });

  return ol;
}

function createLi(tweet) {
  const monLi = document.createElement('li');
  monLi.textContent = tweet.text;

  return monLi;
}

function track(e) {
  console.log('X', e.clientX, 'Y', e.clientY);
}

document.addEventListener(
  'DOMContentLoaded',
  function(e) {
    fetch(
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
    )
      .then(function(resp) {
        console.log('REsP', resp);

        return resp.json();
      })
      .then(function(tweets) {
        console.log('Le tableau de tweet', tweets);

        let monOl = createOl(tweets);
        document.body.append(monOl);

        // tweets
        //   .map(createLi)
        //   .forEach(function(li) {
        //     monOl.append(li);
        //   });

        const filterButton = document.createElement('button');
        filterButton.textContent = 'Filter';
        document.body.prepend(filterButton);

        let isFr = false;

        filterButton.addEventListener('click', function() {
          const tweetsToDisplay = !isFr
            ? tweets.filter(function(tweet) {
                return tweet.lang === 'fr';
              })
            : tweets;

          const newOl = createOl(tweetsToDisplay);

          monOl.replaceWith(newOl);
          monOl = newOl;
          isFr = !isFr;
        });

        // [6] Créer un bouton qui active le tracking de la position de la souris (event.clientX, event.clientY), et le désactive quand on reclique dessus

        const trackingButton = document.createElement('button');
        trackingButton.textContent = 'Track';
        document.body.prepend(trackingButton);

        let isTracking = false;

        trackingButton.addEventListener('click', function() {
          console.log('Track !', isTracking);

          if (!isTracking) {
            window.addEventListener('mousemove', track);
          } else {
            window.removeEventListener('mousemove', track);
          }

          isTracking = !isTracking;
        });

        // PRÉSENTATION Asynchronicité

        // PRÉSENTATION Modules

        // ### BONUS: LOCALSTORAGE ###
        // [1] Rajouter un bouton "fav" à chaque li

        /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

        // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
      })
      .catch(function(e) {
        console.error(e);
      });
  },
  { once: true },
);
