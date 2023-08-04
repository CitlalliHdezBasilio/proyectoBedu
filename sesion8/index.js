let divImagenes = document.getElementById('divImagenes');

function buscar(id){
    let ruta, receta;
    if(id==1){
        ruta = 'https://www.themealdb.com/api/json/v1/1/random.php';
    }else if(id==0){
        receta = document.getElementById('receta').value;
        ruta = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+receta;
    }else{
        ruta = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id;
    }
    return fetch(ruta)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data.meals;
    })
}

function buscarReceta(id = 0){
    buscar(id)
    .then(function (data) {
        while (divImagenes.firstChild) {
            divImagenes.removeChild(divImagenes.firstChild);
        }
        data.forEach(function (data) {
          card(data);
        })
    })
}

function verUna(id){
    buscar(id)
    .then(function (data) {
        data.forEach(function (data) {
          if(data.idMeal == id){
            let titulo = document.getElementsByClassName('modal-title')[0],
            img = document.getElementById('imagenReceta'),
            list = document.getElementById('ingredientes'),
            procedimiento = document.getElementById('procedimiento'),
            vid1 = document.getElementById('video1')
            divVid = document.getElementById('divVideo');
            titulo.textContent = data.strMeal;
            img.src = data.strMealThumb;
            let llaves = Object.keys(data),
            lista = ""
            cont = 1;
            for(i of llaves){
                if(i.includes('strIngredient') && data[i]!=""){
                    let cantidad = data["strMeasure"+String(cont)];
                    lista += '<li>'+ cantidad + "  " + data[i] + '</li>';
                    cont++;
                }
            }
            list.innerHTML = lista;
            procedimiento.textContent = data.strInstructions;
            let nombreVideo = data.strYoutube.replace("watch?v=", "embed/")
            vid1.setAttribute("src", nombreVideo);
            if(nombreVideo!="")divVid.style.display = 'inline';
            //console.log(data);
          } 
        })
    })
}

function card(data){
    let html = document.createElement('div');
    html.setAttribute("class","col-md-4");
    html.style.padding = "10px";
    html.innerHTML = '<img src="'+data.strMealThumb+'" class="img-fluid" alt="imgReceta" title="Clic para ver la receta"  style="cursor:pointer;" onclick="abrirModal('+data.idMeal+')">';
    divImagenes.appendChild(html);
}

function abrirModal(id) {
    verUna(id);
    const myModal = new bootstrap.Modal('#exampleModal', {
      keyboard: false
    });
    const modalToggle = document.getElementById('exampleModal');
    myModal.show(modalToggle);
}
