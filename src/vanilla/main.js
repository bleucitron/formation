'use strict';

import fetchJson from './fetchJson.js';
import createOl from './createOl.js';
import { checkTweetLang } from './checkTweetLang.js';

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

document.addEventListener(
  'DOMContentLoaded',
  e => {
    const myPs = [url1, url2].map(fetchJson);

    Promise.all(myPs)
      .then(resultat => {
        const tweets = resultat.flat();
        console.log('Le tableau de tweet', tweets);

        // ### 2/ Twitter ###

        let monOl = createOl(tweets);
        document.body.append(monOl);

        const button = document.createElement('button');
        button.textContent = 'Filtrer';
        document.body.prepend(button);

        let isFr = false;

        button.addEventListener('click', () => {
          let tweetsToDisplay = tweets;

          if (!isFr) {
            // tweetsToDisplay = tweets.filter(tweet => tweet.lang === 'fr');
            tweetsToDisplay = tweets.filter(checkTweetLang);
          }

          // const tweetsToDisplay = !isFr
          //   ? (tweetsToDisplay = tweets.filter(tweet => tweet.lang === 'fr'))
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

        trackingButton.addEventListener('click', () => {
          if (!isTracking) {
            console.log('Tracking');

            window.addEventListener('mousemove', track);
          } else {
            console.log('Stop Tracking');

            window.removeEventListener('mousemove', track);
          }
          isTracking = !isTracking;
        });

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
      .catch(e => console.error(e));
  },
  { once: true },
);
