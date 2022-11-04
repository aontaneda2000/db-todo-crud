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

const getMovieById = async (id) => {
  const data = Movies.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const deleteMovie = async (id) => {
  const data = Movies.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

const editMovie = async (id, data) => {
  const dataMovie = Movies.update(data, {
    where: {
      id: id,
    },
  });
  return dataMovie;
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
  deleteMovie,
  editMovie,
};
