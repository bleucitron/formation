# Linting

Sert à écrire du code propre, selon les conventions que l'on choisit.

On va utiliser [Eslint](https://eslint.org/).

```bash
npm i eslint --save-dev

# on initialise les règles
npx eslint --init
```

Dans `package.json`
```json
{
    "scripts": {
        //...
        "lint": "eslint ."
        //...
    }
}
```

Lancer le linter.
```bash
npm run lint
```

.eslintrc

.eslintignore



## Tests

Plusieurs frameworks sont disponibles:
- [Jest](https://jestjs.io/)
- [Jasmine](https://jasmine.github.io/)
- [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/)

Pour lancer des tests dans un vrai navigateur, utiliser [Karma](https://karma-runner.github.io/2.0/index.html).



```bash
npm i jest --save-dev
```

Dans `package.json`
```json
{
    "scripts": {
        //...
        "test": "jest ."
        //...
    }
}
```

Lancer les tests.
```bash
npm run test
```

Jest va chercher tous les fichiers en `*.test.js`, et les exécuter.


```js
import maFonction from './maFonction';

describe('la fonction que l\'on veut tester', () => {

  it('ce que cette fonction doit faire dans un cas précis', () => {
    var maValeur = maFonction();

    expect(maFonction()).toBe... // chercher dans la doc de Jest

  });
});
```



## Automatisation

On veut s'assurer que les tests sont lancés systématiquement.

```bash
npm i husky lint-staged --save-dev
```

```json
// package.json
{
    "scripts": {
        "precommit": "lint-staged"
    },
    // ...
    "lint-staged": {
        "*.js": [
            "eslint",
            "jest --findRelatedTests"
        ]
    },
    // ...
}
```

## Code coverage

Attention ! Métrique dangereuse !

## Tests de non-régression

1. on a observé un bug
2. on écrit un test qui décrit le comportement correct
3. on lance le test, il échoue
4. on corrige le bug
5. on lance le test, il passe


## Tests automatisés sur vrais navigateurs: [Karma](https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai)




# TODO

Créer un module qui exporte une fonction qui ...

Test de DOM

```js
import createTweetLi from '../createTweetLi'

describe('createTweetLi', () => {
    it('should throw when no argument is passed', () => {
        expect(
            () => createTweetLi();
        ).to.throw();
    })

    it('should create an empty <li> if an empty object is passed', () => {
        const li = createTweetLi({});

        expect( li ).to.be.an.instanceof(HTMLLIElement)
        expect( li.textContent ).to.equal('');
    })

})
```
