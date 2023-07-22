/**************************************/
/**************  Arrays  **************/
/**************************************/
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.length);  // Output: 5
console.log(numbers[2]);  // Output: 3
numbers.push(6);
console.log(numbers);  // Output: [1, 2, 3, 4, 5, 6]

let slicedNumbers = numbers.slice(2, 4);
console.log(slicedNumbers);  // Output: [3, 4]

let filteredNumbers = numbers.filter(num => num > 3);
console.log(filteredNumbers);  // Output: [4, 5, 6]

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  // Output: 21


// Array Destructuring:
let destructuredNumbers = [1, 2, 3, 4, 5, 6,7,8,9,10];

let [first, second, ...rest] = destructuredNumbers;
console.log(first);  // Output: 1
console.log(second);  // Output: 2
console.log(rest);  // Output: [3, 4, 5]

// Array for... in
let shoeSizes = [10, 9, 5]
for (let currentShoe in shoeSizes) {
  // CODE
  console.log(shoeSizes[currentShoe]);
}

// Array.forEach():
let forEachNumbers = [1, 2, 3, 4, 5];

forEachNumbers.forEach((number) => {
  console.log(number);
});

// Array.map():
let mapNumbers = [1, 2, 3, 4, 5];

let squaredNumbers = mapNumbers.map((number) => {
  return number * number;
});

console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]

// Array.filter():
let filterNumbers = [1, 2, 3, 4, 5];

let evenNumbers = filterNumbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);  // Output: [2, 4]

// Array.reduce():
let reduceNumbers = [1, 2, 3, 4, 5];

let reducedSum = reduceNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(reducedSum);  // Output: 15


// Searching
let nums = [1, 2, 3, 4, 5];

console.log(nums.includes(3));  // Output: true
console.log(nums.includes(6));  // Output: false

// Sorting
let sortNumbers = [5, 2, 8, 1, 4];

sortNumbers.sort((a, b) => {
  return a - b;
});

console.log(sortNumbers);  // Output: [1, 2, 4, 5, 8]

// Combining
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let mergedNumbers = numbers1.concat(numbers2);

console.log(mergedNumbers);  // Output: [1, 2, 3, 4, 5, 6]



/**************************************/
/**************  Queue  **************/
/**************************************/
let queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.shift());  // Output: 1
console.log(queue.shift());  // Output: 2
console.log(queue.shift());  // Output: 3


/**************************************/
/**************  Stack  **************/
/**************************************/
let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());  // Output: 3
console.log(stack.pop());  // Output: 2
console.log(stack.pop());  // Output: 1


/**************************************/
/**************   Maps   **************/
/**************************************/
let map = new Map();
map.set('name', 'John');
map.set('age', 30);

console.log(map.size);  // Output: 2
console.log(map.get('name'));  // Output: John

map.delete('age');
console.log(map.size);  // Output: 1

map.forEach((value, key) => console.log(`${key}: ${value}`));  // Output: name: John


/**************************************/
/*************   Objects   *************/
/**************************************/
let person = {
  name: 'John',
  age: 30,
  address: '123 Main St',
};

console.log(person.name);  // Output: John
console.log(person.age);  // Output: 30
person.job = 'Developer';
console.log(person);  // Output: { name: 'John', age: 30, address: '123 Main St', job: 'Developer' }

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


/**************************************/
/*************   Classes   *************/
/**************************************/
class Dog {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }

  bark() {
    console.log('Woof! Woof!');
  }

  describe() {
    console.log(`My name is ${this.name}. I'm a ${this.breed} and I'm ${this.age} years old.`);
  }
}

// Creating instances of the Dog class
let dog1 = new Dog('Max', 'Labrador Retriever', 3);
let dog2 = new Dog('Bella', 'Golden Retriever', 5);

// Accessing properties and calling methods
console.log(dog1.name);  // Output: Max
console.log(dog2.breed);  // Output: Golden Retriever

dog1.bark();  // Output: Woof! Woof!
dog2.describe();  // Output: My name is Bella. I'm a Golden Retriever and I'm 5 years old.
