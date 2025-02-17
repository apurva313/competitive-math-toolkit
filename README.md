# **Competitive Math Toolkit** 🚀

_A high-performance math library optimized for competitive programming._

![npm](https://img.shields.io/npm/v/competitive-math-toolkit)  
![license](https://img.shields.io/github/license/apurva313/competitive-math-toolkit)  
![stars](https://img.shields.io/github/stars/apurva313/competitive-math-toolkit?style=social)

## **📌 Features**

✔️ Number Theory: GCD, LCM, Modular Exponentiation, Modular Inverse, Prime Sieve, Chinese Remainder Theorem  
✔️ Combinatorics: Factorial, nCr (Combinations), Catalan Numbers  
✔️ Matrix Exponentiation: Fast Fibonacci, Solving Recurrence Relations  
✔️ Graph Math: Eulerian Path Detection  
✔️ Optimized for **O(log n) and O(1)** operations wherever possible

---

## **📦 Installation**

```sh
npm install competitive-math-toolkit
```

---

## **🔰 Usage**

### **1️⃣ Number Theory**

```js
const mathToolkit = require("competitive-math-toolkit");

console.log(mathToolkit.gcd(36, 60)); // Output: 12
console.log(mathToolkit.lcm(12, 15)); // Output: 60
console.log(mathToolkit.modExp(2, 10, 1000000007)); // Output: 1024
console.log(mathToolkit.sieve(50)); // Output: [2, 3, 5, 7, 11, 13, ...]
console.log(mathToolkit.isDivisible(10, 5)); // Output: "Yes"
console.log(mathToolkit.findDivisors(10)); // Output: [1, 2, 5, 10]
console.log(mathToolkit.primeFactorization(60)); // Output: [2, 2, 3, 5]
console.log(mathToolkit.isPrime(13)); // Output: true
```

---

### **2️⃣ Combinatorics**

```js
console.log(mathToolkit.factorial(5)); // Output: 120
console.log(mathToolkit.nCr(5, 2)); // Output: 10
```

---

### **3️⃣ Matrix Exponentiation**

```js
console.log(mathToolkit.nthFibonacci(10)); // Output: 55
```

---

### **4️⃣ Graph Math**

```js
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"],
};
console.log(mathToolkit.countEulerianPaths(graph)); // Output: true
```

---

### **5️⃣ Chinese Remainder Theorem**

```js
const num = [3, 5, 7];
const rem = [2, 3, 2];

console.log(mathToolkit.chineseRemainderTheorem(num, rem)); // Output: 23
```

---

### **6️⃣ Bitwise Operations**

Efficient bitwise operations and conversions.

```js
const mathToolkit = require("competitive-math-toolkit");

console.log(mathToolkit.and(5, 3)); // Output: 1
console.log(mathToolkit.or(5, 3)); // Output: 7
console.log(mathToolkit.xor(5, 3)); // Output: 6
console.log(mathToolkit.not(5)); // Output: -6
console.log(mathToolkit.leftShift(5, 1)); // Output: 10
console.log(mathToolkit.rightShift(5, 1)); // Output: 2

console.log(mathToolkit.countSetBits(9)); // Output: 2
console.log(mathToolkit.isPowerOfTwo(8)); // Output: true

// Bitwise Manipulation
console.log(mathToolkit.setBit(5, 1)); // Output: 7
console.log(mathToolkit.clearBit(7, 1)); // Output: 5
console.log(mathToolkit.toggleBit(5, 0)); // Output: 4
console.log(mathToolkit.checkBit(5, 2)); // Output: true

// Conversions
console.log(mathToolkit.decimalToBinary(10)); // Output: "1010"
console.log(mathToolkit.binaryToDecimal("1010")); // Output: 10
console.log(mathToolkit.decimalToHex(255)); // Output: "FF"
console.log(mathToolkit.hexToDecimal("FF")); // Output: 255
console.log(mathToolkit.decimalToOctal(64)); // Output: "100"
console.log(mathToolkit.octalToDecimal("100")); // Output: 64
console.log(mathToolkit.binaryToHex("1111")); // Output: "F"
console.log(mathToolkit.hexToBinary("F")); // Output: "1111"
```

---

## **📜 API Reference**

| Function                            | Description                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------- |
| `gcd(a, b)`                         | Returns the Greatest Common Divisor (GCD) of two numbers                        |
| `lcm(a, b)`                         | Returns the Least Common Multiple (LCM) of two numbers                          |
| `modExp(base, exp, mod)`            | Fast exponentiation (base^exp % mod)                                            |
| `modInverse(a, mod)`                | Finds modular inverse using Extended Euclidean Algorithm                        |
| `sieve(n)`                          | Returns all prime numbers up to `n` using Sieve of Eratosthenes                 |
| `isDivisible(number, divisor)`      | Checks if `number` is divisible by `divisor`. Returns `"Yes"` or `"No"`.        |
| `findDivisors(number)`              | Returns an array of all divisors of `number`.                                   |
| `primeFactorization(number)`        | Returns an array of prime factors of `number`.                                  |
| `isPrime(number)`                   | Checks if `number` is prime. Returns `true` or `false`.                         |
| `factorial(n, mod)`                 | Returns factorial of `n` modulo `mod`                                           |
| `nCr(n, r, mod)`                    | Returns nCr (binomial coefficient) modulo `mod`                                 |
| `nthFibonacci(n, mod)`              | Returns nth Fibonacci number using Matrix Exponentiation                        |
| `countEulerianPaths(graph)`         | Checks if a given graph has an Eulerian path                                    |
| `chineseRemainderTheorem(num, rem)` | Solves a system of simultaneous congruences using the Chinese Remainder Theorem |
| `and(a, b)`                         | Computes the bitwise AND of two numbers                                         |
| `or(a, b)`                          | Computes the bitwise OR of two numbers                                          |
| `xor(a, b)`                         | Computes the bitwise XOR of two numbers                                         |
| `not(a)`                            | Computes the bitwise NOT (1's complement) of a number                           |
| `leftShift(a, n)`                   | Shifts bits of `a` to the left by `n` positions                                 |
| `rightShift(a, n)`                  | Shifts bits of `a` to the right by `n` positions (signed shift)                 |
| `countSetBits(num)`                 | Counts the number of 1s in the binary representation of a number                |
| `isPowerOfTwo(num)`                 | Checks if a number is a power of two                                            |
| `setBit(num, pos)`                  | Sets the bit at position `pos` in `num` to 1                                    |
| `clearBit(num, pos)`                | Clears the bit at position `pos` in `num` (sets to 0)                           |
| `toggleBit(num, pos)`               | Toggles the bit at position `pos` in `num`                                      |
| `checkBit(num, pos)`                | Checks if the bit at position `pos` is 1                                        |
| `decimalToBinary(num)`              | Converts a decimal number to binary (as a string)                               |
| `binaryToDecimal(str)`              | Converts a binary string to decimal                                             |
| `decimalToHex(num)`                 | Converts a decimal number to hexadecimal (as a string)                          |
| `hexToDecimal(str)`                 | Converts a hexadecimal string to decimal                                        |
| `decimalToOctal(num)`               | Converts a decimal number to octal (as a string)                                |
| `octalToDecimal(str)`               | Converts an octal string to decimal                                             |
| `binaryToHex(str)`                  | Converts a binary string to hexadecimal                                         |
| `hexToBinary(str)`                  | Converts a hexadecimal string to binary                                         |

---

## **⚡ Performance**

- Most operations are **O(log N)** for efficiency.
- **Matrix exponentiation** speeds up Fibonacci and recurrence relations.
- Uses **modular arithmetic** for safe computation.

---

## **🛠️ Running Tests**

You can run unit tests using:

```sh
npm test
```

---

## **📝 License**

This project is licensed under the **MIT License**.

---

## **🌟 Contributing**

Feel free to **contribute**, **report issues**, or **request new features**!

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-new-feature`
3. Commit changes: `git commit -m "Added a new feature"`
4. Push and submit a PR!

---

## **🚀 Future Enhancements**

- ✅ Add **big integer support**
- ✅ Implement **fast polynomial calculations**
- ✅ Provide **TypeScript support**

---

## **👨‍💻 Author**

Developed by **Apurva Kumar** 🚀  
[GitHub](https://github.com/apurva313) | [LinkedIn](https://linkedin.com/in/apurva313)
