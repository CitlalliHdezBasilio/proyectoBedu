const app = document.getElementById('app');

function getImagesFromNasa() {
    return fetch('https://epic.gsfc.nasa.gov/api/natural')
    .then(function (response) {
        return response.json();
    })
}