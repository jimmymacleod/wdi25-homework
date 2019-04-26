// //
// // // $(document).ready(() => {
// // let catMovingRight = true;
// const $catLeft = $('#catWalk');
// $catLeft.css('left', '200px');
//
// // let startLeft = $('#catWalk').css({"left:" : "240px"});
// // startLeft.style.left = "0px";
//
//
//
// const $moveRight = function(){
//
//
//   if( catMovingRight && (startLeft > (window.innerWidth-catLeft.width))){
//     catMovingRight = false;
//
//     }
//   if(!catMovingRight && (startLeft <= 0)){
//     catMovingRight = true;
//     catLeft.animate({ "left": "+=15px"})
//   }
//
//
//
//
// };
// window.setInterval($moveRight, 150)
// //


$(document).ready(function() {



       const catMove = function(){
         $slyCat.css('right', startLeft);

         $slyCat.animate({right: -50}, 7000, 'linear').animate({left: +50}, 5000, 'linear')
         // $slyCat.animate({bottom: -100}, 7000, 'linear')
         // $slyCat.animate({left: +50}, 5000, 'linear')
         // $slyCat.animate({top: +100}, 5000, 'linear')


         // $slyCat.css({'rotate:' '180(deg)'})
       };

       // let catPos =

        const screenWidth = $(document).width();
        const screenHeight = $(document).height();
        let startLeft = screenWidth;
        let startTop = screenHeight;
        let $slyCat = $('#catWalk')
        $('#catWalk').funText(100, 'reverseRainbow');
        catMove();
        setInterval(function() {
          catMove();
        }, 3000);

      });

      // $(window).on('unload', function(){
      //
      // })



// const $moveRight = function(){
//   $('#catWalk').animate({left:"-=15"}, 50,"swing", "$moveLeft");
// }

// $moveRight();
//
// let slyCat = document.getElementById('catWalk');
// let catMovingDown = true;
// let catMovingRight = true;
// slyCat.style.left = "0px";
// slyCat.style.top = "0px";
//
// const catStrut = function() {
//   // let catMovingRight = false;
//   const startLeft = parseInt(slyCat.style.left);
//   // let moveLeft;
//   const startTop = parseInt(slyCat.style.top);
//   let walkRight;
  //
  // if( catMovingRight && (startLeft > (window.innerWidth-slyCat.width))){
  //   catMovingRight = false;
  //   }
  // if(!catMovingRight && (startLeft <= 0)){
  //   catMovingRight = true;
  // }
  //
  // if( catMovingDown && (startTop >(window.innerHeight-slyCat.height))){
  //   catMovingDown = false;
  // }
  // if(!catMovingDown && (startTop <= 0)){
  //   catMovingDown = true;
  // }
  //
  // if(catMovingRight && catMovingDown){
  //   // slyCat.style.left = (left + 10) + 'px';
  //   // slyCat.style.top = (top + 15) + 'px';
  //   slyCat.style.left = (startLeft + 15) + "px";
  //   slyCat.style.top = (startTop + 10) + "px";
  // } else {
  //   // slyCat.style.left = (left - 10) + 'px';
  //   // slyCat.style.top = (top - 15) + 'px';
  //   slyCat.style.left = (startLeft - 15) + "px";
//     slyCat.style.top = (startTop - 10) + "px";
//   }
//
//   if( startLeft > (window.innerWidth) / 2 && startLeft < (window.innerWidth / 2) + 5){
//     catMovingRight = true;
//     clearInterval(walkRight);
//     crazy();
//   }
// }
// window.setInterval(catStrut, 50);


// });
