# [Typescript](https://www.typescriptlang.org/)

Typescript est la version **typée** de Javascript. C'est un langage à part entière, mais très proche de Javacript.

Typer un langage:

- permet d'éviter énormément de bugs en amont
- documente le code
- requiert une plus grande rigueur à l'écriture

Typescript n'est pas bloquant ! Le fichier `.js` est quand même généré malgré les erreurs de TS.

## Ajouter un type

```ts
const b: boolean = true; // OK
const b: boolean = 1; // Error
const b: number = 1; // OK
```

En pratique Typescript est capable de deviner, d'**inférer** la plupart des cas.

Les fonction ont besoin qu'on leur fournisse les types des arguments. Le type de retour est en général inféré.

```ts
function maFonction(s: string) {
  console.log(s);
}

function maFonction(s: string): number {
  return s.length;
}

function maFonction(s: string): string[] {
  return s.split('');
}
```

Les types classiques sont: `string`, `boolean`, `number`, `null`, `void`, `undefined`, `any`, ...

Quelques types liées au DOM: `HTMLElement`, `MouseEvent`, ...

Pour les Arrays: `string[]`.

Pour les Promesses: `Promise<string>`

## Déclarer une Interface

Les Interfaces permettent de définir des types d'objets.

```ts
interface Person {
  name: string;
  age: number;
}

const romain: Person = {
  name: 'Romain',
  age: 34,
};
```

## Déclarer une Enum

Les Enumérations permettent de définir des valeurs prédéfinies.

```ts
enum Direction {
  Up, // => équivaut à 0
  Down, // => 1
  Left, // => 2
  Right, // => 3
}

enum Color {
  Blue = 'blue',
  Red = 'red',
  Green = 'green',
}

Direction.Up; // 0
Color.Red; // 'red'
```

## Fichiers de déclarations

Quand on utilise des modules externes, il est régulièrement nécessaire d'en importer les déclarations.

Utiliser [TypeSearch](https://microsoft.github.io/TypeSearch/) pour en vérifier l'existence.

Installer les déclarations avec `npm install ... -D`

## **_À vos claviers !!!_**

### Bases

Installer le compilateur typescript:

```bash
npm i typescript -D
```

Compiler l'exercice:

```bash
npx tsc -w --noImplicitAny 'exos/3 - typescript/typescript.ts'
```

- Ouvrir le dossier `/exos/3 - typescript`
- Ouvrir le fichier `typescript.html` dans votre navigateur
- Suivre les indications du fichier `typescript.ts`, et vérifier les résultats dans votre navigateur

### Projet

On va utiliser Typescript dans le contexte Browserify.

```bash
npm i tsify -D
```

Ajouter un dossier `src/typescript`.

Y copier les fichiers de `src/vanilla` en les renommant `.ts`.

Ajouter `tsconfig.json` à la racine du projet.

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "noImplicitAny": true
  }
}
```

Dans `package.json`

```json
{
  ...
  "scripts": {
    ...
    "build:ts": "browserify src/typescript/main.ts -o bundle.js -p [ tsify ] -t [ babelify ] -d --extension=ts",
    "watch:ts": "watchify src/typescript/main.ts -o bundle.js -p [ tsify ] -t [ babelify ] -d -v --extension=ts",
    ...
  }
  ...
}
```

```bash
npm run watch:ts
```
