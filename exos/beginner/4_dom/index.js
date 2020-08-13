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

const exo1 = document.getElementById('exo1');

function createColorDiv(color) {
  const colorDiv = document.createElement('div');
  colorDiv.textContent = color;
  colorDiv.classList.add(color);
  colorDiv.addEventListener('click', function () {
    console.log(color);
  });

  return colorDiv;
}

colors.map(createColorDiv).forEach(function (colorDiv) {
  exo1.append(colorDiv);
});

// -------------------------------

/* Exercice 2: Taille
    - Créer une <div> carrée, de couleur noire, et l'ajouter au body
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/

const exo2 = document.createElement('section');
exo2.id = 'exo2';

document.body.append(exo2);

const square = document.createElement('div');
square.classList.add('square');
exo2.append(square);

square.addEventListener('mousemove', function (event) {
  square.style.width = event.clientX + 'px';
  square.style.height = event.clientY + 'px';
});

// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter au body
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/

const names = ['Harry', 'Hermione', 'Ron', 'Sirius', 'Hagrid', 'Albus'];

const exo3 = document.createElement('section');
exo3.id = 'exo3';
document.body.append(exo3);

function random(nb) {
  return Math.floor(Math.random() * nb);
}

function createCharacter(name) {
  const character = document.createElement('div');
  character.classList.add('wizard');
  character.textContent = name;

  character.addEventListener('click', function () {
    const indice = random(names.length);
    const newName = names[indice];

    const newCharacter = createCharacter(newName);

    character.replaceWith(newCharacter);
  });

  return character;
}

const firstCharacter = createCharacter(names[0]);

exo3.append(firstCharacter);

// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer un bouton, lui donner le contenu "Track", et l'ajouter au body
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/

const exo4 = document.createElement('section');
exo4.id = 'exo4';
document.body.append(exo4);

const button = document.createElement('button');
button.textContent = 'Track !';
exo4.append(button);

let isTracking = false;

function track(event) {
  console.log(event.clientX, event.clientY);
}

button.addEventListener('click', function () {
  isTracking = !isTracking;
  console.log(isTracking);

  if (isTracking) {
    console.log('Tracking !');
    button.textContent = 'Stop tracking';
    window.addEventListener('mousemove', track);
  } else {
    console.log('Stop tracking');
    button.textContent = 'Track !';
    window.removeEventListener('mousemove', track);
  }
});
