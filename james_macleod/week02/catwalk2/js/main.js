const catWalk = document.getElementById("walkCat");
catWalk.style.position = "absolute";
catWalk.style.left = "0px";
catWalk.style.top = "0px";
catWalk.style.right = "0px";
catWalk.style.bottom = "0px";

let moveLeft = 10;
let moveDown = 2;

const move = function() {
  const x = window.innerWidth;
  const y = window.innerHeight;

  catWalk.style.left = parseInt(catWalk.style.left) + moveLeft + "px";

  // console.log(parseInt(catWalk.style.left));
  if (parseInt(catWalk.style.left) <= 0) {
    moveLeft = +10;
    catPace++;
    console.log(catPace);
    catWalk.style.webkitTransform = "scaleX(+1)";
  } else if (parseInt(catWalk.style.left) >= x - 270) {
    catWalk.style.webkitTransform = "scaleX(-1)";
    moveLeft = -10;
  }

  const oGFunction = function() {
    if (
      parseInt(catWalk.style.left) < x - catWalk.style.width &&
      parseInt(catWalk.style.left) < 200
    ) {
      catWalk.style.left = parseInt(catWalk.style.left) + moveLeft + "px";
      catWalk.style.top = parseInt(catWalk.style.top) + moveDown + "px";
      moveLeft = +1;
      catPace++;
      console.log(parseInt(catWalk.style.left));
    }
  };

  const reverseOGFunction = function() {
    clearInterval(oGFunction);
    catWalk.style.left = parseInt(catWalk.style.left) - moveLeft + "px";
    catWalk.style.top = parseInt(catWalk.style.top) - moveDown + "px";
    moveLeft = +1;
    catPace++;
    console.log(parseInt(catWalk.style.left));
  };

  const aniOne = function() {
    catWalk.src = "catgifs/wiggy.gif";
  };

  const reverse = function() {
    catWalk.style.right = parseInt(catWalk.style.right) - moveLeft + "px";
    catWalk.style.bottom = parseInt(catWalk.style.bottom) - moveDown + "px";
    moveLeft = -1;
    catPace++;
    console.log("am i here");
  };

  //FUN BEGIN HERE.
  if (catPace === 4) {
    clearInterval(walkStart);
    catWalk.src = "catgifs/cpr.gif";
    catWalk.style.webkitTransform = "scaleX(1)";
    catWalk.style.zIndex = "1";
    setInterval(oGFunction, 50);
    setTimeout(aniOne, 3500);
    setTimeout(reverseOGFunction, 4000);
    // setTimeout(kickit, 3500);
  }

  // const oGFunction = function() {
  //   catWalk.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  //   moveLeft = +10;
  // };
};

// catWalk.eventListener("click", function(event) {
//   catWalk.src = "catgifs/headphones.gif";
// });

var catPace = 0;
var walkStart = setInterval(move, 10);
