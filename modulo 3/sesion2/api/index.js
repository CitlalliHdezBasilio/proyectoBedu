const express = require("express");
const app = express();

const lista = [
    {id: 1,
    name: "leche"
    },
    {id: 2,
    name: "galletas"
    },
    {id: 3,
    name: "pan"
    },
];

app.get("/getAll", function(request, response) {
    //convierte los objetos js a json
    response.json(lista);
});

//como recibir parametros:
//1.- mediante de url (usando ':' )
//2.- mediante el query string (url):
//3.- mediante encabezados:
//4.- mediante del body

app.get("/getUno/:id", function(request, response){  //1
    const id = request.params.id;
    let res = lista.find(x => x.id.toString() == id);
    response.json(res);

});

app.listen(8080, function () {
	console.log("Escuchando...");
});

