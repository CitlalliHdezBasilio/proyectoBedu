let divImagenes = document.getElementById('divImagenes');

function buscar(){
    let receta = document.getElementById('receta').value;
    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+receta)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data.meals;
    })
}
//console.log(buscar());
function buscarReceta(){
    buscar()
    .then(function (data) {
        data.forEach(function (data) {
          card(data);
        })
    })
    
}

function card(data){
    console.log(data);
    let html = document.createElement('div');
    html.setAttribute("class","col-md-4");
    html.style.padding = "10px";
    html.innerHTML = '<img src="'+data.strMealThumb+'" class="img-fluid" alt="imgReceta" title="Clic para ver la receta"  style="cursor:pointer;" onclick="abrirModal('+(JSON.stringify(data))+')">';
    divImagenes.appendChild(html);
    //console.log(html);
}

function abrirModal(data) {
    const myModal = new bootstrap.Modal('#exampleModal', {
      keyboard: false
    });
    const modalToggle = document.getElementById('exampleModal');
    myModal.show(modalToggle);
    console.log(data);
  }