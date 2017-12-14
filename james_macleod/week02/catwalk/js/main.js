const catPic = document.querySelector("img");

// catPic.style.left = "0px";
//
// window.setInterval(function() {
//   left = parseInt(catPic.style.left);
//   catPic.style.left = left + 10 + "px";
// }, 200);
//
// let windowWidth = window.innerWidth;
//
// if (catPic.style.left === windowWidth) {
//   catPic.style.left = "0px";
// }
//
// let angle = 0,
//   lastTime = null;
// function animate(time) {
//   if (lastTime != null) angle += (time - lastTime) * 0.001;
//   lastTime = time;
//   catPic.style.top = Math.sin(angle) * 20 + "px";
//   catPic.style.left = Math.cos(angle) * 200 + "px";
//   requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);

const button = document.querySelector("button");

const once = function() {
  console.log("Done.");
  button.removeEventListener("click", once);
};

button.addEventListener("click", once);

var blackCat = document.getElementById("walkingCat");
var percent = 0;
var timer = null;
var walkRight;
var walkLeft;

var walkR = function() {
  walkRight = setInterval(function() {
    percent++;
    catPic.style.left = percent + "%";
    // console.log(percent);
    if (percent === 70) {
      clearInterval(walkRight);
      catPic.style.transform = "scale(-1,1)";
      walkLeft = setInterval(function() {
        percent--;
        catPic.style.left = percent + "%";
        // console.log(percent);
        if (percent === 0) {
          clearInterval(walkLeft);
          catPic.style.transform = "scale(1,1)";
          walkR();
        }
      }, 100);
    }
  }, 100);
};

walkR();
