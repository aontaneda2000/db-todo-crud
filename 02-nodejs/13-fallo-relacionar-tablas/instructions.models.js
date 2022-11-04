const { DataTypes } = require("sequelize");

const db = require("../utils/database");
const Recipes = require("./recipes.models");

const Instructions = db.define("instructions", {
  //uuid porque la cantidad de isntrucciones en total que van exisitr dentro de mi app va a hacer muy dificil de contabilizar si utilizamos numeros serializados poruqe?
  // 20 recetas cada uno tiene 10 instrucciones  entonces serian 200 instrucciones
  id: {
    //UUID PARA QUE SEA DINAMICO
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  step: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  //manejar en singular para decirle a sequelize que estamos manejando una llave foranea
  recipeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "recipe_id",
    references: {
      key: "id",
      model: Recipes,
    },
  },
});

module.exports = Instructions;
