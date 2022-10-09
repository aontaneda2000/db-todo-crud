const express = require("express");

const app = express();

//convierte json a js
app.use(express.json());

//importacion de todas las rutas
const todoRouter = require("./users/users.router");

app.use("/", todoRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "SERVER IS OK" });
});

app.listen(8000, () => {
  console.log("Server started at 8000");
});
