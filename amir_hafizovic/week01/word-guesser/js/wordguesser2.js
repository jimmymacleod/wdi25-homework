console.log('hello world!');
let currentWord = 'fox'//lower case only otherwise use .toUpperCase();
let letters = currentWord.split(''); //letters.toUpperCase();
const guessed = ['_', '_', '_'];

const guessLetter = function(letter){ // letter parameter derivies from argument => guessLetter('F')
  for (let i = 0; i < letters.length; i++) { // looping through letters array
    //letters[i]; equals the index number of letters array
    if (letters[i] === letter) { //array index looks for match with argument;
      guessed[i] = letter; // add user's argument to guessed array if matches letters
      console.log('Congratulations! You found the letter ' + letter);
    }
    else if { (letters[i] !== letter)//prints until complete word is found.
      console.log(guessed.join(''));
    }
  else if (!guessed.includes('_')) { //if no underscores exist, word is complete, present user with congrats
    console.log('Congrats! You found the word ' + guessed.join(''));
  }

};

guessLetter('a');
guessLetter('x');
guessLetter('e');
guessLetter('f');
guessLetter('z');
guessLetter('o');
console.log(currentWord.split(''));
/*
//Type your word here (Program is case sensitive)
const myWord = 'ant';


//Creating global arrays
var actualWord = [];
var guessedLetters = [];
var correctGuesses = 0;
var match  = false;
const alphabetList = "abcdefghijklmnopqrstuvwxyz";

//Convert the word into array
actualWord = myWord.split('');


//Function - guessedLetters
const guessLetter = function(currGuessLetter){
console.log(`current letter guessed is : ${currGuessLetter} ntmw ${actualWord[0]}`)
  //Iterating the loop to check if guessed letter is present
  for( i = 0; i < actualWord.length; i++){

    if(currGuessLetter == actualWord[i]) {
      //console.log(`Actual word is ${actualWord} and current guess is ${currGuessLetter} and position is ${i}`);
      console.log(`Hurray! Guess is right! ${actualWord[i]}`);
      guessedLetters[i] = currGuessLetter;
      correctGuesses++;
    }
    else {

      //console.log(`try again!`);
    }

    if(actualWord.length === correctGuesses){
       console.log('FOUND THE WORD! ITS '+actualWord.join("")+' CONGRATULATIONS!!!!');
     } else{
       //console.log('Present Status '+guessedLetters.join("")+' Actual:   '+actualWord.join(""));
     }

}
};
   guessLetter('a');
   guessLetter('b');

   guessLetter('n');
   guessLetter('t');

// for (var i = 0; i < 26; i++) {
//   guessLetter(alphabetList[i]);
// }
*/
