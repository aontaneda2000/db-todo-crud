const uuid = require("uuid");

const usersDB = [
  {
    id: "a3637027-c84e-4883-adc9-1bd823ed111a",
    first_name: "Aaron",
    last_name: "Chavez",
    email: "aron_ch38@outlok.com",
    password: "goku1234",
    birthday: "2000/07/03",
  },
  {
    id: "7b3440e7-4401-4fe0-b206-28e93e1169ba",
    first_name: "Steven",
    last_name: "Chavez",
    email: "aron_ch38@outlok.com",
    password: "goku1234",
    birthday: "2000/07/03",
  },
];

//obtiene bd
const getUsersDB = () => {
  return usersDB;
};

//obtiene id del usuario
const getOneUser = (id) => {
  const data = usersDB.find((user) => user.id == id);
  return data;
};

//obtiene un nuevo usuario
const createNewUser = (first_name, last_name, email, password, birthday) => {
  const newUser = {
    id: uuid.v4(),
    first_name,
    last_name,
    email,
    password,
    birthday,
  };

  usersDB.push(newUser);
  return newUser;
};
console.log(
  createNewUser(
    "first_name",
    "first_name",
    "last_name",
    "email",
    "password",
    "birthday"
  )
);

module.exports = {
  getUsersDB,
  getOneUser,
  createNewUser,
};
