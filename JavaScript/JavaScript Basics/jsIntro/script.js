// comment mfaskjfnkasmfmsaklf


console.log("hello");

// VARIABLES

let variableName = "string can be any word";

const cantChangeMe = "lol";
// CANNOT REASSIGN TO A CONSTANT VARIABLE
// cantChangeMe = 22

variableName = 22;

console.log( "variableName is now: " + variableName);

console.log(cantChangeMe);


// NUMBERS
let num = 33;

num = num - num;

console.log("num:" + num)


console.log("num times two: " + num * 2);


// STRINGS

let funVar = "ddddd";

let wordLength = funVar.length;

console.log(wordLength);

console.log(typeof funVar);

// ARRAYS
let dogNames = ["woof", "clifford", "spot", "snoopy", "crystal"];

let catNames = ["garfield", "clifford", "gray cat", "deli cat"];

console.log("My potential dog names:" + dogNames.length);



let allNames = dogNames.concat(catNames);

console.log(allNames);

// OBJECTS

let myFirstObject = {
  name: "Daniel",
  job: "teacher",
  key: "value",
  classes: {
    english: 101.1,
    csci: 101.1,
    spanish: 101.1,
    science: 101.1,
    math: 101.1
  }
}

console.log(myFirstObject);


// Functions

function myFunc(word1) {
  console.log("hi hih hihi h " + word1);
}

myFunc("Daniel");

function addValues(val1, val2) {
  return val1 + val2;
}

let newValue = addValues(60, 34)

console.log(newValue)

document.body.style.backgroundColor = "blue";

