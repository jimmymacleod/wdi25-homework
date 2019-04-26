

//Capturing the element
let catimg = document.getElementById('cat');
catimg.style.left = '0px';

//Function to move the cat
const catWalk = function(){
  var oldStyle = parseInt(catimg.style.left);
  var newStyle = oldStyle + 10;
  catimg.style.left = newStyle + 'px';
  if(newStyle > 1500){
      oldStyle = '0px';
      catimg.style.left = '0px';
      };

  }


  //cat dance
  var catDance = function() {
    catimg.style.transform = 'rotateX(180deg)';
  };

  function setColor() {
      var x = document.body;
      x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
  }
  //cat reverse
  var catReverse = function() {
  catimg.style.transform = 'rotateY(180deg)';
  var oldStyle = parseInt(catimg.style.left);
  var newStyle = oldStyle + 10;
  catimg.style.left = newStyle + 'px';
  console.log(`inside catwalk`);
  if(newStyle > 1500){
      oldStyle = '0px';
      catimg.style.left = '0px';
      };
  };



  //Actual movements//
  //Cat walks left-right in the screen
  timerId = setInterval(catWalk, 50);
  document.addEventListener('click', function(){
    setTimeout(clearInterval(timerId), 200);
    var x = document.body;
        x.style.backgroundImage = "url('images/retro1.jpeg')";
        x.style.display = "block";
  });

   timerId = setInterval(catWalk, 50);
       document.addEventListener('click', function(){
       var x = document.body;
       x.style.backgroundImage = "url('images/retro1.jpeg')";
   });
