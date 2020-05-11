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

        // ### 2/ Twitter ###

        // [1] créer une fonction, qui pour un tweet en entrée, crée et retourne un <li> contenant le texte du tweet

        // [2] créer et ajouter un <ol> à la page, puis y ajouter les <li> de tweets en utilisant [1]

        // [3] créer une fonction checkFr qui pour un tweet en entrée renvoie vrai ou faux selon si la langue est 'fr'

        // [4] créer et ajouter un <button> qui quand on clique dessus affiche 'click' dans la console.

        // [5] utiliser checkFr au clic du bouton pour afficher dans la console la liste des tweets français

        // [6] modifier le bouton pour que quand on clique dessus,
        //  - supprime le <ol> existant
        //  - ajoute un nouvel <ol> avec les tweets en français

        // [7] créer une variable booléenne isFr, et l'initialiser à false

        // [8] inverser la valeur du booléen au clic sur le bouton

        // [9] modifier le bouton de filtre pour pouvoir réafficher tous les tweets quand on reclique dessus
        //  Il faut utiliser isFr.

        /* [10] créer une fonction, qui pour un tableau tweets en entrée, crée et retourne un <ol> rempli de <li>
    et l'utiliser à [2], [6], [9] */

        // [11] Créer un bouton qui active le tracking de la position de la souris (event.clientX, event.clientY), et le désactive quand on reclique dessus

        // PRÉSENTATION Asynchronicité

        // PRÉSENTATION Modules

        // ### BONUS: LOCALSTORAGE ###
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
