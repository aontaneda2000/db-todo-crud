const { DataTypes } = require("sequelize");

//importacion de modelo types
const Types = require("./types.models");

const db = require("../utils/database");

const Ingredients = db.define(
  "ingredients",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "type_id",

      //llave foranea
      references: {
        key: "id",
        model: Types,
      },
    },

    //En la bdd no se almacenan imagenes si no que recurso en internet puedo acceder a esa imagen: google.com/arroz
    urlImg: {
      type: DataTypes.STRING,
      field: "url_img",
      validate: {
        isUrl: true,
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Ingredients;
