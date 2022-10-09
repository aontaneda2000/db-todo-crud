const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "SERVER IS OK !" });
});

app.listen(8000, () => {
  console.log("Server started at 8000 - debugging");
});
