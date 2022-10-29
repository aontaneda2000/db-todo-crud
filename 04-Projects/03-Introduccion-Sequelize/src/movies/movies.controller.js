const Movies = require("../models/movies.models");

const uuid = require("uuid");

//controlador obtener todas las peliculas
const getAllMovies = async () => {
  const data = await Movies.findAll();
  return data;
};
const createMovie = async (data) => {
  const newMovie = await Movies.create({
    id: uuid.v4(),
    name: data.name,
    duration: data.duration,
    releaseDate: data.releaseDate,
  });
  return newMovie;
};
module.exports = {
  getAllMovies,
  createMovie,
};
