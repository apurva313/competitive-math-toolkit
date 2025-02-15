# **Competitive Math Toolkit** 🚀  
*A high-performance math library optimized for competitive programming.*

![npm](https://img.shields.io/npm/v/competitive-math-toolkit)  
![license](https://img.shields.io/github/license/apurva313/competitive-math-toolkit)  
![stars](https://img.shields.io/github/stars/apurva313/competitive-math-toolkit?style=social)  

## **📌 Features**
✔️ Number Theory: GCD, LCM, Modular Exponentiation, Modular Inverse, Prime Sieve  
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
const mathToolkit = require('competitive-math-toolkit');

console.log(mathToolkit.gcd(36, 60)); // Output: 12
console.log(mathToolkit.lcm(12, 15)); // Output: 60
console.log(mathToolkit.modExp(2, 10, 1000000007)); // Output: 1024
console.log(mathToolkit.sieve(50)); // Output: [2, 3, 5, 7, 11, 13, ...]
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
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
};
console.log(mathToolkit.countEulerianPaths(graph)); // Output: true
```

---

## **📜 API Reference**
| Function | Description |
|----------|-------------|
| `gcd(a, b)` | Returns the Greatest Common Divisor (GCD) of two numbers |
| `lcm(a, b)` | Returns the Least Common Multiple (LCM) of two numbers |
| `modExp(base, exp, mod)` | Fast exponentiation (base^exp % mod) |
| `modInverse(a, mod)` | Finds modular inverse using Extended Euclidean Algorithm |
| `sieve(n)` | Returns all prime numbers up to `n` using Sieve of Eratosthenes |
| `factorial(n, mod)` | Returns factorial of `n` modulo `mod` |
| `nCr(n, r, mod)` | Returns nCr (binomial coefficient) modulo `mod` |
| `nthFibonacci(n, mod)` | Returns nth Fibonacci number using Matrix Exponentiation |
| `countEulerianPaths(graph)` | Checks if a given graph has an Eulerian path |

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
