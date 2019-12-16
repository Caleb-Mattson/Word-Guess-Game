// declare variables for wins, losses, remaining guesses, guesses thus far, and displaying blank spaces.
var wins = 0;
var loss = 0;
var guessLeft = 12;
var guessUsed = 0;
var blankSpace = [];


// Make array for words for game

var wordArray = ["stimpy", "johnny"];


        // computer chooses random word.

var compWord = wordArray[Math.floor(Math.random() * wordArray.length)].toLowerCase();
console.log(compWord);

for (var i = 0; i < compWord.length; i++) {
    blankSpace[i] = "_";
    if (compWord === wordArray[0].toLowerCase()) {
        document.getElementById("hint").innerHTML= "Bestfriend of Ren."
    } else if (compWord === wordArray[1].toLowerCase()) {
        document.getElementById("hint").innerHTML= "Surname Bravo."
    }
}
console.log(blankSpace);

document.getElementById("gameboard").innerHTML="" + blankSpace.join(" ");
 
