import fetchJson from './fetchJson';
import createTrackingButton from './createTrackingButton';
import createOl from './createOl';

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

document.addEventListener(
  'DOMContentLoaded',
  e => {
    Promise.all([fetchJson(url1), fetchJson(url2)]) // ou Promise.all([url1, url2].map(fetchJson))
      .then(([l1, l2]) => {
        const tweets = [...l1, ...l2];
        console.log('Le tableau de tweet', tweets);

        const button = document.createElement('button');
        button.textContent = 'Click';

        document.body.append(button);

        const trackButton = createTrackingButton();
        document.body.append(trackButton);

        let olInitial = createOl(tweets);
        document.body.append(olInitial);

        let isFr = false;

        button.addEventListener('click', () => {
          console.log('Click');

          const tweetsToDisplay = isFr
            ? tweets
            : tweets.filter(({ lang }) => lang === 'fr');

          const olNew = createOl(tweetsToDisplay);

          olInitial.replaceWith(olNew);
          olInitial = olNew;

          isFr = !isFr;
        });

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
