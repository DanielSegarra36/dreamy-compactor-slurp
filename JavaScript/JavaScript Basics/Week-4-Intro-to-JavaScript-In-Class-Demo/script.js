let newVariable = 'askhfbsahj';
console.log(newVariable);

newVariable = "potato";
console.log(newVariable);

newVariable = '23';
console.log(newVariable);

let otherWord = "akfbsanf"

// single line comment

// string interpolation
console.log(`${otherWord} 23`)

// string concatentation
console.log("23" + otherWord);

/*
Multi
line
comment
*/

console.log(otherWord.toUpperCase());


// let user = prompt('Enter Name');

// function that returns a value
function squareMyNumber(x) {
  // code
  // code
  // code
  return x*x;
}

// void function DOES NOT returns a value
function voidFunc() {
  // CODE
  // CODE
  // CODE
  // CODE
  console.log('hello from void');
}

// CALLING UPON FUNCTION
voidFunc();

let squaredValue = squareMyNumber(333);

console.log(squaredValue);

console.log(squareMyNumber(3));

function textClicked() { document.getElementById("text").innerHTML = "<strong>yahaha! you found me!</strong> <em>(can you find where to change this text?)</em>"
}




// Create a list dynamically
let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

form.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();
  
  let newItem = document.getElementById('item').value;

  let li = document.createElement('li');

  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li)
}

