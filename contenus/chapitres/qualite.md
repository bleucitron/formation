# Qualité de code

## Linting

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
    "lint": "eslint ."
  }
}
```

Lancer le linter.

```bash
npm run lint
```

### Ignorer les fichiers superflus

Définir une liste de fichiers dans un `.eslintignore`.

### Règles

À l'initialisation, on choisit (ou pas) des règles par défaut.

On peut choisir d'ajuster les règles dans `.eslintrc`.

Les règles peuvent être désactivées (`"off"`), définies en avertissement (`"warn"`) ou erreur (`"error"`). Elles peuvent également être [configurées](https://eslint.org/docs/rules/).

```json
{
  "extends": "eslint:recommended",
  "rules": {
    "ma-règle": "off",
    "ma-règle-1": "warn",
    "ma-règle-2": "error",
    "ma-règle-3": ["error", options]
  }
}
```

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
    "test": "jest ."
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

describe("la fonction que l'on veut tester", () => {
  it('ce que cette fonction doit faire dans un cas précis', () => {
    var maValeur = maFonction();

    expect(maValeur).toBe(ceQuiEstAttendu); // chercher dans la doc de Jest
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
  "lint-staged": {
    "*.js": ["eslint", "jest --findRelatedTests"]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
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

---

# À vos claviers !!!

Isoler la fonction `isFrenchTweet` dans un module, et la tester:

- (1) tester que isTweetFr renvoie vrai pour un tweet en francais
- (2) tester que isTweetFr renvoie false pour un tweet en anglais
- (2bis) tester que isTweetFr renvoie faux pour un tweet sans langue
- (3) tester que isTweetFr renvoie vrai pour un tweet en francais canadien (fr-ca)
- (4) tester que isTweetFr jette une exception pour un tweet undefined

## À suivre: [React](./react.md)
