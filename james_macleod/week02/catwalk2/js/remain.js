//set variables

//create master function
//create function to move the gif across the page and then back across the page.
//create counter within the function.

//create an if that is triggered with the counter is at X.
//slide the cat down and right.
//change the gif src

//create an if that is triggered with the counter is at X.
//stop the previous functon.
//change the src.

const fatCat = document.getElementById("walkCat");
fatCat.style.position = "absolute";
fatCat.style.left = "0px";
fatCat.style.top = "0px";
fatCat.style.right = "0px";
fatCat.style.bottom = "0px";

let catLength = 0;

let move = +10;

const catDance = function() {
  const x = window.innerWidth;
  const y = window.innerHeight;

  fatCat.style.left = parseInt(fatCat.style.left) + move + "px";

  if (parseInt(fatCat.style.left) <= 0) {
    move = +10;
    catLength++;
    console.log(catLength);
    fatCat.style.webkitTransform = "scaleX(+1)";
  } else if (parseInt(fatCat.style.left) >= x - 270) {
    fatCat.style.webkitTransform = "scaleX(-1)";
    move = -10;
  }

  if (catLength === 4) {
    clearInterval(doLengths);
    fatCat.src = "catgifs/cpr.gif";
    setTimeout(startMove, 3500);
  }
};

const doLengths = window.setInterval(catDance, 10);

const moveAcross = function() {
  const x = window.innerWidth;
  const y = window.innerHeight;
  console.log("working");

  fatCat.style.left = parseInt(fatCat.style.left) + move + "px";

  if (parseInt(fatCat.style.left) <= 0) {
    move = +10;
    catLength++;
    console.log(catLength);
    fatCat.style.webkitTransform = "scaleX(+1)";
  } else if (parseInt(fatCat.style.left) >= x - 270) {
    move = -10;
  }
};

const startMove = setInterval(moveAcross, 20);
