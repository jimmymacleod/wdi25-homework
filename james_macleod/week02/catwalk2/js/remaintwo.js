let count = 0;

const counter = function() {
  count++;
  console.log(count);
};

const fatCat = document.getElementById("walkCat");
fatCat.style.position = "absolute";
fatCat.style.left = "0px";
fatCat.style.top = "0px";
fatCat.style.right = "0px";
fatCat.style.bottom = "0px";
let move = +10;
let catLength;

const catDance = function() {
  const x = window.innerWidth;
  const y = window.innerHeight;

  fatCat.style.left = parseInt(fatCat.style.left) + move + "px";

  if (parseInt(fatCat.style.left) <= 0) {
    move = +10;
    catLength++;
    fatCat.style.webkitTransform = "scaleX(+1)";
  } else if (parseInt(fatCat.style.left) >= x - 270) {
    fatCat.style.webkitTransform = "scaleX(-1)";
    move = -10;
  }

  if (catLength === 4) {
    clearInterval(doLengths);
    fatCat.src = "catgifs/cpr.gif";
  }

  if (count > 20) {
    fatCat.src = "catgifs/wiggy.gif";
    fatCat.width = 400;
    move = +20;
  }

  if (count > 23) {
    move = -20;
  }
};

const doLengths = setInterval(catDance, 20);
setInterval(counter, 500);
