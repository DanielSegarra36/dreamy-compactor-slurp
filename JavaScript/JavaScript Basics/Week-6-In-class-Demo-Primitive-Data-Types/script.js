// NUMBERS
let myAge = 9000;

// STRINGS
let name = "askfshfvbshfajfad"
name = "Daniel Segarra"
console.log(name)
console.log(name.length)
console.log(name.toUpperCase())

let word = "asfhbsafasjf"
word = "gibbrish"
word = "David"

// STRING INTERPOLATION
console.log(`Hi! My name is ${name} and I am ${myAge} years old!`)

let greeting = `Good morning ${name} and ${word} how can we help you?`

console.log(greeting)

// BOOLEANS
// TRUE or FALSE
let isFalse = false
let isTrue = true;

if (isTrue && isFalse) {
  console.log("both are true!")
}

if (isTrue || isFalse) {
  console.log("one is true!")
}

if (!isTrue) {
  console.log("NOT TRUE")
}

if (!isFalse) {
  console.log("is false")
}

// NULL
let noValue = null;
console.log(noValue)
console.log(typeof noValue)

// UNDEFINED
let undefinedVar;
console.log(undefinedVar)
console.log(typeof undefinedVar)

let combine = myAge + name;
console.log(combine)