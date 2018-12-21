import createOl from './createOl';
import createTrackingButton from './createTrackingButton';
import fetchJson from './fetchJson';

document.addEventListener('DOMContentLoaded', e => {

  createTrackingButton();

  const promesse1 = fetchJson('https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json');
  const promesse2 = fetchJson('https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json');

  const mesPromesses = [promesse1, promesse2];

  Promise.all(mesPromesses)
    .then(mesResultats => {
      const tweets = mesResultats[0].concat(mesResultats[1]);
      console.log('Le tableau de tweet', tweets);

      const filtreFr = document.createElement('button');
      filtreFr.textContent = 'Filtrer';
      document.body.append(filtreFr);

      let isFr = false;

      filtreFr.addEventListener('click', () => {
        const newTweets = isFr
          ? tweets
          : tweets.filter(tweet => tweet.lang === 'fr');

        const newOl = createOl(newTweets);
        ol.replaceWith(newOl);
        ol = newOl;
        isFr = !isFr;
      });

      let ol = createOl(tweets);
      document.body.append(ol);

      // Faire un module qui contient une fonction qui crée le bouton de filtre


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

}, { once: true });
