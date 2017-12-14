var hangMan    = ['S', 'T', 'E', 'V', 'E', 'N'];
var guessedLetters  = ['_', '_', '_', '_','_','_'];

function guessLetter(letter) {
  let goodGuess = false;
  let moreToGuess = false;
  for (let i = 0; i < hangMan.length; i++) {
      if (hangMan[i] == letter) {
          guessedLetters[i] = letter;
          goodGuess = true;
      }
      if (guessedLetters[i] == '_') {
          moreToGuess = true;
      }
  }
  if (goodGuess) {
      console.log('');
      console.log(guessedLetters.join(''));
      if (!moreToGuess) {
          console.log('WINNER');
      }
  } else {
      console.log('Oh noes, thats not right!');
  }
}

guessLetter('S','T');
