'use strict';

// ### 0/ Pour se chauffer ###

console.log('--- Question 1 ---');
// [1] créer une variable x, et lui assigner un nombre

console.log('--- Question 2 ---');
// [2] logguer cette variable dans la console avec console.log()

console.log('--- Question 3 ---');
/* [3] créer une fonction x10 qui en entrée prend un nombre et renvoie le nombre multiplié par 10
  puis logguez le résultat de la fonction x10 appliquée sur x
*/

console.log('--- Question 4 ---');
/* [4] logguer chacune des valeurs de "nombres" dans la console
en utilisant .forEach()
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887];

console.log('--- Question 5 ---');
/* [5] à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/

console.log('--- Question 6 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant .filter()
*/

console.log('--- Question 7 ---');
/* [7] à partir de "nombres", créer un nouveau tableau contenant les valeurs multipliées par 10
  en utilisant .map() et la function x10
*/

console.log('--- Question 8 ---');
/* [8] logguer chacune des valeurs de "couleurs" et leur longueur dans la console
en utilisant .forEach()
*/
const couleurs = ['bleu', 'rouge', 'vert', 'jaune', 'orange', 'marron', 'noir'];

console.log('--- Question 9 ---');
/* [9] à partir de "couleurs", créer un nouveau tableau contenant les longueurs
  en utilisant .map()
*/

console.log('--- Question 10 ---');
// [10] créer une fonction "longueur" qui prend en entrée une string et renvoie la longueur de la string

console.log('--- Question 11 ---');
// [11] reprendre le code de la question 9 mais en utilisant la fonction "longueur"

console.log('--- Question 12 ---');
// [12] ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];

personnes.push({ nom: 'David', date: '1987-03-08' });

console.log('--- Question 13 ---');
// [13] à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()

console.log('--- Question 14 ---');
/* [14] créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 et renvoie l'âge en nombre, en utilisant Date()
*/

function calculerAge(dateEnString) {
  const auj = new Date();
  const date = new Date(dateEnString);

  return Math.floor((auj - date) / 1000 / 3600 / 24 / 365.25);
}

console.log(calculerAge('1985-12-31'));

console.log('--- Question 15 ---');
// [15] à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges

// const ages = personnes.map(function (p) {
//   return calculerAge(p.date);
// });

// const dates = personnes.map(function (p) {
//   return p.date;
// });
// const ages = dates.map(calculerAge);

const ages = personnes
  .map(function (p) {
    return p.date;
  })
  .map(calculerAge);

console.log('Ages', ages);
