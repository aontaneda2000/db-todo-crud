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

const getMovieByIds = (req, res) => {
  const id = req.params.id;

  moviesController
    .getMovieById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "INVALID ID" });
      }
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};

const deleteMovie = (req, res) => {
  const id = req.params.id;
  moviesController
    .deleteMovie(id)
    .then((data) => {
      res.status(200).json({ message: "el usuario ha sido eliminado" + data });
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};
// ACTUALIZAR PELICULA CAMPO ESPECIFICO
const patchMovie = (req, res) => {
  const id = req.params.id;

  const { name, genre, duration } = req.body;

  moviesController
    .editMovie(id, { name, genre, duration })
    .then((response) => {
      if (response[0]) {
        res
          .status(200)
          .json({ message: `Movie with edit: ${id}, edited successfully` });
      } else {
        res.status(200).json({ message: "INVALID ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

//ACTUALIZAR TODOS LOS CAMPOS OBLIGATORIOS

const putMovie = (req, res) => {
  const id = req.params.id;

  const { name, duration, releaseDate } = req.body;

  if (name && duration && releaseDate) {
    moviesController
      .editMovie(id, { name, duration, releaseDate })
      .then((response) => {
        if (response[0]) {
          res
            .status(200)
            .json({ message: `Movie edit id ${id}, edited succesfully` });
        } else {
          res.status(200).json({ message: err.message });
        }
      })
      .catch();
  } else {
    res.status(400).json({
      message: "Missing data",
      fields: {
        name: "string",
        duration: "string",
        releaseDate: "integer",
      },
    });
  }
};

module.exports = {
  getAllMovies,
  postMovie,
  getMovieByIds,
  deleteMovie,
  patchMovie,
  putMovie,
};
