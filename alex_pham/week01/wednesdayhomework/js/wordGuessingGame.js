// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite
// tries to guess the word (like Hangman without the hangman, or like
// Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g.
// 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it
// would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in
// there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more
//  letters that need to be guessed, and if not, it
//   should congratulate the user for winning the
//    game.
// //Pretend you don't know the word, and call
//  guessLetter multiple times with various letters to check that your program works.
// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


//  Step 1 - Add 2 global arrays - 1 array hold the letter , 1 arrays hold current // guessed letters

var wordLetter = [];
var guestLetter = [];

//Get word from enter keyboard
var wordLetterInput = prompt("Enter a secret word letter");

//step 2: write a loop to get input
// store secret word game
for (let i = 0; i < wordLetterInput.length; i++) {
  wordLetter.push('_');
}
// check out the secret word for game
console.log(`The secret word enter : ${wordLetterInput}`);

var attemp = 0;
// step 3 - write a guessLetter function for guess a secret word game
const guessLetter = function ( aLetter ) {
  //allow attemp 5 time
    // if(wordLetterInput.indexOf(aLetter) < 6){
    //   //increate attemp
    //   attemp++;
    //   console.log("Bad guess!");
    // } else {

    for (let i = 0; i < wordLetterInput.length; i++) {
        if (wordLetterInput[i] === aLetter) {
          wordLetter[i] = aLetter;
          console.log('Congratulations you got a letter!');
          attemp++
          // console.log(attemp);
        }
        console.log(attemp);

        // else {
        //   attemp++
        //   console.log(attemp);
        // }
      }
    // }


  if(!wordLetter.includes('_')){
    console.log('You win!');
  } else if( attemp === 6 ){
    console.log('You lose! No more turns.');
  } else {
    console.log(`Running total: ${wordLetter.join(',')}`);
  }
};

// guessLetter('s');
// guessLetter('m');
// guessLetter('i');
// guessLetter('l');
// guessLetter('l');
// guessLetter('e');
