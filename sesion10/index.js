//ejemplo 1

const title = document.getElementById('titulo'),
red = document.getElementById('red'),
blue = document.getElementById('blue'),
black = document.getElementById('black'),
btn = document.getElementById('cliqueable'),
title2 = document.getElementById('titulo2'),
text = document.getElementById('texto');

red.addEventListener("click", () => title.style.color = "red");
blue.addEventListener("click", () => title.style.color = "blue");
black.addEventListener("click", () => title.style.color = "black");

btn.addEventListener("mousedown", 
    (event)=>{
      console.log(MouseEvent);  
      if( event.button == 0){
        console.log("izquierdo");
      }else if( event.button == 1){
        console.log("centro");
      }else if( event.button == 2){
        console.log("derecha");
      }
});


text.addEventListener("input",
    (event) => {
        title2.textContent = event.target.value;
});


window.addEventListener("keydown",
 (event)=>{
    if(event.key == "Enter"){
        document.getElementById('divColor').style.background = "blue";
    }
    if(event.key == "Enter" && event.ctrlKey ){
        document.getElementById('divColor').style.background = "orange";
    }
});


window.addEventListener("keyup",
    (event)=>{
    if(event.key == "Enter"){
        document.getElementById('divColor').style.background = "";
    }
});



//reto 1

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


//reto 2

function abriModal(){
    document.getElementById('modal-image').src = "https://picsum.photos/300/200";
    document.getElementById('modal').style.display = "inline";
    
}

function cerrar(){
    document.getElementById('modal').style.display = "none";
}


//reto 3

function createTabs(node) {
    const tabs = Array.from(node.children).map(function (node) {
      const button = document.createElement("button")
      button.textContent = node.getAttribute("data-tabname")
  
      const tab = {
        node: node,
        button: button
      }
  
      button.addEventListener("click", function () {
        return selectTab(tab)
      })
  
      return tab;
    })
  
    const tabList = document.createElement("div")
  
    for (const tab of tabs) {
      tabList.appendChild(tab.button)
    }
  
    node.insertBefore(tabList, node.firstChild)
  
    function selectTab(selectedTab) {
      for (const tab of tabs) {
        const selected = tab === selectedTab
        tab.node.style.display = selected ? "" : "none"
        tab.button.style.color = selected ? "red" : ""
      }
    }
  
    selectTab(tabs[0])
  }
  
  createTabs(document.querySelector("#tab-panel"));