// # 2-1_Syntax

console.log('--- Question 1 ---');
// [1] créer une variable x, et lui assigner un nombre

const x = 18;

console.log('--- Question 2 ---');
// [2] logguer cette variable dans la console avec console.log()

console.log('X', x);

console.log('--- Question 3 ---');
/* [3] créer une fonction x10 qui en entrée prend un nombre et renvoie le nombre multiplié par 10
  puis logguez le résultat de la fonction x10 appliquée sur x.
*/

function x10(nb) {
  return nb * 10;
}

console.log('Resultat x10', x10(x));

console.log('--- Question 4 ---');
/* [3] créer une fonction random qui en entrée prend un nombre et renvoie un nombre entier aléatoire
  entre 0 et ce nombre (ex: si on lui passe 4, on veut récupérer, 0, 1, 2 ou 3, au hasard).
  Logguer le résultat de la fonction random appliquée sur x.
  ( Utiliser Math.random() et Math.floor() )
*/

function random(nb) {
  return Math.floor(Math.random() * nb);
}

console.log('Random', random(18));

console.log('--- Question 5 ---');
/* [4] logguer chacune des valeurs de "nombres" dans la console
en utilisant .forEach()
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887];

nombres.forEach(function (nombre) {
  console.log('Nombre', nombre);
});

console.log('--- Question 6 ---');
/* [5] à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/

function isPair(nombre) {
  return nombre % 2 === 0;
}

const pairs = nombres.filter(isPair);

console.log('pairs', pairs);

console.log('--- Question 7 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant .filter()
*/

const sup100 = nombres.filter(function (nombre) {
  return nombre > 100;
});

console.log('sup100', sup100);

// const coucou = nombres.filter(function (nombre) {
//   return nombre > 100 && nombre % 2 === 0;
// });

function plus100(nombre) {
  return nombre > 100;
}

// const coucou = nombres.filter(function (nombre) {
//   return plus100(nombre) && isPair(nombre);
// });

const coucou = nombres.filter(isPair).filter(plus100);

console.log('Coucou', coucou);

console.log('--- Question 8 ---');
/* [7] à partir de "nombres", créer un nouveau tableau contenant les valeurs multipliées par 10
  en utilisant .map() et la function x10
*/

const nombreX10 = nombres.map(x10);
console.log('x10', nombreX10);

console.log('--- Question 9 ---');
/* [8] logguer chacune des valeurs de "couleurs" et leur longueur dans la console
en utilisant .forEach()
*/
const couleurs = ['bleu', 'rouge', 'vert', 'jaune', 'orange', 'marron', 'noir'];

couleurs.forEach(function (couleur) {
  console.log(couleur, couleur.length);
});

console.log('--- Question 10 ---');
/* [9] à partir de "couleurs", créer un nouveau tableau contenant les longueurs
  en utilisant .map()
*/

const longueurs = couleurs.map(function (couleur) {
  return couleur.length;
});

console.log('Longueurs', longueurs);

console.log('--- Question 11 ---');
// [10] créer une fonction "longueur" qui prend en entrée une string et renvoie la longueur de la string

function longueur(s) {
  return s.length;
}

console.log('--- Question 12 ---');
// [11] reprendre le code de la question 10 mais en utilisant la fonction "longueur"

const longueurs2 = couleurs.map(longueur);
console.log('Longueurs2', longueurs2);

console.log('--- Question 13 ---');
// [12] ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];

personnes.push(
  {
    nom: 'Jacky',
    date: '1954-12-09',
  },
  {
    nom: 'Dorothée',
    date: '1965-09-03',
  },
);

console.log('Personnes', personnes);

console.log('--- Question 14 ---');
// [13] à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()

const noms = personnes.map(function (p) {
  return p.nom;
});

console.log('Noms', noms);

console.log('--- Question 15 ---');
/* [14] créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 et renvoie l'âge en nombre, en utilisant Date()
*/

const msToYear = 1000 * 60 * 60 * 24 * 365.25;

function calculerAge(date) {
  const age = Date.now() - new Date(date);

  return Math.floor(age / msToYear);
}

console.log('AGE en ms', calculerAge(personnes[0].date));

console.log('--- Question 16 ---');
// [15] à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges

const ages = personnes.map(function (personne) {
  return calculerAge(personne.date);
});

console.log('Ages', ages);
