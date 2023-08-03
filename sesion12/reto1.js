// falta probar
const app = document.getElementById('app');

function getRandomInt(max) { //obetern numero aleatorios para ver 4 registros al azar
    return Math.floor(Math.random() * max);
}

function getImages() {  //lee los elementos del repositorio
    return fetch('https://api.github.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {     //devuelve sólo los primeros 4 registros
        let entero = getRandomInt(97);
        return data.slice(entero, (entero+3))
    })
}

getImages()
.then(function (data) {
    data.forEach(function (data) {
      //console.log(data);
      card(data);
    })
})

let divCard = document.getElementById('app');

function card(data){
    let html = document.createElement('div');
    html.setAttribute("class","card");
    html.innerHTML = '<img src="'+data.avatar_url+'" alt="..."><h2>'+data.login+'</h2>';
    let html2 =  '<div class="accordion" id="accordionPanelsStayOpenExample">';
    html2 += '<div class="accordion-item">';
    html2 += '  <h2 class="accordion-header">';
    html2 += '    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">';
    html2 += '      Repositorios';
    html2 += '    </button>';
    html2 += '  </h2>';
    html2 += '  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">';
    html2 += '    <div class="accordion-body">';
    ////aqui van los repos
    html2 += '    </div>';
    html2 += '  </div>';
    html2 += '</div>';
    html2 += '</div>';
    html.innerHTML += html2;
    getRepos(data.repos_url);
    html.innerHTML += '<a href="'+data.html_url+'" target="blank" class="button">GitHub</a>';
    divCard.appendChild(html);
    //console.log(html);
}


function getRepos(url){
    getRepos1(url)
    .then(function (data) {
        data.forEach(function (data) {
          console.log(data);
          let html = document.createElement('a');
          html.setAttribute("href","aqui va el enlace del repo.........");
          html.textContent = "aqui va el nombre del repo........";
          let div = document.getElementsByName('accordion-body');
          div.appendChild(html);
        })
    })

}

function getRepos1(url){  //lee los elementos del repositorio
    return fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {     //devuelve sólo los primeros 5 registros
        return data.slice(0, 5)
    })
}