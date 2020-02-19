console.log('--- Question 1 ---');
// Résoudre les erreurs Typescript pour calculer 3 au lieu de '12'
function somme(a, b) {
    return a + b;
}
console.log('Somme', somme(1, 2));
console.log('--- Question 2 ---');
var romain = {
    name: 'Romain',
    age: 34
};
function logPerson(person) {
    console.log('Name:', person.name);
    console.log('Is adult:', person.age > 18);
}
logPerson(romain);
console.log('--- Question 3 ---');
// Utiliser l'interface Person pour corriger les erreurs TS
var persons = [
    romain,
    { name: 'Michel', age: 65 },
    { name: 'Jean-Claude', age: 65 },
];
function getAllAges(persons) {
    var ages = persons.map(function (p) {
        return p.age;
    });
    return ages;
}
console.log('Ages', getAllAges(persons));
