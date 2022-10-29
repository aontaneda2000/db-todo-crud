const moviesController = require("./movies.controller");

const getAllMovies = (req, res) => {
  moviesController
    .getAllMovies()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
};
// Funcion  Servicio crear movie : Cierta interaccion con el usuario
const postMovie = (req, res) => {
  const data = req.body; // tambien se puede utilizar destructuracion.
  //comprobar que todos los datos no son falsys

  if (data.name && data.duration && data.releaseDate) {
    //ejecutar controlador
    moviesController
      .createMovie(data)
      .then((response) => {
        //Created 201: Algo se creo en el servidor
        res.status(201).json(response);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Missing data" });
  }
};
module.exports = {
  getAllMovies,
  postMovie,
};
