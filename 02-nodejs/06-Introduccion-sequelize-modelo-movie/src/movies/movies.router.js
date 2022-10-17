const router = require("express").Router();
const moviesServices = require("./movies.services");

//Hacer esto es tedioso colocar en todas las rutas movies para ello es mejor los prefijos.

//Configurar prefijo: /api/v1/movies ->Es importante prque nuestra api tiene que tener versiones
router.get("/", moviesServices.getAllMovies); //Sin ejecutar porque el segundo parametro es un cb que al momento de realizar esta peticion se va a ejecutar.<
router.post("/", moviesServices.postMovie);

router.get("/:id", moviesServices.getMovieById);

router.delete("/:id", moviesServices.deleteMovie);
router.patch("/:id", moviesServices.patchMovie);
router.put("/:id", moviesServices.putMovie);

module.exports = router;
