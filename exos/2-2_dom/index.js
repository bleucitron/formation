// # 2-2_DOM

/*
  Pense-bête DOM
  // accéder au <body>
  document.body

  // créer un nouvel élément 'div'
  const x = document.createElement('div');

  // rajouter un enfant
  parentEl.append(enfantEl);

  // ajouter un texte à un élément
  element.textContent = 'le texte yo !';

  // échanger des éléments
  element1.replaceWith(element2);

  // ajouter un listener à un élément
  element.addEventListener('click', function(e) {
    ...
  })
*/

/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la couleur en textContent, et l'ajouter au body
    - Chaque div doit avoir un fond coloré de sa couleur
    - Au click, chaque div doit logguer sa couleur dans la console
*/

const colors = ['blue', 'red', 'green', 'black', 'grey', 'orange', 'purple'];

// -------------------------------

/* Exercice 2: Taille
    - Créer une <div> carrée, de couleur noire, et l'ajouter au body
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/

// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter au body
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/

const names = ['Harry', 'Hermione', 'Ron', 'Sirius', 'Hagrid', 'Albus'];

// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer un bouton, lui donner le contenu "Track", et l'ajouter au body
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/
