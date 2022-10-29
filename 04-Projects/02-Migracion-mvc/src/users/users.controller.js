const uuid = require("uuid");

const usersDB = [
  {
    id: "762b7354-7441-40d0-95e9-66756e1e8194",
    first_name: "Aaron",
    last_name: "Chavez",
    age: 22,
  },
  {
    id: "762b7354-7441-40d0-95e9-66756e1e8194",
    first_name: "Aaron",
    last_name: "Chavez",
    age: 22,
  },
];

//Controlador obtener todos los usuarios
const getAllUsers = () => {
  return usersDB;
};

//controlador obtener usuario por id
const getUserById = (id) => {
  const data = usersDB.find((user) => user.id === id);
  return data;
};

//controlador crear nuevo usuario
const createNewUser = (first_name, last_name, age) => {
  const newUser = {
    id: uuid.v4(),
    first_name,
    last_name,
    age,
  };
  usersDB.push(newUser);
  return newUser;
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
};
