// Fonctions flèches

() => 1;
x => 1;
x => 1;
(x, y, z) => 1;
(x, y, z) => x + y + z;
x => {
  console.log('COucou');
  return x * 10;
};
x => ({ a: 1, b: 2 });

// Destructuring

const o = { a: 1, b: 2, c: 3 };
const { a, b, c } = o;
const { a, b: f, c: g } = o;
const { b, ...rest } = o;

const l = [1, 2, 3];
const [a, b, c] = l;
const [a, ...rest] = l;

// Spread

const o = { a: 1, b: 2, c: 3 };
const o2 = { d: 4, ...o };

const l = [1, 2, 3];
const l2 = [...l];

// Template literals
const name = 'romain';
`mon nom est ${name}`;
