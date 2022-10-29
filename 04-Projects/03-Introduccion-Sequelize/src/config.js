require("dotenv").config();

const config = {
  //Si no existe el puerto que esta en el archivo .env ejecutara el otro puerto y asi con todo.
  port: process.env.PORT || 9000,
  nodeEnv: process.env.NODE_ENV || "development",
  db: {
    // port: process.env.DB_PORT || "5432",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "root",
    host: process.env.DB_PORT || "localhost",
    name: process.env.DB_NAME || "04-3.1-Introduccion-sequelize",
  },
};

module.exports = config;
