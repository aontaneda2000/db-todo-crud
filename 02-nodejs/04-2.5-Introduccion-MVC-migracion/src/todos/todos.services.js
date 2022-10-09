// 1 forma se utiliza ya que son tres controladores si no guardar en una variable

const { getAllTodos, getTodoById, createTodo } = require("./todos.controllers");

//Funciones determinan que son servicios y se verifica por el request y response
const getTodos = (req, res) => {
  //data va a ser igual a lo que venga en el controlador es decir al array de objects
  const data = getAllTodos();
  res.status(200).json(data);
};

const getOneTodo = (req, res) => {
  //recibir inf
  const id = req.params.id;
  const data = getTodoById(id);

  //si existe es decir que no sea un valor undefined = falsy
  if (data) {
    res.status(200).json(data);
  } else {
    //404 todo que no existe
    res.status(404).json({ id: id, message: "invalid id" });
  }
};

const createNewTodo = (req, res) => {
  const { title } = req.body;

  //title si no es un valor vacio por lo cual si existe entra en el if
  if (title) {
    const data = createTodo(title);
    //201 se crea algo exitoso en la bdd
    res.status(201).json(data);
  } else {
    res.status(400).json({ message: "Missing data" });
  }
};

module.exports = {
  getTodos,
  getOneTodo,
  createNewTodo,
};
