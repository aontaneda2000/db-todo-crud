//importar datatypes
const { DataTypes } = require("sequelize");

const db = require("../utils/database"); //importar instancia de conexion de bdd

//Modelo completo en mayus
//"define" crea la tabla y recibe como parametro de cual sera el nombre del modelo: "nombre de la tabla que se guarda en db" y un objjeto: configuraciones de la bdd
const Movies = db.define("movies", {
  //prpiedades y definir que columnas existen
  id: {
    primaryKey: true,
    type: DataTypes.UUID, //tipo de dato
    allowNull: false, //Siempre que se pase allownull tiene q tener primary key
  },

  name: {
    type: DataTypes.STRING(), //por defecto long 255,
    allowNull: false,
  },

  genre: {
    type: DataTypes.STRING(), //por defecto long 255,
    allowNull: false,
  },

  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  releaseDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    // FIELD: COMO SE VA A LLAMAR y almacenar ESA COLUMNA EN MI BDD
    field: "release_date",
  },
});

module.exports = Movies;
