# [ES6+](https://node.green)

## [ES6 (2015)](https://node.green/)

- ### `const`, `let`

```js
const a = 1;
a = 2; // Error, assignment to constant variable

let b = 1;
b = 2; // ok
```

`const` et `let` sont **block-scoped**.

- ### Function default parameters

```js
function (a, b = 0){}
```

- ### arrow functions

- ### Destructuring

- ### Rest, spread syntax for iterables

- ### `for...of` loops

- ### Template literals

- ### `Map`, `Set`, `WeakMap`, `WeakSet`

- ### `Promise`

- ### Classes

- ### Strings

```js
const str = 'La la la lalalala lalalala Hey Jude !';

str.repeat(2); // La la la lalalala lalalala Hey Jude ! La la la lalalala lalalala Hey Jude !
str.startsWith('La'); // true
str.endsWith('!'); // true
```

- ### Arrays

```js
const arr = [1, 2, 3, 4];

Array.from(new Set(arr)); // renvoie une liste à partir d'un iterable

arr.find(e => e === 2); // 2
arr.findIndex(e => e === 2); // 1
arr.fill(0, 2, 4); // [1, 2, 0, 0]
```

- ### Numbers

```js
Number.isNaN(NaN); // true
Number.isNaN(undefined); // false
```

## [ES2016](https://node.green/#ES2016)

- ### Exponentiation operator

```js
2 ** 4; // 16
```

- ### `Array.prototype.includes()`

```js
[1, 2, 3, 4].includes(3); // true
```

## [ES2017](https://node.green/#ES2017)

- ### Objects static methods

```js
const o = { a: 1, b: 2 };

Object.values(o); // [1, 2]
Object.entries(o); // [['a', 1], ['b', 2]]
```

- ### String padding

```js
const s = '1';

s.padStart(5, '0'); // '00001'
s.padEnd(5, '0'); // '10000'
```

- ### Trailing commas

```js
{
  a: 1,
  b: 2,
}

[
  1,
  2,
]

function f(arg1, ){ }
```

- ### `async / await`

```js
async function() {
  const a = await ...; // bloquant
  console.log('Prout');
}
```

## [ES2018](https://node.green/#ES2018)

- ### Object rest, spread operators

```js
const o = { a: 1, b: 2, c: 3, d: 4 };

const { a, b, ...rest } = o;

// a => 1
// a => 2
// rest => {c: 3, d:4}

const o2 = { ...o }; // copie de o
const o3 = { ...o, e: 5 }; // {a:1, b:2, c:3, d:4, e:5}
```

- ### `Promise.finally()`

Passe dans le `finally()` quelque soit le devenir de la promesse.

## [ES2019](https://node.green/#ES2019)

- ### Strings

```js
'    a   '.trimLeft(); // 'a   '
'    a   '.trimRight(); // '    a'
```

- ### `Object.fromEntries()`

```js
Object.fromEntries([['a', 1], ['b', 2]]); // {a:1, b:2}
```

- ### `Array.prototype.flat()`

```js
const l = [[1, 2], [3]];

l.flat(); // [1, 2, 3]
```

## [ES2020](https://node.green/#ES2020)

- ### `Promise.allSettled()`

Récupère les valeurs résolues ET les raisons de rejet des promesses fournies.

```js
Promise.allSettled([p1, p2]).then(res => {
  const [res1, res2] = res;

  console.log(res1); // {status: 'fulfilled', value: 'laValeurPromise'}
  console.log(res2); // {status: 'rejected', value: 'laRaisonDuRejet'}
});
```

## À suivre: [Qualité](./qualite.md)
