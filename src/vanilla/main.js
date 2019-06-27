import fetchJson from './fetchJson';
import createOl from './createOl';
import createTrackingButton from './createTrackingButton';
import createFilterButton from './createFilterButton';

document.addEventListener(
  'DOMContentLoaded',
  function() {
    const url1 =
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
    const url2 =
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

    const ps = [url1, url2].map(fetchJson);

    Promise.all(ps)
      .then(([t1, t2]) => {
        const tweets = t1.concat(t2);
        console.log('Le tableau de tweet', tweets);

        let ol = createOl(tweets);

        const trackingButton = createTrackingButton();
        const filterButton = createFilterButton(tweets, ol);

        document.body.append(trackingButton);
        document.body.append(filterButton);
        document.body.append(ol);

        // ### BONUS 1: LOCALSTORAGE ###
        // 1) Rajouter un bouton "fav" à chaque li

        /* 2) quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

        // 3) au chargement de la page, lire le localStorage pour favoriser les favoris.

        // ### BONUS 2: TIMING EVENEMENTS ###

        /* Faites un bouton (un peu gros) qui écoute mousedown/click/dblclick et mesure le temps de click et de doubleclick
      et affiche tempsClic1, tempsClic2, tempsDoubleClic */
      })
      .catch(e => console.error(e));
  },
  { once: true },
);
