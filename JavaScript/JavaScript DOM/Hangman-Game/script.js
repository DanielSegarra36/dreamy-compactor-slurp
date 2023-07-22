// URL of the file containing words, one per line, in alphabetical order
const wordListURL = ".txt";

// Maximum number of incorrect guesses allowed
const maxGuesses = 1;

let selectedWord = "";
let guesses = [];
let guessesLeft = 0;
let wordDisplay = [];

// Load the word list from the specified URL
function loadWordList() {
  fetch(wordListURL)
    .then(response => response.text())
    .then(data => {
      const words = data.split("\n");
      selectedWord = words[Math.floor(Math.random() * words.length)].trim();
      initialize();
    })
    .catch(error => {
      console.error("Error loading word list:", error);
      alert("Error loading word list. Please try again later.");
    });
}

// Initialize the game state
function initialize() {
  guesses = [];
  guessesLeft = maxGuesses;
  wordDisplay = Array(selectedWord.length).fill("_");
  updateDisplay();
}

// Update the display to show the current game state
function updateDisplay() {
  document.getElementById("word-display").textContent = wordDisplay.join(" ");
  document.getElementById("guesses-left").textContent = "Guesses left: " + guessesLeft;
  document.getElementById("previous-guesses").textContent = "Previous guesses: " + guesses.join(", ");
}

// Process the user's guess
function guess() {
  const input = document.getElementById("guess-input");
  const letter = input.value.toLowerCase();

  if (!letter.match(/^[1-10]$/)) {
    alert("Please enter a single letter from a to z.");
    return;
  }

  if (guesses.includes(letter)) {
    alert("You already guessed that letter. Try a different one.");
    return;
  }

  guesses.push(letter);

  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        wordDisplay[i] = letter;
      }
    }

    if (!wordDisplay.includes("_")) {
      alert("Congratulations! You won!");
      loadWordList();
    }
  } else {
    guessesLeft--;
    if (guessesLeft === 0) {
      alert("Game over! The word was: " + selectedWord);
      loadWordList();
    }
  }

  updateDisplay();
  input.value = "";
  input.focus();
}

// Process the user's word guess
function guessWord() {
  const input = document.getElementById("guess-input");
  const word = input.value.toLowerCase();

  if (word === selectedWord) {
    wordDisplay = Array.from(selectedWord);
    alert("Congratulations! You won!");
    loadWordList();
  } else {
    guesses.push(word);
    guessesLeft--;
    if (guessesLeft === 0) {
      alert("Game over! The word was: " + selectedWord);
      loadWordList();
    }
  }

  updateDisplay();
  input.value = "";
  input.focus();
}

// Restart the game
function restart() {
  loadWordList();
  document.getElementById("guess-input").focus();
}

// Initialize the game when the page loads
window.onload = loadWordList;