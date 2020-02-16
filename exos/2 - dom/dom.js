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

        console.log('--- Question 2 ---');
        // créer un tableau avec seulement tous les textes des tweets en utilisant .map()

        console.log('--- Question 3 ---');
        // créer un tableau avec seulement les dates de publication

        console.log('--- Question 4 ---');
        // créer un tableau avec seulement les tweets en français en utilisant .filter()

        // ### DOM ###

        console.log('--- Question 5 ---');
        /* pour le premier tweet
          - l'afficher dans la console
          - afficher son texte dans la console
          - créer une div avec l'id 'replace-me' qui contient le texte du tweet
          - ajouter la div au <body>
        */

        console.log('--- Question 6 ---');
        // créer un <ol> et l'ajouter au <body>

        console.log('--- Question 7 ---');
        // pour chaque tweet, créer un <li>, mettre le texte dedans, mettre le <li> dans le <ol>

        // !!! S'ARRÊTER LÀ POUR LE MOMENT
        // ### PRESENTATION DOM ###

        console.log('--- Question 8 ---');
        // Créer un bouton et remplacer la div 'replace-me' présente dans la page par ce bouton

        // ### EVENEMENTS ###

        console.log('--- Question 9 ---');
        /* Ajouter un event listener au click sur le bouton précédemment créé
        pour afficher dans la console le nombre de div présentes dans la page */

        console.log('--- Question 10 ---');
        /* Ajouter un event listener au scroll sur la window pour modifier la taille de la police
        en fonction de la hauteur scrollée (event.target.scrollTop) */

        console.log('--- Question 11 ---');
        /* Créer un bouton qui active le tracking de la position de la souris (event.clientX, event.clientY)
        et le désactive quand on reclique dessus */
      })
      .catch(function(e) {
        console.error(e);
      });
  },
  { once: true },
);
