# Modules

## À l'ancienne

````html
<!doctype html>
<html>
    <head>
        <script src="code1.js"></script>
        <script src="code2.js"></script>
        <script src="code3.js"></script>
        <script src="code4.js"></script>
        <script src="code5.js"></script>
        <script src="code6.js"></script>
    </head>
    <body></body>
</html>
````

### Defer

````html
<!doctype html>
<html>
    <head>
        <script src="code1.js" defer></script>
        <script src="code2.js" defer></script>
    </head>
    <body></body>
</html>
````

### Async

````html
<!doctype html>
<html>
    <head>
        <script src="code1.js" async></script>
        <script src="code2.js" async></script>
    </head>
    <body></body>
</html>
````


Problèmes :

* Performance (6 requêtes HTTP max en parallèle)
* Dépendances entre scripts implicites

## Dépendances explicites

Les différents morceaux de code d'une application dépendent les uns des autres. Mais en JavaScript, ces dépendances sont par défaut **implicites**.

On souhaite rendre claires les relations entre fichiers, afin de savoir sans équivoque quel fichier nécessite quels autres fichiers.

On veut donc rendre les dépendances entre fichiers **explicites**.

## Tentatives



### CommonJS (Node.js)

````js
"use strict";

var dep1 = require('module') // module natif Node ou installé
var dep2 = require('./fichier.js') // fichier local au projet

// code

module.exports = function (a){
    var h = dep1(48);
    return h + dep2(a);
};
````

Problème: `require` synchrone


### AMD (Asynchronous Module Definition)

````js
define(
    ["helper/util", "jQuery.js", "http://momentjs.org/moment.js"],
    function(util, jQuery, moment) {

        // export
        return function(){

        }
    }
);
````

Problème: nb d'A/R égal à la profondeur de l'arbre.

Solution: [r.js](https://github.com/requirejs/r.js)


## Modules ES6

Quand on importe un module, on "récupère" ce que ce module exporte.
Le module "point d'entrée" n'exporte rien. Les modules "feuilles" n'importe rien.

### [`import`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import)

On peut importer depuis un module natif ou installé, ou depuis les fichiers locaux du projet.

````js
// un module importe d'autres modules


import monModule from 'monModule'; // import externe
import maFonction from './monFichierLocal'; // import local

import { pikachu, charmander as salameche } from 'pokemons'; // on importe seulement "pikachu" et "charmander", que je renomme en "salameche"

console.log(pikachu);

import * as pokemons from 'pokemons'; // on importe tous les exports

console.log(pokemons.pikachu)

// ...
````

### [`export`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/export)

On peut exporter des valeurs, des objets, des fonctions...

````js
// export par défaut, n'a pas besoin de nom
export default function(){
    // ....
}

export const maConst = 5; // export

````

**Les modules sont par défaut en mode strict !**


## Bundling

On "compile" tout le code en 1 seul (gros) fichier bien construit pour le charger dans le Html.

Il y a plusieurs alternatives disponibles.

- [`browserify`](http://browserify.org/)
- [`webpack`](https://webpack.js.org/)
- [`rollup`](https://rollupjs.org/guide/en)
- [`parcel`](https://parceljs.org/)

Ces outils nécessitent de travailler dans un environnement Node, puis de transformer le code Node en un code compatible navigateur.


Pour utiliser ces outils, il faut donc [installer Node](https://nodejs.org/en/) et un gestionnaire de paquets, [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/en/).

---

# À vos claviers !!!

On va utiliser [`browserify`](http://browserify.org/).


### Étape 1: [installer NodeJS](https://nodejs.org/en/)

```bash
# vérifier la version
node -v
npm -v
```

### Étape 2: installer Browserify et Babel

```bash
# dans le dossier projet :
npm init -y
npm install browserify -g
# npm install watchify -g
npm i babelify @babel/core babel-core@7.0.0-bridge.0 @babel/preset-env --save-dev

browserify src/vanilla/main.js -o bundle.js -t [ babelify --presets [ @babel/env ] ] -d
# watchify src/vanilla/main.js -o bundle.js -t [ babelify --presets [ @babel/env ] ] -d -v
```

### Étape 3: changer le HTML

Enlever tous les `<script>` et les remplacer par `<script defer src="bundle.js"></script>`

### Étape 4: utiliser `import`/`export` dans nos scripts

`main.js`

````js
import createTweetsOl from './createTweetsOl.js';
import createTimeButton from './createTimeButton.js';

document.addEventListener('DOMContentLoaded', function(){
    // ... createTweetsOl() ...
    // ... createTimeButton() ...
});
````

`createTweetsOl.js`

````js
export default function(tweets){
    // ...
}
````

### Étape 5: en profiter pour écrire avec la syntaxe ES6 partout


### Étape 6: ajouter les infos de la date avec [MomentJS](https://momentjs.com/)

```bash
npm install moment
```

```js
import moment from 'moment';

// chercher dans la doc pour afficher depuis quand le tweet a été envoyé
// ...
```

