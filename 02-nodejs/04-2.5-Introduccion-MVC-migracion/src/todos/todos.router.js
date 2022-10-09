// /todos  [POST, GET]
// /todos:id [GET]

const router = require("express").Router();

//Importacion de services  y Se guarda en una variable para acceder a sus metodos.
const todoServices = require("./todos.services");

router.get("/todos", todoServices.getTodos);

router.post("/todos", todoServices.createNewTodo);

router.get("/todos/:id", todoServices.getOneTodo);

// Simular a un export por default y no se exporta como un objeto porque cuando se lo importa tocaria acceder a sus metodos.
module.exports = router;
