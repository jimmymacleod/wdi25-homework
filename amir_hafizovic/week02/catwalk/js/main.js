let cat = document.getElementsByTagName('img')[0];
let returnKitty;
let walkKitty;
cat.style.left = '0px';
cat.style.transform = 'scaleX()';
//cat.style.width = '296'

let kittyStart = function(){
  let oldLeft = parseInt(cat.style.left);

  if ((oldLeft + 296) > window.innerWidth) {
    console.log('executed');
    cat.style.transform = 'scaleX(-1)';
    window.clearInterval(walkKitty);

    returnKitty = window.setInterval(walkBack, 100);
    // if (parseInt(cat.style.left) < 500){

    // }
  }
  // Walking right
  let newLeft = oldLeft + 10;
  cat.style.left = newLeft + 'px';
};

walkKitty = window.setInterval(kittyStart, 100);

const walkBack = function() {
  if (parseInt(cat.style.left) < 0){
    console.log('executed1');
    window.clearInterval(returnKitty);
    cat.style.transform = 'scaleX(1)';
    console.log('executed3');
    walkKitty = window.setInterval(kittyStart, 100);

        console.log('executed4');
        //window.clearInterval(kittyStart);
        // cat.style.transform = 'scaleX(1)';
        // walkKitty = window.setInterval(kittyStart, 100);

  }


  // Walking left
  let oldLeft = parseInt(cat.style.left);
  let newLeft = oldLeft - 10;
  cat.style.left = newLeft + 'px';
    console.log('executed2');
};
