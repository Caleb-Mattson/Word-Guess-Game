// declare variables for wins, losses, remaining guesses, guesses thus far, and displaying blank spaces.
var guessLeft = 12;
var guessUsed = [];
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
        document.getElementById("hint").innerHTML= "Starter grass type!";
    } else if (compWord === wordArray[1].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/caterpie.png'>";
        document.getElementById("hint").innerHTML= "Little caterpillar!";
    } else if (compWord === wordArray[2].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/charmander.png'>";
        document.getElementById("hint").innerHTML= "Starter fire type!";
    } else if (compWord === wordArray[3].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/cubone.png'>";
        document.getElementById("hint").innerHTML= "Uses a femur as a weapon!";
    } else if (compWord === wordArray[4].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/diglett.png'>";
        document.getElementById("hint").innerHTML= "Burrows under ground!";
    } else if (compWord === wordArray[5].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/eevee.png'>";
        document.getElementById("hint").innerHTML= "Has multiple EEvolutions!";
    } else if (compWord === wordArray[6].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/ekans.png'>";
        document.getElementById("hint").innerHTML= "Spelt backwards!";
    } else if (compWord === wordArray[7].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/magikarp.png'>";
        document.getElementById("hint").innerHTML= "Splash!";
    } else if (compWord === wordArray[8].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/meowth.png'>";
        document.getElementById("hint").innerHTML= "Original first talking Pokemon!";
    } else if (compWord === wordArray[9].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/mewtwo.png'>";
        document.getElementById("hint").innerHTML= "Lab created Pokemon!";
    } else if (compWord === wordArray[10].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/oddish.png'>";
        document.getElementById("hint").innerHTML= "Raddish!";
    } else if (compWord === wordArray[11].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/onix.png'>";
        document.getElementById("hint").innerHTML= "Brock's number 1 pokemon!";
    } else if (compWord === wordArray[12].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/pikachu.png'>";
        document.getElementById("hint").innerHTML= "I CHOOSE YOU, ___!";
    } else if (compWord === wordArray[13].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/psyduck.png'>";
        document.getElementById("hint").innerHTML= "IT'S A PSYCHIC FLIGHTLESS YELLOW BIRD!";
    } else if (compWord === wordArray[14].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/raichu.png'>";
        document.getElementById("hint").innerHTML= "Evolution of Pikachu!";
    } else if (compWord === wordArray[15].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/snorlax.png'>";
        document.getElementById("hint").innerHTML= "Laziest Pokemon!";
    } else if (compWord === wordArray[16].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/squirtle.png'>";
        document.getElementById("hint").innerHTML= "Water starter Pokemon!";
    } else if (compWord === wordArray[17].toLowerCase()) {
        document.getElementById("imgHint").innerHTML = "<img src='assets/images/zubat.png'>";
        document.getElementById("hint").innerHTML= "Lives in caves!";
    } 
    document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(userGuess);
       
    
    var isGuessWrong = true;

    for (var i = 0; i < compWord.length; i++) {
        if (userGuess === compWord[i]) {
            isGuessWrong = false;
            blankSpace[i] = userGuess;
            document.getElementById("gameboard").innerHTML = " " + blankSpace.join (" ");
        }
    }
    if (isGuessWrong === true) {
        if (guessLeft > 0) {
        guessUsed.push(userGuess);
        document.getElementById("incorrectGuess").innerHTML = " " + guessUsed.join(" ");
        guessLeft--;
        document.getElementById("guessLeft").innerHTML = guessLeft;
        }
        if (guessLeft === 0) {
            document.getElementById("lost").innerHTML = "<p id='lostExecute'>WHY WOULD YOU KILL THAT POOR POKEMON!?!<br><button onClick='location.reload();' id='button'>Try Again?</button> </p>";

        }
    } 
    

    }
    
    
}
console.log(blankSpace);

document.getElementById("gameboard").innerHTML="" + blankSpace.join(" ");

// writes the code for the users guess


   





 

