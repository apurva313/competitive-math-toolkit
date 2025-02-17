// Greatest Common Divisor (GCD)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// Least Common Multiple (LCM)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Modular Exponentiation (Fast Power)
function modExp(base, exp, mod) {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2 === 1) result = (result * base) % mod;
        base = (base * base) % mod;
        exp = Math.floor(exp / 2);
    }
    return result;
}

// Modular Inverse using Extended Euclidean Algorithm
function modInverse(a, mod) {
    let [m0, x0, x1] = [mod, 0, 1];
    if (mod === 1) return 0;
    while (a > 1) {
        let q = Math.floor(a / mod);
        [mod, a] = [a % mod, mod];
        [x0, x1] = [x1 - q * x0, x0];
    }
    return x1 < 0 ? x1 + m0 : x1;
}

// Sieve of Eratosthenes
function sieve(n) {
    let primes = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }
    return primes.map((isPrime, num) => isPrime ? num : null).filter(x => x);
}

// Check if a number is divisible by another number
function isDivisible(num, divisor) {
    return num % divisor === 0 ? "Yes" : "No";
}

// Find all numbers that divide 'n'
function findDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

// Prime Factorization using Sieve (Precompute Smallest Prime Factor)
function primeFactorization(n) {
    let spf = Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) spf[i] = i;
    
    for (let i = 2; i * i <= n; i++) {
        if (spf[i] === i) {
            for (let j = i * i; j <= n; j += i) {
                if (spf[j] === j) spf[j] = i;
            }
        }
    }
    
    let factors = [];
    while (n !== 1) {
        factors.push(spf[n]);
        n /= spf[n];
    }
    return factors;
}

module.exports = { gcd, lcm, modExp, modInverse, sieve, isDivisible, findDivisors, primeFactorization };
