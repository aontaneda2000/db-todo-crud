const usersControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  usersControllers
    //getAllUsers es una promesa -> retorna un respuesta exitosa o erronea
    .getAllUsers()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;

  usersControllers
    .getUserById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

//controlador crear usuario
const registerUser = (req, res) => {
  //no se recibe id y role
  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    birthday,
    gender,
    country,
  } = req.body;

  //1er manejo de errores: validacion que recibe los datos que son obligatorios y si no se envia un error
  if (firstName && lastName && email && password && phone && birthday) {
    //ejecutar controlador
    usersControllers
      .createUser({
        firstName,
        lastName,
        email,
        password,
        phone,
        birthday,
        gender,
        country,
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    //error cuando no mandan todos los datos necesarios
    res.status(400).json({
      message: "All fields must be completed ",
      fields: {
        firstName: "string",
        lastName: "string",
        email: "example@example.com",
        password: "string",
        phone: "+213123122",
        birthday: "YYYY/MM/DD",
      },
    });
  }
};

const patchUser = (req, res) => {
  const id = req.params.id;

  //Propiedades que no se permitira al usario que modifique
  const { firstName, lastName, phone, birthday, gender, country } = req.body; //Si el usuario desde el body esta mandando informacion esta se recibira pero solo la que esta destructurada
  //ejecutar controlador
  usersControllers
    .updateUser(id, {
      firstName,
      lastName,
      phone,
      birthday,
      gender,
      country,
    })
    .then((data) => {
      //condicional si elusuario no existe
      if (data[0]) {
        res
          .status(200)
          .json({ message: `User width ${id} , edite successfully` });
      } else {
        res.status(400).json({ message: "invalid id" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  usersControllers
    .deleteUser(id)
    .then((data) => {
      //Genera un numero de los usuarios que se elimino
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "invalid id" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

//my user services, acciones sobre mi usuario
const getMyUser = (req, res) => {
  const id = req.user.id; //req.user = contiene la informaciondel token desencriptado

  usersControllers
    .getUserById(id)
    .then((data) => {
      //no es necesario pasar error ya que el middleware verifica que el usuario existe
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });

  // res.status(200).json(data);
};

const patchMyUser = (req, res) => {
  const id = req.user.id;
  const data = req.body;
  usersControllers
    .updateUser(id, data)
    .then((data) => {
      res.status(200).json({ message: `Edited succesfully ${id}`, data: data });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteMyUser = (req, res) => {
  const id = req.user.id;

  usersControllers
    .deleteUser(id)
    .then(() => {
      res.status(200).json();
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  patchUser,
  registerUser,
  deleteUser,
  getMyUser,
  patchMyUser,
  deleteMyUser,
};
