const { Sequelize } = require("sequelize");
const config = require("../config");

const db = new Sequelize({
  //Variables de entorno
  dialect: "postgres",
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
  database: config.db.dbName,
});

module.exports = db;
