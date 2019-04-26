$(document).ready(function(){

  const xhr = new XMLHttpRequest();

  const fetchGif = function(){

    xhr.onload = function(){
      let response = JSON.parse(xhr.responseText);
      console.log( response );

      $('<p>').html(response.text).appendTo("body");
      let data = response.data;

        data.forEach(function(gif){
          console.log(gif);

          let title = gif.title;
          let url = gif.url;
          let rating = gif.rating;
          let image = gif.images.downsized.url;

          $('#giphs').append("<h2>"+title+"</h2>");
          $('#giphs').append("<h3>"+url+"</h3>");
          $('#giphs').append("<h4>"+rating+"</h4>");
          $('#giphs').append("<img src="+image+"></img>");

        });//data.forEach

    };//xhr.onload

};//fetchGif

// $('#searchy').on('click', fetchGif);
const addGifName = function(){
  var gif = $('#giphName').val();
  xhr.open('GET', "http://api.giphy.com/v1/gifs/search?q="+gif+"&api_key={Insert your own}&limit=5");

  xhr.send();
  fetchGif();

};//addGifName

  $('#searchy').on('click', addGifName)

});//document.ready()
