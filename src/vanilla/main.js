'use strict';

document.addEventListener(
  'DOMContentLoaded',
  function(e) {
    fetch(
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
    )
      .then(function(resp) {
        return resp.json();
      })
      .then(function(tweets) {
        console.log('Le tableau de tweet', tweets);

        // ### TOUITTER ###

        function createLi(tweet) {
          const li = document.createElement('li');

          if (tweet.lang === 'fr') {
            li.classList.add('fr');
          } else {
            li.classList.add('other');
          }

          li.textContent = tweet.text;
          return li;
        }

        function createOl(tweets) {
          const newOl = document.createElement('ol');

          tweets.map(createLi).forEach(function(li) {
            newOl.append(li);
          });

          return newOl;
        }

        let currentOl = createOl(tweets);
        document.body.append(currentOl);

        // tweets.map(createLi).forEach(function(li) {
        //   currentOl.append(li);
        // });

        const filterButton = document.createElement('button');
        filterButton.textContent = 'Filtre';
        document.body.prepend(filterButton);

        let isFr = false;

        filterButton.addEventListener('click', function() {
          let tweetsToDisplay = tweets;

          if (!isFr) {
            tweetsToDisplay = tweets.filter(function(tweet) {
              return tweet.lang === 'fr';
            });
          }

          // const tweetsToDisplay = !isFr
          //   ? tweets.filter(function(tweet) {
          //       return tweet.lang === 'fr';
          //     })
          //   : tweets;

          const newOl = createOl(tweetsToDisplay);

          currentOl.replaceWith(newOl);
          currentOl = newOl;
          isFr = !isFr;
        });

        // ### BONUS: LOCALSTORAGE ###
        // [1] Rajouter un bouton "fav" à chaque li

        /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

        // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.

        // PRÉSENTATION Asynchronicité

        // PRÉSENTATION Modules
      })
      .catch(function(e) {
        console.error(e);
      });
  },
  { once: true },
);
