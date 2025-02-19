const { modInverse } = require('./number_theory');
function factorial(n, mod = 1e9 + 7) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact = (fact * i) % mod;
    }
    return fact;
}

function nCr(n, r, mod = 1e9 + 7) {
    if (r > n) return 0;
    return (factorial(n, mod) * modInverse(factorial(r, mod), mod) * modInverse(factorial(n - r, mod), mod)) % mod;
}

function nPr(n, r) {
    if (n < r) return 0;
    return factorial(n) / factorial(n - r);
}

module.exports = { factorial, nCr, nPr };
