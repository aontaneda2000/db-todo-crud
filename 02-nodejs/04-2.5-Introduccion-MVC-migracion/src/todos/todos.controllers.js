//importar libreria uuid para utilizar en f create todo en el objeto

//uuid: Crea parametros de la hora de creacion minutos, seungos, por lo cual es muy poco probable que se repita.
const uuid = require("uuid");

const todoDB = [
  {
    id: "762b7354-7441-40d0-95e9-66756e1e8194",
    title: "this is a title",
    is_completed: false,
  },
  {
    id: "d68707b7-0b80-41d9-a2e6-40c51c72bf5d",
    title: "this is a title",
    is_completed: false,
  },
];

//tres controladores

//Exportacion de bbdd para luego migrar a dbeaver
const getAllTodos = () => {
  return todoDB;
};

//Recibe como parametro un id porque se ejecuta el servicio de "req.params.id"
const getTodoById = (id) => {
  //Metodo de arreglo Find sirve para acceder a el y poder manipularlo y retorna el primer objeto que cumpla esta condicional.
  const data = todoDB.find((task) => task.id === id);

  //Si el task.id es igual id que pasa por parametro entonces que retorne ese objeto.
  return data;
};

// Pasa un id por parametro y verifica si encuentra el id del arreglo todoDB
console.log(getTodoById(2)); //imprime en consola

/* Nuevo objeto porque se agg al array de objects */
const createTodo = (title) => {
  const newTodo = {
    //Al tener el mismo nombre el parametro y el objeto se coloca title
    id: uuid.v4(), //No se realiza configuraciones  y con uuid v4 no nos preocupamos por tener valores unicos
    title, //obj literales
    // Esta por defecto en false porque cuando se crea una tarea por defecto no se ha hecho
    is_completed: false,
  };

  todoDB.push(newTodo);
  return newTodo;
};

/* Genera una nueva tarea o "todo" */
console.log(createTodo("Esta es una prueba"));

console.log(uuid.v4());
// id serializado

// Se utiliza Vanilla JS sin librerias.

//expportar controladores para importar desde un require
module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
};
