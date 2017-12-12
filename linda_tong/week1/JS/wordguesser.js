//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//
// WRITE PSEUDOCODE
//  for each letter in the secret word
//
//    - check if the user's guess letter matches the current secret letter
//        - if it does match, put the guess letter into the current slot of the guessed letters array and congratulate
//        - if it doesn't match, try again.

const secretLetters = ['F', 'O', 'X'];
const guessedLetters = ['_', '_', '_'];

const guessLetter = function (letter) {
  let foundMatch = false
  //for (let i = 0; i < guessedLetters.length; i++) {
    for (let i = 0; i < secretLetters.length; i++) {
      if (letter === secretLetters[i]) {
        console.log(`Congratulations, ${secretLetters[i]} is a match!`);
        foundMatch = true;
        guessedLetters[i] = letter;
        console.log(guessedLetters);
        return;

      }
    }
    console.log(`Sorry, ${letter} is not a match, try again!`);

  //}
};

guessLetter('O');
guessLetter('X');
guessLetter('A');
// guessLetter('F');
