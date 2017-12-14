console.log('linked!')
/*
 PSEUDO CODE / THOUGHT PROCESS
 ORIGINAL APPROACH
 - Create a general object which holds scrabble logic create an object containing letterScore (structure = SCORE : LETTERS WITH THAT SCORE) create score method:
 - convert input word into ALLCAPS (to match the data)
 - convert input word into ALLCAPS (to match the data)

 - LOOP: isolate each letter of the word
     - because our letterscore object is LETTERVALUE : LETTER ARRAY (key : value), we need to see if the letter is in the LETTER ARRAY, and if so, we want the key.
     => FOR .. IN loop
     => .includes()
  Once we get the key, we want to add it to our running score


 ALTERNATE APPROACH
 - create a general object which holds scrabble logic
 - create an object containing letterScore (structure = LETTER : SCORE)
 - create score method:
     convert input word into lowerCase (to match the data)
 - LOOP: isolate each letter of the word
    For each letter, give us the value (i.e. if we get A, give us 1)
    Once we get the value, we want to add it to our running score

*/

const scrabble = {

  //original letterScore object (within scrabble object)
  letterscore: {
     1: "A, E, I, O, U, L, N, R, S, T".split(", "),
     2: ["D", "G"],
     3: "B, C, M, P".split(", "),
     4: "F, H, V, W, Y".split(", "),
     5: ["K"],
     8: ["J", "X"],
     10: ["Q", "Z"]
  },

  //to calculate score using letterscore object
  score: function(word){
    word = word.toUpperCase();
    console.log(word);
    let sum = 0;

    // need to isolate each letter of the word
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      console.log(letter);

      //checking to see what the key (score) is for that letter
      for (let letterValue in this.letterscore) {
        if (this.letterscore[letterValue].includes(letter)){
          // console.log(this.letterscore[letterValue]);
          sum += parseInt(letterValue);
          console.log(`letter ${letter} is worth ${letterValue}`);
        } // if
      } // for in loop
    } // for loop

    console.log(`${word} scored ${sum}`);
    return sum;
  }, // score

  //ALTERNATE data structure
  letterScoresAlternative: {
   'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
   'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
   's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
   'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
   'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
   'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
   'q' : 10, 'z' : 10
 },

 //to calculate word value using the letterScoreAlternative object
 scoreAlternative: function(word){
   word = word.toLowerCase();
   let sum = 0;

   //loop through the word to find the value of each letter (remember the letter is the KEY and the score is the VALUE)
   for (let i = 0; i < word.length; i++) {
     let letter = word[i];
     console.log(letter);
     let letterScore = this.letterScoresAlternative[letter];

     sum += letterScore;
     console.log(`letter ${letter.toUpperCase()} is worth ${letterScore}`);
   }
   return sum;
 },

} // scrabble

console.log(scrabble.score('cabbage'));
console.log(scrabble.scoreAlternative('cabbage'));
