console.log('--- Question 1 ---');
// Résoudre les erreurs Typescript pour calculer 3 au lieu de '12'

function somme(a: number, b: number): number {
  return a + b;
}

console.log('Somme', somme(1, 2));

console.log('--- Question 2 ---');
// Écrire l'interface Person

interface Person {
  name: string;
  age: number;
}

const romain: Person = {
  name: 'Romain',
  age: 34,
};

function logPerson(person: Person): void {
  console.log('Name:', person.name);
  console.log('Is adult:', person.age > 18);
}

logPerson(romain);

console.log('--- Question 3 ---');
// Utiliser l'interface Person pour corriger les erreurs TS

const persons = [
  romain,
  { name: 'Michel', age: 65 },
  { name: 'Jean-Claude', age: 65 },
];

function getAllAges(persons: Person[]): number[] {
  const ages: number[] = persons.map(function(p) {
    return p.age;
  });

  return ages;
}

console.log('Ages', getAllAges(persons));
