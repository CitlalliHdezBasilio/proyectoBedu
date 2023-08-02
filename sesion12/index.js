//ejemplo 1
const app = document.getElementById('app');

getImagesFromNasa()
.then(function (data) {

  //console.log(data);

  data.forEach(function (data) {
    const img = document.createElement('img');
    img.src = getImageUrl(data);
    img.alt = data.caption;

    app.appendChild(img);
  })
})

function getImagesFromNasa() {
  return fetch('https://epic.gsfc.nasa.gov/api/natural')
    .then(function (response) {
      return response.json();
    })
}

function getImageUrl(data) {
  /*
   * URL should look like this:
   * https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png
   */
  const baseImageUrl = 'https://epic.gsfc.nasa.gov/archive/natural';
  const date = data.date // Looks like 2020-06-19 02:33:19
    .substr(0, 10) // Get first 10 characters from string
    .split('-'); // Split year, month and day into an array

  return `${baseImageUrl}/${date[0]}/${date[1]}/${date[2]}/png/${data.image}.png`;
}


//ejemplo 2
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('button');

const results = document.getElementById('results');

searchButton.addEventListener('click', searchGIFs);

function searchGIFs() {
  const search = searchInput.value;

  if(search) {
    const formattedSearch = formatSearchString(search);
    const url = buildUrl(formattedSearch);

    return getGiphyResults(url)
      .then(function(gifs) {
        console.log(gifs)
        gifs.forEach(function(gif) {
          const img = document.createElement('img');
          img.src = gif.images.fixed_height.url;
          img.alt = gif.title;

          results.appendChild(img)
        })
      })
  }
}

function formatSearchString(search) {
  return search.replace(/ /g, '+');
}

function buildUrl (search) {
  const API_KEY = 'YOUR_API_KEY'; // Provided by GIPHY
  const baseUrl = 'http://api.giphy.com/v1/gifs/search';

  return `${baseUrl}?q=${search}&api_key=${API_KEY}&limit=9`;
}

function getGiphyResults(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.data
    })
    .catch(function(err) {
      console.log(err)
    })
}



//reto 1


//reto 2


//reto 3
