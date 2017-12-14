var catWalk = document.getElementById("walkCat");
catWalk.style.position = "absolute";
catWalk.style.left = "0px";
catWalk.style.top = "0px";

var moveLeft = +10;

var move = function() {
  var x = window.innerWidth;
  var y = window.innerHeight;

  catWalk.style.left = parseInt(catWalk.style.left) + moveLeft + "px";
  // console.log(parseInt(catWalk.style.left));
  if (parseInt(catWalk.style.left) <= 0) {
    moveLeft = +10;
    catPace++;
    catWalk.style.webkitTransform = "scaleX(+1)";
  } else if (parseInt(catWalk.style.left) >= x - 270) {
    catWalk.style.webkitTransform = "scaleX(-1)";
    moveLeft = -10;
  }

  //FUN BEGIN HERE.
  if (catPace === 4) {
    clearInterval(walkStart);
    catWalk.src = "george1_giphy.gif";
    catWalk.style.webkitTransform = "scaleX(1)";
    catWalk.style.zIndex = "1";
    var kitKat = document.createElement("AUDIO");
    kitKat.src = "./Audio/KeyboardCat(JumpstyleRemix).mp3";
    kitKat.play();
    setTimeout(FUNPLACE, 3500);
    setTimeout(kickit, 3500);
  }
};

var catPace = 0;
var walkStart = setInterval(move, 10);
