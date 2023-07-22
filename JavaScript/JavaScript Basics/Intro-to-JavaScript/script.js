// HEY this is JAVASCRIPT
// and you're watching Disney Channel
// jk but this is how you can write comments in JS

// CONSOLE
console.log("hello");

// VARIABLES
// LET vs CONST
// Variables created with LET can be changed within code
// we can create a variable and not give it a value
let initializedVariable;
let variableThatCanChange = 24;
variableThatCanChange = "a sentence or whatever you want...";

// Variables created with CONST cannot be changed within code
const CANT_CHANGE_WONT_CHANGE = 100;

// error
// CANT_CHANGE_WONT_CHANGE = 23;

// DATA TYPES
// NUMBERS
const x = 24;
const y = 24.563;

// STRINGS
// strings are just a series of characters
const name = "Daniel";
// old way (concatenation)
let sentence = name + " is the best";
// new way (string interpolation)
let secondSentence = `${name}2.0 is even better`;

console.log(sentence.length);
console.log(sentence.toUpperCase());
console.log(sentence.substring(0, 6).toUpperCase());

const sandwichOrder =
  "chicken cutlet, hero, lettuce tomatoes, mayonnaise, three-pepper colby jack cheese";

console.log(sandwichOrder.split(", "));

// BOOLEANS
const isBored = true;

// NULL
const ourEmptyVariable = null;

// Arrays
const arr = [1, 12];
const arr2 = [1, "12"];
console.log(arr2);

// OBJECTS
const cat = {
  name: "Arya",
  type: "cool",
};
const person = {
  firstName: "Daniel",
  lastName: "Daniel",
  age: 9001,
  interests: ["food", "ice cream", cat],
  address: {
    street: "42 Wallaby Way St.",
    state: "Sydney",
    country: "AU",
  },
};

// accessing properties
console.log(person);
console.log(person.interests[2].name);

// extracting properties
const {
  firstName,
  age,
  address: { street },
} = person;
console.log(`${firstName} lives on ${street}`);

// adding to object
person.email = "danielsegarr36@gmail.com";

let employees = [
  {
    name: "Daniel",
    role: "Instructor",
    age: 10,
    salary: "Lunch and Dinner",
  },
  {
    name: "Daniel 2.0",
    role: "Astronaut",
    age: 32,
    salary: "Lunch, Dinner, and Dessert",
  },
];

// LOOPS
for (let index = 0; index < employees.length; index++) {
  const currentItem = employees[index];
  // if (currentItem.age === 32) {
  console.log(currentItem);
  // }
}

// Conditionals

let a = 10;
let b = "10";

// will check values
if (a == b) {
  console.log("x == y");
}

// will check data types AND values
if (a === b) {
  console.log("x === y");
}

if (a != b) {
  console.log("x !== y");
}
if (a !== b) {
  console.log("x != y");
}

const first = 13,
  second = 24;

if (first < second) {
  console.log("first is larger than second");
} else if (first === second) {
  console.log("both are equal");
} else {
  console.log("not much of a third option");
}

// which one of these would get the establishment in trouble?
person.wallet = 32;
// person.age = 16;

if (person.age > 18 && person.wallet > 200) {
  console.log("allow in club (and condition)");
}
if (person.age > 18 || person.wallet > 200) {
  console.log("allow in club (or condition)");
}

function myFirstFunction() {
  console.log("first function");
}

function addNums(value1, value2) {
  return value1 + value2;
}

addNums2 = (value1, value2) => value1 + value2;
addFive = (value1) => value1 + 5;

function addNumsLong(value1, value2) {
  console.log("extra step");
  return value1 + value2;
}
addNumsLong2 = (value1, value2) => {
  console.log("extra step");
  return value1 + value2;
};

// Classes
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

let daniel = new Person("Daniel", "Segarra", 9001);