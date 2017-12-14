var blackCat = document.getElementById("walkingCat");
var percent = 0;
var timer = null;
var walkRight;
var walkLeft;

var walkR = function() {
  walkRight = setInterval(function() {
    percent++;
    blackCat.style.left = percent + "%";
    console.log(percent);
    if (percent === 70) {
      clearInterval(walkRight);
      blackCat.style.transform = "scale(-1,1)";
      walkLeft = setInterval(function() {
        percent--;
        blackCat.style.left = percent + "%";
        console.log(percent);
        if (percent === 0) {
          clearInterval(walkLeft);
          blackCat.style.transform = "scale(1,1)";
          walkR();
        }
      }, 100);
    }
  }, 100);
};

var dance = function() {
  blackCat.src = "http://www.netanimations.net/animatedkitten-15.gif";
  blackCat.style.length = "296px";
  blackCat.style.height = "296px";
};

var explode = function() {
  blackCat.src =
    "http://rs517.pbsrc.com/albums/u333/PhotoPun/explosion.gif~c200";
  blackCat.style.length = "296px";
  blackCat.style.height = "296px";
  document.getElementById("boom").play();
};

var countD;

var countdownTimer = function() {
  var ct = document.getElementById("count");
  ct.innerHTML = 5;

  countD = setInterval(function() {
    if (ct.innerHTML == 0) {
      clearInterval(countD);
      explode();
    } else {
      ct.innerHTML -= 1;
    }
  }, 1000);
};

var cancelTimer = function() {
  var ct = document.getElementById("count");
  ct.innerHTML = 5;
  console.log("mouse out");
  clearInterval(countD);
  clearTimeout(explode);
};

var walk = function() {
  blackCat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  blackCat.style.length = "296px";
  blackCat.style.height = "296px";
};

var startAnimation = function() {
  walkR();
};

function stopAnimation() {
  clearInterval(walkRight);
  clearInterval(walkLeft);
}

blackCat.addEventListener("mouseover", countdownTimer);
blackCat.addEventListener("mouseover", dance);
blackCat.addEventListener("mouseout", walk);
blackCat.addEventListener("mouseout", cancelTimer);
blackCat.addEventListener("click", explode);
blackCat.addEventListener("click", boomSound);
