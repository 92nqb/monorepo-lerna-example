const add = require('monorepo-lerna-add');

module.exports = function substract(minuend, subtrahend) {
  return add(minuend, (subtrahend*-1));
}
