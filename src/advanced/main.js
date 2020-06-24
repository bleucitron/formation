'use strict';

document.addEventListener(
  'DOMContentLoaded',
  function (e) {
    fetch(
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (tweets) {
        console.log('Le tableau de tweet', tweets);

        // ### Projet Touitter ###
        // Attention: toucher au DOM coûte cher, utiliser le moins possible les APIs du DOM

        // [1] créer une fonction, qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet

        // [2] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [1]

        // créer et ajouter un <button> qui quand on clique dessus affiche 'click' dans la console.

        // [3] modifier le bouton pour que quand on clique dessus, ne garde que les tweets en français

        // [4] modifier le bouton de filtre pour pouvoir réafficher tous les tweets quand on reclique dessus

        /* [5] créer une fonction, qui pour un tableau tweets en entrée, crée et retourne un <ol> rempli de <li>
    et l'utiliser à [2], [3], [4] */

        /* [6] Créer un bouton qui, quand on clique dessus:
            - active le tracking de la souris: la console affiche position de la souris (event.clientX, event.clientY) quand la souris bouge
            - désactive le tracking quand on reclique dessus
        */

        // ### BONUS 1: LOCALSTORAGE ###
        // [1] Rajouter un bouton "fav" à chaque li

        /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

        // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
