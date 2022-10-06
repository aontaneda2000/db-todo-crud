//Require: Recibe string y se agrega una libreria: express
//constante express que require de la libreria express
const express = require("express");

/* app: Contiene todo de nuestra aplicacion */
//constante app ejecutara la constante express
const app = express();

app.post("/", (request, response) => {
  response.status(200).json({
    message: "Haciendo una peticion tipo post",
    verb: request.method,
  });
});

app.put("/", (request, response) => {
  response.status(200).json({
    message: "Haciendo una peticion tipo put",
    verb: request.method,
  });
});

//endpoint
app.get("/", (request, response) => {
  //request acepta informacion de la peticion
  //
  console.log(request.method);
  //Contiene toda la inf de lo que se pase al cliente o al front
  // response.status(418).send("<h1>Hola</h1>");
  //genera json
  response.status(418).json({ message: "gen 16" });
});

//Definir con metodo "listen" donde escuchara las peticiones en especifico de un puerto
//puertos: 8000 app web
app.listen(8000, () => {
  console.log("Server started at port 8000");
});

// HTTP
// verbos
//** GET
//** POST -> Crea un nuevo usuario
//** PUT -> Modifica un usuario pero pide toda la inf
//** PATCH -> Modifica un usuairo pero no pide toda la inf
//** DELETE

// status http.cat: Rangos que pueden recibir
//* 100 : repsuestas informativas: casi no se ven
//* 200: Status Exitosos
//* 300: Manejan configuracion del server
//* 400: Errores
//* 500: Errores

// headers: autenticacion y de tipos de datos
