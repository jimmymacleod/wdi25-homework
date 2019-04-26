let img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
let walkForwards = true;
document.body.style.backgroundImage = "url('https://static3.bigstockphoto.com/6/9/5/large2/5967712.jpg')"
let catWalk = function() {
  let currentLeft = parseInt(img.style.left);


// to reverse the cat
  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
    img.style.webkitTransform ="scaleX(-1)";
    img.style.msTransform="scaleX(-1)";
    img.style.transform = "scaleX(-1)";
  }

  //to keep the cat walking

  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
    img.style.webkitTransform ="scaleX(1)";
    img.style.msTransform="scaleX(1)";
    img.style.transform = "scaleX(1)";
  }


//cat walk
  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';

  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}
window.setInterval(catWalk, 50);
