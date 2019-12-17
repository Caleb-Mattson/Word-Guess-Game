// declare variables for wins, losses, remaining guesses, guesses thus far, and displaying blank spaces.
var wins = 0;
var loss = 0;
var guessLeft = 12;
var guessUsed = 0;
var blankSpace = [];


// Make array for words for game

var wordArray = ["bulbasaur", "caterpie", 
"charmander", "cubone", "diglett", "eevee", "ekans", "magikarp", "meowth", "mewtwo", "oddish", "onix", "pikachu", "psyduck", "raichu", "snorlax", "squirtle", "zubat"
];


// computer chooses random word.

var compWord = wordArray[Math.floor(Math.random() * wordArray.length)].toLowerCase();
console.log(compWord);

document.getElementById("guessLeft").innerHTML = guessLeft;



// create for loop to display chosen word as _ 

for (var i = 0; i < compWord.length; i++) {

    blankSpace[i] = "_";
 
    if (compWord === wordArray[0].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/bulbasaur.png'>";
        document.getElementById("hint").innerHTML= "Bestfriend of Ren.";
    } else if (compWord === wordArray[1].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/caterpie.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[2].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/charmander.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[3].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/cubone.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[4].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/diglett.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[5].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/eevee.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[6].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/ekans.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[7].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/magikarp.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[8].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/meowth.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[9].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/mewtwo.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[10].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/oddish.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[11].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/onix.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[12].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/pikachu.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[13].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/psyduck.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[14].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/raichu.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[15].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/snorlax.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[16].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/squirtle.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } else if (compWord === wordArray[17].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/zubat.png'>";
        document.getElementById("hint").innerHTML= "Surname Bravo.";
    } 
}
console.log(blankSpace);

document.getElementById("gameboard").innerHTML="" + blankSpace.join(" ");

// create loop to display proper image for selected guess word.




 

