// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// let parent = document.getElementById('container');
let slyCat = document.getElementById('catWalk');
let catMovingDown = true;
let catMovingRight = true;
slyCat.style.left = "0px";
slyCat.style.top = "0px";
// slyCat.style.right = "0px;"


const catStrut = function() {
  // let catMovingRight = false;
  const startLeft = parseInt(slyCat.style.left);
  // let moveLeft;
  const startTop = parseInt(slyCat.style.top);
  let walkRight;
  // let moveTop;
  // slyCat.style.left = moveLeft + 'px';
  // slyCat.style.top = moveTop + 'px';
  // slyCat.style.left = startLeft + "px";
  // const left = parseInt(slyCat.style.left);
  // const top = parseInt(slyCat.style.top);


  if( catMovingRight && (startLeft > (window.innerWidth-slyCat.width))){
    catMovingRight = false;
    }
  if(!catMovingRight && (startLeft <= 0)){
    catMovingRight = true;
  }

  if( catMovingDown && (startTop >(window.innerHeight-slyCat.height))){
    catMovingDown = false;
  }
  if(!catMovingDown && (startTop <= 0)){
    catMovingDown = true;
  }

  if(catMovingRight && catMovingDown){
    // slyCat.style.left = (left + 10) + 'px';
    // slyCat.style.top = (top + 15) + 'px';
    slyCat.style.left = (startLeft + 15) + "px";
    slyCat.style.top = (startTop + 10) + "px";
  } else {
    // slyCat.style.left = (left - 10) + 'px';
    // slyCat.style.top = (top - 15) + 'px';
    slyCat.style.left = (startLeft - 15) + "px";
    slyCat.style.top = (startTop - 10) + "px";
  }

  if( startLeft > (window.innerWidth) / 2 && startLeft < (window.innerWidth / 2) + 5){
    catMovingRight = true;
    clearInterval(walkRight);
    crazy();
  }


}
window.setInterval(catStrut, 50);


// const crazy = function(){
//   slyCat.style.width += 10;
//   slyCat.style.height += 10;
// }
