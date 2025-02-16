const bitwise = require('competitive-math-toolkit');

console.log(bitwise.and(5, 3));       // Output: 1
console.log(bitwise.or(5, 3));        // Output: 7
console.log(bitwise.xor(5, 3));       // Output: 6
console.log(bitwise.not(5));          // Output: -6
console.log(bitwise.leftShift(5, 1)); // Output: 10
console.log(bitwise.rightShift(5, 1));// Output: 2

console.log(bitwise.countSetBits(9)); // Output: 2 (1001)
console.log(bitwise.isPowerOfTwo(8)); // Output: true
console.log(bitwise.isPowerOfTwo(10));// Output: false

console.log(bitwise.setBit(5, 1));    // Output: 7  (101 → 111)
console.log(bitwise.clearBit(7, 1));  // Output: 5  (111 → 101)
console.log(bitwise.toggleBit(5, 0)); // Output: 4  (101 → 100)
console.log(bitwise.checkBit(5, 2));  // Output: true

console.log(bitwise.decimalToBinary(10));  // Output: "1010"
console.log(bitwise.binaryToDecimal("1010"));// Output: 10
console.log(bitwise.decimalToHex(255));    // Output: "FF"
console.log(bitwise.hexToDecimal("FF"));   // Output: 255
console.log(bitwise.decimalToOctal(64));   // Output: "100"
console.log(bitwise.octalToDecimal("100"));// Output: 64
console.log(bitwise.binaryToHex("1111"));  // Output: "F"
console.log(bitwise.hexToBinary("F"));     // Output: "1111"
