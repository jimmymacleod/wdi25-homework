/*

(1) Create a page in HTML and JS - DONE
(2) Create a text file with a bunch of text - DONE
(3) Load the text file using AJAX
  TO RUN SERVER: python -m SimpleHTTPServer
---

(4) build a markov table
  - Word as key, followed by an array of words which follow the 'key' word.

(5) Generate next text - choose a random starting word, and then choose the next word from the array, and then look up that word and find the next word from it's array .....

*/

const bookFilename = '../text.txt'

let markovTable = {};
let beginnings = []

const build = function( text ){
  const words = text.split(/[ ;\-\n+"']+/);

  for (let i = 0; i < words.length - 1; i++) {
    let word = words[i]
    // IF: whether the key exists yet (i.e. have we seen the word before)? If not, we want to create a key, and give it an empty array
    if (!markovTable[word]){
      markovTable[word] = [] // to create a new key with next words to be stored as an array

      // To: []
    }

    let nextWord = words[i + 1]

    markovTable[word].push( nextWord)

    if(word.match(/^[A-Z][a-z]/)){
      beginnings.push(word)
    }

    // for every word, we'll add the next word to an array where the first word is the key

  } // for
  console.log(markovTable);

}

const randomGenerator = function( max ){
  return Math.floor(Math.random() * max)
}

// find a random word from the array

const choose = function(arr){

  let index = randomGenerator( arr.length ); // eg 30
  return word = arr[index];

}

const generate = function( length ){
  console.log(beginnings);

  let next = choose(beginnings)

  // let output = ""
  // output + next +  + + +  +
  let output = next // become a string which will hold text

  // output = "Coburg"

  for (var i = 0; i < length; i++) {
    let word = choose(markovTable[next]);
    // word = Square
    output += ' ' + word;
    // output = "Coburg Square"
    next = word
  } // for

  return output

} // generate

$(document).ready(function(){
  $.ajax(bookFilename).done(function(res){
    build(res)

    let newText = generate(100);

    let $el = $('<p>').text(newText);
    $('#output').prepend($el);
    // console.log(beginnings);
  }).fail(function(err){
    console.log({error});
  }) // ajax


})
