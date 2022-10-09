const { getUsersDB, getOneUser, createNewUser } = require("./users.controller");

const getUsers = (req, res) => {
  const data = getUsersDB();

  res.status(200).json(data);
};

const getUser = (req, res) => {
  const id = req.params.id;

  const data = getOneUser(id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ id: id, message: "Missing data" });
  }
};

const createUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;

  if (first_name && last_name && email && password && birthday) {
    const data = createNewUser(
      first_name,
      last_name,
      email,
      password,
      birthday
    );
    res.status(201).json(data);
  } else {
    res.status(400).json({ message: "Missing data" });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
