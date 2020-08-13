/*

Créer une promesse qui:
- génère un nb aléatoire entre 0 et 5000
- attendre le temps du nombre aléatoire
- si nb > 3000, alors rejeter 'C trop long'
- sinon, alors résoudre nb
- consommer la promesse avec .then() et .catch() pour réagir

*/

function random(nb) {
  return Math.floor(Math.random() * nb);
}

const p = new Promise(function (resolve, reject) {
  const delay = random(5000);
  const tolerance = 3000;

  setTimeout(function () {
    reject("j'avais piscine");
  }, tolerance);

  setTimeout(function () {
    resolve(delay);
  }, delay);
});

p.then(function (valeurPromise) {
  console.log('VP', valeurPromise);
}).catch(function (erreur) {
  console.log('ERREUR', erreur);
});

const p = getDataFromFb(); // asynchrone

p.then(function (profile) {
  const friendsP = getFriends(profile); // asynchrone

  return friendsP;
})
  .then(function (amis) {
    console.log('amis', amis);
  })
  .catch(function (error) {});

///
const p = getMoneyFromBank(); // asynchrone

p.then(function (money) {
  const totalMoney = money + 1000; // synchrone
  console.log('Total', totalMoney);
}).catch(function (error) {});
