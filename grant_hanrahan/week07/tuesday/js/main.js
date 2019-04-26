console.log('Giiiiiiiphy');
// $(document).ready(function(){

const xhr = new XMLHttpRequest();

const fetchGif = function(){



  xhr.onload = function(){
    let response = JSON.parse( xhr.responseText );

    let data = response.data;
    // console.log(data);
    let slug = response.data.slug;
    // console.log(slug);

    data.forEach(function(gif){
      console.log(gif);
      let title = gif.title;
      // console.log(slug)
      let url = gif.url;
      // console.log(url)
      let rating = gif.rating;

      let image = gif.images.downsized.url;

      let h2 = document.createElement('h2');
      h2.innerHTML = `title: ${title}`
      document.body.appendChild(h2);

      let h3 = document.createElement('h3');
      h3.innerHTML = `url: ${url}`
      document.body.appendChild(h3);

      let h5 = document.createElement('h5');
      h5.innerHTML = `rating: ${rating}`
      document.body.appendChild(h5);

      let img = document.createElement('img');
      img.src = `${image}`
      document.body.appendChild(img);

    });

  };



    // xhr.open('GET', "http://api.giphy.com/v1/gifs/search?q=grumpy&cat&api_key={Insert your own}&limit=5");
    xhr.send();

    // giphy = document.getElementById('giphName').value
    // searcher(gName);

};

//   var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");

const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', searchy);
button.addEventListener('click', fetchGif);
