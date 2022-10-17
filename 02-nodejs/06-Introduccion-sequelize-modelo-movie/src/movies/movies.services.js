//importacion controlador de movies
const moviesControllers = require("./movies.controller");

//servicios
const getAllMovies = (req, res) => {
  //controlador ejecuta que trae toda la informacion retorna una promesa porque una funcion asincrona
  moviesControllers
    .getAllMovies()
    //Resolver promesa: data viene de la inf que retorna una vez que se resuelve de manera exitosa
    .then((data) => {
      //respuesta del servidor.
      res.status(200).json(data);
    })
    .catch((err) => {
      //manejo de errores
      res.status(400).json({ message: err.message });
    });
};

//Las funciones llevan parametros en orden porque si no se coloca uno tomara el otro por defecto.

// Funcion  Servicio crear movie : Cierta interaccion con el usuario
const postMovie = (req, res) => {
  const data = req.body; // tambien se puede utilizar destructuracion.
  //comprobar que todos los datos no son falsys
  if (data.name && data.genre && data.duration && data.releaseDate) {
    //ejecutar controlador
    moviesControllers
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

//Funcion servicio obtener id de movie
//acceder al request para los params
const getMovieById = (req, res) => {
  //obtener id de los parametros
  const id = req.params.id;

  //Llamar controlador en especifico para este servicio
  moviesControllers
    .getMovieById(id)
    .then((data) => {
      //CONDICIONAL SI NO ENCUENTRA EL ID POR THUNDER CLIENT
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json({ message: "INvalid ID" });
      }
    })
    //404 NOT FOUND: err.message genera sequelize
    .catch((err) => res.status(404).json({ message: err.message }));
};

//=========SERVICIO EDITAR ======= Modificacion parcial
const patchMovie = (req, res) => {
  //Etraer id de los parametros
  const id = req.params.id;
  //obtener informacion mediante destructuracion porque estos SERAN los unicos datos que se permitira modificar al usuario
  const { name, genre, duration, releaseDate } = req.body;

  //Ejecutar controlador y Se pasa un objeto para evitar que hagan modificaciones que no se desea que tenga mi bddd
  moviesControllers
    .editMovie(id, { name, genre, duration, releaseDate })
    //evitar declaras dos veces res por funcion y promesa
    .then((response) => {
      //[0] response es un arreglo y para acceder [0]
      if (response[0]) {
        res
          .status(200)
          .json({ message: `Movie with id: ${id} edited succesfully` });
      } else {
        res.status(200).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

/* =========servicio delete movies ======== */
const deleteMovie = (req, res) => {
  const id = req.params.id;
  moviesControllers
    .deleteMovie(id)
    .then((response) => {
      if (response) {
        //HTTPS: 204 NOT CONTENT no es necesario pasar nada en json
        res.status(204).json();
      } else {
        res.status(400).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//Servicio put editar: require todas las columnas
const putMovie = (req, res) => {
  const id = req.params.id;
  //Columnas necesarias para poder modificar
  const { name, genre, duration, releaseDate } = req.body;

  //If validar datos: Si existe name o si es un valor truthy: signigica q son funcionales
  if (name && genre && duration && releaseDate) {
    //Ejecutar controlador que genera un promesa y muestra un arreglo de las entidades que se modificaron.
    moviesControllers
      .editMovie(id, { name, genre, duration, releaseDate })
      .then((response) => {
        //If valida si una pelicula existe
        if (response[0]) {
          res
            .status(200)
            .json({ message: `Movie with edit ID: ${id}, edite succesfully` });
        } else {
          res.status(404).json({ message: "Invalid ID" });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "Missing data",
      fields: {
        name: "string",
        genre: "string",
        duration: "integer",
        releaseDate: "YYYY/MM/DD",
      },
    });
  }
};

//exportar servicios
module.exports = {
  getAllMovies, //obtener todo
  getMovieById, //obtener id
  postMovie, //crear
  patchMovie, //actualizar
  putMovie,
  deleteMovie,
};
