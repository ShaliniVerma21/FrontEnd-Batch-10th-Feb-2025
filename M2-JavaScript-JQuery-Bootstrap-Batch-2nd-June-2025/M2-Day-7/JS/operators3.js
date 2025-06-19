//Bitwise Operators

/*
Get Binary Number -

-------512, 256, 128, 64, 32, 16, 8, 4, 2,1

Binary of 5 is - 0101
Binary of 3 is - 0011

Common Bitwise Operators in MySQL
AND (&): Compares each bit of two numbers and returns a new number with bits set to 1 only where both bits are 1.
OR (|): Compares each bit of two numbers and returns a new number with bits set to 1 where at least one of the bits
is 1.
XOR (^): Compares each bit of two numbers and returns a new number with bits set to 1 where the bits are different.
NOT (~): Inverts the bits of a number.
Left Shift (<<): Shifts the bits of a number to the left by a specified number of positions.
Right Shift (>>): Shifts the bits of a number to the right by a specified number of positions.

Bitwise operators can be useful in various scenarios, such as:

1. Flags and Permissions: Using bitwise operations to manage user permissions or feature flags.
2. Data Compression: Storing multiple boolean values in a single integer.
3. Efficient Calculations: Performing low-level data manipulation or optimizations.

Let's say we have a table called users that stores user permissions as a bitmask.
Each permission corresponds to a specific bit in an integer:

1 (0001) - Read permission
2 (0010) - Write permission
4 (0100) - Execute permission
8 (1000) - Delete permission
*/

let a = 5;   // 00000101
let b = 3;   // 00000011
let result = a & b;  // 00000001
console.log(result); // 1

let result1 = a | b;  // 00000111
console.log(result1); // 7

let result2 = a ^ b;  // 00000110
console.log(result2); // 6

let result3 = ~a;  // 11111010
console.log(result3); // -6

let a1 = 5;   // 00000101
let result4 = a1 << 1;  // 00001010
console.log(result4); // 10

let a2 = 10;  // 00001010
let result5 = a2 >> 1;  // 00000101
console.log(result5); // 5

let num = 10;
let isEven = (num & 1) === 0;
console.log(isEven); // true
