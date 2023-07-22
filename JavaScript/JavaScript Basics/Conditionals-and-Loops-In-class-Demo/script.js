let word = "hello"

console.log(word)


let val = '2345345252'
let secondVal = 2

let loggedIn = false;


if (6 === val) {
  console.log('TRUE')
} else {
  console.log('FALSE')
}


/***********************************/
let age = 19

let height = 64

if (age > 21 && height > 24) {
  console.log("YOU HAVE ACCESS> DRINK")
} else if (age < 21) {
  console.log('AGE')
} else if (height < 24) {
  console.log('GROW')
} else {
  console.log('INVALID INPUT')
}

function getInput() {
  let co2Level = document.querySelector('#CO2').value;

  console.log(`BUTTON CLICKED ${co2Level}`)


  if (co2Level === 21) {
    // RELEASE MORE X
    prompt('WE GOTTA DO SOMETHING')
  } else {
    // OTHER CODE
  }
}


// NOT USEFUL VARIABLE NAMES
// DONT USE THIS
// let x = 'SUPER IMPORTANT DATA';
let y = 123421412;
let y2 = 2134142341;
let nnnnn = 'jjj';



// ARRAYS
// IS A DATA STRUCTURE
let mushroom = ['oyster', 'trumpet', 'lions mane']

// FIRST ITEM IN AN ARRAY IS THE 0th ITEM
console.log("FIRST ITEM: " + mushroom[0])


mushroom = ['oyster', 'trumpet', 'lions mane', 'newITERM']

mushroom.push('mushroom2')

// console.log("NEW MUSHROOM: " + mushroom)


// LOOPING

function introduce(variable) {
  // CODE
  // CODE
  // console.log("Hello " + variable)
}

let colors = ['blue', 'yellow', 'red']

// LOOP WITH forEach()
colors.forEach(introduce);

// LOOP WITH FOR LOOP
// for(initial; conditional; increment)
for (let counter = 0; counter < colors.length; counter++) {
  // CODE
  console.log("VALUE:" + colors[counter]);
}

// INCREMENTING
// let x = 2
// console.log(++x)

let shoeSizes = [10, 9, 5]

// LOOP WITH FOR...IN for (let item in array)
for (let shoeSize in shoeSizes) {
  // CODE
  console.log(shoeSizes[shoeSize]);
}

// OBJECT
let student = {
  key: 'value',
  key2: 'value',
  key3: 4,
  fruits: ['apple', 'banana'],
  smartDevices: [
    { tv: 'vizio' }, // 0
    { co2: '22', home: 'landline' }, // 1
    { toilet: 'iPoop' }, // 2
  ]
}

console.log(student)
console.log(student.smartDevices)
console.log(student.smartDevices[0])
console.log(student.smartDevices[1].mobile)
console.log(student.smartDevices[1].home)

for (let item in student) {
  console.log(student[item]);
}

