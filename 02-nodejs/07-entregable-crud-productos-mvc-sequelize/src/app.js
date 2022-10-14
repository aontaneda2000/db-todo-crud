const express = require("express");

const app = express();

//Importacion de initModels
const initModels = require("./models/initModels");

//DESTRUCTURACION:
const { port } = require("./config");

//importacion de conexion a la db
const db = require("./utils/database");

//importacion rutas
const productsRouter = require("./products/products.router");

//autenticacio  db
db.authenticate()
  .then(() => {
    console.log("DATABASE AUTHENTICATE SUCCESFULLY");
  })
  .catch((err) => {
    console.log(err);
  });

//sincronizacion de tablas y columnas de la bd
db.sync()
  .then(() => {
    console.log("DATABASE SYNCED");
  })
  .catch((err) => {
    console.log(err);
  });

//Ejecutar importacion de modelos
initModels();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is OK" });
});

app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Started server at ${port}`);
});
