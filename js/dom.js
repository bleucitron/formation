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

        // ### 1/ Tweets ###

        // observer la structure des données des tweets dans la console du navigateur

        /* pour le premier tweet
          - l'afficher dans la console
          - afficher son texte dans la console
          - créer une div qui contient le texte du tweet et ajouter la div au <body>
        */

        // afficher dans la console les textes de tous les tweets du tableau en utilisant .forEach()

        // créer un tableau avec seulement tous les textes des tweets en utilisant .map()

        // créer un tableau avec seulement les dates de publication

        // créer un tableau avec seulement les tweets en français en utilisant .filter()

        // créer un <ol> et l'ajouter au <body>

        // pour chaque tweet, créer un <li>, mettre le texte dedans, mettre le <li> dans le <ol>
      })
      .catch(function(e) {
        console.error(e);
      });
  },
  { once: true },
);
