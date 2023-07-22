/*
  Control Structures:

  These examples demonstrate different control structures that allow you to control the flow of your JavaScript program.
*/

/**************************************/
/******** If-else statement ********/
/**************************************/
let age = 18;
if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are not yet an adult.');
}

if (age > 35) {
  // code
} else if (age > 23 && age < 35){
  // code
} else {
  // CODE
}

// TASK
let height = 9000
let weight = 120
let ages =  75

if (height > weight && height > ages){
  // CODE
} else if (true){
  // 
}

console.log(Math.min(height, weight, ages))

/**************************************/
/************** For Loop **************/
/**************************************/
for (let i = 0; i < 5; i++) {
  console.log(i);
  // CODE
}

for (/*initialize*/, /*condition*/ ,/*increment*/){
  
}


/**************************************/
/************* While Loop *************/
/**************************************/
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

/**************************************/
/********   Do... While Loop   ********/
/**************************************/
// Do... While loop:
let counter = 0;

do {
  console.log(counter);
  counter++;
} while (counter < 5);


/**************************************/
/************ For-In Loop *************/
/**************************************/
//  for iterating over object properties:
let person = { name: 'John', age: 30, city: 'New York' };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

/**************************************/
/************ For-Of Loop *************/
/**************************************/
// for iterating over arrays and other iterable objects:
let numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}

/**************************************/
/******     Ternary Operator    *******/
/**************************************/
// conditional shorthand:
let userAge = 18;
let message = (userAge >= 18) ? 'You are an adult.' : 'You are not yet an adult.';
console.log(message);


/**************************************/
/******     Switch Statement    *******/
/**************************************/
let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Today is Monday.');
    break;
  case 'Tuesday':
    console.log('Today is Tuesday.');
    break;
  case 'Wednesday':
    console.log('Today is Wednesday.');
    break;
  default:
    console.log('Today is another day.');
}
