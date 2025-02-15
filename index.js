const numberTheory = require('./src/number_theory');
const combinatorics = require('./src/combinatorics');
const matrixMath = require('./src/matrix_math');
const fibonacci = require('./src/fibonacci');
const graphMath = require('./src/graph_math');

module.exports = {
    ...numberTheory,
    ...combinatorics,
    ...matrixMath,
    ...fibonacci,
    ...graphMath
};
