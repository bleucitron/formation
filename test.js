function q() {
  return 1;
}

() => 1;

// -------

function q(x) {
  return x + 1;
}

x => x + 1;

// -------

function q(x, y) {
  return x + y;
}

(x, y) => x + y;

// -------

function q(x) {
  console.log('COUCOU');

  return x + 1;
}

x => {
  console.log('COUCOU');

  return x + 1;
}

// -------

function q(x) {
  return { a: x, b: 1 };
}

x => {a:x, b:1}
