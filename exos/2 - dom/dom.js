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
        /*

  Pense-bête DOM
  // créer un nouvel élément 'div'
  const x = document.createElement('div');

  // rajouter un enfant
  parentEl.append(enfantEl);

  // accéder au <body>
  document.body

  // ajouter un texte à un élément
  element.textContent = 'le texte yo !';

*/

        // observer la structure des données des tweets dans la console du navigateur

        // ### BOUCLES ###

        console.log('--- Question 1 ---');
        // afficher dans la console les textes de tous les tweets du tableau en utilisant .forEach()
        tweets.forEach(function(tweet, i) {
          console.log('Tweet', i, tweet.text);
        });

        console.log('--- Question 2 ---');
        // créer un tableau avec seulement tous les textes des tweets en utilisant .map()
        const texts = tweets.map(function(tweet) {
          return tweet.text;
        });
        console.log('texts', texts);

        console.log('--- Question 3 ---');
        // créer un tableau avec seulement les dates de publication
        const dates = tweets.map(function(tweet) {
          return tweet.created_at;
        });
        console.log('dates', dates);

        console.log('--- Question 4 ---');
        // créer un tableau avec seulement les tweets en français en utilisant .filter()
        const frs = tweets.filter(function(tweet) {
          return tweet.lang === 'fr';
        });
        console.log('Frs', frs);

        // ### DOM ###

        console.log('--- Question 5 ---');
        /* pour le premier tweet
          - l'afficher dans la console
          - afficher son texte dans la console
          - créer une div avec l'id 'replace-me' qui contient le texte du tweet
          - ajouter la div au <body>
        */

        const first = tweets[0];
        console.log('Premier', first);
        console.log('Premier texte', first.text);

        const monTexte = document.createElement('div');
        monTexte.id = 'replace-me';
        monTexte.textContent = first.text;

        document.body.append(monTexte);

        console.log('--- Question 6 ---');
        // créer un <ol> et l'ajouter au <body>
        const monOl = document.createElement('ol');
        document.body.append(monOl);

        console.log('--- Question 7 ---');
        // pour chaque tweet, créer un <li>, mettre le texte dedans, mettre le <li> dans le <ol>
        tweets.forEach(function(tweet, i) {
          const monLi = document.createElement('li');
          monLi.textContent = tweet.text;
          monOl.append(monLi);
        });

        // !!! S'ARRÊTER LÀ POUR LE MOMENT
        // ### PRESENTATION DOM ###

        console.log('--- Question 8 ---');
        // Créer un bouton et remplacer la div 'replace-me' présente dans la page par ce bouton

        const button = document.createElement('button');
        button.textContent = 'Click';

        const toReplace = document.getElementById('replace-me');
        toReplace.replaceWith(button);

        // ### EVENEMENTS ###

        console.log('--- Question 9 ---');
        /* Ajouter un event listener au click sur le bouton précédemment créé
        pour afficher dans la console le nombre de div présentes dans la page */
        button.addEventListener('click', function() {
          const nbDiv = document.querySelectorAll('div').length;
          const nbLi = document.getElementsByTagName('li').length;

          console.log('DIV', nbDiv);
          console.log('LI', nbLi);
        });

        console.log('--- Question 10 ---');
        /* Ajouter un event listener au scroll sur la window pour modifier la taille de la police
        en fonction de la hauteur scrollée (event.target.scrollTop window.scrollY) */
        window.addEventListener('scroll', function() {
          console.log('Scroll', window.scrollY);

          monOl.style.fontSize = 12 + window.scrollY + 'px';
        });

        console.log('--- Question 11 ---');
        /* Créer un bouton qui active le tracking de la position de la souris (event.clientX, event.clientY)
        et le désactive quand on reclique dessus */
        const trackingButton = document.createElement('button');
        trackingButton.textContent = 'Track !';

        let isTracking = false;

        function track(event) {
          console.log('X', event.clientX, 'Y', event.clientY);
        }

        trackingButton.addEventListener('click', function() {
          console.log('CLICK');

          if (!isTracking) {
            window.addEventListener('mousemove', track);
          } else {
            window.removeEventListener('mousemove', track);
          }

          isTracking = !isTracking;
        });

        document.body.prepend(trackingButton);
      })
      .catch(function(e) {
        console.error(e);
      });
  },
  { once: true },
);
