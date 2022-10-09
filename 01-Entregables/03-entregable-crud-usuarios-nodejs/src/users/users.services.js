const { getUsersDB } = require("./users.controller");

const getUsers = (req, res) => {
  const data = getUsersDB();

  res.status(200).json(data);
};

module.exports = {
  getUsers,
};
