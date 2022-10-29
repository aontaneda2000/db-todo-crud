//Dependencies
const express = require("express");
//conexion bdd
const db = require("./utils/database");

//Initial configs
const app = express();

//files
const { port } = require("./config");

//routes
const usersRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
//importacion modelos
const initModels = require("./models/initModels");

//convierte json a js
app.use(express.json());

//autenticacion
db.authenticate()
  .then(() => {
    console.log("Database Authenticated");
  })
  .catch((err) => {
    console.log(err);
  });

//sincronizacion
db.sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log(err);
  });

//ejecutar modelos
initModels();

//middlewars: recibe tambien next: Pasa a la siguiente funcion
app.get("/", (req, res) => {
  res.status(200).json({
    message: "OK",
    users: `localhost: ${port}/api/v1/users`,
  });
});

//versionar aplicaciones de la URL
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
