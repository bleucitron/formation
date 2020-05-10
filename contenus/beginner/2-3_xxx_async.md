# Gérer l'asynchrone

Un code asynchrone permet les opérations asynchrones, qui prennent du temps sans bloquer l'éxécution de la suite.

C'est une problématique fortement liée au réseau, et à ses fluctuations.

**Javascript est donc asynchrone.**

On peut lancer certaines opérations qui prennent un certain temps, souvent indéfini, sans bloquer le reste du code.

EXEMPLE AVEC SETTIMEOUT

Mais comment faire si j'ai besoin du résultat d'une opération asynchrone ?

```js
function rendMoiMonArgent(somme) {
  // ... au bout de 2 ans
  return somme;
}

function récupérerLArgent() {
  const argent = rendMoiMonArgent(200);

  console.log('Argent', argent);
}
```

## [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

`async` permet de déclarer une fonction qui dépend d'opérations asynchrones.

`await` permet d'attendre les résultats d'opérations asynchrones **dans une fonction `async`**.

On peut alors écrire du code asynchrone comme s'il était synchrone.

```js
function rendMoiMonArgent(somme) {
  // ... au bout de 2 ans
  return somme;
}

async function récupérerLArgent() {
  const argent = await rendMoiMonArgent(200);

  console.log('Argent', argent);
}
```

### "j'ai tout dépensé"

```js
function rendMoiMonArgent(somme) {
  // ... au bout de 2 ans
  return somme;
}

async function récupérerLArgent() {
  try {
    const argent = await rendMoiMonArgent(200);
    console.log('Argent', argent);
  } catch {
    console.log('Voleur !!!');
  }
}
```

## Les Promesses

### Avant

Pour gérer l'asynchrone, avant, on utilisait des callbacks.

```js
function afficheSonProfil() {
  console.log('Romain est barbu');
}

vaMeChercherLesDonnéesDe(Romain, afficheSonProfil);

console.log('En cours...');

/*
En cours...
Romain est barbu
*/
```

Mais on tombait vite dans l'enfer des callbacks.

### Aujourd'hui

On utilise des [Promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses) !

Les Promesses offrent une API simple permettant de gérer les cas **résolus** (promesses tenues), et les cas **rejetés** (promesses non tenues).

```js
const maPromesse = new Promise(function (resolve, reject) {
  console.log('Initial');
  if (toutVaBien) resolve('OK');
  else reject('On est dans la mouise');
});

maPromesse
  .then(function (valeurPromise) {
    console.log('Résultat:', valeurPromise);
  })
  .catch(function (erreur) {
    console.error('Erreur:', erreur);
  });
```

⚠ Si pas de `.catch()`, on ne sera jamais prévenu en cas de problème.

### Chaînage

```js
myP.then().then().catch().then()...
```

### Synchroniser

Si on veut synchroniser plusieurs promesses, on peut utiliser

- `Promise.all()`, renvoie la promesse d'avoir **TOUTES** les promesses **résolues**
- `Promise.allSettled()`, renvoie la promesse d'avoir toutes les promesses **terminées**

```js
Promise.all([promesse1, promesse2]).then(function (tableauDesResultats) {
  console.log(tableauDesResultats); // [resultat1, resultat2]
});

Promise.allSettled([promesse1, promesse2]).then(function (tableauDesResultats) {
  console.log(tableauDesResultats); // [resultat1, resultat2]
});
```

---

# _**À vos claviers !!!**_

### 1) Ecrire une fonction `fetchJson` qui a comme paramètre une url et qui retourne une promesse pour des tweets en utilisant `fetch`

### 2) Utiliser cette fonction pour charger les tweets

### 3) Utiliser `Promise.all()` pour charger également les tweets de

https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json

et la méthode `.concat()` pour fusionner les tableaux.

## À suivre: [Modules](./modules.md)
