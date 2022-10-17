// Funciones asincronas

//dependencias
const uuid = require("uuid"); //crear nuevo usuario

//importacion de models
const Users = require("../models/users.models");
const { hashPassword } = require("../utils/crypto");

//Controlador Obtener todos los usuarios, y no require parametros para mostrar todos los usuarios
const getAllUsers = async () => {
  const data = await Users.findAll();
  return data;
};

//Controlador Obtener id y traer informacion del usuario
const getUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createUser = async (data) => {
  //NO se pasara el role debido que el usuario no puedo añadirse permisos.
  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashPassword(data.password), //Generar contraseña encriptada
    phone: data.phone,
    birthday: data.birthday,
    gender: data.gender,
    country: data.country,
  });
  return newUser;
};

//Funcion asincrona
//data es un objeto va a contener todo lo que se va a modificar
//Controlador sirve para el put y patch
const updateUser = async (id, data) => {
  const result = await Users.update(data, {
    where: {
      id,
    },
  });
  return result;
};

const deleteUser = async (id) => {
  //await lo que va a ejecutar despues va a esperar a que eso retorne un resultado
  const data = await Users.destroy({
    where: {
      id,
    },
  });
  return data;
};

//Un servidor contiene la API
//Otro servidor contiene la BASE DE DATOS

//Controlador Dependiendo del correo electronico se va a retornar ese usuario completo, para poder acceder a los datos del usuario, la contraseña que tiene guardada  encriptada en la bdd
const getUserByEmail = async (email) => {
  //select * from users where email
  const data = await Users.findOne({
    //condicional
    where: {
      email: email,
    },
  });
  return data;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
};
