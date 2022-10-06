const express = require("express");

//Almacena toda la aplicacion
const app = express();

//verbos http: get, put , delete,

//localhost:9000/hola

//get: recibe un string "endpoint" y un callback: resquest y response
//Ruta especifica a la cual el front va a ser una peticion y recibira el json
app.get("/hola", (request, response) => {
  //data. Manda la respuesta (response)
  response.json({
    message: "Hola mundo",
  });
});

//recibir peticiones en el puerto: y recibe un callback
app.listen(9000, () => {
  //Verificar en consola el msm
  console.log("Server starte at port 9000");
});
