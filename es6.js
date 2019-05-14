function f () {
  return {
    a: 1
  };
}

// Fonctions flèches
() => console.log('COUCOU');
x => x + 1;
(x, y) => x + y;
(x, y) => {
  console.log('COUCOU');
  return x + y;
}
() => ({
  a: 1
})

// Affectation par décomposition
  // pour les objets
const o = {
  a: 1,
  b: 2,
  c: 3
};

const { a, b, c } = o;
const { a:monA, b, c } = o;
const { a, ...rest } = o;

  // pour les listes
const l = [1, 2, 3];

const [ a, b, c ] = l;
const [ a, ...rest ] = o;

// Spread operator

const copieDeO = { ...o };
const oEtendu = { ...o, d: 4 };

const copieDeL = [ ...l ];
const lEtendu = [ ...l, 4 ];
