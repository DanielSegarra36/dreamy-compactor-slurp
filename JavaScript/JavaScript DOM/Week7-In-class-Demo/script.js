// defining an array
let cars = ["honda", "bmw", "ford"]
console.log(cars)
// this will fail, no value at index 3
console.log(cars[3])

console.log(cars[0])
console.log(cars[2])

cars[1] = "NOT A CAR"
console.log(cars)

let pitbull = "Shaggy"

// OBJECTS
let dog = {
  // assign with primitive data type
  breed:"corgie",
  // assign with variable value
  name:pitbull,
  // fur
  fur: true,
  furType: "long hair"
}

// printing one value
console.log(dog["name"])
console.log(dog.furType)


// for... in loop
const pets = {
  cat: "JT",
  dog: "joah hill",
  cow: "moo"
}

for (let currentItem in pets){
  // key
  console.log(currentItem)
  // value
  console.log(pets[currentItem])
}

// DOM
// document.body.bgColor = "red"

// access a part of the html
// assign part of html to a variable
let element = document.getElementById("changeMe")

console.log(element)
element.textContent = "hacked"

// change the last element

let inClassChange = document.querySelector("#inClassChange")
inClassChange.textContent = "asjfsafsajglaga"

function clickFunction(){
  console.log("HEY WE RAN")
  document.querySelector("#x").textContent = "ow that hurt"
}

