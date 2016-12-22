const add = require('../dist/index');

console.assert(add(1, 1) === 2, 'Shoulds be 2');
console.assert(add(1, -1) === 0, 'Shoulds be 0');
console.assert(add(1, 0) === 1, 'Shoulds be 1');

console.assert(add(1, 5, 5) === 11, 'Shoulds be 11');
console.assert(add(1, -5, 5) === 1, 'Shoulds be 1');
