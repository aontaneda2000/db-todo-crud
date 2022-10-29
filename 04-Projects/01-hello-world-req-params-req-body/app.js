const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "SERVER IS OK" });
});

const database = [
  {
    id: 1,
    title: "Tarea 1",
    completed: true,
  },
];

app.get("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  const data = database.filter((todo) => todo.id === id);

  if (data.length !== 0) {
    //Esto me genera duda para traer la informacion filtrada del usuario. que es data[0]
    res.status(200).json({ dataId: id, data: data[0] });
  } else {
    res.status(404).json({ message: "INVALID ID" });
  }
});

app.get("/todos", (req, res) => {
  res.status(200).json(database);
});
/* 
app.post("/todos", (req, res) => {
  const todo = req.body;

  database.push({
    id: todo.id,
    title: todo.title,
    description: true,
  });
  res.status(200).json(todo);
}); */

// ----------- 2 DA FORMA PETICION POST ---------------------
app.post("/todos", (req, res) => {
  const { id, title } = req.body;

  if (!id && !title) {
    res.status(400).json({ message: "Missing data" });
  } else {
    database.push({
      id,
      title,
      completed: false,
    });
    res.status(200).json(database);
  }
});

app.listen(9000, () => {
  console.log("Server started at 9000");
});
