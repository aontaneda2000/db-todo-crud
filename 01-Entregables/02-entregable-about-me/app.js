const express = require("express");

const app = express();
/* -------------- GET -------------- */
app.get("/me", (req, res) => {
  res
    .status(200)
    .json({ nombre: "Aaron", edad: 22, pais: "Ecuador", verb: req.method });
});

/* -------------- POST -------------- */

app.post("/hobbies", (req, res) => {
  res
    .status(200)
    .json({ 1: "Calisthenics", 2: "Programming", 3: "Gym", verb: req.method });
});
/* -------------- patch -------------- */

app.patch("/goals", (req, res) => {
  res.status(200).json({ 1: "Communication", 2: "Teamwork", verb: req.method });
});
/* -------------- put -------------- */

app.put("/business", (req, res) => {
  res
    .status(200)
    .json(["Amazon", "Globant", "Mercado Libre", { verb: req.method }]);
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
