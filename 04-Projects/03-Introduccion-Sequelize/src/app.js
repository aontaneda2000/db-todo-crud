const express = require("express");
const app = express();

//importacion conexion bdd
const db = require("./utils/database");
//importacion de modelos
const initModels = require("./models/initModels");
//importacion rutas
const movieRouter = require("./movies/movies.router");

//req body viene en formato json y esto nos permite acceder a el como si fuera un objeto de js normal
app.use(express.json());

const { port } = require("./config");

db.authenticate()
  .then(() => {
    console.log("DATABASE AUTENTICATE SUCCESFULLY");
  })
  .catch((err) => console.log(err));

db.sync()
  .then(() => {
    console.log("DATABASE SYNCED");
  })
  .catch((err) => console.log(err));

//Ejecutar init Models -> Campos de mi bdd
initModels();

app.use("/moviescontroller", movieRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "SERVER IS OK" });
});

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
