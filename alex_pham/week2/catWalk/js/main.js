// Who needs Milan when you have JavaScript?
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
//
// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.


//press start button
// cat moves to the right
//   hit right wall
//   stop
//   cat moves to the left
//   hit left wall
//   stop
//   cat moves to the right (loop)
//
// find out how cat hit right wall
// wall = window.innerWidth
// cat position = img.style.left
// need to have direction
//
// condition = if cat position equal/more to wall, then
// call stop function = clearInterval
//
//
// cat moves to the left how? moving to the other direction
// moving from right to left (-10px) everystep

//Create a variable to store a reference to the img.
let start = document.querySelector("#start-button");
let stop = document.querySelector("#stop-button");
let catTimerId = null;
let direction = "right";
// create catWalk function
let catWalk = function() {
  let img = document.querySelector("img");
  let currentLeftOffset = parseInt(img.style.left);
  //check if the direction move to move right
  if (direction === "right") {
    // assign img left position equal current left offset point + 10px;
    img.style.left = currentLeftOffset + 10 + "px";
    // check the current left offset point position is greater then innerWidth of Window.inn subract to width of img
    if (currentLeftOffset > window.innerWidth - img.width) {
      //578, this is to check the width of my window
      // img.style.left = 0 + 'px';
      // stopCatWalk();
      direction = "left";
    }
  } else {
    img.style.left = currentLeftOffset - 10 + "px";
    //check if the current left offset point equal 0
    if (currentLeftOffset === 0) {
      // stopCatWalk();
      direction = "right";
    }
  }
};

let startCatWalk = function() {
  if (catTimerId !== null) {
    clearInterval(catTimerId);
  }
  catTimerId = setInterval(catWalk, 150); //calling catWalk function every 100ms and store the "receipt id" in catTimerId
};
// now let start button on addEventListener method with click event and startCatWalk callback function with timerId giving.
start.addEventListener("click", startCatWalk);
// create stopCatWalk function and inside this function call clearInterval function and put catTimerId as argument.
let stopCatWalk = function() {
  clearInterval(catTimerId);
};
// add stop button to addEventListener function take click event action and stopCatWalk
stop.addEventListener("click", stopCatWalk);
