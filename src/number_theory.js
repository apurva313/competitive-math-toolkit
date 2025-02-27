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

// Function to check if a number is prime
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// Modular Addition
function modAdd(a, b, m) {
    return (a % m + b % m) % m;
}

// Modular Subtraction
function modSubtract(a, b, m) {
    return ((a % m - b % m) + m) % m;
}

// Modular Multiplication
function modMultiply(a, b, m) {
    return (a % m * b % m) % m;
}

// Modular Inverse using Extended Euclidean Algorithm
function modInverse(b, m) {
    let [m0, x0, x1] = [m, 0, 1];
    if (m === 1) return 0;
    while (b > 1) {
        let q = Math.floor(b / m);
        [m, b] = [b % m, m];
        [x0, x1] = [x1 - q * x0, x0];
    }
    return x1 < 0 ? x1 + m0 : x1;
}

// Modular Division
function modDivide(a, b, m) {
    let inv = modInverse(b, m);
    if (inv === -1) throw new Error("Modular inverse does not exist");
    return modMultiply(a, inv, m);
}

// N-th Root using Binary Search
function nthRoot(n, a) {
    if (a === 0 || a === 1) return a;
    let low = 1, high = a, ans = 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midPow = Math.pow(mid, n);
        if (midPow === a) return mid;
        if (midPow < a) {
            low = mid + 1;
            ans = mid;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

// Check if a Number is a Perfect Square
function isPerfectSquare(n) {
    let sqrtN = Math.floor(Math.sqrt(n));
    return sqrtN * sqrtN === n;
}

// Check if a Number is a Perfect Cube
function isPerfectCube(n) {
    let cubeRoot = Math.round(Math.cbrt(n));
    return cubeRoot * cubeRoot * cubeRoot === n;
}

// Binary Exponentiation for Fast Modular Exponentiation
function binaryExponentiation(base, exp, m) {
    let result = 1;
    base = base % m;
    while (exp > 0) {
        if (exp % 2 === 1) result = (result * base) % m;
        base = (base * base) % m;
        exp = Math.floor(exp / 2);
    }
    return result;
}


// Check if Two Numbers are Coprime (GCD = 1)
function isCoprime(a, b) {
    function gcd(x, y) {
        return y === 0 ? x : gcd(y, x % y);
    }
    return gcd(a, b) === 1;
}

// Sum of Divisors of a Number
function sumOfDivisors(n) {
    let sum = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) sum += n / i;
        }
    }
    return sum;
}

// Count Primes up to N using Sieve of Eratosthenes
function countPrimes(n) {
    if (n < 2) return 0;
    let primes = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }
    return primes.filter(isPrime => isPrime).length;
}


module.exports = {
    gcd,
    lcm,
    modExp,
    modInverse,
    sieve,
    isDivisible,
    findDivisors,
    primeFactorization,
    isPrime,
    modAdd,
    modSubtract,
    modMultiply,
    modInverse,
    modDivide,
    nthRoot,
    isPerfectSquare,
    isPerfectCube,
    binaryExponentiation,
    isCoprime,
    sumOfDivisors,
    countPrimes
};
