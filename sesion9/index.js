console.log(document.getElementsByTagName('img').length);

for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
    let html = document.createElement("p");
    html.innerHTML = document.getElementsByTagName('img')[i].alt;
    let aReemplazar = document.getElementsByTagName('img')[i];
    let padre = aReemplazar.parentNode;
    padre.replaceChild(html, aReemplazar);
    i--;
    console.log([i], html, aReemplazar, padre);
}


const data = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let cadena = "";
for(dato of data){
    cadena +=  "<tr> <td>"+dato.name+"</td><td style='text-alignt-center'>"+dato.height+"</td><td>"+dato.place+"</td> </tr>"; 
}

document.getElementById('cuerpoTabla').innerHTML = cadena;