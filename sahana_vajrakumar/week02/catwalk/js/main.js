var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
var walkForwards = true;
function catWalk() {
  var currentLeft = parseInt(img.style.left);

  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
    img.style.webkitTransform ="scaleX(-1)";
    img.style.msTransform="scaleX(-1)";
    img.style.transform = "scaleX(-1)";
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
    img.style.webkitTransform ="scaleX(1)";
    img.style.msTransform="scaleX(1)";
    img.style.transform = "scaleX(1)";
  }

  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}
window.setInterval(catWalk, 50);
