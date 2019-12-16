// declare variables for wins, losses, remaining guesses, guesses thus far, and displaying blank spaces.
var wins = 0;
var loss = 0;
var guessLeft = 12;
var guessUsed = 0;
var blankSpace = [];


// Make array for words for game

var wordArray = ["banana", "aardvark", "jimmy", "apple pie", "oscar", "philipe", "connor", "mathbook", "encyclopedia", "super dope funk town"]

// computer chooses random word.

var compWord = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(compWord);

for (var i = 0; i < compWord.length; i++) {
    blankSpace[i] = "_";
}
console.log(blankSpace);

// var gameBoard = document.getElementById("gameboard")

document.getElementById("gameboard").innerHTML="" + blankSpace.join(" "); 