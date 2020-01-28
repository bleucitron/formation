'use strict';

// ### 0/ Pour se chauffer ###

console.log('--- Question 1 ---');
// [1] créer une variable x, et lui assigner un nombre

const x = 15;

console.log('--- Question 2 ---');
// [2] logguer cette variable dans la console avec console.log()

console.log('X', x);

console.log('--- Question 3 ---');
/* [3] créer une fonction x10 qui en entrée prend un nombre et renvoie le nombre multiplié par 10
  puis logguez x10(x)
*/

function x10(nombre) {
  return nombre * 10;
}

console.log('X * 10', x10(x));

console.log('--- Question 4 ---');
/* [4] logguer chacune des valeurs de "nombres" dans la console
en utilisant .forEach()
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887];

nombres.forEach(function(nombre) {
  console.log('Nombre', nombre);
});

console.log('--- Question 5 ---');
/* [5] à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/

const pairs = nombres.filter(function(nombre) {
  return nombre % 2 === 0;
});

console.log('PAIRS', pairs);

console.log('--- Question 6 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant .filter()
*/

const plus100 = nombres.filter(function(nombre) {
  return nombre >= 100;
});

console.log('> 100', plus100);

console.log('--- Question 7 ---');
/* [7] à partir de "nombres", créer un nouveau tableau contenant les valeurs multipliées par 10
  en utilisant .map() et la function x10
*/

// const nx10 = nombres.map(function(nombre) {
//   return x10(nombre);
// });

function x10(nombre) {
  return nombre * 10;
}

const nx10 = nombres.map(x10);

console.log('nombres * 10', nx10);

console.log('--- Question 8 ---');
/* [8] logguer chacune des valeurs de "couleurs" et leur longueur dans la console
en utilisant .forEach()
*/
const couleurs = ['bleu', 'rouge', 'vert', 'jaune', 'orange', 'marron', 'noir'];

couleurs.forEach(function(couleur) {
  console.log('Couleur', couleur, couleur.length);
});

console.log('--- Question 9 ---');
/* [9] à partir de "couleurs", créer un nouveau tableau contenant les longueurs
  en utilisant .map()
*/

const couleursLength = couleurs.map(function(couleur) {
  return couleur.length;
});

console.log('Longueurs des couleurs', couleursLength);

console.log('--- Question 10 ---');
// [10] créer une fonction "longueur" qui prend en entrée une string et renvoie la longueur de la string

function longueur(s) {
  return s.length;
}

console.log('--- Question 11 ---');
// [11] reprendre le code de la question 9 mais en utilisant la fonction "longueur"

const couleursLength2 = couleurs.map(longueur);
console.log('Longueurs des couleurs 2', couleursLength2);

console.log('--- Question 12 ---');
// [12] ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];

personnes.push({ nom: 'Paul', date: '1939-03-31' });
personnes.push({ nom: 'Marie', date: '1975-10-19' });

console.log('Personnes', personnes);

console.log('--- Question 13 ---');
// [13] à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()

const noms = personnes.map(function(personne) {
  return personne.nom;
});

console.log('Noms', noms);

console.log('--- Question 14 ---');
/* [14] créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 et renvoie l'âge en nombre, en utilisant Date()
*/

function calculerAge(date) {
  const ageEnMs = new Date() - new Date(date);
  const age = ageEnMs / 1000 / 3600 / 24 / 365;

  return Math.floor(age);
}

console.log('Age', calculerAge('1987-10-22'));

console.log('--- Question 15 ---');
// [15] à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges

const ages = personnes.map(function(personne) {
  return calculerAge(personne.date);
});

console.log('Ages', ages);
