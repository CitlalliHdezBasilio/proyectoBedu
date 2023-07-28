
document.addEventListener("keydown", function(event) {
    let globo = document.getElementById('globo')
    font = globo.style.fontSize.substring(0,2);
    if (event.key == "ArrowUp"){
        if((Number(font)) < 80){        
            globo.style.fontSize = (Number(font) + (Number(font)*0.1))  + "px";
        }    
        if((Number(font)) >= 80){        
            globo.innerText = "💥";
        }
    }else if (event.key == "ArrowDown"){
        if((Number(font)) > 20){        
            globo.style.fontSize = (Number(font) - (Number(font)*0.1))  + "px";
        } 
        globo.innerText = "🎈";
    }
});

function abriModal(){
    document.getElementById('modal-image').src = "https://picsum.photos/300/200";
    document.getElementById('modal').style.display = "inline";
    
}

function cerrar(){
    document.getElementById('modal').style.display = "none";
}

let divTab = document.getElementById('tab-panel');
//console.log(divTab.children);
for( hijo of divTab.children){
    let boton = document.createElement('button');
    const textnode = document.createTextNode("hola");
    boton.appendChild(textnode);
    document.insertBefore(boton, divTab);
    console.log(boton);
}