//conexion bdd
const db = require("../utils/database");
//importar libreria
const { DataTypes } = require("sequelize");

//Nombre del modelo empieza en mayus, plural
//instancia users es igual a define y recibe el nombre de la tabla y el objeto contiene los atributos de mi modelo
const Users = db.define("users", {
  //propiedades para acceder desde js
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name", //La manera en la que se va a guardar en la bdd
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, //control unico para logins
    validate: {
      isEmail: true,
    },
  },
  //no mas validaciones porque se va a guaradar una contraseña encriptada
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    //validacion de la LADA: +52 para especificar de que pais es
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "normal", //valor por defecto
  },
  country: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active",
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: "is_verified", //La manera en la que se va a guardar en la bdd
    defaultValue: false, //verificaion de un usuario, se manda correo ala cuenta del usuario para activar el usuario.
  },
});

module.exports = Users;
