// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if there are any matching numbers between the user's numbers and the generated numbers
function checkWin(userNumbers, generatedNumbers) {
  for (let i = 0; i < userNumbers.length; i++) {
    if (generatedNumbers.includes(userNumbers[i])) {
      return true;
    }
  }
  return false;
}

// Function to play the Win 4 game
function playWin4Game() {
  // Prompt the user for their name, age, and numbers
  const name = prompt("Hello! And welcome to the Win 4 Lotto! What is your name?");
  const age = prompt("What is your age?");
  const userNumbers = prompt("Enter 4 numbers - between 0 and 99, separated by commas (e.g., 1, 2, 3, 4):")
    .split(",")
    .map((num) => parseInt(num.trim()));

  // Generate four random numbers
  const generatedNumbers = [];
  for (let i = 0; i < 4; i++) {
    generatedNumbers.push(generateRandomNumber(0, 99));
  }

  // Greet the user
  console.log(`Hello, ${name}! You are ${age} years old.`);

  // Check if the user has won
  const hasWon = checkWin(userNumbers, generatedNumbers);

  // Announce the result
  if (hasWon) {
    console.log("Congratulations! You have matching numbers and won the game!");
  } else {
    console.log("Sorry, you did not win. Better luck next time!");
  }
  
  // Display the user's numbers
  console.log("Your numbers:", userNumbers.join(", "));
  console.log("Winnning numbers:", generatedNumbers.join(", "));
}

// Play the Win 4 game
playWin4Game();
