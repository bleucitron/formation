# Un peu plus de syntaxe

## Logique

- not : `!x`
- et : `a && b`
- ou : `a || b`

## [Conditions](https://dorey.github.io/JavaScript-Equality-Table/)

```js
if (x) {
  // x === true
} else {
  // x === false
}
```

## Assignation

- `let a = 1;`
- `a = a + 5;`
  - `a += 5;`
- `a = a + 1;`
  - `a++;`

### Oublier `var`

`const` et `let` sont "block scoped", `var` est "function scoped"

```js
## Function scope

function() {
  const a = 1;
  let b = 2;
  var c = 3;

  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
}

console.log(a); // undefined
console.log(b); // undefined
console.log(c); // undefined
```

```js
## Block scope

if () {
  const a = 1;
  let b = 2;
  var c = 3;

  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
}

console.log(a); // undefined
console.log(b); // undefined
console.log(c); // 3
```

### `const` ou `let` ?

```js
const a = 1;
let b = 2;

a = 3; // Error
b = 4; // Ok
```

`const` n'empêche pas de muter ! (et tant mieux)

```js
const romain = { favoriteMovie: 'Les Tuche' };

romain.favoriteMovie = 'Les Tuche 2';

romain = { favoriteMovie: 'Les Tuche 3' }; // Error
```

## [Fonctions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Fonctions)

Les fonctions contiennent du code. Elles sont comme des petites lunes autour de notre planète.

```js
const fredonner = () => {
  console.log('♪ lalala ♬');
};

function chanter() {
  console.log('♪ LALALA ♬');
}
```

Une fonction a toujours:

- un corps
- une seule sortie

```js
function () {}; // répond undefined

function () {
  return 🎂;
};
```

Une fonction a parfois:

- un nom
- une ou plusieurs entrées

```js
function cuisiner(lait, chocolat, beurre) {
  return 🎂;
}

console.log(cuisiner);
```

Donner un nom à une fonction permet de la réutiliser.

## [Math](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math)

Une collection de fonctions pour faire des maths.

- `Math.random()`
- `Math.round/floor/ceil`
- `Math.sin()`
- ...

## [JSON](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON)

JSON : JavaScript Object Notation

C'est un format d'échange (manière de sérialiser des données structurées)

- `JSON.stringify(obj) => string`
- `JSON.parse(string) => obj`

```js
const o = {
  a: 1,
  bloublou: 9,
  chapito: 'yo',
  brave: {
    autre: 'object',
  },
};

console.log(JSON.stringify(o));
```

⚠ C'est un format fragile ⚠, vérifier avec [JSON Lint](https://jsonlint.com/)

## [Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

```js
const uneDate = new Date('2009-10-12'); // renvoie une objet Date
const aujourdHui = new Date();

uneDate.getTime(); // nombre de millisecondes depuis le 1er janvier 1970
uneDate.getDay();
uneDate.getDate();
uneDate.getMonth();
uneDate.getYear();
// etc ...

aujourdHui - uneDate; // soustrait les dates, renvoie un entier en millisecondes
```

## [Tableaux](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

```js
const arr = [12, 65, 546];

arr[0]; // 12
arr.length; // 3
```

### Itérer sur un tableau

```js
const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  // à l'ancienne
  console.log(arr[i]);
}

for (let element of arr) {
  // à un poil plus moderne
  console.log(element);
}

arr.forEach(function (element) {
  // beaucoup mieux !
  console.log(element);
});
```

### Manipuler les tableaux

En Javascript, on aime bien manipuler les tableaux en utilisant l'**écriture fonctionnelle**.

De manière illustrée, ça donne [ça](https://twitter.com/steveluscher/status/741089564329054208).

- `a.forEach(f)`

```js
const arr = [1, 2, 3, 4];

arr.forEach(function (e, i, a) {
  // les arguments i et a sont optionnels
  console.log(e * i);
});

// 0
// 2
// 6
// 12
```

- `a.map(f)`

```js
const arr = [1, 2, 3];

const arr2 = arr.map(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e * 10;
}); // [10, 20, 30]
```

- `a.filter(f)`

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const arr2 = arr.filter(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e % 2 === 0;
}); // [2, 4, 6, 8]
```

- `a.find(pred)`

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const found = arr.find(function (e, i, a) {
  // les arguments i et a sont optionnels
  return e >= 4 && e % 4 === 2; // 6
});
```

- `a.sort(fun)`

```js
const found = arr.sort(function (a, b) {
  return b - a; // doit retourner un nombre positif ou négatif
});
```

- `a.includes(element)`

```js
arr.includes(2); // true
arr.includes(10); // false
```

- `a.flat()`

```js
var arr = [1, 2, [3, 4]];
arr.flat(); // [1, 2, 3, 4]
```

- `a.slice(debut, fin)`

```js
arr.slice(2, 5); // [3, 4, 5]
```

# **_À vos claviers !!!_**

- Ouvrir le dossier `/exos/beginner/2-1_js`
- Ouvrir le fichier `index.html` dans votre navigateur
- Suivre les indications du fichier `index.js`, et vérifier les résultats dans votre navigateur

## À suivre: [DOM](../old/dom.md)
