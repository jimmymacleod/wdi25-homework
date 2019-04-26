console.log('hello world!');

const currentWord = 'fox'//lower case only otherwise use .toUpperCase();
const letters = currentWord.split(''); //letters.toUpperCase();
const guessed = ['_', '_', '_'];

const guessLetter = function(letter){ // letter parameter derivies from argument => guessLetter('F')
  let foundMatch = false;
  for (let i = 0; i < letters.length; i++) { // looping through letters array
    //letters[i]; equals the index number of letters array
    if (letters[i] === letter) { //array index looks for match with argument;
      guessed[i] = letter; // add user's argument to guessed array if matches letters
      console.log('Congratulations! You found the letter ' + letter);
      foundMatch = true;
    }
  }
  if (!guessed.includes('_')) { //if no underscores exist, word is complete, present user with congrats
    console.log('Congrats! You found the word ' + guessed.join(''));
  }
  else if (!foundMatch ){ //prints until complete word is found.
    console.log('No match');
  }
  console.log(guessed.join(','));

};

guessLetter('a');
guessLetter('x');
guessLetter('e');
guessLetter('f');
guessLetter('z');
guessLetter('o');
//console.log(currentWord.split(''));
