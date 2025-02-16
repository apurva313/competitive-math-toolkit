/**
 * Bitwise Operations and Conversions Module
 * Provides utilities for various bitwise operations and number conversions.
 */

const BitwiseOperations = {
    // Basic Bitwise Operations
    and: (a, b) => a & b,
    or: (a, b) => a | b,
    xor: (a, b) => a ^ b,
    not: (a) => ~a,
    leftShift: (a, positions) => a << positions,
    rightShift: (a, positions) => a >> positions,
  
    // Bit Manipulation
    countSetBits: (a) => {
      let count = 0;
      while (a > 0) {
        count += a & 1;
        a >>= 1;
      }
      return count;
    },
  
    isPowerOfTwo: (a) => (a > 0) && ((a & (a - 1)) === 0),
  
    setBit: (num, position) => num | (1 << position),       // Set the nth bit to 1
    clearBit: (num, position) => num & ~(1 << position),    // Clear the nth bit (set to 0)
    toggleBit: (num, position) => num ^ (1 << position),    // Toggle the nth bit
    checkBit: (num, position) => (num & (1 << position)) !== 0, // Check if nth bit is set
  
    // 🟢 Bitwise Conversions
    decimalToBinary: (num) => num.toString(2),       // Convert Decimal to Binary
    binaryToDecimal: (bin) => parseInt(bin, 2),      // Convert Binary to Decimal
    decimalToHex: (num) => num.toString(16).toUpperCase(),  // Convert Decimal to Hex
    hexToDecimal: (hex) => parseInt(hex, 16),        // Convert Hexadecimal to Decimal
    decimalToOctal: (num) => num.toString(8),        // Convert Decimal to Octal
    octalToDecimal: (oct) => parseInt(oct, 8),       // Convert Octal to Decimal
    binaryToHex: (bin) => parseInt(bin, 2).toString(16).toUpperCase(),  // Convert Binary to Hex
    hexToBinary: (hex) => parseInt(hex, 16).toString(2)  // Convert Hexadecimal to Binary
  };
  
  module.exports = BitwiseOperations;
  