//dependencias

require("dotenv").config();

const config = {
  //Si no existe la variable de entorno se ejecuta el otro
  port: process.env.PORT || 9000,
  //entorno en el que se encuentra mi aplicacion: Desarrollo, testing, produccion
  nodeEnv: process.env.NODE_ENV || "development",
  jwtSecret: process.env.JWT_SECRET,
  db: {
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "root",
    dbName: process.env.DB_NAME, //genere error en caso de que no se haya asignado la bdd
  },
};

module.exports = config;
