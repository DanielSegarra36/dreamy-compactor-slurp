function name(myName, age) {
  // CODE
  console.log(`HEY ${myName} YOURE IN THE NAME FUNCITON and our age is ${age}`)
}

// CODE
// CODE
// CODE
// CODE
// CODE

let myName = "DANIEL"

// Telling function to run now
name(myName, 9000)
name("David", 9000)
name(9000, "Priya")
name("Laura", 9000)

/********************************************************************************/
/********************************************************************************/
/********************************************************************************/

/*
  Functions are typically written to contain a specific
  set of code that we either wish to reuse or run at a later time
  They tend to 'return' the final result of a procedure
*/
async function squareMyNumber(x) {
  // code
  // code
  let TWITTERDATA = await fetch('TWITTER.COM/API')
  console.log(`value of x: ${x}`);
  // code
  // code
  // TWITTER code
  // TWITTER code
  // TWITTER code
  // code
  return x * x;
}
/*
  void function DOES NOT returns a value
  its purpose is just to run a set of code
*/
function voidFunc() {
  // CODE
  // CODE
  // CODE
  // CODE
  console.log('hello from void');
}
// a funciton will only run if CALLED upon
voidFunc();
squareMyNumber(4);
// you can even assignt he returned value to a new variable to use elsewhere
let squaredValue = squareMyNumber(333);
console.log(squaredValue);
// or have the function evaluated as part of an arguement
console.log(squareMyNumber(3));

/********************************************************************************/
/********************************************************************************/
/********************************************************************************/

// Accessing HTML through JS
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

/********************************************************************************/
/********************************************************************************/
/********************************************************************************/

// Responding to user interaction
function textClicked() {
  document.getElementById("text").innerHTML = "<strong>yahaha! you found me!</strong> <em>(can you find where to change this text?)</em>"
}

/*
  Create a list dynamically by adding data entered by user through HTML
*/
// select and listen to form
let form = document.getElementById("addForm");
form.addEventListener('submit', addItem);

// on submit run this function
function addItem(e) {
  e.preventDefault();

  let newItem = document.getElementById('item').value;

  let li = document.createElement('li');

  li.appendChild(document.createTextNode(newItem));

  let itemList = document.getElementById("items");
  itemList.appendChild(li)
}