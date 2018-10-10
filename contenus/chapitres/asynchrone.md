# Asynchronicité

Un code asynchrone permet les opérations asynchrones, qui prennent du temps sans bloquer l'éxécution de la suite.

C'est une problématique fortement liée au réseau, et à ses fluctuations.

**Javascript est donc asynchrone.**


## Avant

On utilisait des callbacks.

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


## Aujourd'hui

On utilise des [Promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses) !

```js
const maPromesse = new Promise((resolve, reject) => {
    console.log('Initial');
    if (toutVaBien)
        resolve('OK');
    else
        reject('On est dans la mouise');
});

maPromesse.then(function(valeurPromise) {
    console.log("Résultat:", valeurPromise);
})
.catch(function(erreur){
    console.error("Erreur:", erreur);
});
```

⚠ Si pas de `.catch()`, on ne sera jamais prévenu en cas de problème.

### Chaînage

```js
myP.then().then().catch().then()...
```

### Synchroniser

Si on veut synchroniser plusieurs promesses, il faut utiliser `Promise.all()`.

```js
Promise.all([promesse1, promesse2])
.then(function(tableauDesResultats) {
    console.log(tableauDesResultats); // [resultat1, resultat2]
});
```

## [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

Permet d'écrire du code asynchrone comme s'il était synchrone.


# À vos claviers !!!

### 1) Ecrire une fonction `fetchJson` qui a comme paramètre une url et qui retourne une promesses pour des tweets en utilisant `fetch`

### 2) Utiliser cette fonction dans `main.js`

### 3) Changer la fonction getTweets pour qu'elle charge 120 tweets de 2 urls

https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json
https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json

puis combiner les résultats avec `Promise.all()`, et la méthode `.concat()` pour fusionner
les tableaux.
