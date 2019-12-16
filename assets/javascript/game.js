// declare variables for wins, losses, remaining guesses, guesses thus far, and displaying blank spaces.
var wins = 0;
var loss = 0;
var guessLeft = 12;
var guessUsed = 0;
var blankSpace = [];


// Make array for words for game

var wordArray = ["bulbasaur", "caterpie", 
// "charmander", "cubone", "diglett", "eevee", "ekans", "magikarp", "meowth", "mewtwo", "oddish", "onix", "pikachu", "psyduck", "raichu", "snorlax", "squirtle", "zubat"
];


// computer chooses random word.

var compWord = wordArray[Math.floor(Math.random() * wordArray.length)].toLowerCase();
console.log(compWord);

// create for loop to display chosen word as _ 

for (var i = 0; i < compWord.length; i++) {

    blankSpace[i] = "_";
 
    if (compWord === wordArray[0].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/bulbasaur.png'>";
        document.getElementById("hint").innerHTML= "Bestfriend of Ren.";
    } else if (compWord === wordArray[1].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/caterpie.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    }
}
console.log(blankSpace);

document.getElementById("gameboard").innerHTML="" + blankSpace.join(" ");

// create loop to display proper image for selected guess word.




 

