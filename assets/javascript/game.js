
var possibleWords = ["aladin", "simba", "ariel", "elsa", "mufasa", "ursula"]


var guesses = [];
var guess = "";
var word = "";
var wrong = 0;


function start_game() {
  guess = "";
  guesses = [];
  num = 0;
  wrong = 0;
  document.getElementById("guessesLeft").innerHTML = "8";
  word = possibleWords[Math.floor(Math.random()*possibleWords.length)];
  document.getElementById("guessedLetters").innerHTML = guesses;
  //document.getElementById("end").innerHTML = "";
  console.log(word);
  for (i = 0; i < 15; i++) {
    document.getElementById(i).innerHTML = "";
  }
  for (i = 0; i < word.length; i++) {
    document.getElementById(i).innerHTML = "_";
    //start_game() completely resets everything on the board and picks a word out of the  possible words for the user to guess
  }
}



function guessing() {
  guess = document.getElementById("guess").value;
  guess = guess.toLowerCase();
  if (guess !== null) {
    if (guesses.includes(guess)) {} else {
      guesses.push(guess);
      document.getElementById("guessedLetters").innerHTML = guesses;
      console.log(guesses);
      // guessed letters get added into the Guessed Letters <p>
    }
  }
  
  work();
}


function work() {
  for(i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      document.getElementById(i).innerHTML = guess;
    
    }
  }
  if (!(word.includes(guess))) {
    wrong += 1;
    var count = 8 - wrong;
    document.getElementById("guessesLeft").innerHTML = count;
  }
  if (count === 0){
    
    document.getElementById("end").innerHTML = "YOU LOSE. The answer was: "+ word;
    start_game()
    //if the count gets to 0 then the game resets and you get the message you lose
  }
  
  won();
  document.getElementById("guess").value = "";
  //clears the input after guess letter or return is hit
}


function won() {
  var x = "";
  var z = 0;
  for (i=0; i<word.length; i++) {
    i = i.toString();
    x = document.getElementById(i).innerHTML;
    if (x != "_") {
      z += 1;
    }
  }
  if (z === word.length) {
    document.getElementById("end").innerHTML = "<p>YOU WON!<p>";
    start_game()
  }
}
//Shows You Won if the all divs being used have a letter


