let randy = function(max){
  return Math.ceil(Math.random()*max);
}

// function to generate my div

let addDiv = function(){
  let size = randy(200);
  $('<div>').css({
    position: 'absolute',
    top: randy(window.innerHeight) + 'px', // 975
    left: randy(window.innerWidth) + 'px', // 975
    width: size + 'px',
    height: size + 'px',
    borderRadius: randy(size/2) + 'px',// css: border-radius
    backgroundColor: `rgb(${randy(255)}, ${randy(255)}, ${randy(255)})`
  }).appendTo('body').fadeOut(2000, function(){
    $(this).remove()
  })
  requestAnimationFrame(addDiv)
} // addDiv


$(document).ready(function(){
  // addDiv()
  // setInterval(addDiv, 50)
  addDiv()

})
