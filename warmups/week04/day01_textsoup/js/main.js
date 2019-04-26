console.log('working?')

/*
TEXT SOUP I:
- get the words from the hidden div
- put the words into an array
- create a function
    - selects random words from the array
    - make those random words appear in random spots on the page
*/

/*
TEXT SOUP II:
- Create a controllers
- Create a new dat gui objects
- Add to controls to the dat gui object
*/

let putWord;

$(document).ready(function(){

  // Create a controller
  // This object will store all the variables we want the GUI controls to change;
  // we need to use an object structure because that is what the dat.gui library expects

  let controls = {
    fadeInSpeed: 500,
    fadeOutSpeed: 2000,
    fontSizeRange: 100,

    // a  method like this will cause a GUI button to be shown, which calls this function when clicked
    clearWords: function() {
      $(".word").remove(); //remove all divs with the class of word
    }
  }

  // create our GUI objects

  const gui = new dat.GUI();

  // Add to controls to the dat gui object
  // the library expects to receive gui.add(object, property, [min], [max], [step]) ⇒ Controller
 // per the documentation

  gui.add(controls, 'fadeInSpeed', 1, 5000);
  gui.add(controls, 'fadeOutSpeed', 1, 5000);
  gui.add(controls, 'fontSizeRange', 1, 300);
  gui.add(controls, 'clearWords');


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
       left: random(window.innerWidth) + 'px',
       fontSize: (12 + controls.fontSizeRange) + 'px'
     });

     // (2a) append the new div to the body
     $body.append($div);

     // $div.fadeIn(1000).fadeOut(2000, function(){
       // $(this).remove();
     // });

     // replace the hardcoded milliseconds with the relevant value within the controls object
     $div.fadeIn(controls.fadeInSpeed).fadeOut(controls.fadeOutSpeed, function(){
       $(this).remove();
     });


  } // putWord

  setInterval(putWord, 100);


}) //doc ready
