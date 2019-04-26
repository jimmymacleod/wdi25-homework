

$(document).ready(function(){
let $h1title = $('h1').html();
$('h1').html($h1title);

let $catimage = $('#cat');


const catTurnOver = function(){
  $catimage.css({'transform': 'rotateY(180deg)'});
  console.log(`cat turn over`);
};

const catTurnOverBack = function(){
  $catimage.css({'transform': 'rotateY(0deg)'});
  console.log(`cat turn over`);
};

const animateTen = function(){
  $catimage.animate({
    'top' : '30%',
    'left' : '42%',
  }, 'slow', function(){
    console.log(`animation9 over`);
    console.log(`animation8 over`);
    catTurnOver();
    $catimage.animate({
      'top' : '30%',
      'left' : '36%',
      }, 'slow', function(){
    });
    $catimage.animate({
      'top' : '20%',
      'left' : '36%',
      }, 'slow', function(){
        catTurnOverBack();//->
        $catimage.animate({
          'top' : '20%',
          'left' : '47%',
          }, 'slow', function(){
            $catimage.animate({
              'top' : '30%',
              'left' : '47%',
              }, 'slow', function(){
                $catimage.animate({
                  'top' : '30%',
                  'left' : '52%',
                  }, 'slow', function(){
                    $catimage.animate({
                      'top' : '20%',
                      'left' : '52%',
                      }, 'slow', function(){
                        $catimage.animate({
                          'top' : '20%',
                          'left' : '67%',
                          }, 'slow', function(){
                            $catimage.animate({
                              'top' : '30%',
                              'left' : '67%',
                              }, 'slow', function(){
                                catTurnOver()

                                $catimage.animate({
                                  'top' : '30%',
                                  'left' : '61%',
                                  }, 'slow', function(){
                                    $catimage.animate({
                                      'top' : '50%',
                                      'left' : '61%',
                                      }, 'slow', function(){
                                        $catimage.animate({
                                          'top' : '50%',
                                          'left' : '56%',
                                          }, 'slow', function(){
                                            catTurnOverBack();
                                            $catimage.animate({
                                              'top' : '60%',
                                              'left' : '56%',
                                              }, 'slow', function(){
                                                $catimage.animate({
                                                  'top' : '60%',
                                                  'left' : '66%',
                                                  }, 'slow', function(){
                                                    console.log(`CAT IS OUT`);
                                                    catCelebrate();
                                                });
                                            });

                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

  })
};

const animateNine = function(){
  $catimage.animate({
    'top' : '40%',
    'left' : '42%',
    }, 'slow', function(){
    console.log(`animation9 over`);
    animateTen();

  })
};

const animateEight = function(){
  $catimage.animate({
    'top' : '50%',
    'left' : '37%',
    }, 'slow', function(){
    console.log(`animation8 over`);
    $catimage.animate({
      'top' : '50%',
      'left' : '42%',
      }, 'slow', function(){
      console.log(`animation9 over`);
    });
    animateNine();
  })

};
const animateSeven = function(){
  $catimage.animate({
    'top' : '60%',
    'left' : '37%',
    }, 'slow', function(){
    console.log(`animation7 over`);
    animateEight();
  })

};
const animateSix = function(){
  $catimage.animate({
    'top' : '60%',
    'left' : '22%',
    }, 'slow', function(){
    console.log(`animation6 over`);
    catTurnOverBack();
    animateSeven();
  })

};

const animateFive = function(){
  $catimage.animate({
    'top' : '50%',
    'left' : '22%',
    }, 'slow', function(){
    console.log(`animation5 over`);
    animateSix();
  })

};

const animateFour = function(){

  $catimage.animate({
    'top' : '50%',
    'left' : '27%',
    }, 'slow', function(){
    console.log(`animation4 over`);
    catTurnOver();
    animateFive();
  })

};
const animateThree = function(){
  $catimage.animate({
    'top' : '40%',
    'left' : '27%',
    }, 'slow', function(){
    console.log(`animation3 over`);
     animateFour();
  })

};

const animateTwo = function(){
  $catimage.animate({
    'top' : '40%',
    'left' : '22%',
     }, 'slow', function(){
    console.log(`animation2 over`);
    animateThree();
  })
};

// $catimage.animate({'left':'400px'}, 'slow', function(){
//   console.log(`animation1 over`);
//   animateTwo()
// });
$catimage.animate({
        'width':'50px',
        'height': '50px',
        'top' : '15%',
        'left' : '22%',
      }, 'slow', function(){
    console.log(`animate small over`);
    animateTwo();
  //catCelebrate();
  });


const catCelebrate = function(){
  $catimage.animate({
          'top' : '70%',
          'left' : '66%',
        }, 'slow', function(){
    });

  $catimage.attr('src','images/thin_cat.png');//happy cat face
  $catimage.animate({
          'width':'200px',
          'height': '200px',
          'top' : '70%',
          'left' : '66%',
        }, 'slow', function(){
      animateGifDance();
    });

};

const animateGifDance = function(){
  $catimage.attr('src','https://i.pinimg.com/originals/ab/b4/72/abb47255a3fe6e109b2cfb1e54ab144d.jpg');//happy cat dance
  $('#the_maze').attr('src', '');
  $('body').attr('background-image', 'images/retro1.png')
  $catimage.animate({
          'width':'600px',
          'height': '600px',
          'top' : '20%',
          'left' : '20%',
        }, 'slow', function(){
      animateGifDance();
    });

};







});//ready function
