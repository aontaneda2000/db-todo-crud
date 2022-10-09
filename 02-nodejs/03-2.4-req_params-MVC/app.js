const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server OK!" });
});

const database = [
  {
    id: 1,
    title: "Un todo",
    is_completed: false,
  },
];

app.get("/todos", (req, res) => {
  res.status(200).json(database);
});

//mostrar informacion dinamica con ":id" y puede ser un numero o string
//guardar ese nombre para acceder a el ":id"
app.get("/todos/:id", (req, res) => {
  //params almacena la informacion con respecto a parametros de mi url en este caso ":id"

  //Ejemplo de class center utiliza uuid para que otras persona no puedan saber cuantos grupos existen
  //talvez no sirve para CEO
  const id = Number(req.params.id); //Se mostrara este valor y para mostrar informacion personalizada hay que connvertirlo a numero.

  //NO interesa mostrar lo que recibo si no esa inf utilizarla para hacer las respuestas mas personalizadas COMO >

  //FILTRO DE: retorna un arreglo de todos los valores que retornen una commparativa
  const data = database.filter((todo) => todo.id === id);

  //data[0] genera un arreglo y no es recomendable debido a que el front tiene que colocar data en la poosicion 1..
  //como gestionar un error de un id que no existe en la bdd y para ello se neceista logica de JS >
  if (data.length !== 0) {
    res.status(200).json({ my_id: id, data: data[0] });
    //pasar por thunder client: %20 genera un espacio en EL RESPONSE
  } else {
    res.status(404).json({ message: "ID INVALID" });
  }
});

// request : peticion
// response : respuesta
app.post("/todos", (req, res) => {
  //todo => destructurar porque req.body es un objeto
  const { id, title } = req.body;

  /* valores falsy---------------------
  null
  undefined
  ''
  0
  
  */

  /* valores truthy
  'asdasda'
  1
  {}
  []
  true
  --------------------------------
  Verificar si algo esta definido para realizar una accion.
  */

  //Condicional  conviertelo de  true a false:
  //Si no existen estas dos propiedades entrara al if y mandara ese mensaje en thunder client

  //El servidor no permite recibir dos peticiones de tipo POST
  if (!id || !title) {
    res.status(400).json({ message: "Missing data" });
  } else {
    database.push({
      id,
      title,
      is_completed: false,
    });

    res.status(200).json(database);
  }
});

//otra forma de verificar si vienen definidos las propiedades
/* 
if (id && title) {
  res.status(200).json({ message: "Missing data" });
} else {
  database.push({
    id,
    title,
    is_completed,
  });
  res.status(200).json(database);
} */
app.listen(8000, () => {
  console.log("Server started at 8000");
});

//como funciona internamente un metodo de arreglo: filter
