const { DataTypes } = require("sequelize");

const db = require("../utils/database");
const Recipes = require("./recipes.models");
const Ingredients = require("./ingredients.models");

const RecipesIngredients = db.define("recipes_ingredients", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  //

  amount: {
    //string para mostrar al usuario
    type: DataTypes.STRING,
    allowNull: false,
  },
  //LLAVES FORANEAS
  recipeId: {
    type: DataTypes.UUID,
    allowNull: false,

    field: "recipe_id",
    references: {
      key: "id",
      model: Recipes,
    },
  },
  ingredientId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "ingredient_id",
    references: {
      key: "id",
      model: Ingredients,
    },
  },
});

module.exports = RecipesIngredients;
