const express = require("express");

const app = express();

//habilita el manejo de informacion que viene en formato json las peticiones como POST, GET ETC.
//expressjson ayuda a acceder al req.body
//req.body se usa dependiendo de tipo de dato.
app.use(express.json());

app.post("/", (request, response) => {
  response.status(200).json({
    message: "Haciendo una peticion tipo post",
    verb: request.method,
  });
});

/* BBDD FICTICIA */
/* Formato json acepta arrays or objects */

/* ARREGLO DE OBJETO QUE SON TAREAS O TODOS */
const database = [
  {
    id: 1,
    title: "This is a title",
    is_completed: false,
  },
  {
    id: 2,
    title: "This is a title",
    is_completed: false,
  },
];
//recibe peticiones de tipo get a ruta "todos"
app.get("/todos", (req, res) => {
  //Respuesta de un arreglo de objetos que desde el front se puede consumir o mostrar con el metodo de arreglo map en react.
  res.status(200).json(database);
});

//Creacion de un nuevo usuario en arreglo database
app.post("/todos", (req, res) => {
  /* 
  ---req = request = peticion => Es toda la inf que nosotros requerimos por parte de la peticion que esta haciendo el usuario
  ---res = response = Respuesta => Es la informacion que se va a mandar. 
  */

  //req.body: recibe la informacion como data en react
  const todo = req.body;

  database.push({
    id: todo.id,
    title: todo.title,
    is_completed: false,
  });
  res.status(200).json(todo);
});

/* Marco de referencia para verificar que mi aplicacion funciona */
app.get("/", (request, response) => {
  //request acepta informacion de la peticion
  console.log(request.method);
  //Contiene toda la inf de lo que se pase al cliente o al front
  // response.status(418).send("<h1>Hola</h1>");
  response.status(418).json({ message: "gen 16" });
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
