// Homework: The Word Guesser
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

const hangmanLetters = ['F', 'O', 'X'];
console.log(hangmanLetters);
const currentLetter = ['_','_','_','_','Go','Away','Empty','Space'];
console.log(currentLetter)

const guess = function(guessedLetters) {
  let correctGuess = false;
  let incorrectGuess = false;

    for (let i = 0; i < hangmanLetters.length; i++){ //** loop through characters in hangmanLetter array
      if (hangmanLetters[i] === guessedLetters){ //** check if the hangmanLetters are equal to the guessedLetters
        currentLetter[i] = guessedLetters; //** the guessed letter is assigned to the empty array character
        correctGuess = true; //** correctGuess is assigned as true

        //console.log(`"${hangmanLetters[j]}"You found a match!`);
        //console.log(guessMatch(currentLetter));
        //guessMatch(hangmanLetter[j]);
        //hangmanLetter.length-1;
        //store matched letter in a variable
      }

      // if (currentLetter[i] === '_') {
      //   incorrectGuess = false;
      //   console.log('false');
      // }
    }
      if (correctGuess){ //** if the correctGuess equals true
        console.log('Correct guess!');
        console.log(currentLetter.join('')); //** join the current characters in the two arrays and log them

        if (!incorrectGuess && currentLetter === hangmanLetters){ //**
          console.log('You won! you guessed FOX');

        }
      }
      else {
        console.log('Keep trying!');
      }
    }

guess('A');
guess('O');
guess('C');
guess('F');
guess('G');
guess('X');


//   console.log(guessMatch());

//console.log(guessMatch);
    //return hangmanLetter[j];
  //}
//console.log(guessMatch());



    //let currentGuess = currentLetter[i];
    //console.log(`Current letter = ${currentletter}`)
    // if ( currentGuess === hangmanLetter[0]){
    //   console.log('You found a match! "F"');
    // } else {
    //   console.log('No matches!');
    // }
    // if (currentLetter[i] === hangmanLetter[1]){
    //   console.log('You found a match! "O"');
    // }
    // if (currentLetter[i] === hangmanLetter[2]){
    //   console.log('You found a match! "X"')
    // }
  //}

//}
