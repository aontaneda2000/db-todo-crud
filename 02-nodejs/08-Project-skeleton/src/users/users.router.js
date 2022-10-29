const router = require("express").Router();

//importacion pasport
const passport = require("passport");
//importacion middleware personalizado se pasa en la ruta en el medio porque tiene que estar autenticado primero
const adminValidate = require("../middlewares/role.middleware");

const userServices = require("./users.services");

//llamar middle y parentesis para ejecutarlo
require("../middlewares/auth.middleware")(passport);

//rutas raiz, protegida
router.get("/", userServices.getAllUsers);

/*
Ejemplo
 router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  userServices.getAllUsers
); */

//rutas dinamicas por id
//v1
/* router.patch("/:id", userServices.getAllUsers);
router.delete('/:id', userServices.getAllUsers)
router.put("/:id", userServices.getAllUsers);
 */

//======Servicio registerUser ira en la ruta /auth/register========

//orden para no generar error
//1. ruta de informacion propia del usuario loggeado, ruta no recibe el id del usuario, middleware proteger ruta con passport
router
  .route("/me")
  .get(passport.authenticate("jwt", { session: false }), userServices.getMyUser)
  .patch(
    passport.authenticate("jwt", { session: false }),
    userServices.patchMyUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    userServices.deleteMyUser
  );

//2. v2: ruta en especifico para que sea dinamica para distintas peticiones: /api/v1/users/:id
router
  .route("/:id")
  .get(userServices.getUserById)
  .patch(
    //proteger rutas para que solo admin pueda eliminar
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.patchUser
  ) //rol administrador
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.deleteUser
  ); //rol administrador

module.exports = router;
