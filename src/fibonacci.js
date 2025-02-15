const { matrixExpo } = require("./matrix_math");

function nthFibonacci(n, mod = 1e9 + 7) {
    if (n === 0) return 0;
    let F = [[1, 1], [1, 0]];
    return matrixExpo(F, n - 1, mod)[0][0];
}

module.exports = { nthFibonacci };
