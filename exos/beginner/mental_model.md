# Variables

## Exercices

Pour les snippets suivant, dessiner le diagramme représentant la situation **après** l'exécution du code.

Vous pouvez utiliser des outils comme [AWW](https://awwapp.com/#) ou [Miro](https://miro.com/).

### 1)

```js
let x = 10;
let y = x;
x = 0;
```

### 2)

```js
let a = 2;
let b = 3;
let c = a + b;
a = c - a;
```

### 3)

```js
let a = 'hello';
let b = typeof a;
let c = typeof typeof 1;
let d = a === c;
```

### 4)

```js
let isRainy = true;
let isSunny = !isRainy;
let isWeather = isRainy || isSunny;
let isRainbow = isRainy && isSunny;
```

### 5)

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

### 6)

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

### 7)

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

### 8)

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
