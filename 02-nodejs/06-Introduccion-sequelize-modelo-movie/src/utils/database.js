const { Sequelize } = require("sequelize");
//importar config para terminar configuracion
const config = require("../config");

//Almacena bbdd: Constante va a ser igual a una instancia y estan configurado con las variables de entorno
const db = new Sequelize({
  dialect: "postgres", // tipos de bd
  host: config.db.host, //|| localhost -> remplazado por Variables de entorno porque es peligroso con localhost,
  username: config.db.username,
  password: config.db.password,
  database: config.db.name,
}); // new Sequelize: Requiere configuraciones

module.exports = db;
