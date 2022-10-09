const express = require("express");

const app = express();

// importacion de rutas

const todoRouter = require("./todos/todos.router");

/* 
rutas => paths y verbos http
controladores => logica y acciones referentes ala DB
servicios => todo lo relacionado al req yres manejo de errores

*/

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "SERVER IS OK!" });
});

//Funcionalidad que tiene express y tiene muchas funciones, admite peticiones de tipo get etc.
//Cuando no importa de que tipo sera la peticion se utiliza app.use
app.use("/", todoRouter); // porque a ala raiz? porque en el archivo rutas ya se esta definiendo cual seran las rutas que se estara recibiendo peticiones.

app.listen(8000, () => {
  console.log("Server started at 8000");
});
