const substract = require('./index');

console.assert(substract(1, 1) === 0, 'Shoulds be 0');
console.assert(substract(1, -1) === 2, 'Shoulds be 2');

console.assert(substract(100, 11) === 89, 'Shoulds be 89');
console.assert(substract(-1, 1) === -2, 'Shoulds be -2');
