//ORM
//Diferentes metodos de sequelize:
const uuid = require("uuid");
const Movies = require("../models/movies.models"); //importar modelo

//Funcion asincrona (async) porque se hara una peticion a la bddd y no podemos determinar cuanto tiempo va a tardar en traer la informacion.

//controlador obtener informacion
const getAllMovies = async () => {
  //Similar a Select * from movies
  const data = Movies.findAll(); // Obtener todos los usuarios
  return data;
};

//Genera arreglo vacio porque en la bdd no hay informacion
// getAllMovies()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//controlador crear informacion, recibe informacion de la bdd
const createMovie = async (data) => {
  //1 alternativa para guardar en bdd.
  //Pelicula nueva va a ser igual a mandar lplamar el modelo completo con el metodo create ejecuta esa accion para crear un nuevo usuario similar a insert into movies(id, name, ) values (uuid.v4, data.name) y se pasa el objeto.
  const newMovie = await Movies.create({
    id: uuid.v4(),
    name: data.name,
    genre: data.genre,
    duration: data.duration,
    releaseDate: data.releaseDate, //codigo js, para guardar en bdd snake case
  });

  //Para agregar la bdd se utiliza un metodo create de sequelize
  //Se igual al objeto de sequelize create y se pasa el objeto
  // const response = Movies.create(newMovie); //2 alternativa
  return newMovie;
};

//ejecutar crear new movie

/* createMovie({
  name: "Pacifi rim",
  genre: "Action",
  duration: 120,
  releaseDate: "2012/10/30",
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  }); */

//Controlador obtener por id:   obtener por id donde la condicional sea igual al que pasa por parametro
const getMovieById = async (id) => {
  //findOne: Arroja un unico objeto se pasa como parametro un objeto y where que es el condicional
  //existe otro findPrimaryKey se pasa dos parametros
  const data = await Movies.findOne({
    where: {
      //propiedades del objeto Movies: name, genre etc..
      id: id, //id sea igual al que viene por parametro y sepuede especificar otra propiedad
      //ejemplo con snake case
      //releaseDate: '2012/10/20'
    },
  });
  return data;
};

//testearia -> dataValues
/* getMovieById("e9f1eb7a-02bd-4c5b-ad78-fdda197f56ab")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  }); */

//Funcion asincrona Controlador editar pelicula: id: cual pelicula se va amodificar, data: que informacion se va a modificar
const editMovie = async (id, data) => {
  //data: Es similar a req.body ya que esa inf dentro del data y objeto que recibe la propiedad where
  // response es igual esperar que esto se ejecute
  const response = await Movies.update(data, {
    where: {
      id,
    },
  });
  return response;
};

//Editar funcion movie controlador pelicula
/* editMovie("e9f1eb7a-02bd-4c5b-ad78-fdda197f56ab", {
  //propiedad a modificar
  name: "Shreak 2",
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  }); */

//Funcion asincrona controlador eliminar pelicula, recibe id para eliminar movie en especifico
const deleteMovie = async (id) => {
  //Metodo destroy para eliminar en sequelize
  const data = await Movies.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

//exportar controladores
module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
  editMovie,
  deleteMovie,
};
