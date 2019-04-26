console.log('ANAGRAMS')
/* PSEUDO CODE
create an object to hold the logic

create a method which converts the word into a list of alphabeticised letters
 - split('') convert the string into array
 - sort() to alphabeticise the array
 - join('')

 create another method which calls the above function compares the input word against the array of potential matches
*/

// create an object to hold the logic

const anagramChecker = {
  // empty array to hold our results
  anagrams: [],

/*
  create a method which converts the word into a list of alphabeticised letters
   - split('') convert the string into array
   - sort() to alphabeticise the array
   - join('')
*/

  customSort: function(word){
    // let temp = word.split('');
    // temp = temp.sort();
    // temp = temp.join('');

    return word.split('').sort().join('');

  },

   // create another method which calls the above function, compares the input word against the array of potential matches

  checkForAnagram: function(word, candidateWords){

    const inputWord = this.customSort(word);

    // ["enlists", "google", "inlets", "banana"]

    for (var i = 0; i < candidateWords.length; i++) {

      let candidate = this.customSort(candidateWords[i]);
    //compare candidate word (line 45) to our input word (line 39)
      if (inputWord === candidate){
        this.anagrams.push(candidateWords[i])
      }; // if

    }// for loop

    return `This is an anagram of ${word}: ${this.anagrams}`

  } // method

}; // object

console.log('Expecting: ["inlets", "netsil"]');
console.log(anagramChecker.checkForAnagram('listen', ["enlists", "google", "inlets", "banana", 'netsil']));
