# Properties

## Exercices

Pour les snippets suivant, dessiner le diagramme représentant la situation **après** l'exécution du code.

Vous pouvez utiliser des outils comme [AWW](https://awwapp.com/#) ou [Miro](https://miro.com/).

### 1)

```js
let color = 'blue';
let car = {
  name: 'R5',
  color: color,
};

for (let i = 0; i < 3; i++) {
  car = {
    name: 'R5',
    color: 'yellow',
  };
}
```

### 2)

```js
let john = {
  name: 'lennon',
  address: {
    city: 'liverpool',
  },
};

let paul = {
  name: 'mccartney',
  address: john.address,
};

paul.address.city = 'london';
```

### 3)

```js
let griffindor = {
  name: 'griffindor',
};

let harry = {
  name: 'potter',
  house: griffindor,
};

let hermione = {
  name: 'granger',
  house: {
    name: 'griffindor',
  },
};

let ron = {
  name: 'weasley',
  house: harry.house,
};

harry.house = {
  name: 'hufflepuff',
};

hermione.house.name = 'hufflepuff';
```

### 4)

```js
let knight = {
  power: 40,
};
let thief = {
  power: 20,
  weapon: {
    type: 'knife',
  },
};

let wizard = {
  power: thief.power,
  weapon: knight.weapon,
};

knight.weapon = thief.weapon;
thief.weapon = {
  type: 'sword',
};
```
