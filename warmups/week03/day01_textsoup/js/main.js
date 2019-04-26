console.log('working?')

/*

- get the words from the hidden div
- put the words into an array
- create a function
    - selects random words from the array
    - make those random words appear in random spots on the page

      HOW???

*/

let putWord;

$(document).ready(function(){

  // - get the words from the hidden div
  // - put the words into an array


  const words = $('#words').text().split(/[ ;\-,.\n]+/);

  const $body = $('body');
  // - create a function
  //     - selects random words from the array
            // - get a random number
            // - use the number to grab a word in the words array
  //     - make those random words appear in random spots on the passengers
  //

  putWord = function(){
    // generate a random number
    const random = function(max){
      return Math.floor( Math.random() * max )
    };

    // use the number to generate an index, which we will use to select a word from the array

    const randomIndex = random(words.length);

    // select random word

    const text = words[randomIndex];

    console.log(text);

    //place `text` on the page at random places
     // (1) create a new div to hold each random words
     const $div = $('<div class="word">').html(text)

     // (2b) make the div appear in a random location
     $div.css({
       top: random(window.innerHeight) + 'px',
       left: random(window.innerWidth) + 'px'
     });

     // (2a) append the new div to the body
     $body.append($div);
     $div.fadeIn(1000).fadeOut(2000, function(){
       $(this).remove();
     });


  } // putWord

  setInterval(putWord, 100);



})
