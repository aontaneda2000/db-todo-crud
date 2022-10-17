//Contiene las rutas de autorizacion y autenticacion

//login
//register
//recovery
//verified users -> entra al enlace y queda

const router = require("express").Router();
//importacion de servicios ruta login
const authServices = require("./auth.services");
//importacion de servicios ruta users

const { registerUser } = require("../users/users.services");

//ruta para registrar un usuario prefijo en app /api/v1/auth
router.post("/register", registerUser);

//autenticacion: token
router.post("/login", authServices.login);

module.exports = router;
