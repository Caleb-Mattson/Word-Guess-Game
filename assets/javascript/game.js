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

for (var i = 0; i < compWord.length; i++) {
    var img = document.createElement(img);
    
    blankSpace[i] = "_";
    if (compWord === wordArray[0].toLowerCase()) {
        img.src = '../images/bulbasaur.png';
        document.getElementById("imgHint").appendChild(img);
        document.getElementById("hint").innerHTML= "Bestfriend of Ren.";
    } else if (compWord === wordArray[1].toLowerCase()) {
        img.src = '../images/caterpie.png';
        document.getElementById("imgHint").appendChild(img);
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    }
}
console.log(blankSpace);

document.getElementById("gameboard").innerHTML="" + blankSpace.join(" ");
 
var imgArray = new Array();

        imgArray[0] = new Image();
        imgArray[0].src = 'assets/images/bulbasaur.png';

        imgArray[1] = new Image();
        imgArray[1].src = 'assets/images/caterpie.png';

        /* ... more images ... */

        imgArray[5] = new Image();
        imgArray[5].src = '';
