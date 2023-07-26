console.log(document.getElementsByTagName('img').length);

for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
    //console.log( document.getElementsByTagName('img')[i]);
    //console.log( document.getElementsByTagName('img')[i].alt);
    let html = document.createElement("p");
    html.innerHTML = document.getElementsByTagName('img')[i].alt;
    let aReemplazar = document.getElementsByTagName('img')[i];
    let padre = aReemplazar.parentNode;
    
    padre.replaceChild(html, aReemplazar);
    //console.log(html, aReemplazar, padre);
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

let elementos = data.forEach(elemento =>  "<tr> <td>"+elemento.name+"</td><td style='text-alignt-center'>"+elemento.height+"</td><td>"+elemento.place+"</td> </tr>" );

console.log(elementos);

document.getElementsByTagName('tbody').innerHTML = elementos;