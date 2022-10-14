//STATUS DE LA APLICACION
const express = require("express");

// 4to paso importar initModels
const initModels = require("./models/initModels");

//Destructuracion para acceder a los propiedades del objeto config
const { port } = require("./config");

//Importacion de rutas
const moviesRouter = require("./movies/movies.router");

//1erapaso: importacion  conexion a la bdd
const db = require("./utils/database");

//ejecutar libreria express
const app = express();

const PORT = 9000;

//2do paso: Autenticacion con promesas
db.authenticate()
  //Base de datos conectada con exito.
  .then(() => {
    console.log("DB AUTHENTICATE SUCCESFULY");
  })
  .catch((err) => {
    console.log(err);
  });

//3erpaso: sincronizacion de tablas con la bdd
db.sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log(err);
  });

//5 paso ejecutar init models
initModels();

//req body viene en formato json y esto nos permite acceder a el como si fuera un objeto de js normal
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "SERVER IS OK" });
});
//use: sirve para acceder a cualquier tipo de peticines como get, post.
app.use("/movies", moviesRouter);

// puertos disponibles 35535
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
