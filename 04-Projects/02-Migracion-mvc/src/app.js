const express = require("express");

const app = express();
app.use(express.json());

//importacion de ruta de usuario
const usersRouter = require("./users/users.router");

app.get("/", (req, res) => {
  res.status(200).json({ message: "SERVER IS OK" });
});

app.use("/", usersRouter);

app.listen(9000, () => {
  console.log("Server started at 9000");
});
