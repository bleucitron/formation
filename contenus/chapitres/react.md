# [React](https://reactjs.org/)

* Créé par Facebook, open-sourcé en 2013
* Sert à générer des composants visuels
* Utilisé par Facebook, Airbnb, Sony, Wordpress

## Principe

On construit un arbre de composants, avec des parents et des enfants.

### Flux de données uni-directionnel

En React, les données **descendent** du parent vers l'enfant, via des `props`.

Les `props` sont l'ADN d'un composant. Un composant ne peut pas changer ses `props`.


### DOM Virtuel

Les opérations sur le DOM coûtent cher, il faut les minimiser.

React utilise un DOM virtuel pour faire les opérations avant de décider de toucher au vrai DOM.


### Définir un composant

Un composant React est une **fonction** `props => instance d'un composant`.

```jsx

function MonComposant(props) {
  return <div>Hello</div>;
}

const MonComposant = props => (<div>Hello</div>);

```

### JSX

Ce n'est **PAS** du HTML, c'est du Javascript.
Compilé en JS "vanille" par Babel.

```jsx
<MonComposant maProp="valeur" monAutreProps={1 + 2} />

<MonComposant maProp="valeur">
  <div>
    <h1>Hello</h1>
    Je suis un composant nesté !
  </div>
  <UnAutreComposant />
</MonComposant>
```

Toujours utiliser des `{}` pour écrire des expressions JS dans les composants.

Tous les éléments HTML standards ont leur composant associé fourni par React.

⚠ Il faut avoir importé React dans tous les fichiers qui utilisent du JSX. ⚠

---

# À vos claviers !!!

Installer React.

```bash
npm i react react-dom
npm i @babel/preset-react --save-dev
```

Refaire l'application avec React, mais en utilisant les données `data/tweets.json`.

```js
import tweets from '../../data/tweets.json';
```

---

## Faire évoluer l'état

Il faut utiliser des composants **"stateful"**.

### Composants "stateful"

En réalité, les composants sont des classes.

```jsx
class MonComposant extends React.Component {
  constructor() {
    super();
    // ...
  }

  render() {
    // ...
  }
}
```

Un composant stateful contient en plus un `state`, initialisé dans le `constructor`.

Le `state` est le vécu d'un composant. Il évolue au cours du temps.

```js
// ...
  constructor() {
    this.state = {
      // ...
    }
  }
// ...
```

Pour changer le `state` d'un composant, on utilise la méthode `this.setState(modifiedState)`, en lui passant le morceau de state que l'on veut modifier, sous forme d'objet.

`setState()` change le `state`, puis appelle `render()`, qui se propage dans les enfants.

⚠ **Les données du state ne doivent concerner que les données du composant et de ses enfants.** ⚠


### Les évènements "remontent"

Tous les composants standards implémentent les `onEvent` prévus en HTML.

```jsx
<button onClick={() => ...} />
<input onChange={() => ...} />
<div onMouseMove={() => ...} />
```

On peut alors ajuster le `state` en fonction des évènements remontés.

### Cycle de vie

`constructor`
`componentDidMount`
`shouldComponentUpdate`
`render`
`componentDidUpdate`
`componentWillUnmount`



## Tests de composants

Plusieurs librairies, mais on va utiliser [Enzyme](https://airbnb.io/enzyme/).

