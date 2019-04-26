
let $h1title = $('h1').html();
$('h1').html($h1title)
$h1title = "THE LEFT CAT";
let $catimage = $('img#cat');
let dropCat = 0;
let upCat = 0;
let bounceCat = 0;
let catCorners = 0;
let catRotate = 0;

const changePic = function(){
$('img').attr("src", "images/scared_cat.png");
};

  for( let i = 0; i < 3; i++ ){
    $catimage.animate({'left':'0px'}, 'slow');
    $catimage.animate({'left':$(window).innerWidth()},function(){
          $catimage.attr('src', 'images/thin_cat.jpeg');
        },
     );
    console.log($(window).innerWidth());
    dropCat = 1;
  }


if(dropCat){
  $catimage.animate({'bottom':'0px'});
  for( let i = 0; i < 3; i++ ){
    $catimage.animate({'left':'0px'}, 'slow');
    $catimage.animate({'left':$(window).innerWidth()}, 'slow');


    dropCat = 0;
    upCat = 1;
}
};

if(upCat){
  $catimage.animate({'left':'0px'});
  $catimage.animate({'top':'0px'});
  for( let i = 0; i < 3; i++ ){
    $catimage.animate({'left':'0px'}, 'slow');
    $catimage.animate({'left':$(window).innerWidth()}, 'slow', function(){
    $('body').attr("backgroundImage", "ims/retro1.png");
    });
    upCat = 0;
    bounceCat = 1;
}
};


if(bounceCat){
  let jpx = 0;
  console.log(`bounceCathhhhhhh`);
  $catimage.animate({'left':'0px'});
  $catimage.animate({'top': $(window).innerHeight()}, changePic);

  for( let i = 0; i < 3; i++ ){
    $catimage.animate({'top':'0px'});
    $catimage.animate({'top': $(window).innerHeight()});
  }
   jpx = 400+'px';
  console.log(`jpixels value : ${jpx}`);
  $catimage.animate({'left': jpx});
  for( let i = 0; i < 3; i++ ){
    $catimage.animate({'top':'0px'});
    $catimage.animate({'top': $(window).innerHeight()});
  }
   jpx = 800+'px';
  console.log(`jpixels value : ${jpx}`);
  $catimage.animate({'left': jpx});
  for( let i = 0; i < 3; i++ ){
    $catimage.animate({'top':'0px'});
    $catimage.animate({'top': $(window).innerHeight()});
  }
  bounceCat = 0;
  catCorners = 1;
  catRotate = 1;

};


if(catCorners){
  $catimage.animate({'top':'0px'});
    $catimage.animate({'left':'0px'}, 'slow');
    $catimage.animate({'left':$(window).innerWidth()}, 'slow');
    //if(catRotate)$catimage.css({'transform' : 'rotate(90deg)'});
    catCorners = 0;
};
