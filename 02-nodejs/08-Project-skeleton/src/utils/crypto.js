//importacion bcrypt
const bcrypt = require("bcrypt");

//va a ser igual a la contraseña en texto plano
//plainPassword puede recibir: root
//Funcion encriptar contraseña del usuario cuando se crea o se modifique la contraseña
const hashPassword = (plainPassword) => {
  //encriptar de manera asincrona: recibe como parametro contraseña en texto plano y el nivel de seguridad
  return bcrypt.hashSync(plainPassword, 10);
};

//Funcion comparar contraseña: recibe contraseña en texto plano y contraseña encriptada
const comparePassword = (plainPassword, hashPassword) => {
  //PlainPassword: contraseña que recibimos del login
  //hashPassword: contraseña que tenemos guardada en la bdd

  //compareSync: comparar de manera asincronca
  //Esta utilidad se usa cuando hacemos un login y recibimos la contraseña del usuario y la comparamos con la que tenemos en la DB
  //lo que hace es root es = a $2b$10$iCMT2gEBZTqZ0jv/sKkIj.SCOZ6Wxkl1d1yborrzMwxZi36XgYOVe
  return bcrypt.compareSync(plainPassword, hashPassword);
};

//
/* console.log(hashPassword("root"));
console.log(
  comparePassword(
    "root",
    "$2b$10$iCMT2gEBZTqZ0jv/sKkIj.SCOZ6Wxkl1d1yborrzMwxZi36XgYOVe"
  )
); */

module.exports = {
  hashPassword,
  comparePassword,
};
