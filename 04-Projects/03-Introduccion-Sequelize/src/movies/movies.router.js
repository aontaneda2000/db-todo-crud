const router = require("express").Router();

const moviesServices = require("./movies.services");

router.get("/", moviesServices.getAllMovies);
router.post("/", moviesServices.postMovie);

module.exports = router;
