const {
  getAllUsers,
  getUserById,
  createNewUser,
} = require("./users.controller.js");

//Servicio obtener todos los usuarios
const getUsers = (req, res) => {
  const data = getAllUsers();
  res.status(200).json(data);
};

//Servicio para obtener un usuario por id
const getUser = (req, res) => {
  const id = req.params.id;

  const data = getUserById(id);

  if (data.length !== 0) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: "INVALID ID" });
  }
};

const createUser = (req, res) => {
  const { first_name, last_name, age } = req.body;

  if (first_name && last_name && age) {
    const data = createNewUser(first_name, last_name, age);
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: "INVALID ID" });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
