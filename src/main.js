"use strict";

document.addEventListener('DOMContentLoaded', function (e) {

  document.body.append(makeTrackingButton());

  const urls = [
    'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
    'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
  ];

  Promise.all(urls.map(fetchJson))
    .then(function (tweets) {
      tweets = tweets[0].concat(tweets[1]);
      console.log('Le tableau de tweet', tweets);

      const button = document.createElement('button');
      button.textContent = 'Click';
      document.body.append(button);

      let ol = makeOl(tweets);
      document.body.append(ol);

      let isFr = false;

      button.addEventListener('click', function () {
        localStorage.setItem('hello', Math.random());
        const tweetsToDisplay = !isFr
          ? tweets
            .filter(function (tweet) {
              return tweet.lang === 'fr';
            })
          : tweets;

        const newOl = makeOl(tweetsToDisplay);

        ol.replaceWith(newOl);
        ol = newOl;
        isFr = !isFr;
      });

      // Présentation Modules

      /* utiliser import et export pour mettre les différents fichiers en lien, et créer le bundle.js
        Utiliser le bundle.js comme <script src=""> dans le html */


      // Ajouter les infos de la date à nos <li>


      // Ajouter les infos de l'auteur à nos <li>


      // Donner des classes à la date ainsi qu'à l'auteur pour les styliser


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
    .catch(function (e) { console.error(e) });

}, { once: true });
