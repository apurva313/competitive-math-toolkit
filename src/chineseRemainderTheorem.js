/**
 * Chinese Remainder Theorem (CRT)
 * Solves a system of congruences using CRT.
 * 
 * Given a set of equations:
 *   x ≡ rem[i] (mod num[i]) for all i,
 * it finds the smallest non-negative x that satisfies all equations.
 *
 * @param {number[]} num - Array of pairwise coprime divisors (moduli).
 * @param {number[]} rem - Array of corresponding remainders.
 * @returns {number | null} The smallest x satisfying all congruences, or null if no solution exists.
 */
function chineseRemainderTheorem(num, rem) {
    if (num.length !== rem.length) {
        throw new Error("Number of moduli and remainders must be the same.");
    }

    let product = num.reduce((acc, val) => acc * val, 1); // Compute the product of all moduli
    let result = 0;

    for (let i = 0; i < num.length; i++) {
        let pp = product / num[i]; // Compute partial product
        let inv = modularInverse(pp, num[i]); // Compute modular inverse
        if (inv === null) return null; // If modular inverse doesn't exist, return null

        result += rem[i] * inv * pp;
    }

    return ((result % product) + product) % product; // Ensure non-negative result
}

/**
 * Computes the Modular Inverse using the Extended Euclidean Algorithm.
 *
 * @param {number} a - Number to find modular inverse for.
 * @param {number} m - Modulo value (must be coprime with a).
 * @returns {number | null} The modular inverse of a under modulo m, or null if it doesn't exist.
 */
function modularInverse(a, m) {
    let [m0, x0, x1] = [m, 0, 1];

    while (a > 1) {
        let q = Math.floor(a / m);
        [m, a] = [a % m, m];
        [x0, x1] = [x1 - q * x0, x0];
    }

    return x1 < 0 ? x1 + m0 : x1; // Ensure positive result
}

// Export the function to be used in the package
module.exports = { chineseRemainderTheorem };
