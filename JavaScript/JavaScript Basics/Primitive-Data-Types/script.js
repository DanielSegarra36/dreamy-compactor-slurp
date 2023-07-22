/*
      Primitive Data Types & Built-in Methods:

JavaScript has several primitive data types, such as strings, numbers, booleans, null, and undefined. Here are some examples of how to use them and their built-in methods:
*/

// STRINGS
let greeting = 'Hello, world!';
console.log(greeting.length);  // Output: 13
console.log(greeting.toUpperCase());  // Output: HELLO, WORLD!
console.log(greeting.substring(0, 5));  // Output: Hello

// STRING INTERPOLATION
let name = 'John';
let age = 30;
console.log(`My name is ${name} and I'm ${age} years old.`);
// Output: My name is John and I'm 30 years old.



// NUMBERS
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);  // Output: 15
console.log(num1.toFixed(2));  // Output: 10.00
console.log(Math.sqrt(num1));  // Output: 3.1622776601683795


// BOOLEANS
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse);  // Output: false
console.log(isTrue || isFalse);  // Output: true
console.log(!isFalse);  // Output: true

// NULL
let value = null;
console.log(value);  // Output: null
console.log(typeof value);  // Output: object

// UNDEFINED
let undefinedValue;
console.log(undefinedValue);  // Output: undefined
console.log(typeof undefinedValue);  // Output: undefined
