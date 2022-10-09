const router = require("express").Router();

/* RUTAS */
const todosServices = require("./users.services");

//Obtiene la conexion a la bd ficticia
router.get("/users", todosServices.getUsers);

//Crea un nuevo registro
router.post("/users", todosServices.createUser);

//obtener un registro de un usuario mediante id
router.get("/users/:id", todosServices.getUser);

module.exports = router;
